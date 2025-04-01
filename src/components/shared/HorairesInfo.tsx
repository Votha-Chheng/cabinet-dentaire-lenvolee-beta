import { tauri } from '@/fonts/tauri'
import React, { FC } from 'react'
import { FaRegClock } from 'react-icons/fa6'

type HorairesInfoProps = {
  menuTop?: boolean
}

const HorairesInfo: FC<HorairesInfoProps> = ({menuTop=false}) => {
  return (
    
    <article className={`${menuTop ? "gap-2":"gap-4" } flex items-center min-w-56`} >
      <FaRegClock size={40} className='w-[50px]' />
      <div className={`${menuTop ? "border-l-2 text-xs border-buff px-2":"pt-2"} tracking-wider`}>
        <p className={`underline underline-offset-4 pb-1 ${tauri.className}`}>Horaires du cabinet</p>
        <span>Lundi - Jeudi : 9h00-19h00 <br/>Vendredi : 9h00-16h00 <br/></span>
      </div>
    </article>
  )
}

export default HorairesInfo