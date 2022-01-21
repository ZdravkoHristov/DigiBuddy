import HeroEl from './styles/Hero.style.js';
export default function Hero({ heroContent }) {
	return <HeroEl className='hero container'>{heroContent}</HeroEl>;
}
