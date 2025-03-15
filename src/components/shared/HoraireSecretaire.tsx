import { tauri } from '@/fonts/tauri';
import React, { FC } from 'react'
import { SlEarphonesAlt } from "react-icons/sl";

type HoraireSecretaireProps = {
  menuTop?: boolean
}

const HoraireSecretaire: FC<HoraireSecretaireProps>= ({menuTop=false}) => {
  return (
    <article className={`${menuTop ? "gap-x-2":"gap-x-4" } flex items-center w-64`} >
      <SlEarphonesAlt  size={40} className='w-[50px]' />
      <div className={`${menuTop ? "border-l-2 text-xs border-buff px-2":"pt-2"} tracking-wider`}>
        <p className={`underline underline-offset-4 pb-1 whitespace-nowrap ${tauri.className}`}>Horaires du secrétariat</p>
        <span>Lundi - Jeudi : 9h00-17h00 <br/>Vendredi : 9h00-16h00 <br/></span>
      </div>
    </article>
  )
}

export default HoraireSecretaire
