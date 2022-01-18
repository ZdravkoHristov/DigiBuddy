import styled from 'styled-components';

const RolesSec = styled.section`
	& {
        position: relative;
        z-index: 2;
        height: 100vh;
        padding: 4rem;
        color: #5f5d66;
	}
    .holder {
        width: 65%;
        height: 100%;
        margin: auto;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 15%;
    }
    .holder .img-holder {
        display: grid;
        grid-template-rows: 3.25fr 1fr 0.75fr;
        grid-gap: 3%;
    }
    .holder .img-holder img {margin: auto;}
    .line {height: 100%; width: 2px; background: #f5f5f5; margin: auto;}
    .button {
        background-color: #714264;
        color: #f5f5f5;
        border: 1px solid #f5f5f5;
        border-radius: 8px;
        width: 70%;
        height: 100%;
        margin: auto;
        display:flex;
        align-items:center;
        justify-content:center;
        letter-spacing: 1px;
        position: relative;
        transition: 1s ease-in-out;
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
        transition: 1s ease-in-out;
    }
    //hover
    .button:hover{background-color: #bd4255;}
    .button:hover::before{background-color: #bd4255c2;transform: rotate(-5deg);}
`;

export default RolesSec;
