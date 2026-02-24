import React from 'react'
import ButtomProject from '../ButtonProject/ButtonProject'
import { ProductStructure } from '@/app/types/TypeProduct';

export default function CardProject({ project } : { project: ProductStructure }) {

    console.log(project.image)
    const tecnologias = project.technologies 

    return (
        <article className='bg-gray-900 relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-700'>

            {/* Tag de categoría */}
            <div className=' absolute top-0 left-0 p-4 pb-2'>
                <span className='bg-white text-black px-3 py-1 rounded-full text-xs font-semibold'>
                    {project.category}
                </span>
            </div>
            
            {/* Imagen del proyecto */}
            <div className=''>
                <img 
                    src={project.image} 
                    alt={project.title} 
                    className='w-full h-56 md:h-64 lg:h-72 object-cover'
                />
            </div>
            
            
            <div className='p-4'>
                
                <h3 className='text-cyan-400 text-xl font-bold mb-2'>
                    {project.title}
                </h3>
                
                
                <p className='text-gray-300 text-sm mb-4 leading-relaxed'>
                    {project.description}
                </p>
                
                
                <div className='flex flex-wrap gap-2'>
                    {tecnologias.map((tech) => (
                        <span key={tech} className='bg-blue-900 text-white px-3 py-1 rounded-full text-xs font-medium'>
                            {tech}
                        </span>
                    ))}
                </div>
                
                {/* Link al proyecto */}
                {project.link && (
                    <div className='mt-4'>
                        <a 
                            href={project.link}
                            target="_blank" 
                            rel="noopener noreferrer"
                            title='Ver proyecto'
                            className='text-cyan-400  hover:text-cyan-300 text-sm font-medium underline '
                        >
                            <ButtomProject />
                        </a>
                    </div>
                )}
            </div>
        </article>
    )
}