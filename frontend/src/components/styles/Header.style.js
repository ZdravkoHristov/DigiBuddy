import styled from 'styled-components';
import whitePlace from '../../assets/svgs/white-space-header.svg';
const HeaderEl = styled.header`
	& {
		position: relative;
		z-index: 2;
		color: #5f5d66;
		background-image: url(${whitePlace});
		background-position-y: bottom;
		background-size: cover;
		background-repeat: no-repeat;
		position: relative;
	}
`;

export default HeaderEl;
