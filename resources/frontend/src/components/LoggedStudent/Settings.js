import FormField from '../SettingsFormField';
import Button from '../Button';

export default function Settings() {
	return (
		<form className='data-form'>
			<FormField labelTxt='Име: ' dataChunk='fullName' role='student' />
			<FormField labelTxt='Имейл: ' dataChunk='email' role='student' />
			<FormField
				labelTxt='Учебно заведение: '
				dataChunk='school'
				role='student'
			/>
			<FormField labelTxt='Град: ' dataChunk='city' role='student' />
			<FormField labelTxt='Област: ' dataChunk='region' role='student' />
			<FormField labelTxt='Длъжност: ' dataChunk='role' role='student' />
			<FormField labelTxt='Клас: ' dataChunk='grade' role='student' />
			<Button className='btn'>Запази</Button>
		</form>
	);
}
