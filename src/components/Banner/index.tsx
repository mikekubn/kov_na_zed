import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Banner = (): React.ReactElement => (
  <section className="sticky top-48 flex flex-row justify-center">
    <Image src="/slider.png" width="1281" height="547" />
    <div className="absolute md:top-8 md:left-8 lg:top-16 lg:left-16 xl:top-24 xl:left-36">
      <h1 className="text-3xl xl:text-4xl w-72 xl:w-96">
        <strong>Moderní design</strong> do Vašeho interiéru nově skladem.
      </h1>
      <motion.button
        whileHover={{ scale: 1.1 }}
        className="bg-black text-white w-36 xl:w-44 h-14 mt-10 xl:mt-20 cursor-pointer shadow-lg shadow-black">
        Chci vidět více
      </motion.button>
    </div>
  </section>
);

export default Banner;
