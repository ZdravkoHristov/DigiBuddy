import HeaderEl from './styles/Header.style';

export default function Header({ children, ...rest }) {
	return <HeaderEl {...rest}>{children}</HeaderEl>;
}
