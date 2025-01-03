import React from 'react'
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import { AuroraBackground } from './aurora-background';
import Button from './Button';
import { TypewriterEffectSmoothDemo } from './TypewriterEffectDisplay';


function AuroraBackgroundDisplay() {
  const navigate = useNavigate();
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className=" relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className=" text-3xl md:text-6xl lg:text-8xl font-bold text-white dark:text-white text-center py-4">
          Hello.
        </div>
        <div className="font-normal text-2xl md:text-6xl text-white dark:text-neutral-200 py-4">
          I am
        </div>
        <div className="font-semibold text-xl md:text-9xl text-white dark:text-neutral-200 py-2">
          <TypewriterEffectSmoothDemo />
        </div>
        {/* <button className="bg-slate-800 dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2 shadow-inner shadow-white/30">
          Let's Begin
        </button> */}
        <Button name={"Let's Begin"} link={ () => navigate("/portfolio/navigation")}/>
      </motion.div>
    </AuroraBackground>
  )
}

export default AuroraBackgroundDisplay