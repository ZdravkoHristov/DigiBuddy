import heroIllustration from '../../assets/illustrations/11037.png';
export default function Home() {
	return (
		<section className='hero container'>
			<div className='img-holder'>
				<img
					style={{ width: '500px', height: '400px' }}
					src={heroIllustration}
					alt='illustration'
				/>
			</div>
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
				quibusdam qui adipisci, culpa odio veniam nobis! Corporis vel
				reprehenderit eos.
			</p>
		</section>
	);
}
