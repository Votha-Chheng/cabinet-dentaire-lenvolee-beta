import { childrenAppear, parentAppear } from '@/animations/diplomesAnim'
import { frankRuhl } from '@/fonts/frankRuhl'
import { motion } from 'framer-motion'
import React, { FC } from 'react'
import { IoSchoolSharp } from 'react-icons/io5'

type DiplomeSlideProps = {
  diplomeListe ?: string[]
  viewDiplomesListe: boolean
  height?: number
}

const DiplomeSlide: FC<DiplomeSlideProps> = ({diplomeListe, viewDiplomesListe, height}) => {
  return (
    <motion.ul 
      variants={parentAppear}
      initial="initial"
      animate={`${viewDiplomesListe ?"animate":""}` }
      className={`${frankRuhl.className} tracking-wide w-full h-full absolute bg-main-theme bottom-12 text-white px-2.5 laptop:px-5 py-1 laptop:py-2 transition-transform duration-200 z-30`} 
      style={{height:`${height ? height + "px" : "auto"}`, originY:1}}
    >
      {
        diplomeListe && diplomeListe.length>0
        ?
        diplomeListe.map((diplome: string, index: number)=> (
          <motion.li 
            variants={childrenAppear}  
            className='flex gap-2 my-1.5 italic text-sm laptop:text-base desktop:text-lg' key={index}
          >
            <div>
              <IoSchoolSharp className='mt-1.5' size={15} />
            </div>
            <span className='tracking-wider'>{diplome}</span>
          </motion.li>
        ))
        :
        null
      }
    </motion.ul>
  )
}

export default DiplomeSlide