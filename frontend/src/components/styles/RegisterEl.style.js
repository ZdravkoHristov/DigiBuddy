import styled from 'styled-components';

const RegisterEl = styled.section`
	& {
		position: relative;
		z-index: 2;
		padding: 2rem;
		color: #f5f5f5;
	}
	.flex-c {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	h1,
	h3 {
		text-align: left;
		left: 40%;
		margin: 1rem 0;
		display: inline-block;
		position: relative;
	}
	h1 {
		letter-spacing: 2px;
		margin-top: 50px;
	}
	h3 {
		font-weight: 300;
		margin-bottom: 50px;
	}
	.group {
		width: 100%;
		margin-bottom: 1rem;
	}
	label {
		margin-right: 1.2rem;
		font-size: 1.2rem;
	}
	.group input::placeholder {
		color: #c9c9d3;
	}
	.group input {
		color: #f5f5f5;
		background-color: #7d97b0c2;
		border: 1px solid #f5f5f5;
		border-radius: 8px;
		padding: 0.5rem 1rem;
		font-size: 1rem;
		margin-right: 1.2rem;
		width: 60%;
		letter-spacing: 1px;
	}
	.group:last-child {
		display: flex;
		margin-top: 2rem;
	}

	.holder {
		width: 100%;
		margin: auto;
		display: grid;
		grid-template-columns: 1fr 2fr;
		grid-gap: 5%;
	}
	.holder .img-holder {
		display: grid;
		grid-template-rows: 4fr 1fr 1fr;
		grid-gap: 5%;
		text-align: center;
		height: 80%;
		margin: auto;
	}
	.holder .input-holder {
		padding: 1.5rem;
		width: 100%;
		height: 100%;
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
		padding: 1rem 3rem;
	}

	@media (min-width: 1800px) {
		label {
			font-size: 1.9rem;
		}
		.group input {
			font-size: 1.7rem;
		}
	}

	@media (min-width: 901px) {
		&.student-form {
			h1,
			h3 {
				left: 0;
				width: 63%;
				text-align: right;
			}
		}
	}
`;

export default RegisterEl;
