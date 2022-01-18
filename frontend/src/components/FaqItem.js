export default function FaqItem({ number, question, answer }) {
	return (
		<div className='item'>
			<div className='illustrations'></div>
			<div className='text'>
				<p className='question'>{question}</p>
				<p className='answer'>{answer}</p>
			</div>
		</div>
	);
}
