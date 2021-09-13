import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../lib/firebase";
import { AuthProvider } from "../lib/store/AuthStore";
import { UtilityProvider } from "../lib/store/UtiltyStore";
import "../styles/globals.css";
// import "../lib/firebase";
function MyApp({ Component, pageProps }) {
  const [user, loading] = useAuthState(auth);
  useEffect(() => {
    console.log("user", user, "loading", loading);
  }, [user, loading]);
  return (
    <AuthProvider>
      <UtilityProvider>
        <Component {...pageProps} />
      </UtilityProvider>
    </AuthProvider>
  );
}

export default MyApp;
