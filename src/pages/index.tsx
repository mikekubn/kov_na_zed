import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Michael Kubín</title>
        <meta name="description" content="Nextjs template" />
        <meta property="og:title" content="Nextjs template" />
        <meta property="og:description" content="Nextjs template" />
        <meta property="og:url" content="https://Nextjs_template.cz/" />
        <meta property="og:type" content="website" />
      </Head>
      <div>Nextjs template</div>
    </>
  );
};

export default Home;
