import { FicheProps } from '@/@types/ficheProps'
import { appearFromBottom } from '@/animations/appearFromSides'
import { vertical } from '@/animations/linesAnim'
import { opacities } from '@/animations/opacityAnim'
import LineThrough from '@/components/shared/LineThrough'
import { oswald } from '@/fonts/oswald'
import { tauri } from '@/fonts/tauri'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React, { FC } from 'react'

const FicheTextLeft: FC<FicheProps> = ({children, nom, fonction, inView, img}) => {
  return (
    <>
      <aside className='w-full flex flex-col items-center text-main-theme'>
        <motion.h2 variants={appearFromBottom} custom={0.8} initial="initial" animate={inView ? "animate":""} className={`${tauri.className} uppercase text-4xl py-2.5`}>{nom}</motion.h2>
        <motion.h2 variants={appearFromBottom} custom={0.8} initial="initialBottom" animate={inView ? "animate":""} className={`${oswald.className} text-2xl tracking-wide pb-2`}><em>{fonction}</em></motion.h2>
        {children}
      </aside>
      <LineThrough height='100%' width='1.5px' bgColor="bg-main-theme" variants={vertical} delay={0.5} animate={inView ? "animate":""} originY={1} classComplement='self-start' />
      <motion.div variants={opacities} custom={{delay:0.9, duration: 0.25}} initial="initial" animate={inView ? "animate":""} className="relative tablet:min-w-[325px] laptop:w-[25%] h-full">
        <Image src={`/images/${img}`} style={{objectFit:"cover"}} fill priority alt="portrait du Dr Sylvie Ma-Francin"/>
      </motion.div>
      <LineThrough height='100%' width='1px' bgColor="bg-main-theme" variants={vertical} delay={0.7} animate={inView ? "animate":""} classComplement='self-start'/> 
    </>
  )
}

export default FicheTextLeft