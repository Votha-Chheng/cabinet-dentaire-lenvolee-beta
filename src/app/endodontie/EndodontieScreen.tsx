'use client'

import PageContainer from '@/components/layouts/PageContainer'
import PageSection from '@/components/layouts/PageSection'
import PageHeader from '@/components/shared/PageHeader'
import { classPStandard } from '@/datas/classNames'
import { tauri } from '@/fonts/tauri'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React, { useState } from 'react'
import { InView } from 'react-intersection-observer'

const EndodontieScreen = () => {
  const [sectionTwoInview, setSectionTwoInview] = useState<boolean>(false)
  const [sectionThreeInview, setSectionThreeInview] = useState<boolean>(false)
  const [sectionFourInview, setSectionFourInview] = useState<boolean>(false)

  return (
    <>
      <PageHeader img='endodontie.jpg' title='Endodontie'/>
      <PageContainer>
        <PageSection subtitle="L'endodontie, c'est quoi ?" delayBoolean={true} >
          <p className={classPStandard}>
            L&apos;endodontie, souvent appelée «<span className='font-bold'>traitement de canal</span>» ou «<span className='font-bold'>dévitalisation</span>», est une spécialité dentaire dédiée à la prévention, au diagnostic et au traitement des maladies de la pulpe dentaire et des tissus environnants. Cette intervention est essentielle pour traiter des dents gravement endommagées ou infectées, permettant ainsi de préserver votre sourire et votre santé bucco-dentaire.
          </p>
        </PageSection>

        <PageSection subtitle='Pourquoi une dévitalisation ?' delayBoolean={false} subtitleInview={sectionTwoInview} >
          <InView onChange={(inView, entry)=> setSectionTwoInview(inView)} triggerOnce={true} />
          <div className='mb-10'>
            <Image src="/images/endo-image-1.jpg" alt="Trou dans une molaire" width={500} height={400} className='border-main-theme border-2 mx-auto' />
            <legend className={`${tauri.className} text-center text-xs text-main-theme mt-1.5`}>Légende</legend>
          </div>
          <p className={classPStandard}>
            La pulpe dentaire, qui se trouve à l&apos;intérieur de la dent, peut être affectée par diverses conditions, telles que des caries profondes, des traumatismes ou des infections. 
          </p>
          <p className={classPStandard}>
            Une atteinte pulpaire peut entraîner des <span className='font-bold'>douleurs intenses, des gonflements et, si elle n&apos;est pas traitée, des complications plus graves</span>. Ces atteintes ne sont pas toujours douloureuses et peuvent être découvertes de manière fortuite lors d&apos;examen de routine.
          </p>
        </PageSection>

        <PageSection subtitle='Retraitement Endodontique' delayBoolean={false} subtitleInview={sectionThreeInview} >
          <InView onChange={(inView, entry)=> setSectionThreeInview(inView)} triggerOnce={true} />
          <p className={classPStandard}>
            Le retraitement endodontique est une procédure conçue pour traiter les dents ayant déjà subi un traitement de canal, <span className='font-bold'>mais qui présentent à nouveau des signes d&apos;infection ou de complications</span>. Cette intervention permet de sauver des dents qui, sans soin approprié, pourraient nécessiter une extraction.
          </p>
          <p className={classPStandard}>
            Malheureusement, <span className='font-bold'>il arrive qu&apos;un traitement de canal ne soit pas complètement efficace</span>. Nous pouvons mettre en cause plusieurs raisons&nbsp;: <span className='font-bold'></span>anatomie dentaire complexe, insuffisance de la désinfection initiale, obturation des canaux incomplète ou encore dû à la défaillance d&apos;une restauration dentaire coronaire.
          </p>
        </PageSection>

        <PageSection subtitle='Nos engagements' delayBoolean={false} subtitleInview={sectionThreeInview} >
          <InView onChange={(inView, entry)=> setSectionThreeInview(inView)} triggerOnce={true} />
            <div className='mb-10'>
              <Image src="/images/cabinet-lupi-4.jpg" alt="Intervention d'endodontie" width={400} height={300} className='border-main-theme border-2 mx-auto' />
              <legend className={`${tauri.className} text-center text-xs text-main-theme mt-1.5`}>Légende</legend>
            </div>
            <p className={classPStandard}>
              Au sein du cabinet dentaire <span className='font-bold italic'>L&apos;Envolée</span> à Montpellier, nous utilisons <span className='font-bold'>des techniques modernes</span> et <span className='font-bold'>des équipements de pointe</span> tel qu&apos;un microscope opératoire ou encore l&apos;utilisation <span className='font-bold'>de matériel à usage unique stérile</span>, pour assurer un traitement efficace et confortable. 
            </p>
            <p className={classPStandard}>
              Notre équipe est dédiée à vous fournir des soins personnalisés et à répondre à toutes vos questions concernant le traitement.
            </p>
        </PageSection>
      </PageContainer>
    </>
  )
}

export default EndodontieScreen
