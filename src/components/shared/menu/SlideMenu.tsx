import { tauri } from '@/fonts/tauri'
import Link from 'next/link'
import React, { FC } from 'react'

type SlideMenuProps = {
  slideMenu: boolean
}

const SlideMenu: FC<SlideMenuProps> = ({slideMenu}) => {
  return (
    <nav 
      className='fixed top-[70px] tablet:top-[77px] w-full flex flex-col items-center py-5 z-10 transition-transform duration-300 bg-main-theme laptop:hidden border-b border-buff' 
      style={{transform: `translateY(${slideMenu ? 0:-100}%)`}} 
    >
      <ul className={`${tauri.className} flex flex-col items-center text-buff text-lg gap-3.5 scroll-pt-2 w-full text-center`} >
        <li className='hover:text-[#dcba93] hover:bg-[#414862] w-full'>
          <Link href="/ethique">
              Notre éthique
          </Link>
        </li>
        <li className='hover:text-[#dcba93] hover:bg-[#414862] w-full'>
          <Link href="/esthetique-dentaire">
            Esthétique dentaire
          </Link>
        </li>
        <li className='hover:text-[#dcba93] hover:bg-[#414862] w-full'>
          <Link href="/implantologie">
            Implantologie
          </Link>
        </li>
        <li className='hover:text-[#dcba93] hover:bg-[#414862] w-full'>
          <Link href="/parodontologie">
           Parodontologie
          </Link>
        </li>
        <li className='hover:text-[#dcba93] hover:bg-[#414862] w-full'>
          <Link href="/endodontie">
            Endodontie
          </Link>
        </li>
        <li className='hover:text-[#dcba93] hover:bg-[#414862] w-full'>
          <Link href="/prevention-dentaire">
            Prevention dentaire
          </Link>
        </li>
        <li className='hover:text-[#dcba93] hover:bg-[#414862] w-full'>
          <Link href="/urgences">
            Urgences
          </Link>
        </li>
        <li className='hover:text-[#dcba93] hover:bg-[#414862] w-full'>
          <Link href="/infos-pratiques">
            Infos pratiques
          </Link>
        </li>
        <li className='hover:text-[#dcba93] hover:bg-[#414862] w-full'>
          <Link href="/demander-rdv">
            Demander un RDV par mail
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default SlideMenu
