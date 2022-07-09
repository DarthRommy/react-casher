import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import nProgress from "nprogress";
import "nprogress/nprogress.css";
import type { FC } from "react";
import { useEffect } from "react";
import { RecoilRoot } from "recoil";
import "zenn-content-css";
import AppFooter from "../layouts/AppFooter";
import AppHeader from "../layouts/AppHeader";
import "../styles/global/colors.css";
import "../styles/global/fonts.css";
import "../styles/global/globalStyle.css";
import "../styles/global/misc.css";
import "../styles/global/spaces.css";

nProgress.configure({ showSpinner: false, speed: 100, minimum: 0.2 });

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  const { events } = useRouter();

  useEffect(() => {
    const handleStart = () => nProgress.start();
    const handleStop = () => nProgress.done();

    events.on("routeChangeStart", handleStart);
    events.on("routeChangeComplete", handleStop);
    events.on("routeChangeError", handleStop);

    return () => {
      events.off("routeChangeStart", handleStart);
      events.off("routeChangeComplete", handleStop);
      events.off("routeChangeError", handleStop);
    };
  });

  useEffect(() => {
    import("zenn-embed-elements");
  }, []);

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Casher.js</title>
        <meta name="viewport" content="width=device-width,shrink-to-fit=no" />
      </Head>
      <RecoilRoot>
        <AppHeader />
        <Component {...pageProps} />
        <AppFooter />
      </RecoilRoot>
    </>
  );
};

export default MyApp;
