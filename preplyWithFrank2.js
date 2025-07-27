// Create a function that finds the longest country in the string 

// return a string 
// iterate over each string in the array 
// determine the length of each string in the array 

// define a  string count
// define max string count 
// compare if current string is larger than the previous string count 


const country=["Niger","Nigeria","Albania","Turkey"]

function longestCountry () {
  const sortedCountries = country.sort((a,b) => b.length - a.length)
  return sortedCountries[0]
}

console.log(longestCountry())