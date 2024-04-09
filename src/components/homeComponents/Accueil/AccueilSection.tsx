import HomeTitle from '@/components/shared/HomeTitle'
import React, { Dispatch, FC, SetStateAction, useState } from 'react'
import Verticalcarousel from './Verticalcarousel'
import { InView } from 'react-intersection-observer'
import HorizontalCarousel from './HorizontalCarousel'
import { photosCarousel } from '@/datas/photoListForCarousel'

type AccueilSectionProps = {
  setAccueilSectionInView: Dispatch<SetStateAction<boolean>>
}

const AccueilSection: FC<AccueilSectionProps> = ({setAccueilSectionInView}) => {
  const [viewOnce, setViewOnce] = useState<boolean>(false)

  const images = photosCarousel

  return (
    <section>
      <HomeTitle textColor='text-buff' title='Un accueil dans un cadre relaxant' lineColor='bg-buff' />
      <InView triggerOnce={true} onChange={(inView, entry)=> setViewOnce(inView) }/>
      <InView as="article" onChange={(inView, entry)=> setAccueilSectionInView(inView) }>
        <Verticalcarousel viewOnce={viewOnce} />
        <HorizontalCarousel images={images} viewOnce={viewOnce}/>
      </InView>
    </section>
  )
}

export default AccueilSection
