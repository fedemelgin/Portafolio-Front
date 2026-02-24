"use client"
import Image from "next/image"
import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef } from "react"
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

export default function About() {

    const ref = useRef(null);
    const isInView = useInView(ref, {once: false,amount: 0.3});

    const mainController = useAnimation();
    const slideController = useAnimation();

    const t = useTranslations("About")
    const cursos = t.raw("cursos");
    const locale = useLocale();
    useEffect(() => {
        if (isInView) {
            mainController.start("visible");
            slideController.start("slide");
        }else{
            mainController.start("hidden");
            slideController.start("hidden");
        }
    }, [isInView,mainController,slideController]);
    
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2
            }
        }
    };
    // const itemVariants = {
    //     hidden: { opacity: 0, y: 40 },
    //     visible: { 
    //         opacity: 1, 
    //         y: 0,
    //         transition: { duration: 0.6, ease: "easeOut" }
    //     }
    // };

    const slideVariants = {
    hidden: { 
        opacity: 0, 
        x: -60, 
        filter: "blur(1px)" 
    },
    visible: { 
        opacity: 1,
        x: 0,
        filter: "blur(0px)",
        transition: { duration: 0.8, ease: "easeOut" }
    }
};

  return (
    <section id="about"  className="min-h-screen flex items-center justify-center px-6">
      <motion.div 
        ref={ref} 
        variants={containerVariants}
        initial="hidden"
        animate={mainController}
        className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        
        {/* IMAGEN */}
        <motion.div variants={slideVariants} animate={isInView ? "visible" : "hidden"} className="flex justify-center">
          <Image
            src="/assets/foto_fede2.jpg"
            alt="foto fede"
            width={500}
            height={500}
            className="w-60 h-60 md:w-80 md:h-80 rounded-full object-cover shadow-xl shadow-black/40"
          />
        </motion.div>

        {/* CONTENIDO */}
        <motion.div variants={slideVariants} animate={isInView ? "visible" : "hidden"} className="text-white space-y-8">
            <div>
                <h2 className="text-3xl font-bold mb-2">{t("title")}</h2>
                <p className="text-gray-300">
                {t("description")}{" "}
                    <span className='text-blue-500'>
                        Frontend
                    </span> 
                        {" "}and{" "}
                    <span className='text-blue-500'>
                        Backend
                    </span>
                    {" "}
                    {locale === "en" && (
                        <span className="text-gray-300">
                            {t("description_2")}
                        </span>
                    )}
                </p>
            </div>

            {/* EDUCACION */}
            <motion.div variants={slideVariants} animate={isInView ? "visible" : "hidden"} className="flex flex-col gap-4">
                <div className=" flex items-center gap-3">
                    <span className="w-1 h-6 bg-white rounded-full"></span>
                    <h3 className="font-bold text-lg">{t("education")}</h3>
                </div>

                <div className="flex flex-col">
                    <p className="text-gray-200 text-md font-medium ml-4">
                        {t("educacion_uni")}
                    </p>
                    <p className="text-gray-300 text-sm ml-4 ">
                        {t("educacion_title")}
                    </p>
                    <p className="text-gray-500 text-sm ml-4">
                        {t("educacion_staus")}
                    </p>
                </div>
            </motion.div>

           {/* CURSOS */}
            <motion.div variants={slideVariants} animate={isInView ? "visible" : "hidden"} className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                    <span className="w-1 h-6 bg-white rounded-full"></span>
                    <h3 className="font-bold text-lg">{t("curso")}</h3>
                </div>
                {cursos.map((curso: any, index: number) => (
                    <div className="flex flex-col">
                        <p className="text-gray-200 text-md font-medium ml-4">
                            {curso.title}
                        </p>
                        <p className="text-gray-300 text-sm ml-4 ">
                            {curso.description}
                        </p>
                        <p className="text-gray-500 text-sm ml-4">
                            {curso.status}
                        </p>
                    </div>
                ))}
                {/* <div className="flex flex-col">
                    <p className="text-gray-200 text-md font-medium ml-4">
                        {t("curso_title")}
                    </p>
                    <p className="text-gray-300 text-sm ml-4 ">
                        {t("curso_description")}
                    </p>
                    <p className="text-gray-500 text-sm ml-4">
                        Finalizado
                    </p>
                </div>

                <div className="flex flex-col">
                    <p className="text-gray-200 text-md font-medium ml-4">
                        Talento Tech – GCBA 
                    </p>
                    <p className="text-gray-300 text-sm ml-4 ">
                        Curso Fullstack Python
                    </p>
                    <p className="text-gray-500 text-sm ml-4">
                        Finalizado
                    </p>
                </div> */}
            </motion.div>

            {/* HABILIDADES */}
            <motion.div variants={slideVariants} animate={isInView ? "visible" : "hidden"} className=" flex flex-col gap-2">
                <div className="flex items-center gap-3">
                    <span className="w-1 h-6 bg-white rounded-full"></span>
                    <h3 className="font-semibold text-lg">{t("skills")}</h3>
                </div>

                <div className="flex flex-wrap gap-3 ml-4"> 
                    {/* 👇 Tus spans quedan EXACTAMENTE iguales */}
                    <span className="rounded-full border border-slate-300 py-1 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-400 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">Python</span>
                    <span className="rounded-full border border-slate-300 py-1 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-400 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">React</span>
                    <span className="rounded-full border border-slate-300 py-1 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-400 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">Angular</span>
                    <span className="rounded-full border border-slate-300 py-1 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-400 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">TypeScript</span>
                    <span className="rounded-full border border-slate-300 py-1 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-400 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">Javascript</span>
                    <span className="rounded-full border border-slate-300 py-1 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-400 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">Node.js</span>
                    <span className="rounded-full border border-slate-300 py-1 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-400 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">Next.js</span>
                    <span className="rounded-full border border-slate-300 py-1 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-400 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">Nestjs</span>
                    <span className="rounded-full border border-slate-300 py-1 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-400 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">Git</span>
                    <span className="rounded-full border border-slate-300 py-1 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-400 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">TypeOrm</span>
                    <span className="rounded-full border border-slate-300 py-1 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-400 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">PostgreSQL</span>
                    <span className="rounded-full border border-slate-300 py-1 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-400 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">HTML</span>
                    <span className="rounded-full border border-slate-300 py-1 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-400 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">CSS</span>
                    <span className="rounded-full border border-slate-300 py-1 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-400 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">Tailwind</span>
                    <span className="rounded-full border border-slate-300 py-1 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-400 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">Docker</span>
                    <span className="rounded-full border border-slate-300 py-1 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-400 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">Django</span>
                </div>
            </motion.div>

        </motion.div>
      </motion.div>
    </section>
  )
}