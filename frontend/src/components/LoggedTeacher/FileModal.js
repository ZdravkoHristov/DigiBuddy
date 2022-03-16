import { useState, useEffect, useMemo } from 'react';
import uuid from 'react-uuid';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { loggedUiSelector, teacherSelector } from '../../store/store';
import { setUiInfo } from '../../store/slices/loggedUiSlice';
import axios from 'axios';
import Modal from '../Modal';
import Button from '../Button';
import SelectAnswerType from './SelectAnswerType';
import OpenAnswerType from './OpenAnswerType';
import { setTeacher } from '../../store/slices/teacherSlice';
import Assignments from './Assignments';
export default function FileModal() {
	const dispatch = useDispatch();
	const { uiInfo } = useSelector(loggedUiSelector);
    const {assignments} = useSelector(teacherSelector).info;
	const [answers, setAnswers] = useState([]);
    const [assignmentCount, setAssignmentCount] = useState(0);
    const [assignmentsInfo, setAssignmentsInfo] = useState([]);
	const [shitName, setShitName] = useState('');

    console.log(assignments)
	
	const {id} = useParams();
	const [errors, setErrors] = useState({});
	const [openAnswer, setOpenAnswer] = useState('');

	let additionalData = {};

    useEffect(() => {
        if (!assignmentCount) return;
		const prevValue = assignmentsInfo.length;

		if (prevValue === assignmentCount) return;
		if (assignmentCount < prevValue) {
			const cutArray = assignmentsInfo.slice(0, assignmentCount);
			setAssignmentsInfo(cutArray);
			return;
		}

		const newArray = [...assignmentsInfo];

		for (let i = prevValue; i < assignmentCount; i++) {
			newArray.push({
				id: uuid(),
				type: 'default',
                task_id: 'none',
			});
		}

		setAssignmentsInfo(newArray);
    }, [assignmentCount])

	const submitHandler = async (e) => {
		e.preventDefault();
		const type = uiInfo.customType;

		// console.log(uiInfo.targetFolderId);

		const res = await axios.post(`${process.env.REACT_APP_BACKEND}/api/teacher/${id}/folder/${uiInfo.targetFolderId}/file/insert`, {name: shitName, ...assignmentsInfo, n_contents: assignmentsInfo.length});

		// console.log(res.data.info);
		
		console.log('FGHJKL',res.data.info);

		setErrors({});
		
		if(res.data.status === 200){
			console.log(res.data.info);
		}
		if(res.data.status === 400){
			setErrors(res.data.errors);
		}
	}

	const updateAssignmentsInfo = (index, newInfo) => {
		setAssignmentsInfo(oldInfo => {
			return [...oldInfo.slice(0, index), {...oldInfo[index], ...newInfo}, ...oldInfo.slice(index + 1)]
		});
	}

    const AssignmentEntry = ({index}) => {
		const typeValue = assignmentsInfo[index].type;
        return<> <div className='input-group'>
	            <label htmlFor="type">Тип: </label>

                <select id="type" defaultValue='default' value={typeValue} onChange={e => {
					updateAssignmentsInfo(index, {type: e.target.value});
                }}>
                <option value='default' disabled hidden >
						Изберете тип
					</option>
                    {Object.entries(uiInfo.assignmentTypes).map(([type, typeLabel]) => {
                        return <option value={type} key={type}>{typeLabel}</option>
                    })}    
                </select>
            </div>
                {
                    typeValue !== 'default' &&  <div className='input-group'>
                    <label htmlFor="assignment">Задача: </label>
    
                    <select id="assignment" defaultValue='default' value={assignmentsInfo[index].task_id} onChange={e => {
                        updateAssignmentsInfo(index, {task_id: e.target.value});
                    }}>
                    <option value='default' disabled hidden >
                            Изберете задача
                        </option>
						{
							assignments.filter(({type}) => type === typeValue).map(item => {
								return <option value={item.id} key={item.id}>{item.name}</option>
							})
						}
                    </select>
                </div>

                }
           
            </>
    }

	

	return (
		<div>
			<Modal
				onClose={() => {
					dispatch(
						setUiInfo({
							showFileModal: false,
						})
					);
				}}
			>
                <h2>Работен лист</h2>
                <h4 >Папка: {uiInfo.targetFolderName}</h4>
				<form onSubmit={submitHandler}>
				<label htmlFor="type">Име: </label>
				<input type='text' placeholder='Въведете име на работният лист' value={shitName} onChange={e => setShitName(e.target.value)} />
                <p className='answers-count'>
				Брой задачи:{' '}
				<input
					type='number'
					min='0'
					value={assignmentCount}
					onChange={e => setAssignmentCount(e.target.value)}
				/>
			</p>
                <div className='content'>
                        {
                           assignmentsInfo.map((info, index) => {
                               return <AssignmentEntry index={index}/>
                           })
                        }
                    </div>
					<div className='button-holder'>
						<Button type='submit'>Готово</Button>
					</div>
				</form>

			</Modal>
		</div>
	);
}