import FormField from '../SettingsFormField';
import Button from '../Button';

export default function Settings() {
	return (
		<form className='data-form'>
			<FormField labelTxt='Име: ' dataChunk='fullName' />
			<FormField labelTxt='Имейл: ' dataChunk='email' />
			<FormField labelTxt='Учебно заведение: ' dataChunk='school' />
			<FormField labelTxt='Град: ' dataChunk='city' />
			<FormField labelTxt='Област: ' dataChunk='region' />
			<FormField labelTxt='Длъжност: ' dataChunk='role' />
			<FormField labelTxt='Специализация: ' dataChunk='subject' />
			<Button className='btn'>Запази</Button>
		</form>
	);
}
