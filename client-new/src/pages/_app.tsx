import React from "react";
import {Provider} from "react-redux";
import {persistor} from "../redux/store";
import {PersistGate} from "redux-persist/lib/integration/react";
import {useMedia} from '../assets/use-media';
import Layout, {LayoutWrapper} from "../../components/layout";
import withReduxStore from "../withReduxStore";
import '@redq/reuse-modal/lib/index.css';
import {ThemeProvider} from "styled-components";
import {defaultTheme} from "../../styles/theme";
import {IntlProvider} from "react-intl";
import {GlobalStyle} from "../../styles/GlobalStyles";

interface AppProps {
    Component: any;
    pageProps: any;
    reduxStore: any
}

const App: React.FC<AppProps> = ({Component, pageProps, reduxStore}) => {
    const mobile = useMedia('(max-width: 580px)');
    const tablet = useMedia('(max-width: 991px)');
    const desktop = useMedia('(min-width: 992px)');
    return (
        <Provider store={reduxStore}>
            <PersistGate loading={<div>Loading</div>} persistor={persistor}>
                <ThemeProvider theme={defaultTheme}>
                    <IntlProvider locale={"en"}>
                        <GlobalStyle/>
                        <Layout>
                            <Component {...pageProps} deviceType={{mobile, tablet, desktop}}/>
                        </Layout>
                    </IntlProvider>
                </ThemeProvider>
            </PersistGate>
        </Provider>
    )
}
export default withReduxStore(App);
