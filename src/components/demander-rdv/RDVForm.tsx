"use client"

import React, { useEffect, useState } from 'react'
import { Card, CardTitle } from '../ui/card'
import { tauri } from '@/fonts/tauri'
import InputForm from '../shared/InputForm'
import { Label } from '../ui/label'
import { Textarea } from '../ui/textarea'
import { Switch } from '../ui/switch'
import { AtSign, CircleCheck, Phone, X } from 'lucide-react'
import SubmitButton from './SubmitButton'
import { useFormState } from 'react-dom'
import { sendEmailAction } from '@/actions/sendEmailAction'
import { captureErrorByField } from '@/utils/captureErrorFields'
import { toast } from 'sonner'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'

const RDVForm = () => {
  const [state, formAction] = useFormState(sendEmailAction, {})
  const [docteur, setDocteur] = useState<string>("Dr Sylvie MA-FRANCIN")
  const [contactByEmail, setContactByEmail] = useState<boolean>(true)

  useEffect(()=> {
    if(!state.errors && state.success===false && state.message){
      toast.error(state.message)
    }
  }, [state])
  
  return (
    <Card className={`py-5 px-2 mobile:p-5 border-main-theme ${tauri.className}`}>
      {
        state.success && state.data
        ?
        <div className='flex flex-col gap-y-3 items-center justify-center min-h-[450px]'>
          <span className='text-center'>Votre demande a bien été envoyée. Nous y répondrons dans les plus brefs délais.</span><CircleCheck className='text-green-700'/>
        </div>
        :
        <>
          <CardTitle className='text-main-theme text-center laptop:text-xl mt-5 mb-10 '>Remplissez les champs demandés. Tous les champs sont obligatoires.</CardTitle>
          <Card className='pt-3 pb-5 px-1 mobile:px-5 border-main-theme'>
            <form action={formAction}>
              <input type='hidden' name='docteur' value={docteur} />
              <input type='hidden' name='contactByEmail' value={JSON.stringify(contactByEmail)} />
              <div className='mt-5 mb-10 desktop:flex desktop:flex-wrap desktop:items-center'>
                <Label className='mobile:px-2 tablet:whitespace-nowrap desktop:text-lg'>Quel dentiste souhaitez-vous contacter ?</Label>
                <Select value={docteur} onValueChange={(value: string)=> setDocteur(value)}>
                  <SelectTrigger className="w-44 mobile:w-56 mobile:ml-2 text-xs desktop:text-base mt-1 desktop:mt-0">
                    <SelectValue/>
                  </SelectTrigger>
                  <SelectContent className={`${tauri.className}`}>
                    <SelectItem className='text-xs desktop:text-base' value="Dr Sylvie MA-FRANCIN">Dr Sylvie MA-FRANCIN</SelectItem>
                    <SelectItem className='text-xs desktop:text-base' value="Dr Quentin LUPI">Dr Quentin LUPI</SelectItem>
                    <SelectItem className='text-xs desktop:text-base' value="Dr Juliette COURT">Dr Juliette COURT</SelectItem>
                    <SelectItem className='text-xs desktop:text-base' value="Peu importe">Peu importe</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <InputForm label='Nom' name='nom' placeholder='Ecrire votre nom de famille...' errorMessage={captureErrorByField(state?.errors, "nom")} />
              <InputForm label='Prénom' name='prenom' placeholder='Ecrire votre prénom...' errorMessage={captureErrorByField(state?.errors, "prenom")}/>
              <InputForm label='Adresse e-mail de contact' name='email' placeholder='exemple@example.com' type='email' errorMessage={captureErrorByField(state?.errors, "email")} />
              <InputForm label='N° de téléphone' name='telephone' type='tel' placeholder='0XXXXXXXXX' pattern='[0-9]{10}' errorMessage={captureErrorByField(state?.errors, "telephone")}/>
              <div className='mb-10'>
                <Label className={`mobile:px-2 mobile:whitespace-nowrap desktop:text-lg ${tauri.className}`}>Raison de la demande de rendez-vous :</Label>
                <div className='relative max-h-96'>
                  <Textarea 
                    name='raison'
                    required 
                    aria-required 
                    className={`ml-2 my-2.5 px-2 tablet:whitespace-nowrap text-xs desktop:text-base tablet:placeholder:text-sm desktop:placeholder:text-base placeholder:italic placeholder:opacity-50 ${tauri.className}`} 
                    placeholder='Décrivez-nous la raison du rendez-vous...'
                  />
                  {
                    captureErrorByField(state?.errors, "raison") &&
                    <p className="absolute left-2 -bottom-5 text-xs flex gap-x-1 text-red-700"><X size={15}/>{captureErrorByField(state?.errors, "raison")}</p>
                  }
                </div>
              </div>
              <div className={`mt-5 mb-10 mobile:px-2 mobile:whitespace-nowrap text-sm laptop:text-base desktop:text-lg flex items-center gap-x-5 flex-col gap-y-1.5`}>
                <span >Je préfère être recontacté par :</span>
                <Card className='flex py-1 px-2 items-center gap-x-2'>
                  <p className={`flex items-center gap-x-1 text-xs laptop:text-base desktop:text-lg  text-main-theme ${contactByEmail && "opacity-50"}`}><Phone className='hidden mobile:block' size={17.5}/>
                    téléphone
                  </p>
                  <Switch checked={contactByEmail} onClick={()=> setContactByEmail(prev=> !prev)} />
                  <p className={`flex items-center text-xs laptop:text-base desktop:text-lg text-main-theme gap-x-1 ${!contactByEmail && "opacity-50"}`}><span>e-mail</span><AtSign className='hidden mobile:block' size={17.5}/></p>
                </Card>
              </div> 
              <div className='flex justify-center mobile:justify-end'>
                <SubmitButton label='Envoyer la demande'/>
              </div> 
            </form>
          </Card>
        </>
      }
    </Card>
  )
}

export default RDVForm
