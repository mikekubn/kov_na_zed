import React from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';
import Grid, { GridItem } from '@/components/Grid';
import Banner from '@/components/Banner';
import Slider from '@/components/Slider';
import { motion } from 'framer-motion';
import { getPosts, sanityUrl } from '@/utils/helpers';
import { IProduct } from 'types';
import ProductCard from '@/components/Card';

const Home: NextPage<{ products: IProduct[] }> = ({ products }) => {
  return (
    <>
      <Banner />
      <section className="bg-white relative z-20">
        <Slider />
        <div className="flex flex-row my-10">
          <span className="shrink xl:mx-auto text-3xl px-4">Akční nabídka</span>
        </div>
        <Grid>
          {products
            .filter((item) => item.frontmatter.discount)
            .map((item) => (
              <GridItem key={item.filename} link={sanityUrl(item.filename)}>
                <ProductCard item={item.frontmatter} />
              </GridItem>
            ))}
        </Grid>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="my-10 flex justify-center items-center flex-row py-2 w-36 xl:w-44 h-14 text-white bg-black shadow-sm shadow-black mx-auto cursor-pointer">
          Ukázat vše
        </motion.button>
        <div className="flex flex-row items-center justify-center my-24 xl:my-36">
          <Image src="/kov-na-zed-logo.png" width="232" height="99" />
          <p className="ml-20 w-9/12 text-left">
            Každý Náš výrobek Nám prochází rukama, a proto v nich zanecháváme i kus Naší lásky. Věříme, že Naše kovové dekorace přinesou osobitý styl
            do Vašeho domova. Doufáme, že Náš výrobek se stane nejen neobyčejnou dekorací, ale i chloubou a součástí Vašeho života. Naše kovová
            dekorace na stěnu promění váš interiér.
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;

export const getStaticProps = () => {
  const products = getPosts('src/_products');

  return {
    props: {
      products,
    },
  };
};
