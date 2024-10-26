import { titleAppear } from '@/animations/anchorAnimations'
import { lora } from '@/fonts/lora'
import { oswald } from '@/fonts/oswald'
import { tauri } from '@/fonts/tauri'
import { motion } from 'framer-motion'
import React, { FC } from 'react'

const SylvieCard: FC = () => {
  return (
    <div className='flex flex-col items-center min-w-[100%]'>
      <motion.h2 variants={titleAppear} initial="initial" animate="animate" className={`${lora.className} text-2xl mobile:text-3xl tablet:text-4xl tracking-wider underline underline-offset-8 py-2`}>
        Dr. Sylvie Ma-Francin
      </motion.h2>
      <h3 className={`${tauri.className} tracking-wider text-base mobile:text-lg laptop:text-xl pt-0 pb-3 mobile:py-2.5 relative`}>
        <motion.div variants={titleAppear} initial="initialBottom" animate="animate"><em>Chirurgienne dentiste</em></motion.div>
      </h3>
      <h4 className={`${oswald.className} tracking-wider font-thin text-base mobile:text-lg laptop:text-xl py-1 relative`}>
        <motion.div className='absolute w-full h-1/2 bg-buff ' initial={{x:"-400%", opacity:1 }} animate={{x:0, opacity:0}} transition={{delay: 2, duration: 0.5}} />
        <motion.div initial={{opacity:0 }} animate={{opacity:1}} transition={{delay: 2.3, duration: 0.25}} >Diplômée de la faculté de Montpellier</motion.div>
      </h4>
      <h4 className={`${oswald.className} tracking-wider font-thin text-base mobile:text-lg laptop:text-xl py-1 relative`}>
        <motion.div className='absolute w-full h-1/2 bg-buff top-2' initial={{x:"400%", opacity:1 }} animate={{x:0, opacity:0}} transition={{delay: 2.2, duration: 0.5}} />
        <motion.div initial={{opacity:0 }} animate={{opacity:1}} transition={{delay: 2.5, duration: 0.25}} >D.U. de parodontologie et d'implantologie</motion.div>
      </h4>
      <h4 className={`${oswald.className} tracking-wider font-thin text-base mobile:text-lg laptop:text-xl py-1 relative`}>
        <motion.div className='absolute w-full h-1/2 bg-buff top-2' initial={{x:"-400%", opacity:1 }} animate={{x:0, opacity:0}} transition={{delay: 2.4, duration: 0.5}} />
        <motion.div initial={{opacity:0 }} animate={{opacity:1}} transition={{delay: 2.7, duration: 0.25}} >
          D.U. de Tabacologie
        </motion.div>
      </h4>
      <h4 className={`${oswald.className} tracking-wider font-thin text-base mobile:text-lg laptop:text-xl py-1 relative`}>
        <motion.div className='absolute w-full h-1/2 bg-buff top-2' initial={{x:"400%", opacity:1 }} animate={{x:0, opacity:0}} transition={{delay: 2.6, duration: 0.5}} />
        <motion.div initial={{opacity:0 }} animate={{opacity:1}} transition={{delay: 2.9, duration: 0.25}} >Ancienne attachée universitaire</motion.div>
      </h4>
    </div>
  )
}

export default SylvieCard