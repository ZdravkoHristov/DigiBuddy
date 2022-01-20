import HeaderEl from './styles/Header.style';
import Navbar from './Navbar';
import Hero from './Hero';

export default function Header({ children }) {
	return (
		<HeaderEl>
			{children}
			<Hero />
		</HeaderEl>
	);
}
