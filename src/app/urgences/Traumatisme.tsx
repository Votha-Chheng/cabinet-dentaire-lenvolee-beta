import React, { FC } from 'react'
import { FaCaretSquareRight } from 'react-icons/fa'

const Traumatisme: FC = () => {
  const classP = "px-1.5 mobile:px-5 text-base mobile:text-lg laptop:text-xl desktop:text-2xl tracking-wider text-justify leading-8 mobile:leading-8 laptop:leading-10 desktop:leading-10"
  const classLi = "flex px-2.5 py-5 tablet:p-8"
  const classIcon = "translate-y-1.5 tablet:translate-y-2.5"

  return (
    <ul className="text-main-theme leading-10">
      <li className={classLi}>
        <div className={classIcon}>
          <FaCaretSquareRight size={20} />
        </div>
        <p className={classP}>
          Prenez con&shy;tact im&shy;mé&shy;diate&shy;ment avec no&shy;tre équi&shy;pe ou, si nous ne sommes pas joignables, les urgences.
        </p>
      </li>
      <li className={classLi} >
        <div className={classIcon}>
          <FaCaretSquareRight size={20} />
        </div>
        <p className={classP}>
          <span className='font-semibold'>S&apos;il y a expulsion d&apos;une dent dé&shy;finitive :</span> le geste d&apos;ur&shy;gen&shy;ce con&shy;siste <span className='font-semibold'>à récupérer la dent sans la net&shy;toyer</span>, et à <span className='font-semibold'>la con&shy;ser&shy;ver dans du sérum phy&shy;siologique ou du lait (si&shy;non, conservez-la dans votre propre sa&shy;li&shy;ve).</span> La ré&shy;im&shy;plan&shy;tation, si elle est pos&shy;si&shy;ble, <span className='font-semibold'>devra se faire aussi rapi&shy;dement que possible.</span>
        </p>
      </li>
      <li className={classLi} >
        <div className={classIcon}>
          <FaCaretSquareRight size={20} />
        </div>
        <p className={classP}>
        <span className='font-semibold'>S&apos;il y a déplacement d&apos;une ou de plusieurs dents défi&shy;nitives</span> : le geste d&apos;ur&shy;gence consiste, à chaud, à les <span className='font-semibold'>repla&shy;cer cor&shy;rec&shy;tement avec la pres&shy;sion des doigts.</span> Prenez ensuite rendez-vous le plus rapidement possible avec un dentiste.
        </p>
      </li>
    </ul>
  )
}

export default Traumatisme
