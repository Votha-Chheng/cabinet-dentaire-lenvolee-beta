"use client"

import PageContainer from '@/components/layouts/PageContainer'
import PageHeader from '@/components/shared/PageHeader'
import PageSection from '@/components/layouts/PageSection'
import React, { FC, useState } from 'react'
import Protocole from './Protocole'
import { InView } from 'react-intersection-observer'
import Acces from './Acces'
import { classPStandard } from '@/datas/classNames'

const InfosPratiqueScreen: FC = () => {
  const [sectionTwoInview, setSectionTwoInview] = useState<boolean>(false)
  const [sectionThreeInview, setSectionThreeInview] = useState<boolean>(false)

  return (
    <>
      <PageHeader img='infos-hero.jpg' title='Infos pratiques'/>
      <PageContainer>
        <PageSection subtitle="Horaires d'ouverture" delayBoolean={true}>
          <p className={classPStandard}>
            Le cabinet dentaire est ouvert <span className='font-bold'>du lundi au jeudi de 9h00 à 19h00</span> et <span className='font-bold'>le vendredi de 9h00 à 16h00</span>. Les rendez-vous peuvent donc se faire sur toutes ces durées.
          </p>
          <p className={classPStandard}>
            Le secrétariat, quant à lui, est seulement joignable <span className='font-bold'>du lundi au jeudi de 9h00 à 17h00</span> et <span className='font-bold'>le vendredi de 9h00 à 16h00</span>.
          </p>
        </PageSection>
        <PageSection subtitle="Recommandations pour votre venue" delayBoolean={false} >
          <Protocole/>
        </PageSection>
        <PageSection subtitle='Premier rendez-vous' delayBoolean={false} subtitleInview={sectionTwoInview} >
          <InView onChange={(inView, entry)=> setSectionTwoInview(inView)} triggerOnce={true} />
          <p className={classPStandard}>
            Lors de votre premier rendez-vous, <span className='font-semibold'>un ques­tion&shy;nai&shy;re mé&shy;di&shy;cal à rem&shy;plir vous se&shy;ra don&shy;né</span>. Les ren&shy;­seigne&shy;ments de&shy;man&shy;­dés ser&shy;­vi&shy;ront à adap&shy;ter ou ajuster vo&shy;tre par&shy;cours de soins.
          </p>
        </PageSection>
        <PageSection subtitle='Accès au cabinet dentaire' delayBoolean={false} subtitleInview={sectionThreeInview} >
          <InView onChange={(inView, entry)=> setSectionThreeInview(inView)} triggerOnce={true} />
          <Acces/>
        </PageSection>
      </PageContainer>
    </>
  )
}

export default InfosPratiqueScreen
