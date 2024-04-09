export const centerImage = {
  moveLeft: {
    x: [0, -320, -320, 320, 320, 0],
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
  moveRight: {
    x: [0, 320, 320, -320, -320, 0],
    opacity: [1, 1, 0, 0, 0, 1],
    transition: {
      x: {
        duration: 0.6,
      },
      opacity: {
        duration: 0.6
      }
    }
  }
}