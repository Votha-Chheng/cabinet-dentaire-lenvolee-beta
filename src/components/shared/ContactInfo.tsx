import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'

type ContactInfoProps = {
  menuTop?: boolean
}

const ContactInfo: FC<ContactInfoProps> = ({menuTop=false}) => {
  
  return (
    <article className='flex items-center gap-2 tracking-wide'>
      <div className={`${menuTop ? "h-[80px] gap-2":"gap-4"} flex items-center tracking-wider`}>
        <Image src="/images/phone-mail.svg" width={40} height={40} alt="Contact et e-mail du cabinet l'Envolée"/>
        <div className={`${menuTop ? "border-l-2 border-buff":"" } flex flex-col gap-y-0.5 px-2 min-w-40`}>
          <Link href="tel:+33467756811" className={menuTop ? 'text-xs': "text-base"} >
            04 67 75 68 11
          </Link>
          <Link href="/demande-rdv" className={`${menuTop ? 'text-xs w-28': "text-base"} hover:underline hover:underline-offset-2 hover:scale-105 bg-buff rounded-md text-main-theme px-2 py-0.5 font-bold  text-center tracking-normal`}>
            Demander un RDV par e-mail
          </Link>
          {/* <p><span className='font-bold underline underline-offset-2'>Ouverture du secrétariat</span> <br/> Lundi - Jeudi : 9h00-19h00 <br/>Vendredi : 9h00-16h00</p> */}
          {/* <Link href="mailto:cabinetdentaire.lenvolee@gmail.com">
            cabinetdentaire.lenvolee@gmail.com
          </Link> */}
        </div>
      </div>
    </article>
  )
}

export default ContactInfo