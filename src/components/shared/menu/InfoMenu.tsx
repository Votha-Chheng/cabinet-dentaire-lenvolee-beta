import React, { FC } from 'react'
import { AnimationParametersProps } from '@/@types/animationParametersProps'
import { motion } from 'framer-motion'
import ParkingInfo from '../ParkingInfo'
import AddressInfo from '../AddressInfo'
import ContactInfo from '../ContactInfo'
import HorairesInfo from '../HorairesInfo'
import HoraireSecretaire from '../HoraireSecretaire'


const InfoMenu: FC<AnimationParametersProps> = ({delay=0, duration=0.25, variants=undefined}) => {
  return (
    <motion.section 
      variants={variants} 
      custom={{delay, duration}} 
      initial="initial" 
      animate="animate" 
      className='hidden laptop:flex self-start text-buff gap-1 laptop:gap-7 pt-2 desktop:pt-0 ml-5'
    >
      <HorairesInfo menuTop={true} />
      <HoraireSecretaire menuTop={true}/>
      <ContactInfo menuTop={true}/>
      <AddressInfo menuTop={true}/>
      <ParkingInfo menuTop={true}/>
    </motion.section>
  )
}

export default InfoMenu