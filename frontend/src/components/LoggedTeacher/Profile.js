import { useState } from 'react';
import MyProfile from './MyProfile.js';
import Settings from './Settings.js';
import ProfileEl from './Profile.style.js';

export default function LoggedTeacher() {
	const [active, setActive] = useState('myProfile');
	return (
		<>
			<ProfileEl className='profile-holder container'>
				<aside className='sidebar'>
					<ul className='tabs'>
						<li
							className={active === 'myProfile' ? 'active tab' : 'tab'}
							onClick={() => setActive('myProfile')}
						>
							Моят профил
						</li>
						<li
							className={active === 'settings' ? 'active tab' : 'tab'}
							onClick={() => setActive('settings')}
						>
							Настройки
						</li>
					</ul>
				</aside>
				<article className='profile-info'>
					{active === 'myProfile' && <MyProfile />}
					{active === 'settings' && <Settings />}
				</article>
			</ProfileEl>
		</>
	);
}
