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
  const [tooltipResine, setTooltipResine] = useState<boolean>(false)
  const [sectionTwoInview, setSectionTwoInview] = useState<boolean>(false)
  const [sectionThreeInview, setSectionThreeInview] = useState<boolean>(false)
  const [sectionFourInview, setSectionFourInview] = useState<boolean>(false)
  
  return (
    <>
      <PageHeader img='esthetique.jpg' title='Esthétique dentaire'/>
      <PageContainer>
        <PageSection subtitle='Nos soins esthétiques' delayBoolean={true} >
          <p className={classPStandard}>
            L&apos;esthétique dentaire joue un rôle essentiel dans la confiance en soi et l&apos;ap&shy;pa&shy;ren&shy;ce générale du sourire. Au sein de notre cabinet dentaire <span className='font-bold italic'>L&apos;Envolée</span>, situé à Montpellier et Castelnau-le-Lez, nous proposons des so&shy;lu&shy;tions in&shy;no&shy;van&shy;tes pour améliorer l&apos;har&shy;monie de votre sou&shy;rire, tout en préser&shy;vant la santé de vos dents. 
          </p>
          <p className={classPStandard}>Découvrez la liste de nos services d&apos;esthétique dentaire dans les parties ci-dessous. </p>
        </PageSection>
        <PageSection subtitle='Blanchiment dentaire' delayBoolean={false} subtitleInview={sectionTwoInview} >
          <InView onChange={(inView, entry)=> setSectionTwoInview(inView)} triggerOnce={true} />
          <p className={classPStandard}>
            Le blanchiment dentaire est une métho&shy;de popu&shy;laire pour éclair&shy;cir la tein&shy;te des dents et re&shy;don&shy;ner de l&apos;éclat à votre sourire. Nous proposons des solutions professionnelles adaptées à vos besoins, qu&apos;il s&apos;agisse d&apos;un blanchiment en cabinet ou d&apos;un traitement à domicile supervisé. Grâce à des produits de haute qualité, nous pouvons réduire efficacement <span className='font-bold'>les ta&shy;ches cau&shy;sées par des ali&shy;ments, des bois&shy;sons, ou le ta&shy;bac</span>, tout en pré&shy;servant la san&shy;té de vos dents et de vos gen&shy;ci&shy;ves. 
          </p>
          <p className={classPStandard}>
            Notre équipe vous accompagne tout au long du pro&shy;ces&shy;sus, en vous four&shy;nis&shy;sant des con&shy;seils person&shy;na&shy;lisés pour maxi&shy;mi&shy;ser les ré&shy;sul&shy;tats et garan&shy;tir un sou&shy;rire lu&shy;mineux et na&shy;tu&shy;rel.
          </p>
          <p className={classPStandard}>
            Pour redonner de l&apos;éclat à vos dents grâce à des techniques de blanchiment dentaire efficaces et sans risque et découvrir comment le blanchiment dentaire peut transformer votre sourire, <Link className='underline underline-offset-4 hover:opacity-75' href="tel:+33467756811">n&apos;hésitez pas à nous contacter</Link>.
          </p>
        </PageSection>
        <PageSection subtitle='Facettes dentaires' delayBoolean={false} subtitleInview={sectionThreeInview} >
          <InView onChange={(inView, entry)=> setSectionThreeInview(inView)} triggerOnce={true} />
          <p className={classPStandard}>
            Les facettes dentaires sont une solution esthétique idéale pour corriger les imperfections du sourire, <span className='font-bold'>comme les dents ébréchées, tachées ou mal alignées</span>. Notre cabinet vous propose des <span className='font-bold'>facettes en céramique et en composite</span>, qui offrent un ré&shy;sul&shy;tat naturel et du&shy;rable.
          </p>
          <p className={classPStandard}>
            Ce traitement peu invasif consiste à poser des co&shy;quil&shy;les minces sur la surface des dents, améliorant ainsi leur forme, leur couleur et leur taille. En plus de revitaliser votre sourire, <span className='font-bold'>les facettes dentaires protègent également vos dents des agressions extérieures</span>. Grâce à notre ex&shy;perti&shy;se, nous vous ga&shy;rantissons un résultat harmonieux et personnalisé, adapté à vos attentes. 
          </p>
          <div className='my-10'>
            <Image src="/images/facettes-avant-apres.jpg" alt="Intervention d'endodontie" width={400} height={300} className='border-main-theme border-2 mx-auto' />
            <legend className={`${tauri.className} text-center text-xs text-main-theme mt-1.5`}><i>Haut : avant la pose de facettes / Bas : après la pose</i></legend>
          </div>
          <p className={classPStandard}>
            <Link className='underline underline-offset-4 hover:opacity-75' href="tel:+33467756811">N&apos;hésitez pas à nous contacter</Link> pour en savoir plus sur la technique des facettes dentaires.
          </p>
        </PageSection>
        <PageSection subtitle='Restauration dentaire cosmétique' delayBoolean={false} subtitleInview={sectionFourInview} >
          <InView onChange={(inView, entry)=> setSectionFourInview(inView)} triggerOnce={true} />
          <div className={classPStandard}>
            La restauration dentaire cosmétique est une ap&shy;pro&shy;che in&shy;novan&shy;te qui vise à su&shy;bli&shy;mer l&apos;apparen&shy;ce de vos dents tout en as&shy;su&shy;rant leur fonction&shy;na&shy;li&shy;té optimale. Au cabinet dentaire <span className='font-bold italic'>L&apos;Envolée</span> notre équi&shy;pe d&apos;experts uti&shy;lise des maté&shy;riaux esthé&shy;tiques de hau&shy;te qua&shy;li&shy;té, tels que 
            &nbsp;
            <TooltipProvider delayDuration={0.25}>
              <Tooltip open={tooltipResine}>
                <TooltipTrigger asChild>
                  <span 
                    className='font-bold underline-offset-2 underline decoration-dashed cursor-help'
                    onClick={() => setTooltipResine(prev=> !prev)}
                    onMouseEnter={() => setTooltipResine(true)}
                    onMouseLeave={() => setTooltipResine(false)}
                    onKeyDown={(e) => {
                      e.preventDefault();
                      e.key === 'Enter' && setTooltipResine(prev=> !prev);
                    }}
                  >la résine composite</span>
                </TooltipTrigger>
                <TooltipContent>
                  <p className={`${tauri.className} w-80 text-left indent-0`}>Biomatériaux utilisés pour les chirurgiens-dentistes afin de restaurer la forme et la fonction du tissu dentaire manquant. Ils peuvent être appliqués directement sur la surface de la dent, contrairement à la céramique, et permettent donc une grande flexibilité.</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            
            , pour ré&shy;parer les dents abî&shy;mées, cariées ou dé&shy;colo&shy;rées.
          </div>
          <p className={classPStandard}>
            Grâce à ce traitement, nous redonnons à votre sou&shy;rire son éclat natu&shy;rel tout en pré&shy;servant votre san&shy;té dentaire. Chaque restauration est soigneu&shy;se&shy;ment per&shy;son&shy;na&shy;li&shy;sée pour s&apos;harmo&shy;niser avec la cou&shy;leur et la for&shy;me de vos dents existan&shy;tes, of&shy;frant ainsi un ré&shy;sultat à la fois <span className='font-bold'>discret et durable</span>. Que ce soit pour <span className='font-bold'>une répa&shy;ra&shy;tion den&shy;taire</span> ou <span className='font-bold'>une trans&shy;for&shy;ma&shy;tion esthé&shy;tique</span>, nous vous ac&shy;compagnons avec at&shy;tention pour ré&shy;pon&shy;dre à vos be&shy;soins.
          </p>
        </PageSection>
      </PageContainer>
    </>
  )
}

export default EsthetiqueScreen
