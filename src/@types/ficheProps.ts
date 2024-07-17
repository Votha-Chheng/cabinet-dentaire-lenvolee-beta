import { ReactNode } from "react"
import { FaLessThanEqual } from "react-icons/fa6"

export type FicheProps = {
  diplomes: boolean
  nom: string
  fonction: string
  children: ReactNode
  inView: boolean
  img: string
  diplomeListe?: string[]
}