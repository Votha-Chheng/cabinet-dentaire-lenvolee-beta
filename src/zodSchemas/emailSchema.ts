import { z } from "zod";

export const EmailSchema = z.object({
  docteur: z.string().min(1,"Contact de dentiste nécessaire."),
  nom: z.string().min(1,"Le nom est nécessaire."),
  prenom: z.string().min(1,"Le prénom est nécessaire."),
  email: z.string().min(1, "E-mail nécessaire.").email({message: "L'e-mail est de la forme exemple@xyz.com"}),
  raison: z.string().min(1,"La raison du rdv est nécessaire."),
  telephone: z.string({
    required_error: 'Le numéro de téléphone doit comporter 10 chiffres.',
    invalid_type_error: 'Le numéro de téléphone doit comporter des chiffres.',
  })
  .refine((val) => {
    console.log(val)
    for(let i=0; i<val.length; i++){
      if(!Boolean(+i) && +i !==0) return false
    }
    return val.toString().length === 10
  }, 'Le numéro de téléphone doit comporter 10 chiffres.'),
  contactByEmail: z.coerce.boolean(),
})

