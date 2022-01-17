import HeroEl from './styles/Hero.style.js';
import illustration from '../assets/illustrations/home-image.svg';
export default function Hero() {
	return (
		<HeroEl className='hero container'>
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
				quibusdam qui adipisci, culpa odio veniam nobis! Corporis vel
				reprehenderit eos.
			</p>
			<div className='img-holder'>
				<img src={illustration} alt='illustration' />
			</div>
		</HeroEl>
	);
}
