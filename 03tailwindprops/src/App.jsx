import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
  let myObj = {
    name : "Priyank",
    age : 21,
  }
  return (
    <>
      <h1 className="bg-green-500 text-black p-4 rounded-2xl">Tailwind Test</h1>
      <Card username="Priyank" btnText="Click me"/>;
      <Card username="Priyank2"/>;
    </>
  )
}

export default App
