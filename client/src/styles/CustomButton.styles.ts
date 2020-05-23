import styled from 'styled-components';

interface ButtonProps {
	backgroundColor: string;
	fontSize: string;
	padding: string;
}

export const ButtonContainer = styled.button<ButtonProps>`
	font-family: 'Playfair Display', 'Courier New';
	font-weight: bold;
	letter-spacing: 2px;
	color: white;
	border: none;
	cursor: pointer;
	transition: all 0.2s;
	background-color: ${({ backgroundColor }) => backgroundColor};
	font-size: ${({ fontSize }) => fontSize};
	padding: ${({ padding }) => padding};

	&:focus {
		outline: none;
	}

	&:hover {
		filter: brightness(90%);
	}
`;
