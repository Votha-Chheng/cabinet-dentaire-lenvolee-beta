import RDVForm from '@/components/demander-rdv/RDVForm'
import PageContainer from '@/components/layouts/PageContainer'
import PageSection from '@/components/layouts/PageSection'
import PageHeader from '@/components/shared/PageHeader'
import { classPStandard } from '@/datas/classNames'
import Link from 'next/link'
import React from 'react'

const DemandeRDVPage = () => {
  return (
    <>
      <PageHeader img='email-cover.jpg' title='Demander un RDV'/>
      <PageContainer>
        <PageSection subtitle="Solliciter un rdv via notre site" delayBoolean={true}>
          <p className={classPStandard}>
            Vous avez la possibilité de solliciter un rendez-vous médical en rem&shy;plis&shy;sant soigneu&shy;se&shy;ment tou&shy;tes les informa&shy;tions du for&shy;mu&shy;laire ci-dessous. La confir&shy;ma&shy;tion du rendez-vous et la suite des échan&shy;ges se fera par e-mail ou par télé&shy;pho&shy;ne. 
          </p>
          <p className={classPStandard}>
            Notez bien qu&apos;en remplissant ce for&shy;mu&shy;laire, votre démarche ne concerne qu&apos;une <span className='font-bold underline underline-offset-4'>de&shy;man&shy;de de rendez-vous. Nous vous re&shy;contacte&shy;rons dans les plus bref délais pour définir en&shy;sem&shy;ble d&apos;une date et d&apos;un créneau sur notre agenda.</span>
          </p>
          <p className={classPStandard}>
            Pour toute autre demande qu&apos;un rendez-vous, <span className='font-bold'>merci de nous contacter par téléphone au <Link href="tel:0467756811">04 67 75 68 11</Link>.</span>
          </p>
          <p className={classPStandard}>
            Aucune information concernant votre identité ne sera conservée sur notre ser&shy;veur. Pour recevoir votre e-mail, nous utilisons <em>RESEND</em>, un service tiers sé&shy;cu&shy;risé qui nous permet de lire vos mes&shy;sa&shy;ges envoyés depuis notre site internet.
          </p>
          <div className='w-4/5 mx-auto my-10'>
            <RDVForm/>
          </div>
        </PageSection>

      </PageContainer>
    </>
  )
}

export default DemandeRDVPage
