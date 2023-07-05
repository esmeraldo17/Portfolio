import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import foto from '../assets/images/photo.jpeg';

const Welcome = () => {
  return (
    <div className='ml-[220px] flex flex-col items-center justify-center  h-[100vh] bg-cyan-500 p-6'>
      <div className='flex items-center '>
        <h1 className='mr-5'>
          <span className='text-4xl font-semibold'>Ola, me chamo</span>
          <span className='text-4xl text-blue-100 font-semibold'> Esmeraldo Alberto </span><br/>
          <span className='text-xl font-semibold'>FullStack Developer</span>
        </h1>
      <Image src={ foto } alt='esmeraldo-alberto' className='ml-5 rounded-tl-lg rounded-tr-md rounded-br-lg rounded-bl-sm opacity-80'></Image>
      </div>

      <Link href='#about' className='mt-[60px]' >
        <svg class="w-6 h-6 text-gray-800 dark:text-white animate-bounce" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 12">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 7 4 4 4-4M1 1l4 4 4-4"/>
        </svg>
      </Link>
    </div>
  );
};

export default Welcome;
