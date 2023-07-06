import Image from 'next/image';
import React from 'react'

const ProjectCard = ({name, description, image, technologies}) => {
  return (
    <div className='w-[300px] h-[250px] m-[30px] bg-white'>
        <Image src={image} width="50" height="50"></Image>
        <h3>{name}</h3>
        <p>{description}</p>
        {technologies.map((e) => <span>{`#${e} `}</span>)}
    </div>
  )
}

export default ProjectCard