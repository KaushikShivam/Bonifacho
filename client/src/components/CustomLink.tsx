import React, { ReactNode } from 'react';

import { StyledLink } from './../styles/CustomLink.styles';

interface AppProps {
	children: ReactNode;
}

const CustomLink = ({ children }: AppProps) => {
	return <StyledLink to='/'>{children}</StyledLink>;
};

export default CustomLink;
