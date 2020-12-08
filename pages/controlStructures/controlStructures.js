function compare(a, b) {
  if (a === b) {
  return "Equal"
  } else if (a > b) {
    return "A > B"
  } else {
    return "A < B"
  }
}

console.log("Used two numbers A=0 and B=3 to test IF/ELSE/ELIF Structure \n")
console.log("compare(0,3", compare(0,3))

console.log("---------------------------------------------------")

function switchzin(expressão){
  switch (expressão) {
    case 1:
      return "The value is: 1"
    case 2: case 3:
      return "The value is: 2 or 3"
    default:
      return "Out of scope"
  }
}

console.log("Test Switch Structure \n")
console.log("switchzin(2) - ", switchzin(2), "\n","switchzin() - ", switchzin(),)


console.log("---------------------------------------------------")

function whilezin(expressao){
  let sum = 0
  let i = 0
  while (i<expressao) {
    i++
    sum +=i
  }
  return sum
}

console.log("Test While Structure \n")
console.log("Sum of numbers until 5", whilezin(5))

let valueDo = 3
let count = 0

do {
  count++
  valueDo++
} while(valueDo <=3)

console.log("incremented a var a = 0 until 3 with doWhile")

console.log("---------------------------------------------------")
console.log("Test FOR")

for (let i = 0; i < 10; i++) {
  console.log(i);
  
}