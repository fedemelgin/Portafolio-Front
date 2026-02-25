"use client";
import { motion } from 'framer-motion'
import { easeInOut } from "framer-motion";
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/routing';

export default function Navbar() {

  function handleScroll(e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }


    const t = useTranslations("Navbar")

    const listNavbar = [
      { name: t("about"), link: '#about' },
      { name: t("projects"), link: '#projects' }
    ]

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

  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const Language = locale === 'es' ? 'EN' : 'ES';

  const toggleLanguage = () => {
    const nextLocale = locale === 'es' ? 'en' : 'es';
    // Obtenemos el hash actual (ej: #about) para no perder la posición
    const hash = window.location.hash; 
    router.replace(`${pathname}${hash}`, { locale: nextLocale });

  };

  return (
    <header className=' text-gray-600 body-font z-10'>
        <div className=' container m-auto flex flex-col md:flex-row flex-wrap p-4 items-center justify-between md:w-[1000px]'>
            <a className='flex p-2 title-font font-medium items-center text-gray-900  '>
                <span className='ml-1 text-xl font-bold text-white'>Portfolio</span>
            </a>
            <motion.nav 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className=' bg-transparent md:ml-auto text-white text-base md:mr-auto flex flex-wrap items-center justify-center gap-6 p-2'
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
        {t("contact")}
      </a>

      <button 
      onClick={toggleLanguage}
      className="cursor-pointer px-3 py-1 border border-sky-500 rounded text-sky-500 hover:bg-sky-500 hover:text-white transition-colors">
      {Language}
    </button>
      
        </div>
    </header>
  );
}
