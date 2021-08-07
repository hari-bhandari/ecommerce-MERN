import React from "react";
import {useMedia} from '../assets/use-media';
import './modal.css';
import {ThemeProvider} from "styled-components";
import {defaultTheme} from "../../styles/theme";
import {GlobalStyle} from "../../styles/GlobalStyles";
import AuthState from "@/context/auth/AuthState";
import CartState from "@/context/cart/cartState";

interface AppProps {
    Component: any;
    pageProps: any;
    reduxStore: any
}

import 'rc-drawer/assets/index.css';
import Layout from "@/components/Layout/layout";
import ShopState from "@/context/shop/shopState";

const App: React.FC<AppProps> = ({Component, pageProps, reduxStore}) => {
    const mobile = useMedia('(max-width: 580px)');
    const tablet = useMedia('(max-width: 991px)');
    const desktop = useMedia('(min-width: 992px)');
    return (
        <AuthState>
            <ShopState>
                <CartState>
                            <ThemeProvider theme={defaultTheme}>
                                <GlobalStyle/>
                                <Layout>
                                    <Component {...pageProps} deviceType={{mobile, tablet, desktop}}/>
                                </Layout>
                            </ThemeProvider>
                </CartState>
            </ShopState>
        </AuthState>
    )
}
export default App;
