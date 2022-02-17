import { useState, useEffect } from 'react';
import uuid from 'react-uuid';
export default function SingleAnswerType({ initialAnswers }) {
	const [answersInfo, setAnswersInfo] = useState([]);
	const [answersCount, setAnswersCount] = useState(0);

	useEffect(() => {
		setAnswersInfo(initialAnswers.map(answerInfo => ({ ...answerInfo })));
	}, [initialAnswers]);

	useEffect(() => {
		setAnswersCount(answersInfo.length);
	}, [answersInfo]);

	useEffect(() => {
		if (!answersCount) return;
		const prevValue = answersInfo.length;

		if (prevValue === answersCount) return;
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
				if (i === +e.target.name) {
					return { ...answerInfo, isCorrect: e.target.checked };
				}

				return answerInfo;
			});
		});
	};

	// const changeCountHandler = e => {
	// 	const newValue = +e.target.value;
	// 	if (newValue < answersCount) {
	// 		setAnswersInfo(info => {
	// 			return info.slice(0, newValue);
	// 		});

	// 		return;
	// 	}

	// 	for (let i = answersCount; i < newValue; i++) {
	// 		setAnswersInfo([...answersInfo, {}])
	// 	}
	// };

	return (
		<>
			<p className='answers-count'>
				Брой отговори:{' '}
				<input
					type='number'
					min='0'
					value={answersCount}
					onChange={e => setAnswersCount(e.target.value)}
				/>
			</p>
			<h3>Отговори: </h3>
			<div className='answers'>
				{answersInfo.map((info, index) => {
					return (
						<div className='answer' key={info.id}>
							<input
								name='answer'
								type='checkbox'
								id={index}
								name={index}
								onChange={e => handleMark(e, index)}
								checked={info.isCorrect}
							/>
							<input
								type='text'
								placeholder='Въведете възможен отговор'
								value={info.value}
								onChange={e =>
									setAnswersInfo(info => {
										console.log(info);
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
