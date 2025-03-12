'use server'

import { IdForEmail } from "@/@types/IdForEmail"
import { ServiceResponse } from "@/@types/ServiceResponse"
import { validateWithZodSchema } from "@/utils/validateWithZodSchema"
import { EmailSchema } from "@/zodSchemas/emailSchema"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmailAction = async(prevState: ServiceResponse<any>, formData: FormData): Promise<ServiceResponse<string|null>> => {
  const rawData = Object.fromEntries(formData)
  const stringified = JSON.stringify(rawData)
  const parse = JSON.parse(stringified)

  const parsedData = validateWithZodSchema(EmailSchema, parse)

  if(!parsedData.success) {
    return {
      success: false,
      errors: parsedData.errors
    }
  }

  try {
    const data = parsedData.data as IdForEmail

    const res = await resend.emails.send({
      to: "cabinetdentaire.lenvolee@gmail.com",
      from: "Site web Cabinet dentaire l'Envolée <no-reply@cabinetdentaire-lenvolee.fr>",
      subject: "Demande de rendez-vous",
      text: `Ci-joint, une demande rendez-vous d'une personne nommée ${data.nom} ${data.prenom}. \nN° de téléphone : ${data.telephone}. \nAdresse e-mail : ${data.email}. \nRaison du RDV : ${data.raison}. \n\nLa personne souhaite être recontactée par ${data.contactByEmail ? "e-mail" : "téléphone"}.`,
      html: `<p>Veuillez trouvez ci-joint une demande rendez-vous d'une personne nommée ${data.nom} ${data.prenom}</p>
      <p>N° de téléphone : ${data.telephone}.</p>
      <p>Adresse e-mail : ${data.email}.</p><br/>
      <p>Raison du RDV : ${data.raison}.</p><br/>
      <p>La personne souhaite être recontactée par ${data.contactByEmail ? "e-mail" : "téléphone"}.</p>
      `
    })

    if(res.error) {
      return {
        success: false,
        message: `Problème de type "${res.error.name}" pour le serveur. Impossible d'envoyer la demande pour l'instant...`
      }
    }

    return {
      success: true,
      data: res.data!.id
    }
    
  } catch (error) {
    return {
      success: false,
      message: "Problème sur le serveur. Réessayez plus tard..."
     
    }
  }
}