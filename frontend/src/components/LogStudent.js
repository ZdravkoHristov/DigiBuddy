import RegisterEl from './styles/RegisterEl.style';
import AnimatedLine from '../components/AnimatedLine';
import illustration from '../assets/svgs/role-student.svg';
import Button from './Button';
export default function LogStudentEl() {
	return (
		<RegisterEl className='container'>
			{/* <AnimatedLine className='line'></AnimatedLine> */}
			<h1 className='heading-l'>Вход като ученик</h1>
			<h3 className='heading-s'>Моля попълнете всички полета:</h3>
			<div className='holder'>
				<div className='img-holder'>
					<img src={illustration} />
					<p className='heading-m'>Нямате регистрация?</p>
					<Button className='button' theme='red'>
						Регистрация
					</Button>
				</div>
				<form className='input-holder flex-c'>
					<div className='group'>
						<label for='email'>Email:</label>
						<input
							name='email'
							type='email'
							placeholder='Въведете своя email'
						/>
					</div>
					<div className='group'>
						<label for='pass'>Парола:</label>
						<input name='pass' type='text' placeholder='Въведете парола' />
					</div>
					<div className='group'>
						<Button className='button'>Вход</Button>
						<Button className='button' theme='darkBlue'>
							Затвори
						</Button>
					</div>
				</form>
			</div>
		</RegisterEl>
	);
}
