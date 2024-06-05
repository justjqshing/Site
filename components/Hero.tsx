'use client'
import { Spotlight } from './ui/Spotlight'
import { AuroraBackground } from './ui/aurora-background';
import { motion } from "framer-motion";
import { FaLocationArrow } from "react-icons/fa";
import { TextGenerateEffect } from './ui/text-generate-effect';
import { Meteors } from './ui/meteors';
import { TypewriterEffectSmooth } from './ui/typeWritter';
import MagicButton from './ui/MagicButton';

const Hero = () => {
  const words = [
    {
        text: "Dreams",
        className: "'text-center font-Montserrat text-[40px] md:text-5xl lg:text-6xl text-purple",
        cursor: {
            className: "bg-purple"
        }
    },
    {
        text: "Visions",
        className: "'text-center font-Montserrat text-[40px] md:text-5xl lg:text-6xl text-purple",
        cursor: {
            className: "bg-purple"
        }
    },
    {
        text: "Ideas",
        className: "'text-center font-Montserrat text-[40px] md:text-5xl lg:text-6xl text-purple",
        cursor: {
            className: "bg-purple"
        }
        
    },
    {
      text: "Goals",
      className: "'text-center font-Montserrat text-[40px] md:text-5xl lg:text-6xl text-purple",
      cursor: {
          className: "bg-purple"
      }
      
  },
  {
    text: "Hopes",
    className: "'text-center font-Montserrat text-[40px] md:text-5xl lg:text-6xl text-purple",
    cursor: {
        className: "bg-purple"
    }
    
}

]
  return (
    <div className="pb-20 pt-36 h-screen">
        <div>
        <AuroraBackground className='top-0 left-0 h-screen absolute w-screen '>
          <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="relative flex flex-col gap-4 items-center justify-center px-4 bg-black-100"
          >
          </motion.div>
        </AuroraBackground>
        
        <Spotlight
            className="top-0 left-60 h-screen w-screen hidden xl:flex"
            fill="white"
          />
          
          
          <Spotlight
            className="top-28 left-80 h-[80vh] w-[50vw] hidden xl:flex"
            fill="blue"
          />
      </div>
      <Meteors number={80} className='sm:flex hidden'/>
      <div
        className="h-screen w-full dark:bg-transparent bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-transparent
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>
      

      <div className="flex justify-center relative my-20 z-10">

        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            
            Dynamic Web Magic with Next.js
          </p>
          <div className='w-full flex text-center justify-center items-center sm:justify-center '>

            <div style={{ width: '100%' }} className='hidden sm:flex justify-center text-center items-center flex-row gap-3 '>
              <h1 className='text-center font-Montserrat text-[40px] md:text-5xl lg:text-6xl'>
              Making 
              </h1>


              <TypewriterEffectSmooth words={words} className='text-center font-Montserrat text-[40px] md:text-5xl lg:text-6xl text-purple'/>
           </div>
          

          

        
          <TextGenerateEffect
            words="Transforming Concepts into Seamless User Experiences"
            className="text-center md:hidden text-[40px] md:text-5xl lg:text-6xl"
          />
                      
          </div>


          <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl font-Montserrat mt-7'>
            Hi, I&apos;m Josh, a Next.js Developer Based in Canada
          </p>
            <MagicButton title='View My Work!' link='#about' position='right' icon={<FaLocationArrow/>} otherClasses='gap-3'/>

            

          
      </div>
     </div>
    </div>
  );
}

export default Hero