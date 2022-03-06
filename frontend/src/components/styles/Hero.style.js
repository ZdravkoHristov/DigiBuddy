import styled from "styled-components";

const HeroEl = styled.section`
    & {
        display: grid;
        grid-template-columns: 1fr 1fr;
        padding: 128px 0 13vw;
    }

    p {
        align-self: center;
    }

    p {
        font-size: 2.2rem;
        flex: 1.7;
        letter-spacing: 1px;
        line-height: 2.5rem;
    }

    .img-holder {
        flex: 2;
    }
`;

export default HeroEl;
