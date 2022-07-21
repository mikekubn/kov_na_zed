import CmpTags from '@/components/Tags';
import { getPaths, getPost } from '@/utils/helpers';
import Image from 'next/image';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next/types';
import { ParsedUrlQuery } from 'querystring';
import React from 'react';
import { IProduct } from 'types';

interface IParams extends ParsedUrlQuery {
  slug: string;
}

const Product: NextPage<{ post: IProduct }> = ({ post }) => {
  const { name, dimensions, unit, price, stock, tags, perex } = post.frontmatter;
  const content = post.content;
  const _price = `${price} Kč,-`;
  const _dimensions = ` ${dimensions} ${unit}`;

  return (
    <div className="flex flex-col xl:w-9/12 mx-auto">
      <section className="flex flex-row flex-1 mb-20">
        <div className="flex flex-col w-1/2 mt-10">
          <h1 className="text-3xl">{name}</h1>
          <div className="flex flex-row my-6">
            <CmpTags tags={tags} />
          </div>
          <p className="w-9/12 leading-loose">{perex}</p>
          <p className="mt-10">
            <strong>Rozměry:</strong>
            {_dimensions}
          </p>
          <div className="flex flex-col mt-5">
            {stock ? <p className="text-brown text-lg font-semibold">Skladem</p> : null}
            <p className="font-semibold mt-2">{_price}</p>
          </div>
        </div>
        <div className="flex flex-col mx-auto">
          <Image src="/world-map.png" height="430" width="590" />
        </div>
      </section>
      <div className="mb-20">
        <p className="w-3/5 mx-auto leading-loose">{content}</p>
      </div>
    </div>
  );
};

export default Product;

export const getStaticPaths: GetStaticPaths<IParams> = () => {
  const products = getPaths('src/_products');
  const paths = products.map((product) => ({ params: { slug: product } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = ({ params }) => {
  const post = getPost(`src/_products/${params?.slug}.md`);

  return {
    props: {
      post,
    },
  };
};
