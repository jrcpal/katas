"use client"

import React, {useState} from 'react'

// create a button for the increment
// create a button for the decrement
// there should be a space to display the count

function page() {

    const [count, setCount] = useState(0)

  return (
    <div>
        <button onClick={() => {setCount(count-1)}}>-</button>
        <button onClick={() => {setCount(count+1)}}>+</button>
        <p>{count}</p>

    </div>
  )
}

export default page