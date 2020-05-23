import React from 'react';

import CustomButton from './CustomButton';

import { HeroContainer, Title, SubTitle } from './../styles/Hero.styles';

// TODO: Handle click routing for custom buttons

const Hero = () => {
	return (
		<HeroContainer>
			<SubTitle>HOUSE OF 99 PRESENTS</SubTitle>
			<Title>BONIFACHO</Title>
			<div className='btns'>
				<CustomButton
					backgroundColor='#AB9B8A'
					padding='1.5rem 3rem'
					fontSize='1.5rem'
					handleClick={() => {}}
				>
					SHOW ALL LIMITED EDITIONS
				</CustomButton>
				<CustomButton
					backgroundColor='#000000'
					padding='1.5rem 3rem'
					fontSize='1.5rem'
					handleClick={() => {}}
				>
					SHOW ALL ORIGINAL ARTWORKS
				</CustomButton>
			</div>
		</HeroContainer>
	);
};

export default Hero;
