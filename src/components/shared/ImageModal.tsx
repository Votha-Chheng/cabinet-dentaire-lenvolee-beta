'use client'

import { ModalContext } from '@/context/modalContext'
import { useWindowSize } from '@uidotdev/usehooks'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React, { FC, useContext } from 'react'
import { IoIosCloseCircleOutline } from 'react-icons/io'
import Modal from 'react-modal'

const ImageModal: FC = () => {
  const {showModal, imageSrc, alt, setShowModal, setImageSrc, setAlt} = useContext(ModalContext)

  const { width, height } = useWindowSize()

  const closeModal = ()=> {
    setShowModal && setShowModal(false)
    setImageSrc && setImageSrc("https://placehold.co/600x400")
    setAlt && setAlt("")
  }

  return (
    <Modal
      isOpen={showModal}
      shouldCloseOnOverlayClick={true}
      onRequestClose={closeModal}
      onAfterOpen={() => document.body.style.overflow = 'hidden'}
      onAfterClose={() => document.body.style.overflow = 'auto'}
      ariaHideApp={false}
      style={{
        overlay: {
          position: 'fixed',
          width: '100vw',
          height: '100vh',
          zIndex: 10000
        },
        content: {
          width: '80vw',
          height: '95vh',
          margin:"auto"
        }
      }}
    >
      <motion.div initial={{scale:0.4}} animate={{scale:1}} transition={{duration:0.2, ease:"easeOut"}} className='desktop:w-[1000px] h-[80vh] mt-0 mx-auto overflow-hidden relative'>
        <Image src={`/images/${imageSrc}`} alt={alt} fill style={{objectFit: "contain"}} />
        <IoIosCloseCircleOutline className='absolute top-5 right-5 cursor-pointer' size={50} onClick={closeModal} />
      </motion.div>
    </Modal>
  )
}

export default ImageModal