import FaqEl from './styles/Faq.style';
import FaqItem from './FaqItem';

export default function Faq() {
	return (
		<FaqEl id='faq' className='container'>
			<h2 className='heading-l'>Често задавани въпроси: </h2>

			<article className='questions'>
				<FaqItem
					question='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus tempore voluptatum nihil. Quidem, consequatur voluptas?'
					answer='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus tempore voluptatum nihil. Quidem, consequatur voluptas?'
				/>
			</article>
		</FaqEl>
	);
}
