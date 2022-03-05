import Modal from '../Modal';
import Button from '../Button';
import ToolsModalEl from './ToolsModal.style';
import penIcon from '../../assets/icons/pen.svg';
import dialogueBubblesIcon from '../../assets/icons/dialogue-bubbles.svg';
import micIcon from '../../assets/icons/mic.svg';
import cameraIcon from '../../assets/icons/camera.svg';
import notebookIcon from '../../assets/icons/notebook.svg';
import multipleChoicesIcon from '../../assets/icons/multiple-choices.svg';

export default function ToolsModal() {
	return (
		<ToolsModalEl>
			<Modal>
				<div className='tools-grid'>
					<div className='tools-holder'>
						<h3>Инструменти</h3>
						<div className='tools-wrapper'>
							<div className='tool'>
								<p className='name'>Писмена работа</p>{' '}
								<img src={penIcon} alt='a pen' />
							</div>
							<div className='tool'>
								<p className='name'>Езикови практики</p>{' '}
								<img src={dialogueBubblesIcon} alt='dialogue bubbles' />
							</div>
							<div className='tool'>
								<p className='name'>Аудио</p>{' '}
								<img src={micIcon} alt='a microphone' />
							</div>
							<div className='tool'>
								<p className='name'>Видео</p>{' '}
								<img src={cameraIcon} alt='a camera' />
							</div>
							<div className='tool'>
								<p className='name'>Попълни полетата</p>{' '}
								<img src={notebookIcon} alt='a notebook' />
							</div>
							<div className='tool'>
								<p className='name'>Маркирай верните</p>{' '}
								<img src={multipleChoicesIcon} alt='a test' />
							</div>

							<div className='tool'>
								<p className='name'>Задачи</p> <img src={penIcon} alt='a pen' />
							</div>
						</div>
					</div>
					<div className='right-side'>
						<div className='selected-tools'>
							<i class='fas fa-file-import icon'></i>

							<p>
								Изберете типа на задачата и чрез влачене с мишката пуснете, за
								да създадете своето задание
							</p>
						</div>
						<div className='button-holder'>
							<Button>Готово</Button>
						</div>
					</div>
				</div>
			</Modal>
		</ToolsModalEl>
	);
}
