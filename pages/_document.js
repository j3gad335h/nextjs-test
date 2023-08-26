import { ServerStyleSheets } from '@mui/styles';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import React, { useEffect } from 'react';

function MyDocument() {
  useEffect(() => {
    // Remove the server-side injected CSS once the client-side takes over
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);


  return (
    <Html>
      <Head>
        <script dangerouslySetInnerHTML={{
          __html: `
      <script async src="https://www.googletagmanager.com/gtag/js?id=AW-661792686"></script>
      <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
          dataLayer.push(arguments);
        }
        gtag("js", new Date());

        gtag("config", "AW-661792686");
      </script>
    `,
        }} />
        <script dangerouslySetInnerHTML={{
          __html: `
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-155260236-1"></script>
      <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
          dataLayer.push(arguments);
        }
        gtag("js", new Date());

        gtag("config", "UA-155260236-1");
      </script>
    `,
        }} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.lintrk("track", {
                conversion_id: 10229601,
              });
            `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.lintrk("track", {
                conversion_id: 10229609,
              });
            `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

MyDocument.getInitialProps = async (ctx) => {
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement(),
    ],
  };
};

export default MyDocument;
