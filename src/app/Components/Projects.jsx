import React from 'react';
import ProjectCard from './ProjectCard';
import foto from '../assets/images/photo.jpeg';

const Projects = () => {
  const data = [
    {
    name: 'teste',
    descripton: 'fazendo um test basico',
    image: foto,
    technologies: [{tec:'Docker', style:'bg-cyan-500 text-white rounded-large m-[2px]'}],
    github: 'ckdjckddk',
    deploy: 'jkddk'
    },
    {
      name: 'teste',
      descripton: 'fazendo um test basico',
      image: foto,
      technologies: [{tec:'Docker', style:'bg-cyan-500 text-white rounded-large m-[2px]'}],
      github: 'ckdjckddk',
      deploy: 'jkddk'
    },
    {
      name: 'teste',
      descripton: 'fazendo um test basico',
      image: foto,
      technologies: [{tec:'Docker', style:'bg-cyan-500 text-white rounded-large m-[2px]'}],
      github: 'ckdjckddk',
      deploy: 'jkddk'
    },
    {
      name: 'teste',
      descripton: 'fazendo um test basico do meus projecto para ver como vai ficar',
      image: foto,
      technologies: [
        {tec:'Docker', style:'bg-cyan-500 text-white rounded-large m-[2px]'},
        {tec:'Docker', style:'bg-cyan-500 text-white rounded-large m-[2px]'},
        {tec:'Docker', style:'bg-cyan-500 text-white rounded-large m-[2px]'}
      ],
      github: 'ckdjckddk',
    }
  ]
  return (
    <div id='projects' className='ml-[220px] bg-cyan-500 p-6 '>
      <h1 className='text-4xl font-semibold flex flex-col items-center mb-11'>Projetos</h1>
      <div className='flex flex-row flex-wrap bg-cyan-800 rounded-large items-center justify-center'>
        {data.map((e) => (
          <ProjectCard name={e.name} image={e.image} description={e.descripton} technologies={e.technologies} github={e.github} deploy={e.deploy}/>
        ))}
      </div>
    </div>
  )
}

export default Projects