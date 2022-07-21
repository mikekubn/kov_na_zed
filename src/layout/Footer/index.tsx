import React from 'react';
import Image from 'next/image';
import LineHorizontal from '@/components/Lines';

const Footer = (): React.ReactElement => (
  <footer className="w-full my-10">
    <LineHorizontal />
    <section className="flex flex-1 flex-row h-full justify-center">
      <div className="flex w-1/2">
        <div className="flex flex-col w-1/2 justify-center items-center border-r border-black">
          <h1 className="text-xl pb-10">Informace</h1>
          <ul className="list-disc">
            {items.map((item) => (
              <li key={item.link} className="pb-6">
                {item.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col w-1/2 justify-center items-center">
          <h1 className="text-xl pb-10">Kontakt</h1>
          <ul>
            <li className="pb-6 flex flex-row">
              <Image src="/mobile.png" width="28" height="28" />
              <a className="ml-2" href="tel:555-666-7777">
                555 666 7777
              </a>
            </li>
            <li className="pb-6 flex flex-row">
              <Image src="/mail.png" width="28" height="28" />
              <a className="ml-2" href="mail:test@.szn.cz">
                test@szn.cz
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </footer>
);

export default Footer;

const items: { name: string; link: string }[] = [
  {
    name: 'Doprava a platba',
    link: '',
  },
  {
    name: 'Obchodní podmínky',
    link: '/informace#obchodni-podminky',
  },
  {
    name: 'Podmínky ochrany osobních údajů',
    link: '/informace#podminky-ochrany-osobnich-udaju',
  },
  {
    name: 'Jak nakupovat',
    link: '/informace#jak-nakupovat',
  },
  {
    name: 'Odstoupení od smlouvy',
    link: '/informace#odsoupeni-od-smlouvy',
  },
  {
    name: 'Reklamace',
    link: '/informace#reklamace',
  },
];
