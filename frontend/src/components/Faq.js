import FaqEl from './styles/Faq.style';
import FaqItem from './FaqItem';

export default function Faq() {
	return (
		<FaqEl id='faq'>
			<div className='container'>
				<h2 className='heading-l'>Често задавани въпроси: </h2>

				<article className='questions'>
					<FaqItem
						number='1'
						question='Как се организират файловете?'
						answer='Създадените от учителите задачи могат да се съкращават в папки под формата на файлове.'
					/>
					<FaqItem
						number='2'
						question='Как мога да се присъединя към клас?'
						answer='Учителите изпращат код за присъединявяне в клас на учениците си.' />
					<FaqItem
						number='3'
						question='Възможно ли е един и същ тест да бъде използван повече от веднъж?'
						answer='Всички тестове се запазват в "Колекции" и могат да бъдат възлагани на различни ученици многократно.'
					/>
				</article>
			</div>
		</FaqEl>
	);
}
