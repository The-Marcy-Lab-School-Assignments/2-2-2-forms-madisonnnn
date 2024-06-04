/** GENERAL FEEDBACK:
 * You are so close! I left feedback on where you can improve! You got this!
 */

/** FEEDBACK: If you do not need this handler and event listener, make sure to remove it to keep your code clean! */
const handleSubmit = (event) => {
  event.preventDefault()

};

document.querySelector('form').addEventListener('submit', handleSubmit)

const spanValues = (event) => {
  event.preventDefault()

  const userInput = document.querySelector('#username')
  /** FEEDBACK: Are you getting the correct input here? Hint: event.target. How can you target the coding level input by using the name attribute? */
  const codingLevelInput = document.querySelector('codingLevel')
  const locationInput = document.querySelector('#location')
  const assignmentInput = document.querySelector('#did-like-assignment')

  const nameSpan = document.querySelector('#results-username')
  const codingLevelSpan = document.querySelector('#results-coding-level')
  const locationSpan = document.querySelector('#results-location')
  const assignmentSpan = document.querySelector('#results-did-like-assignment')
  
  /** FEEDBACK: You do not need to lowercase the values since we are getting the user inputs! */
  nameSpan.textContent = userInput.value.toLowerCase()
  codingLevelSpan.textContent = codingLevelInput.value.toLowerCase()
  locationSpan.textContent = locationInput.value.toLowerCase()
  assignmentSpan.textContent = assignmentInput.checked ? 'Yes': 'No'
  /** FEEDBACK: Do not forget to reset the form when you are done collecting the data and displaying it! */
}

document.querySelector('form').addEventListener('submit', spanValues)