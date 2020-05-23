import styled from 'styled-components';
import heroBg from './../assets/heroBg.png';

export const HeroContainer = styled.div`
	height: 50rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: url(${heroBg});

	.btns > * {
		margin: 0 1rem;
	}
`;

export const Title = styled.h1`
	font-size: 6.2rem;
	font-family: 'Montserrat', 'Courier New';
	color: white;
	letter-spacing: 4px;
	font-weight: bold;
	margin-bottom: 4rem;
`;

export const SubTitle = styled.h3`
	color: rgba(255, 255, 255, 0.85);
	font-size: 2rem;
	font-family: 'Playfair Display', 'Courier New';
	margin-bottom: 1.2rem;
	letter-spacing: 3px;
	font-weight: bold;
`;
