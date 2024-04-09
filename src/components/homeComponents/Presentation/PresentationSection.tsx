import HomeTitle from '@/components/shared/HomeTitle'
import React, { Dispatch, FC, SetStateAction, useState } from 'react'
import { InView } from 'react-intersection-observer'
import FichePresentation from './FichePresentation'
import { motion } from 'framer-motion'
import { appearFromBottom, appearFromLateral } from '@/animations/appearFromSides'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa6'
import LineThrough from '@/components/shared/LineThrough'
import { horizontal, vertical } from '@/animations/linesAnim'
import { tauri } from '@/fonts/tauri'
import TextStagger from '@/components/shared/TextStagger'

type PresentationSectionProps = {
  setPresentationInView: Dispatch<SetStateAction<boolean>>
}

const PresentationSection: FC<PresentationSectionProps> = ({setPresentationInView}) => {
  const [viewImg, setViewImg] = useState<boolean>(false)
  const [viewOnce, setViewOnce] = useState<boolean>(false)
  const [viewOnceTwo, setViewOnceTwo] = useState<boolean>(false)
  const [viewOnceThree, setViewOnceThree] = useState<boolean>(false)

  const textStaggerClass = "tablet:visible invisible flex w-full uppercase justify-center text-[6.5vw] text-main-theme opacity-10 overflow-hidden py-5"

  return (
    <section className='pt-64 pb-96'>
      <HomeTitle title='Une équipe à taille humaine' textColor='text-main-theme' lineColor='bg-main-theme' />
      <InView as="article" onChange={(inView, entry)=> setPresentationInView(inView)} >
      <InView triggerOnce={true} onChange={(inView, entry)=> setViewImg(inView)} />
        <aside className='flex w-full h-[250px] tablet:h-[400px] laptop:h-[500px] justify-center relative'>
          <LineThrough bgColor='bg-main-theme' width='1px' height='100%' variants={vertical} animate={viewImg ? "animate":""} delay={0.25} />
          <motion.div 
            variants={appearFromBottom} 
            initial="initial" 
            animate={viewImg ? "animate":""} 
            custom={0.5} 
            className='relative min-w-[95%] mobile:min-w-[85%] desktop:min-w-[60%] h-[250px] tablet:h-[400px] laptop:h-[500px] bg-[url("/images/team.jpg")] bg-cover laptop:bg-[center_top_-65px] opacity-[0.95]'
          />
          <LineThrough bgColor='bg-main-theme' width='1px' height='100%' variants={vertical} animate={viewImg ? "animate":""} delay={0.25} originY={1} />
        </aside>
        <LineThrough height='1px' width='100%' bgColor="bg-main-theme" variants={horizontal} animate={viewImg ? "animate":""} delay={0.5} />
        <div className={`${tauri.className} ${textStaggerClass}`}>
          <TextStagger text="l'envolée - Cabinet dentaire" initialDelay={0.75} inView={viewOnce} />
        </div>
        <InView triggerOnce={true} onChange={(inView, entry)=> setViewOnce(inView)} />
        <LineThrough height='1px' width='100%' bgColor="bg-main-theme" variants={horizontal} animate={viewOnce ? "animate":""} delay={0} />
        <FichePresentation 
          topGreyPosition='15%' 
          topBrownPosition='28%' 
          brownWidth='80%' 
          leftBrownPosition='12.5%' 
          brownHeight='30%' 
          textLeft={true}
          nom='Dr. Sylvie Ma-Francin'
          fonction='Chirurgienne dentiste depuis 2010'
          inView={viewOnce}
          img="portrait-2.jpg"
        >
          <motion.div variants={appearFromLateral} initial="initial" animate={viewOnce ? "animate":""} custom={0.5} className='self-start text-justify p-5 leading-8 flex gap-1'>
            <FaQuoteLeft size={50} className='-translate-y-5 min-w-8 tablet:block hidden' />
            <p className='text-main-theme indent-5 tablet:indent-8 text-xl laptop:text-2xl laptop:leading-10 leading-8 tracking-wide '>
              Docteure en chirurgie den&shy;tai&shy;re et pra&shy;ti&shy;cien&shy;ne depuis plus de 10 ans, j&apos;ai tou&shy;jours à c&#339;ur de me for&shy;mer aux tech&shy;niques mo&shy;der&shy;nes de la den&shy;tiste&shy;rie, et de me per&shy;fec&shy;tion&shy;ner dans ma pra&shy;tique ; et ce, du diag&shy;nostic jusqu&apos;au trai&shy;te&shy;ment, en pas&shy;sant par la di&shy;men&shy;sion esthé&shy;ti&shy;que. Ainsi, c&apos;est dans une at&shy;mo&shy;sphè&shy;re pro&shy;fes&shy;sion&shy;nel&shy;le et con&shy;vi&shy;vi&shy;a&shy;le à la fois que j&apos;au&shy;rai le plai&shy;sir de vous ac&shy;cueil&shy;lir au sein du ca&shy;bi&shy;net <span className='font-semibold italic'>l&apos;Envolée</span>.
            </p>
            <FaQuoteRight size={50} className='self-end translate-y-5 min-w-8 tablet:block hidden w-16'/>
          </motion.div>
        </FichePresentation>
        <div className={`${tauri.className} ${textStaggerClass} tracking-[0.5vw]`}>
          <TextStagger text="situé à castelnau-le-lez" initialDelay={0.75} inView={viewOnceTwo} reverse={true} />
        </div>
        <InView triggerOnce={true} onChange={(inView, entry)=> setViewOnceTwo(inView)} />
        <LineThrough height='1px' width='100%' bgColor="bg-main-theme" variants={horizontal} animate={viewOnceTwo ? "animate":""} delay={0.5} />
        <FichePresentation
          topGreyPosition='15%' 
          topBrownPosition='32%' 
          brownWidth='75%' 
          leftBrownPosition='10%' 
          brownHeight='25%' 
          textLeft={false}
          nom='Dr. Quentin Lupi'
          fonction='Chirurgien dentiste, spécialisé en endodontie'
          inView={viewOnceTwo}
          img="portrait-quentin-lupi.jpg"
        >
          <motion.div variants={appearFromLateral} initial="initialRight" animate={viewOnceTwo ? "animate":""} custom={0.5} className='self-start text-justify p-5 leading-8 flex gap-1'>
            <FaQuoteLeft size={50} className='-translate-y-5 tablet:block hidden min-w-8' />
            <p className='text-main-theme indent-5 tablet:indent-8 text-xl laptop:text-2xl laptop:leading-10 leading-8 tracking-wide '>
              Passionné par l’endodontie depuis plusieurs an&shy;nées, j’ai dé&shy;ci&shy;dé d’orien&shy;ter mon exer&shy;ci&shy;ce afin de pro&shy;di&shy;guer des soins de la plus gran&shy;de qua&shy;li&shy;té avec du ma&shy;té&shy;riel dé&shy;dié. At&shy;ta&shy;ché uni&shy;ver&shy;si&shy;tai&shy;re pour le plai&shy;sir de trans&shy;met&shy;tre aux nou&shy;vel&shy;les géné&shy;ra&shy;tions tout en main&shy;te&shy;nant un ni&shy;veau de for&shy;ma&shy;tion con&shy;ti&shy;nue éle&shy;vé.
            </p>
            <FaQuoteRight size={50} className='self-end translate-y-5 tablet:block hidden w-16 min-w-8'/>
          </motion.div>
        </FichePresentation>
        <div className={`${tauri.className} ${textStaggerClass} tracking-[0.4vw]`}>
          <TextStagger text="Montpellier et alentours" initialDelay={0.75} inView={viewOnceThree} />
        </div>
        <InView triggerOnce={true} onChange={(inView, entry)=> setViewOnceThree(inView)} />
        <LineThrough height='1px' width='100%' bgColor="bg-main-theme" variants={horizontal} animate={viewOnceThree ? "animate":""} delay={0.5} />
        <FichePresentation
          topGreyPosition='25%' 
          topBrownPosition='35%' 
          brownWidth='65%' 
          leftBrownPosition='5%' 
          brownHeight='27.5%' 
          textLeft={true}
          nom='Estelle'
          fonction='Assistante dentaire/Secrétaire médicale'
          inView={viewOnceThree}
          img="portrait-assistante.jpg"
        >
          <motion.div variants={appearFromLateral} initial="initial" animate={viewOnceThree ? "animate":""} custom={0.5} className='self-start text-justify p-5 leading-8 flex gap-1'>
            <FaQuoteLeft size={50} className='-translate-y-5 tablet:block hidden min-w-8' />
            <p className='text-main-theme indent-5 tablet:indent-8 text-xl laptop:text-2xl laptop:leading-10 leading-8 tracking-wide '>
              J’éprouve une grande satisfaction à être à l’écoute, à accueillir chaque patient afin de l’accompagner au cours de son suivi médical et de répondre au mieux à ses attentes. 
            </p>
            <FaQuoteRight size={50} className='self-end translate-y-5 tablet:block hidden min-w-8'/>
          </motion.div>
        </FichePresentation>
      </InView>
    </section>
  )
}

export default PresentationSection