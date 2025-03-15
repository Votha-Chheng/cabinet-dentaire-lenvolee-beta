import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { tauri } from '@/fonts/tauri'
import { AtSign } from 'lucide-react'

const RDVMailButton = () => {
  return (
    <Button asChild className='flex gap-x-3 bg-main-theme tablet:text-lg mt-10 mb-5 mobile:mx-5 hover:bg-main-theme hover:opacity-75 py-6'>
      <Link href={`/demande-rdv`} className={`${tauri.className} tracking-wider`}>
        <AtSign color='#D4AB7C'/> <span className='text-buff'>Demander un RDV par e-mail</span>
      </Link>
    </Button>
  )
}

export default RDVMailButton
