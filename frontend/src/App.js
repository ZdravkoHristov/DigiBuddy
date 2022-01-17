import './App.css';
import gradient from './assets/svgs/home-back2.svg';
import Header from './components/Header';

function App() {
	return (
		<div className='gradient-holder'>
			<img className='gradient-img' src={gradient} alt='gradient' />
			<Header></Header>
		</div>
	);
}

export default App;
