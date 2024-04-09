import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { FC, useEffect, useRef, useState } from 'react'
import LineThrough from './LineThrough';
import { imageAppear, linesHorizontal, linesVertical } from '@/animations/pageHeaderAnimations';
import { tauri } from '@/fonts/tauri';
import { opacities } from '@/animations/opacityAnim';

type PageHeaderProps = {
  img: string
  title: string
}

const PageHeader:FC<PageHeaderProps> = ({img, title}) => {
  const [height, setHeight] = useState<number>(0)
  const [left, setLeft] = useState<number>(0)

  const pageTitleRef = useRef<HTMLDivElement>(null)

  useEffect(()=> {
    if(pageTitleRef.current){
      setHeight(pageTitleRef.current.clientHeight)
      setLeft(pageTitleRef.current.getBoundingClientRect().left)
    }
  }, [setHeight, setLeft])

  return (
    <section className='w-full h-[300px] relative bg-main-theme'>
      <div className='overflow-hidden w-full h-[300px]'>
        <motion.div 
          aria-hidden="true"
          className='w-full h-full relative blur-sm contrast-125'
          variants={imageAppear}
          initial="initial"
          animate="animate"
        >
          <Image src={`/images/${img}`} fill style={{objectFit:"cover"}} alt={img} /> 
        </motion.div>           
      </div>
      <motion.h2 className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2" >
        <LineThrough width="5px" height={`${(height/2)}px`} bgColor="bg-buff" variants={linesVertical} animate='animateSecond' originY={1} classComplement='absolute -left-0.5'/>
        <LineThrough width='5px' height={`${(height/2)}px`} bgColor="bg-buff" variants={linesVertical} animate='animateSecond' classComplement='absolute top-1/2 -left-0.5' />
        <LineThrough width="100%" height="5px" bgColor="bg-buff" classComplement='absolute' variants={linesHorizontal} animate='animateSecond'/>
        <motion.span 
          ref={pageTitleRef}
          className={`${tauri.className} text-center inline-block py-5 px-8 text-3xl font-bold tablet:font-normal tablet:text-4xl laptop:text-5xl desktop:text-6xl bg-white text-main-theme tracking-wide uppercase`}
          variants={opacities}
          custom={{delay:1.25, duration:0.25}}
          initial="initial"
          animate="animate"
        >
          <em>{title}</em>
        </motion.span>
        <LineThrough width="5px" height={`${(height/2)}px`} bgColor="bg-buff" classComplement='absolute top-0 right-0' variants={linesVertical} animate='animateThird'/>
        <LineThrough width='5px' height={`${(height/2)}px`} bgColor="bg-buff" classComplement='absolute top-1/2 right-0' originY={1} variants={linesVertical} animate='animateThird'/>
        <LineThrough width="100%" height="5px" bgColor="bg-buff" classComplement='absolute bottom-0' variants={linesHorizontal} animate='animateSecond'/>
      </motion.h2>
      <LineThrough width={`${left}px`} height="5px" bgColor="bg-buff" variants={linesHorizontal} animate='animateFirst' classComplement='absolute bottom-0'/>
      <LineThrough width={`${left}px`} height="5px" bgColor="bg-buff" classComplement="absolute right-0" variants={linesHorizontal} animate='animateThird'/>
    </section>
  )
}

export default PageHeader
