import "@fontsource/tajawal";
import { CssBaseline } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/system";
import { appWithTranslation } from "next-i18next";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { Suspense, useEffect, useState } from "react";
import ReactGA from "react-ga4";
import ScrollToTop from "react-scroll-to-top";
import "../styles/fonts.css";
const Footer = dynamic(() => import("../components/Footer/Footer"));
const FooterCopyRights = dynamic(() => import("../components/Footer/FooterCopyRights"));
import NewHeader from "../components/Header/NewHeader"; // Normal import

function App({ Component, pageProps }) {
  const { locale } = useRouter();
  //UA-249956445-1//
  //UA-250103509-1//
  // G-JBD2HNXM4S//
  // G-ELZDSSFFXD
  //FMD2181M8B
  const TRACKING_ID = "G-JBD2HNXM4S";
  // const TRACKING_ID = "UA-250103509-1";
  ReactGA.initialize(TRACKING_ID);
  useEffect(() => {
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
  }, [locale]);

  const theme = createTheme({
    typography: {
      fontFamily: locale === "ar" ? "Tajawal" : "Ample",
      letterSpacing: "0.00938em !important",
      lineHeight: " 1.5 !important",
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          letterSpacing: "0.00938em !important",
          lineHeight: " 1.5 !important",
        },
      },
    },
    MuiGrid: {
      styleOverrides: {
        root: {
          marigin: "0px",
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Raqamyah | رقمية - Crowdfunding in Saudi Arabia | SME Crowd Lending in Saudi Arabia</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Crowdfunding in Saudi Arabia | SME Crowd Lending in Saudi Arabia" />
        {/* Preload the CSS file */}
        <link rel="preload" href="/fonts.css" as="style" onload="this.onload=null;this.rel='stylesheet'" />
        <link rel="preload" href="/font/Ample-Regular6_0.otf" as="font" type="font/woff2" crossorigin="anonymous" />
        {/* Preload the JavaScript file */}
        <link rel="preload" href="/styles/Header/HeaderStyle.js" as="script" />
        <link rel="preload" href="/styles/pages/howitworks/howItWorkStyle.js" as="script" />
        <noscript>
          <link rel="stylesheet" href="/fonts.css" />
        </noscript>
      </Head>
      <div>
        <CssBaseline />
        <NewHeader />
        <Component {...pageProps} />
        <Footer />
        <FooterCopyRights />
        <ScrollToTop smooth color="#37A753" />
      </div>
    </ThemeProvider>
  );
}
export default appWithTranslation(App);
