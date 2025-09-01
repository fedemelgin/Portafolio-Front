"use client"
import React, {useRef} from 'react'
import { motion, useInView } from 'framer-motion'
import type { ProductStructure } from '../../types/TypeProduct'
import CardProject from '../CardProject/CardProject'
import { useFetch } from '@/app/hooks/useFetch'
import Loading from './loading'



export default function ProjectsGrid() {

    const { data: projects, loading, error } = useFetch<ProductStructure[]>("https://wkwdbjpv-3001.brs.devtunnels.ms/projects")

    // Determina la cantidad de skeletons: usa la cantidad de proyectos si existe, sino 4 por defecto
    const skeletonCount = projects && projects.length ? projects.length : 4;

    return (
    <section id='projects' className='max-w-7xl mx-auto p-6 '>
            <div className='mb-8'>
                <h2 className='text-3xl font-bold text-white mb-2'>Mis Proyectos</h2>
                <p className='text-gray-400'>Algunos de los proyectos en los que he trabajado</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-min'>
                {loading
                    ? <Loading count={skeletonCount} />
                    : projects && projects.length > 0
                        ? projects.map((project) => (
                            <AnimatedCard key={project.id} featured={project.featured}>
                                <CardProject project={project} />
                            </AnimatedCard>
                        ))
                        : <p className='text-white col-span-3'>No hay proyectos</p>
                }
            </div>
            {error && <p className='text-red-500 mt-4'>Error: {error}</p>}
        </section>
    )
}

function AnimatedCard({ children, featured }: { children: React.ReactNode, featured?: boolean }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: false, margin: '-100px' })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={featured ? 'md:col-span-2 lg:col-span-2' : ''}
        >
            {children}
        </motion.div>
    )
}