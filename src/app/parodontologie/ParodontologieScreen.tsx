'use client'

import { horizontal } from '@/animations/linesAnim'
import PageContainer from '@/components/layouts/PageContainer'
import GreffeGingival from '@/components/parodontologie/GreffeGingival'
import TraitementsParo from '@/components/parodontologie/TraitementsParo'
import PageHeader from '@/components/shared/PageHeader'
import { tauri } from '@/fonts/tauri'
import { Tooltip } from '@radix-ui/react-tooltip'
import { motion } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import { FaCaretSquareRight } from 'react-icons/fa'
import { InView } from 'react-intersection-observer'

const ParodontologieScreen = () => {
  const [mounted, setMounted] = useState<boolean>(false)
  const [heightTab, setHeightTab ] = useState<number>(0)
  const [partie, setPartie] = useState<boolean>(true)

  const tabContainerRef = useRef<HTMLDivElement>(null)

  useEffect(()=> {
    if(tabContainerRef.current){
      const height = tabContainerRef.current?.getBoundingClientRect().height
      setHeightTab(height)
    }
  }, [])

  useEffect(()=> {
    setTimeout(()=> {
      setMounted(true)
    }, 2000)
  }, [])
 
  return (
    <>
      <PageHeader img='parodontologie.jpg' title='Parodontologie'/>
      <PageContainer>
        <section className='w-full h-full py-16 flex flex-col laptop:flex-row'>
          <div ref={tabContainerRef}className={`${tauri.className} flex h3-title leading-10 w-full relative`}>
            <div style={{height: `${heightTab}px`, transform: `translateX(${partie ? "0":"100"}%)`}} className='w-1/2 border-main-theme border absolute bg-transparent transition-transform duration-300'/>
            <motion.h2 
              className={`${partie ? "scale-75":"scale-100"} flex items-center justify-center laptop:text-4xl text-base tablet:text-xl w-1/2 text-center cursor-pointer transition-all duration-200 bg-buff py-2 mobile:py-[20px] px-2 tablet:px-[25px] uppercase text-main-theme`}
              style={{originX:0, transitionDelay: "0.2s", transitionProperty:"opacity"}} 
              variants={horizontal} 
              initial="initial" 
              animate="animate" 
              custom={{delay:0.75, duration: 0.25}} 
              onClick={()=> setPartie(true)}
            >
              <span className={`${!partie && "text-slate-100 scale-75"} inline-block transition-all duration-200`}>Traitements parodontales</span>
            </motion.h2>
            <motion.h2 
              className={`${partie ? "scale-75":"scale-100"} flex items-center justify-center laptop:text-4xl tablet:text-xl text-base w-1/2 text-center cursor-pointer transition-all duration-200 bg-buff py-2 mobile:py-[20px] px-2 tablet:px-[25px] uppercase text-main-theme`} 
              style={{originX:0, transitionDelay: "0.2s", transitionProperty:"opacity"}} 
              variants={horizontal} 
              initial="initial" 
              animate="animate" 
              custom={{delay:1, duration: 0.25}}
              onClick={()=> setPartie(false)}
            >
              <span className={`${partie && "text-slate-100 scale-75"} transition-all duration-200 inline-block`}>Greffes gingivales</span>
            </motion.h2>
          </div>
        </section>
        {
          partie
          ?
          <TraitementsParo mounted={mounted} />
          :
          <GreffeGingival />
        }
      </PageContainer>
    </>
  )
}

export default ParodontologieScreen
