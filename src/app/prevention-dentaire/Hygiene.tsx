import Image from 'next/image'
import React, { FC } from 'react'

const Hygiene: FC = () => {
  const classP = "indent-8 laptop:indent-10 text-main-theme px-1.5 mobile:px-5 text-base mobile:text-lg laptop:text-xl desktop:text-2xl tracking-wider text-justify leading-8 mobile:leading-8 laptop:leading-10 desktop:leading-10"

  return (
    <>
      <p className={classP}>
        Pour assurer la pérennité de nos traitements il est essentiel d&apos;enseigner les bons gestes d&apos;hy&shy;giène buc&shy;co-den&shy;taire que vous pour&shy;rez réa&shy;lis&shy;er chez vous. Au cabinet <span className='font-bold'>une sal&shy;le est dé&shy;diée à l&apos;en&shy;seigne&shy;ment des techni&shy;ques d&apos;hy&shy;giène buc&shy;co-den&shy;tai&shy;re et des con&shy;seils sur le ma&shy;tériel vous sera four&shy;ni</span>. Ces techni&shy;ques sont es&shy;sen&shy;tiel&shy;les à maî&shy;tri&shy;ser lors d&apos;at&shy;tein&shy;te du sys&shy;tème d&apos;at&shy;tache de la dent ap&shy;pe&shy;lée <em className='font-bold'>ma&shy;la&shy;die pa&shy;ro&shy;don&shy;tale</em>.
      </p>
      <Image src="/images/brosses-curaprox.jpg" alt="Appareil de radiographie numérique pour les dents" width={500} height={500} className='my-10 border border-main-theme mx-auto' />
    </>
  )
}

export default Hygiene
