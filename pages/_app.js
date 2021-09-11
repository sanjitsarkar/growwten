import { AuthProvider } from "../lib/store/AuthStore";
import { LoginModalProvider } from "../lib/store/LoginModalStore";
import "../styles/globals.css";
// import "../lib/firebase";
function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <LoginModalProvider>
        <Component {...pageProps} />
      </LoginModalProvider>
    </AuthProvider>
  );
}

export default MyApp;
