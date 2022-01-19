import stain from '../assets/svgs/faq-home.svg';
import arrow from '../assets/svgs/arrow.svg';
export default function FaqItem({ number, question, answer }) {
	return (
		<div className='item'>
			<div className='top-row'>
				<div className='number-wrapper'>
					<img src={stain} alt='stain' />
					<span className='number'>{number}</span>
				</div>
				<p className='question'>{question}</p>
			</div>
			<div className='bottom-row'>
				<div className='arrow-holder'>
					<img class='arrow-img' src={arrow} alt='arrow' />
				</div>

				<p className='answer'>{answer}</p>
			</div>
		</div>
	);
}
