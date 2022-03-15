import Navbar from './Navbar';
import ResourcesEl from './styles/Resources.style';
export default function Resources() {
	const navLinks = [{ text: 'Начало', to: '/', value: 'home-page' }];

	return (
		<ResourcesEl>
			<Navbar links={navLinks} outCount={1} />
			<div className='resources'>
				<div className='resource'>
					<a href='http://www.freepik.com'>Designed by stories / Freepik</a>
				</div>
				<div className='resource'>
					<a href='https://www.freepik.com/vectors/business'>
						Business vector created by pch.vector - www.freepik.com
					</a>
				</div>
				<div className='resource'>
					<a href='https://www.freepik.com/vectors/icons'>
						Icons vector created by macrovector - www.freepik.com
					</a>
				</div>
				<div className='resource'>
					<a href='https://www.freepik.com/vectors/music'>
						Music vector created by alvaro_cabrera - www.freepik.com
					</a>
				</div>
				<div className='resource'>
					<a href='https://www.freepik.com/vectors/abstract'>
						Abstract vector created by vectorjuice - www.freepik.com
					</a>
				</div>
				<div className='resource'>
					<a href='https://www.freepik.com/vectors/circle'>
						Circle vector created by freepik - www.freepik.com
					</a>
				</div>
				<div className='resource'>
					<a href='https://www.freepik.com/vectors/school'>
						School vector created by upklyak - www.freepik.com
					</a>
				</div>
			</div>
		</ResourcesEl>
	);
}
