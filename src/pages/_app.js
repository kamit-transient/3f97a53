import "../styles/globals.css";
import { useState } from "react";
import AppContext from "../context/appContext";
import Layout from "../components/layout";
import Modal from 'react-modal';

Modal.setAppElement('#__next');

function MyApp({ Component, pageProps }) {
	
	
  let [ appState, setAppState ] = useState({
    files: [],
	  prefix:""
  });

  return (
    <AppContext.Provider
      value={{ appState: appState, setAppState: setAppState }}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppContext.Provider>
  );
}

export default MyApp;