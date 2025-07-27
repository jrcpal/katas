// Create a function that counts the number of occurrence of fruits from the array below 


const fruits=["apple","cherry","orange","cherry", "apple","banana"]

// implement a counter 
// start with an empty object 
// check to see if item has been added to counter or not

// iterate over array 
// return { apple : 2,
//            cherry: 2
// }


function countFruits () {
    const fruitObj = {}

for (const fruit of fruits) {
    fruitObj[fruit] = (fruitObj[fruit] || 0) + 1
}

    return fruitObj
}

console.log(countFruits(fruits))