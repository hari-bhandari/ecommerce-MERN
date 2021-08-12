import React, {useContext, useEffect} from 'react';
import Header from "./header/header";
import styled from "styled-components";
import Sticky from 'react-stickynode';
import {themeGet} from '@styled-system/theme-get';
import {FooterComponent} from "@/components/Layout/Footer/Footer";
import MobileHeader from "@/components/Layout/header/MobileHeader";
import authContext from "@/context/auth/authContext";
import shopContext from "@/context/shop/shopContext";
import dynamic from "next/dynamic";

const Modal = dynamic(() =>
    import('@haribhandari/react-popup-modal').then((mod) => mod.Modal)
)

interface Interface {
    children?: any,
    className?: string | undefined
}

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
    const auth = useContext(authContext);
    const { loadUser } = auth;
    const shop=useContext(shopContext)
    const {setCurrencyData}=shop
    useEffect(() => {
        loadUser()
        setCurrencyData()
    }, [])
    return (
        <Modal>
            <LayoutWrapper className={`layoutWrapper ${className}`}>
                <Sticky enabled={false} innerZ={900} top={0}>
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
        </Modal>
    );
};

export default Layout;
