import { classPStandard, classUl } from '@/datas/classNames'
import { useWindowSize } from '@uidotdev/usehooks'
import React, { FC } from 'react'
import { FaCaretSquareRight } from 'react-icons/fa'

const Acces:FC = () => {

  const {width} = useWindowSize()

  const classParoLi = "mb-2 pr-5 tablet:pr-8 text-base mobile:text-lg laptop:text-xl desktop:text-2xl tracking-wider text-justify leading-8 mobile:leading-8 laptop:leading-10 desktop:leading-10 text-main-theme laptop:indent-10 indent-8"

  const caretLiClass = 'absolute left-0 top-2 laptop:top-3 text-main-theme'

  return (
    <>
      <p className={classPStandard}>
        Le cabinet se situe dans <span className='font-semibold'>la résidence L&apos;Envolée.</span> L&apos;entrée de la ré&shy;si&shy;den&shy;ce se trou&shy;ve <span className='font-semibold'>à moins de 10 mè&shy;tres en fac&shy;e de l&apos;ar&shy;rêt de tram&shy;way Charles de Gaulle.</span> Em&shy;prun&shy;tez le por&shy;tail de droi&shy;te (inutile de sonner), puis prenez la pre&shy;mière por&shy;te à votre droite en arrivant.
      </p>
      <p className='italic underline underline-offset-4 px-5 tablet:px-8 pt-8 pb-2.5 text-base mobile:text-lg laptop:text-xl desktop:text-2xl tracking-wider text-justify leading-10 text-main-theme'>
        Transport en commun :
      </p>
      <ul className={classUl}>
        <li className="relative flex">
          <FaCaretSquareRight size={20} className={caretLiClass} />
          <p className={classParoLi}>
            Par le tramway, arrêt Char&shy;les de Gaul&shy;le <span className='font-semibold'>ligne <span className='bg-[#ef7d00] rounded-lg rounded-se-none text-white px-2.5'>2</span></span>.
          </p>
        </li>
        <li className="relative flex">
          <FaCaretSquareRight size={20} className={caretLiClass} />
          <p className={classParoLi}>
            Par le bus, arrêt Char&shy;les de Gaulle pour les <span className='font-semibold'>li&shy;gnes <span className='bg-[#c00e0e] text-white rounded-full px-1'>15</span>, <span className='bg-[#00aae8] text-white rounded-full px-1'>16</span>, <span className='bg-[#174195] text-white rounded-lg px-1'>35</span>, <span className='bg-[#e00811] text-white rounded-lg px-1'>36</span> et <span className='bg-[#73b959] text-white rounded-lg px-1'>41</span></span>.
          </p>
        </li>
      </ul>
      <p className='italic underline underline-offset-4 px-5 tablet:px-8 pt-8 pb-2.5 text-base mobile:text-lg laptop:text-xl desktop:text-2xl tracking-wider text-justify leading-10 text-main-theme mt-5'>
        En voiture :
      </p>
      <ul className={classUl}>
        <li className="relative flex">
          <FaCaretSquareRight size={20} className={caretLiClass} />
          <p className={classParoLi}>
            Le Parking TAM souterrain (CAP CONCORDE) est si&shy;tué dans la ré&shy;si&shy;den&shy;ce du Pr&shy;do, au ni&shy;veau de l&apos;en&shy;sei&shy;gne Krys, <span className='font-semibold'>rue du Pra&shy;do</span>. <span className='font-semibold'>Sui&shy;vez le pan&shy;neau &quot;Par&shy;king TAM&quot;.</span>
          </p>
        </li>
      </ul>
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d855.77866373503!2d3.8968055861691653!3d43.62890911296943!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b6af4357c22289%3A0x14583ec9a36522c6!2sOpticien%20Krys%20Castelnau-le-Lez%20-%20Jean%20Jaur%C3%A8s!5e1!3m2!1sfr!2sfr!4v1642636290379!5m2!1sfr!2sfr" 
        width={width && width<420 ? 275 : 360} 
        height="300" 
        allowFullScreen={true} 
        loading="lazy"
        className='border-buff border-2 mt-5 mb-24 mx-auto'
        title="Emplacement sur Google Maps du Parking souterrain TAM situé rue du Prado"
      />
      <ul className={classUl}>
        <li className="relative flex">
          <FaCaretSquareRight size={20} className={caretLiClass} />
          <p className={classParoLi}>
            Parking Place Charles de Gaulle (gratuit 2h) devant la boulangerie <span className='italic font-bold'>Ribeiro</span>, puis marcher en direction de l&apos;arrêt de tram Charles de Gaulle.
          </p>
        </li>
      </ul>
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d880.8677997203906!2d3.8972128292533563!3d43.628027969432935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdb79ae6e7ca5afbe!2zNDPCsDM3JzQwLjkiTiAzwrA1Myc1MS45IkU!5e1!3m2!1sfr!2sfr!4v1642635452320!5m2!1sfr!2sfr" 
        width={width && width<420 ? 275 : 360}
        height="300" 
        allowFullScreen={true}
        loading="lazy"
        className='border-buff border-2 mt-5 mb-24 mx-auto'
        title="Emplacement sur Google Maps du Parking Place Charles de Gaulle"
      />
    </>
  )
}

export default Acces
