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
import {IntlProvider} from "react-intl";
const MobileHeader = dynamic(() => import('../src/header/mobile-header'), {
    ssr: false,
});
const Layout:React.FC<Interface> = ({title, headerStyle, containerType, children, clearSpaceTop}) => {
    return (
        <ThemeProvider theme={defaultTheme}>
            <IntlProvider locale={"en"}>
            <GlobalStyle/>
            <Sticky enabled={true} innerZ={1001}>
                <MobileHeader
                    className={`sticky ${
                        true ? 'home' : ''
                    } desktop`}
                />
            <Header/>
            </Sticky>
                <title>{title}</title>
                {children}
            </IntlProvider>
        </ThemeProvider>
    );
};

export default Layout;