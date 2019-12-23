import React, { useState, useEffect } from 'react'

function ComponentEffect1(props) {
  const { number } = props

  function cleanupFunction() {
    console.log('At Unmount of ComponentEffect1 , Props.Number is ', number)
  }

  useEffect(() => {
    // console.log('applying effect for number : ', number)
    return cleanupFunction
  }, [])

  return (
    <div>
      <h3>Props.Number is {number} </h3>
      <h6>I will be unmounted when Props.Number is divided by 3</h6>
    </div>
  )
}

export default ComponentEffect1