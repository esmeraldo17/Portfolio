import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import foto from '../assets/images/photo.jpeg';

const SideBar = () => {
  return (
    <nav
      className='fixed flex flex-col items-center justify-center w-[220px] h-[100vh] bg-cyan-800 shadow-xl shadow-gray-600'
    >
      <Image src={foto} alt='foto de perfil' className='w-[60%] rounded-full  border-4 border-cyan-600 opacity-80'/>
      <div className='flex flex-col mt-6 items-center'>
        <Link href='#home' className='mt-3 text-cyan-500 text-lg font-semibold hover:text-cyan-400'>Home</Link>
        <Link href='#projects' className='mt-3 text-cyan-500 text-lg font-semibold hover:text-cyan-400'>Projetos</Link>
        <Link href='#about' className='mt-3 text-cyan-500 text-lg font-semibold hover:text-cyan-400'>Sobre mim</Link>
        <Link href='#contact' className='mt-3 text-cyan-500 text-lg font-semibold hover:text-cyan-400'>Contato</Link>
      </ div>
      <div className='flex '>
        <Link href='https://github.com/esmeraldo17' target='_blank'>
          <svg className="w-6 h-6 text-white mr-5 mt-7" ariaHidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
          </svg>
        </Link>
        <Link href='https://www.linkedin.com/in/esmeraldo-alberto/' target='_blank'>
          <svg className="w-6 h-6 text-white ml-5 mt-7" ariaHidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 15">
            <path fill-rule="evenodd" d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" clip-rule="evenodd"/>
            <path d="M3 5.012H0V15h3V5.012Z"/>
          </svg>
        </Link>
      </div>
    </nav>
  );
};

export default SideBar;
