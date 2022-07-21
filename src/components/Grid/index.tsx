import React from 'react';
import Link from 'next/link';

const Grid = ({ children }: { children: React.ReactNode }): React.ReactElement => (
  <div className="grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 lg:gap-16 mt-10 justify-items-center mx-auto xl:w-2/3 py-8">{children}</div>
);

const GridItem = ({ children, link }: { children: React.ReactElement; link: string }): React.ReactElement => (
  <Link aria-label="product" href={`/produkt/${link}`} as={`/produkt/${link}`} passHref>
    <div className={`p-4 flex items-center justify-center w-80 h-80 ${Boolean(link) ? 'cursor-pointer' : 'cursor-auto'}`}>{children}</div>
  </Link>
);

export { GridItem };
export default Grid;
