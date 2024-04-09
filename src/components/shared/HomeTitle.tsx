import { lora } from '@/fonts/lora'
import React, { FC, useMemo, useState } from 'react'
import LineThrough from './LineThrough'
import { InView } from 'react-intersection-observer'
import { horizontal } from '@/animations/linesAnim'
import { motion } from 'framer-motion'
import { opacities } from '@/animations/opacityAnim'

type HomeTitleProps ={
  title: string
  textColor: string
  lineColor: string
  marginTopInview?: string
}

const HomeTitle :FC<HomeTitleProps> = ({title, textColor, lineColor, marginTopInview="0"}) => {
  const [titleInview, setTitleInview] = useState<boolean>(false)

  return (
    <div className='w-full text-center relative'>
      <LineThrough bgColor={lineColor} variants={horizontal} animate={titleInview ?"animate":""} originX={0} classComplement='w-screen' />
      <motion.h2 
        variants={opacities} 
        initial="initial" 
        animate={titleInview ? "animate":""} 
        custom={{delay:0.3, duration: 0.25}} 
        className={`${lora.className} ${textColor} text-2xl tablet:text-4xl laptop:text-6xl w-[80%] py-5 tablet:py-10 mx-auto uppercase tracking-wider font-bold`}
      >
        {title}
      </motion.h2>
      <LineThrough bgColor={lineColor} variants={horizontal} delay={0.15} originX={1} animate={titleInview ?"animate":""}/>
      <InView triggerOnce={true} onChange={(inView, entry)=> setTitleInview(inView) } style={{marginTop: marginTopInview}} />
    </div>
  )
}

export default HomeTitle