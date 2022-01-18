import RolesSec from './styles/RolesSection.style';
import illustration1 from '../assets/svgs/role-student.svg';
import illustration2 from '../assets/svgs/role-teacher.svg';
export default function Roles() {
	return (
		<RolesSec className='roles container'>
            <div className='holder'>
                <div className='img-holder'>
                    <img src={illustration2} alt='teacher' />
                    <div className='line'></div>
                    <a href='#' className='button heading-s'>
                        Учител
                    </a>
                </div>      
                <div className='img-holder'>
                    <img src={illustration1} alt='student' />
                    <div className='line'></div>
                    <a href='#' className='button heading-s'>
                        Ученик
                    </a>
                </div>
            </div>

		</RolesSec>
	);
}
