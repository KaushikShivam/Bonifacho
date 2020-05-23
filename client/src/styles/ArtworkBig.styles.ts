import styled from 'styled-components';

export const ImageContainer = styled.div`
	height: 30rem;

	img {
		height: 100%;
		width: 100%;
		object-fit: cover;
	}
`;

export const Content = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 1rem;
`;

export const Title = styled.h3`
	font-family: 'Playfair Display', 'Courier New', Courier, monospace;
	font-weight: bold;
	font-size: 1.8rem;
`;

export const Author = styled.p`
	font-family: font-family-family 'Montserrat', 'Courier New', Courier,
		monospace;
	font-size: 1.4rem;
	color: rgba(0, 0, 0, 0.5);
	margin-top: 5px;
`;

export const Detail = styled.div`
	align-self: flex-start;
	display: flex;

	p {
		font-family: 'Montserrat', 'Courier New', Courier, monospace;
		color: rgba(0, 0, 0, 0.85);
		font-size: 1.8rem;
		margin-left: 1rem;
	}
`;
