import React, { FC } from 'react'
import { FaRegClock, FaSquareParking, FaUserDoctor } from 'react-icons/fa6'
import Logo from './Logo'
import Image from 'next/image'
import Link from 'next/link'
import LineThrough from './LineThrough'
import { BiHandicap } from "react-icons/bi";
import { TbLocationFilled } from 'react-icons/tb'
import { TbDental } from "react-icons/tb"
import { PiTramFill } from 'react-icons/pi'
import { GoLaw } from 'react-icons/go'
import HorairesInfo from './HorairesInfo'
import ContactInfo from './ContactInfo'
import AddressInfo from './AddressInfo'
import ParkingInfo from './ParkingInfo'

const Footer: FC = () => {

  return (
    <footer className='bg-main-theme text-buff flex flex-col w-full'>
      <LineThrough bgColor='bg-buff' />
      <section className="flex w-full">
        <article className="flex flex-col w-full laptop:w-[75%] items-center pt-8">
          <Logo/>
          <LineThrough classComplement='mt-8' bgColor='bg-buff'/>
          <aside className="self-start flex flex-col laptop:flex-row w-full pt-5 tablet:pt-0">
            <div className="px-5 w-full space-y-5">
              <HorairesInfo/>
              <ContactInfo/>
              <AddressInfo/>
              <ParkingInfo/>
              <div className="flex pt-1.5 pb-3 items-center gap-6 tracking-wider">
                <PiTramFill size={40} />
                <span>Tram Ligne 2 - Arrêt Charles de Gaulle</span>
              </div>
            </div>

            <LineThrough bgColor='bg-buff' height='100%' width='1px' classComplement='hidden laptop:block' />

            <div className="w-full px-5 pt-2 pb-5 tablet:pb-0">
              <div className="flex py-3 items-center gap-5 tracking-wider">
                <Image src="/images/oncd.svg" width={40} height={40} alt="logo ONCD"/>
                <Link href="http://www.ordre-chirurgiens-dentistes.fr/" target="_blank" rel="noreferrer">
                  Site de l&apos;ONCD (<em>Ordre national des chirurgiens dentistes</em>)
                </Link>
              </div>
              <div className="flex py-3 items-center gap-5 tracking-wider">
                <TbDental size={40} />
                <p>
                  <Link href="http://www.ordre-chirurgiens-dentistes.fr/grand-public.html" target="_blank" rel="noreferrer">
                    Trouver un dentiste près de chez vous
                  </Link>
                </p>
                
              </div>
              <div className="flex py-3 items-center gap-5 tracking-wider">
                <FaUserDoctor size={40} />
                <a href="https://www.conseil-national.medecin.fr/annuaire" target="_blank" rel="noreferrer">
                  Trouver un médecin près de chez vous
                </a>
              </div>
              <div className="flex py-3 items-center gap-5 tracking-wider">
                <BiHandicap size={40} />
                <p>
                  Le cabinet est accessible aux personnes à mobilité réduite (PMR).
                </p>
              </div>
              <div className="flex py-3 items-center gap-5 tracking-wider">
                <GoLaw size={40} />
                <Link href="/mentions-legales">
                  Mentions légales
                </Link>
              </div>
            </div>  
          </aside>
        </article>
        <LineThrough height='100%' width='2px' bgColor='bg-buff' classComplement='mt-0 hidden laptop:block' />  

        <iframe 
          className='w-[25%] hidden laptop:block'
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.9507945836594!2d3.894712815722399!3d43.62838306205268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b15d67b2934f89%3A0x93197d4f7d8e15e4!2sDr%20Sylvie%20MA%20-%20Francin%20L%20envol%C3%A9e-cabinet%20dentaire!5e0!3m2!1sfr!2sfr!4v1645314375693!5m2!1sfr!2sfr" 
          allowFullScreen={true} 
          loading="lazy"
          title="Emplacement du cabinet dentaire l'Envolée sur Google Maps"
        />
      </section>
      <LineThrough bgColor='bg-buff'/>
      <p className="text-center tracking-wider py-2.5">
        &copy; <em>Cabinet dentaire L&apos;Envolée</em> - Mai 2024 | Site conçu par <Link href="https://github.com/Votha-Chheng" target="_blank" rel="noreferrer">Votha Chheng</Link>
      </p>     
    </footer>
  )
}

export default Footer
