import Link from 'next/link';
import React from 'react';

const SideBar = () => {
  return (
    <nav className='flex flex-col items-center justify-around w-[20%]'>
      <h2 >Astro</h2>
      <div className='flex flex-col'>
        <Link href='#'>Sobre mim</Link>
        <Link href='#'>Projetos</Link>
        <Link href='#'>Contcto</Link>
      </ div>
    </nav>
  );
};

export default SideBar;
