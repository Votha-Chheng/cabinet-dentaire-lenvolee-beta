import { FicheProps } from '@/@types/ficheProps'
import { appearFromBottom } from '@/animations/appearFromSides'
import { vertical } from '@/animations/linesAnim'
import { opacities } from '@/animations/opacityAnim'
import LineThrough from '@/components/shared/LineThrough'
import { frankRuhl } from '@/fonts/frankRuhl'
import { tauri } from '@/fonts/tauri'
import { delay, motion } from 'framer-motion'
import Image from 'next/image'
import React, { FC, useEffect, useMemo, useRef, useState } from 'react'
import DiplomesSection from './DiplomesSection'
import { InView } from 'react-intersection-observer'

const FicheTextLeft: FC<FicheProps> = ({children, nom, fonction, inView, img, diplomeListe, diplomes=false}) => {
  const [topXParagraph, setTopXParagraph] = useState<number>(0)
  const [topXDiplomeSection, setTopXDiplomeSection] = useState<number>(0)
  const [diplomeInview, setDiplomeInview] = useState<boolean>(false)
  
  const topXParagraphRef = useRef<HTMLHeadingElement>(null)

  useEffect(()=> {
    if(topXParagraphRef.current){
      setTopXParagraph(topXParagraphRef.current.getBoundingClientRect().bottom)
    }
  }, [])

  const height = useMemo(()=> {
    return topXDiplomeSection - topXParagraph - 20
  }, [topXParagraph, topXDiplomeSection])

  return (
    <>
      <aside className='w-full h-full flex flex-col justify-between items-center text-main-theme pt-5'>
        <div className='w-full'>
          <motion.h2 variants={appearFromBottom} custom={0.8} initial="initial" animate={inView ? "animate":""} className={`${frankRuhl.className} text-center font-semibold uppercase py-1 text-2xl laptop:text-4xl`}>
            {nom}
          </motion.h2>
          <motion.h2 
            ref={topXParagraphRef}
            variants={appearFromBottom} 
            custom={0.8} 
            initial="initialBottom" 
            animate={inView ? "animate":""} 
            className={`${tauri.className} text-center text-lg laptop:text-xl tracking-wide pb-2 mb-3 laptop:mb-8`}
          >
            {fonction}
          </motion.h2>
          {children}
        </div>
        <InView onChange={(inView, entry)=>setDiplomeInview(inView)} triggerOnce />
        { 
          diplomes &&  
            <motion.div variants={opacities} initial="initial" animate={`${diplomeInview ? "animate":""}`} custom={{delay:0.4, duration: 0.3}} className='w-full relative'>
              <DiplomesSection diplomeListe={diplomeListe} setTopXDiplomeSection={setTopXDiplomeSection} height={height} />
            </motion.div>
        }
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