export const parentAppear = {
  initial: {
    scaleY: 0
  },
  animate: {
    scaleY: 1,
    transition: {
      delayChildren: 0.5,
      duration: 0.25,
      staggerChildren: 0.15
    }
  }
}

export const childrenAppear = {
  initial: {
    opacity: 0,
    x:-15
  },
  animate: {
    opacity: 1,
    x:0,
    transition: {
      duration: 0.25
    }
  }
}