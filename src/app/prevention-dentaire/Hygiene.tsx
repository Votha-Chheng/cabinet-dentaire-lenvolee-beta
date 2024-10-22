import { classPStandard } from '@/datas/classNames'
import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'

const Hygiene: FC = () => {
  return (
    <>
      <p className={classPStandard}>
        Pour assurer la pérennité de nos traitements il est essentiel d&apos;enseigner les bons gestes d&apos;hy&shy;giène buc&shy;co-den&shy;taire que vous pour&shy;rez réa&shy;lis&shy;er chez vous. Au cabinet <span className='font-bold'>une sal&shy;le est dé&shy;diée à l&apos;en&shy;seigne&shy;ment des techni&shy;ques d&apos;hy&shy;giène buc&shy;co-den&shy;tai&shy;re et des con&shy;seils sur le ma&shy;tériel vous sera four&shy;ni</span>. Ces techni&shy;ques sont es&shy;sen&shy;tiel&shy;les à maî&shy;tri&shy;ser lors d&apos;at&shy;tein&shy;te du sys&shy;tème d&apos;at&shy;tache de la dent ap&shy;pe&shy;lée <Link href="/parodontologie" className='underline hover:opacity-75'><em className='font-bold'>ma&shy;la&shy;die pa&shy;ro&shy;don&shy;tale</em></Link>.
      </p>
      <Image src="/images/brosses-curaprox.jpg" alt="Appareil de radiographie numérique pour les dents" width={500} height={500} className='my-10 border border-main-theme mx-auto p-2' />
    </>
  )
}

export default Hygiene
