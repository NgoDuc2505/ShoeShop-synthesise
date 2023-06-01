import React, { useEffect } from 'react'

export default function useScrollToTop() {
  useEffect(()=>{
    document.documentElement.scrollTo({
        top: 0,
        behavior: 'smooth',
    })

  },[location.href])
}
