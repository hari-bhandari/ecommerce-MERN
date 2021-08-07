import React from "react";
import {Provider} from "react-redux";
import {persistor} from "../redux/store";
import {PersistGate} from "redux-persist/lib/integration/react";
import {useMedia} from '../assets/use-media';
import withReduxStore from "../withReduxStore";
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
import LoadingComponent from "@/LoadingComponent";
import ShopState from "@/context/shop/shopState";

const App: React.FC<AppProps> = ({Component, pageProps, reduxStore}) => {
    const mobile = useMedia('(max-width: 580px)');
    const tablet = useMedia('(max-width: 991px)');
    const desktop = useMedia('(min-width: 992px)');
    return (
        <AuthState>
            <ShopState>
                <CartState>
                    <Provider store={reduxStore}>
                        <PersistGate loading={<LoadingComponent/>} persistor={persistor}>
                            <ThemeProvider theme={defaultTheme}>
                                <GlobalStyle/>
                                <Layout>
                                    <Component {...pageProps} deviceType={{mobile, tablet, desktop}}/>
                                </Layout>
                            </ThemeProvider>
                        </PersistGate>
                    </Provider>
                </CartState>
            </ShopState>
        </AuthState>
    )
}
export default withReduxStore(App);
