import React from 'react';

import ArtworBig from './ArtworkBig';
import CustomLink from './CustomLink';

import {
	Container,
	Title,
	Content,
	LinkContainer,
} from './../styles/ArtworkWeek.styles';

// TODO: Replace dummy data with fetch
const artworkWeek = {
	name: 'SHIVAM',
	artist: { name: '' },
	image: require('./../assets/sampleArtworkBig.png'),
};

const ArtworkWeek = () => {
	return (
		<Container>
			<Title>ARTWORKS OF THE WEEK</Title>
			<Content>
				<ArtworBig {...artworkWeek} />
				<ArtworBig {...artworkWeek} />
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
