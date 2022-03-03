import styled from "styled-components";

const ProfileEl = styled.section`
    & {
        color: #744263;
        display: grid;
        grid-template-columns: 1fr 4fr;

        min-height: 500px;
    }

    aside {
        border-right: 1px solid var(--purple);
    }

    .profile-info {
        padding: 0 15px;
    }

    .data p {
        font-size: 1.5rem;
        margin-top: 0.75rem;
    }

    .welcome-heading {
        font-size: 3rem;
        font-weight: normal;
        text-align: center;
        margin-bottom: 1rem;
    }

    .tabs {
        list-style: none;
    }

    .tab {
        font-size: 1.4rem;
        margin-bottom: 30px;
        cursor: pointer;

        &.active {
            font-weight: bold;
        }
    }

    .form-field {
        margin-bottom: 1.2rem;
        label {
            font-size: 1.4rem;
        }

        input {
            padding: 5px 8px;
            border: 1px solid var(--purple);
            background: #f5f5f5;
            border-radius: 10px;
            color: var(--purple);
            font-size: 1.2rem;
        }

        .icon {
            font-size: 1.4rem;
            margin-left: 20px;
            cursor: pointer;
        }
    }
    form .btn {
        margin-top: 3rem;
        padding: 0.5rem 1rem;
        font-size: 1.2rem;
    }

    @media (max-width: 940px) {
        display: block;
        aside {
            border-right: 0;
            border-bottom: 1px solid var(--purple);
            margin-bottom: 2rem;
        }

        .welcome-heading {
            font-size: 2rem;
        }

        .data p {
            font-size: 1.2rem;
        }

        .tabs {
            display: flex;
        }

        .tab {
            margin-right: 2rem;
            font-size: 1.2rem;
        }

        .form-field label {
            font-size: 1.2rem;
        }

        button {
            width: 80%;
        }
    }

    @media (max-width: 500px) {
        .form-field label {
            display: block;
            margin-bottom: 1rem;
        }
    }
`;

export default ProfileEl;
