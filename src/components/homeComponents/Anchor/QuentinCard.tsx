import { lora } from '@/fonts/lora'
import { oswald } from '@/fonts/oswald'
import { tauri } from '@/fonts/tauri'
import React, { FC } from 'react'

const QuentinCard: FC = () => {
  return (
    <div className='flex flex-col items-center min-w-[100%]'>
      <h2 className={`${lora.className} text-2xl mobile:text-3xl tablet:text-4xl tracking-wider underline underline-offset-8 py-2`}>
        Dr. Quentin Lupi
      </h2>
      <h3 className={`${tauri.className} tracking-wider text-base mobile:text-lg laptop:text-xl py-0 mobile:py-2.5 relative`}>
        <em>Chirurgien dentiste</em>
      </h3>
      <h4 className={`${oswald.className} tracking-wider font-thin text-base mobile:text-lg laptop:text-xl top-2 pb-2.5 py-1 relative`}>
        <div>Diplômé de la faculté de Montpellier</div>
      </h4>
      <h4 className={`${oswald.className} tracking-wider font-thin text-base mobile:text-lg laptop:text-xl top-2 pb-2.5 py-1 relative`}>
        <div>Exercice orienté vers la pratique de l&apos;endodontie</div>
      </h4>
      <h4 className={`${oswald.className} tracking-wider font-thin text-base mobile:text-lg laptop:text-xl top-2 pb-2.5 py-1 relative`}>
        <div>Attaché universitaire</div>
      </h4>
    </div>
  )
}

export default QuentinCard