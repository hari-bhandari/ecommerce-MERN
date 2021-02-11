import React from 'react';
import Head from "next/head"
import Header from '../components/header/Header'
import {BackTop,message} from'antd'
import SubpagesSidebar from '../components/header/SubpagesSidebar'
import WithHeaderScroll from "../components/header/WithHeaderScroll";
const ScrollHeader = WithHeaderScroll(Header);
interface Interface {
    title:any,
    headerStyle?:any,
    containerType?:any,
    children?:any,
    clearSpaceTop?:any,
}
import classNames from "classnames";

const Layout:React.FC<Interface> = ({title, headerStyle, containerType, children, clearSpaceTop}) => {
    message.config({
        maxCount: 3,
        duration: 1,
    });
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <ScrollHeader headerStyle={headerStyle} containerType={containerType} />
            <div className={`content ${classNames({ "clear-top": clearSpaceTop })}`}>
                {children}
            </div>
            <BackTop />
            <SubpagesSidebar />
        </>
    );
};

export default Layout;