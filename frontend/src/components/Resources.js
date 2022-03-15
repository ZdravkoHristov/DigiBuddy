import { useEffect } from 'react';
import Navbar from './Navbar';
import ResourcesEl from './styles/Resources.style';
export default function Resources() {
	const navLinks = [{ text: 'Начало', to: '/', value: 'home-page' }];

	useEffect(() => {
		document.body.classList.add('side-page');

		return () => document.body.classList.remove('side-page');
	}, []);

	return (
		<ResourcesEl>
			<Navbar links={navLinks} outCount={1} />
			<div className='resources'>
				<div className='resource'>
					<a href='http://www.freepik.com' target='_blank'>
						Designed by stories / Freepik
					</a>
				</div>
				<div className='resource'>
					<a href='https://www.freepik.com/vectors/business' target='_blank'>
						Business vector created by pch.vector - www.freepik.com
					</a>
				</div>
				<div className='resource'>
					<a href='https://www.freepik.com/vectors/icons' target='_blank'>
						Icons vector created by macrovector - www.freepik.com
					</a>
				</div>
				<div className='resource'>
					<a href='https://www.freepik.com/vectors/music' target='_blank'>
						Music vector created by alvaro_cabrera - www.freepik.com
					</a>
				</div>
				<div className='resource'>
					<a href='https://www.freepik.com/vectors/abstract' target='_blank'>
						Abstract vector created by vectorjuice - www.freepik.com
					</a>
				</div>
				<div className='resource'>
					<a href='https://www.freepik.com/vectors/circle' target='_blank'>
						Circle vector created by freepik - www.freepik.com
					</a>
				</div>
				<div className='resource'>
					<a href='https://www.freepik.com/vectors/school' target='_blank'>
						School vector created by upklyak - www.freepik.com
					</a>
				</div>
			</div>
		</ResourcesEl>
	);
}
