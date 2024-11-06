"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Cabecalho: React.FC = () => {
  const pathname = usePathname();

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Sobre Nós', path: '/sobre' },
    { name: 'Serviços', path: '/servicos' },
    { name: 'Projetos', path: '/projetos' },
    { name: 'Casos', path: '/casos' },
    { name: 'Reviews', path: '/reviews' },
  ];

  return (
    <header>
      <div className="w-full fixed top-0 left-0 z-50">
        <div className="w-full flex items-center justify-around py-3 backdrop-blur-lg shadow-md">

          <div>
            <h1 className="uppercase text-3xl font-semibold text-purple-800">NexWeb</h1>
          </div>

          <div className="flex justify-evenly px-4 py-4 border border-zinc-700/20 rounded-full shadow-lg bg-zinc-100  backdrop-blur-md">
            <ul className="flex justify-evenly uppercase gap-6">
              {menuItems.map((item) => (
                <li key={item.path} className="relative">
                  <Link href={item.path}
                    className={`rounded-full py-2 px-4 uppercase cursor-pointer relative
                      ${pathname === item.path ? 'bg-pink-500 text-pink-200 font-bold' : 'text-zinc-800'}
                      transition duration-300 ease-in-out
                      before:absolute before:inset-0 hover:bg-zinc-200 hover:text-pink-500 hover:font-black before:rounded-full
                      before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100
                      `}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500  /70 backdrop-blur-md shadow-lg">
            <h1 className="uppercase text-zinc-50 font-semibold">Comece Aqui</h1>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Cabecalho;
