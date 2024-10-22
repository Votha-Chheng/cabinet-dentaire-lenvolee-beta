import { classPStandard, classUl, legendClass } from '@/datas/classNames'
import { tauri } from '@/fonts/tauri'
import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'
import { FaCaretSquareRight } from 'react-icons/fa'

const Conseils: FC = () => {
  const classParoLi = "mb-2 pr-5 tablet:pr-8 text-base mobile:text-lg laptop:text-xl desktop:text-2xl tracking-wider text-justify leading-8 mobile:leading-8 laptop:leading-10 desktop:leading-10 text-main-theme laptop:indent-10 indent-8"

  const caretLiClass = 'absolute left-0 top-2 laptop:top-3 text-main-theme'
  
  return (
    <ul className={classUl}>
      <li className="flex relative">
        <FaCaretSquareRight size={20} className={caretLiClass} />
        <p className={classParoLi}>
          Pour les enfants et les jeunes de 3 à 24 ans, pen&shy;sez au pro&shy;gram&shy;me &ldquo;M&apos;T DENTS&rdquo; : c&apos;est un exa&shy;men buc&shy;co-den&shy;taire com&shy;plet gratuit (vous n&apos;avez pas à avancez de frais) disponible tous les 3 ans.
        </p>
      </li>
      <p className={classPStandard + " border-buff border-dashed border-4 p-5 mt-5 tablet:mt-12 mb-8 tablet:mb-20"}>
        <span className="font-semibold italic">Lors de votre prise de rendez-vous, veuillez in&shy;di&shy;quer ce motif. Mu&shy;nis&shy;sez-vous du for&shy;mu&shy;lai&shy;re &ldquo;M&apos;T DENTS&rdquo; dispo&shy;ni&shy;ble votre compte Ameli. Pour plus de dé&shy;tails, ren&shy;dez-vous sur le si&shy;te <Link href="https://www.ameli.fr/assure/sante/themes/carie-dentaire/mt-dents" className='underline underline-offset-4' target="_blank" rel="noopener noreferrer">ameli.fr</Link>.</span>
      </p>
      <li className="flex relative" >
        <FaCaretSquareRight size={20} className={caretLiClass} />
        <p className={classParoLi}>
          Brossez-vous les dents au moins 2 fois par jour en par&shy;tant de la gen&shy;ci&shy;ve vers la dent. <span className="font-semibold">Tou&shy;tes les fa&shy;ces de la dent doi&shy;vent être bros&shy;sées</span>. 
        </p>
      </li>
      <li className="flex relative" >
        <FaCaretSquareRight size={20} className={caretLiClass} />
        <p className={classParoLi}>
          En cas de gencives sen&shy;si&shy;bles, <span className="font-semibold">il est pré&shy;fé&shy;ra&shy;ble d&apos;uti&shy;li&shy;ser des bros&shy;ses à dents sou&shy;ples</span>. 
        </p>
      </li>
      <li className="flex relative" >
        <FaCaretSquareRight size={20} className={caretLiClass} />
        <div>
          <p className={classParoLi}>
            <span className="font-semibold">Complétez votre bros&shy;sa&shy;ge avec le pas&shy;sage d&apos;un fil den&shy;tai&shy;re</span> afin d&apos;éli&shy;mi&shy;ner la pla&shy;que den&shy;tai&shy;re rési&shy;duel&shy;le dans les espaces inter&shy;dentaires. Cepen&shy;dant, <span className="font-semibold">le fil dentaire doit être manipulé avec prudence de manière à ne pas léser les gencives.</span>
          </p>
          <p className={classParoLi}>
            Si les espaces in&shy;ter&shy;den&shy;tai&shy;res sont lar&shy;ges, ou alors en cas de pro&shy;blè&shy;mes de gen&shy;ci&shy;ves ou bien lors d&apos;un traitement d&apos;or&shy;tho&shy;don&shy;tie, <span className="font-semibold">l&apos;uti&shy;li&shy;sa&shy;tion de bros&shy;set&shy;tes in&shy;ter&shy;den&shy;tai&shy;res est pré&shy;co&shy;ni&shy;sée.</span>
          </p>
        </div>
      </li>
      <aside className='flex flex-col mb-12 tablet:mb-16'>
        <Image src="/images/brossettes.jpg" alt="Exemple de brossettes de marque Curaprox®" width={500} height={300} className='border border-main-theme mx-auto mt-10' />
        <legend className={`${tauri.className} ${legendClass}`}>
          Exemple de brossettes de marque Curaprox®
        </legend>
      </aside>
      <li className="relative flex" >
        <FaCaretSquareRight size={20} className={caretLiClass} />
        <p className={classParoLi}>
        <span className="font-semibold">Ne laissez pas le tartre s&apos;ac&shy;cu&shy;mu&shy;ler sur vos dents.</span> Un dé&shy;tar&shy;tra&shy;ge chez le den&shy;tiste est con&shy;seillé tous les ans. <span className="font-semibold">Il est impossible d&apos;en&shy;lever le tar&shy;tre avec une bros&shy;se à dent.</span>
        </p>
      </li>
    </ul>
  )
}

export default Conseils
