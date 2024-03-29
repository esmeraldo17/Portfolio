import React from 'react';
import ProjectCard from './ProjectCard';
import data from '../assets/data/data';

const Projects = () => {
  return (
    <div id='projects' className='ml-[220px] bg-cyan-500 p-6 '>
      <h1 className='text-4xl font-bold flex flex-col items-center mb-11'>PROJETOS</h1>
      <div className='flex flex-row flex-wrap bg-cyan-800 rounded-large items-center justify-center'>
        {data.map((e) => (
          <ProjectCard name={e.name} image={e.image} description={e.descripton} technologies={e.technologies} github={e.github} deploy={e.deploy}/>
        ))}
      </div>
    </div>
  )
}

export default Projects