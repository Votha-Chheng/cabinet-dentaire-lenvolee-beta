'use client'

import { motion, Variants } from 'framer-motion'
import React, { FC } from 'react'


type LineThroughProps = {
  width?: string
  height?: string
  bgColor: string
  borderRadius?: string
  classComplement?: string
  variants?: any
  delay?:number
  duration?: number
  originX?: number
  originY?: number
  animate ?: string
  initial?: string
}

const LineThrough: FC<LineThroughProps> = ({bgColor, width="100%", height="1px", borderRadius="1px", classComplement="", variants=undefined, delay=0, duration= 0.25, originX=0, originY=0, animate="animate", initial="initial"}) => {
  return (
    <motion.div 
      variants={variants} 
      custom={{delay, duration}} 
      initial={initial} 
      animate={animate} 
      aria-hidden="true" 
      className={`${bgColor} ${classComplement} transition-all duration-300`} 
      style={{width, height:height, borderRadius, originY, originX}} 
    />
  )
}

export default LineThrough