import styled from 'styled-components';
import whitePlace from '../../assets/svgs/white-space-header.svg';
import whitePlaceTeacher from '../../assets/svgs/full-back-teacher-back.svg';
const HeaderEl = styled.header`
	& {
		position: relative;
		z-index: 2;
		color: #5f5d66;
		//home 
		// background-image: url(${whitePlace});
		//teacher welcome 
		background-image: url(${whitePlaceTeacher});
		//for home positio-y e bottom
		// background-position-y: bottom;
		background-position-y: top;
		background-size: cover;
		background-repeat: no-repeat;
		position: relative;
		padding-top: 128px;
	}
`;

export default HeaderEl;
