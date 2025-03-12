import HomeTitle from '@/components/shared/HomeTitle'
import React, { Dispatch, FC, SetStateAction, useState } from 'react'
import Verticalcarousel from './Verticalcarousel'
import { InView } from 'react-intersection-observer'
import HorizontalCarousel from './HorizontalCarousel'
import { photosCarousel } from '@/datas/photoListForCarousel'
import { Button } from '@/components/ui/button'
import { tauri } from '@/fonts/tauri'
import Link from 'next/link'

type AccueilSectionProps = {
  setAccueilSectionInView: Dispatch<SetStateAction<boolean>>
  accueilSectionInview: boolean
}

const AccueilSection: FC<AccueilSectionProps> = ({setAccueilSectionInView, accueilSectionInview}) => {
  const [viewOnce, setViewOnce] = useState<boolean>(false)

  const images = photosCarousel

  return (
    <section>
      <div className='mb-44 flex justify-center'>
        <Button 
          className={`text-lg tablet:text-xl tablet:py-4 w-4/5 tablet:w-1/3 whitespace-normal h-full mobile:transition-all mobile:duration-100 ${accueilSectionInview ? "bg-buff hover:bg-buff hover:opacity-90 hover:scale-105 text-main-theme":"bg-white text-white hover:bg-white select-none cursor-default"} ${tauri.className}`}
        >
          <Link href="/demande-rdv" className={`uppercase ${accueilSectionInview ? "cursor-pointer":"cursor-default"}`}>
            Demander un RDV par e-mail
          </Link>
        </Button>
      </div>
      <InView triggerOnce={true} onChange={(inView, entry)=> setViewOnce(inView) }/>
      <HomeTitle textColor='text-buff' title='Un accueil dans un cadre relaxant' lineColor='bg-buff' />
      <InView as="article" onChange={(inView, entry)=> setAccueilSectionInView(inView) }>
        <Verticalcarousel viewOnce={viewOnce} />
        <HorizontalCarousel images={images} viewOnce={viewOnce}/>
      </InView>
    </section>
  )
}

export default AccueilSection
