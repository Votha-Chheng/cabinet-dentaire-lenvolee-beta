import LineThrough from '@/components/shared/LineThrough'
import React, { FC, ReactNode } from 'react'
import FicheTextLeft from './FicheTextLeft'
import { horizontal, vertical } from '@/animations/linesAnim'
import FicheTexteResponsive from './FicheTexteResponsive'
import { motion } from 'framer-motion'

type FichePresentationProps = {
  diplomesListe?: string[]
  textLeft: boolean
  topGreyPosition: string
  topBrownPosition: string
  brownWidth: string
  leftBrownPosition: string
  brownHeight: string
  children: ReactNode
  nom: string
  fonction: string
  inView: boolean
  img: string,
  originXGrey?: number
  delay?:number
  duration?: number 
  diplomes?: boolean
}

const FichePresentation: FC<FichePresentationProps> = ({
  topGreyPosition, 
  topBrownPosition, 
  brownWidth, 
  leftBrownPosition, 
  brownHeight, 
  textLeft, 
  nom, 
  fonction, 
  children, 
  inView, 
  img, 
  originXGrey = 0, 
  delay=0.2, 
  duration = 0.25,
  diplomesListe,
  diplomes=false
}) => {
  return (
    <article className="relative">  
      <div className='hidden tablet:block w-full'>
        <motion.div 
          variants={horizontal} 
          initial="initial" 
          animate={inView? "animate":""} 
          custom={{delay, duration}}
          aria-hidden="true" 
          className='h-[15%] w-full bg-timberwolf absolute -z-20' 
          style={{top:topGreyPosition, originX:originXGrey}} 
        />  
        <motion.div 
          variants={horizontal} 
          initial="initial" 
          animate={inView? "animate":""} 
          custom={{delay, duration}}
          aria-hidden="true" 
          className='bg-buff absolute -z-10' 
          style={{top:topBrownPosition, width: brownWidth, left: leftBrownPosition, height:brownHeight, originX:originXGrey === 0 ? 1 : 0}} 
        />  
        <div className={`static w-[760px] laptop:w-[1000px] desktop:w-[80%] h-[500px] mx-auto items-center z-20 flex ${textLeft ? "flex-row":"flex-row-reverse"}`}>
          <LineThrough height='100%' width='1px' bgColor="bg-main-theme" classComplement='self-start' variants={vertical} delay={0.4} />
          <FicheTextLeft nom={nom} fonction={fonction} inView={inView} img={img} diplomes={diplomes} diplomeListe={diplomesListe} >
            {children}
          </FicheTextLeft>
        </div>
        <LineThrough height='1px' width='100%' bgColor="bg-main-theme" variants={horizontal} delay={0.5} />
      </div>
      <FicheTexteResponsive nom={nom} fonction={fonction} inView={inView} img={img} diplomeListe={diplomesListe} diplomes={diplomes}>
        {children}
      </FicheTexteResponsive>
    </article>
  )
}

export default FichePresentation