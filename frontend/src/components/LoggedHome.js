import heroIllustration from '../assets/illustrations/welcome-image.svg';
export default function Home({ text }) {
	return (
		<section className='hero container'>
			<div className='img-holder'>
				<img
					style={{ width: '500px', height: '400px' }}
					src={heroIllustration}
					alt='illustration'
				/>
			</div>
			<p>{text}</p>
		</section>
	);
}
