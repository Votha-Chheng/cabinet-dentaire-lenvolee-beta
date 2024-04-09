import Link from 'next/link'
import React, { FC } from 'react'
import { FaRegClock } from "react-icons/fa6"
import { MdOutlinePermPhoneMsg } from "react-icons/md"
import { TbLocationFilled } from "react-icons/tb"
import { FaExternalLinkAlt } from "react-icons/fa";
import { AnimationParametersProps } from '@/@types/animationParametersProps'
import { motion } from 'framer-motion'


const InfoMenu: FC<AnimationParametersProps> = ({delay=0, duration=0.25, variants=undefined}) => {
  return (
    <motion.section 
      variants={variants} 
      custom={{delay, duration}} 
      initial="initial" 
      animate="animate" 
      className='hidden laptop:flex self-start text-md laptop:text-lg text-buff gap-2 laptop:gap-8 pt-2 desktop:pt-0'
    >
      <article className='flex items-center gap-2'>
        <FaRegClock size={40} className='w-[45px]' />
        <p className='border-l-2 border-buff px-2 tracking-wide'>
          Lundi - Mardi - Jeudi : 9h-19h<br/>
          Vendredi : 9h-17h
        </p>
      </article>
      <article className='flex items-center gap-2 tracking-wide'>
        <MdOutlinePermPhoneMsg size={40} className='w-[45px]'/>
        <div className='flex flex-col border-l-2 border-buff px-2'>
          <Link href="tel:0467756811">
            04 67 75 68 11
          </Link>
          <Link href="mailto:cabinetdentaire.lenvolee@gmail.com">
            cabinetdentaire.lenvolee@gmail.com
          </Link>
        </div>
      </article>
      <article className='flex items-center gap-2 tracking-wide'>
        <TbLocationFilled size={40} className='w-[45px]' />
        <div className='flex'>
          <Link target='_blank' 
            href="https://www.google.com/maps/place/L'envol%C3%A9e+Cabinet+dentaire/@43.6286619,3.8972849,17z/data=!3m1!4b1!4m6!3m5!1s0x12b6afe3746f22a9:0x26b0e09020eb2030!8m2!3d43.6286619!4d3.8972849!16s%2Fg%2F11rcx7fhm4?entry=ttu" 
            className='border-l-2 border-buff px-2'
          >
            Résidence L'Envolée, 3 place Charles de Gaulle<br/>
            34 170 Castelnau-le-Lez
          </Link>
          <Link 
            target='_blank' 
            href="https://www.google.com/maps/place/L'envol%C3%A9e+Cabinet+dentaire/@43.6286619,3.8972849,17z/data=!3m1!4b1!4m6!3m5!1s0x12b6afe3746f22a9:0x26b0e09020eb2030!8m2!3d43.6286619!4d3.8972849!16s%2Fg%2F11rcx7fhm4?entry=ttu" 
            className='self-center'
          >
            <FaExternalLinkAlt />
          </Link>
        </div>
      </article>
    </motion.section>
  )
}

export default InfoMenu