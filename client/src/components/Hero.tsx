import React from 'react';

import { HeroContainer, Title, SubTitle } from './../styles/Hero.styles';

const Hero = () => {
	return (
		<HeroContainer>
			<SubTitle>HOUSE OF 99 PRESENTS</SubTitle>
			<Title>BONIFACHO</Title>
			<div className='btns'></div>
		</HeroContainer>
	);
};

export default Hero;
// import heroBg from './../../../../assets/heroBg.png';

// import CustomButton from './../../../../components/CustomButton/CustomButton';

// const Hero = () => {
//   return (
//     <div className="Hero">
//       <h3 className="Hero-subtitle">HOUSE OF 99 PRESENTS</h3>
//       <h1 className="Hero-title">BONIFACHO</h1>
//       <div className="Hero-btns">
//         <CustomButton
//           backgroundColor="#AB9B8A"
//           padding="1.5rem 3rem"
//           fontSize="1.5rem"
//         >
//           SHOW ALL LIMITED EDITIONS
//         </CustomButton>
//         <CustomButton
//           backgroundColor="#000000"
//           padding="1.5rem 3rem"
//           fontSize="1.5rem"
//         >
//           SHOW ALL ORIGINAL ARTWORKS
//         </CustomButton>
//       </div>
//     </div>
//   );
// };

// export default Hero;
