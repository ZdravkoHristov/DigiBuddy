import './App.css';
import gradient from './assets/svgs/home-back2.svg';
import Header from './components/Header';
import AnimatedLine from './components/AnimatedLine';
import Register from './components/Register';

function App() {
	return (
		<div className='gradient-holder'>
			<img className='gradient-img' src={gradient} alt='gradient' />
			<Header></Header>
			<AnimatedLine />
			<Register />
		</div>
	);
}

export default App;
