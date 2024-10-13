import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { tauri } from '@/fonts/tauri'
import { FaPhoneAlt } from "react-icons/fa";

const ContactButton = () => {
  return (
    <Button asChild className='flex gap-x-3 bg-main-theme tablet:text-lg my-10 mobile:mx-5 hover:bg-main-theme hover:opacity-75 py-6'>
      <Link href="tel:+33467756811" className={`${tauri.className} tracking-wider `}>
        <FaPhoneAlt color='#D4AB7C'/> <span className='text-buff'>Contactez-nous au 04 67 75 68 11</span>
      </Link>
    </Button>
  )
}

export default ContactButton
