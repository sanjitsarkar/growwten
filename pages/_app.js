import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../lib/firebase";
import { AuthProvider } from "../lib/store/AuthStore";
import { UtilityProvider } from "../lib/store/UtiltyStore";
import "../styles/globals.css";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
function MyApp({ Component, pageProps }) {
  const options = {
    // you can also just use 'bottom center'
    position: positions.TOP_RIGHT,
    timeout: 3000,
    offset: "30px",

    // you can also just use 'scale'
    transition: transitions.SCALE,
  };
  return (
    <AlertProvider template={AlertTemplate} {...options}>
      <AuthProvider>
        <UtilityProvider>
          <Component {...pageProps} />
        </UtilityProvider>
      </AuthProvider>
    </AlertProvider>
  );
}

export default MyApp;
