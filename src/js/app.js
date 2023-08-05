// Inputs
const dayInput = document.querySelector('[data-day-input]')
const monthInput = document.querySelector('[data-month-input]')
const yearInput = document.querySelector('[data-year-input]')
const ageClickInput = document.querySelector('[data-age-input]')

// Display elements
const dayDisplay = document.querySelector('.days')
const monthDisplay = document.querySelector('.months')
const yearDisplay = document.querySelector('.years')
const numbersDisplay = document.querySelectorAll('[data-number]')

// Error messages elements
const invalidDay = document.querySelector('.invalid-day')
const invalidMonth = document.querySelector('.invalid-month')
const invalidYear = document.querySelector('.invalid-year')

// Function responsible for validating the input values
const validateInput = (value, minValue, maxValue, inputElement, displayElement, errorMessageElement) => {
  const isInputInvalid = isNaN(value) || value < minValue || value > maxValue

  if (isNaN(totalDays) || totalDays < 1 || totalDays > 31) {
    invalidDay.style.display = 'inline-block'
    dayInput.style.border = '1px solid var(--error-color)'
    prevElement.style.color = 'var(--error-color)'
    dayDisplay.innerHTML = '--'
  } else {
    invalidDay.style.display = 'none'
    dayInput.style.border = '1px solid var(--light-grey-color)'
    prevElement.style.color = 'var(--smokey-grey-color)'
    dayDisplay.innerHTML = totalDays
  }
}

// Function responsible for validating the month input
const validateMonth = (totalMonths) => {
  const prevElement = monthInput.previousElementSibling

  if (isNaN(totalMonths) || totalMonths < 1 || totalMonths > 12) {
    invalidMonth.style.display = 'inline-block'
    monthInput.style.border = '1px solid var(--error-color)'
    prevElement.style.color = 'var(--error-color)'
    monthDisplay.innerHTML = '--'
  } else {
    invalidMonth.style.display = 'none'
    monthInput.style.border = '1px solid var(--light-grey-color)'
    prevElement.style.color = 'var(--smokey-grey-color)'
    monthDisplay.innerHTML = totalMonths
  }
}

// Function responsible for validating the year input
const validateYear = (totalYears, currentYear) => {
  const prevElement = yearInput.previousElementSibling
  
  if (isNaN(totalYears) || totalYears > currentYear || totalYears < 0) {
    invalidYear.style.display = 'inline-block'
    yearInput.style.border = '1px solid var(--error-color)'
    prevElement.style.color = 'var(--error-color)'
    yearDisplay.innerHTML = '--'
  } else {
    invalidYear.style.display = 'none'
    yearInput.style.border = '1px solid var(--light-grey-color)'
    prevElement.style.color = 'var(--smokey-grey-color)'
    yearDisplay.innerHTML = totalYears
  }
}

// Function responsible for validating the user's age
const validateAge = () => {
  const currentDate = new Date()
  const currentYear = currentDate.getFullYear()
  const inputDate = new Date(yearValue, monthValue - 1, dayValue)

  const diffInMilliseconds = currentDate - inputDate
  const ageDate = new Date(diffInMilliseconds)
  
  const totalYears = ageDate.getUTCFullYear() - 1970
  const totalMonths = ageDate.getUTCMonth()
  const totalDays = ageDate.getUTCDate() - 1

  validateInput(totalDays, 0, 30, dayInput, dayDisplay, errorDayMessage)
  validateInput(totalMonths + 1, 1, 12, monthInput, monthDisplay, errorMonthMessage)
  validateInput(totalYears, 0, currentYear, yearInput, yearDisplay, errorYearMessage)

  animateNumbers(totalYears, yearDisplay)
  animateNumbers(totalMonths, monthDisplay)
  animateNumbers(totalDays, dayDisplay)
}

// Function responsible for animating the display age numbers
const animateNumbers = (total, number) => {
  const increment = Math.ceil(total / 100)
  let start = 0

  const timer = setInterval(() => {
    start += increment
    number.innerText = start

    if (start >= total) {
      number.innerText = total
      clearInterval(timer)
    }
  }, 100 * Math.random())
}

// Function responsible for getting the input values and displaying them on the HTML layout
const getUserAge = () => {
  dayValue = dayInput.value
  monthValue = monthInput.value
  yearValue = yearInput.value
  
  dayDisplay.innerHTML = dayValue
  monthDisplay.innerHTML = monthValue
  yearDisplay.innerHTML = yearValue

  validateAge()
}

ageClickInput.addEventListener('click', getUserAge)
