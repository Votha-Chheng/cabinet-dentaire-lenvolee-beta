import { textUp } from '@/animations/pagesAnimations'
import { motion } from 'framer-motion'
import React, { FC, ReactNode } from 'react'

type PageSubContainerProps = {
  children: ReactNode
  delay:number
  animate: string
}

const PageSubContainer: FC<PageSubContainerProps> = ({children, delay, animate}) => {
  return (
    <motion.article variants={textUp} initial="initial" animate={animate} custom={delay} className='flex flex-col border border-buff mx-2 tablet:mx-8 pb-8 pt-5 laptop:mt-0 mt-5'>
      {children}
    </motion.article>
  )
}

export default PageSubContainer
