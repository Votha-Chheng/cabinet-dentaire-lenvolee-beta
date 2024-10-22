import { caretLiClass, classParoLi, classPStandard, classUl } from '@/datas/classNames'
import React, { FC } from 'react'
import { FaCaretSquareRight } from 'react-icons/fa'

const Protocole: FC = () => {
  const classP = "text-main-theme px-1.5 mobile:px-5 text-base mobile:text-lg laptop:text-xl desktop:text-2xl tracking-wider text-justify leading-8 mobile:leading-8 laptop:leading-10 desktop:leading-10"
  const classLi = "flex px-2.5 py-5 tablet:p-8"
  const classIcon = "translate-y-1.5 tablet:translate-y-2.5"

  return (
    <>
      <p className={classPStandard}>
        Même si le protocole d&apos;accueil lié au COVID dans les lieux mé&shy;di&shy;caux n&apos;est plus of&shy;ficiel&shy;le&shy;ment en vi&shy;gueur, quel&shy;ques bons ré&shy;flexes sont à garder, en plus d&apos;au&shy;tres re&shy;com&shy;man&shy;da&shy;tions.
      </p>
      <p className='text-main-theme italic underline underline-offset-4 px-5 tablet:px-8 pt-8 pb-2.5 text-base mobile:text-lg laptop:text-xl desktop:text-2xl tracking-wider text-justify leading-10'>
        Le jour de votre rendez-vous :
      </p>
      <ul className={classUl}>
        <li className="relative flex">
          <FaCaretSquareRight size={20} className={caretLiClass} />
          <p className={classParoLi}>
          <span className='font-semibold'>Il est fortement re&shy;com&shy;man&shy;dé de vous la&shy;ver les dents</span> juste avant de ve&shy;nir à votre con&shy;sul&shy;ta&shy;tion.
          </p>
        </li>
        <li className="relative flex">
          <FaCaretSquareRight size={20} className={caretLiClass} />
          <p className={classParoLi}>
            Si vous êtes ma&shy;la&shy;de ou en&shy;rhu&shy;mé, ou que vous tous&shy;sez beau&shy;coup, <span className='font-semibold'>il est for&shy;te&shy;ment re&shy;com&shy;man&shy;dé de por&shy;ter un masque chi&shy;rur&shy;gi&shy;cal.</span>
          </p>
        </li>
        <li className="relative flex" >
            <FaCaretSquareRight size={20} className={caretLiClass} />
          <p className={classParoLi}>
            Dans la mesure du possi­ble, ve&shy;nez non ac&shy;com&shy;pa&shy;gné.
          </p>
        </li>
        <li className="relative flex" >
            <FaCaretSquareRight size={20} className={caretLiClass} />
          <p className={classParoLi}>
            Toussez ou éter&shy;nuez sur le creux à l&apos;ar&shy;ri&shy;ère de vo&shy;tre cou&shy;de.
          </p>
        </li>
        <li className="relative flex" >
            <FaCaretSquareRight size={20} className={caretLiClass} />
          <p className={classParoLi}>
            Aucun animal de compa&shy;gnie ne sera ad&shy;mis à l&apos;in&shy;té&shy;rieur du ca&shy;bi&shy;net.
          </p>
        </li>
      </ul>
    </>
  )
}

export default Protocole
