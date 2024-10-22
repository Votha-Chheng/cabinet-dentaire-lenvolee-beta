'use client'

import PageContainer from '@/components/layouts/PageContainer'
import PageSection from '@/components/layouts/PageSection'
import PageHeader from '@/components/shared/PageHeader'
import { classLiStandard, classPLi, classPStandard, classUl, legendClass } from '@/datas/classNames'
import React, { useState } from 'react'
import { InView } from 'react-intersection-observer'
import { MoveRight } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import Image from 'next/image'
import { tauri } from '@/fonts/tauri'
import ContactButton from '@/components/shared/ContactButton'

const ImplantologieScreen = () => {
  const [sectionTwoInview, setSectionTwoInview] = useState<boolean>(false)
  const [sectionThreeInview, setSectionThreeInview] = useState<boolean>(false)
  
  return (
    <>
      <PageHeader img='implantologie.jpg' title='Implantologie'/>
      <PageContainer>
        <PageSection subtitle="L'implantologie, c'est quoi ?" delayBoolean={true} >
          <p className={classPStandard + " list-decimal"}>
            L&apos;implantologie est la solution idé&shy;ale pour rem&shy;pla&shy;cer des dents man&shy;quan&shy;tes de fa&shy;çon du&shy;ra&shy;ble et na&shy;tu&shy;rel&shy;le en <span className='font-bold'>po&shy;sant des ra&shy;cines ar&shy;ti&shy;ficiel&shy;les en ti&shy;ta&shy;ne, ap&shy;pe&shy;lées implants den&shy;taires</span>. Ces im&shy;plants offrent ain&shy;si une ba&shy;se so&shy;li&shy;de pour des cou&shy;ron&shy;nes, des ponts ou des pro&shy;thèses den&shy;taires.
          </p>
          <p className={classPStandard}>
            Au cabinet dentaire <span className='font-bold italic'>L&apos;Envolée</span>, à Montpel&shy;lier et Castel&shy;nau-le-Lez, nous som&shy;mes spé&shy;cia&shy;li&shy;sés dans la po&shy;se d&apos;im&shy;plants den&shy;tai&shy;res, une pro&shy;cé&shy;du&shy;re <span className='font-bold'>qui per&shy;met de restau&shy;rer à la fois la fonc&shy;tion et l’esthé&shy;ti&shy;que de vo&shy;tre sou&shy;rire</span>.
          </p>
        </PageSection>
        <PageSection subtitle='Poser un implant en 3 étapes' delayBoolean={false} subtitleInview={sectionTwoInview} >
          <InView onChange={(inView, entry)=> setSectionTwoInview(inView)} triggerOnce={true} />
          <ol className="w-full pl-8 pr-5 mt-5 mobile:pl-14 mobile:pr-10 text-justify list-decimal">
            <li className={classLiStandard + " font-bold mb-2"}>Étude et plani&shy;fi&shy;ca&shy;tion per&shy;son&shy;na&shy;li&shy;sée</li>
            <p className={classPLi}>
              Chaque traitement commence par une étude approfondie de votre cas, avec des exa&shy;mens ra&shy;dio&shy;gra&shy;phi&shy;ques et un plan de trai&shy;te&shy;ment sur me&shy;su&shy;re.
            </p>
            <li className={classLiStandard + " font-bold mt-10 mb-2"}>Pose de l&apos;im&shy;plant den&shy;taire</li>
            <p className={classPLi}>
              La pose de l&apos;implant est réalisée dans des condi&shy;tions op&shy;tima&shy;les pour as&shy;su&shy;rer une inté&shy;gra&shy;tion os&shy;seu&shy;se par&shy;fai&shy;te. L&apos;inter&shy;ven&shy;tion est in&shy;té&shy;grée dans un système de chi&shy;rur&shy;gie gui&shy;dée per&shy;met&shy;tant de di&shy;mi&shy;nuer con&shy;sidéra&shy;ble&shy;ment les er&shy;reurs pos&shy;si&shy;ble du&shy;rant cette opé&shy;ration.
            </p>
            <li className={classLiStandard + " font-bold mt-10 mb-2"}>Suivi post-opé&shy;ratoi&shy;re et en&shy;tre&shy;tien</li>
            <p className={classPLi}>
              Nous assurons un suivi ri&shy;gou&shy;reux pour ga&shy;ran&shy;tir la ré&shy;us&shy;si&shy;te de vo&shy;tre trai&shy;te&shy;ment et la lon&shy;gé&shy;vi&shy;té de vos im&shy;plants.
            </p>
          </ol>
          <Separator className='my-10'/>
          <p className={classPStandard}>
            Nos solutions d&apos;implanto&shy;lo&shy;gie à Mont&shy;pel&shy;lier et Castel&shy;nau-le-Lez of&shy;frent un con&shy;fort op&shy;ti&shy;mal et un ré&shy;sul&shy;tat na&shy;tu&shy;rel, vous per&shy;met&shy;tant de re&shy;trou&shy;ver une masti&shy;ca&shy;tion nor&shy;ma&shy;le et un sou&shy;ri&shy;re esthé&shy;ti&shy;que. <span className='font-bold'>Nous uti&shy;li&shy;sons des techno&shy;lo&shy;gies de poin&shy;te pour ga&shy;ran&shy;tir le suc&shy;cès de cha&shy;que im&shy;plan&shy;ta&shy;tion.</span> 
          </p>
          <p className={classPStandard}>
            Au cabinet, nous avons choisi de poser des im&shy;plants de la marque <span className='font-bold italic'>Anthogyr</span>&#174;, une marque fran&shy;çaise dont l’histoire com&shy;men&shy;ce dans la val&shy;lée du Mont-Blanc et ga&shy;ran&shy;tit une qua&shy;li&shy;té op&shy;tima&shy;le et un sui&shy;vi ri&shy;gou&shy;reux de nos im&shy;plants. 
          </p>
          <div className='my-10 flex gap-5 flex-wrap'>
            <Image src="/images/anthogyr.jpg" alt="Logo de la marque Anthogyr" width={700} height={400} className='border-main-theme border-2 mx-auto' />
            <div className='mx-auto'>
              <Image src="/images/implants-anthogyr.jpg" alt="Logo de la marque Anthogyr" width={700} height={400} className='border-main-theme border-2 mx-auto' />
              <legend className={`${tauri.className} ${legendClass}`}><i>Exemple d&apos;implants Anthogyr&#174; utilisés - <br/>Crédits photo : DR</i></legend>
            </div>
          </div>
          <p className={classPStandard}>
            Pour en savoir plus sur les avantages des implants den&shy;taires et discu&shy;ter de vo&shy;tre plan de trai&shy;tement per&shy;son&shy;nal&shy;isé, prenez rendez-vous avec notre équi&shy;pe d’ex&shy;perts en im&shy;plan&shy;to&shy;lo&shy;gie.
          </p>
          <ContactButton/>
        </PageSection>
      </PageContainer>
    </>
  )
}

export default ImplantologieScreen
