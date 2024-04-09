'use client'

import React, { FC, useEffect, useRef, useState } from 'react'
import LineThrough from './LineThrough'
import { frankRuhl } from '@/fonts/frankRuhl'
import { tauri } from '@/fonts/tauri'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { AnimationParametersProps } from '@/@types/animationParametersProps'


const Logo: FC<AnimationParametersProps> = ({delay=0, duration=0.25, variants=undefined}) => {
  const [width, setWidth] = useState<number>(0)

  const h1Ref = useRef<HTMLSpanElement>(null)

  useEffect(()=> {
    if(h1Ref.current){
      setWidth(h1Ref.current.clientWidth)
    }
  }, [setWidth])


  return (
    <Link href="/">
      <motion.article 
        variants={variants} 
        custom={{delay, duration}} 
        initial="initial" 
        animate="animate" 
        className="uppercase flex flex-col text-buff text-center pb-3 desktop:pb-0" 
        style={{width:`${width}px`}}
      >
        <h1 className={`${frankRuhl.className} text-2xl tablet:text-4xl`} style={{letterSpacing: "17.5px"}} ><span className='inline-block' ref={h1Ref}>L&apos;envolée</span></h1>
        <div className="flex gap-x-2.5" style={{width:`${width}px`}}>
          <LineThrough width='55%' height="1.5px" bgColor="bg-buff" classComplement='my-auto'/>
          <h1 className={`${tauri.className} text-xs tablet:text-base text-left`} style={{width:"100%", letterSpacing:"3.5px"}}>
            Cabinet dentaire
          </h1>
        </div> 
      </motion.article>
    </Link>
  )
}

export default Logo