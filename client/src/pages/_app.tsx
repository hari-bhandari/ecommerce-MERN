import React from "react";
import {Provider} from "react-redux";
import {persistor} from "../redux/store";
import {PersistGate} from "redux-persist/lib/integration/react";
import {useMedia} from '../assets/use-media';
import withReduxStore from "../withReduxStore";
import '@redq/reuse-modal/lib/index.css';
import {ThemeProvider} from "styled-components";
import {defaultTheme} from "../../styles/theme";
import {GlobalStyle} from "../../styles/GlobalStyles";
interface AppProps {
    Component: any;
    pageProps: any;
    reduxStore: any
}
import 'rc-drawer/assets/index.css';
import Layout from "@/components/Layout/layout";
import LoadingComponent from "@/LoadingComponent";

const App: React.FC<AppProps> = ({Component, pageProps, reduxStore}) => {
    const mobile = useMedia('(max-width: 580px)');
    const tablet = useMedia('(max-width: 991px)');
    const desktop = useMedia('(min-width: 992px)');
    return (
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
    )
}
export default withReduxStore(App);
