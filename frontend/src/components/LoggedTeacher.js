import { useState } from 'react';
import Header from './Header';
import Navbar from './Navbar';

export default function LoggedTeacher() {
	const [active, setActive] = useState('home');
	const navLinks = [
		{ text: 'Начало', to: '#', value: 'home' },
		{ text: 'Колекции', to: '#', value: 'collections' },
		{ text: 'Моят клас', to: '#', value: 'class' },
		{ text: 'Моят профил', to: '#', value: 'profile' },
		{ text: 'Изход', to: '#', value: 'exit' },
	];
	return (
		<>
			<Header>
				<Navbar
					active={active}
					setActive={setActive}
					links={navLinks}
					outCount={2}
				></Navbar>
			</Header>
		</>
	);
}
