"use client"

import React, { FC, ReactNode } from 'react'
import PageSubtitle from '../shared/PageSubtitle'
import PageSubContainer from './PageSubContainer'

type PageSectionProps = {
  children: ReactNode
  subtitle?: string
  subtitleInview?: boolean
  delayBoolean ?:boolean
}

const PageSection: FC<PageSectionProps> = ({children, subtitle, subtitleInview=true, delayBoolean}) => {
  return (
    <section className='w-full h-full py-16 flex flex-col laptop:flex-row'>
      <PageSubtitle subtitle={subtitle} delay={delayBoolean? 1.25:0} animate={subtitleInview ? "animate":""} />
      <PageSubContainer delay={delayBoolean? 1.25+0.2 : 0} animate={subtitleInview ? "animate":""} >
        {children}
      </PageSubContainer>
    </section>
  )
}

export default PageSection
