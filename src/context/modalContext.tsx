import { ModalProps } from '@/@types/modalProps'
import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react'

type ModalContextProviderProps = ModalProps & {
  setImageSrc: Dispatch<SetStateAction<string>> | null
  setAlt: Dispatch<SetStateAction<string>>| null
  setShowModal: Dispatch<SetStateAction<boolean>>| null
}

export const ModalContext = createContext<ModalContextProviderProps>({
  showModal: false,
  alt: "",
  imageSrc: "https://placehold.co/600x400",
  setAlt: null,
  setImageSrc: null,
  setShowModal: null
})


export const ModalContextProvider = ({children}:{children: ReactNode})=> {
  const [imageSrc, setImageSrc] = useState<string>("")
  const [alt, setAlt] = useState<string>("")
  const [showModal, setShowModal] = useState<boolean>(false)

  return (
    <ModalContext.Provider value={{imageSrc, setImageSrc, alt, setAlt, showModal, setShowModal}} >
      {children}
    </ModalContext.Provider>
  )
}
