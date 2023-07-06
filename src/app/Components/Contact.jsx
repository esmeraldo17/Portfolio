"use client"
import React, { useRef } from 'react';
import Link from 'next/link';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_uhoif6r', 'template_msw9fqp', form.current, 'ChTQp6t7nH8gPwbNM')
      .then((result) => {
          console.log(result.text);
          alert("Email Enviado")
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset()
  };
  return (
    <div id='#contact' className='ml-[220px] bg-cyan-500 h-[100vh] p-6 flex flex-col items-center'>
      <h1 className='text-4xl font-bold flex flex-col items-center pt-7 mb-[50px]'>CONTATE-ME</h1>
      <p className='text-center'> 
        Pode entrar em contato comigo por meio das minhas redes socias, ou <br/>
         ainda enviando uma mensagem através do formulário abaixo.
      </p>
      <div className='flex '>
        <Link href='https://github.com/esmeraldo17' target='_blank'>
          <svg className="w-6 h-6 text-black mr-5 mt-7" ariaHidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
          </svg>
        </Link>
        <Link href='https://www.linkedin.com/in/esmeraldo-alberto/' target='_blank'>
          <svg className="w-6 h-6 text-black ml-5 mt-7" ariaHidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 15">
            <path fill-rule="evenodd" d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" clip-rule="evenodd"/>
            <path d="M3 5.012H0V15h3V5.012Z"/>
          </svg>
        </Link>
      </div>
      <form ref={form} onSubmit={sendEmail} className='mt-[50px] w-[50%] place-content-center' >
        <div class="relative mb-6" data-te-input-wrapper-init>
          <label
            for="name"
          >Name
          </label>
          <input
            type="text"
            class="peer text-black block min-h-[auto] w-full border-black rounded border-2 bg-cyan-800 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            id="name"
            name="user_name"
            placeholder="Name" />
        </div>
        <div class="relative mb-6" data-te-input-wrapper-init>
          <label
            for="email"
          >Email address
          </label>
          <input
            type="email"
            class="peer text-black block min-h-[auto] w-full rounded border-black border-2 bg-cyan-800 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            id="email"
            name="user_email"
            placeholder="Email address" />
        </div>
        <div class="relative mb-6" data-te-input-wrapper-init>
          <label
            for="message"
            >Message
          </label>
          <textarea
            class="peer text-black block min-h-[auto] w-full rounded border-black border-2 bg-cyan-800 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            id="message"
            name="message" 
            rows="3"
            placeholder="Message"></textarea>
        </div>

        <button
          type="submit"
          class="w-full text-center rounded border-2 bg-cyan-600 hover:bg-cyan-900 px-6 pb-2 pt-2.5 text-xs uppercase leading-normal text-black border-black font-semibold  "
          data-te-ripple-init
          value="send"
          data-te-ripple-color="light">
            Send
        </button>
      </form>
    </div>
  )
}

export default Contact