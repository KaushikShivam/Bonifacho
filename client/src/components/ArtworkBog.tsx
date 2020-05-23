import React from 'react';

import CustomButton from './CustomButton';

import {
	ImageContainer,
	Content,
	Title,
	Author,
	Detail,
} from './../styles/ArtworkBig.styles';

interface AppProps {
	name: string;
	artist: {
		name: string;
	};
	image: string;
}

// TODO: Handle Click handler

const ArtworkBig = ({ name, artist, image }: AppProps) => {
	return (
		<div>
			<ImageContainer>
				<img src={image} alt={name} />
			</ImageContainer>
			<Content>
				<div>
					<Title>{name}</Title>
					<Author>{artist.name}</Author>
				</div>
				<div className='ArtworkBig-detail'>
					<CustomButton
						backgroundColor={`#AB9B8A`}
						padding='5px 7px'
						fontSize='1rem'
						handleClick={() => {}}
					>
						SHOP NOW
					</CustomButton>
					<p className='ArtworkBig-price'>$3,490</p>
				</div>
			</Content>
		</div>
	);
};

export default ArtworkBig;
