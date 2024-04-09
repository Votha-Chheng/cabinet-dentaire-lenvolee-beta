import { opacities } from '@/animations/opacityAnim'
import { motion } from 'framer-motion'
import React, { Dispatch, FC, SetStateAction } from 'react'
import { IoClose } from 'react-icons/io5'
import { RxHamburgerMenu } from 'react-icons/rx'

type BurgerProps = {
  slideMenu: boolean
  setSlideMenu: Dispatch<SetStateAction<boolean>>
}

const Burger: FC<BurgerProps> = ({setSlideMenu, slideMenu}) => {
  return (
    <motion.div 
      variants={opacities} custom={{delay:0.75, duration: 0.3}} initial="initial" animate="animate" 
      className='mobile:absolute block tablet:hidden left-80 mobile:left-auto right-auto mobile:right-10 cursor-pointer z-40 text-buff' 
      onClick={()=> setSlideMenu(prev=> !prev) } 
    >
      {
        slideMenu 
        ?
        <IoClose size={40}/>
        :
        <RxHamburgerMenu size={40} />
      }
    </motion.div>
  )
}

export default Burger
