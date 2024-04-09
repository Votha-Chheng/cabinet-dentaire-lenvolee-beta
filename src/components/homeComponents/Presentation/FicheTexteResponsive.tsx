import { FicheProps } from '@/@types/ficheProps'
import { appearFromBottom } from '@/animations/appearFromSides'
import { opacities } from '@/animations/opacityAnim'
import { oswald } from '@/fonts/oswald'
import { tauri } from '@/fonts/tauri'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React, { FC } from 'react'

const FicheTexteResponsive: FC<FicheProps> = ({children, nom, fonction, inView, img}) => {
  return (
    <aside className='block tablet:hidden relative'>
      <motion.div variants={opacities} custom={{delay:0.9, duration: 0.25}} initial="initial" animate={inView ? "animate":""} className="relative w-[95%] mobile:w-[380px] h-[550px] mx-auto z-10">
        <Image src={`/images/${img}`} style={{objectFit:"cover"}} fill priority alt="portrait du Dr Sylvie Ma-Francin"/>
      </motion.div>
      <div className='absolute bg-buff w-full text-main-theme top-96 z-20'>
        <motion.h2 variants={appearFromBottom} custom={0.8} initial="initial" animate={inView ? "animate":""} className={`${tauri.className} text-3xl text-center uppercase mobile:text-4xl py-2.5 px-2`}>
          {nom}
        </motion.h2>
        <motion.h2 variants={appearFromBottom} custom={0.8} initial="initialBottom" animate={inView ? "animate":""} className={`${oswald.className} text-center text-xl mobile:text-2xl tracking-wide pb-2.5`}>
          <em>{fonction}</em>
        </motion.h2>
      </div>
      {children}
    </aside>
  )
}

export default FicheTexteResponsive
