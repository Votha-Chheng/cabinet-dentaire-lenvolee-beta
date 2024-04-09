"use client"

import PageContainer from '@/components/layouts/PageContainer'
import PageHeader from '@/components/shared/PageHeader'
import PageSection from '@/components/layouts/PageSection'
import React, { FC, useState } from 'react'
import Garde from './Garde'
import { InView } from 'react-intersection-observer'
import Saignement from './Saignement'
import Traumatisme from './Traumatisme'

const UrgencesScreen: FC = () => {
  const [sectionTwoInview, setSectionTwoInview] = useState<boolean>(false)
  const [sectionThreeInview, setSectionThreeInview] = useState<boolean>(false)
  return (
    <>
      <PageHeader img='soins-hero.jpg' title='Urgences'/>
      <PageContainer>
        <PageSection subtitle='Service de garde' delayBoolean={true} >
          <Garde/>
        </PageSection>
        <PageSection subtitle='En cas de saignement après une intervention' delayBoolean={false} subtitleInview={sectionTwoInview} >
          <InView onChange={(inView, entry)=> setSectionTwoInview(inView)} triggerOnce={true} />
          <Saignement/>
        </PageSection>
        <PageSection subtitle='En cas de traumatisme dentaire suite à une chute ou un choc' delayBoolean={false} subtitleInview={sectionThreeInview} >
          <InView onChange={(inView, entry)=> setSectionThreeInview(inView)} triggerOnce={true} />
          <Traumatisme/>
        </PageSection>
      </PageContainer>
    </>
  )
}

export default UrgencesScreen
