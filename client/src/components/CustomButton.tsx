import React, { ReactNode } from 'react';

import { ButtonContainer } from './../styles/CustomButton.styles';

interface AppProps {
	children: ReactNode;
	backgroundColor: string;
	fontSize: string;
	padding: string;
	handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const CustomButton = ({ children, handleClick, ...otherProps }: AppProps) => {
	return (
		<ButtonContainer {...otherProps} onClick={handleClick}>
			{children}
		</ButtonContainer>
	);
};

export default CustomButton;
