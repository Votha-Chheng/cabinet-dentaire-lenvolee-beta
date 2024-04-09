export const opacities = {
  initial: {
    opacity: 0
  },
  animate: ({delay, duration}:{delay:number, duration:number})=>({
    opacity: 1,
    transition: {
      delay,
      duration
    }
  })
}

export const reverseOpacity = {
  initial: {
    opacity: 0
  },
  animate: (delay:number)=>({
    opacity: [0, 1, 1, 1, 0],
    transition: {
      delay,
      duration: 0.5
    }
  })
}

