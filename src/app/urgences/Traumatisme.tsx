import ContactButton from '@/components/shared/ContactButton'
import { classUl } from '@/datas/classNames'
import React, { FC } from 'react'
import { FaCaretSquareRight } from 'react-icons/fa'

const Traumatisme: FC = () => {
  const classParoLi = "mb-2 pr-5 tablet:pr-8 text-base mobile:text-lg laptop:text-xl desktop:text-2xl tracking-wider text-justify leading-8 mobile:leading-8 laptop:leading-10 desktop:leading-10 text-main-theme laptop:indent-10 indent-8"

  const caretLiClass = 'absolute left-0 top-2 laptop:top-3 text-main-theme'
  return (
    <>
      <ul className={classUl}>
        <li className="relative flex">
          <FaCaretSquareRight size={20} className={caretLiClass} />
          <p className={classParoLi}>
            Prenez con&shy;tact im&shy;mé&shy;diate&shy;ment avec no&shy;tre équi&shy;pe ou, si nous ne som&shy;mes pas joigna&shy;bles, les ur&shy;gen&shy;ces.
          </p>
        </li>
        <li className="relative flex" >
          <FaCaretSquareRight size={20} className={caretLiClass} />
          <p className={classParoLi}>
            <span className='font-semibold'>S&apos;il y a ex&shy;pul&shy;sion d&apos;une dent dé&shy;finitive :</span> le geste d&apos;ur&shy;gen&shy;ce con&shy;siste <span className='font-semibold'>à récupérer la dent sans la net&shy;toyer</span>, et à <span className='font-semibold'>la con&shy;ser&shy;ver dans du sérum phy&shy;siolo&shy;gique ou du lait (si&shy;non, conservez-la dans votre propre sa&shy;li&shy;ve).</span> La ré&shy;im&shy;plan&shy;tation, si elle est pos&shy;si&shy;ble, <span className='font-semibold'>devra se fai&shy;re aussi rapi&shy;dement que pos&shy;si&shy;ble.</span>
          </p>
        </li>
        <li className="relative flex" >
          <FaCaretSquareRight size={20} className={caretLiClass} />
          <p className={classParoLi}>
            <span className='font-semibold'>S&apos;il y a déplacement d&apos;une ou de plusieurs dents défi&shy;nitives</span> : le geste d&apos;ur&shy;gence consiste, à chaud, à les <span className='font-semibold'>repla&shy;cer cor&shy;rec&shy;te&shy;ment avec la pres&shy;sion des doigts.</span> Pre&shy;nez en&shy;suite ren&shy;dez-vous le plus ra&shy;pide&shy;ment pos&shy;sible avec un den&shy;tiste.
          </p>
        </li>
      </ul>
      <ContactButton/>
    </>
  )
}

export default Traumatisme
