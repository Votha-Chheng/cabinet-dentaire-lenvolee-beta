import { fromRight } from '@/animations/lettersAppear'
import { motion } from 'framer-motion'
import React, { FC } from 'react'

type TextStaggerProps = {
  text: string
  inView?: boolean
  initialDelay?: number
  reverse?: boolean
}

const TextStagger: FC<TextStaggerProps> = ({text, inView = true, initialDelay = 0, reverse=false}) => {
  const arrayOfLetters = text.split('')

  const custom = (reverse: boolean, index: number, arrayOfLetter: string[])=> {
    if(reverse){
      return ((arrayOfLetter.length - 1) - index )*0.1
    }
    return index*0.1
  }

  return (
    <em>
      {
        arrayOfLetters.map((letter: string, index: number)=> (
          <motion.span key={index} variants={fromRight} initial="initial" animate={inView ? "animate":""} custom={custom(reverse, index, arrayOfLetters) + initialDelay} >
            {letter}
          </motion.span>
        ))
      }
    </em>
  )
}

export default TextStagger