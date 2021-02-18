import React from "react";
import { Provider } from "react-redux";
import { persistor } from "../redux/store";
import { PersistGate } from "redux-persist/lib/integration/react";
import {GlobalStyle} from "../../styles/GlobalStyles";
import { useMedia } from '../assets/use-media';

import withReduxStore from "../withReduxStore";
interface AppProps{
    Component:any;
    pageProps:any;
    reduxStore:any
}
const App:React.FC<AppProps> = ({ Component, pageProps, reduxStore }) => {
    const mobile = useMedia('(max-width: 580px)');
    const tablet = useMedia('(max-width: 991px)');
    const desktop = useMedia('(min-width: 992px)');
  return (
      <Provider store={reduxStore}>
        <PersistGate loading={<div>Loading</div>} persistor={persistor}>
          <Component {...pageProps} deviceType={{ mobile, tablet, desktop }}/>
        </PersistGate>
      </Provider>
  )
}
export default withReduxStore(App);
