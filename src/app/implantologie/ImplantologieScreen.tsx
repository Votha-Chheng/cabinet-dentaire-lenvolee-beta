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
            L'implantologie dentaire est la spécialité qui permet de remplacer les dents manquantes de manière permanente en utilisant des racines artificielles en titane, appelées implants dentaires. Ces implants sont insérés directement dans l'os de la mâchoire pour servir de support à des couronnes, des bridges ou des prothèses dentaires. Cette technique offre une solution stable, durable et esthétique pour les patients qui souhaitent retrouver un sourire naturel et une fonction masticatoire optimale.
          </p>
        </PageSection>
        <PageSection subtitle='Poser un implant en 3 étapes' delayBoolean={false} subtitleInview={sectionTwoInview} >
          <InView onChange={(inView, entry)=> setSectionTwoInview(inView)} triggerOnce={true} />
          <ol className='px-5 ml-5 list-decimal'>
            <li className={classLiStandard}>Consultation et évaluation personnalisée</li>
            <p className={classPStandard}>
              La première étape consiste en une consultation approfondie avec un spécialiste en implantologie pour évaluer la santé bucco-dentaire du patient. Des examens radiographiques, comme un scanner ou une radiographie panoramique, sont réalisés pour analyser la qualité et la quantité d'os disponible. Cette évaluation permet de déterminer si l'implant est la solution appropriée et de planifier le traitement de manière personnalisée.
            </p>
            <li className={classLiStandard + " mt-10"}>Pose de l'implant dentaire</li>
            <p className={classPStandard}>
              Lors de la pose de l'implant, une petite intervention chirurgicale est réalisée <span className='font-bold'>sous anesthésie locale </span> pour insérer la racine artificielle en titane dans l'os de la mâchoire. Le processus de cicatrisation, appelé ostéo-intégration, <span className='font-bold'>dure généralement de 3 à 6 mois</span>, période durant laquelle l'implant se fusionne naturellement avec l'os.
            </p>
            <li className={classLiStandard + " mt-10"}>Installation de la couronne ou de la prothèse</li>
            <p className={classPStandard}>
              Une fois que l'implant est solidement ancré dans l'os, une couronne, un pont ou une prothèse dentaire sur-mesure est fixée sur l'implant. Ce remplacement est conçu pour s'intégrer parfaitement avec les autres dents, tant sur le plan esthétique que fonctionnel.
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
              <MoveRight className='translate-y-1' size={20}/> Préservation de l'os : 
            </li>
            <p className="px-1.5 mobile:px-5 text-base mobile:text-lg laptop:text-xl desktop:text-2xl tracking-wider text-justify leading-8 mobile:leading-8 laptop:leading-10 desktop:leading-10 text-main-theme">
              Les implants stimulent l'os de la mâchoire, prévenant ainsi la perte osseuse souvent associée aux dents manquantes.
            </p>
            <li className={classLiStandard + " flex items-center gap-x-2 mt-10"}>
              <MoveRight className='translate-y-1' size={20}/> Esthétique améliorée :
            </li>
            <p className="px-1.5 mobile:px-5 text-base mobile:text-lg laptop:text-xl desktop:text-2xl tracking-wider text-justify leading-8 mobile:leading-8 laptop:leading-10 desktop:leading-10 text-main-theme">
              Les couronnes et prothèses fixées sur les im&shy;plants sont con&shy;çues pour s'in&shy;té&shy;grer har&shy;mo&shy;nieuse&shy;ment avec les dents na&shy;tu&shy;rel&shy;les, amé&shy;liorant ainsi l'ap&shy;pa&shy;rence du sourire.
            </p>
          </ul>
          <Separator className='mx-auto w-[90%] mb-10'/>
          <p className={classPStandard}>
            Nous mettons notre expertise en implantologie au service de votre santé bucco-dentaire et de votre confort. <span className='font-bold'>Nous utilisons des technologies de pointe et des matériaux de haute qualité</span> pour garantir des résultats optimaux et une sécurité maximale tout au long de votre traitement. 
          </p>
          <p className={classPStandard}>
            Notre approche personnalisée nous permet de répondre aux besoins spécifiques de chaque patient, en prenant en compte à la fois les aspects fonctionnels et esthétiques de la solution implantaire.
          </p>
        </PageSection>
      </PageContainer>
    </>
  )
}

export default ImplantologieScreen
