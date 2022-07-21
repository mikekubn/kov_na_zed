import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Slider = (): React.ReactElement => (
  <motion.article
    initial={{ opacity: 0, scale: 0.2 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      duration: 1,
      ease: [0, 0.71, 0.2, 1.01],
    }}
    className="relative flex-row top-[-40px] h-28 bg-brown/60 rounded-xl md:w-11/12 lg:w-4/5 mx-auto">
    <div className="flex justify-between h-full">
      <div className="flex items-center mx-2">
        <Image src="/success.png" width="50" height="50" />
        <p className="ml-2">Záruka 24 měsíců</p>
      </div>
      <div className="flex items-center mx-2">
        <Image src="/glue.png" width="50" height="50" />
        <p className="ml-2">Umístění na zeď pomocí držáku</p>
      </div>
      <div className="flex items-center mx-2">
        <Image src="/anvil.png" width="50" height="50" />
        <p className="ml-2">Veškeré výrobky vyrobeny v ČR</p>
      </div>
      <div className="flex items-center mx-2">
        <Image src="/key.png" width="50" height="50" />
        <p className="ml-2">Zboží vyrábíme na zakázku</p>
      </div>
    </div>
  </motion.article>
);

export default Slider;
