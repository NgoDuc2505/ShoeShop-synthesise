import React, { useEffect } from 'react'

export default function useScroolToTop() {
  useEffect(()=>{
    console.log(location.href)
    document.documentElement.scrollTo({
        top: 0,
        behavior: 'smooth',
    })

  },[location.href])
}
