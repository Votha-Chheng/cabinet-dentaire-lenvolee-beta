export const imageAppear = {
  initial: {
    opacity:0, 
    scale:1.25
  },
  animate: {
    opacity:1, 
    scale:1,
    transition: {
      duration:1.2, 
      delay:1.25, 
      ease:"easeOut"
    }
  }
}

export const linesVertical = {
  initial: {
    scaleY: 0,
  },
  animateSecond : {
    scaleY: 1,
    transition: {
      duration: 0.25,
      delay:0.25
    }
  },
  animateThird : {
    scaleY: 1,
    transition: {
      duration: 0.25,
      delay:0.75
    }
  }
}

export const linesHorizontal = {
  initial: {
    scaleX: 0,
  },
  animateFirst: {
    scaleX: 1,
    transition: {
      duration: 0.2
    }
  },
  animateSecond : {
    scaleX: 1,
    transition: {
      duration: 0.25,
      delay:0.5
    }
  },
  animateThird : {
    scaleX: 1,
    transition: {
      duration: 0.25,
      delay:1
    }
  }
}
