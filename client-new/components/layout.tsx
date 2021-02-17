import React from 'react';
interface Interface {
    title:any,
    headerStyle?:any,
    containerType?:any,
    children?:any,
    clearSpaceTop?:any,
}
import Header from "../src/header/header";
import {GlobalStyle} from "../styles/GlobalStyles";
import {ThemeProvider} from "styled-components";
import {defaultTheme} from "../styles/theme";
import Sticky from 'react-stickynode';
import dynamic from "next/dynamic";
const MobileHeader = dynamic(() => import('../src/header/mobile-header'), {
    ssr: false,
});
const Layout:React.FC<Interface> = ({title, headerStyle, containerType, children, clearSpaceTop}) => {
    return (
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyle/>
            <Sticky enabled={true} innerZ={1001}>

            <Header/>
            </Sticky>
                <title>{title}</title>
                {children}
        </ThemeProvider>
    );
};

export default Layout;