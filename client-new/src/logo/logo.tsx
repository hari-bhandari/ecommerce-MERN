import React from 'react';
import Router from 'next/router';
import { LogoBox, LogoImage } from './logo.style';
interface LogoProps {
  imageUrl: string;
  alt: string;
  onClick?: () => void;
}

const Logo: React.FC<LogoProps> = ({ imageUrl, alt, onClick }) => {
  function onLogoClick() {

  }
  return (
    <LogoBox onClick={onLogoClick}>
      <LogoImage src={imageUrl} alt={alt} />
    </LogoBox>
  );
};

export default Logo;
