import "../styles/globals.css";
import { Provider, useSelector } from "react-redux";
import store from "../store/store";

import { persistor } from "../store/store";
import { PersistGate } from "redux-persist/integration/react";

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}
