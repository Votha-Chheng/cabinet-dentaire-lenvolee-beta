'use client'

import PageContainer from '@/components/layouts/PageContainer'
import PageSection from '@/components/layouts/PageSection'
import ContactButton from '@/components/shared/ContactButton'
import PageHeader from '@/components/shared/PageHeader'
import { classPStandard, legendClass } from '@/datas/classNames'
import { tauri } from '@/fonts/tauri'
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
            L&apos;endodontie, souvent appelée «<span className='font-bold'>traite&shy;ment de canal</span>» ou «<span className='font-bold'>dévitalisation</span>», est une spé&shy;ciali&shy;té dentaire dédiée à la pré&shy;ven&shy;tion, au diag&shy;nostic et au trai&shy;te&shy;ment des mala&shy;dies de la pul&shy;pe den&shy;tai&shy;re et des tis&shy;sus en&shy;viron&shy;nants. Cet&shy;te inter&shy;ven&shy;tion est es&shy;sentiel&shy;le pour trai&shy;ter des dents gra&shy;ve&shy;ment en&shy;dom&shy;ma&shy;gées ou infectées, per&shy;met&shy;tant ain&shy;si de pré&shy;server votre sou&shy;rire et votre santé bucco-dentaire.
          </p>
        </PageSection>

        <PageSection subtitle='Pourquoi une dévitalisation ?' subtitleInview={sectionTwoInview} >
          <InView onChange={(inView, entry)=> setSectionTwoInview(inView)} triggerOnce={true} />
          <div className='mb-10'>
            <Image src="/images/endo-image-1.jpg" alt="Molaire en cours de traitement" width={500} height={400} className='border-main-theme border-2 mx-auto' />
            <legend className={`${tauri.className} text-center text-xs text-main-theme mt-1.5`}><i>Molaire en cours de traitement</i></legend>
          </div>
          <p className={classPStandard}>
            La pulpe dentaire, qui se trouve à l&apos;in&shy;té&shy;rieur de la dent, peut être af&shy;fec&shy;tée par diverses con&shy;di&shy;tions, tel&shy;les que des ca&shy;ries pro&shy;fon&shy;des, des trau&shy;ma&shy;tismes ou des infec&shy;tions. 
          </p>
          <p className={classPStandard}>
            Une atteinte pulpaire peut entraîner des <span className='font-bold'>douleurs intenses, des gon&shy;fle&shy;ments et, si elle n&apos;est pas trai&shy;tée, des compli&shy;ca&shy;tions plus gra&shy;ves</span>. Ces at&shy;tein&shy;tes ne sont pas tou&shy;jours dou&shy;lou&shy;reuses et peu&shy;vent être dé&shy;couver&shy;tes de manière for&shy;tuite lors d&apos;exa&shy;men de rou&shy;tine.
          </p>
        </PageSection>

        <PageSection subtitle='Retraitement Endodontique' subtitleInview={sectionThreeInview} >
          <InView onChange={(inView, entry)=> setSectionThreeInview(inView)} triggerOnce={true} />
          <p className={classPStandard}>
            Le retraitement endodontique est une pro&shy;cé&shy;dure con&shy;çue pour trai&shy;ter les dents ayant dé&shy;jà subi un trai&shy;tement de canal, <span className='font-bold'>mais qui présen&shy;tent à nouveau des signes d&apos;infection ou de complica&shy;tions</span>. Cet&shy;te inter&shy;ven&shy;tion permet de sau&shy;ver des dents qui, sans soin approprié, pour&shy;raient né&shy;ces&shy;siter une ex&shy;trac&shy;tion.
          </p>
          <p className={classPStandard}>
            Malheureusement, <span className='font-bold'>il arrive qu&apos;un trai&shy;te&shy;ment de canal ne soit pas com&shy;plète&shy;ment efficace</span>. Nous pou&shy;vons met&shy;tre en cause plu&shy;sieurs rai&shy;sons&nbsp;: <span className='font-bold'></span>anato&shy;mie den&shy;taire com&shy;plexe, insuf&shy;fisan&shy;ce de la désinfec&shy;tion ini&shy;tiale, obtu&shy;ra&shy;tion des ca&shy;naux in&shy;complète ou en&shy;core dû à la dé&shy;fail&shy;lance d&apos;une restau&shy;ration dentaire co&shy;ro&shy;naire.
          </p>
        </PageSection>

        <PageSection subtitle='Nos engagements' subtitleInview={sectionFourInview} >
          <InView onChange={(inView, entry)=> setSectionFourInview(inView)} triggerOnce={true} />
            <div className='mb-10'>
              <Image src="/images/cabinet-lupi-4.jpg" alt="microscope opératoire pour l'endodontie" width={400} height={300} className='border-main-theme border-2 mx-auto p-1' />
              <legend className={`${tauri.className} ${legendClass}`}><i>Microscope opératoire</i></legend>
            </div>
            <p className={classPStandard}>
              Au sein du cabinet dentaire <span className='font-bold italic'>L&apos;Envolée</span> à Mont&shy;pel&shy;lier, nous uti&shy;li&shy;sons <span className='font-bold'>des tech&shy;ni&shy;ques mo&shy;der&shy;nes</span> et <span className='font-bold'>des équipements de poin&shy;te</span> tel qu&apos;un microscope opé&shy;ra&shy;toire ou en&shy;co&shy;re l&apos;utilisation <span className='font-bold'>de ma&shy;té&shy;riel à usa&shy;ge uni&shy;que sté&shy;ri&shy;le</span>, pour as&shy;surer un trai&shy;te&shy;ment ef&shy;fi&shy;cace et con&shy;for&shy;table. 
            </p>
            <p className={classPStandard}>
              Notre équipe est dédiée à vous four&shy;nir des soins per&shy;son&shy;na&shy;li&shy;sés et à ré&shy;pon&shy;dre à tou&shy;tes vos questions con&shy;cer&shy;nant le trai&shy;te&shy;ment.
            </p>
            <ContactButton/>
        </PageSection>
      </PageContainer>
    </>
  )
}

export default EndodontieScreen
