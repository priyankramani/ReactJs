import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter = 5;
  let [counter, setCounter] = useState(15);
  const addValue = () => {
    // counter++;
    // setCounter(counter++);

    // What if....15->19
    setCounter(prevCounter => prevCounter+1);
    setCounter(prevCounter => prevCounter+1);
    setCounter(prevCounter => prevCounter+1);
    setCounter(prevCounter => prevCounter+1);
  }
  const removeValue = () => {
    // counter--;
    setCounter(counter--);
  }
  return (
    <>
      <h1>Hello from upside down</h1>
      <h2>Counter value : {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
