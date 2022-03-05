import { useState } from 'react';

import ProfileEl from './styles/LoggedProfile.style';

export default function LoggedTeacher({ myProfile, settings }) {
	const [active, setActive] = useState('myProfile');
	return (
		<>
			<ProfileEl className='hero profile-holder container'>
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
					{active === 'myProfile' && myProfile}
					{active === 'settings' && settings}
				</article>
			</ProfileEl>
		</>
	);
}
