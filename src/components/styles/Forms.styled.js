import styled from 'styled-components';

export const FormGroup = styled.div`
	background-color: "#234676";
	color: ${props => props.theme.textColor};
    display: block;
	width: 100%;
	margin: 50px auto;
`;

export const Label = styled.label`
	margin-bottom: 0.5em;
	color: ${props => props.theme.textColor};
    display: block;
	&:hover {
        opacity: 0.9;
		color: pink;
		transition: .5s all ease;
    }
`;


export const Input = styled.input`
	padding: 0.5em;
	background: ${props => props.theme.bodyColor};
	color: green;
	border: 0.5 solid pink;
	border-radius: 40px;
	margin-bottom: 0.5em;
	&:focus {
		background: #b0d6ff;
		color: black;
		transition: .5s all ease;
    }
`;