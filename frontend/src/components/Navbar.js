import NavbarEl from './styles/Navbar.style';
import logo from '../assets/logo/logo-short.svg';

export default function Navbar({ active, setActive }) {
	const getActiveClass = (checkFor, resultIn) => {
		return active === checkFor ? resultIn : '';
	};

	return (
		<NavbarEl className='main-nav '>
			<div className='logo-holder'>
				<img src={logo} alt='logo' />
			</div>

			<ul className='main-menu'>
				<li
					className={`menu-item ${getActiveClass('home', 'active-out')}`}
					onClick={() => setActive('home')}
				>
					<a href='#'>Начало</a>
				</li>
				<li
					className={`menu-item ${getActiveClass('register', 'active-in')}`}
					onClick={() => setActive('register')}
				>
					<a href='#register'>Регистрация</a>
				</li>
				<li
					className={`menu-item ${getActiveClass('faq', 'active-in')}`}
					onClick={() => setActive('faq')}
				>
					<a href='#faq'>ЧЗВ</a>
				</li>
			</ul>
		</NavbarEl>
	);
}
