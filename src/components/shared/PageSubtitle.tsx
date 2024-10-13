import { horizontal } from '@/animations/linesAnim'
import { tauri } from '@/fonts/tauri'
import { motion } from 'framer-motion'
import React, { FC } from 'react'

type PageSubtitleProps = {
  subtitle?: string
  animate?: string
  delay?: number
}
const PageSubtitle: FC<PageSubtitleProps> = ({subtitle, animate="", delay=0}) => {
  return (
    <div className={`${tauri.className} h3-title text-2xl desktop:text-4xl leading-10 laptop:min-w-[280px] laptop:max-w-[280px] desktop:min-w-[390px] desktop:max-w-[390px]`}>
      {subtitle && <motion.h3 style={{originX:0}} variants={horizontal} initial="initial" animate={animate} custom={{delay, duration: 0.25}} >{subtitle}</motion.h3>}
    </div>
  )
}

export default PageSubtitle