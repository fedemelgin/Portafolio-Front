"use client";
import { motion } from "framer-motion";
import ButtonCv from '../ButtonCV/ButtonCV';
import SocialLink from '../SocialLink/SocialLink';
import BtnLenguage from '../ButtonLenguage/ButtonLenguage';



const heroText: string = "Systems Engineering Student";
const heroText2: string = "Federico Hernan Melgin";
const heroText3: string = "Full Stack TypeScript & NestJS";


const container = {
  hidden: { opacity: 1 }, // estado inicial
  visible: {
    opacity: 1, // estado final
    transition: {
      staggerChildren: 0.05 // tiempo entre letras
    }
  }
};

const child = {
  hidden: { opacity: 0, x: 20 }, // estado inicial
  visible: { opacity: 1, x: 0 } // estado final
};
export default function Hero() {
  return (
    <div className=' h-[600px] md:h-[750px] w-full flex flex-col justify-center items-center  flex-wrap space-y-2 p-4 '>
      <ButtonCv text="Download CV" url="/CV_Federico.pdf" />
      <motion.h1 className="text-4xl md:text-6xl font-bold text-center text-sky-500" variants={container} initial="hidden" animate="visible">
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
        animate="visible"
      >
        {heroText2.split("").map((char, i) => (
          <motion.span key={i} variants={child} className='inline-block'>{char === " " ? "\u00A0" : char}</motion.span>
        ))}
      </motion.p>

      <motion.p
        className='md:text-xl font-mono font-light text-gray-300'
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {heroText3.split("").map((char, i) => (
          <motion.span key={i} variants={child} style={{ display: "inline-block" }}>{char === " " ? "\u00A0" : char}</motion.span>
        ))}
      </motion.p>

      <div className='m-1 p-2 flex flex-row flex-wrap justify-center items-center  gap-1 md:gap-4 mt-2'>
        <SocialLink
          iconSVG="icon-linkedin"
          BG900="bg-sky-900"
          TEXT400="text-white"
          BORDER400="border-sky-400"
          TEXT="Linkedin"
          BG400="bg-sky-400"
          SHADOW400="shadow-sky-400"
          colorTEXT="text-white"
        />
        <SocialLink
          iconSVG="icon-github"
          BG900="bg-neutral-900"
          TEXT400="text-white"
          BORDER400="border-gray-300"
          TEXT="GitHub"
          BG400="bg-white"
          SHADOW400="shadow-white"
        />
      </div>

      <motion.div
        className='p-1 flex flex-row justify-center items-center gap-4 mt-6 flex-wrap'
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={child} whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.96 }} transition={{ type: 'spring', stiffness: 300 }}>
          <BtnLenguage
            color="text-blacwhite"
            iconId="icon-javascript"
            gradient="bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500"
            glowColor="hover:shadow-[0_0_20px_rgba(251,191,36,0.8)]"
          />
        </motion.div>

        <motion.div variants={child} whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.96 }} transition={{ type: 'spring', stiffness: 300 }}>
          <BtnLenguage
            color="text-black"
            iconId="icon-react"
            gradient="bg-gradient-to-br from-sky-400 via-sky-500 to-blue-500"
            glowColor="hover:shadow-[0_0_20px_rgba(59,130,246,0.8)]"
          />
        </motion.div>
        
        <motion.div variants={child} whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.96 }} transition={{ type: 'spring', stiffness: 300 }}>
          <BtnLenguage
            color="text-black"
            iconId="icon-html"
            gradient="bg-gradient-to-br from-red-400 via-red-500 to-orange-500"
            glowColor="hover:shadow-[0_0_20px_rgba(251,146,60,0.8)]"
          />
        </motion.div>

        <motion.div variants={child} whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.96 }} transition={{ type: 'spring', stiffness: 300 }}>
          <BtnLenguage
            color="text-black"
            iconId="icon-typescript"
            gradient="bg-gradient-to-br from-sky-400 via-sky-500 to-blue-500"
            glowColor="hover:shadow-[0_0_20px_rgba(0,122,204,0.6)]"
          />
        </motion.div>

        <motion.div variants={child} whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.96 }} transition={{ type: 'spring', stiffness: 300 }}>
          <BtnLenguage
            color="text-black"
            iconId="icon-css"
            gradient="bg-gradient-to-br from-purple-400 via-purple-500 to-pink-500"
            glowColor="hover:shadow-[0_0_20px_rgba(168,85,247,0.8)]"
          />
        </motion.div>

        <motion.div variants={child} whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.96 }} transition={{ type: 'spring', stiffness: 300 }}>
          <BtnLenguage
            color="text-black"
            iconId="icon-django"
            gradient="bg-gradient-to-br from-[#0C4B33] to-[#4ECDC4]"
            glowColor="hover:shadow-[0_0_20px_rgba(52,211,153,0.6)]"
          />
        </motion.div>

        <motion.div variants={child} whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.96 }} transition={{ type: 'spring', stiffness: 300 }}>
          <BtnLenguage
            color="text-black"
            iconId="icon-nextjs"
            gradient="bg-gradient-to-br from-gray-700 to-white"
            glowColor="hover:shadow-[0_0_20px_rgba(255,255,255,0.12)]"
          />
        </motion.div>

        <motion.div variants={child} whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.96 }} transition={{ type: 'spring', stiffness: 300 }}>
          <BtnLenguage
            color="text-black"
            iconId="icon-tailwind"
            gradient="bg-gradient-to-br from-sky-400 via-sky-500 to-blue-500"
            glowColor="hover:shadow-[0_0_20px_rgba(14,165,233,0.8)]"
          />
        </motion.div>

        <motion.div variants={child} whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.96 }} transition={{ type: 'spring', stiffness: 300 }}>
          <BtnLenguage
            color="text-black"
            iconId="icon-nestjs"
            gradient="bg-gradient-to-br from-red-400 via-red-500 to-orange-500"
            glowColor="hover:shadow-[0_0_20px_rgba(224,35,78,0.6)]"
          />
        </motion.div>

        <motion.div variants={child} whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.96 }} transition={{ type: 'spring', stiffness: 300 }}>
          <BtnLenguage
            color="text-black"
            iconId="icon-postgres"
            gradient="bg-gradient-to-br from-sky-400 via-sky-500 to-blue-500"
            glowColor="hover:shadow-[0_0_20px_rgba(51,103,145,0.6)]"
          />
        </motion.div>

        <motion.div variants={child} whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.96 }} transition={{ type: 'spring', stiffness: 300 }}>
          <BtnLenguage
            color="text-black"
            iconId="icon-typeorm"
            gradient="bg-gradient-to-br from-[#6D28D9] to-[#4F46E5]"
            glowColor="hover:shadow-[0_0_20px_rgba(109,40,217,0.6)]"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
