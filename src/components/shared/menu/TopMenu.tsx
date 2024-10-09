'use client'

import React, { FC, useEffect, useState } from 'react'
import Logo from '../Logo'
import InfoMenu from './InfoMenu'
import MenuItems from './MenuItems'
import { opacities } from '@/animations/opacityAnim'
import LineThrough from '../LineThrough'
import { horizontal } from '@/animations/linesAnim'
import Burger from './Burger'
import { useWindowSize } from '@uidotdev/usehooks'
import SlideMenu from './SlideMenu'
import { usePathname } from 'next/navigation'

const TopMenu: FC = () => {
  const [slideMenu, setSlideMenu] = useState<boolean>(false)
  const {width} = useWindowSize()

  const pathname = usePathname()

  useEffect(()=> {
    setSlideMenu(false)
  }, [pathname])

  return (
    <>
      <SlideMenu slideMenu={slideMenu} />
      <header className='bg-main-theme w-full fixed top-0 laptop:static z-50'>
        <section className='w-auto mobile:w-full relative px-1 mobile:px-2 laptop:px-12 mx-auto pb-0 pt-3 laptop:py-3 flex desktop:flex-row flex-row mobile:flex-col mobile:items-center justify-between z-50'>
          <Logo variants={opacities} delay={width && width>420 ? 1.5 : 0.75} />
          <Burger setSlideMenu={setSlideMenu} slideMenu={slideMenu} />
          <LineThrough classComplement='hidden mobile:block desktop:hidden mr-3' bgColor='bg-buff' width='100vw' height='1px' variants={horizontal} originX={0} />
          <InfoMenu variants={opacities} delay={1.6} />
          <LineThrough classComplement='absolute bottom-0 -ml-2.5 block mobile:hidden' bgColor='bg-buff' width='100vw' height='1px' variants={horizontal} originX={0} />
        </section>
        <MenuItems variants={opacities} delay={1.7}/>
      </header>
    </>
  )
}

export default TopMenu