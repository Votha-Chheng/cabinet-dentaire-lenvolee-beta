'use client'

import PageContainer from '@/components/layouts/PageContainer'
import PageHeader from '@/components/shared/PageHeader'
import React, { FC, useState } from 'react'
import Dentisterie from './Dentisterie'
import Green from './Green'
import PageSection from '@/components/layouts/PageSection'
import { InView } from 'react-intersection-observer'
import { ModalContextProvider } from '@/context/modalContext'
import ImageModal from '@/components/shared/ImageModal'

const EthiqueScreen: FC = () => {
  const [sectionTwoInview, setSectionTwoInview] = useState<boolean>(false)

  return (
    <ModalContextProvider>
      <ImageModal />
      <PageHeader img='soins-hero-2.jpg' title='Notre éthique'/>
      <PageContainer>
        <PageSection subtitle='Une dentisterie contemporaine' delayBoolean={true} >
          <Dentisterie/>
        </PageSection>
        <PageSection subtitle='Pour une dentisterie &#171;verte&#187;' delayBoolean={false} subtitleInview={sectionTwoInview} >
          <InView onChange={(inView, entry)=> setSectionTwoInview(inView)} triggerOnce={true} />
          <Green/>
        </PageSection>
      </PageContainer>
    </ModalContextProvider>
  )
}

export default EthiqueScreen
