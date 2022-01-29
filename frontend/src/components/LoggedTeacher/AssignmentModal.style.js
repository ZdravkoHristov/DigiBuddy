import styled from 'styled-components';

const AssignmentModalEl = styled.div`
	& {
		color: var(--purple);
		letter-spacing: 2px;
	}

	.grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		width: 80%;
		margin: 4rem auto;
		place-items: center;
		.bg {
			width: 170px;
			height: 170px;
		}

		.img-wrapper {
			position: relative;
		}

		.icon {
			font-size: 70px;
			position: absolute;
			left: 40%;
			top: 36%;
			color: #fff;
		}

		.create .icon {
			left: 36%;
			top: 35%;
		}

		.line {
			width: 2px;
			display: block;
			margin: 30px auto;
			height: 80px;
			background: var(--purple);
		}

		img {
			display: block;
			margin: auto;
		}

		h4 {
			font-size: 1.7rem;
			font-weight: normal;
			text-align: center;
			margin-top: 1.5rem;
		}
	}

	/* .modal-box {
		background: red;
	} */
`;

export default AssignmentModalEl;
