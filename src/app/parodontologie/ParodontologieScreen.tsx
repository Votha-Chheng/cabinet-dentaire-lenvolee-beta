'use client'

import PageContainer from '@/components/layouts/PageContainer'
import PageSection from '@/components/layouts/PageSection'
import PageHeader from '@/components/shared/PageHeader'
import { TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { classPStandard } from '@/datas/classNames'
import { tauri } from '@/fonts/tauri'
import { Tooltip } from '@radix-ui/react-tooltip'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { InView } from 'react-intersection-observer'

const ParodontologieScreen = () => {
  const [sectionTwoInview, setSectionTwoInview] = useState<boolean>(false)
  const [sectionThreeInview, setSectionThreeInview] = useState<boolean>(false)
  const [sectionFourInview, setSectionFourInview] = useState<boolean>(false)
  const [sectionFiveInview, setSectionFiveInview] = useState<boolean>(false)
  
  return (
    <>
      <PageHeader img='parodontologie.jpg' title='Parodontologie'/>
      <PageContainer>
        <PageSection subtitle="La parodontologie, c'est quoi ?" delayBoolean={true} >
          <p className={classPStandard}>
            La parodontologie est la spécialité dentaire qui traite les maladies des gencives et des tissus de soutien des dents. La santé de vos gencives est tout aussi importante que celle de vos dents. Au cabinet dentaire <span className='font-bold italic'>L&apos;Envolée</span>, nous proposons des soins spécialisés pour prévenir, diag&shy;nos&shy;tiquer et traiter les maladies pa&shy;rodon&shy;ta&shy;les, aussi appelées paro&shy;dontites.
          </p>
        </PageSection>
        <PageSection subtitle='Soigner les parodontites' delayBoolean={false} subtitleInview={sectionTwoInview} >
          <InView onChange={(inView, entry)=> setSectionTwoInview(inView)} triggerOnce={true} />
          <p className={classPStandard}>
            Les maladies des gencives, si elles ne sont pas traitées à temps, peuvent avoir des conséquences graves <span className='font-bold'>comme la perte de dents ou des problèmes de santé générale</span>. Nos services de paro&shy;don&shy;to&shy;logie incluent :
          </p>
          <ul className='pl-5 ml-5 tablet:ml-10 my-5 list-disc space-y-3' >
            <li className="mb-2 tracking-wider font-bold text-main-theme text-base mobile:text-lg laptop:text-xl desktop:text-2xl">
              Détartrage et surfaçage radiculaire
            </li>
            <li className="text-base mobile:text-lg laptop:text-xl desktop:text-2xl mb-2 tracking-wider font-bold text-main-theme">
              Traitement des poches parodontales
            </li>
            <li className="text-base mobile:text-lg laptop:text-xl desktop:text-2xl mb-2 tracking-wider font-bold text-main-theme">
              Greffes gingivales
            </li>
          </ul>
          <div className='my-10'>
            <Image src="/images/traitement-paro-avant-après.jpg" alt="Avant/Après intezrvantion parodontale" width={400} height={300} className='border-main-theme border-2 mx-auto' />
            <legend className={`${tauri.className} text-center text-xs text-main-theme mt-1.5`}><i>Haut : avant traitement parodontale / Bas : après traitement</i></legend>
          </div>
          
        </PageSection>
        <PageSection subtitle='Détartrage et surfaçage radiculaire' delayBoolean={false} subtitleInview={sectionThreeInview} >
          <InView onChange={(inView, entry)=> setSectionThreeInview(inView)} triggerOnce={true} />
          <p className={classPStandard}>
            Le détartrage et surfaçage ra&shy;diculaire est le prin&shy;cipal trai&shy;tement utilisé prin&shy;cipale&shy;ment pour trai&shy;ter ces maladies paro&shy;don&shy;tales (comme <span className='font-bold'>la gingivite</span> par exemple). Elles peuvent, par rico&shy;chet, af&shy;fecter aussi les structures de sou&shy;tien des dents. Le soin com&shy;porte deux pro&shy;cé&shy;du&shy;res :

          </p>
          <ul className='ml-2.5 tablet:ml-10 pl-5 list-disc text-base mobile:text-lg laptop:text-xl desktop:text-2xl text-main-theme mt-5'>
            <li className='font-bold tracking-wide'>
              Le détartrage
            </li>
            <p className={classPStandard + " w-[95%] tablet:w-[90%] mt-2.5 mb-10"}>
              Le détartrage consiste à enlever la plaque dentaire et le tartre qui se sont accumulés sur les surfaces des dents, au-dessus et en dessous de la ligne gingivale (au niveau des gen&shy;cives). La plaque est une pel&shy;li&shy;cule collante de bactéries qui se forme sur les dents, tandis que le tartre est une plaque durcie qui ne peut être retirée qu&apos;avec des instruments dentaires spécifiques. Le détartrage est essentiel pour prévenir les inflammations des gen&shy;cives et réduire les risques de pro&shy;gres&shy;sion de la maladie pa&shy;ro&shy;dontale.
            </p>
            <li className='font-bold tracking-wide'>
              Le surfaçage radiculaire
            </li>
            <p className={classPStandard + " w-[95%] tablet:w-[90%] mt-2.5"}>
              Le surfaçage radiculaire va plus loin que le détartrage. Il s&apos;agit d&apos;un net&shy;toya&shy;ge en pro&shy;fon&shy;deur des racines des dents pour lisser les surfaces radiculaires (les racines) et éli&shy;miner les bactéries, les toxines et les dé&shy;pôts de tar&shy;tre sous la gencive. 
            </p>
            <p className={classPStandard + " w-[95%] tablet:w-[90%]"}>
              L&apos;objectif du surfaçage radiculaire est de per&shy;met&shy;tre aux gen&shy;cives de se ré&shy;attacher à la sur&shy;face pro&shy;pre des racines des dents, de réduire la pro&shy;fon&shy;deur des po&shy;ches pa&shy;rodon&shy;tales (es&shy;pa&shy;ces entre la dent et la gen&shy;cive où les bac&shy;té&shy;ries peuvent se loger) et de favo&shy;riser la gué&shy;rison.
            </p>
            <p className={classPStandard + " w-[95%] tablet:w-[90%]"}>
              Cette procédure aide à ar&shy;rêter la pro&shy;gres&shy;sion de la ma&shy;ladie paro&shy;don&shy;tale et à main&shy;te&shy;nir la santé des gen&shy;cives et des dents. En résumé, le dé&shy;tar&shy;tra&shy;ge et le surfaçage radi&shy;cu&shy;laire sont des <span className='font-bold'>trai&shy;te&shy;ments non chi&shy;rur&shy;gi&shy;caux</span> essentiels pour con&shy;trô&shy;ler les in&shy;fections des gen&shy;cives et pré&shy;venir la perte de dents causée par les mala&shy;dies pa&shy;ro&shy;dontales. Ils sont souvent re&shy;com&shy;man&shy;dés lorsque la ma&shy;la&shy;die des gen&shy;cives est mo&shy;dé&shy;rée à avan&shy;cée.
            </p>
          </ul>
        </PageSection>
        <PageSection subtitle='Traitement des poches parodontales' delayBoolean={false} subtitleInview={sectionFourInview}>
          <InView onChange={(inView, entry)=> setSectionFourInview(inView)} triggerOnce={true} />
            <h3 className='text-base mobile:text-lg laptop:text-xl desktop:text-2xl font-bold text-main-theme px-5 tracking-wide mb-2.5 indent-2'>
              Qu&apos;est-ce qu&apos;une poche parodontale ?
            </h3>
            <p className={classPStandard}>
              Une poche parodontale se forme lorsque les gencives se détachent des dents en raison d&apos;une inflammation ou d&apos;une infection bactérienne, créant un espace où les bactéries et les débris peuvent s&apos;accumuler. Ces poches s&apos;approfondissent avec le temps, favorisant l&apos;accumulation de plus de bactéries et accélérant la dégradation des os et des tissus de soutien des dents. 
            </p>
            <p className={classPStandard}>
              Plus les poches sont profondes, plus la maladie parodontale est avancée et le risque de perte de dents est élevé.
            </p>

            <h3 className='text-base mobile:text-lg laptop:text-xl desktop:text-2xl font-bold text-main-theme px-5 tracking-wide mb-2.5 mt-10 indent-2'>
              Comment traiter les poches parodontales ?
            </h3>
            <p className={classPStandard}>
              En plus du détartrage et d&apos;un surfaçage radiculaire, des antibiotiques ou des agents antimicrobiens sont appliqués directement dans les poches pour contrôler l&apos;infection et réduire l&apos;inflammation.
              Ces médicaments peuvent être sous forme de gel, de rinçage buccal ou de petites pastilles insérées dans la poche parodontale.
            </p>
            <p className={classPStandard}>
              Lorsque les poches sont très profondes et que le traitement non chirurgical n&apos;est pas suffisant, une intervention chirurgicale peut être nécessaire. 
            </p>
        </PageSection>
        <PageSection subtitle='Greffes gingivales' delayBoolean={false} subtitleInview={sectionFiveInview}>
          <InView onChange={(inView, entry)=> setSectionFiveInview(inView)} triggerOnce={true} />
            <h3 className='text-base mobile:text-lg laptop:text-xl desktop:text-2xl font-bold text-main-theme px-5 tracking-wide mb-2.5 indent-2'>
              Qu&apos;est-ce qu&apos;une greffe gingivale ?
            </h3>
            <div className={classPStandard}>
              Lorsque les gencives se sont rétractées, la 
              &nbsp;
              <TooltipProvider delayDuration={0.25}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className='font-bold underline-offset-2 underline decoration-dashed cursor-help'>récession gingivale</span>
                  </TooltipTrigger>
                  <TooltipContent>
                    <div className={`${tauri.className} w-96 text-left indent-0`}>Condition dentaire dans laquelle le tissu des gencives qui entoure les dents se retire ou s&apos;affaisse, exposant ainsi la racine de la dent.</div>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              &nbsp;expose les racines dentaires, ce qui peut entraîner une sensibilité accrue, un risque de caries radiculaires, et une dégradation de l&apos;apparence du sourire. Grâce à cette procédure, il est possible de couvrir les racines exposées et de stabiliser les gencives.
            </div>
            <div className={classPStandard}>
              La méthode de greffe dépend des besoins spécifiques du patient. Le tissu utilisé pour la greffe peut-être soit un 
              &nbsp;
              <TooltipProvider delayDuration={0.25}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className='font-bold underline-offset-2 underline decoration-dashed cursor-help'>tissu conjonctif</span>
                  </TooltipTrigger>
                  <TooltipContent>
                    <div className={`${tauri.className} w-96 text-left indent-0`}>
                      Tissu constituant la majorité de la masse du corps des organismes évolués comme le corps de l’être humain. C’est le type de tissu le plus abondant de notre organisme.
                    </div>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              &nbsp;prélevé sous une petite partie de la peau du palais, soit un tissu gingival prélevé sur une gencive voisine, ou soit un greffon provenant de donneurs ou de matériaux synthétiques.
            </div>
            <div className='my-10'>
              <Image src="/images/greffe-avant-apres.jpg" alt="Intervention d'endodontie" width={400} height={300} className='border-main-theme border-2 mx-auto' />
              <legend className={`${tauri.className} text-center text-xs text-main-theme mt-1.5 italic`}><i>Haut: avant greffe / Bas : après greffe</i></legend>
            </div>
            
            <p className={classPStandard + " mt-5"}>
              Si vous souffrez de récession gingivale ou si vous avez des questions sur les greffes gingivales, <Link href="tel:+33467756811" className='hover:opacity-75 italic font-bold underline underline-offset-4'>n’hésitez pas à nous contacter</Link> pour une consultation personnalisée à Montpellier et Castelnau-le-Lez.
            </p>
        </PageSection>
      </PageContainer>
    </>
  )
}

export default ParodontologieScreen
