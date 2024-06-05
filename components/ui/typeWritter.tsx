"use client";

import { cn } from "@/utils/cn";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const TypewriterEffectSmooth = ({
  words,
  className,
}: {
  words: {
    text: string;
    className?: string;
    cursor: {
        className?: string;
    }
  }[];
  className?: string;
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const animation = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Trigger once when in view

  const word = words[currentWordIndex];
  const [preWord, setPreWord] = useState(0)
  const [morphCursor, setMorphCursor] = useState(true);
  

const cursor = word.cursor.className;

  useEffect(() => {
    setMorphCursor(false)
    setTimeout(() => {
      setMorphCursor(true)
    }, 300)
    
  }, [preWord])

  useEffect(() => {
    const word = words[currentWordIndex];
  
    const sequence = async () => {
      if (isInView) { // Only animate if in view
        await animation.start({ width: "fit-content", transition: { duration: 0.6, ease: "linear", delay: 1} });
        setTimeout(() => {
          setPreWord(currentWordIndex + 1)
        }, 1500)
        await animation.start({ width: "0%", transition: { duration: 0.6, ease: "linear", delay: 1 }});
  
        // Only update currentWordIndex if isInView is true
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      }
    };
  
    sequence();
  }, [animation, currentWordIndex, words, isInView]); // Add isInView dependency

  const renderWords = () => (
    <div>
      {words[currentWordIndex].text.split("").map((char, index) => (
        <span
          key={`char-${index}`}
          className={cn(` text-black `, words[currentWordIndex].className)}
        >
          {char}
        </span>
      ))}
    </div>
  );

  return (
    <div className={cn("flex items-center", className)}>
      <motion.div
        className="overflow-hidden"
        animate={animation}
        initial={{ width: "0%" }}
        ref={ref} 
        style={{ overflowX: "hidden" }}
      >
        <div
          className="text-xs flex justify-start sm:text-base md:text-xl lg:text:3xl xl:text-5xl font-bold"
          style={{ whiteSpace: "nowrap" }}
        >
          
          {renderWords()} 
        </div>
      </motion.div>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
        }}
        className={cn(
          `block rounded-sm w-[4px] h-4 sm:h-6 xl:h-14 ${morphCursor ? cursor :  'bg-transparent'} `,

        )}
      ></motion.span>
    </div>
  );
};
