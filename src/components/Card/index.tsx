import React from 'react';
import Image from 'next/image';
import { IProduct } from 'types';
import { motion } from 'framer-motion';
import CmpTags from '../Tags';

const ProductCard = ({ item }: { item: IProduct['frontmatter'] }): React.ReactElement => {
  const { name, dimensions, price, stock, tags, unit } = item;
  const _price = `${price} Kč,-`;

  return (
    <motion.div whileHover={{ scale: 1.1 }} className="flex flex-1 flex-col border-b border-black shadow-black shadow-lg p-2 h-350">
      <div className="flex flex-col content-center justify-center m-auto">
        <h1 className="mx-auto text-lg pb-1">{name}</h1>
        <div className="h-4 flex flex-row">
          <CmpTags tags={tags} />
        </div>
      </div>
      <Image src="/world-map.png" height="230" width="300" />
      <div className="flex flex-col pt-2">
        <h2 className="text-sm mx-auto pb-2">{`Rozměry: ${dimensions} ${unit}`}</h2>
        <div className="flex flex-row justify-between">
          {stock ? <p className="text-brown text-lg font-medium">Skladem</p> : null}
          <p className="flex justify-end text-xl font-medium text-brown">{_price}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
