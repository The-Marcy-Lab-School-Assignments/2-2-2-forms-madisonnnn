/** GENERAL FEEDBACK:
 *
 */

const handleSubmit = (event) => {
  event.preventDefault()

};

document.querySelector('form').addEventListener('submit', handleSubmit)

const spanValues = (event) => {
  event.preventDefault()

  const userInput = document.querySelector('#username')
  const codingLevelInput = document.querySelector('codingLevel')
  const locationInput = document.querySelector('#location')
  const assignmentInput = document.querySelector('#did-like-assignment')

  const nameSpan = document.querySelector('#results-username')
  const codingLevelSpan = document.querySelector('#results-coding-level')
  const locationSpan = document.querySelector('#results-location')
  const assignmentSpan = document.querySelector('#results-did-like-assignment')
  

  nameSpan.textContent = userInput.value.toLowerCase()
  codingLevelSpan.textContent = codingLevelInput.value.toLowerCase()
  locationSpan.textContent = locationInput.value.toLowerCase()
  assignmentSpan.textContent = assignmentInput.checked ? 'Yes': 'No'
}

document.querySelector('form').addEventListener('submit', spanValues)