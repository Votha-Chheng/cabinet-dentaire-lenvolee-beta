"use client"

import PageContainer from '@/components/layouts/PageContainer'
import PageHeader from '@/components/shared/PageHeader'
import PageSection from '@/components/layouts/PageSection'
import React, { FC, useState } from 'react'
import { InView } from 'react-intersection-observer'
import Hygiene from './Hygiene'
import Conseils from './Conseils'

const PreventionScreen: FC = () => {
  const [sectionTwoInview, setSectionTwoInview] = useState<boolean>(false)
  
  return (
    <>
      <PageHeader img='prevention-2.jpg' title='Prévention dentaire'/>
      <PageContainer>
        <PageSection subtitle='Le coin hygiène' delayBoolean={true} >
          <Hygiene/>
        </PageSection>
        <PageSection subtitle='Quelques conseils' delayBoolean={false} subtitleInview={sectionTwoInview} >
          <InView onChange={(inView, entry)=> setSectionTwoInview(inView)} triggerOnce={true} />
          <Conseils/>
        </PageSection>
      </PageContainer>
    </>
  )
}

export default PreventionScreen
