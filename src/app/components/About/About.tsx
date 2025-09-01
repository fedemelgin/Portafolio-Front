"use client"
import Image from "next/image"
import { useRef } from "react";
import hover3d from "@/app/utils/hover";

export default function About() {
    const hero = useRef<HTMLDivElement>(null);

    const hoverHero = hover3d(hero, {
        x: 30,
        y: -30,
        z: 5,
    });

    const imageHover = hover3d(hero, {
        x: 20,
        y: -5,
        z: 11,
    });
    return (
            <div ref={hero} id='about' className="bg-gradient-to-bl from-gray-950 to-gray-800 flex flex-col items-center justify-center min-h-[300px] md:min-h-[800px]">
            <div className="flex flex-col-reverse items-center md:justify-start  gap-8 w-full max-w-7xl p-6 lg:flex-row md:p-10">
                <div className="w-full lg:w-1/2 flex items-center justify-center p-4 md:p-10">
                    <p className="text-bold text-sm md:text-base text-left leading-7 w-full text-white">
                    Estudiante de Ingeniería en Sistemas de Información, he desarrollado varios proyectos personales y académicos que me han permitido aplicar y reforzar mis conocimientos en desarrollo tanto <span className='text-blue-500'>frontend</span> como <span className='text-blue-500'>backend</span>. 
                    <br />
                    <br />
                    Estoy en constante aprendizaje, buscando siempre nuevas tecnologías y desafíos que me permitan crecer como desarrollador. Mi objetivo es seguir mejorando mis habilidades técnicas y aportar soluciones funcionales y eficientes a los proyectos en los que participo.
                    </p>
                </div>
                <Image 
                src="/assets/foto_fede2.jpg" 
                alt="foto fede"
                width={1200}
                height={1600}
                className="  w-50 h-50 md:w-60 md:h-60 lg:w-100 lg:h-100 rounded-full object-cover shadow-lg shadow-black/50 mask-radial-at-center mask-radial-from-60% mask-radial-to-75%"
                style={{
                    transform: hoverHero.transform,
                    
                }}
                />
            </div>
            </div>
    )
}