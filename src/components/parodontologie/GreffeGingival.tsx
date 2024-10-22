import React, { Dispatch, FC, SetStateAction, useState } from 'react'
import PageSection from '../layouts/PageSection'
import { classPHygiene, classPStandard, classUl } from '@/datas/classNames'
import Image from 'next/image'
import { FaCaretSquareRight } from 'react-icons/fa'
import { tauri } from '@/fonts/tauri'
import { InView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { appearFromBottom } from '@/animations/appearFromSides'

const GreffeGingival: FC = () => {
  const [greffeTwoInview, setGreffeTwoInview] = useState<boolean>(false)
  const [greffeThreeInview, setGreffeThreeInview] = useState<boolean>(false)
  const [greffeFourInview, setGreffeFourInview] = useState<boolean>(false)
  const [greffeFiveInview, setGreffeFiveInview] = useState<boolean>(false)
  const [imageInView, setImageInView] = useState<boolean>(false)

  const classParoLi = "mb-2 pr-5 tablet:pr-8 text-base mobile:text-lg laptop:text-xl desktop:text-2xl tracking-wider text-justify leading-8 mobile:leading-8 laptop:leading-10 desktop:leading-10 text-main-theme laptop:indent-10 indent-8"

  const caretLiClass = 'absolute left-0 top-2 laptop:top-3 text-main-theme'

  return (
    <>
      <PageSection subtitle="Qu'est-ce qu'une greffe gingivale">
        <div className='mb-8'>
          <p className={classPStandard}>
            La greffe gingivale est une inter&shy;ven&shy;tion chirur&shy;gi&shy;ca&shy;le visant à ren&shy;for&shy;cer ou à restau&shy;rer la gen&shy;ci&shy;ve, sou&shy;vent dans les cas de ré&shy;ces&shy;sions gin&shy;gi&shy;vales, où les gencives se ré&shy;trac&shy;tent et expo&shy;sent une par&shy;tie de la ra&shy;ci&shy;ne de la dent. Cet&shy;te pro&shy;cé&shy;du&shy;re per&shy;met de pro&shy;té&shy;ger les dents con&shy;tre des dom&shy;ma&shy;ges sup&shy;plé&shy;men&shy;taires, de ren&shy;forcer la gen&shy;ci&shy;ve et d&apos;amé&shy;lio&shy;rer l&apos;esthé&shy;ti&shy;que du sou&shy;rire.
          </p>
          <p className={classPStandard}>
            Le chirurgien dentiste prélève gé&shy;né&shy;rale&shy;ment du tis&shy;su d`&apos;une au&shy;tre par&shy;tie de la bou&shy;che, com&shy;me le pa&shy;lais, pour gref&shy;fer la zo&shy;ne af&shy;fec&shy;tée.
          </p>
        </div>
      </PageSection>

      <PageSection subtitle="étiologies" subtitleInview={greffeTwoInview} >
        <InView onChange={(inView, entry)=> setGreffeTwoInview(inView)} triggerOnce={true} />
        <div className='mb-8'>
          <p className={classPStandard}>
            Plusieurs causes peuvent mener à la né&shy;ces&shy;si&shy;té d&apos;une gref&shy;fe gin&shy;gi&shy;va&shy;le :
          </p>
          <ul className={classUl}>
            <li className='flex relative'>
              <FaCaretSquareRight size={20} className={caretLiClass} />
              <p className={classParoLi + " mb-2"}>
                <span className='font-bold'>Maladie parodontale :</span> une inflam&shy;ma&shy;tion des gen&shy;ci&shy;ves cau&shy;sée par des bac&shy;té&shy;ries peut pro&shy;vo&shy;quer la ré&shy;trac&shy;tion gin&shy;gi&shy;vale.
              </p>
            </li>
            <li className='flex relative'>
              <FaCaretSquareRight size={20} className={caretLiClass} />
              <p className={classParoLi + " mb-2"}>
              <span className='font-bold'>Mauvaise hygiène buc&shy;cale :</span> un bros&shy;sa&shy;ge trop vi&shy;gou&shy;reux ou inap&shy;pro&shy;prié peut éga&shy;le&shy;ment en&shy;dom&shy;ma&shy;ger la gen&shy;ci&shy;ve.
              </p> 
            </li>
            <li className='flex relative'>
                <FaCaretSquareRight size={20} className={caretLiClass} />
              <p className={classParoLi + " mb-2"}>
              <span className='font-bold'>Facteurs génétiques :</span> cer&shy;tai&shy;nes personnes sont pré&shy;dispo&shy;sées à la ré&shy;ces&shy;sion gin&shy;gi&shy;va&shy;le en rai&shy;son de la fi&shy;nes&shy;se de leurs tis&shy;sus gin&shy;gi&shy;vaux.
              </p> 
            </li>
            <li className='flex relative'>
                <FaCaretSquareRight size={20} className={caretLiClass} />
              <p className={classParoLi + " mb-2"}>
              <span className='font-bold'>Malposition dentaire :</span> des dents mal ali&shy;gnées ou des trai&shy;te&shy;ments or&shy;tho&shy;don&shy;ti&shy;ques peu&shy;vent pro&shy;vo&shy;quer une ré&shy;trac&shy;tion gin&shy;gi&shy;va&shy;le.
              </p> 
            </li>
            <li className='flex relative'>
                <FaCaretSquareRight size={20} className={caretLiClass} />
              <p className={classParoLi + " mb-2"}>
                <span className='font-bold'>Traumatismes :</span> les piercings buc&shy;caux ou les bles&shy;su&shy;res peu&shy;vent af&shy;fec&shy;ter la gen&shy;ci&shy;ve.
              </p> 
            </li>
          </ul>	
        </div>
      </PageSection>

      <PageSection subtitle="symptômes" subtitleInview={greffeThreeInview} >
        <InView onChange={(inView, entry)=> setGreffeThreeInview(inView)} triggerOnce={true} />
        <div className='mb-8'>
          <p className={classPStandard}>
            Les signes qui peuvent indi&shy;quer la né&shy;ces&shy;si&shy;té d&apos;une gref&shy;fe gin&shy;gi&shy;va&shy;le in&shy;cluent :
          </p>
          <ul className={classUl}>
            <li className='flex relative'>
              <FaCaretSquareRight size={20} className={caretLiClass} />
              <p className={classParoLi + " mb-2"}>
                <span className='font-bold'>Récession gingivale visible :</span> les dents ap&shy;pa&shy;rais&shy;sent plus lon&shy;gues en rai&shy;son de la gen&shy;cive qui se ré&shy;trac&shy;te.
              </p>
            </li>
            <li className='flex relative'>
              <FaCaretSquareRight size={20} className={caretLiClass} />
              <p className={classParoLi + " mb-2"}>
              <span className='font-bold'>Sensibilité dentaire :</span> les ra&shy;cines ex&shy;po&shy;sées sont souvent plus sen&shy;si&shy;bles à la cha&shy;leur, au froid, et à cer&shy;tains ali&shy;ments aci&shy;des ou su&shy;crés.
              </p> 
            </li>
            <li className='flex relative'>
              <FaCaretSquareRight size={20} className={caretLiClass} />
              <p className={classParoLi + " mb-2"}>
              <span className='font-bold'>Inflammation :</span> rou&shy;geur, gon&shy;fle&shy;ment ou sai&shy;gne&shy;ment fré&shy;quent des gen&shy;ci&shy;ves.
              </p> 
            </li>
            <li className='flex relative'>
              <FaCaretSquareRight size={20} className={caretLiClass} />
              <p className={classParoLi + " mb-2"}>
                <span className='font-bold'>Douleur ou inconfort lors de la masti&shy;ca&shy;tion.</span>
              </p> 
            </li>
          </ul>	
        </div>
      </PageSection>
      <PageSection subtitle="La greffe gingivale libre : une greffe de renfort" subtitleInview={greffeFourInview} >
        <InView onChange={(inView, entry)=> setGreffeFourInview(inView)} triggerOnce={true} />
        <p className={classPStandard}>
          La greffe gingivale libre est utilisée prin&shy;ci&shy;pa&shy;le&shy;ment pour épais&shy;sir les tis&shy;sus gin&shy;gi&shy;vaux et ren&shy;for&shy;cer les zo&shy;nes fra&shy;gi&shy;les. Le tis&shy;su est pré&shy;le&shy;vé di&shy;recte&shy;ment du palais et gref&shy;fé à la zo&shy;ne où la gen&shy;ci&shy;ve est trop min&shy;ce ou absen&shy;te. 
        </p>
        <p className={classPStandard}>
          Ce type de greffe est par&shy;ti&shy;cu&shy;lière&shy;ment ef&shy;fi&shy;ca&shy;ce pour ren&shy;for&shy;cer la gen&shy;ci&shy;ve dans des zo&shy;nes expo&shy;sées aux agres&shy;sions mé&shy;ca&shy;niques, tel&shy;les que le bros&shy;sage ou l&apos;uti&shy;li&shy;sa&shy;tion de pro&shy;thè&shy;ses.
        </p>
      </PageSection>

      <motion.div 
        className='flex flex-col my-14 laptop:ml-[280px] desktop:ml-[390px]'
        variants={appearFromBottom}
        initial="initial"
        animate={imageInView ? "animate":""}
        custom={0.25}
      >
        <InView onChange={(inView, entry)=> setImageInView(inView)} triggerOnce={true} />
        <Image src="/images/greffe-avant-apres.jpg" className='mx-auto border-main-theme border' alt="Schéma représentant une gencive inflammée.." width={600} height={300} />
        <small className={`${tauri.className} text-main-theme text-center text-xs mt-1`}><em>Avant/Après une greffe gingivale</em></small>
      </motion.div>
      
      <PageSection subtitle="La greffe épithélio-conjonctive : une greffe de recouvrement" subtitleInview={greffeFiveInview} >
        <InView onChange={(inView, entry)=> setGreffeFiveInview(inView)} triggerOnce={true} />
        <p className={classPHygiene}>
          La greffe épithélio-con&shy;jonc&shy;tive est uti&shy;li&shy;sée pour re&shy;cou&shy;vrir une ra&shy;ci&shy;ne den&shy;taire expo&shy;sée, sou&shy;vent à la sui&shy;te d&apos;une ré&shy;ces&shy;sion gin&shy;gi&shy;vale impor&shy;tan&shy;te. Elle con&shy;siste à pré&shy;le&shy;ver une cou&shy;che de tis&shy;su sous l&apos;épi&shy;thé&shy;lium (la surface) du pa&shy;lais pour le gref&shy;fer sur la zone ex&shy;po&shy;sée.
        </p>
        <p className={classPHygiene}>
          Cette technique permet non seu&shy;le&shy;ment de re&shy;cou&shy;vrir la ra&shy;ci&shy;ne, mais aus&shy;si de restau&shy;rer l&apos;esthé&shy;ti&shy;que et de ren&shy;for&shy;cer les tis&shy;sus gin&shy;gi&shy;vaux en pro&shy;fon&shy;deur.
        </p>
      </PageSection>
    </>
  )
}

export default GreffeGingival