import React from 'react';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Link from 'next/link';

const Header = (): React.ReactElement => (
  <header className="flex flex-1 flex-col w-full h-36 sticky top-0 z-50 bg-white">
    <section className="flex flex-row justify-between mx-20 my-4">
      <Link href="/">
        <Image src="/kov-na-zed-logo.png" width="202" height="76" className="cursor-pointer" />
      </Link>
      <Navigation />
    </section>
    <div className="border-b" />
  </header>
);

export default Header;
