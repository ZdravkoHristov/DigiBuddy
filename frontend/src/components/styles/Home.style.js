import styled from 'styled-components';
import headerBg from '../../assets/svgs/white-space-header.svg';

const HomeEl = styled.div`
	.gradient-holder {
		background: linear-gradient(
			-135deg,
			#f05454 0%,
			#6d4163 27%,
			#30475e 58%,
			#213140 100%
		);
	}

	.gradient-holder header {
		background-image: url(${headerBg});
		background-position-y: bottom;

		@media (min-width: 1800px) {
			background-position-x: -30px;
		}

		@media (max-width: 1751px) {
			background-position-x: -75px;
		}

		@media (max-width: 1660px) {
			background-position-x: -40px;
		}

		@media (max-width: 1500px) {
			background-position-x: -20px;
		}

		@media (max-width: 1350px) {
			min-height: 700px;
		}
	}

	@media (max-width: 1180px) {
		.gradient-holder header {
			background-position-x: -75px;
		}

		.hero {
			margin: 80px auto;
		}

		.hero p {
			font-size: 1.6rem;
			line-height: 2.8rem;
		}
	}

	@media (max-width: 900px) {
		.gradient-holder header {
			background: #f5f5f5;
			min-height: 540px;
			margin-bottom: 75px;
		}

		.hero {
			margin: 40px auto;
			padding-bottom: 20px;
		}

		section[id='entrance'] .animated-line {
			display: none;
		}

		section[id='entrance'] + div .holder .img-holder {
			display: none;
		}

		section[id='entrance'] + div .holder {
			grid-template-columns: 1fr;
		}

		section[id='entrance'] + div .group {
			flex-direction: column;
		}

		section[id='entrance'] + div button {
			margin-top: 30px;
			font-size: 1.1rem;
			width: 100%;
		}

		section[id='entrance'] + div h1,
		section[id='entrance'] + div h3 {
			left: 0;
		}
	}

	@media (max-width: 900px) {
		.main-nav {
			border-bottom: 1px solid var(--purple);
		}
	}

	@media (min-width: 651px) {
		.container {
			width: 84%;
		}

		.burger-icon {
			display: none;
		}
	}

	@media (max-width: 650px) {
		.main-menu {
			display: none;
		}
	}

	@media (min-width: 901px) {
		section[id='entrance'] + div .mobile-button {
			display: none;
		}
	}

	@media (max-width: 750px) {
		section[id='entrance'] .holder {
			width: 100%;
		}
		section[id='entrance'] + div .group input {
			margin-top: 5px;
			width: 100%;
			display: block;
		}

		section[id='faq'] .number-wrapper .number {
			top: 28%;
		}
	}

	@media (max-width: 560px) {
		section[id='faq'] .number-wrapper .number {
			top: 36%;
		}
	}

	@media (max-width: 450px) {
		section[id='entrance'] .holder {
			grid-template-columns: 1fr;
			margin-top: 3rem;
		}

		section[id='entrance'] + div {
			margin-top: 10rem;
		}

		section[id='faq'] {
			margin-top: 16rem;
		}
	}

	@media (max-width: 444px) {
		section[id='faq'] .top-row {
			grid-template-columns: 1fr;
			margin-bottom: 15px;
		}
		section[id='faq'] .number-wrapper {
			display: none;
		}
	}
`;

export default HomeEl;
