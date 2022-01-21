import { useState } from 'react';
import Header from '../Header';
import Navbar from '../Navbar';
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

	const HeroContent = () => {
		return (
			<>
				<div className='img-holder'>
					<img
						style={{ width: '500px', height: '400px' }}
						src={heroIllustration}
						alt='illustration'
					/>
				</div>
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
					quibusdam qui adipisci, culpa odio veniam nobis! Corporis vel
					reprehenderit eos.
				</p>
			</>
		);
	};

	return (
		<>
			<div className='gradient-holder'>
				<Header heroContent={<HeroContent />}>
					<Navbar
						active={active}
						setActive={setActive}
						links={navLinks}
						outCount={4}
					></Navbar>
				</Header>
			</div>
		</>
	);
}
