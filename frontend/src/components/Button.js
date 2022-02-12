import { ButtonEl } from './styles/Button.style';
import { ThemeProvider } from 'styled-components';

export default function Button({ theme, children, type = 'button', ...rest }) {
	const defaultTheme = {
		background: '#714264',
		hover: '#bd4255',
	};

	const themes = {
		default: defaultTheme,
		purple: defaultTheme,
		darkBlue: {
			background: '#122d46',
			hover: '#714264',
		},
		red: {
			background: '#bd4255',
			hover: '#714264',
		},
	};

	return (
		<ThemeProvider theme={themes[theme] || themes.default}>
			<ButtonEl {...rest} type={type}>
				{children}
			</ButtonEl>
		</ThemeProvider>
	);
}
