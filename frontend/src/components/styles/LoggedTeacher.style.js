import styled from "styled-components";

const TeacherEl = styled.div`
    .gradient-holder {
        background: linear-gradient(
            -135deg,
            #f05454 0%,
            #6d4163 27%,
            #30475e 58%,
            #213140 100%
        );
    }

    .prev-arrow,
    .next-arrow {
        position: fixed;
        z-index: 2000;
        color: #fff;
        font-size: 2rem;
        top: 50%;
        transform: translateY(-50%);
    }

    .prev-arrow {
        left: 5%;
    }

    .next-arrow {
        right: 5%;
    }

    .main-nav + div {
        padding: 4rem 1rem 1rem;

        .container {
            padding: 0 0.5rem;
        }
    }

    @media (max-width: 640px) {
        .main-nav + div {
            padding: 4rem 0;
        }
    }
`;

export default TeacherEl;