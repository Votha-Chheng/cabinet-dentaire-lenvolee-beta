'use client'

import React, { FC, useContext, useMemo, useState } from 'react'
import AnchorSection from './Anchor/AnchorSection'
import PresentationSection from './Presentation/PresentationSection'
import AccueilSection from './Accueil/AccueilSection'
import ImageModal from '../shared/ImageModal'
import { ModalContextProvider } from '@/context/modalContext'

const HomeScreen: FC = () => {
  const [presentationInView, setPresentationInView] = useState<boolean>(false)
  const [accueilInView, setAccueilInView] = useState<boolean>(false)

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
        <PresentationSection setPresentationInView={setPresentationInView}/>
        <AccueilSection setAccueilSectionInView={setAccueilInView}/>
      </main>
    </ModalContextProvider>

  )
}

export default HomeScreen