import { fromLeftOutside, fromRightOutside, vertical } from '@/animations/linesAnim'
import { opacities, reverseOpacity } from '@/animations/opacityAnim'
import LineThrough from '@/components/shared/LineThrough'
import { useWindowSize } from '@uidotdev/usehooks'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React, { FC, useEffect, useState } from 'react'
import SylvieCard from './SylvieCard'
import QuentinCard from './QuentinCard'

const AnchorSection: FC = () => {
  const [bigImg, setBigImg] = useState<0|1>(0)
  const [card, setCard] = useState<"translate-x-0"|"-translate-x-full">("translate-x-0")
  const [switchingBigImg, setSwitchingBigImg] = useState<boolean>(false)

  const {width, height} = useWindowSize()

  const handleNext = () => {
    setSwitchingBigImg(true)
    setTimeout(()=> {
      setBigImg(prev=> prev===1 ? 0 : 1)
      setSwitchingBigImg(false)
    }, 250)


    setTimeout(()=> {
      setCard(prev => prev === "translate-x-0"? "-translate-x-full":"translate-x-0")
    }, 250)
  }


  const arrayBigImages = [
    "cabinet-4.jpg",
    "cabinet-lupi-4.jpg",
  ]

  const returnSectionHeight = (height: number, width: number)=> {
    if(height> 1080 && width<1024){
      return "95vh"
    } else if(height<=1080 && width<1024){
      return "680px"
    }
    return "900px"
  }

  const returnMarginTop = (width: number)=> {
    if(width>1440){
      return "65.55px"
    } else if (width<1440 && width>1024){
      return "55.55px"
    } else if(width>424 && width<1024){
      return "48px"
    }
    return "30px"
  }

  useEffect(()=> {
    const moveAutomatically = setInterval(()=>handleNext(), 7000)
    
    return ()=> clearInterval(moveAutomatically)
  }, [])

  return (
    <section className='w-[95%] desktop:w-[1440px] mx-auto mb-0 laptop:mb-72' style={{height: returnSectionHeight(height ?? 0, width?? 0), marginTop: `${returnMarginTop(width ?? 0)}`}}>
      <div className='w-full h-[660px] desktop:h-[700px] flex items-start relative'>
        <LineThrough height='103%' bgColor='bg-buff' width='1px' variants={vertical} delay={0.5} />
        <motion.article variants={opacities} custom={{delay: 1.8, duration: 0.25}} initial="initial" animate="animate" className="relative h-full w-1/2 hidden laptop:block">
          <Image 
            src={`/images/${arrayBigImages[bigImg]}`} 
            alt="Les Dr Sylvie Ma et Quentin Lupi" 
            style={{objectFit:"cover", objectPosition:"50% 0%"}} 
            className={`z-10`} 
            priority 
            fill
          />
          <motion.div variants={reverseOpacity} custom={0} initial="initial" animate={switchingBigImg ? "animate":"initial"} className='w-full h-full bg-white z-30 absolute' />
        </motion.article>
        <LineThrough height='120%' bgColor='bg-buff' width='1px' classComplement='laptop:block hidden' variants={vertical} delay={0.75} originY={1} />
        <article className='h-full w-full laptop:w-1/2 flex flex-col' >
          <motion.div variants={opacities} custom={{delay: 1.9, duration: 0.25}} initial="initial" animate="animate" className='relative h-1/2 overflow-hidden'>
            <Image src={`/images/duo.jpg`} alt="Les dentistes Sylvie Ma-Francinet et Quentin Lupi" className='tablet:block hidden' style={{objectFit:"cover"}} priority fill/>
            <Image src={`/images/mini-group-portrait.jpg`} alt="Les dentistes Sylvie Ma-Francinet et Quentin Lupi" className='tablet:hidden block' style={{objectFit:"cover"}} priority fill/>
          </motion.div>
          <LineThrough width='107%' bgColor='bg-buff' height='1px' classComplement="laptop:ml-0 -ml-5" variants={fromLeftOutside} />
          <aside className='relative h-1/2 text-buff flex  items-center justify-center overflow-hidden'>
            <div className={`flex -translate-x-full flex-nowrap absolute w-full transition-transform duration-500 ${card}`}>
              <SylvieCard/>
              <QuentinCard/>
            </div>
          </aside>
        </article>
        <LineThrough height='95%' bgColor='bg-buff' width='1px' classComplement="mt-0"  variants={vertical} delay={1}/>
      </div>
      <LineThrough width='90%' bgColor='bg-buff' height='1px' classComplement="-ml-16" variants={fromRightOutside} />      
    </section>
  )
}

export default AnchorSection