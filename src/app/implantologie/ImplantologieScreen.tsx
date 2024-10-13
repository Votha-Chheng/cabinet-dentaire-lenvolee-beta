'use client'

import PageContainer from '@/components/layouts/PageContainer'
import PageSection from '@/components/layouts/PageSection'
import PageHeader from '@/components/shared/PageHeader'
import { classLiStandard, classPLi, classPStandard } from '@/datas/classNames'
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
          <p className={classPStandard}>
            L&apos;implantologie est la solution idé&shy;ale pour rem&shy;pla&shy;cer des dents man&shy;quan&shy;tes de fa&shy;çon du&shy;ra&shy;ble et na&shy;tu&shy;rel&shy;le en <span className='font-bold'>po&shy;sant des ra&shy;cines ar&shy;ti&shy;ficiel&shy;les en ti&shy;ta&shy;ne, ap&shy;pe&shy;lées implants den&shy;taires</span>. Ces im&shy;plants offrent ain&shy;si une ba&shy;se so&shy;li&shy;de pour des cou&shy;ron&shy;nes, des ponts ou des pro&shy;thèses den&shy;taires.
          </p>
          <p className={classPStandard}>
            Au cabinet dentaire <span className='font-bold italic'>L&apos;Envolée</span>, à Montpel&shy;lier et Castelnau-le-Lez, nous som&shy;mes spé&shy;cia&shy;li&shy;sés dans la po&shy;se d&apos;im&shy;plants den&shy;taires, une pro&shy;cé&shy;du&shy;re <span className='font-bold'>qui per&shy;met de restau&shy;rer à la fois la fonc&shy;tion et l’esthé&shy;tique de vo&shy;tre sou&shy;rire</span>.
          </p>
        </PageSection>
        <PageSection subtitle='Poser un implant en 3 étapes' delayBoolean={false} subtitleInview={sectionTwoInview} >
          <InView onChange={(inView, entry)=> setSectionTwoInview(inView)} triggerOnce={true} />
          <ol className='px-2.5 ml-5 list-decimal'>
            <li className={classLiStandard + " font-bold mb-2"}>Étude et planification personnalisée</li>
            <p className={classPLi}>
              Chaque traitement commence par une étude approfondie de votre cas, avec des examens radiographiques et un plan de traitement sur mesure.
            </p>
            <li className={classLiStandard + " font-bold mt-10 mb-2"}>Pose de l&apos;im&shy;plant den&shy;taire</li>
            <p className={classPLi}>
              La pose de l&apos;implant est réalisée dans des condi&shy;tions op&shy;tima&shy;les pour as&shy;su&shy;rer une inté&shy;gra&shy;tion os&shy;seu&shy;se par&shy;fai&shy;te. L&apos;inter&shy;ven&shy;tion est in&shy;té&shy;grée dans un système de chi&shy;rur&shy;gie gui&shy;dée per&shy;met&shy;tant de di&shy;mi&shy;nuer con&shy;sidéra&shy;ble&shy;ment les er&shy;reurs pos&shy;si&shy;ble du&shy;rant cette opé&shy;ration.
            </p>
            <li className={classLiStandard + " font-bold mt-10 mb-2"}>Suivi post-opératoire et entretien</li>
            <p className={classPLi}>
              Nous assurons un suivi rigoureux pour ga&shy;ran&shy;tir la réus&shy;si&shy;te de vo&shy;tre trai&shy;te&shy;ment et la lon&shy;gé&shy;vité de vos implants.
            </p>
          </ol>
          <Separator className='my-10'/>
          <p className={classPStandard}>
            Nos solutions d&apos;implanto&shy;lo&shy;gie à Mont&shy;pel&shy;lier et Castel&shy;nau-le-Lez of&shy;frent un con&shy;fort op&shy;ti&shy;mal et un ré&shy;sul&shy;tat na&shy;tu&shy;rel, vous per&shy;met&shy;tant de re&shy;trou&shy;ver une masti&shy;ca&shy;tion nor&shy;ma&shy;le et un sou&shy;ri&shy;re esthé&shy;ti&shy;que. <span className='font-bold'>Nous uti&shy;li&shy;sons des techno&shy;lo&shy;gies de poin&shy;te pour ga&shy;ran&shy;tir le suc&shy;cès de cha&shy;que im&shy;plan&shy;ta&shy;tion.</span> 
          </p>
          <p className={classPStandard}>
            Au cabinet, nous avons choisi de poser des im&shy;plants de la marque <span className='font-bold italic'>Anthogyr</span>&#174;, une marque fran&shy;çaise dont l’histoire com&shy;men&shy;ce dans la val&shy;lée du Mont-Blanc et ga&shy;ran&shy;tit une qua&shy;li&shy;té optima&shy;le et un sui&shy;vi ri&shy;gou&shy;reux de nos im&shy;plants. 
          </p>
          <div className='my-10 flex gap-5 flex-wrap'>
            <Image src="/images/anthogyr.jpg" alt="Logo de la marque Anthogyr" width={700} height={400} className='border-main-theme border-2 mx-auto' />
            <div className='mx-auto'>
              <Image src="/images/implants-anthogyr.jpg" alt="Logo de la marque Anthogyr" width={700} height={400} className='border-main-theme border-2 mx-auto' />
              <legend className={`${tauri.className} italic text-center text-xs text-main-theme mt-1.5`}><i>Exemple d&apos;implants Anthogyr&#174; utilisés - <br/>Crédits photo : DR</i></legend>
            </div>
          </div>
          <p className={classPStandard}>
            Pour en savoir plus sur les avantages des implants dentaires et discuter de votre plan de traitement personnalisé, prenez rendez-vous avec notre équipe d’experts en implantologie.
          </p>
          <ContactButton/>
        </PageSection>
        {/* <PageSection subtitle="L'implantologie, c'est quoi ?" delayBoolean={true} >
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
          <ul className={classUl}>
            <li className={classLiStandard + " flex items-center gap-x-2 mt-10"}>
              <MoveRight className='translate-y-1' size={20}/> Stabilité et durabilité : 
            </li>
            <p className={classPInList}>
              Les implants sont une solution fixe et durable qui peut durer de nombreuses années, voire toute la vie avec un entretien approprié.
            </p>
            <li className={classLiStandard + " flex items-center gap-x-2 mt-10"}>
              <MoveRight className='translate-y-1' size={20}/> Confort et fonction naturelle : 
            </li>
            <p className={classPInList}>
              Ils fonctionnent comme une dent naturelle, ce qui permet de manger, parler et sourire sans gêne.
            </p>
            <li className={classLiStandard + " flex items-center gap-x-2 mt-10"}>
              <MoveRight className='translate-y-1' size={20}/> Préservation de l&apos;os : 
            </li>
            <p className={classPInList}>
              Les implants stimulent l&apos;os de la mâchoire, prévenant ainsi la perte osseuse souvent associée aux dents manquantes.
            </p>
            <li className={classLiStandard + " flex items-center gap-x-2 mt-10"}>
              <MoveRight className='translate-y-1' size={20}/> Esthétique améliorée :
            </li>
            <p className={classPInList}>
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
        </PageSection> */}
      </PageContainer>
    </>
  )
}

export default ImplantologieScreen
