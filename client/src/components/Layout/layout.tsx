import React, {useEffect} from 'react';
interface Interface {
    children?:any,
    className?:string|undefined
}
import Header from "./header/header";
import styled from "styled-components";
import Sticky from 'react-stickynode';
import dynamic from "next/dynamic";
import { themeGet } from '@styled-system/theme-get';
import {FooterComponent} from "@/components/Layout/Footer/Footer";
import {loadUser} from "@/redux/actions/globalActions";
import {useDispatch} from "react-redux";
import {setCurrencyData} from "@/redux/actions/shopActions";
import * as Process from "process";
const MobileHeader = dynamic(() => import('@/components/Layout/header/MobileHeader'), {
    ssr: false,
});
// @ts-ignore
export const LayoutWrapper = styled.div`
  background-color: ${themeGet('colors.white', '#ffffff')};

  @media (max-width: 990px) {
    background-color: ${themeGet('colors.white', '#ffffff')};
  }

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
  background: white;
`

const Layout:React.FC<Interface> = ({  className, children}) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadUser())
        dispatch(setCurrencyData())
    }, [])
    return (
            <LayoutWrapper className={`layoutWrapper ${className}`}>
                <Sticky enabled={false} innerZ={1001}>
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
                <FooterComponent/>
            </LayoutWrapper>
    );
};

export default Layout;
