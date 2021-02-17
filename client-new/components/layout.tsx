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

const Layout:React.FC<Interface> = ({title, headerStyle, containerType, children, clearSpaceTop}) => {
    return (
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyle/>
            <Header/>
                <title>{title}</title>
                {children}
        </ThemeProvider>
    );
};

export default Layout;