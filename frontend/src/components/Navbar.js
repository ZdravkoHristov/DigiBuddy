import NavbarEl from './styles/Navbar.style';
import logo from '../assets/logo/logo-short.svg';

export default function Navbar({ active, setActive }) {
	const getActiveClass = checkFor => {
		return active === checkFor ? 'active' : '';
	};

	return (
		<NavbarEl className='main-nav'>
			<div className='logo-holder'>
				<img src={logo} alt='logo' />
			</div>

			<ul className='main-menu'>
				<li
					className={`menu-item out ${getActiveClass('home')}`}
					onClick={() => setActive('home')}
				>
					<a href='#'>Начало</a>
				</li>
				<li
					className={`menu-item out ${getActiveClass('register')}`}
					onClick={() => setActive('register')}
				>
					<a href='#register'>Регистрация</a>
				</li>
				<li
					className={`menu-item in ${getActiveClass('faq')}`}
					onClick={() => setActive('faq')}
				>
					<a href='#faq'>ЧЗВ</a>
				</li>
			</ul>
		</NavbarEl>
	);
}
