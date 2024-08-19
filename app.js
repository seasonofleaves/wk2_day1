// let userInput = ``
let homePoints = 0
let awayPoints = 0

function plusOne() {
  homePoints++
  console.log(`home added 1`, homePoints);

  const inputElement = document.getElementById(`homePoints`)
  console.log(inputElement, inputElement.innerText)
  inputElement.innerText = homePoints
}

function plusThree() {
  homePoints += 3
  console.log(`home added 3`, homePoints);

  const inputElement = document.getElementById(`homePoints`)
  console.log(inputElement, inputElement.innerText)
  inputElement.innerText = homePoints
}

function awayOne() {
  awayPoints++
  console.log(`away added 1`, awayPoints)

  const inputElement = document.getElementById(`awayPoints`)
  console.log(inputElement, inputElement.innerText)
  inputElement.innerText = awayPoints
}

function awayThree() {
  awayPoints += 3
  console.log(`away added 3`, awayPoints)

  const inputElement = document.getElementById(`awayPoints`)
  console.log(inputElement, inputElement.innerText)
  inputElement.innerText = awayPoints
}

// function plusOne() {
//   userInput + `1`
//   console.log(`added 1`, userInput)
// }