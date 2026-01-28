"use client"

import RDVForm from '@/components/demander-rdv/RDVForm'
import PageContainer from '@/components/layouts/PageContainer'
import PageSection from '@/components/layouts/PageSection'
import PageHeader from '@/components/shared/PageHeader'
import { Button } from '@/components/ui/button'
import { classPStandard } from '@/datas/classNames'
import { tauri } from '@/fonts/tauri'
import { useWindowSize } from '@uidotdev/usehooks'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const DemandeRDVPage = () => {
  const {width} = useWindowSize()
  const windowWidth = width || 1024

  return (
    <>
      <PageHeader img='email-cover.jpg' title='Demander un RDV'/>
      <PageContainer>
        <PageSection subtitle="Prendre RDV sur DOCTOLIB" delayBoolean={true}>
          <p className={classPStandard}>
            Les docteurs <span className='font-bold'>Sylvie MA-FRANCIN</span>, <span className='font-bold'>Quentin LUPI</span> et <span className='font-bold'>Juliette COURT</span> sont dispo&shy;ni&shy;bles sur la plate&shy;forme en ligne <Link href="https://www.doctolib.fr" className='underline underline-offset-4 font-bold'><Image className=' inline-block -mt-1 tablet:-mt-1.5' src={`/images/doctolib.gif`} alt="doctolib" width={windowWidth> 768 ? 115 : 75} height={100}/></Link> pour une pri&shy;se de ren&shy;dez-vous directe. Il vous suf&shy;fit de cli&shy;quer sur un des bou&shy;tons suivants :
          </p>
          <ul className='flex mx-auto gap-y-10 flex-col items-center my-10'>
            <li>
              <Button className={`${tauri.className} text-lg bg-main-theme`}>
                <Link target='_blank' href={`https://www.doctolib.fr/dentiste/castelnau-le-lez/sylvie-ma`}>
                  <span className='tracking-wide '>Prendre RDV avec Sylvie MA-FRANCIN</span>
                </Link>
              </Button>
            </li>
            <li>
              <Button className={`${tauri.className} text-lg bg-main-theme`}>
                <Link target='_blank' href={`https://www.doctolib.fr/dentiste/castelnau-le-lez/quentin-lupi`}>
                  <span className='tracking-wide'>Prendre RDV avec Quentin LUPI</span>
                </Link>
              </Button>
            </li>
            <li>
              <Button className={`${tauri.className} text-lg bg-main-theme`}>
                <Link target='_blank' href={`https://www.doctolib.fr/dentiste/castelnau-le-lez/juliette-court`}>
                  <span className='tracking-wide'>Prendre RDV avec Juliette COURT</span>
                </Link>
              </Button>
            </li>
          </ul>
        </PageSection>
        <PageSection subtitle="Solliciter un rdv via notre site" delayBoolean={true}>
          <p className={classPStandard}>
            Si vous ne souhaitez pas utiliser <span className='font-bold italic'>Doctolib</span>, vous avez la possibilité de solliciter un rendez-vous médical en rem&shy;plis&shy;sant soigneu&shy;se&shy;ment tou&shy;tes les informa&shy;tions du for&shy;mu&shy;laire ci-dessous. La confir&shy;ma&shy;tion du rendez-vous et la suite des échan&shy;ges se fera par e-mail ou par télé&shy;pho&shy;ne. 
          </p>
          <p className={classPStandard}>
            Notez bien qu&apos;en remplissant ce for&shy;mu&shy;laire, votre démarche ne concerne qu&apos;une <span className='font-bold underline underline-offset-4'>de&shy;man&shy;de de rendez-vous. Nous vous re&shy;contacte&shy;rons dans les plus brefs délais pour confirmer ou redéfinir en&shy;sem&shy;ble d&apos;une date et d&apos;un créneau sur notre agenda.</span>
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
