import { ModalContext } from '@/context/modalContext'
import Image from 'next/image'
import React, { FC, useContext } from 'react'

type ImageForModalProps = {
  imgSrc: string
  alt: string
  sizeClass?: string
  padding?: boolean
}

const ImageForModal: FC<ImageForModalProps> = ({imgSrc, alt, sizeClass = "w-[380px] h-[600px]", padding=true}) => {
  const { setShowModal, setAlt, setImageSrc } = useContext(ModalContext)

  const onClickImg = (img: string, alt: string)=> {
    setAlt && setAlt(alt)
    setImageSrc && setImageSrc(img)
    setShowModal && setShowModal(true)
  }

  return (
    <div className={`relative cursor-pointer ${sizeClass}`} onClick={()=>onClickImg(imgSrc, alt)}>
      <Image src={`/images/${imgSrc}`} alt={alt} fill style={{objectFit:"cover"}} className={`${padding ? "p-2":"p-0"} border-main-theme border` } />
    </div>
  )
}

export default ImageForModal