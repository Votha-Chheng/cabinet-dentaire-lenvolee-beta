import React, { FC } from 'react'
import { Button } from '../ui/button'
import { useFormStatus } from 'react-dom'
import { Loader2Icon } from 'lucide-react'
import { tauri } from '@/fonts/tauri'

type SubmitButtonProps = {
  label: string
  className?: string
  disable?: boolean
  outline ?: boolean
  icon ?: JSX.Element
}

const SubmitButton: FC<SubmitButtonProps> = ({label, className, disable, outline=false, icon}) => {
  const {pending} = useFormStatus()

  return (
    <Button type='submit' variant={outline ? "outline":"default"} className={`tablet:text-lg p-5 ${tauri.className} ${className}`} disabled={disable||pending} onClick={()=> "clicked"}>
      {pending ? <Loader2Icon className='animate-spin mr-2'/> : <>{icon} {label}</>} 
    </Button>
  )
}

export default SubmitButton