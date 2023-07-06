import React from 'react';
import ProjectCard from './ProjectCard';
import foto from '../assets/images/photo.jpeg';

const Projects = () => {
  const data = [
    {
    name: 'teste',
    descripton: 'fazendo um test basico',
    image: foto,
    technologies: ['Docker', 'JavaScript']
    },
    {
      name: 'teste',
      descripton: 'fazendo um test basico',
      image: foto,
      technologies: ['Docker', 'JavaScript']
    },
    {
      name: 'teste',
      descripton: 'fazendo um test basico',
      image: foto,
      technologies: ['Docker', 'JavaScript']
    },
    {
      name: 'teste',
      descripton: 'fazendo um test basico',
      image: foto,
      technologies: ['Docker', 'JavaScript']
    }
  ]
  return (
    <div id='projects' className='ml-[220px] bg-cyan-500 p-6 '>
      <h1 className='text-4xl font-semibold flex flex-col items-center mb-11'>Projetos</h1>
      <div className='flex flex-row flex-wrap bg-cyan-800 rounded-large '>
        {data.map((e) => (
          <ProjectCard name={e.name} image={e.image} description={e.descripton} technologies={e.technologies}/>
        ))}
      </div>
    </div>
  )
}

export default Projects