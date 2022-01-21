import { useState } from 'react';
import { useSelector } from 'react-redux';
import { homeStateSelector } from '../store/store';
import Header from './Header';
import AnimatedLine from './AnimatedLine';
import RolesSection from './RolesSection';
import RegTeacher from './RegTeacher';
import RegStudent from './RegStudent';
import LogTeacher from './LogTeacher';
import LogStudent from './LogStudent';
import Faq from './Faq';
import Navbar from './Navbar';

export default function Home() {
	const { activeForm } = useSelector(homeStateSelector);
	const [active, setActive] = useState('#');
	const navLinks = [
		{ text: 'Начало', to: '#' },
		{ text: 'Регистрация', to: '#register' },
		{ text: 'ЧЗВ', to: '#faq' },
	];

	const navBreakpoints = new Map();
	navBreakpoints.set(800, 3);

	return (
		<>
			<div className='gradient-holder'>
				<Header>
					<Navbar
						active={active}
						setActive={setActive}
						links={navLinks}
						outCount={2}
						breakpoints={navBreakpoints}
					/>
				</Header>
				<AnimatedLine />
				<RolesSection />
				{activeForm === 'regTeacher' && <RegTeacher />}
				{activeForm === 'regStudent' && <RegStudent />}
				{activeForm === 'logTeacher' && <LogTeacher />}
				{activeForm === 'logStudent' && <LogStudent />}
				<Faq />
			</div>
		</>
	);
}
