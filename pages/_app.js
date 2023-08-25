
import "@fontsource/tajawal";
import { CssBaseline } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/system';
import { appWithTranslation } from "next-i18next";
import dynamic from "next/dynamic";
import Head from 'next/head';
import { useRouter } from 'next/router';
import Router from "next/router";
import React, { Suspense, useEffect, useState } from 'react';
import ReactGA from "react-ga4";
import ScrollToTop from "react-scroll-to-top";
import '../styles/Home.module.css';
import '../styles/fonts.css';
import Loader from "../components/Loader/Loader";
const Footer = dynamic(() => import('../components/Footer/Footer'));
const FooterCopyRights = dynamic(() => import('../components/Footer/FooterCopyRights'));
const NewHeader = dynamic(() => import('../components/Header/NewHeader'));



function App({ Component, pageProps }) {
  const { locale } = useRouter();
  const router = useRouter();
  const [loading, setLoading] = React.useState(true);
  const [showButton, setShowButton] = useState(100);
  //UA-249956445-1//
  //UA-250103509-1//
  // G-JBD2HNXM4S//
  // G-ELZDSSFFXD
  //FMD2181M8B
  const TRACKING_ID = "G-JBD2HNXM4S";
  // const TRACKING_ID = "UA-250103509-1";
  ReactGA.initialize(TRACKING_ID);
  useEffect(() => {
    document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr';
  }, [locale]);

  useEffect(() => {
    Router.events.on("routeChangeStart", () => setLoading(true));
    Router.events.on("routeChangeComplete", () => setLoading(false));
    Router.events.on("routeChangeError", () => setLoading(false));
    return () => {
      Router.events.off("routeChangeStart", () => setLoading(true));
      Router.events.off("routeChangeComplete", () => setLoading(false));
      Router.events.off("routeChangeError", () => setLoading(false));
    };
  }, [Router.events]);
  const theme = createTheme({
    typography: {
      fontFamily: locale === 'ar' ? 'Tajawal' : 'Ample',
      letterSpacing: '0.00938em !important',
      lineHeight: " 1.5 !important",
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          letterSpacing: '0.00938em !important',
          lineHeight: " 1.5 !important",
        }
      }

    },
    MuiGrid: {
      styleOverrides: {
        root: {
          marigin: '0px'
        }
      }

    }


  });

  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Raqamyah | رقمية - Crowdfunding in Saudi Arabia | SME Crowd Lending in Saudi Arabia</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Crowdfunding in Saudi Arabia | SME Crowd Lending in Saudi Arabia" />
      </Head>
      <Suspense >
        <NewHeader />
        <CssBaseline />
        {/* <Component {...pageProps} /> */}
        {loading ? <Loader /> : <Component {...pageProps} />}
        <Footer />
        <ScrollToTop smooth color="#37A753" />
        <FooterCopyRights />
      </Suspense>
    </ThemeProvider>
  )

}
export default appWithTranslation(App);