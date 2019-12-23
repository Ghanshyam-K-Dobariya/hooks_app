import React, { useState } from 'react';
import ComponentHooks from './ComponentHooks'
import ComponentEffect1 from './ComponentEffetct1'
import ComponentEffect2 from './ComponentEffetct2'
function App() {

  const [number, setNumber] = useState(1)
  return (<div>
    <h1>Hello hooks</h1>
    <ComponentHooks />
    <hr />
    <button onClick={() => setNumber(number + 1)}>Click Me  : {number}</button>
    {number % 3 !== 0 && <ComponentEffect1 number={number} />}
    <hr />
    <ComponentEffect2 number={number} />
  </div>)
}

export default App;
