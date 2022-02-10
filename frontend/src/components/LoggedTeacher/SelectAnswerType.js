import { useState, useEffect } from 'react';
import uuid from 'react-uuid';
export default function SingleAnswerType() {
	const [answersInfo, setAnswersInfo] = useState([]);
	const [answersCount, setAnswersCount] = useState(1);

	useEffect(() => {
		const prevValue = answersInfo.length;
		console.log(prevValue, answersCount);
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

	const handleMark = (e, index) => {
		setAnswersInfo(info => {
			return info.map((answerInfo, i) => {
				if (i === e.target.value) {
					return { ...answerInfo, isCorrect: true };
				}

				return answerInfo;
			});
		});
	};

	return (
		<>
			<h3>Отговори: </h3>
			<div className='answers'>
				{answersInfo.map((info, index) => {
					return (
						<div className='answer' key={info.id}>
							<input
								name='answer'
								type='checkbox'
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
