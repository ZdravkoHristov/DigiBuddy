import { useState, useEffect } from 'react';
import uuid from 'react-uuid';
export default function SingleAnswerType({ type }) {
	const [answersCount, setAnswersCount] = useState(0);
	const [answersInfo, setAnswersInfo] = useState([]);

	useEffect(() => {
		const prevValue = answersInfo.length;
		if (answersCount < prevValue) {
			const cutArray = answersInfo.slice(0, answersCount);
			setAnswersInfo(cutArray);
			return;
		}

		const newArray = [...answersInfo];

		for (let i = prevValue; i < answersCount; i++) {
			newArray.push({
				id: uuid(),
				value: '',
				isCorrect: false,
			});
		}

		setAnswersInfo(newArray);
	}, [answersCount]);

	const radioUpdate = (e, index) => {
		setAnswersInfo(info => {
			return info.map((answerInfo, i) => {
				return { ...answerInfo, isCorrect: index === i };
			});
		});
	};

	const checkboxUpdate = e => {
		setAnswersInfo(info => {
			return info.map((answerInfo, i) => {
				if (i === e.target.value) {
					return { ...answerInfo, isCorrect: true };
				}

				return answerInfo;
			});
		});
	};

	const handleMark = (e, index) => {
		if (type === 'singleAnswer') radioUpdate();
		else checkboxUpdate();
	};

	return (
		<>
			{' '}
			<div>
				<label htmlFor='count'>Брой отговори:</label>

				<input
					type='number'
					min='0'
					id='count'
					value={answersCount}
					onChange={e => setAnswersCount(+e.target.value)}
				/>
			</div>
			{answersCount > 0 && <h3>Отговори: </h3>}
			<div className='answers'>
				{answersInfo.map((info, index) => {
					return (
						<div className='answer' key={info.id}>
							<input
								name='answer'
								type={type === 'singleAnswer' ? 'radio' : 'checkbox'}
								id={index}
								value={index}
								onChange={e => handleMark(e, index)}
							/>
							<input
								type='text'
								placeholder='Въведете възможен отговор'
								value={info.value}
								onChange={e =>
									setAnswersInfo(info => {
										const copy = [...info];
										copy[index].value = e.target.value;
										return copy;
									})
								}
							/>
						</div>
					);
				})}
				<span
					className='add-answer'
					onClick={() => {
						setAnswersCount(answersCount + 1);
					}}
				>
					<i className='fas fa-plus icon'></i> Добавете отговор
				</span>
			</div>
		</>
	);
}
