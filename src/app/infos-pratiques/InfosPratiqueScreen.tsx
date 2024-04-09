"use client"

import PageContainer from '@/components/layouts/PageContainer'
import PageHeader from '@/components/shared/PageHeader'
import PageSection from '@/components/layouts/PageSection'
import React, { FC, useState } from 'react'
import Protocole from './Protocole'
import { InView } from 'react-intersection-observer'
import Acces from './Acces'

const InfosPratiqueScreen: FC = () => {
  const [sectionTwoInview, setSectionTwoInview] = useState<boolean>(false)
  const [sectionThreeInview, setSectionThreeInview] = useState<boolean>(false)

  const classP = "text-main-theme indent-5 tablet:indent-10 px-1.5 mobile:px-5 text-base mobile:text-lg laptop:text-xl desktop:text-2xl tracking-wider text-justify leading-8 mobile:leading-8 laptop:leading-10 desktop:leading-10"

  return (

    <>
      <PageHeader img='infos-hero.jpg' title='Infos pratiques'/>
      <PageContainer>
        <PageSection subtitle="Recommandations pour votre venue" delayBoolean={true} >
          <Protocole/>
        </PageSection>
        <PageSection subtitle='Premier rendez-vous' delayBoolean={false} subtitleInview={sectionTwoInview} >
          <InView onChange={(inView, entry)=> setSectionTwoInview(inView)} triggerOnce={true} />
          <p className={classP}>
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
