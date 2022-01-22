import { useState } from 'react';
import Header from '../Header';
import Navbar from '../Navbar';
import Hero from '../Hero';
import Home from './Home';
import '../../LoggedTeacher.css';
import heroIllustration from '../../assets/illustrations/11037.png';

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
			<div className='gradient-holder'>
				<Header>
					<Navbar
						active={active}
						setActive={setActive}
						links={navLinks}
						outCount={4}
					></Navbar>
					<Hero>
						<Home />
					</Hero>
				</Header>
			</div>
		</>
	);
}
