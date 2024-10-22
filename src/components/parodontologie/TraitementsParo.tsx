import React, { Dispatch, FC, SetStateAction, useState } from 'react'
import PageSection from '../layouts/PageSection'
import { classPHygiene, classPLi, classPStandard, classUl } from '@/datas/classNames'
import Image from 'next/image'
import { FaCaretSquareRight } from 'react-icons/fa'
import { tauri } from '@/fonts/tauri'
import { InView } from 'react-intersection-observer'

type TraitementsParoProps = {
  mounted: boolean
}

const TraitementsParo: FC<TraitementsParoProps> = ({mounted}) => {
  const [paroTwoInview, setParoTwoInview] = useState<boolean>(false)
  const [paroThreeInview, setParoThreeInview] = useState<boolean>(false)
  const [paroFourInview, setParoFourInview] = useState<boolean>(false)

  const classParoLi = "mb-2 pr-5 tablet:pr-8 text-base mobile:text-lg laptop:text-xl desktop:text-2xl tracking-wider text-justify leading-8 mobile:leading-8 laptop:leading-10 desktop:leading-10 text-main-theme laptop:indent-10 indent-8"

  const caretLiClass = 'absolute left-0 top-2 laptop:top-3 text-main-theme'

  return (
    <>
      <PageSection subtitle='évaluez votre capital gencive' delayBoolean={!mounted}>
        <div className='mb-8'>
          <p className={classPStandard}>
            Les maladies parodontales sont la prin&shy;ci&shy;pa&shy;le cause de chu&shy;te des dents chez 75% des adul&shy;tes. Dans la plu&shy;part des cas, il s&apos;agit d&apos;une in&shy;fec&shy;tion chro&shy;nique qui évo&shy;lue par pous&shy;sées suc&shy;cessi&shy;ves, sou&shy;vent sans que le ma&shy;lade ne s&apos;en aper&shy;çoi&shy;ve.
          </p>
          <p className={classPStandard}>
            L&apos;évolution d&apos;une maladie paro&shy;don&shy;tale n&apos;est pas iné&shy;luc&shy;ta&shy;ble. Dé&shy;tec&shy;tée à temps, elle peut être trai&shy;tée et les dents se&shy;ront con&shy;ser&shy;vées.
          </p>
        </div>
        <Image src="/images/traitement-paro.jpg" className='mx-auto' alt="L'évolution des maladies parodontiques." width={800} height={300} />
      </PageSection>

      <PageSection subtitle="COMMENT SAVOIR SI VOUS SOUFFREZ D'UNE PARODONTITE ?" subtitleInview={paroTwoInview} >
        <InView onChange={(inView, entry)=> setParoTwoInview(inView)} triggerOnce={true} />
        <p className={classPStandard + " font-bold"}>Avez-vous un ou plusieurs de ces signes ?</p>
        <ul className={classUl}>
          <li className='flex relative'>
            <FaCaretSquareRight size={20} className={caretLiClass} />
            <p className={classParoLi} >
              Votre gencive saigne lorsque vous vous bros&shy;sez les dents.
            </p>
          </li>
          <li className='flex relative'>
            <FaCaretSquareRight size={20} className={caretLiClass} />
            <p className={classParoLi}>Elle est rouge, enflée, sen&shy;si&shy;ble.</p> 
          </li>
          <li className='flex relative'>
            <FaCaretSquareRight size={20} className={caretLiClass} />
            <p className={classParoLi}>Elle se décolle ou se rétracte lais&shy;sant ap&shy;parai&shy;tre la ra&shy;ci&shy;ne des dents.</p> 
          </li>
          <li className='flex relative'>
              <FaCaretSquareRight size={20} className={caretLiClass} />
            <p className={classParoLi}>Les dents bougent, s&apos;écartent, ou chan&shy;gent de po&shy;si&shy;tion.</p> 
          </li>
          <li className='flex relative'>
              <FaCaretSquareRight size={20} className={caretLiClass} />
            <p className={classParoLi}>Du pus apparait entre la gen&shy;cive et la dent.</p> 
          </li>
          <li className='flex relative'>
              <FaCaretSquareRight size={20} className={caretLiClass} />
            <p className={classParoLi}>Vous avez une mauvaise haleine.</p> 
          </li>
          <li className='flex relative'>
              <FaCaretSquareRight size={20} className={caretLiClass} />
            <p className={classParoLi}>Vos prothèses (cour&shy;on&shy;nes ou ap&shy;pa&shy;reils) ne sem&shy;blent plus ajus&shy;tées.</p> 
          </li>
        </ul>	

      </PageSection>
      <PageSection subtitle="QU'EST-CE QU'UNE MALADIE PARODONTALE ?" subtitleInview={paroThreeInview}>
        <InView onChange={(inView, entry)=> setParoThreeInview(inView)} triggerOnce={true} />
        <p className={classPStandard}>
          Les maladies parodontales sont des <span className='font-bold'>ma&shy;ladies infec&shy;tieu&shy;ses d&apos;ori&shy;gi&shy;ne bac&shy;térien&shy;ne</span> qui tou&shy;chent les tis&shy;sus de sou&shy;tien de la dent (ap&shy;pe&shy;lés pa&shy;ro&shy;don&shy;te) <span className='font-bold'>la gen&shy;ci&shy;ve et l&apos;os al&shy;véo&shy;laire.</span>
        </p>
        <h3 className={`${tauri.className} mt-16 mb-5 text-center text-2xl text-main-theme underline underline-offset-4`}>
          <b>De la gingivite à la parodontite</b>
        </h3>
        <p className={classPStandard}>
          Toutes les formes cliniques d&apos;une mala&shy;die paro&shy;don&shy;tale sont infec&shy;tieuses. Cau&shy;sées par les bac&shy;té&shy;ries con&shy;ten&shy;ues dans la pla&shy;que den&shy;taire, que le bros&shy;sa&shy;ge doit éli&shy;mi&shy;ner. Si on n&apos;en&shy;lè&shy;ve pas la pla&shy;que den&shy;tai&shy;re elle dur&shy;cit et se trans&shy;for&shy;me en tar&shy;tre, dé&shy;pôt dur et ru&shy;gueux.
        </p>
        <p className={classPStandard}>
          Des produits toxiques éla&shy;bo&shy;rés par les bac&shy;té&shy;ries vont s&apos;at&shy;ta&shy;quer à la gen&shy;cive pro&shy;vo&shy;quant une in&shy;flam&shy;mation, une rou&shy;geur, voire un saigne&shy;ment au bros&shy;sa&shy;ge : <span className='font-bold'>la gingivite</span>. Dans cer&shy;tains cas, la gin&shy;gi&shy;vi&shy;te peut se trans&shy;for&shy;mer en <span className='font-bold'>pa&shy;ro&shy;don&shy;tite</span>, l&apos;os est alors at&shy;teint. <span className='font-bold'>La dent est bien moins te&shy;nue dans son al&shy;vé&shy;ole et à ter&shy;me elle va tomber.</span>
        </p>
        <Image src="/images/schema-paro-1.jpg" className='mx-auto' alt="Schéma représentant une gencive inflammée.." width={400} height={300} />
        <div className='flex flex-col mt-14 mb-20'>
          <small className={`${tauri.className} text-main-theme text-center text-xs`}><em>Les différents stades d’atteinte parodontale :</em></small>
          <Image src="/images/schema-paro-2.jpg" className='mx-auto' alt="Schéma représentant une gencive inflammée.." width={400} height={300} />
        </div>

        <h3 className={`${tauri.className} mt-16 mb-5 text-center text-2xl text-main-theme underline underline-offset-4`}>
          <b>Les facteurs favorisants</b>
        </h3>
        <p className={classPStandard}>
          Nous ne sommes pas tous égaux face à la mala&shy;die paro&shy;don&shy;tale. Cer&shy;tains facteurs vont fa&shy;vori&shy;ser son ap&shy;pari&shy;tion ou ag&shy;gra&shy;ver les symp&shy;tômes :
        </p>
        <ul className={classUl}>
          <li className='flex relative'>
            <div className='absolute top-2 laptop:top-3 text-main-theme'>
              <FaCaretSquareRight size={20} />
            </div>
            <p className={classParoLi}>Une prédisposition familiale.</p>
          </li>
          <li className='flex relative'>
            <div className='absolute  top-2 laptop:top-3 text-main-theme'>
              <FaCaretSquareRight size={20} />
            </div>
            <p className={classParoLi}>Si vous êtes stressé(e) vos dé&shy;fen&shy;ses im&shy;mu&shy;ni&shy;taires seront di&shy;minuées. </p> 
          </li>
          <li className='flex relative'>
            <div className='absolute  top-2 laptop:top-3 text-main-theme'>
              <FaCaretSquareRight size={20} />
            </div>
            <p className={classParoLi}>Les maladies générales affectant les ré&shy;ac&shy;tions de dé&shy;fen&shy;se im&shy;muni&shy;tai&shy;re.</p> 
          </li>
          <li className='flex relative'>
            <div className='absolute  top-2 laptop:top-3 text-main-theme'>
              <FaCaretSquareRight size={20} />
            </div>
            <p className={classParoLi}>Le tabac est un facteur très ag&shy;gra&shy;vant, il en&shy;traî&shy;ne des dé&shy;fauts de ci&shy;ca&shy;tri&shy;sation.</p> 
          </li>
          <li className='flex relative'>
            <div className='absolute  top-2 laptop:top-3 text-main-theme'>
              <FaCaretSquareRight size={20} />
            </div>
            <p className={classParoLi}>Le diabète qui dimi&shy;nue le système im&shy;muni&shy;taire.</p> 
          </li>
        </ul>	
      </PageSection>

      <PageSection subtitle="Bien traiter la maladie parodontale" subtitleInview={paroFourInview}>
        <InView onChange={(inView, entry)=> setParoFourInview(inView)} triggerOnce={true} />
        <h3 className={`${tauri.className} mt-16 mb-5 text-center text-2xl text-main-theme underline underline-offset-4`}>
          <b>Diagnostic</b>
        </h3>
        <p className={classPStandard}>
          Si votre praticien détecte une attein&shy;te de la gen&shy;ci&shy;ve en l&apos;exa&shy;mi&shy;nant, il va la son&shy;der avec un petit instru&shy;ment afin de con&shy;trô&shy;ler son at&shy;ta&shy;che à la sur&shy;fa&shy;ce de la dent.
        </p>
        <p className={classPStandard}>
          Avec un bilan radiographi&shy;que, il pour&shy;ra de plus éva&shy;luer la quan&shy;ti&shy;té d&apos;os qui a été dé&shy;truit par la ma&shy;la&shy;die. Dès lors, il con&shy;nai&shy;tra la na&shy;tu&shy;re pré&shy;ci&shy;se et l&apos;éten&shy;due de l&apos;in&shy;fec&shy;tion pour éta&shy;blir un trai&shy;te&shy;ment adap&shy;té pour cha&shy;que cas.
        </p>

        <h3 className={`${tauri.className} mt-16 mb-5 text-center text-2xl text-main-theme underline underline-offset-4`}>
          <b>Traitement indolore pratiqué</b>
        </h3>
        <p className={classPStandard}>
          Des mesures thérapeu&shy;tiques reposent sur la &laquo;dé&shy;conta&shy;mi&shy;na&shy;tion&raquo; des tissus infec&shy;tés. Super&shy;fi&shy;ciel en ce qui concerne la gin&shy;gi&shy;vi&shy;te, il sera plus profond que la paro&shy;don&shy;ti&shy;te, voire chi&shy;rur&shy;gi&shy;cal à un sta&shy;de plus avan&shy;cé pour ré&shy;gé&shy;nérer les tis&shy;sus dé&shy;truits par la ma&shy;la&shy;die. Un traite&shy;ment anti&shy;bioti&shy;que d&apos;ac&shy;com&shy;pagne&shy;ment s&apos;im&shy;pose le plus sou&shy;vent.
        </p>

        <div className='flex flex-col mt-14 mb-20'>
          <Image src="/images/avant-apres-paro.jpg" className='mx-auto border-main-theme border' alt="Schéma représentant une gencive inflammée.." width={600} height={300} />
          <small className={`${tauri.className} text-main-theme text-center text-xs mt-1`}><em>Avant/Après un traitement parodontal</em></small>
        </div>

        <h3 className={`${tauri.className} mt-16 mb-5 text-center text-2xl text-main-theme underline underline-offset-4`}>
          <b>Votre implication dans le traitement</b>
        </h3>
        <p className={classPStandard}>
          La réussite du traitement ini&shy;tié par votre den&shy;ti&shy;ste dé&shy;pend aus&shy;si de soins lo&shy;caux à faire à la mai&shy;son, avec un bros&shy;sage spé&shy;cial qui uti&shy;lise des pro&shy;duits spé&shy;ci&shy;fiques et des pro&shy;duits anti&shy;sep&shy;tiques adap&shy;tés.
        </p>
        <p className={classPStandard}>
          Les trai&shy;te&shy;ments paro&shy;don&shy;taux sont longs et du&shy;rent par&shy;fois plusieurs mois. Il faut de la pa&shy;tien&shy;ce et de la ri&shy;gueur car le p&shy;aro&shy;don&shy;te a be&shy;soin de temps pour se con&shy;so&shy;li&shy;der.
        </p>
        <div className='flex flex-col mt-14 mb-20'>
          <Image src="/images/paro-illustration.jpg" className='mx-auto' alt="Schéma représentant une gencive inflammée.." width={600} height={300} />
          <small className={`${tauri.className} text-main-theme text-center text-xs`}><em>Prendre soin des gencives à la maison</em></small>
        </div>
      </PageSection>
    </>
  )
}

export default TraitementsParo