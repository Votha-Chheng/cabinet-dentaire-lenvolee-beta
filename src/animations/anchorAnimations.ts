export const titleAppear = {
  initial: {
    opacity: 0,
    y: 25
  },

  initialBottom: {
    opacity: 0,
    y: -25
  },

  animate: {
    opacity: 1,
    y:0,
    transition: {
      duration: 0.4,
      delay: 1.9,
      opacity: {
        delay: 2.1,
        duration: 0.4,
      }
    }
  },
  moveLeft: {
    x: ["0", "-100%", "-100%", "100%", "100%", "0"],
    opacity: [1, 1, 0, 0, 0, 1],
    transition: {
      x: {
        duration: 0.6,
      },
      opacity: {
        duration: 0.6
      }
    }
  },
}