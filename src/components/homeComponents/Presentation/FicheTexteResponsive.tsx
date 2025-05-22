import { FicheProps } from '@/@types/ficheProps'
import { appearFromBottom } from '@/animations/appearFromSides'
import { horizontal } from '@/animations/linesAnim'
import { opacities } from '@/animations/opacityAnim'
import LineThrough from '@/components/shared/LineThrough'
import { oswald } from '@/fonts/oswald'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React, { FC, useEffect, useMemo, useRef, useState } from 'react'
import DiplomesSection from './DiplomesSection'
import { InView } from 'react-intersection-observer'
import { libreBaskerville } from '@/fonts/libreBaskerville'

const FicheTexteResponsive: FC<FicheProps> = ({children, nom, fonction, inView, img, diplomeListe, diplomes}) => {
  const [topXFonctionResponsive, setTopXFonctionResponsive] = useState<number>(0)
  const [topXDiplomeSection, setTopXDiplomeSection] = useState<number>(0)
  const [diplomeInview, setDiplomeInview] = useState<boolean>(false)

  const topXFonctionResponsiveRef = useRef<HTMLHeadingElement>(null)

  useEffect(()=> {
    if(topXFonctionResponsiveRef.current){
      setTopXFonctionResponsive(topXFonctionResponsiveRef.current.getBoundingClientRect().top)
    }
  }, [])

  const height = useMemo(()=> {
    return topXDiplomeSection - topXFonctionResponsive -20
  }, [topXFonctionResponsive, topXDiplomeSection])

  return (
    <aside className='block tablet:hidden relative mb-32'>
      <motion.div variants={opacities} custom={{delay:0.9, duration: 0.25}} initial="initial" animate={inView ? "animate":""} className="relative w-[95%] mobile:w-[380px] h-[550px] mx-auto z-10">
        <Image src={`/images/${img}`} style={{objectFit:"cover"}} fill priority alt="portrait du Dr Sylvie Ma-Francin"/>
      </motion.div>
      <LineThrough height='1px' width='100%' bgColor="bg-main-theme" variants={horizontal} animate="animate" delay={0.5} />
      <div className='absolute bg-buff w-full text-main-theme top-96 z-20 py-2'>
        <motion.h2 variants={appearFromBottom} custom={0.8} initial="initial" animate={inView ? "animate":""} className={`${libreBaskerville.className} text-3xl text-center uppercase mobile:text-4xl py-1.5 px-2`}>
          {nom}
        </motion.h2>
        <motion.h2 
          ref={topXFonctionResponsiveRef} 
          variants={appearFromBottom} 
          custom={0.8} 
          initial="initialBottom" 
          animate={inView ? "animate":""} 
          className={`${oswald.className} text-center text-xl mobile:text-2xl tracking-wide pb-2.5`}
        >
          <em>{fonction}</em>
        </motion.h2>
      </div>
      {children}
      <InView onChange={(inView, entry)=>setDiplomeInview(inView)} triggerOnce />
      { 
        diplomes &&  
          <motion.div variants={opacities} initial="initial" animate={`${diplomeInview ? "animate":""}`} custom={{delay:0.1, duration: 0.3}} className='w-full relative'>
            <DiplomesSection diplomeListe={diplomeListe} setTopXDiplomeSection={setTopXDiplomeSection} height={height} />
            <LineThrough height='1px' width='100%' bgColor="bg-main-theme" variants={horizontal} animate="animate" delay={0.5} />
          </motion.div>
      }
    </aside>
  )
}

export default FicheTexteResponsive
