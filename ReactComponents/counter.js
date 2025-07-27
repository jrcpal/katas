import {useState} from 'react'

// create a button for the increment
// create a button for the decrement
// there should be a space to display the count


    const [count, setCount] = useState(0)

  return (
    <div style={{display: 'flex'}}>
        <button onClick={() => {setCount(count-1)}}>-</button>
        <button onClick={() => {setCount(count+1)}}>+</button>
        <p>{count}</p>

    </div>
  )


