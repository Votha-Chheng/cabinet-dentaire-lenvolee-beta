import React, { useEffect, useState } from 'react'

const useScrollY = () => {
  const [Y, setY] = useState<number>(0)

  const getScrolling = (scrollY: number)=> {
    setY(scrollY)
  }

  useEffect(()=> {
    window.addEventListener('scroll',()=> getScrolling(window.scrollY))
    
    return ()=> window.removeEventListener('scroll',()=> getScrolling(window.scrollY))
  }, [])
  
  return Y

}

export default useScrollY