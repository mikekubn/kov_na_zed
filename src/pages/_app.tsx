import React from 'react';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Main from 'src/layout/Main';
import Footer from 'src/layout/Footer';
import Header from 'src/layout/Header';

const MyApp = ({ Component, pageProps }: AppProps): React.ReactElement => (
  <>
    <Header />
    <Main>
      <Component {...pageProps} />
    </Main>
    <Footer />
  </>
);

export default MyApp;
