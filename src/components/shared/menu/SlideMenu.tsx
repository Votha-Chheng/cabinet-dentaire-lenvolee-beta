import { tauri } from '@/fonts/tauri'
import Link from 'next/link'
import React, { FC } from 'react'

type SlideMenuProps = {
  slideMenu: boolean
}

const SlideMenu: FC<SlideMenuProps> = ({slideMenu}) => {
  return (
    <nav className='fixed top-[70px] w-full flex flex-col items-center py-5 z-10 transition-transform duration-300 bg-main-theme tablet:hidden border-b border-buff' style={{transform: `translateY(${slideMenu ? 0:-100}%)`}} >
      <ul className={`${tauri.className} flex flex-col items-center text-buff text-lg gap-3`} >
        <li className='px-2'>
          <Link href="/ethique">
              Notre éthique
          </Link>
        </li>
        <li className='px-2'>
          <Link href="/prevention-dentaire">
            Prévention dentaire
          </Link>
        </li>
        <li className='px-2'>
          <Link href="/urgences">
            Urgences
          </Link>
        </li>
        <li className='px-2'>
          <Link href="/infos-pratiques">
            Infos pratiques
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default SlideMenu
