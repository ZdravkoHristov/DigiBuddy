import UploadIconEl from './UploadIcon.style';
import bg from '../../assets/svgs/upload-assignment-bg.svg';

export default function UploadIcon() {
	return (
		<UploadIconEl className='img-wrapper'>
			<img src={bg} alt='background' className='bg' />
			<i class='fas fa-file-upload icon'></i>
		</UploadIconEl>
	);
}
