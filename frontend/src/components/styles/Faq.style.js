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
	}

	.answer {
		color: #714264;
	}

	.item {
		margin-bottom: 25px;
	}

	.top-row,
	.bottom-row {
		display: grid;
		grid-template-columns: 50px 1fr;
		grid-gap: 10px;
	}

	.question {
		align-self: center;
	}

	.arrow-holder {
		display: flex;

		justify-content: flex-end;
	}

	.arrow-img {
		width: 20px;
		height: 20px;
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
		font-size: 16px;
		left: 37%;
		top: 25%;
	}
`;

export default FaqEl;
