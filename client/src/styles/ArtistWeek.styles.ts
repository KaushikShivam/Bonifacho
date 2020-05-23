import styled from 'styled-components';

export const ArtistWeekContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 50%);
	background-color: #f2f2f2;

	.img {
		width: 100%;
		height: 100%;

		img {
			width: 100%;
			height: 100%;
		}
	}
`;

export const Info = styled.div`
	width: 46rem;
	height: 31rem;
	justify-self: center;
	align-self: center;
`;
export const Title = styled.h2`
	font-family: 'Montserrat', 'Courier New', Courier, monospace;
	font-weight: bold;
	font-size: 3.5rem;
	color: black;
	text-transform: uppercase;
	margin-bottom: 3.6rem;
`;

export const SubTitle = styled.h4`
	font-family: 'Playfair Display', 'Courier New', Courier, monospace;
	font-weight: bold;
	font-size: 2rem;
	color: rgba(0, 0, 0, 0.5);
	text-transform: uppercase;
	letter-spacing: 3px;
	margin-bottom: 2rem;
`;

export const Description = styled.p`
	font-family: 'Playfair Display', 'Courier New', Courier, monospace;
	font-size: 1.6rem;
	color: black;
	line-height: 1.5;
	margin-bottom: 4rem;
`;
