import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import foto from '../assets/images/photo.jpeg';

const Welcome = () => {
  return (
    <div className='ml-[220px] flex flex-col items-center justify-center  h-[100vh] bg-cyan-500 p-6'>
      <div className='flex items-center '>
        <div className='flex m-[10px] mt-[100px] flex-col'>
          <h1 className='mr-5'>
            <span className='text-4xl font-semibold'>Ola, me chamo</span>
            <span className='text-4xl text-blue-100 font-semibold'> Esmeraldo Alberto </span><br/>
            <span className='text-xl font-semibold'>FullStack Developer</span>
          </h1>
          <di className='flex flex-wrap mt-[10px]'>
            <Image className='m-[20px] rounded-large' src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" width="50" height="50"></Image>
            <Image className='m-[20px] rounded-large' src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" width="50" height="50"></Image>
            <Image className='m-[20px] rounded-large' src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" width="50" height="50"></Image>
            <Image className='m-[20px] rounded-large' src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg" width="70" height="70"></Image>
            <Image className='m-[20px] rounded-large' src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" width="70" height="70"></Image>
            <Image className='m-[20px] rounded-large' src="https://upload.wikimedia.org/wikipedia/commons/0/0a/MySQL_textlogo.svg" width="70" height="70"></Image>
            <Image className='m-[20px] rounded-large' src="https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg" width="80" height="80"></Image>
            <Image className='m-[20px] rounded-large' src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg" width="100" height="0"></Image>
            <Image className='m-[20px] rounded-large' src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" width="50" height="50"></Image>
          </di>
        </div>

        <Image src={ foto } alt='esmeraldo-alberto' className='ml-5 rounded-tl-lg rounded-tr-md rounded-br-lg rounded-bl-sm opacity-80'></Image>
      </div>

      <Link href='#about' className='mt-[60px]' >
        <svg class="mt-[20px] w-6 h-6 text-gray-800 dark:text-white animate-bounce" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 12">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 7 4 4 4-4M1 1l4 4 4-4"/>
        </svg>
      </Link>
    </div>
  );
};

export default Welcome;
