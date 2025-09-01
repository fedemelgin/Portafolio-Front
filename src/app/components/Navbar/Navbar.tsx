"use client";
import { motion } from 'framer-motion'
import { easeInOut } from "framer-motion";

export default function Navbar() {

  function handleScroll(e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }


    const listNavbar = [{name: 'About', link: '#about'},{name: 'Projects', link: '#projects'} ,]

    const containerVariants = {
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.1, // tiempo entre cada item
          },
        },
      }
    
      // Configuración para animar cada ítem
      const itemVariants = {
        hidden: { opacity: 0, y: -30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: easeInOut } },
      }

  return (
    <header className='text-gray-600 body-font z-10'>
        <div className='container m-auto flex flex-col md:flex-row flex-wrap p-4 items-center justify-between md:w-[1000px]'>
            <a className='flex p-2 title-font font-medium items-center text-gray-900  '>
                <span className='ml-1 text-xl font-bold text-white'>Portfolio</span>
            </a>
            <motion.nav 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className='bg-transparent md:ml-auto text-white text-base md:mr-auto flex flex-wrap items-center justify-center gap-6 p-2'
            >
                {listNavbar.map((item, index) => (
                    <motion.a 
                        key={index} 
                        href={item.link}
                        className=' hover:text-gray-500 '
                        variants={itemVariants}
                    >{item.name}</motion.a>
                ))}
            </motion.nav>
      <a 
        href="#contact" 
        className='inline-flex items-center focus:outline-none text-base text-white border-gray-700 hover:border-gray-700 hover:text-gray-500 p-2 rounded cursor-pointer' 
        onClick={e => handleScroll(e, 'contact')}
      >
        Contact Me
      </a>
        </div>
    </header>
  );
}
