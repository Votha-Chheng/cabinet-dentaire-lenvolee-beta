import ImageForModal from '@/components/shared/ImageForModal'
import { classUl, legendClass } from '@/datas/classNames'
import { tauri } from '@/fonts/tauri'
import React, { FC } from 'react'
import { FaCaretSquareRight } from 'react-icons/fa'

const Dentisterie: FC = () => {
  const classParoLi = "mb-2 pr-5 tablet:pr-8 text-base mobile:text-lg laptop:text-xl desktop:text-2xl tracking-wider text-justify leading-8 mobile:leading-8 laptop:leading-10 desktop:leading-10 text-main-theme laptop:indent-10 indent-8"

  const caretLiClass = 'absolute left-0 top-2 laptop:top-3 text-main-theme'
  
  return (
    <>
      <ul className={classUl + " mb-16"}>
        <li className='flex relative'>
          <FaCaretSquareRight size={20} className={caretLiClass} />
          <p className={classParoLi}>
            Aujourd&apos;hui, les évolutions tech&shy;niques et les théra&shy;peutiques mini invasives per&shy;mettent au patient de bénéficier d&apos;une meilleure santé globale. Grâce à ces évolutions, nous pou&shy;vons préserver les dents le plus longtemps possible sur l&apos;arcade et éviter ainsi de les enlever systéma&shy;tique&shy;ment. Les protocoles de collage ac&shy;tuels nous permet&shy;tent aussi désormais de re&shy;constituer les dents avec un déla&shy;bre&shy;ment mi&shy;nimal.
          </p> 
        </li>
        <li className='relative flex' >
          <FaCaretSquareRight size={20} className={caretLiClass}/>
          <p className={classParoLi}>
            L&apos;investissement régulier dans des sy&shy;stèmes de radio&shy;gra&shy;phie plus évo&shy;lués et moins irra&shy;diants per&shy;met aux pa&shy;tients d&apos;être ex&shy;po&shy;sé à des ra&shy;dia&shy;tions 90% plus fai&shy;ble qu&apos;avec un système de ra&shy;dio&shy;gra&shy;phie argen&shy;tique clas&shy;si&shy;que.
          </p>
        </li>
      </ul>
      <aside className='flex flex-col items-center'>
        <ImageForModal imgSrc='rayon.jpg' alt='Appareil de radiographie numérique pour les dents' sizeClass='w-[85%] h-[275px] tablet:w-[500px] tablet:h-[500px] border-main-theme'/>
        <small className={`${tauri.className} ${legendClass}`}>
          <em>Notre appareil de radiolographie numérique</em>
        </small>
      </aside>
    </>
  )
}

export default Dentisterie
