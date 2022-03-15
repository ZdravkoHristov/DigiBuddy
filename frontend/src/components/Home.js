import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { homeStateSelector } from '../store/store';
import { setActive } from '../store/slices/navbarSlice';
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
import HomeEl from './styles/Home.style';
import heroIllustration from '../assets/illustrations/home-image.svg';

export default function Home() {
	const dispatch = useDispatch();
	const { activeForm, showForm } = useSelector(homeStateSelector).data;
	const gradientRef = useRef();
	const scrollTimerRef = useRef();

	const navLinks = [
		{ text: 'Начало', to: '#', value: 'home' },
		{ text: 'Вход', to: '#entrance', value: 'entrance' },
		{ text: 'ЧЗВ', to: '#faq', value: 'faq' },
	];

	const navBreakpoints = new Map();

	navBreakpoints.set(1800, 3);
	navBreakpoints.set(1751, 2);
	navBreakpoints.set(1035, 3);

	const HeroContent = props => {
		return (
			<section {...props}>
				{' '}
				<p>
      
	                           DigiBuddy - най-добрият приятел на учители и ученици. Платформата помага за предоставяне на учебни материали, персонализирани от регистрираните учители.			Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
					
				</p>
				<div className='img-holder'>
					<img src={heroIllustration} alt='illustration' />
				</div>
			</section>
		);
	};

	const handleActive = () => {
		clearTimeout(scrollTimerRef.current);

		const scrolled = window.scrollY + 300;

		[...gradientRef.current.children].forEach(child => {
			const top = child.offsetTop;
			const bottom = top + child.offsetHeight;

			if (scrolled >= top && scrolled <= bottom) {
				if (!child.dataset.nav) return;

				scrollTimerRef.current = setTimeout(() => {
					dispatch(setActive(child.dataset.nav));
				}, 50);
			}
		});
	};

	useEffect(() => {
		window.addEventListener('scroll', handleActive);
		return () => window.removeEventListener('scroll', handleActive);
	}, []);

	return (
		<HomeEl>
			<div className='gradient-holder' ref={gradientRef}>
				<Header data-nav='home' heroContent={<HeroContent />}>
					<Navbar links={navLinks} outCount={1} breakpoints={navBreakpoints} />
					<HeroContent className='hero container' />
				</Header>
				<AnimatedLine />
				<RolesSection data-nav='entrance' />
				<AnimatedElement
					id='forms'
					isMounted={showForm}
					inClass={'slide-down-animation'}
					outClass='slide-up-animation'
					delayTime={700}
				>
					{activeForm === 'regTeacher' && <RegTeacher />}
					{activeForm === 'regStudent' && <RegStudent />}
					{activeForm === 'logTeacher' && <LogTeacher />}
					{activeForm === 'logStudent' && <LogStudent />}
				</AnimatedElement>

				<Faq data-nav='faq' />
			</div>
		</HomeEl>
	);
}
