import { useDispatch } from 'react-redux';
import { setHomeData } from '../store/slices/homeStateSlice';
import RegisterEl from './styles/RegisterEl.style';
import AnimatedLine from '../components/AnimatedLine';
import illustration from '../assets/svgs/role-student.svg';
import Button from './Button';
export default function LogStudent() {
	const dispatch = useDispatch();

	const closeForm = () => {
		dispatch(setHomeData({ showForm: false }));
	};

	const changeActiveForm = newActive => {
		dispatch(setHomeData({ activeForm: newActive }));
	};

	return (
		<RegisterEl className='container student-form'>
			<h1 className='heading-l'>Вход като ученик</h1>
			<h3 className='heading-s'>Моля попълнете всички полета:</h3>
			<div className='holder'>
				<div className='img-holder'>
					<img src={illustration} />
					<p className='heading-m'>Нямате регистрация?</p>
					<Button
						className='button heading-s'
						theme='red'
						onClick={() => changeActiveForm('regStudent')}
						type='button'
					>
						Регистрация
					</Button>
				</div>
				<form className='input-holder flex-c'>
					<div className='group'>
						<label htmlFor='email'>Email:</label>
						<input
							name='email'
							type='email'
							placeholder='Въведете своя email'
						/>
					</div>
					<div className='group'>
						<label htmlFor='pass'>Парола:</label>
						<input name='pass' type='text' placeholder='Въведете парола' />
					</div>
					<div className='group'>
						<Button className='button heading-s'>Вход</Button>
						<Button
							className='button heading-s mobile-button'
							theme='red'
							onClick={() => changeActiveForm('regStudent')}
							type='button'
						>
							Регистрация
						</Button>
						<a href='#entrance'>
							<Button
								className='button heading-s'
								theme='darkBlue'
								onClick={closeForm}
							>
								Затвори
							</Button>
						</a>
					</div>
				</form>
			</div>
		</RegisterEl>
	);
}
