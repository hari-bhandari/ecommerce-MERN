import React from 'react';
import { LogoBox, LogoImage } from './logo.style';
interface LogoProps {
  imageUrl: string;
  alt: string;
  onClick?: () => void;
}

const Logo: React.FC<LogoProps> = ({ imageUrl, alt, onClick }) => {

  return (
    <LogoBox onClick={onClick}>
      <LogoImage src={imageUrl} alt={alt} />
    </LogoBox>
  );
};

export default Logo;
