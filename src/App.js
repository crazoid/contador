import React, { useState, useEffect } from 'react'

const useCounter = (initialValue) => {
  const [counter, setCounter] = useState(initialValue)
  const increment = () => {
    setCounter(counter+1)
  }
  const decrement = () => {
    setCounter(counter-1)
  }
  return [counter, increment, decrement]
}

function App(props) {

  const[counter, increment, decrement] = useCounter(0)
  
  return (
    <div className="App">
      <h1>Counter 1: {counter}</h1>
      <button onClick={increment}>Incrementar</button>
      <button onClick={decrement}>Decrementar</button> 
    </div>
  )
}

export default App