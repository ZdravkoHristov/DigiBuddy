import styled from 'styled-components';

const NewAssignmentFormEl = styled.form`

	}

	label {
		display: block;
		text-align: right;
		font-size: 1.2rem;
		margin: 1rem 0;
	}

    .form-grid {
        display: grid;
        grid-template-columns: max-content min-content;
        grid-gap: 3rem 1rem;
        margin: auto;
        width: max-content;
       
    }

    

	.deadline-holder, input, select {
        align-self: center;
    }

    .deadline-holder {
        display: flex;
    }

    input[name="name"] {
        width: 330px;
    }

    input, select{
         border: 1px solid var(--purple);
         border-radius: 8px;
         padding: 0.5rem 2rem;
         font-size: 1.2rem;
         color: var(--purple);
         width: auto;
        
    }
`;

export default NewAssignmentFormEl;
