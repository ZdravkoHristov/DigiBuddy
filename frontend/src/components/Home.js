import { useSelector } from 'react-redux';
import { homeStateSelector } from '../store/store';
import Header from './Header';
import AnimatedLine from './AnimatedLine';
import AnimatedElement from './AnimatedElement';
import RolesSection from './RolesSection';
import RegTeacher from './RegTeacher';
import RegStudent from './RegStudent';
import LogTeacher from './LogTeacher';
import LogStudent from './LogStudent';
import Faq from './Faq';
import Navbar from './Navbar';
import headerBackground from '../assets/svgs/white-space-header.svg';
import heroIllustration from '../assets/illustrations/home-image.svg';

import '../Home.css';

export default function Home() {
	const { activeForm } = useSelector(homeStateSelector);

	const navLinks = [
		{ text: 'Начало', to: '#', value: 'home' },
		{ text: 'Вход', to: '#entrance', value: 'entrance' },
		{ text: 'ЧЗВ', to: '#faq', value: 'faq' },
	];

	const navBreakpoints = new Map();
	navBreakpoints.set(800, 3);

	const HeroContent = props => {
		return (
			<section {...props}>
				{' '}
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
					quibusdam qui adipisci, culpa odio veniam nobis! Corporis vel
					reprehenderit eos.
				</p>
				<div className='img-holder'>
					<img src={heroIllustration} alt='illustration' />
				</div>
			</section>
		);
	};

	return (
		<>
			<div className='gradient-holder'>
				<Header
					heroContent={<HeroContent />}
					style={{
						backgroundImage: `url("${headerBackground}")`,
						backgroundPositionY: 'bottom',
					}}
				>
					<Navbar links={navLinks} outCount={2} breakpoints={navBreakpoints} />
					<HeroContent className='hero container' />
				</Header>
				<AnimatedLine />
				<RolesSection />
				<AnimatedElement
					isMounted={activeForm === 'regTeacher'}
					inClass={'test'}
					outClass='out'
					delayTime={700}
				>
					<RegTeacher />
				</AnimatedElement>
				<AnimatedElement
					isMounted={activeForm === 'regStudent'}
					inClass={'test'}
					outClass='out'
					delayTime={700}
				>
					<RegStudent />
				</AnimatedElement>
				<AnimatedElement
					isMounted={activeForm === 'logTeacher'}
					inClass={'test'}
					outClass='out'
					delayTime={700}
				>
					<LogTeacher />
				</AnimatedElement>
				<AnimatedElement
					isMounted={activeForm === 'logStudent'}
					inClass={'test'}
					outClass='out'
					delayTime={700}
				>
					<LogStudent />
				</AnimatedElement>
				<Faq />
			</div>
		</>
	);
}
