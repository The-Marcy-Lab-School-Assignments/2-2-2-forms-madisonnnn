/** GENERAL FEEDBACK:
 * You are killing it! Sorry it took so long for me to regrade this~ 
 */

//itzel this made me very sad :(

/** FEEDBACK: If you do not need this handler and event listener, make sure to remove it to keep your code clean! */
// const handleSubmit = (event) => {
//   event.preventDefault()

// };

//document.querySelector('form').addEventListener('submit', handleSubmit)

const spanValues = (event) => {
  event.preventDefault()

  const form = event.target
  //grabbing input data
  const userInput = form.querySelector('#username')
  /** FEEDBACK: Are you getting the correct input here? Hint: event.target. How can you target the coding level input by using the name attribute? */
  const codingLevelInput = form.querySelector('input[name="codingLevel"]:checked')
  console.log(codingLevelInput)
  const locationInput = form.querySelector('#location')
  const assignmentInput = form.querySelector('#did-like-assignment')

  const nameSpan = document.querySelector('span#results-username')
  const codingLevelSpan = document.querySelector('span#results-coding-level')
  const locationSpan = document.querySelector('span#results-location')
  const assignmentSpan = document.querySelector('span#results-did-like-assignment')
  
  nameSpan.textContent = userInput.value
  codingLevelSpan.textContent = codingLevelInput.value
  assignmentSpan.textContent = assignmentInput.checked ? 'Yes' : 'No'
  
  const selectedLocation = locationInput.options[locationInput.selectedIndex].value
  locationSpan.textContent = selectedLocation


  form.reset()
}

document.querySelector('form').addEventListener('submit', spanValues)