import React, { FC } from 'react'
import { FaCaretSquareRight } from 'react-icons/fa'

const Saignement: FC = () => {
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
          Munissez-vous d&apos;une com&shy;pres&shy;se sté&shy;rile (ou à défaut d&apos;un tissu propre). Placez-la <span className="font-semibold">entre le point de saigne&shy;ment et l&apos;arcade op&shy;po&shy;sée</span>, puis <span className="font-semibold">serrez fort pen&shy;dant une di&shy;zaine de minutes</span>.
        </p>
      </li>
      <li className={classLi} >
        <div className={classIcon}>
          <FaCaretSquareRight size={20} />
        </div>
        <p className={classP}>
          Préférez la position assi&shy;se.
        </p>
      </li>
      <li className={classLi} >
        <div className={classIcon}>
          <FaCaretSquareRight size={20} />
        </div>
        <p className={classP}>
          Préférez une alimentation froi&shy;de.
        </p>
      </li>
      <p className={classP + " indent-5 tablet:indent-10"}>
        En cas de persistance, <span className="font-semibold">con&shy;tactez tout de suite no&shy;tre équi&shy;pe, ou à défaut, le service de garde ou d&apos;ur&shy;gence.</span>
      </p>
    </ul>
  )
}

export default Saignement
