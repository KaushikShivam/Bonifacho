import React from 'react';

// Components
import Hero from './../components/Hero';
import ArtworkWeek from './../components/ArtworkWeek';
import ArtistWeek from './../components/ArtistWeek';

const Home = () => {
	return (
		<div>
			<Hero />
			<ArtworkWeek />
			<ArtistWeek />
		</div>
	);
};

export default Home;
