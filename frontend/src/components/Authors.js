import AuthorsEl from './styles/Authors.style';
import Navbar from './Navbar';
import denitsaImg from '../assets/images/denitsa-rashkova.png';
import zdravkoImg from '../assets/images/zdravko-hristov.png';

export default function Authors() {
	const navLinks = [{ text: 'Начало', to: '/', value: 'home-page' }];

	const AuthorBox = ({ img, name, info, link }) => {
		return (
			<a className='author-card' href={link} target='_blank'>
				<div className='dots'>
					<div className='dot'></div>
					<div className='dot'></div>
					<div className='dot'></div>
				</div>
				<div className='up-part'>
					<div className='img-holder'>
						<img src={img} alt={name} />
					</div>
					<p className='name'>{name}</p>
				</div>
				<div className='info'>{info}</div>
			</a>
		);
	};

	return (
		<AuthorsEl>
			<Navbar links={navLinks} outCount={1} />
			<article className='authors-wrapper container'>
				<AuthorBox
					img={denitsaImg}
					name='Деница Рашкова'
					info='дизайнер, back-end разработчик, отговорник за Laravel логиката и базите данни'
					link='https://github.com/denitsa-r'
				/>{' '}
				<AuthorBox
					img={zdravkoImg}
					name='Здравко Христов'
					info='front-end разработчик, отговорник за React компонентите и анимациите'
					link='https://github.com/ZdravkoHr'
				/>
			</article>
		</AuthorsEl>
	);
}
