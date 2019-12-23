import React, { useState, useEffect } from 'react'

function ComponentEffect2({ number }) {
  const [page, setPage] = useState({ x: 0, y: 0 })

  function cleanupMouseMoveEffect(handleMouseMove) {
    console.log('cleanup of component effect 2')
    window.removeEventListener("mousemove", handleMouseMove)
  }

  useEffect(() => {
    const handleMouseMove = (e) => setPage({ ...page, x: e.x, y: e.y })
    console.log('adding event listner - component effect 2')
    window.addEventListener("mousemove", handleMouseMove)
    return () => cleanupMouseMoveEffect(handleMouseMove)
  })

  return (
    <div>
      <h3> [X, Y ] : [{page.x}, {page.y}] ::  Props.Number : {number}</h3>
    </div>
  )
}

export default ComponentEffect2