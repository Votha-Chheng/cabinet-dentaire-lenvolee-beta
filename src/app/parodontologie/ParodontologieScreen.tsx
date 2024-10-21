'use client'

import PageContainer from '@/components/layouts/PageContainer'
import PageSection from '@/components/layouts/PageSection'
import ContactButton from '@/components/shared/ContactButton'
import PageHeader from '@/components/shared/PageHeader'
import { TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { classLiStandard, classPStandard } from '@/datas/classNames'
import { tauri } from '@/fonts/tauri'
import { Tooltip } from '@radix-ui/react-tooltip'
import React, { useState } from 'react'
import { FaCaretSquareRight } from 'react-icons/fa'
import { InView } from 'react-intersection-observer'

const ParodontologieScreen = () => {
  const [sectionTwoInview, setSectionTwoInview] = useState<boolean>(false)
  
  return (
    <>
      <PageHeader img='parodontologie.jpg' title='Parodontologie'/>
      <PageContainer>
        <PageSection subtitle="Au service des gencives" delayBoolean={true} >
          <p className={classPStandard}>
            La santé de vos gencives est tout aussi im&shy;por&shy;tan&shy;te que celle de vos dents. La paro&shy;dontologie est la spé&shy;ciali&shy;té den&shy;taire qui trai&shy;te les ma&shy;la&shy;dies des gen&shy;cives et des tis&shy;sus de sou&shy;tien des dents. Au cabinet dentaire <span className='font-bold italic'>L&apos;Envolée</span>, nous pro&shy;po&shy;sons des soins spé&shy;cialisés pour pré&shy;venir, diag&shy;nosti&shy;quer et trai&shy;ter les ma&shy;la&shy;dies paro&shy;don&shy;ta&shy;les, aussi ap&shy;pe&shy;lées <span className='font-bold'>pa&shy;ro&shy;don&shy;ti&shy;tes</span>.
          </p>
        </PageSection>
        <PageSection subtitle='Soigner les parodontites' delayBoolean={false} subtitleInview={sectionTwoInview} >
          <InView onChange={(inView, entry)=> setSectionTwoInview(inView)} triggerOnce={true} />
          <p className={classPStandard}>
            Les maladies des gencives peuvent avoir des con&shy;sé&shy;quen&shy;ces gra&shy;ves si elles ne sont pas trai&shy;tées à temps, com&shy;me la per&shy;te de dents ou des pro&shy;blèmes de san&shy;té gé&shy;né&shy;rale. Nos servi&shy;ces de pa&shy;rodon&shy;to&shy;lo&shy;gie incluent :
          </p>
          <ul className="w-full pl-12 pr-5 mt-5 mobile:pl-14 mobile:pr-10 text-justify">
            <li className={classLiStandard}>
              <div className='absolute top-2 -left-10'>
                <FaCaretSquareRight size={20} />
              </div>
              <span className='font-bold tracking-wider underline underline-offset-4'>Détartrage et sur&shy;faça&shy;ge radiculaire</span> : ce soin consi&shy;ste en un net&shy;toya&shy;ge en pro&shy;fon&shy;deur pour éli&shy;mi&shy;ner le tar&shy;tre et les bac&shy;té&shy;ries sous la gen&shy;ci&shy;ve et pré&shy;ve&shy;nir l’in&shy;flam&shy;ma&shy;tion.
            </li>
            <li className={classLiStandard}>
              <div className='absolute top-2 -left-10'>
                <FaCaretSquareRight size={20} />
              </div>
              <span className='font-bold tracking-wider underline underline-offset-4'>Traitement des po&shy;ches paro&shy;don&shy;tales</span> : ces techniques spéci&shy;fi&shy;ques sont mi&shy;ses en oeu&shy;vre pour ré&shy;duire les
              &nbsp;
              <TooltipProvider delayDuration={0.25}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className='font-bold underline-offset-2 underline decoration-dashed cursor-help'>po&shy;ches paro&shy;don&shy;ta&shy;les</span>
                  </TooltipTrigger>
                  <TooltipContent>
                    <div className={`${tauri.className} w-72 text-justify indent-0`}>
                      Une poche parodontale se forme lorsque les gen&shy;cives se dé&shy;ta&shy;chent des dents en rai&shy;son d&apos;une in&shy;flam&shy;ma&shy;tion ou d&apos;une infec&shy;tion bac&shy;té&shy;rien&shy;ne, créant un espace où les bactéries et les débris peuvent s&apos;ac&shy;cu&shy;mu&shy;ler. Ces po&shy;ches s&apos;appro&shy;fon&shy;dis&shy;sent avec le temps, fa&shy;vo&shy;risant l&apos;accu&shy;mu&shy;la&shy;tion de plus de bac&shy;téries et ac&shy;cé&shy;lé&shy;rant la dé&shy;gra&shy;da&shy;tion des os et des tissus de soutien des dents.
                    </div>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider> 
              
              &nbsp;,
              dans les&shy;quel&shy;les se logent les bac&shy;téries,
              et fa&shy;vo&shy;ri&shy;sent une gué&shy;ri&shy;son optimale.
            </li>
            <li className={classLiStandard}>
              <div className='absolute top-2 -left-10'>
                <FaCaretSquareRight size={20} />
              </div>
              <span className='font-bold tracking-wider underline underline-offset-4'>Greffes gingivales</span> : un gref&shy;fon cons&shy;ti&shy;tué de
              &nbsp;
              <TooltipProvider delayDuration={0.25}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className='font-bold underline-offset-2 underline decoration-dashed cursor-help'>tis&shy;su conjonc&shy;tif</span>
                  </TooltipTrigger>
                  <TooltipContent>
                    <div className={`${tauri.className} w-96 text-left indent-0`}>
                      Tissu constituant la majorité de la masse du corps des organismes évolués comme le corps de l’être humain. C’est le type de tissu le plus abondant de notre organisme.
                    </div>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              &nbsp;
              
              ou de ma&shy;tière syn&shy;thé&shy;ti&shy;que est uti&shy;li&shy;sé pour la gref&shy;fe afin de restau&shy;rer les gen&shy;ci&shy;ves ré&shy;trac&shy;tées et pro&shy;téger les ra&shy;ci&shy;nes den&shy;tai&shy;res, tout en amé&shy;li&shy;orant l&apos;esthé&shy;ti&shy;que de vo&shy;tre sou&shy;ri&shy;re.
            </li>
          </ul>
          <p className={classPStandard}>
            En tant que spécialistes en parodontologie sur <span className='font-bold'>Montpellier et Castelnau-le-Lez</span>, nous met&shy;tons tout en oeu&shy;vre pour pré&shy;server la san&shy;té de vos gen&shy;cives et as&shy;su&shy;rer la sta&shy;bi&shy;li&shy;té de vos dents. Nous vous re&shy;com&shy;man&shy;dons des con&shy;sul&shy;ta&shy;tions régu&shy;lières pour pré&shy;ve&shy;nir toute pro&shy;gres&shy;ion des ma&shy;lad&shy;ies pa&shy;ro&shy;don&shy;ta&shy;les.
          </p>
          <br/>
          <br/>
          <p className={classPStandard}>
            Contactez-nous pour <span className='font-bold'>une éva&shy;lu&shy;a&shy;tion com&shy;plè&shy;te de la san&shy;té de vos gen&shy;cives</span>.
          </p>
          <ContactButton/>

        </PageSection>
        {/* <PageSection subtitle="Une spécialité au service de vos gencives" delayBoolean={true} >
          <p className={classPStandard}>
            La parodontologie est la spécialité dentaire qui traite les maladies des gencives et des tissus de soutien des dents. La santé de vos gencives est tout aussi importante que celle de vos dents. Au cabinet dentaire <span className='font-bold italic'>L&apos;Envolée</span>, nous proposons des soins spé&shy;cialisés pour prévenir, diag&shy;nos&shy;tiquer et traiter les maladies pa&shy;rodon&shy;ta&shy;les, aussi appelées paro&shy;dontites.
          </p>
        </PageSection>
        <PageSection subtitle='Soigner les parodontites' delayBoolean={false} subtitleInview={sectionTwoInview} >
          <InView onChange={(inView, entry)=> setSectionTwoInview(inView)} triggerOnce={true} />
          <p className={classPStandard}>
            Les maladies des gencives, si elles ne sont pas traitées à temps, peuvent avoir des conséquences graves <span className='font-bold'>comme la perte de dents ou des pro&shy;blèmes de san&shy;té gé&shy;né&shy;ra&shy;le</span>. Nos services de paro&shy;don&shy;to&shy;logie incluent :
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
            Le détartrage et surfaçage ra&shy;diculaire est le prin&shy;cipal trai&shy;tement utilisé prin&shy;cipale&shy;ment pour trai&shy;ter ces maladies paro&shy;don&shy;tales (comme <span className='font-bold'>la gin&shy;givite</span> par exemple). Elles peuvent, par rico&shy;chet, af&shy;fecter aussi les structures de sou&shy;tien des dents. Le soin com&shy;porte deux pro&shy;cé&shy;du&shy;res :

          </p>
          <ul className='ml-2.5 tablet:ml-10 pl-5 list-disc text-base mobile:text-lg laptop:text-xl desktop:text-2xl text-main-theme mt-5'>
            <li className='font-bold tracking-wide'>
              Le détartrage
            </li>
            <p className={classPStandard + " w-[95%] tablet:w-[90%] mt-2.5 mb-10"}>
              Le détartrage consiste à enlever la plaque dentaire et le tartre qui se sont accumulés sur les sur&shy;faces des dents, au-des&shy;sus et en des&shy;sous de la ligne gin&shy;gi&shy;vale (au niveau des gen&shy;cives). La plaque est une pel&shy;li&shy;cule col&shy;lante de bac&shy;téries qui se forme sur les dents, tan&shy;dis que le tar&shy;tre est une pla&shy;que dur&shy;cie qui ne peut être re&shy;ti&shy;rée qu&apos;avec des instru&shy;ments den&shy;taires spé&shy;ci&shy;fiques. Le dé&shy;tar&shy;tra&shy;ge est essentiel pour prévenir les inflammations des gen&shy;cives et réduire les risques de pro&shy;gres&shy;sion de la maladie pa&shy;ro&shy;dontale.
            </p>
            <li className='font-bold tracking-wide'>
              Le surfaçage radiculaire
            </li>
            <p className={classPStandard + " w-[95%] tablet:w-[90%] mt-2.5"}>
              Le surfaçage radiculaire va plus loin que le détartrage. Il s&apos;agit d&apos;un net&shy;toya&shy;ge en pro&shy;fon&shy;deur des racines des dents pour lisser les surfaces radiculaires (les racines) et éli&shy;miner les bactéries, les toxines et les dé&shy;pôts de tar&shy;tre sous la gencive. 
            </p>
            <p className={classPStandard + " w-[95%] tablet:w-[90%]"}>
              L&apos;objectif du surfaçage radiculaire est de per&shy;met&shy;tre aux gen&shy;cives de se ré&shy;attacher à la sur&shy;face pro&shy;pre des racines des dents, de ré&shy;duire la pro&shy;fon&shy;deur des po&shy;ches pa&shy;rodon&shy;tales (es&shy;pa&shy;ces entre la dent et la gen&shy;cive où les bac&shy;té&shy;ries peuvent se loger) et de favo&shy;riser la gué&shy;rison.
            </p>
            <p className={classPStandard + " w-[95%] tablet:w-[90%]"}>
              Cette procédure aide à ar&shy;rêter la pro&shy;gres&shy;sion de la ma&shy;ladie paro&shy;don&shy;tale et à main&shy;te&shy;nir la santé des gen&shy;cives et des dents. En ré&shy;su&shy;mé, le dé&shy;tar&shy;tra&shy;ge et le surfaçage ra&shy;di&shy;cu&shy;laire sont des <span className='font-bold'>trai&shy;te&shy;ments non chi&shy;rur&shy;gi&shy;caux</span> es&shy;sen&shy;tiels pour con&shy;trô&shy;ler les in&shy;fec&shy;tions des gen&shy;cives et pré&shy;venir la per&shy;te de dents cau&shy;sée par les mala&shy;dies pa&shy;ro&shy;dontales. Ils sont sou&shy;vent re&shy;com&shy;man&shy;dés lorsque la ma&shy;la&shy;die des gen&shy;ci&shy;ves est mo&shy;dé&shy;rée à avan&shy;cée.
            </p>
          </ul>
        </PageSection>
        <PageSection subtitle='Traitement des poches parodontales' delayBoolean={false} subtitleInview={sectionFourInview}>
          <InView onChange={(inView, entry)=> setSectionFourInview(inView)} triggerOnce={true} />
            <h3 className='text-base mobile:text-lg laptop:text-xl desktop:text-2xl font-bold text-main-theme tracking-wide mb-2.5 indent-2'>
              Qu&apos;est-ce qu&apos;une poche parodontale ?
            </h3>
            <p className={classPStandard}>
              Une poche parodontale se forme lorsque les gen&shy;cives se dé&shy;ta&shy;chent des dents en rai&shy;son d&apos;une in&shy;flam&shy;ma&shy;tion ou d&apos;une infec&shy;tion bac&shy;té&shy;rien&shy;ne, créant un espace où les bactéries et les débris peuvent s&apos;ac&shy;cu&shy;mu&shy;ler. Ces po&shy;ches s&apos;appro&shy;fon&shy;dis&shy;sent avec le temps, fa&shy;vo&shy;risant l&apos;accu&shy;mu&shy;la&shy;tion de plus de bac&shy;téries et ac&shy;cé&shy;lé&shy;rant la dé&shy;gra&shy;da&shy;tion des os et des tissus de soutien des dents. 
            </p>
            <p className={classPStandard}>
              Plus les poches sont profondes, plus la maladie parodontale est avancée et le risque de perte de dents est élevé.
            </p>

            <h3 className='text-base mobile:text-lg laptop:text-xl desktop:text-2xl font-bold text-main-theme tracking-wide mb-2.5 mt-10 indent-2'>
              Comment traiter les poches parodontales ?
            </h3>
            <p className={classPStandard}>
              En plus du détartrage et d&apos;un surfa&shy;ça&shy;ge ra&shy;dicu&shy;laire, des antibiotiques ou des agents anti&shy;mi&shy;cro&shy;biens sont ap&shy;pli&shy;qués directe&shy;ment dans les po&shy;ches pour con&shy;trô&shy;ler l&apos;infec&shy;tion et ré&shy;duire l&apos;in&shy;flam&shy;mation.
              Ces médi&shy;ca&shy;ments peuvent être sous forme de gel, de rin&shy;çage buc&shy;cal ou de pe&shy;ti&shy;tes pastil&shy;les in&shy;sérées dans la poche pa&shy;rodon&shy;tale.
            </p>
            <p className={classPStandard}>
              Lorsque les poches sont très profondes et que le traitement non chirurgical n&apos;est pas suffisant, une intervention chirurgicale peut être nécessaire. 
            </p>
        </PageSection>
        <PageSection subtitle='Greffes gingivales' delayBoolean={false} subtitleInview={sectionFiveInview}>
          <InView onChange={(inView, entry)=> setSectionFiveInview(inView)} triggerOnce={true} />
            <h3 className='text-base mobile:text-lg laptop:text-xl desktop:text-2xl font-bold text-main-theme tracking-wide mb-2.5 indent-2'>
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
              <legend className={`${tauri.className} text-center text-xs text-main-theme mt-1.5 italic`}><i>Haut : avant greffe / Bas : après greffe</i></legend>
            </div>
            
            <p className={classPStandard + " mt-5"}>
              Si vous souffrez de récession gingivale ou si vous avez des questions sur les greffes gingivales, <Link href="tel:+33467756811" className='hover:opacity-75 italic font-bold underline underline-offset-4'>n’hésitez pas à nous contacter</Link> pour une con&shy;sul&shy;ta&shy;tion person&shy;na&shy;lisée à Montpel&shy;lier et Castel&shy;nau-le-Lez.
            </p>
        </PageSection> */}
      </PageContainer>
    </>
  )
}

export default ParodontologieScreen
