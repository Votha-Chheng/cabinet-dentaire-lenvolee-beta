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
            <Image src="/images/endo-image-1.jpg" alt="Molaire en cours de traitement" width={500} height={400} className='border-main-theme border-2 mx-auto' />
            <legend className={`${tauri.className} text-center text-xs text-main-theme mt-1.5`}><i>Molaire en cours de traitement</i></legend>
          </div>
          <p className={classPStandard}>
            La pulpe dentaire, qui se trouve à l&apos;intérieur de la dent, peut être affectée par diverses conditions, tel&shy;les que des ca&shy;ries pro&shy;fondes, des trau&shy;ma&shy;tismes ou des infec&shy;tions. 
          </p>
          <p className={classPStandard}>
            Une atteinte pulpaire peut entraîner des <span className='font-bold'>douleurs intenses, des gon&shy;fle&shy;ments et, si elle n&apos;est pas trai&shy;tée, des compli&shy;ca&shy;tions plus gra&shy;ves</span>. Ces at&shy;tein&shy;tes ne sont pas tou&shy;jours dou&shy;lou&shy;reuses et peu&shy;vent être dé&shy;couver&shy;tes de manière for&shy;tuite lors d&apos;exa&shy;men de rou&shy;tine.
          </p>
        </PageSection>

        <PageSection subtitle='Retraitement Endodontique' delayBoolean={false} subtitleInview={sectionThreeInview} >
          <InView onChange={(inView, entry)=> setSectionThreeInview(inView)} triggerOnce={true} />
          <p className={classPStandard}>
            Le retraitement endodontique est une procédure con&shy;çue pour trai&shy;ter les dents ayant dé&shy;jà subi un trai&shy;tement de canal, <span className='font-bold'>mais qui présen&shy;tent à nouveau des signes d&apos;infection ou de complica&shy;tions</span>. Cet&shy;te inter&shy;ven&shy;tion permet de sau&shy;ver des dents qui, sans soin approprié, pour&shy;raient né&shy;ces&shy;siter une ex&shy;trac&shy;tion.
          </p>
          <p className={classPStandard}>
            Malheureusement, <span className='font-bold'>il arrive qu&apos;un traitement de canal ne soit pas complètement efficace</span>. Nous pou&shy;vons mettre en cause plu&shy;sieurs rai&shy;sons&nbsp;: <span className='font-bold'></span>anato&shy;mie den&shy;taire com&shy;plexe, insuf&shy;fisan&shy;ce de la désinfec&shy;tion ini&shy;tiale, obtu&shy;ra&shy;tion des canaux in&shy;complète ou en&shy;core dû à la dé&shy;fail&shy;lance d&apos;une restauration dentaire co&shy;ro&shy;naire.
          </p>
        </PageSection>

        <PageSection subtitle='Nos engagements' delayBoolean={false} subtitleInview={sectionThreeInview} >
          <InView onChange={(inView, entry)=> setSectionThreeInview(inView)} triggerOnce={true} />
            <div className='mb-10'>
              <Image src="/images/cabinet-lupi-4.jpg" alt="microscope opératoire pour l'endodontie" width={400} height={300} className='border-main-theme border-2 mx-auto p-1' />
              <legend className={`${tauri.className} text-center text-xs text-main-theme mt-1.5`}><i>Microscope opératoire</i></legend>
            </div>
            <p className={classPStandard}>
              Au sein du cabinet dentaire <span className='font-bold italic'>L&apos;Envolée</span> à Mont&shy;pel&shy;lier, nous uti&shy;li&shy;sons <span className='font-bold'>des techniques modernes</span> et <span className='font-bold'>des équipements de pointe</span> tel qu&apos;un microscope opératoire ou encore l&apos;utilisation <span className='font-bold'>de ma&shy;té&shy;riel à usa&shy;ge uni&shy;que sté&shy;ri&shy;le</span>, pour as&shy;surer un trai&shy;te&shy;ment ef&shy;fi&shy;cace et con&shy;for&shy;table. 
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
