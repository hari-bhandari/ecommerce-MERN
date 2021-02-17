import React from 'react';
interface Interface {
    title:any,
    headerStyle?:any,
    containerType?:any,
    children?:any,
    clearSpaceTop?:any,
}
import Header from "../src/header/header";


const Layout:React.FC<Interface> = ({title, headerStyle, containerType, children, clearSpaceTop}) => {
    return (
        <>
            <Header/>
                <title>{title}</title>
                {children}
        </>
    );
};

export default Layout;