import styled from 'styled-components';

const FaqEl = styled.section`
	& {
		background: #fff;
	}
	h2 {
		color: #714264;
		margin: 2rem 0;
	}

	.questions {
		width: 90%;
		margin: auto;
	}

	.question {
		padding-left: 20px;
		margin-bottom: 10px;
	}

	.answer {
		color: #714264;
	}

	.item {
		display: grid;
		grid-template-columns: 60px 1fr;
		grid-gap: 10px;
		margin-bottom: 25px;
	}

	.number-wrapper {
		position: relative;
	}

	.number-wrapper img {
		width: 100%;
		height: 100%;
	}

	.number-wrapper .number {
		color: #fff;
		position: absolute;
		font-size: 18px;
		left: 37%;
		top: 25%;
	}
`;

export default FaqEl;
