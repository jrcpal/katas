// after every 1 seconds print name
// the name gets doubled every time 

// creating a function that takes in a string name as a argument

import react, {useEffect, useState} from 'react'


export default function PrintName() {
    const [name, setName] = useState("Jessica")

    setTimeout(() => {

        console.log(name)
        setName((prevName) => prevName + name )
    }, 1000)

    

  }

