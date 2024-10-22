import ContactButton from '@/components/shared/ContactButton'
import { classPStandard } from '@/datas/classNames'
import { useWindowSize } from '@uidotdev/usehooks'
import Link from 'next/link'
import React, { FC } from 'react'

const Garde: FC = () => {
  const {width} = useWindowSize()

  return (
    <>
      <p className={classPStandard}>
        <span className='font-semibold'>Un service de garde est organi&shy;sé les di&shy;manches et jours fé&shy;riés</span> par le Conseil de l&apos;Ordre Dé&shy;parte&shy;men&shy;tal des Chi&shy;rur&shy;giens-Den&shy;ti&shy;stes.
        Vous trou&shy;ve&shy;rez les co&shy;ordon&shy;nées du chi&shy;rurgien-den&shy;tiste de gar&shy;de <span className='font-semibold'>dans vo&shy;tre quo&shy;ti&shy;dien ré&shy;gional ou en té&shy;lé&shy;pho&shy;nant au com&shy;mis&shy;sa&shy;riat/gen&shy;dar&shy;me&shy;rie de vo&shy;tre ville, ou bien en&shy;core au ser&shy;vi&shy;ce d&apos;ur&shy;gen&shy;ce du 15.</span>
      </p>
      <p className={classPStandard}>
        Vous pouvez également appeler ou vous ren&shy;dre au service des Ur&shy;gen&shy;ces du CHU de Mont&shy;pellier au <Link href="https://www.chu-montpellier.fr/fr/a-propos-du-chu/decouvrir/etablissements/gui-de-chauliac" target="_blank" rel="noopener noreferrer" className='underline font-semibold italic'>Ser&shy;vi&shy;ce de Chi&shy;rur&shy;gie Maxil&shy;lo-Fa&shy;ci&shy;a&shy;le/Sto&shy;mato&shy;lo&shy;gie - Hô&shy;pi&shy;tal Gui de Chau&shy;liac</Link>.
      </p>
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11551.667709015814!2d3.859863130909612!3d43.62908793736093!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6e2e282718d7d408!2sChirurgie%20maxillo-faciale%20CHU%20Montpellier!5e0!3m2!1sfr!2sfr!4v1642327613410!5m2!1sfr!2sfr" 
        width={width && width<420 ? 275 : 360} 
        height="360" 
        allowFullScreen={true} 
        loading="lazy"
        title="Emplacement sur Google Maps du Service de Chirurgie Maxillo-Faciale/Sto­matolo­gie à l'hôpital Gui de Chau­liac"
        className='mx-auto my-10 border border-main-theme'
      /> 
      <ContactButton/>
    </>
  )
}

export default Garde
