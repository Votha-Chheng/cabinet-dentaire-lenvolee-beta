export const verticalLines = {
  initialTop: {
    y: "-100%",
    opacity: 0
  },
  animateFirst: {
    y: -106,
    opacity: 1,
    transition: {
      delay: 0.75,
      duration: 0.25
    }
  },
  animateSecond: {
    y: -72,
    opacity: 1,
    transition: {
      delay: 0.75,
      duration: 0.25
    }
  }
}

export const horizontalLines = {
  initial: {
    x: "-125%",
  },
  animate: {
    x: -62,
    transition: {
      delay: 0.9,
      duration: 0.4
    }
  },
}

export const background = {
  initial: {
    background: "rgba(254, 254, 254, 0)",
  },
  animate: {
    backgroundColor: "rgba(254, 254, 254, 1)",
    transition: {
      delay: 1.5,
      duration: 0.5
    }
  },
}

export const textUp = {
  initial: {
    y:50,
    opacity:0
  },
  animate: (delay: number)=> ({
    opacity:1,
    y:0,
    transition: {
      delay,
      duration: 0.5
    }
  }),
}

