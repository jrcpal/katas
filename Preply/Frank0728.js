// goal: create a function that prints out # and relevant white space given an integer
// input: integer 
// output: printed # lines 

// initial thoughts : loop through integer number of times , calculate amount of space for each line 


function printStaircase(n) {


  for (let i = 0; i <= n; i++) {
    step = ' '.repeat(n - i)
    hash = '#'.repeat(i)
    console.log(step.concat(hash))
  }

    for (let i = 1; i <= n; i++) {
        let row = ''
        for (let j = 1; j <= n; j++ ) {
            if (j > n - i) {
                row+= '#'
            } else {
                row+= ' '
            }
        }
        console.log(row)
    }
}

printStaircase(3)

for (let i = 0; i < 3; i++) {
setTimeout(() => console.log(i), 100);
}

//  if we use var instead of let, var is function scoped, not blocked scope, so all callbacks 'share the same i variable
// by the time the setTimeout runs, i = 3, so it is printed out 3 times. 

// however, let is block scoped, each iteration creates a new binding of i 
// when the callback runs, it remembers the i value from its own iteration 

// function declaration and function expression 

// declarations are hoisted , such as var a = 1 
// expressions are not 
// function greet() {

// }

// const greet = () => {

// }

const add = (a,b) => a+b
console.log(add(5,7))