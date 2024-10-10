'use client'

import PageContainer from '@/components/layouts/PageContainer'
import PageSection from '@/components/layouts/PageSection'
import PageHeader from '@/components/shared/PageHeader'
import { classLiStandard, classPStandard } from '@/datas/classNames'
import React, { useState } from 'react'
import { InView } from 'react-intersection-observer'
import { MoveRight } from 'lucide-react'
import { Separator } from '@/components/ui/separator'

const ImplantologieScreen = () => {
  const [sectionTwoInview, setSectionTwoInview] = useState<boolean>(false)
  const [sectionThreeInview, setSectionThreeInview] = useState<boolean>(false)
  
  return (
    <>
      <PageHeader img='implantologie.jpg' title='Implantologie'/>
      <PageContainer>
        <PageSection subtitle="L'implantologie, c'est quoi ?" delayBoolean={true} >
          <p className={classPStandard}>
            L&apos;implantologie dentaire est la spé&shy;ciali&shy;té qui permet de rem&shy;pla&shy;cer les dents manq&shy;uantes de ma&shy;nière perma&shy;nente en uti&shy;lisant des ra&shy;cines arti&shy;ficiel&shy;les en titane, ap&shy;pelées implants den&shy;taires. Ces implants sont in&shy;sé&shy;rés di&shy;recte&shy;ment dans l&apos;os de la mâc&shy;hoire pour servir de support à des couronnes, des bridges ou des prothèses dentaires. Cette tech&shy;nique offre une so&shy;lution sta&shy;ble, du&shy;rable et esthé&shy;ti&shy;que pour les pa&shy;tients qui souhaitent retrouver un sourire naturel et une fonction mastica&shy;toire optimale.
          </p>
        </PageSection>
        <PageSection subtitle='Poser un implant en 3 étapes' delayBoolean={false} subtitleInview={sectionTwoInview} >
          <InView onChange={(inView, entry)=> setSectionTwoInview(inView)} triggerOnce={true} />
          <ol className='px-5 ml-5 list-decimal'>
            <li className={classLiStandard}>Consultation et évaluation personnalisée</li>
            <p className={classPStandard}>
              La première étape consiste en une consultation approfondie avec un spécialiste en implantologie pour évaluer la sant&shy;é buc&shy;co-dentaire du pa&shy;tient. Des exa&shy;mens ra&shy;dio&shy;gra&shy;phi&shy;ques, comme un scan&shy;ner ou une ra&shy;dio&shy;gra&shy;phie pano&shy;ra&shy;mi&shy;que, sont ré&shy;alisés pour ana&shy;lyser la qua&shy;lité et la quan&shy;tité d&apos;os dispo&shy;ni&shy;ble. Cet&shy;te éva&shy;luation permet de dé&shy;ter&shy;miner si l&apos;imp&shy;lant est la so&shy;lution ap&shy;pro&shy;priée et de pla&shy;nifier le trai&shy;te&shy;ment de ma&shy;nière per&shy;son&shy;nalisée.
            </p>
            <li className={classLiStandard + " mt-10"}>Pose de l&apos;im&shy;plant den&shy;taire</li>
            <p className={classPStandard}>
              Lors de la pose de l&apos;implant, une petite interven&shy;tion chi&shy;rur&shy;gi&shy;cale est ré&shy;ali&shy;sée <span className='font-bold'>sous anesthé&shy;sie lo&shy;ca&shy;le </span> pour in&shy;sé&shy;rer la ra&shy;cine arti&shy;ficiel&shy;le en titane dans l&apos;os de la mâ&shy;choire. Le pro&shy;ces&shy;sus de ci&shy;catri&shy;sa&shy;tion, ap&shy;pelé ostéo-inté&shy;gration, <span className='font-bold'>dure géné&shy;rale&shy;ment de 3 à 6 mois</span>, période durant laquelle l&apos;implant se fusionne naturellement avec l&apos;os.
            </p>
            <li className={classLiStandard + " mt-10"}>Installation de la couronne ou de la prothèse</li>
            <p className={classPStandard}>
              Une fois que l&apos;implant est so&shy;lide&shy;ment an&shy;cré dans l&apos;os, une cou&shy;ron&shy;ne, un pont ou une pro&shy;thèse den&shy;taire sur-mesure est fi&shy;xée sur l&apos;implant. Ce remplacement est conçu pour s&apos;intégrer parfaitement avec les autres dents, tant sur le plan esthétique que fonctionnel.
            </p>
          </ol>
        </PageSection>
        <PageSection subtitle="Les avantages des implants dentaires" delayBoolean={false} subtitleInview={sectionThreeInview} >
          <InView onChange={(inView, entry)=> setSectionThreeInview(inView)} triggerOnce={true} />
          <p className={classPStandard}>
            Les implants dentaires offrent plusieurs avantages significatifs par rapport aux autres solutions de remplacement des dents.
          </p>
          <ul className='px-5 ml-5 mb-12'>
            <li className={classLiStandard + " flex items-center gap-x-2 mt-10"}>
              <MoveRight className='translate-y-1' size={20}/> Stabilité et durabilité : 
            </li>
            <p className="px-1.5 mobile:px-5 text-base mobile:text-lg laptop:text-xl desktop:text-2xl tracking-wider text-justify leading-8 mobile:leading-8 laptop:leading-10 desktop:leading-10 text-main-theme">
              Les implants sont une solution fixe et durable qui peut durer de nombreuses années, voire toute la vie avec un entretien approprié.
            </p>
            <li className={classLiStandard + " flex items-center gap-x-2 mt-10"}>
              <MoveRight className='translate-y-1' size={20}/> Confort et fonction naturelle : 
            </li>
            <p className="px-1.5 mobile:px-5 text-base mobile:text-lg laptop:text-xl desktop:text-2xl tracking-wider text-justify leading-8 mobile:leading-8 laptop:leading-10 desktop:leading-10 text-main-theme">
              Ils fonctionnent comme une dent naturelle, ce qui permet de manger, parler et sourire sans gêne.
            </p>
            <li className={classLiStandard + " flex items-center gap-x-2 mt-10"}>
              <MoveRight className='translate-y-1' size={20}/> Préservation de l&apos;os : 
            </li>
            <p className="px-1.5 mobile:px-5 text-base mobile:text-lg laptop:text-xl desktop:text-2xl tracking-wider text-justify leading-8 mobile:leading-8 laptop:leading-10 desktop:leading-10 text-main-theme">
              Les implants stimulent l&apos;os de la mâchoire, prévenant ainsi la perte osseuse souvent associée aux dents manquantes.
            </p>
            <li className={classLiStandard + " flex items-center gap-x-2 mt-10"}>
              <MoveRight className='translate-y-1' size={20}/> Esthétique améliorée :
            </li>
            <p className="px-1.5 mobile:px-5 text-base mobile:text-lg laptop:text-xl desktop:text-2xl tracking-wider text-justify leading-8 mobile:leading-8 laptop:leading-10 desktop:leading-10 text-main-theme">
              Les couronnes et prothèses fixées sur les im&shy;plants sont con&shy;çues pour s&apos;in&shy;té&shy;grer har&shy;mo&shy;nieuse&shy;ment avec les dents na&shy;tu&shy;rel&shy;les, amé&shy;liorant ainsi l&apos;ap&shy;pa&shy;rence du sourire.
            </p>
          </ul>
          <Separator className='mx-auto w-[90%] mb-10'/>
          <p className={classPStandard}>
            Nous mettons notre expertise en implantologie au servi&shy;ce de votre san&shy;té bucco-den&shy;taire et de vo&shy;tre con&shy;fort. <span className='font-bold'>Nous utilisons des techno&shy;lo&shy;gies de pointe et des ma&shy;tériaux de hau&shy;te qua&shy;li&shy;té</span> pour ga&shy;ran&shy;tir des résul&shy;tats opti&shy;maux et une sé&shy;curi&shy;té maxima&shy;le tout au long de vo&shy;tre trai&shy;te&shy;ment. 
          </p>
          <p className={classPStandard}>
            Notre approche personnalisée nous permet de répondre aux besoins spé&shy;ci&shy;fi&shy;ques de cha&shy;que pa&shy;tient, en pre&shy;nant en compte à la fois les aspects fonction&shy;nels et esthé&shy;ti&shy;ques de la so&shy;lu&shy;tion implantaire.
          </p>
        </PageSection>
      </PageContainer>
    </>
  )
}

export default ImplantologieScreen
