import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { tauri } from '@/fonts/tauri'
import { useClickAway } from '@uidotdev/usehooks'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useRef, useState } from 'react'
import { FaCaretSquareDown } from 'react-icons/fa'

const DropdownSpecialities = () => {

  const [openDropDownSpecialites, setOpenDropDownSpecialites] = useState<boolean>(false)
  const [displayable, setDisplayable] = useState<boolean>(false)

  const pathname = usePathname()
  
  const dropdownContentRef = useClickAway<HTMLDivElement>(()=> {
    setOpenDropDownSpecialites(false)
  })

  useEffect(()=> {
    setTimeout(()=> {
      setDisplayable(true)
    }, 1750)

    return ()=> setDisplayable(false)
  }, [])

  useEffect(()=> {
    setOpenDropDownSpecialites(false)
  }, [pathname])

  return (
    <DropdownMenu open={openDropDownSpecialites}>
      <DropdownMenuTrigger asChild>
        <div className='flex gap-x-2 items-center tracking-wide' onClick={()=> setOpenDropDownSpecialites(prev=> !prev)} onMouseEnter={()=> setOpenDropDownSpecialites(true)} onMouseOver={()=> setOpenDropDownSpecialites(true)}>
          Spécialités <span><FaCaretSquareDown /></span>
        </div>
      </DropdownMenuTrigger>
      {
        displayable &&
        <DropdownMenuContent ref={dropdownContentRef} className="w-full border-2 border-buff text-center" onMouseEnter={()=> setOpenDropDownSpecialites(true)} onMouseLeave={()=> setOpenDropDownSpecialites(false)}>
          <DropdownMenuLabel className={`${tauri.className} text-main-theme hover:bg-gray-200 transition-colors duration-75 font-bold text-lg my-1.5`}>
            <Link href='/esthetique-dentaire'>
              Esthétique dentaire
            </Link>
          </DropdownMenuLabel>
          <DropdownMenuLabel className={`${tauri.className} text-main-theme hover:bg-gray-200 transition-colors duration-75 font-bold text-lg my-1.5`}>
            <Link href='/parodontologie'>
              Parodontologie
            </Link>
          </DropdownMenuLabel>
          <DropdownMenuLabel className={`${tauri.className} text-main-theme hover:bg-gray-200 transition-colors duration-75 font-bold text-lg my-1.5`}>
            <Link href='/implantologie'>
              Implantologie 
            </Link>
          </DropdownMenuLabel>
          <DropdownMenuLabel className={`${tauri.className} text-main-theme hover:bg-gray-200 transition-colors duration-75 font-bold text-lg my-1.5`}>
            <Link href='/endodontie'>
              Endodontie
            </Link>
          </DropdownMenuLabel> 
        </DropdownMenuContent>
      }
    </DropdownMenu>
  )
}

export default DropdownSpecialities
