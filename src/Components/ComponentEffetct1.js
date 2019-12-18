import React, { useState, useEffect } from 'react'

function ComponentEffect1() {

  const [page, setPage] = useState({ x: 0, y: 0 })

  useEffect(() => {
    function handleMouseMove(e) {
      e.preventDefault()
      setPage({ ...page, x: e.x, y: e.y })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div>
      <h3>Mouse Move.... X: {page.x},  Y : {page.y} </h3>
    </div>
  )
}

export default ComponentEffect1