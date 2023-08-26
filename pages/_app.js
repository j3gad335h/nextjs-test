import React, { useEffect } from "react";
import { appWithTranslation } from "next-i18next";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import ReactGA from "react-ga4";
import ScrollToTop from "react-scroll-to-top";
const NewHeader = dynamic(() => import("../components/Header/NewHeader"));
const Footer = dynamic(() => import("../components/Footer/Footer"));
const FooterCopyRights = dynamic(() => import("../components/Footer/FooterCopyRights"));
import { CssBaseline } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/system";

function App({ Component, pageProps }) {
  const { locale } = useRouter();
  const theme = createTheme({
    typography: {
      fontFamily: locale === "ar" ? "Tajwal-local" : "Ample",
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

  return (
    <>
      <ThemeProvider theme={theme}>
        <Head>
          <title>Raqamyah | رقمية - Crowdfunding in Saudi Arabia | SME Crowd Lending in Saudi Arabia</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content="Crowdfunding in Saudi Arabia | SME Crowd Lending in Saudi Arabia" />
          <link rel="preload" href="/font/Ample-Regular6_0.otf" as="font" type="font/otf" crossOrigin="anonymous" />
          <link rel="preload" href="/font/Tajawal-Regular.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
          <link rel="stylesheet" href="/globalstyle.css" as="style" />
        </Head>
        <CssBaseline />
        <NewHeader />
        {/* {fontsLoaded && <NewHeader />} */}
        <Component {...pageProps} />
        <FooterCopyRights />
        <ScrollToTop smooth color="#37A753" />
        <Footer />
      </ThemeProvider>
    </>
  );
}
export default appWithTranslation(App);

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "footer"])),
      // Will be passed to the page component as props
    },
  };
}
