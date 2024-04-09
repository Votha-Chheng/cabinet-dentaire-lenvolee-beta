import { centerImage } from '@/animations/horizontalCarouselAnimations'
import ImageForModal from '@/components/shared/ImageForModal'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React, { FC, useEffect, useState } from 'react'
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa'

type HorizontalCarouselProps = {
  images: {src: string, alt:string}[]
  viewOnce: boolean
}

const HorizontalCarousel: FC<HorizontalCarouselProps> = ({images}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [clickLeft, setClickLeft] = useState<boolean>(false)
  const [clickRight, setClickRight] = useState<boolean>(false)
  const [clicked, setClicked] = useState<number>(0)

  const handleNext = () => {
    setClicked(prev=> prev === 10 ? 0 : prev+1)

    setTimeout(()=> {
      setCurrentIndex(prev => prev === images.length - 1 ? 0 : prev + 1)
    }, 100)

    setClickRight(true)

    setTimeout(()=> {
      setClickRight(false)
    }, 700)
  }

  const handlePrevious = () => {
    setClicked(prev=> prev === 10 ? 0 : prev+1)
    setTimeout(()=> {
      setCurrentIndex(prev => prev === 0 ? images.length - 1 : prev - 1)
    }, 100)
    
    setClickLeft(true)
    
    setTimeout(()=> {
      setClickLeft(false)
    }, 700)
    
  }
  
  const handleDotClick = (index: number) => {
    setClicked(prev=> prev === 10 ? 0 : prev+1)
    setCurrentIndex(index)
  }

  useEffect(()=> {
    const moveAutomatically = setInterval(()=>handleNext(), 5000)
    
    return ()=> clearInterval(moveAutomatically)
  }, [clicked])

  return (
    <>
      <section className='w-80 h-[500px] mobile:w-96 mobile:h-[600px] block laptop:hidden overflow-hidden mx-auto relative border-buff border'>
        <div className='absolute w-full flex -translate-x-80 mobile:-translate-x-96'>
          <div className='relative w-80 h-[500px] mobile:h-[600px] mobile:w-96 mx-auto cursor-pointer overflow-hidden min-w-[320px] mobile:min-w-[384px]'>
            <Image 
              key={currentIndex === 0 ? images.length -1 : currentIndex -1 }
              src={`/images/${images[currentIndex === 0 ? images.length -1 : currentIndex -1 ].src}` }
              alt={images[currentIndex].alt}
              fill
              style={{objectFit: "cover"}}
            />
          </div>
          <motion.div 
            variants={centerImage} 
            animate={clickLeft ? "moveRight": clickRight ? "moveLeft": ""} 
            className='relative w-80 h-[500px] mobile:h-[600px] mobile:w-96 mx-auto cursor-pointer overflow-hidden min-w-[320px] mobile:min-w-[384px]'
          >
            <ImageForModal
              imgSrc={images[currentIndex].src}
              alt={images[currentIndex].alt}
            />
          </motion.div>
          <div className='relative w-80 h-[500px] mobile:h-[600px] mobile:w-96 mx-auto cursor-pointer overflow-hidden min-w-[320px] mobile:min-w-[384px]'>
            <Image 
              key={currentIndex === images.length -1 ? 0 : currentIndex + 1}
              src={`/images/${images[currentIndex === images.length -1 ? 0 : currentIndex + 1].src}` }
              alt={images[currentIndex].alt}
              fill
              style={{objectFit: "cover"}}
            />
          </div>
        </div>
      </section>
      <div className="flex justify-center gap-5 py-5 laptop:hidden">
        {images.map((_, index: number) => (
          <div
            key={index}
            className={`w-4 h-4 rounded-full transition-transform duration-200 cursor-pointer ${currentIndex === index ? "scale-150 bg-white" : " scale-100 bg-slate-500"}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
      <div className="flex laptop:hidden justify-center gap-8 pt-2 pb-10">
        <div className="text-buff cursor-pointer">
          <FaArrowCircleLeft onClick={handlePrevious} size={40} />
        </div>
        <div className="text-buff cursor-pointer">
          <FaArrowCircleRight onClick={handleNext} size={40} />
        </div>
      </div>
    </>
  )
}

export default HorizontalCarousel
