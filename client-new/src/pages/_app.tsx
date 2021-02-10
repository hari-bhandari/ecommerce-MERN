import React from "react";

import { Provider } from "react-redux";
import '@/styles/global.css';
import { persistor } from "../redux/store";
import { PersistGate } from "redux-persist/lib/integration/react";

import withReduxStore from "../withReduxStore";
interface AppProps{
    Component:any;
    pageProps:any;
    reduxStore:any
}
const App:React.FC<AppProps> = ({ Component, pageProps, reduxStore }) => {
  return (
      <Provider store={reduxStore}>
        <PersistGate loading={<div>Loading</div>} persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
  )
}
export default withReduxStore(App);
