import React from 'react';
import Image from 'next/image';

const Navigation = (): React.ReactElement => {
  return (
    <nav className="flex flex-row items-end">
      <ul className="flex h-8 items-center">
        {items.map((item) => (
          <li key={item.link} className="pr-5">
            {item.name}
          </li>
        ))}
      </ul>
      <div className="flex items-center w-20 justify-between">
        <Image src="/instagram.png" width="32" height="32" />
        <Image src="/facebook.png" width="32" height="32" />
      </div>
    </nav>
  );
};

export default Navigation;

const items: { name: string; link: string }[] = [
  { name: 'Domů', link: '/domu' },
  { name: 'Kovové dekorace', link: '/kovove-dekorace' },
  { name: 'Výroba na zakázku', link: '/vyroba-na-zakazku' },
  { name: 'O nás', link: '/o-nas' },
];
