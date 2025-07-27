import {useState} from 'react'

// create a button for the increment
// create a button for the decrement
// there should be a space to display the count


  const [count, setCount] = useState(0)

  return (
    <div style={{display: 'flex'}}>
        <button onClick={() => {setCount((prev) => prev-1)}}>-</button>
        <button onClick={() => {setCount((prev) => prev + 1)}}>+</button>
        <p>{count}</p>
    </div>
  )


// ---------

// create a counter using a custom hook
// the useCounter hook returns an OBJECT with properties needed to construct a counter
// ( count, increment, decrement, reset, setCount)
// an initial value is passed into the hook, if initial value is not provided, the initial value is equal to 0

function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue) 

  return {
    count,
    increment: () => setCount((prev) => prev + 1),
    decrement: () => setCount((prev) => prev -1),
    reset: () => setCount(initialValue),
    setCount,
  }
}

function Counter() {
  const { count, increment, decrement, reset } = useCounter(0)

  return (
    <div style={{display:'flex'}}>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
      <button onCLick={reset}>Reset</button>
      <h1>{count}</h1>
    </div>
  )
}

//<Counter initialValue={0}>

