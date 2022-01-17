import { useState } from 'react';
import HeaderEl from './styles/Header.style';
import Navbar from './Navbar';

export default function Header() {
	const [activeItem, setActiveItem] = useState('home');
	return (
		<HeaderEl>
			<Navbar active={activeItem} setActive={setActiveItem} />
		</HeaderEl>
	);
}
