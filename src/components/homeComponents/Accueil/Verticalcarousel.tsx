import { vertical } from '@/animations/linesAnim'
import { opacities } from '@/animations/opacityAnim'
import ImageForModal from '@/components/shared/ImageForModal'
import LineThrough from '@/components/shared/LineThrough'
import { photosCarousel } from '@/datas/photoListForCarousel'
import { motion } from 'framer-motion'
import React, { FC } from 'react'

type VerticalcarouselProps = {
  viewOnce: boolean
}

const Verticalcarousel: FC<VerticalcarouselProps> = ({viewOnce}) => {
  const images = photosCarousel
  const firstCol = [images[0], images[1], images[2]]
  const secondCol = [images[3], images[4], images[5]]

  return (
    <div className='w-[800px] h-[180vh] mx-auto laptop:flex hidden '>
      <LineThrough height='100%' width='1px' bgColor='bg-buff' variants={vertical} animate={viewOnce ? "animate":"" } delay={0.5} />
      <motion.aside variants={opacities} custom={{delay:0.8, duration: 0.25}} initial="initial" animate={viewOnce ? "animate":""} className='overflow-hidden flex-col flex h-full px-[10px]'>
        <div className='min-h-full gap-5 flex flex-col py-2.5 animate-to-bottom-two'>
          <ImageForModal imgSrc={firstCol[0].src} alt={firstCol[0].alt} />
          <ImageForModal imgSrc={firstCol[1].src} alt={firstCol[1].alt} />
          <ImageForModal imgSrc={firstCol[2].src} alt={firstCol[2].alt} />
        </div>
        <div className='min-h-full gap-5 flex flex-col py-2.5 animate-to-bottom-two'>
          <ImageForModal imgSrc={firstCol[0].src} alt={firstCol[0].alt} />
          <ImageForModal imgSrc={firstCol[1].src} alt={firstCol[1].alt} />
          <ImageForModal imgSrc={firstCol[2].src} alt={firstCol[2].alt} />
        </div>
      </motion.aside>
      <LineThrough height='100%' width='1px' bgColor='bg-buff' variants={vertical} animate={viewOnce ? "animate":"" } originY={1} delay={0.5} />
      <motion.aside className='overflow-hidden gap-5 flex flex-col h-full px-[10px]' variants={opacities} custom={{delay:1, duration: 0.25}} initial="initial" animate={viewOnce ? "animate":""}>
        <div className='min-h-full gap-5 flex flex-col animate-to-top-two'>
          <ImageForModal imgSrc={secondCol[0].src} alt={secondCol[0].alt} />
          <ImageForModal imgSrc={secondCol[1].src} alt={secondCol[1].alt} />
          <ImageForModal imgSrc={secondCol[2].src} alt={secondCol[2].alt} />
        </div>
        <div className='min-h-full gap-5 flex flex-col animate-to-top-two'>
          <ImageForModal imgSrc={secondCol[0].src} alt={secondCol[0].alt} />
          <ImageForModal imgSrc={secondCol[1].src} alt={secondCol[1].alt} />
          <ImageForModal imgSrc={secondCol[2].src} alt={secondCol[2].alt} />
        </div>
      </motion.aside>
      <LineThrough height='100%' width='1px' bgColor='bg-buff' variants={vertical} animate={viewOnce ? "animate":"" } delay={0.75}/>
    </div>
  )
}

export default Verticalcarousel
