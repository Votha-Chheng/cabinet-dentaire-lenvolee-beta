import React, { FC, ReactNode, useEffect, useRef, useState } from 'react'
import LineThrough from '../shared/LineThrough'
import { background, horizontalLines, verticalLines } from '@/animations/pagesAnimations'
import { motion } from 'framer-motion'
import { vertical } from '@/animations/linesAnim'

type PageContainerProps = {
  children: ReactNode
}

const PageContainer: FC<PageContainerProps> = ({children}) => {
  const [bandHeight, setBandHeight] = useState<number>(0)

  const containerRef = useRef<HTMLDivElement>(null)
  
  useEffect(()=> {
    if(containerRef.current){
      setBandHeight(containerRef.current.clientHeight)
    }
  }, [setBandHeight])

  return (
    <main className='bg-main-theme pt-44 pb-72 px-2 tablet:pr-[20px] tablet:pl-[70px] laptop:pr-[70px] laptop:pl-[110px] desktop:pr-[150px] desktop:pl-[200px] overflow-hidden'>
      <LineThrough height="1px" width='110%' bgColor='bg-buff' variants={horizontalLines} initial='initial' animate="animate" />
      <motion.div ref={containerRef} variants={background} initial="initial" animate="animate" className='relative'>
        <LineThrough height='108%' width='1px' bgColor='bg-buff' classComplement='absolute' variants={verticalLines} initial='initialTop' animate='animateFirst' />
        <LineThrough height='105%' width='1px' bgColor='bg-buff' classComplement='absolute right-0' variants={verticalLines} initial='initialTop' animate='animateSecond' />
        <motion.div 
          variants={vertical} 
          custom={{delay:0.75, duration: 0.5}} 
          initial="initial" 
          animate="animate" 
          aria-hidden="true" 
          style={{height:`${bandHeight - 64}px`}} 
          className='absolute w-[50px] top-0 -left-[50px] mt-16 bg-buff'
        >
          <div className='after-band' />
        </motion.div>
        {children}
      </motion.div>
      <LineThrough height="1px" width='109%' bgColor='bg-buff' classComplement='-translate-x-20' />
    </main>
  )
}

export default PageContainer