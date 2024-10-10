import { lora } from '@/fonts/lora'
import React, { Dispatch, FC, SetStateAction, useEffect, useRef, useState } from 'react'
import { MdHorizontalRule } from 'react-icons/md'
import DiplomeSlide from './DiplomeSlide'

type DiplomesSectionProps = {
  diplomeListe?: string[]
  height?: number
  setTopXDiplomeSection?: Dispatch<SetStateAction<number>>
}

const DiplomesSection: FC<DiplomesSectionProps> = ({ diplomeListe, height, setTopXDiplomeSection }) => {
  const [open, setOpen] = useState<boolean>(false)

  const topXDiplomeSectionRef = useRef<HTMLDivElement>(null)

  useEffect(()=> {
    if(topXDiplomeSectionRef.current && setTopXDiplomeSection){
      setTopXDiplomeSection(topXDiplomeSectionRef.current.getBoundingClientRect().top)
    }
  }, [setTopXDiplomeSection])


  return (
    <article ref={topXDiplomeSectionRef} className='flex w-full items-center py-1 justify-between border-t h-12 border-main-theme relative'>
      <DiplomeSlide diplomeListe={diplomeListe} viewDiplomesListe={open} height={height}/>
      <h4  onClick={()=> setOpen(prev=> !prev)} className={`${lora.className} font-bold text-xl tracking-wider pl-5 cursor-pointer`} >Voir mes diplômes</h4>
      <div className='relative cursor-pointer h-10 w-10 mr-8 hover:scale-110 hover:opacity-75 duration-100 transition-all' onClick={()=> setOpen(prev=> !prev)}>
        <MdHorizontalRule size={40} className='absolute'/>
        <MdHorizontalRule size={40} className={`absolute ${!open ? "rotate-90":""} transition-transform duration-150 top-0 left-0`} />
      </div>
    </article>
  )
}

export default DiplomesSection