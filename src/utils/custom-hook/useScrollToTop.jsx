import React, { useEffect } from 'react'

export default function useScrollToTop() {
  useEffect(()=>{
    console.log(location.href)
    document.documentElement.scrollTo({
        top: 0,
        behavior: 'smooth',
    })

  },[location.href])
}
