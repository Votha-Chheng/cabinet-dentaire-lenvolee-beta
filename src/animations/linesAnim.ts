export const vertical = {
  initial: {
    scaleY: 0,
  },
  animate: ({delay, duration}:{delay:number, duration:number})=> ({
    scaleY: 1,
    transition: {
      duration,
      delay
    }
  })
}

export const horizontal = {
  initial: {
    scaleX: 0,
  },
  animate: ({delay, duration}:{delay:number, duration:number})=> ({
    scaleX: 1,
    transition: {
      duration,
      delay
    }
  })
}

export const fromLeftOutside = {
  initial: {
    x: "-100vw",
    opacity: 0
  },
  animate: {
    x:0,
    opacity: 1,
    transition: {
      duration: 1,
      delay: 1.25
    }
  }
}
export const fromRightOutside = {
  initial: {
    x: "100vw",
    opacity: 0
  },
  animate: {
    x:0,
    opacity: 1,
    transition: {
      duration: 1.25,
      delay: 1.5
    }
  }
}