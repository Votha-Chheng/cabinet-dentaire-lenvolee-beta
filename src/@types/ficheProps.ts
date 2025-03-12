import { ReactNode } from "react"

export type FicheProps = {
  diplomes: boolean
  nom: string
  fonction: string
  children: ReactNode
  inView: boolean
  img: string
  diplomeListe?: string[]
}