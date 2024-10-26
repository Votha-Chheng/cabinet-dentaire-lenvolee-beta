'use client'

import PageContainer from '@/components/layouts/PageContainer'
import PageSection from '@/components/layouts/PageSection'
import ContactButton from '@/components/shared/ContactButton'
import PageHeader from '@/components/shared/PageHeader'
import { classPStandard, classUl, legendClass } from '@/datas/classNames'
import { tauri } from '@/fonts/tauri'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaCaretSquareRight } from 'react-icons/fa'
import { InView } from 'react-intersection-observer'

const EsthetiqueScreen = () => {
  const [sectionTwoInview, setSectionTwoInview] = useState<boolean>(false)
  const [sectionThreeInview, setSectionThreeInview] = useState<boolean>(false)
  
  const classParoLi = "mb-2 pr-5 tablet:pr-8 text-base mobile:text-lg laptop:text-xl desktop:text-2xl tracking-wider text-justify leading-8 mobile:leading-8 laptop:leading-10 desktop:leading-10 text-main-theme laptop:indent-10 indent-8"

  const caretLiClass = 'absolute left-0 top-2 laptop:top-3 text-main-theme'

  return (
    <>
      <PageHeader img='esthetique.jpg' title='Esthétique dentaire'/>
      <PageContainer>
        <PageSection subtitle="Le rôle du sourire" delayBoolean={true} >
          <p className={classPStandard}> 
            L&apos;esthétique dentaire joue un rôle es&shy;sen&shy;tiel dans la confiance en soi et l&apos;ap&shy;pa&shy;rence géné&shy;ra&shy;le du sou&shy;ri&shy;re. Au cabinet den&shy;taire <span className='font-bold italic'>L&apos;Envolée</span>, situé à Castelnau-le-Lez, et à proxi&shy;mi&shy;té de Mont&shy;pellier, nous pro&shy;posons des so&shy;lu&shy;tions in&shy;no&shy;vantes pour améliorer l’har&shy;mo&shy;nie de votre sou&shy;rire tout en pré&shy;servant la san&shy;té de vos dents.
          </p>
        </PageSection>
        <PageSection subtitle='Nos soins esthétiques' subtitleInview={sectionTwoInview}>
          <InView onChange={(inView, entry)=> setSectionTwoInview(inView)} triggerOnce={true} />
          <p className={classPStandard}>
            Nos plans de traitement esthé&shy;ti&shy;ques sont ré&shy;ali&shy;sés en res&shy;pec&shy;tant le &laquo;gra&shy;dient thérapeutique&raquo; définis selon <i>Tirlet et Attal</i> :
          </p>
          <ul className={classUl}>
            <li className='relative flex'>
              <FaCaretSquareRight size={20} className={caretLiClass + " mt-1 laptop:mt-0"} />
              <p className={classParoLi}>
                <span className='font-bold tracking-wider underline underline-offset-4 leading-8 mobile:leading-10'>Blanchiment dentaire</span> : re&shy;don&shy;nez de l’é&shy;clat à vos dents grâ&shy;ce à des tech&shy;ni&shy;ques de blan&shy;chi&shy;ment den&shy;tai&shy;re ef&shy;fi&shy;ca&shy;ces et sans risque.
              </p>
            </li>
            <li className='relative flex'>
              <FaCaretSquareRight size={20} className={caretLiClass + " mt-1 laptop:mt-0"} />
              <p className={classParoLi}>
                <span className='font-bold tracking-wider underline underline-offset-4 leading-8 mobile:leading-10'>Orthodontie</span> : notre cabi&shy;net est as&shy;so&shy;cié à <span className='italic font-bold'>Aligneurs Français</span>&#174;, un sys&shy;tè&shy;me de gout&shy;tières qui cor&shy;ri&shy;ge les lé&shy;gers dé&shy;fauts d’ali&shy;gne&shy;ments. <span className='font-bold'>Dans les cas im&shy;por&shy;tants, vous se&shy;rez re&shy;di&shy;rigés vers un ortho&shy;don&shy;tiste qua&shy;li&shy;fié.</span>
              </p>
            </li>
            <div className='my-10'>
              <Image src="/images/aligneur-francais.jpg" alt="Scanner intra-oral Medit" width={450} height={400} className='border-main-theme border-2 mx-auto' />
              <legend className={`${tauri.className} ${legendClass} underline`}>
                <i><Link target="_blank" href="https://aligneursfrancais.com/">www.aligneursfrancais.com</Link></i>
              </legend>
            </div>
            <li className='relative flex'>
              <FaCaretSquareRight size={20} className={caretLiClass} />
              <p className={classParoLi}>
                <span className='font-bold tracking-wider underline underline-offset-4'>Restauration dentaire par com&shy;po&shy;si&shy;te</span> : il est possible d&apos;uti&shy;li&shy;ser des ma&shy;tériaux esthé&shy;tiques comme la ré&shy;si&shy;ne com&shy;posite pour ré&shy;pa&shy;rer ou restau&shy;rer des dents abî&shy;mées ou ca&shy;riées tout en con&shy;ser&shy;vant leur aspect na&shy;tu&shy;rel.
              </p>
            </li>
            <li className='relative flex'>
              <FaCaretSquareRight size={20} className={caretLiClass} />
              <p className={classParoLi}>
                <span className='font-bold tracking-wider underline underline-offset-4'>Facettes dentaires</span> : corrigez les im&shy;per&shy;fections tel&shy;les que <span className='font-bold'>les dents ta&shy;chées</span>, <span className='font-bold'>ébré&shy;chées</span> ou <span className='font-bold'>mal ali&shy;gnées</span> grâ&shy;ce à des <span className='font-bold'>fa&shy;cet&shy;tes en cé&shy;ra&shy;mique ou en com&shy;po&shy;site</span>, of&shy;frant un résul&shy;tat na&shy;tu&shy;rel et dura&shy;ble. Les cas d’usures et d’éro&shy;sion den&shy;taire sont main&shy;te&shy;nant fréquent de part l’ali&shy;men&shy;tation moderne in&shy;dustri&shy;el&shy;le et le stress de no&shy;tre vie mo&shy;derne. <span className='font-bold'>Une étu&shy;de sera réali&shy;sée à par&shy;tir de pho&shy;tos et de ra&shy;dio&shy;gra&shy;phie pour ana&shy;lyser pré&shy;ci&shy;sé&shy;ment vo&shy;tre cas.</span>
              </p>
            </li>
          </ul>
          <div className='my-10'>
            <Image src="/images/facettes-avant-apres.jpg" alt="Intervention d'endodontie" width={400} height={300} className='border-main-theme border-2 mx-auto' />
            <legend className={`${tauri.className} text-center text-xs text-main-theme mt-1.5`}><i>Avant/Après la pose de facettes<br/>sur un cas d&apos;attrition par bruxisme</i></legend>
          </div>
        </PageSection>
        <PageSection subtitle="Nos outils" subtitleInview={sectionThreeInview}>
          <InView onChange={(inView, entry)=> setSectionThreeInview(inView)} triggerOnce={true} />
          <p className={classPStandard}>
            Nous travaillons en étroite collabo&shy;ra&shy;tion avec vous pour dé&shy;finir le trai&shy;te&shy;ment esthé&shy;tique le plus adapté à vos be&shy;soins et à vos at&shy;ten&shy;tes. Votre sourire est notre prio&shy;rité, et nos trai&shy;te&shy;ments d’es&shy;thé&shy;tique den&shy;taire sont conçus pour vous of&shy;frir des résul&shy;tats na&shy;tu&shy;rels et har&shy;mo&shy;nieux. 
          </p>
          <div className='my-10'>
            <Image src="/images/camera-medit.jpg" alt="Scanner intra-oral Medit" width={700} height={400} className='border-main-theme border-2 mx-auto' />
            <legend className={`${tauri.className} ${legendClass}`}><i>Camera intra-oral <span className='font-bold'>i700w MEDIT&#174;</span> utilisée durant nos soins -<br/> Crédits photo : DR </i></legend>
          </div>
          <p className={classPStandard}>
            Le ca&shy;bin&shy;et est équi&shy;pé d’une ca&shy;méra nu&shy;mé&shy;rique afin d’aug&shy;menter le con&shy;fort des pri&shy;ses d’em&shy;preinte et d’un logiciel de pla&shy;nification esthé&shy;tique, le <span className='font-bold italic'>Smilecloud</span>&#174;, une IA qui nous aide à dé&shy;fi&shy;nir le meil&shy;leur sou&shy;ri&shy;re pour vous.
          </p>
          <iframe 
            className='mx-auto px-0 mobile:px-5 my-10 h-52 tablet:h-72 tablet:w-[500px] laptop:h-80 desktop:h-96 desktop:w-[650px]'
            src="https://www.youtube.com/embed/AmnVngK3x1I?si=gY1zAdzliyRnzp7I" 
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
          />
          <p className={classPStandard}>
            N&apos;hésitez pas à nous con&shy;tacter pour discu&shy;ter des dif&shy;fé&shy;ren&shy;tes op&shy;tions de trai&shy;te&shy;ment esthé&shy;tique sur Montpel&shy;lier et Castelnau-le-Lez.
          </p>
          <ContactButton/>
        </PageSection>

      </PageContainer>
    </>
  )
}

export default EsthetiqueScreen
