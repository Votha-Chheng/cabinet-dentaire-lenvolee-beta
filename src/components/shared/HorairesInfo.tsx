import React, { FC } from 'react'
import { FaRegClock } from 'react-icons/fa6'

type HorairesInfoProps = {
  menuTop?: boolean
}

const HorairesInfo: FC<HorairesInfoProps> = ({menuTop=false}) => {
  return (
    <article className={`${menuTop ? "gap-2":"gap-4" } flex items-center w-64`} >
      <FaRegClock size={40} className='w-[45px]' />
      <p className={`${menuTop ? "border-l-2 text-sm border-buff px-2":"pt-2"} tracking-wide`}>
        Lundi - Mardi : 9h00-19h00<br/>
        Mercredi : 14h00-19h00<br/>
        Vendredi : 9h00-16h00
      </p>
    </article>
  )
}

export default HorairesInfo