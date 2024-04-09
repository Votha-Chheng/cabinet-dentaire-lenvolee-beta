import ImageForModal from '@/components/shared/ImageForModal'
import Image from 'next/image'
import React, { FC } from 'react'
import { FaCaretSquareRight } from 'react-icons/fa'

const Dentisterie: FC = () => {
  const classP = "px-1.5 mobile:px-5 text-base mobile:text-lg laptop:text-xl desktop:text-2xl tracking-wider text-justify leading-8 mobile:leading-8 laptop:leading-10 desktop:leading-10"
  return (
    <>
      <ul className="text-main-theme">
        <li className='flex px-2.5 py-5 tablet:p-8'>
          <div className='translate-y-2.5'>
            <FaCaretSquareRight size={20} />
          </div>
          <p className={classP}>
            Aujourd&apos;hui, les évolutions tech&shy;niques et les théra&shy;peutiques mini invasives per&shy;mettent au patient de bénéficier d&apos;une meilleure santé globale. Grâce à ces évolutions, nous pou&shy;vons préserver les dents le plus longtemps possible sur l&apos;arcade et éviter ainsi de les enlever systéma&shy;tique&shy;ment. Les protocoles de collage ac&shy;tuels nous permet&shy;tent aussi désormais de re&shy;constituer les dents avec un déla&shy;bre&shy;ment mi&shy;nimal.
          </p>
        </li>
        <li className='flex px-2.5 py-5 tablet:p-8' >
          <div className='translate-y-2.5'>
            <FaCaretSquareRight size={20} />
          </div>
          <p className={classP}>
            L&apos;investissement régulier dans des sy&shy;stèmes de radio&shy;gra&shy;phie plus évo&shy;lués et moins irra&shy;diants per&shy;met aux pa&shy;tients d&apos;être ex&shy;po&shy;sé à des ra&shy;dia&shy;tions 90% plus fai&shy;ble qu&apos;avec un système de ra&shy;dio&shy;gra&shy;phie argen&shy;tique clas&shy;si&shy;que.
          </p>
        </li>
      </ul>
      <aside className='flex flex-col items-center'>
        <ImageForModal imgSrc='rayon.jpg' alt='Appareil de radiographie numérique pour les dents' sizeClass='w-[85%] h-[275px] tablet:w-[500px] tablet:h-[500px] border-main-theme'/>
        <legend className='mb-16 text-xs tablet:text-base text-center tracking-wide text-main-theme pt-2.5'>
          Notre appareil de radiolographie numérique
        </legend>
      </aside>
    </>
  )
}

export default Dentisterie
