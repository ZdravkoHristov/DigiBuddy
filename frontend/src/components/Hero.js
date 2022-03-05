import HeroEl from './styles/Hero.style.js';
export default function Hero({ children }) {
	return <HeroEl className='hero container'>{children}</HeroEl>;
}
