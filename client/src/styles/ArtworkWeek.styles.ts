import styled from 'styled-components';

export const Container = styled.div`
	padding: 10rem 17rem;
`;

export const Title = styled.h2`
	font-family: 'Playfair Display', 'Courier New', Courier, monospace;
	font-weight: bold;
	font-size: 4.2rem;
	margin-bottom: 5rem;
	text-align: center;
`;

export const Content = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	column-gap: 4rem;
	margin: 0 auto;
`;

export const LinkContainer = styled.div`
	width: 100%;
	text-align: center;
	margin-top: 4rem;
`;
