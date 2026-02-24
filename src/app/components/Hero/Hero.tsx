"use client";
import { motion } from "framer-motion";
import ButtonCv from '../ButtonCV/ButtonCV';
import SocialLink from '../SocialLink/SocialLink';
import BtnLenguage from '../ButtonLenguage/ButtonLenguage';
import { useTranslations } from 'next-intl'





const container = {
  hidden: { opacity: 1 }, // estado inicial
  visible: {
    opacity: 1, // estado final
    transition: {
      staggerChildren: 0.03 // tiempo entre letras
    }
  }
};

const child = {
  hidden: { opacity: 0, x: 20 }, // estado inicial
  visible: { opacity: 1, x: 0 } // estado final
};
export default function Hero() {

  const t = useTranslations("Hero")
  const heroText = t("title")
  const heroText2 = t("name")
  const heroText3 = t("subtitle")
  const heroText4 = t("cv")

  return (
    <section id="hero" className='min-h-screen w-full flex flex-col md:justify-center items-center  flex-wrap space-y-4 p-4 '>
      <motion.div 
      initial={{ opacity: 0, scale: 0 }} 
      animate={{ opacity: 1, scale: 1 }} 
      transition={{ 
        duration: 0.5, 
        delay: 0.6,
        ease: [0, 0.71, 0.2, 1.01], 
      }} 
      viewport={{ once: false, amount: 0.3 }}>
        <ButtonCv text={heroText4} url="/Federico_Hernan_Melgin_IT.pdf" />
      </motion.div>
      <motion.h1 
      className="text-4xl md:text-6xl font-bold text-center text-sky-500" 
      variants={container} 
      initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}>
        {heroText.split(" ").map((word, wi) => (
          <span key={wi} className="whitespace-nowrap inline-block mr-2">
            {word.split("").map((char, i) => (
              <motion.span key={i} variants={child} style={{ display: "inline-block" }}>
                {char}
              </motion.span>
            ))}
          </span>
        ))}
      </motion.h1>

      <motion.p
        className='font-roboto md:text-4xl font-medium text-gray-300'
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        {heroText2.split("").map((char, i) => (
          <motion.span key={i} variants={child} className='inline-block'>{char === " " ? "\u00A0" : char}</motion.span>
        ))}
      </motion.p>

      <motion.p
        className='md:text-xl font-mono font-light text-gray-300'
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        {heroText3.split("").map((char, i) => (
          <motion.span key={i} variants={child} style={{ display: "inline-block" }}>{char === " " ? "\u00A0" : char}</motion.span>
        ))}
      </motion.p>

      {/* BOTONES SOCIAL LINK */}
      <motion.div variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className=' m-1 p-2 flex flex-row flex-wrap justify-center items-center  gap-1 md:gap-4 mt-2'>

        <motion.div variants={child}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300 }}>
          <SocialLink
            href="https://www.linkedin.com/in/federico-melgin-590b29308/"
            iconSVG="icon-linkedin"
            BG900="bg-sky-900"
            TEXT400="text-white"
            BORDER400="border-sky-400"
            TEXT="Linkedin"
            BG400="bg-sky-400"
            SHADOW400="shadow-sky-400"
            colorTEXT="text-white"
          />
        </motion.div>

        <motion.div variants={child}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }} 
          >
          <SocialLink href="https://github.com/fedemelgin"
            iconSVG="icon-github"
            BG900="bg-neutral-900"
            TEXT400="text-white"
            BORDER400="border-gray-300"
            TEXT="GitHub"
            BG400="bg-white"
            SHADOW400="shadow-white"
          />
        </motion.div>

      </motion.div>

      <motion.div
        className=' p-2 flex flex-row justify-center items-center gap-4 mt-6 flex-wrap'
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        
      >
        <motion.div variants={child} whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.96 }} transition={{ type: 'spring', stiffness: 300 }}>
          <BtnLenguage
            label="JavaScript"
            color="text-blacwhite"
            iconId="icon-javascript"
            gradient="bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500"
            glowColor="hover:shadow-[0_0_20px_rgba(251,191,36,0.2)]"
          />
        </motion.div>

        <motion.div variants={child} whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.96 }} transition={{ type: 'spring', stiffness: 300 }}>
          <BtnLenguage
            label="React"
            color="text-black"
            iconId="icon-react"
            gradient="bg-gradient-to-br from-sky-400 via-sky-500 to-blue-500"
            glowColor="hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
          />
        </motion.div>
        
        <motion.div variants={child} whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.96 }} transition={{ type: 'spring', stiffness: 300 }}>
          <BtnLenguage
            label="HTML"
            color="text-black"
            iconId="icon-html"
            gradient="bg-gradient-to-br from-red-400 via-red-500 to-orange-500"
            glowColor="hover:shadow-[0_0_20px_rgba(251,146,60,0.2)]"
          />
        </motion.div>

        <motion.div variants={child} whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.96 }} transition={{ type: 'spring', stiffness: 300 }}>
          <BtnLenguage
            label="TypeScript"
            color="text-black"
            iconId="icon-typescript"
            gradient="bg-gradient-to-br from-sky-400 via-sky-500 to-blue-500"
            glowColor="hover:shadow-[0_0_20px_rgba(0,122,204,0.4)]"
          />
        </motion.div>

        <motion.div variants={child} whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.96 }} transition={{ type: 'spring', stiffness: 300 }}>
          <BtnLenguage
            label="CSS"
            color="text-black"
            iconId="icon-css"
            gradient="bg-gradient-to-br from-purple-400 via-purple-500 to-pink-500"
            glowColor="hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]"
          />
        </motion.div>

        <motion.div variants={child} whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.96 }} transition={{ type: 'spring', stiffness: 300 }}>
          <BtnLenguage
            label="Angular"
            color="text-black"
            iconId="icon-angular"
            gradient="bg-gradient-to-br from-gray-700 to-white"
            glowColor="hover:shadow-[0_0_20px_rgba(255,255,255,0.12)]"
          />
        </motion.div>

        <motion.div variants={child} whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.96 }} transition={{ type: 'spring', stiffness: 300 }}>
          <BtnLenguage
            label="Django"
            color="text-black"
            iconId="icon-django"
            gradient="bg-gradient-to-br from-[#0C4B33] to-[#4ECDC4]"
            glowColor="hover:shadow-[0_0_20px_rgba(52,211,153,0.2)]"
          />
        </motion.div>

        <motion.div variants={child} whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.96 }} transition={{ type: 'spring', stiffness: 300 }}>
          <BtnLenguage
            label="Next.js"
            color="text-black"
            iconId="icon-nextjs"
            gradient="bg-gradient-to-br from-gray-700 to-white"
            glowColor="hover:shadow-[0_0_20px_rgba(255,255,255,0.12)]"
          />
        </motion.div>

        <motion.div variants={child} whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.96 }} transition={{ type: 'spring', stiffness: 300 }}>
          <BtnLenguage
            label="Tailwind"
            color="text-black"
            iconId="icon-tailwind"
            gradient="bg-gradient-to-br from-sky-400 via-sky-500 to-blue-500"
            glowColor="hover:shadow-[0_0_20px_rgba(14,165,233,0.4)]"
          />
        </motion.div>

        <motion.div variants={child} whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.96 }} transition={{ type: 'spring', stiffness: 300 }}>
          <BtnLenguage
            label="NestJS"
            color="text-black"
            iconId="icon-nestjs"
            gradient="bg-gradient-to-br from-red-400 via-red-500 to-orange-500"
            glowColor="hover:shadow-[0_0_20px_rgba(224,35,78,0.6)]"
          />
        </motion.div>

        <motion.div variants={child} whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.96 }} transition={{ type: 'spring', stiffness: 300 }}>
          <BtnLenguage
            label="PostgreSQL"
            color="text-black"
            iconId="icon-postgres"
            gradient="bg-gradient-to-br from-sky-400 via-sky-500 to-blue-500"
            glowColor="hover:shadow-[0_0_20px_rgba(51,103,145,0.6)]"
          />
        </motion.div>

        <motion.div variants={child} whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.96 }} transition={{ type: 'spring', stiffness: 300 }}>
          <BtnLenguage
            label="TypeORM"
            color="text-black"
            iconId="icon-typeorm"
            gradient="bg-gradient-to-br from-[#6D28D9] to-[#4F46E5]"
            glowColor="hover:shadow-[0_0_20px_rgba(109,40,217,0.8)]"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
