import a from '../assets/svgs/faq-home.svg';
export default function FaqItem({ number, question, answer }) {
	return (
		<div className='item'>
			<div className='illustrations'>
				<div className='number-wrapper'>
					<img src={a} alt='' />
					<span className='number'>{number}</span>
				</div>
			</div>
			<div className='text'>
				<p className='question'>{question}</p>
				<p className='answer'>{answer}</p>
			</div>
		</div>
	);
}
