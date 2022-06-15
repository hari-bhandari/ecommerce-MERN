import React from "react";
import {useMedia} from '../assets/use-media';
import './modal.css';
import {ThemeProvider} from "styled-components";
import {defaultTheme} from "../../styles/theme";
import {GlobalStyle} from "../../styles/GlobalStyles";
import AuthState from "@/context/auth/AuthState";
import CartState from "@/context/cart/cartState";
import 'rc-drawer/assets/index.css';
import Layout from "@/components/Layout/layout";
import ShopState from "@/context/shop/shopState";
import {fetchData} from "@/pages/product/[slug]";
import {API_BASE_URL} from "@/utils/config";

interface AppProps {
    Component: any;
    pageProps: any;
    data: any;
}

const App: React.FC<AppProps> = ({Component, pageProps, data}) => {
    console.log(data)
    const mobile = useMedia('(max-width: 579px)');
    const tablet = useMedia('(min-width:580px) and (max-width: 991px)');
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

export async function getServerSideProps({params}) {

    const data = await fetchData(`${API_BASE_URL}/api/v1/category/sub`).then(data => data
    ).catch((error) => {
        console.log(error)
    })
    return {
        props: {
            data
        },
    };
}


export default App;
