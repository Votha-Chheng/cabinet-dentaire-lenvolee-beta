export const appearFromBottom = {
  initial: {
    opacity: 0,
    y: 25
  },

  initialBottom: {
    opacity: 0,
    y: -25
  },

  animate: (delay: number)=> ({
    opacity: 1,
    y:0,
    transition: {
      duration: 0.4,
      delay,
      opacity: {
        delay: delay+0.2,
      }
    }
  })
}
export const appearFromBottomNoOpacity = {
  initial: {
    y: "100%"
  },

  initialBottom: {
    opacity: 0,
    y: "-100%"
  },

  animate: (delay: number)=> ({
    y:0,
    transition: {
      duration: 0.75,
      delay,
    }
  })
}

export const appearFromLateral = {
  initial: {
    opacity: 0,
    x: -50
  },

  initialRight: {
    opacity: 0,
    x: 50
  },

  animate: (delay: number)=> ({
    opacity: 1,
    x:0,
    y:0,
    transition: {
      duration: 0.4,
      delay,
    }
  })
  
}