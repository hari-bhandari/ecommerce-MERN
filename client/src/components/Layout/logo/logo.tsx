import Link from 'next/link';
import React from 'react';
import {LogoBox, LogoImage} from './logo.style';

import LogoJSX from "@/assets/images/Logo";

const Logo = () => {

    return (

        <Link href={'/'}>
            <LogoBox>
                <LogoImage>
                    <LogoJSX/>
                </LogoImage>
            </LogoBox>
        </Link>
    );
};

export default Logo;
