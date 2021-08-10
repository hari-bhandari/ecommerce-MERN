import React from 'react';
import Logo from '../../../logo/logo';
import {LeftMenuBox,} from './LeftMenuStyle';

export const CategoryIcon:React.FC<{link:string,height:string,width:string}> = ({ link,height,width }) => {
    // @ts-ignore
    return link? <img src={link} alt="Icon" style={{width:width,height:height}}/> : null;
};


export const LeftMenu = ({}) => {
    return (
        <LeftMenuBox>
            <Logo/>
        </LeftMenuBox>
    );
};
