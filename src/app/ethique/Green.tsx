import ImageForModal from '@/components/shared/ImageForModal'
import Image from 'next/image'
import React, { FC } from 'react'
import { FaCaretSquareRight } from 'react-icons/fa'

const Green: FC = () => {
  const classP = "px-1.5 mobile:px-5 text-base mobile:text-lg laptop:text-xl desktop:text-2xl tracking-wider text-justify mobile:leading-8 laptop:leading-10 desktop:leading-10"
  return (
    <>
      <p className='indent-5 tablet:indent-8 text-main-theme px-1.5 pt-5 mobile:px-5 text-base mobile:text-lg laptop:text-xl desktop:text-2xl tracking-wider text-justify leading-8 mobile:leading-8 laptop:leading-10 desktop:leading-10'>
        Les préocuppations actuelles liées à l&apos;envi&shy;ron&shy;ne&shy;ment et une pri&shy;se en compte de la san&shy;té du pa&shy;tient dans sa glo&shy;ba&shy;li&shy;té com&shy;men&shy;cent à pren&shy;dre de l&apos;am&shy;pleur dans la pra&shy;ti&shy;que du mé&shy;tier de den&shy;ti&shy;ste. C&apos;est dans cet&shy;te op&shy;ti&shy;que que s&apos;est dé&shy;ve&shy;lop&shy;pée le prin&shy;ci&shy;pe de <span className='font-semibold italic'>green den&shy;tistry</span> (ou <span className='font-semibold italic'>den&shy;tiste&shy;rie ver&shy;te)</span>.
      </p>
      <ImageForModal 
        imgSrc='green-dentisterie.jpg' 
        alt='Appareil de radiographie numérique pour les dents' 
        sizeClass=' border-main-theme w-[95%] h-[520px] mobile:w-[380px] mobile:h-[580px] tablet:w-[500px] tablet:h-[700px] mx-auto my-12'
      />
      <p className='indent-5 tablet:indent-8 text-main-theme px-1.5 pt-5 mobile:px-5 text-base mobile:text-lg laptop:text-xl desktop:text-2xl tracking-wider text-justify leading-8 mobile:leading-8 laptop:leading-10 desktop:leading-10'>
        Cette démarche se traduit  par une prise de conscience dans notre pratique quo&shy;ti&shy;dien&shy;ne de l&apos;impact éco&shy;lo&shy;gi&shy;que de no&shy;tre activi&shy;té, que ce soit au ni&shy;veau de la con&shy;som&shy;mation (eau, éner&shy;gie et au&shy;tres ressources), des dé&shy;cisions d&apos;achat, du choix des pro&shy;thé&shy;sistes, etc...
      </p>
      <ul className="text-main-theme">
        <li className='flex px-2.5 py-5 tablet:p-8'>
          <div className='translate-y-2.5'>
            <FaCaretSquareRight size={20} />
          </div>
          <p className={classP}>
            Ainsi, nous faisons notre maximum pour choisir des pro&shy;duits éco-con&shy;çus, sans per&shy;tur&shy;ba&shy;teur en&shy;do&shy;cri&shy;nien (tel que le bis&shy;phénol A par exemple) et fa&shy;bri&shy;qués en France.
          </p>
        </li>
        <li className='flex px-2.5 py-5 tablet:p-8' >
          <div className='translate-y-2.5'>
            <FaCaretSquareRight size={20} />
          </div>
          <p className={classP}>
            &Eacute;tant situé à 10 mètres de l&apos;ar&shy;rêt de tram <em>Char&shy;les de Gaul&shy;le</em> (ligne 2), nous in&shy;ci&shy;tons nos pa&shy;tients à uti&shy;li&shy;ser les trans&shy;ports en com&shy;mun pour se ren&shy;dre à leur ren&shy;dez-vous.
          </p>
        </li>
        <li className='flex px-2.5 py-5 tablet:p-8' >
          <div className='translate-y-2.5'>
            <FaCaretSquareRight size={20} />
          </div>
          <p className="px-1.5 mobile:px-5 text-base mobile:text-lg laptop:text-xl desktop:text-2xl tracking-wider text-justify leading-8 desktop:leading-10">
            Nos prothésistes dentaires sont tous si&shy;tués à moins de 20 km du ca&shy;bi&shy;net.
          </p>
        </li>
      </ul>
    </>
  )
}

export default Green
