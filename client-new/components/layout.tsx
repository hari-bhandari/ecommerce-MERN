import React from 'react';
interface Interface {
    children?:any,
    className?:string|undefined
}
import Header from "../src/header/header";
import {GlobalStyle} from "../styles/GlobalStyles";
import styled, {ThemeProvider} from "styled-components";
import {defaultTheme} from "../styles/theme";
import Sticky from 'react-stickynode';
import dynamic from "next/dynamic";
import { themeGet } from '@styled-system/theme-get';
import {IntlProvider} from "react-intl";
const MobileHeader = dynamic(() => import('@/header/MobileHeader'), {
    ssr: false,
});
export const LayoutWrapper = styled.div`
  background-color: ${themeGet('colors.gray.200', '#F7F7F7')};
  .reuseModalHolder {
    padding: 0;
    overflow: auto;
    border-radius: ${themeGet('radii.small', '3px')}
      ${themeGet('radii.small', '3px')} 0 0;
    border: 0;
  }
`;
const Container=styled.div`
  //margin-top: 90px;
`
const Layout:React.FC<Interface> = ({  className, children,}) => {
    return (
        <ThemeProvider theme={defaultTheme}>
            <LayoutWrapper>
                <IntlProvider locale={"en"}>
                <GlobalStyle/>
                <Sticky enabled={true} innerZ={1001}>
                    <MobileHeader
                        className={`sticky home desktop`}
                    />
                    <Header
                        className={'sticky home desktop'}
                    />
                </Sticky>
                <Container>
                    {children}
                </Container>
                </IntlProvider>
            </LayoutWrapper>
        </ThemeProvider>
    );
};

export default Layout;