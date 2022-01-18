import { ButtonEl } from './styles/Button.style';
import { ThemeProvider } from 'styled-components';

export default function Button({ theme, children, click, className }) {
	const defaultTheme = {
		background: '#714264',
		hover: '#bd4255',
	};

	const themes = {
		default: defaultTheme,
		purple: defaultTheme,
	};

	const classes = 'heading-s ' + className;

	return (
		<ThemeProvider theme={themes[theme] || themes.default}>
			<ButtonEl className={classes} click={click}>
				{children}
			</ButtonEl>
		</ThemeProvider>
	);
}
