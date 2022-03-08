import MobileMenuEl from './styles/MobileMenu.style';
import { useSelector, useDispatch } from 'react-redux';
import { navbarSelector } from '../store/store';
import { setActive } from '../store/slices/navbarSlice';
export default function MobileMenu() {
	const dispatch = useDispatch();
	const { active, burgerData } = useSelector(navbarSelector);
	const display = burgerData.show ? 'block' : 'none';

	return (
		<MobileMenuEl style={{ display }}>
			<ul className='menu'>
				{burgerData.items.map(item => {
					console.log(active, item);
					const className = active === item.value ? 'active' : '';
					return (
						<li
							className={className}
							onClick={() => dispatch(setActive(item.value))}
							key={item.text}
						>
							<a href={item.to}>{item.text}</a>
						</li>
					);
				})}
			</ul>
		</MobileMenuEl>
	);
}
