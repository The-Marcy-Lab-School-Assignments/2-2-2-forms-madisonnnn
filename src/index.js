/** GENERAL FEEDBACK:
 *
 */

//itzel this made me very sad :(

const handleSubmit = (event) => {
  event.preventDefault()

};

document.querySelector('form').addEventListener('submit', handleSubmit)

const spanValues = (event) => {
  event.preventDefault()

  const form = event.target
  //grabbing input data
  const userInput = document.querySelector('#username')
  const codingLevelInput = document.querySelector('fieldset#codingLevel')
  const locationInput = document.querySelector('#location')
  const assignmentInput = document.querySelector('#did-like-assignment')

  //grabbing span
  const nameSpan = document.querySelector('span#results-username')
  const codingLevelSpan = document.querySelector('span#results-coding-level')
  const locationSpan = document.querySelector('span#results-location')
  const assignmentSpan = document.querySelector('span#results-did-like-assignment')

  //location things wow
  const brooklyn = locationInput.querySelector('#brooklyn')
  const otherBorough = locationInput.querySelector('#other-borough')
  const outOfState = locationInput.querySelector('#out-of-state')

  if(brooklyn.selected === true) locationSpan.textContent = brooklyn.value
  if(otherBorough.selected === true) locationSpan.textContent = otherBorough.value
  if(outOfState.selected === true) locationSpan.textContent = outOfState.value
  
  //changing span data to input value
  nameSpan.textContent = userInput.value
  codingLevelSpan.textContent = codingLevelInput.value
  assignmentSpan.textContent = assignmentInput.checked ? 'Yes': 'No'

  form.reset()
}


document.querySelector('form').addEventListener('submit', spanValues)