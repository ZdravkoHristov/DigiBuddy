import RegisterEl from './styles/RegisterEl.style';
import AnimatedLine from '../components/AnimatedLine';
import illustration from '../assets/svgs/role-teacher.svg';
export default function LogTeacherEl() {
	return (
        <RegisterEl className='container'>
            {/* <AnimatedLine className='line'></AnimatedLine> */}
            <h1 className='heading-l'>Вход като учител</h1>
            <h3 className='heading-s'>Моля попълнете всички полета:</h3>
            <div className='holder'>
                <div className='img-holder'>
                    <img src={illustration}/>
                    <p className='heading-m'>Нямате регистрация?</p>
                    <a className='button' href='#'>Регистрация</a>
                </div>
                <form className='input-holder flex-c'>
                    <div className='group'>
                        <label for='email'>Email:</label>
                        <input name='email' type='email' placeholder='Въведете своя email'/>
                    </div>
                    <div className='group'>
                        <label for='pass'>Парола:</label>
                        <input name='pass' type='text' placeholder='Въведете парола'/>
                    </div>
                    <div className='group'>
                        <a class='button'>Вход</a>
                        <a class='button'>Затвори</a>
                    </div>
                </form>
            </div>

		</RegisterEl>
	);
}
