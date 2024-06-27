import React, { createContext, useState } from 'react'

const CounterContext = createContext()

const CounterProvider = ({children}) => {
  const [counter, setCounter] = useState(0)

  const increment = () => setCounter(counter+1)
  const decrement = () => setCounter(counter-1)

  return (
    <CounterContext.Provider value={{counter, increment, decrement}}>
        {children}
    </CounterContext.Provider>
  )
}

export { CounterContext, CounterProvider}