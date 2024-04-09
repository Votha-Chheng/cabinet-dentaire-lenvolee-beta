'use client'

import { tauri } from '@/fonts/tauri'
import useScrollY from '@/hooks/useScrollY'
import Image from 'next/image'
import Link from 'next/link'
import React, { FC, useEffect, useMemo, useRef, useState } from 'react'
import LineThrough from '../LineThrough'
import { horizontal } from '@/animations/linesAnim'
import { AnimationParametersProps } from '@/@types/animationParametersProps'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useWindowSize } from '@uidotdev/usehooks'

const MenuItems: FC<AnimationParametersProps> = ({delay=0, duration=0.25, variants=undefined}) => {
  const [itemsMenuTop, setItemsMenuTop] = useState<number>(0)
  const [itemsMenuLeft, setItemsMenuLeft] = useState<number>(0)
  const [itemsMenuHeight, setItemsMenuHeight] = useState<number>(0)
  const [itemOne, setItemOne] = useState<{width: number, positionX: number}>({width:0, positionX:0})
  const [itemTwo, setItemTwo] = useState<{width: number, positionX: number}>({width:0, positionX:0})
  const [itemThree, setItemThree] = useState<{width: number, positionX: number}>({width:0, positionX:0})
  const [itemFour, setItemFour] = useState<{width: number, positionX: number}>({width:0, positionX:0})

  const pathname = usePathname()
  const Y = useScrollY()
  const itemsRef = useRef<HTMLUListElement>(null)
  const itemOneRef = useRef<HTMLDivElement>(null)
  const itemTwoRef = useRef<HTMLDivElement>(null)
  const itemThreeRef = useRef<HTMLLIElement>(null)
  const itemFourRef = useRef<HTMLLIElement>(null)

  const screenWidth = useWindowSize()
  const {width} = screenWidth
  
  useEffect(()=> {
    if(itemsRef.current){
      setItemsMenuTop(itemsRef.current.getBoundingClientRect().top)
      setItemsMenuLeft(itemsRef.current.getBoundingClientRect().x)
      setItemsMenuHeight(itemsRef.current.clientHeight)
    }
  }, [setItemsMenuTop, setItemsMenuLeft, setItemsMenuHeight])

  useEffect(()=> {
    if(itemOneRef.current){
      const temp = {width: itemOneRef.current.clientWidth, positionX: itemOneRef.current.getBoundingClientRect().x}
      setItemOne(temp)
    }
  }, [setItemOne])

  useEffect(()=> {
    if(itemTwoRef.current){
      const temp = {width: itemTwoRef.current.clientWidth, positionX: itemTwoRef.current.getBoundingClientRect().x}
      setItemTwo(temp)
    }
  }, [setItemTwo])

  useEffect(()=> {
    if(itemThreeRef.current){
      const temp = {width: itemThreeRef.current.clientWidth, positionX: itemThreeRef.current.getBoundingClientRect().x}
      setItemThree(temp)
    }
  }, [setItemThree])

  useEffect(()=> {
    if(itemFourRef.current){
      const temp = {width: itemFourRef.current.clientWidth, positionX: itemFourRef.current.getBoundingClientRect().x}
      setItemFour(temp)
    }
  }, [setItemFour])

  const position = useMemo(()=> {
    return Y>itemsMenuTop ? "fixed":"absolute"
  }, [Y, itemsMenuTop])

  const bandWidth = useMemo(()=> {
    switch(pathname){
      case "/ethique" : return itemOne
      case "/prevention-dentaire" : return itemTwo
      case "/urgences" : return itemThree
      case "/infos-pratiques" : return itemFour
      default : return {width:0, positionX:0}

    }
  }, [pathname, itemOne])

  return (
    <div className='relative hidden tablet:block bg-main-theme z-50' style={{height:`${itemsMenuHeight}px`}}>  
      <nav className={`${position} w-full top-0 bg-main-theme`}>
        <LineThrough bgColor='bg-buff' width='100%' variants={horizontal} classComplement='laptop:block hidden' />
        <motion.ul 
          ref={itemsRef} 
          variants={variants} 
          custom={{delay, duration}} 
          initial="initial" 
          animate="animate" 
          className={`${tauri.className} overflow-hidden text-buff w-[95%] desktop:w-[80%] mx-auto text-lg desktop:text-xl py-2.5 desktop:py-1 tracking-wider`}
        >
          <div className='flex w-[120%] gap-10 items-center transition-transform duration-150 relative' style={{transform: `translateX(${(width !== null) && width <1024 ? "0" : position === "fixed" ? "0":"-248px"})`}} >
            <li className='hidden laptop:block'>
              <Link href="/">
                <Image src="/images/logo.svg" alt="logo du cabinet dentaire L'enviolée" width={200} height={100} />
              </Link>
            </li>
            <div className='flex gap-10 relative'>
              <motion.div 
                aria-hidden="true" 
                className='bg-buff absolute -bottom-1 h-1 rounded-md duration-200' 
                style={{width:`${bandWidth.width}px`, left:`${bandWidth.positionX - itemsMenuLeft + 10}px`, transitionProperty: "left"}} 
              />
              <li className='px-2'>
                <Link href="/ethique">
                  <div ref={itemOneRef}>
                    Notre éthique
                  </div>
                </Link>
              </li>
              <li className='px-2'>
                <Link href="/prevention-dentaire">
                  <div ref={itemTwoRef}>
                    Prévention dentaire
                  </div>
                </Link>
              </li>
              <li ref={itemThreeRef} className='px-2'>
                <Link href="/urgences">
                  Urgences
                </Link>
              </li>
              <li ref={itemFourRef} className='px-2'>
                <Link href="/infos-pratiques">
                  Infos pratiques
                </Link>
              </li>
            </div>
          </div>
        </motion.ul>
        <LineThrough bgColor='bg-buff' width='100%'  variants={horizontal} delay={0.2} originX={1}/>
      </nav>
    </div>
  )
}

export default MenuItems