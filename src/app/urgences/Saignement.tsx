import ContactButton from '@/components/shared/ContactButton'
import { caretLiClass, classParoLi, classUl } from '@/datas/classNames'
import React, { FC } from 'react'
import { FaCaretSquareRight } from 'react-icons/fa'

const Saignement: FC = () => {
  
  return (
    <>
      <ul className={classUl}>
        <li className="relative flex">
          <FaCaretSquareRight size={20} className={caretLiClass} />
          <p className={classParoLi}>
            Munissez-vous d&apos;une com&shy;pres&shy;se sté&shy;rile (ou à défaut d&apos;un tissu propre). Placez-la <span className="font-semibold">entre le point de saigne&shy;ment et l&apos;arcade op&shy;po&shy;sée</span>, puis <span className="font-semibold">serrez fort pen&shy;dant une di&shy;zaine de minutes</span>.
          </p>
        </li>
        <li className="relative flex" >
            <FaCaretSquareRight size={20} className={caretLiClass} />
          <p className={classParoLi}>
            Préférez la position assi&shy;se.
          </p>
        </li>
        <li className="relative flex" >
            <FaCaretSquareRight size={20} className={caretLiClass} />
          <p className={classParoLi}>
            Préférez une alimentation froi&shy;de.
          </p>
        </li>
        <li className="relative flex" >
            <FaCaretSquareRight size={20} className={caretLiClass} />
          <p className={classParoLi}>
            En cas de persistance, <span className="font-semibold">con&shy;tactez tout de suite no&shy;tre équi&shy;pe, ou à défaut, le service de garde ou d&apos;ur&shy;gence.</span>
          </p>
        </li>
      </ul>
      <ContactButton/>
    </>
  )
}

export default Saignement
