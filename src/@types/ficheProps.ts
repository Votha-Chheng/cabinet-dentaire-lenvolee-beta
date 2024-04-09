import { ReactNode } from "react"

export type FicheProps = {
  nom: string
  fonction: string
  children: ReactNode
  inView: boolean
  img: string
}