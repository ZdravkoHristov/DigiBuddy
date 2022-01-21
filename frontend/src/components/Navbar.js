import { useEffect, useState, useRef } from 'react';
import NavbarEl from './styles/Navbar.style';
import logo from '../assets/logo/logo-short.svg';

export default function Navbar({
	active,
	setActive,
	links,
	outCount,
	breakpoints,
}) {
	const [outItemCount, setOutItemCount] = useState(outCount);
	const menuRef = useRef();
	const getActiveClass = checkFor => {
		return active === checkFor ? ' active' : '';
	};

	const checkBreakpoints = () => {
		const currentWidth = window.innerWidth;
		let newCount = outCount;

		for (const pair of breakpoints) {
			if (currentWidth < pair[0]) {
				newCount = pair[1];
				break;
			}
		}

		setOutItemCount(newCount);
	};

	const handleClasses = () => {
		const children = menuRef.current.childNodes;
		for (let i = 0; i < children.length; i++) {
			const item = children[i];
			if (i < outItemCount) {
				item.classList.remove('in');
				item.classList.add('out');
			} else {
				item.classList.remove('out');
				item.classList.add('in');
			}
		}
	};

	useEffect(handleClasses);

	useEffect(() => {
		checkBreakpoints();

		window.addEventListener('resize', checkBreakpoints);

		return () => window.removeEventListener('resize', checkBreakpoints);
	}, []);

	return (
		<NavbarEl className='main-nav'>
			<div className='logo-holder'>
				<img src={logo} alt='logo' />
			</div>

			<ul className='main-menu' ref={menuRef}>
				{links.map(link => {
					const activeClass = getActiveClass(link.to);
					const className = 'menu-item' + activeClass;
					return (
						<li
							className={className}
							onClick={() => setActive(link.to)}
							key={link.text}
						>
							<a href={link.to}>{link.text}</a>
						</li>
					);
				})}
			</ul>
		</NavbarEl>
	);
}
