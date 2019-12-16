import React, { useState } from 'react'

function handleC(num, fn) {
  fn(num + 1)
}

function ComponentHooks() {
  const [count, setCount] = useState(0)
  function handleCount(event) {
    event.preventDefault()
    setCount(count + 1)
  }

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={handleCount}>Btn 1 - Add</button>

      <button onClick={() => { setCount(count + 1) }}>Btn 2 - Add</button>

      <button onClick={function () { setCount(count + 1) }}>Btn 3 - Add</button>

      <button onClick={() => handleC.call({}, count, setCount)} >Btn 4 - Add</button>

      <button onClick={() => handleC.apply({}, [count, setCount])} >Btn 5 - Add</button>

      <button onClick={(e) => handleCount(e)}>Btn 6 - Add</button>

      <button onClick={(e) => { var F = handleCount; F(e) }} >Btn 7 - Add</button>

      <button onClick={(e) => { var F = handleCount; F.call(this, e) }} >Btn 8 - Add</button>

      <button onClick={(e) => { var F = handleCount; F.apply(this, [e]) }}>Btn 9 - Add</button>

      <button onClick={() => handleC.call(count, setCount)} >Btn 10 - Add</button>

      <button onClick={() => handleC.apply([count, setCount])} >Btn 11 - Add</button>

    </div>
  );
}

export default ComponentHooks