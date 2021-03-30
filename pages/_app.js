import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_IMAGE}?v=${new Date().getTime()}`}
        />

        {/* <meta property="og:url" content="https://teste-og-image.vercel.app/" /> */}
        <meta property="og:url" content={process.env.NEXT_PUBLIC_IMAGE} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="imagem-teste-nuvem" />
        <meta property="og:description" content="description" />
        <meta property="fb:app" content="390969538026908" />
        <meta property="fb:app_id" content="390969538026908" />
        <meta property="og:updated_time" content={new Date().getTime()} />
        <meta
          http-equiv="Cache-Control"
          content="no-cache, no-store, must-revalidate"
        />
        <meta http-equiv="Pragma" content="no-cache" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
