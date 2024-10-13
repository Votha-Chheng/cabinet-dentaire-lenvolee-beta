'use client'

import PageContainer from '@/components/layouts/PageContainer'
import PageSection from '@/components/layouts/PageSection'
import ContactButton from '@/components/shared/ContactButton'
import PageHeader from '@/components/shared/PageHeader'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { classLiStandard, classPStandard, classUl } from '@/datas/classNames'
import { tauri } from '@/fonts/tauri'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaCaretSquareRight } from 'react-icons/fa'
import { InView } from 'react-intersection-observer'

const EsthetiqueScreen = () => {
  const [sectionTwoInview, setSectionTwoInview] = useState<boolean>(false)
  const [sectionThreeInview, setSectionThreeInview] = useState<boolean>(false)
  
  return (
    <>
      <PageHeader img='esthetique.jpg' title='Esthétique dentaire'/>
      <PageContainer>
        <PageSection subtitle="Le rôle du sourire" delayBoolean={true} >
          <p className={classPStandard}> 
            L&apos;esthétique dentaire joue un rôle es&shy;sen&shy;tiel dans la confiance en soi et l&apos;ap&shy;pa&shy;rence géné&shy;ra&shy;le du sou&shy;ri&shy;re. Au cabinet den&shy;taire <span className='font-bold italic'>L&apos;Envolée</span>, situé Castelnau-le-Lez, et à proxi&shy;mi&shy;té de Mont&shy;pellier, nous pro&shy;posons des so&shy;lu&shy;tions in&shy;no&shy;vantes pour améliorer l’har&shy;mo&shy;nie de votre sou&shy;rire tout en pré&shy;servant la san&shy;té de vos dents.
          </p>
          <ContactButton/>
        </PageSection>
        <PageSection subtitle='Nos soins esthétiques' subtitleInview={sectionTwoInview}>
          <InView onChange={(inView, entry)=> setSectionTwoInview(inView)} triggerOnce={true} />
          <p className={classPStandard}>
            Nos services d&apos;esthétique den&shy;taire comp&shy;tent les soins sui&shy;vants :
          </p>
          <ul className={classUl}>
            <li className={classLiStandard}>
              <div className='absolute top-1.5 -left-8'>
                <FaCaretSquareRight size={20} />
              </div>
              <span className='font-bold tracking-wider underline underline-offset-4'>Blanchiment dentaire</span> : Redonner de l’éclat à vos dents grâce à des tech&shy;ni&shy;ques de blan&shy;chi&shy;ment den&shy;tai&shy;re ef&shy;fi&shy;ca&shy;ces et sans risque.
            </li>
            <li className={classLiStandard}>
              <div className='absolute top-2 -left-8'>
                <FaCaretSquareRight size={20} />
              </div>
              <span className='font-bold tracking-wider underline underline-offset-4'>Orthodontie</span> : notre cabinet est associé à <span className='italic font-bold'>Aligneurs Français</span>&#174;, un système de gout&shy;tières qui cor&shy;rige les légers dé&shy;fauts d’ali&shy;gne&shy;ments. <span className='font-bold'>Dans les cas im&shy;por&shy;tants, vous se&shy;rez re&shy;di&shy;rigés vers un ortho&shy;don&shy;tiste qua&shy;lifié.</span>
            </li>
            <div className='my-10'>
              <Image src="/images/aligneur-francais.jpg" alt="Scanner intra-oral Medit" width={700} height={400} className='border-main-theme border-2 mx-auto' />
              <legend className={`${tauri.className} text-center text-xs text-main-theme mt-1.5 underline underline-offset-4`}>
                <i><Link target="_blank" href="https://aligneursfrancais.com/">www.aligneursfrancais.com</Link></i>
              </legend>
            </div>
            <li className={classLiStandard}>
              <div className='absolute top-2 -left-8'>
                <FaCaretSquareRight size={20} />
              </div>
              <span className='font-bold tracking-wider underline underline-offset-4'>Restauration dentaire par composite</span> : il est possible d&apos;uti&shy;li&shy;ser des ma&shy;tériaux esthé&shy;tiques comme la ré&shy;si&shy;ne com&shy;posite pour ré&shy;pa&shy;rer ou restau&shy;rer des dents abî&shy;mées ou ca&shy;riées tout en con&shy;ser&shy;vant leur aspect na&shy;tu&shy;rel.
            </li>
            <li className={classLiStandard}>
              <div className='absolute top-2 -left-8'>
                <FaCaretSquareRight size={20} />
              </div>
              <span className='font-bold tracking-wider underline underline-offset-4'>Facettes dentaires</span> : corrigez les im&shy;per&shy;fections tel&shy;les que <span className='font-bold'>les dents ta&shy;chées</span>, <span className='font-bold'>ébré&shy;chées</span> ou <span className='font-bold'>mal ali&shy;gnées</span> grâ&shy;ce à des <span className='font-bold'>fa&shy;cet&shy;tes en cé&shy;ra&shy;mique ou en com&shy;po&shy;site</span>, of&shy;frant un résul&shy;tat na&shy;tu&shy;rel et dura&shy;ble. Les cas d’usures et d’éro&shy;sion den&shy;taire sont main&shy;te&shy;nant fréquent de part l’ali&shy;men&shy;tation moderne in&shy;dustri&shy;el&shy;le et le stress de no&shy;tre vie mo&shy;derne. <span className='font-bold'>Une étu&shy;de sera réali&shy;sée à par&shy;tir de pho&shy;tos et de ra&shy;dio&shy;gra&shy;phie pour ana&shy;lyser pré&shy;ci&shy;sé&shy;ment vo&shy;tre cas.</span>
            </li>
          </ul>
          <div className='my-10'>
            <Image src="/images/facettes-avant-apres.jpg" alt="Intervention d'endodontie" width={400} height={300} className='border-main-theme border-2 mx-auto' />
            <legend className={`${tauri.className} text-center text-xs text-main-theme mt-1.5`}><i>Haut : avant la pose de facettes / Bas : après la pose</i></legend>
          </div>
        </PageSection>
        <PageSection subtitle="Nos outils" subtitleInview={sectionThreeInview}>
          <InView onChange={(inView, entry)=> setSectionThreeInview(inView)} triggerOnce={true} />
          <p className={classPStandard}>
            Nous travaillons en étroite collabo&shy;ra&shy;tion avec vous pour dé&shy;finir le trai&shy;te&shy;ment esthé&shy;tique le plus adapté à vos be&shy;soins et à vos at&shy;ten&shy;tes. Votre sourire est notre prio&shy;rité, et nos trai&shy;te&shy;ments d’esthé&shy;tique den&shy;taire sont conçus pour vous of&shy;frir des résul&shy;tats na&shy;tu&shy;rels et har&shy;mo&shy;nieux. Le ca&shy;bin&shy;et est équi&shy;pé d’une ca&shy;méra nu&shy;mé&shy;rique afin d’aug&shy;menter le con&shy;fort des pri&shy;ses d’em&shy;preinte et d’un logiciel de pla&shy;nification esthé&shy;tique, le <span className='font-bold italic'>Smilecloud</span>&#174;, une IA qui nous aide à dé&shy;fi&shy;nir le meil&shy;leur sou&shy;ri&shy;re pour vous.
            
          </p>
          <div className='my-10'>
            <Image src="/images/camera-medit.jpg" alt="Scanner intra-oral Medit" width={700} height={400} className='border-main-theme border-2 mx-auto' />
            <legend className={`${tauri.className} text-center text-xs text-main-theme mt-1.5`}><i>Camera intra-oral <span className='font-bold'>MEDIT&#174;</span> utilisée durant nos soins</i></legend>
          </div>
          <p className={classPStandard}>
            N&apos;hésitez pas à nous con&shy;tacter pour discu&shy;ter des dif&shy;fé&shy;ren&shy;tes op&shy;tions de trai&shy;te&shy;ment esthé&shy;tique sur Montpel&shy;lier et Castelnau-le-Lez.
          </p>
          <ContactButton/>
        </PageSection>
          {/* <p className={classPStandard}>
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
        </PageSection> */}
      </PageContainer>
    </>
  )
}

export default EsthetiqueScreen
