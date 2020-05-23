import React from 'react';

import CustomLink from './CustomLink';

import {
	Container,
	Title,
	Content,
	LinkContainer,
} from './../styles/ArtworkWeek.styles';

const ArtworkWeek = () => {
	return (
		<Container>
			<Title>ARTWORKS OF THE WEEK</Title>
			<Content>
				{/* {artworkWeek.map((artwork) => (
					<ArtworkBig key={artwork.id} {...artwork} />
				))} */}
			</Content>
			<LinkContainer>
				<CustomLink>SHOP ALL ARTWORKS</CustomLink>
			</LinkContainer>
		</Container>
	);
};

export default ArtworkWeek;
