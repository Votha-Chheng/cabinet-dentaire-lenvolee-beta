'use client'

import PageContainer from '@/components/layouts/PageContainer'
import PageSection from '@/components/layouts/PageSection'
import PageHeader from '@/components/shared/PageHeader'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { classPStandard } from '@/datas/classNames'
import { tauri } from '@/fonts/tauri'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { InView } from 'react-intersection-observer'

const EsthetiqueScreen = () => {
  const [sectionTwoInview, setSectionTwoInview] = useState<boolean>(false)
  const [sectionThreeInview, setSectionThreeInview] = useState<boolean>(false)
  const [sectionFourInview, setSectionFourInview] = useState<boolean>(false)
  
  return (
    <>
      <PageHeader img='esthetique.jpg' title='Esthétique dentaire'/>
      <PageContainer>
        <PageSection subtitle='Nos soins esthétiques' delayBoolean={true} >
          <p className={classPStandard}>
            L'esthétique dentaire joue un rôle essentiel dans la confiance en soi et l'ap&shy;pa&shy;ren&shy;ce générale du sourire. Au sein de notre cabinet dentaire <span className='font-bold italic'>L'Envolée</span>, situé à Montpellier et Castelnau-le-Lez, nous proposons des so&shy;lu&shy;tions in&shy;no&shy;van&shy;tes pour améliorer l’har&shy;monie de votre sou&shy;rire, tout en préser&shy;vant la santé de vos dents. 
          </p>
          <p className={classPStandard}>Découvrez la liste de nos services d'esthétique dentaire dans les parties ci-dessous. </p>
        </PageSection>
        <PageSection subtitle='Blanchiment dentaire' delayBoolean={false} subtitleInview={sectionTwoInview} >
          <InView onChange={(inView, entry)=> setSectionTwoInview(inView)} triggerOnce={true} />
          <p className={classPStandard}>
            Le blanchiment dentaire est une méthode populaire pour éclaircir la teinte des dents et redonner de l’éclat à votre sourire. Nous proposons des solutions professionnelles adaptées à vos besoins, qu'il s'agisse d’un blanchiment en cabinet ou d’un traitement à domicile supervisé. Grâce à des produits de haute qualité, nous pouvons réduire efficacement <span className='font-bold'>les taches causées par des aliments, des boissons, ou le tabac</span>, tout en préservant la santé de vos dents et de vos gencives. 
          </p>
          <p className={classPStandard}>
            Notre équipe vous accompagne tout au long du processus, en vous fournissant des conseils personnalisés pour maximiser les résultats et garantir un sourire lumineux et naturel.
          </p>
          <p className={classPStandard}>
            Pour redonner de l’éclat à vos dents grâce à des techniques de blanchiment dentaire efficaces et sans risque et découvrir comment le blanchiment dentaire peut transformer votre sourire, <Link className='underline underline-offset-4 hover:opacity-75' href="tel:+33467756811">n'hésitez pas à nous contacter</Link>.
          </p>
        </PageSection>
        <PageSection subtitle='Facettes dentaires' delayBoolean={false} subtitleInview={sectionThreeInview} >
          <InView onChange={(inView, entry)=> setSectionThreeInview(inView)} triggerOnce={true} />
          <p className={classPStandard}>
            Les facettes dentaires sont une solution esthétique idéale pour corriger les imperfections du sourire, <span className='font-bold'>comme les dents ébréchées, tachées ou mal alignées</span>. Notre cabinet vous propose des <span className='font-bold'>facettes en céramique et en composite</span>, qui offrent un résultat naturel et durable.
          </p>
          <p className={classPStandard}>
            Ce traitement peu invasif consiste à poser des coquilles minces sur la surface des dents, améliorant ainsi leur forme, leur couleur et leur taille. En plus de revitaliser votre sourire, <span className='font-bold'>les facettes dentaires protègent également vos dents des agressions extérieures</span>. Grâce à notre expertise, nous vous garantissons un résultat harmonieux et personnalisé, adapté à vos attentes. 
          </p>
          <div className='my-10'>
            <Image src="/images/facettes-avant-apres.jpg" alt="Intervention d'endodontie" width={400} height={300} className='border-main-theme border-2 mx-auto' />
            <legend className={`${tauri.className} text-center text-xs text-main-theme mt-1.5`}><i>Haut : avant la pose de facettes / Bas : après la pose</i></legend>
          </div>
          <p className={classPStandard}>
            <Link className='underline underline-offset-4 hover:opacity-75' href="tel:+33467756811">N'hésitez pas à nous contacter</Link> pour en savoir plus sur la technique des facettes dentaires.
          </p>
        </PageSection>
        <PageSection subtitle='Restauration dentaire cosmétique' delayBoolean={false} subtitleInview={sectionFourInview} >
          <InView onChange={(inView, entry)=> setSectionFourInview(inView)} triggerOnce={true} />
          <div className={classPStandard}>
            La restauration dentaire cosmétique est une approche innovante qui vise à sublimer l'apparence de vos dents tout en assurant leur fonctionnalité optimale. Au Cabinet Dentaire <span className='font-bold italic'>L'Envolée</span> notre équipe d'experts utilise des matériaux esthétiques de haute qualité, tels que 
            &nbsp;
            <TooltipProvider delayDuration={0.25}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <span className='font-bold underline-offset-2 underline decoration-dashed cursor-help'>la résine composite</span>
                </TooltipTrigger>
                <TooltipContent>
                  <p className={`${tauri.className} w-96 text-left indent-0`}>Biomatériaux utilisés pour les chirurgiens-dentistes afin de restaurer la forme et la fonction du tissu dentaire manquant. Ils peuvent être appliqués directement sur la surface de la dent, contrairement à la céramique, et permettent donc une grande flexibilité.</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            
            , pour réparer les dents abîmées, cariées ou décolorées.
          </div>
          <p className={classPStandard}>
            Grâce à ce traitement, nous redonnons à votre sourire son éclat naturel tout en préservant votre santé dentaire. Chaque restauration est soigneusement personnalisée pour s'harmoniser avec la couleur et la forme de vos dents existantes, offrant ainsi un résultat à la fois <span className='font-bold'>discret et durable</span>. Que ce soit pour <span className='font-bold'>une réparation dentaire</span> ou <span className='font-bold'>une transformation esthétique</span>, nous vous accompagnons avec attention pour répondre à vos besoins.
          </p>
        </PageSection>
      </PageContainer>
    </>
  )
}

export default EsthetiqueScreen
