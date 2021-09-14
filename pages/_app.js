import { positions, Provider as AlertProvider, transitions } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import { AuthProvider } from "../lib/store/AuthStore";
import { UtilityProvider } from "../lib/store/UtiltyStore";
import Head from "next/head";
import "../styles/globals.css";
import { useEffect } from "react";
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", function () {
        navigator.serviceWorker.register("/sw.js").then(
          function (registration) {
            console.log(
              "Service Worker registration successful with scope: ",
              registration.scope
            );
          },
          function (err) {
            console.log("Service Worker registration failed: ", err);
          }
        );
      });
    }
  }, []);
  const options = {
    // you can also just use 'bottom center'
    position: positions.TOP_RIGHT,
    timeout: 3000,
    offset: "30px",

    // you can also just use 'scale'
    transition: transitions.SCALE,
  };
  return (
    <>
      <Head>
        <title>GrowwTen - Grow with us </title>
        <meta
          name="description"
          content="Your one stop solution for social media growth and earning."
        />

        <meta property="title" content="GrowwTen - Grow with us" />
        <meta property="image" content="https://i.ibb.co/yFDfbBp/growth.png" />
        <meta
          name="google-site-verification"
          content="tDPbEgdbFXKcxWhpM59iMblIRfVa-RQvSXuuiEFU1Vk"
        />
        <link rel="manifest" href="/manifest.json" />
        <link
          href="/favicon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/favicon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/apple-icon.png"></link>
        <meta name="theme-color" content="#FFFFFF" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://growwten.com/" />

        <meta
          name="author"
          content="Rajibul Islam, Sanjit Sarkar, Najrul Islam"
        />
        <meta
          property="og:image"
          content="https://i.ibb.co/yFDfbBp/growth.png"
        />

        <meta property="og:title" content="GrowwTen - Grow with us" />
        <meta
          property="og:description"
          content="A Digital Marketing Company for Social Media Influencers and Content Creators."
        />

        <meta property="og:url" content="https://growwten.com" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AlertProvider template={AlertTemplate} {...options}>
        <AuthProvider>
          <UtilityProvider>
            <Component {...pageProps} />
          </UtilityProvider>
        </AuthProvider>
      </AlertProvider>
    </>
  );
}

export default MyApp;
