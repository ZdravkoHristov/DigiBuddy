import HeaderEl from './styles/Header.style';
import Navbar from './Navbar';
import Hero from './Hero';

export default function Header({ heroContent, children }) {
	return (
		<HeaderEl>
			{children}
			<Hero heroContent={heroContent} />
		</HeaderEl>
	);
}
