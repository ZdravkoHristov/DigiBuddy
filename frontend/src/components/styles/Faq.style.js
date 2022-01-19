import styled from 'styled-components';
import wave from '../../assets/svgs/wave.svg';

const FaqEl = styled.section`
	& {
		position: relative;
		background-image: url(${wave});
		background-size: cover;
		background-position: top 0;
		background-repeat: no-repeat;
		margin-top: 2rem;
		padding: 3rem 0;
	}
	h2 {
		color: #714264;
		margin: 2rem 0;
	}
	/* .wave-wrapper {
		height: 200px;
		width: 100%;
		position: absolute;
		bottom: 0;
		background-image: url('./assets/svgs/wave.svg');
		background-repeat: no-repeat;
		background-size: cover;
	} */

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
		user-select: none;
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
