import styled from 'styled-components';

const RolesSec = styled.section`
	& {
		position: relative;
		z-index: 2;
		padding: 7rem 4rem 0;
		color: #f5f5f5;
	}
	h1,
	h3 {
		text-align: center;
		width: 100%;
		margin: 1rem 0;
	}
	h1 {
		letter-spacing: 2px;
	}
	h3 {
		font-weight: 300;
	}
	.holder {
		width: 60%;
		margin: auto;
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 18%;
	}
	.animated-line {
		position: absolute;
		bottom: -140px;
		left: 50%;
	}
	.holder .img-holder {
		position: relative;
		display: grid;
		grid-template-rows: 3.25fr 1.75fr 1fr;
		grid-gap: 3%;
	}
	.holder .img-holder img {
		margin: auto;
	}
	.line {
		height: 100%;
		width: 2px;
		background: #f5f5f5;
		margin: auto;
	}

	.button {
		padding: 1rem 2rem;
	}
`;

export default RolesSec;
