import styled from 'styled-components';

const RegisterEl = styled.section`
	& {
        position: relative;
        z-index: 2;
        padding: 2rem;
        color: #f5f5f5;
	}
    h1,h3{text-align: left; left:40%; /* naglasi go posle :DD*/ margin: 1rem 0;}
    h1{letter-spacing: 2px;}
    h3 {font-weight: 300;}
    .group {width:100%; margin-bottom: 1rem;}
    label{margin-right: 1.2rem; font-size: 1.2rem;}
    .group input::placeholder{color:#c9c9d3;}
    .group input{
        color: #f5f5f5;
        background-color: #7D97B0c2;
        border: 1px solid #f5f5f5;
        border-radius: 8px;
        padding: 0.5rem 1rem;
        font-size: 1rem;
        margin-right: 1.2rem;
        width: 60%;
        letter-spacing: 1px;
    }
    .group:last-child {display: flex; margin-top: 2rem;}
    .group:last-child .button:last-child {background-color: #122D46;}
    .group:last-child .button:last-child::before {background-color: #122D46c2;}
    .group:last-child .button:last-child:hover {background-color: #714264;}
    .group:last-child .button:last-child:hover::before {background-color: #714264c2;}
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
    .holder .input-holder {padding:1.5rem;}
    .holder .img-holder img {margin: auto;}
    .holder .img-holder .button {background-color: #bd4255;}
    .holder .img-holder .button::before {background-color: #bd4255c2;}
    .holder .img-holder .button:hover {background-color: #714264;}
    .holder .img-holder .button:hover::before {background-color: #714264c2;}
    .line {height: 100%; width: 2px; background: #f5f5f5; margin: auto;}
    .button {
        background-color: #714264;
        color: #f5f5f5;
        border: 1px solid #f5f5f5;
        border-radius: 8px;
        padding: 1rem 3rem;
        margin: auto;
        display:flex;
        align-items:center;
        justify-content:center;
        letter-spacing: 1px;
        position: relative;
        transition: 0.5s ease-in-out;
    }
    .button::before{
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: #714264c2;
        z-index: -1;
        transform: scale(1.06) rotate(5deg);
        border-radius: 8px;
        transition: 0.5s ease-in-out;
    }
    //hover
    .button:hover{background-color: #bd4255;}
    .button:hover::before{background-color: #bd4255c2;transform: rotate(-5deg);}
`;

export default RegisterEl;
