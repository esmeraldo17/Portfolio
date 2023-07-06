import React from 'react';
import Image from 'next/image';
import image from '../assets/images/aboutImage.jpeg'

const About = () => {
  return (
    <div id='about' className='ml-[220px] bg-cyan-500 flex flex-row p-[50px] gap-x-5 items-center justify-center'>
      <div className='flex flex-col '>
        <h1 className='text-4xl font-bold flex flex-col items-center mb-[10px]'>SOBRE MIM</h1>
        <p className='text-base'>
        {/* <span className='font-semibold'></span> */}
          <span className='font-semibold'>Olá!</span> Sou um 
          <span className='font-semibold'> desenvolvedor Web FullStack </span> 
          com paixão por criar soluções inovadoras e cativantes. 
          Com um ano e dois meses de experiência como estudante e em projetos freelance, 
          tenho me dedicado a aprimorar minhas habilidades e explorar os desafios fascinantes do mundo digital.<br/>
          Durante minha jornada como desenvolvedor, estudei conceito importantes da programação como: 
          <span className='font-semibold'> Algoritmos, Design Patterns, Complexibilidade de Codigo(Big-O), Extrutura de Dados, </span>
          e mergulhei em várias tecnologias,  incluindo 
          <span className='font-semibold'> HTML, CSS, JavaScript </span>
          e frameworks populares como 
          <span className='font-semibold'> React, Next e Node.js. </span>
          Tenho um bom domínio do desenvolvimento 
          <span className='font-semibold'> front-end, </span>
          criando interfaces 
          <span className='font-semibold'> intuitivas e responsivas </span> 
          que proporcionam experiências envolventes aos usuários.<br/><br/>
          Além disso, tenho conhecimentos sólidos no desenvolvimento 
          <span className='font-semibold'>  back-end, </span>
          trabalhando com 
          <span className='font-semibold'> bancos de dados, APIs e implementando lógica de negócios eficiente. </span>
          Meu objetivo é criar aplicativos web 
          <span className='font-semibold'> robustos e escaláveis, </span>
          garantindo um 
          <span className='font-semibold'> desempenho excelente e uma arquitetura bem estruturada.</span>
          <br/><br/>
          Ao longo do tempo, desenvolvi 
          <span className='font-semibold'>  uma mentalidade analítica e orientada a soluções, </span>
          uma mentalidade analítica e orientada a soluções, 
          buscando constantemente novas formas de melhorar a 
          <span className='font-semibold'> eficiência e a qualidade dos meus projetos. </span>
          Sou altamente motivado, com habilidades de 
          <span className='font-semibold'> autodidatismo e uma abordagem detalhista </span>
          para entregar resultados excepcionais.<br/><br/>
          Valorizo a 
          <span className='font-semibold'> colaboração e a comunicação eficaz, </span>
          trabalhando em equipe para alcançar objetivos comuns. Meu foco está em
          <span className=' font-semibold'> criar experiências únicas e impactantes para os usuários, </span>
          equilibrando 
          <span className='font-semibold'> funcionalidade e design elegante.</span>
        </p>
      </div>
      <Image src={image}  alt='thumb' className='rounded-tl-lg rounded-tr-md rounded-br-lg rounded-bl-sm opacity-80'></Image>
    </div>
  );
};

export default About;
