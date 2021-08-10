import Link from 'next/link';
import React from 'react';
import {LogoBox, LogoImage} from './logo.style';

import LogoJSX from "@/assets/images/Logo";

const Logo = () => {

    return (
        <LogoBox>
            <Link href={'/'}>
                <LogoImage>
                    <LogoJSX/>
                </LogoImage>
            </Link>
        </LogoBox>
    );
};

export default Logo;
