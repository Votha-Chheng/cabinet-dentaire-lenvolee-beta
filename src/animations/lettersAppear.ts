
export const fromRight = {
  initial: {
    opacity: 0
  },
  animate: (delay: number)=> ({
    opacity: 1,
    transition: {
      delay
    }
  })
}