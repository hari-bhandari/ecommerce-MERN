import React from 'react';
import Logo from '../../../logo/logo';
import {useRouter} from "next/router";
import {
    LeftMenuBox,
} from './LeftMenuStyle';
import CategorySearchSwitcher from "@/header/menu/left-menu/CategorySearchSwitcher";

export const CategoryIcon:React.FC<{link:string,height:string,width:string}> = ({ link,height,width }) => {
    // @ts-ignore
    return link? <img src={link} alt="Icon" style={{width:width,height:height}}/> : null;
};

type Props = {
    logo: string;
};

export const LeftMenu: React.FC<Props> = ({ logo }) => {
    const router=useRouter()


    return (
        <LeftMenuBox>
            <Logo
                imageUrl={logo}
                alt={'Shop Logo'}
                onClick={() => router.push('/')}
            />
        </LeftMenuBox>
    );
};
