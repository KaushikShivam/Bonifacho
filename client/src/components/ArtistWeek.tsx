import React from 'react';
import artistWeek from './../assets/ArtistWeek.png';

import {
	ArtistWeekContainer,
	Info,
	Title,
	SubTitle,
	Description,
} from './../styles/ArtistWeek.styles';

const ArtistWeek = () => {
	return (
		<ArtistWeekContainer>
			<Info>
				<SubTitle>Artist of the week</SubTitle>
				<Title>GUIDO ARGENTINI</Title>
				<Description>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
					porttitor leo in metus dignissim ultrices. Phasellus non dapibus nisl,
					in pretium mi. Maecenas molestie massa leo quis efficitur dolor
					tristique et.
				</Description>
				{/* <CustomLink>VIEW COLLECTION</CustomLink> */}
			</Info>
			<div className='img'>
				<img src={`${artistWeek}`} alt='Artist of the week' />
			</div>
		</ArtistWeekContainer>
	);
};

export default ArtistWeek;

// import React from 'react';
// import './ArtistWeek.scss';

// import CustomLink from './../../../../components/CustomLink/CustomLink';

// export default ArtistWeek;
