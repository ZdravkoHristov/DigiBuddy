import FaqEl from './styles/Faq.style';
import FaqItem from './FaqItem';

export default function Faq(props) {
	return (
		<FaqEl id='faq' {...props}>
			<div className='container'>
				<h2 className='heading-l'>Често задавани въпроси: </h2>

				<article className='questions'>
					<FaqItem
						number='1'
						question='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus tempore voluptatum nihil. Quidem, consequatur voluptas?'
						answer='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus tempore voluptatum nihil. Quidem, consequatur voluptas?'
					/>
					<FaqItem
						number='2'
						question='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus tempore voluptatum nihil. Quidem, consequatur voluptas?'
						answer='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus tempore voluptatum nihil. Quidem, consequatur voluptas?'
					/>
					<FaqItem
						number='3'
						question='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus tempore voluptatum nihil. Quidem, consequatur voluptas?'
						answer='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus tempore voluptatum nihil. Quidem, consequatur voluptas?'
					/>
				</article>
			</div>
		</FaqEl>
	);
}
