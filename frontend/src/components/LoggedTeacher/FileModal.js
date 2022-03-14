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
export default function FileModal() {
	const dispatch = useDispatch();
	const { uiInfo } = useSelector(loggedUiSelector);
    const {assignments} = useSelector(teacherSelector);
	const [answers, setAnswers] = useState([]);
    const [assignmentCount, setAssignmentCount] = useState(0);
    const [assignmentsInfo, setAssignmentsInfo] = useState([]);

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
                assignmentId: 'none',
			});
		}

		setAssignmentsInfo(newArray);
    }, [assignmentCount])

	// const submitHandler = async (e) => {
	// 	e.preventDefault();
	// 	const type = uiInfo.customType;
	// 	let res;

	// 	if(type === 'choose') {
	// 		const filteredAnswers = answers.filter(({value}) => value !== '');
	// 		additionalData = {...filteredAnswers, n_answers:filteredAnswers.length}

	// 		if (uiInfo.reviewingCustomAssignment) {
	// 			res = await axios.put(`${process.env.REACT_APP_BACKEND}/api/teacher/${id}/task/${assignmentInfo.id}/${type}/update`, {...assignmentInfo, ...additionalData}) 
	// 		} else {
	// 			res = await axios.post(`${process.env.REACT_APP_BACKEND}/api/teacher/${id}/tasks/${type}/insert`, {...assignmentInfo, ...additionalData}) 
	// 		}
	// 	} else if (type === 'open') {
	// 		if (uiInfo.reviewingCustomAssignment) {
	// 			res = await axios.put(`${process.env.REACT_APP_BACKEND}/api/teacher/${id}/task/${assignmentInfo.id}/${type}/update`, {...assignmentInfo, answer: openAnswer}) 
	// 		} else {
	// 			res = await axios.post(`${process.env.REACT_APP_BACKEND}/api/teacher/${id}/tasks/${type}/insert`, {...assignmentInfo, answer: openAnswer});
	// 		}
	// 	}

	// 	setErrors({});
		
	// 	if(res.data.status === 200){
	// 		console.log(res.data.info);
	// 	}
	// 	if(res.data.status === 400){
	// 		setErrors(res.data.errors);
	// 	}
	// }

    const AssignmentEntry = ({index}) => {
        const typeValue = assignmentsInfo[index].type;
        return<> <div className='input-group'>
                <label htmlFor="type">Тип: </label>

                <select id="type" defaultValue='default' value={typeValue} onChange={e => {
                    setAssignmentsInfo(oldInfo => {
                        console.log([...oldInfo.slice(0, index), {...oldInfo[index], type: e.target.value}, ...oldInfo.slice(index + 1)])
                        return [...oldInfo.slice(0, index), {...oldInfo[index], type: e.target.value}, ...oldInfo.slice(index + 1)]
                    })
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
    
                    <select id="assignment" defaultValue='default' value={assignmentsInfo[index].type} onChange={e => {
                        setAssignmentsInfo(oldInfo => {
                            console.log([...oldInfo.slice(0, index), {...oldInfo[index], type: e.target.value}, ...oldInfo.slice(index + 1)])
                            return [...oldInfo.slice(0, index), {...oldInfo[index], type: e.target.value}, ...oldInfo.slice(index + 1)]
                        })
                    }}>
                    <option value='default' disabled hidden >
                            Изберете задача
                        </option>
                        {Object.entries(uiInfo.assignmentTypes).map(([type, typeLabel]) => {
                            return <option value={type} key={type}>{typeLabel}</option>
                        })}    
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
				<form>
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