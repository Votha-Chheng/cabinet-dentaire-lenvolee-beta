'use client'

import React, { FC, useContext, useMemo, useState } from 'react'
import AnchorSection from './Anchor/AnchorSection'
import PresentationSection from './Presentation/PresentationSection'
import AccueilSection from './Accueil/AccueilSection'
import ImageModal from '../shared/ImageModal'
import { ModalContextProvider } from '@/context/modalContext'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { InView } from 'react-intersection-observer'
import { Button } from '../ui/button'

const HomeScreen: FC = () => {
  const [presentationInView, setPresentationInView] = useState<boolean>(false)
  const [accueilInView, setAccueilInView] = useState<boolean>(false)
  const [viewImage, setViewImg] = useState<boolean>(false)

  const getBgColor = (presentationInView: boolean, accueilInView: boolean)=>{
    if(presentationInView && accueilInView){
      return "bg-main-theme"
    } else if(presentationInView && !accueilInView){
      return "bg-transparent"
    } else return "bg-main-theme"
  }

  const bgColor = useMemo(()=> {
    return getBgColor(presentationInView, accueilInView)
  }, [accueilInView, presentationInView])

  return (
    <ModalContextProvider>
      <ImageModal />
      <main className={`${bgColor} transition-colors duration-300 overflow-x-hidden`}>
        <AnchorSection/>
        <motion.div 
          initial={{opacity:0}}
          animate={viewImage ? {opacity:1}:{}}
          transition={{duraion:0.25}}
          className='w-full h-96 relative mt-64 tablet:hidden block border-t-main-theme border-t'
        >
          <InView triggerOnce={true} onChange={(inView, entry)=> setViewImg(inView)} />
          <Image src="/images/team.jpg" alt="Equipe complète du Cabinet dentaire L'Envolée à Montpellier/Castelnau-le-lez" className='' fill style={{objectFit:"cover"}} />
        </motion.div>
        <PresentationSection setPresentationInView={setPresentationInView}/>
        <AccueilSection accueilSectionInview={accueilInView} setAccueilSectionInView={setAccueilInView}/>
      </main>
    </ModalContextProvider>

  )
}

export default HomeScreen