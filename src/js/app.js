const dayInput = document.querySelector('[data-day-input]')
const monthInput = document.querySelector('[data-month-input]')
const yearInput = document.querySelector('[data-year-input]')
const dayDisplay = document.querySelector('.days')
const monthDisplay = document.querySelector('.months')
const yearDisplay = document.querySelector('.years')
const ageInput = document.querySelector('[data-age-input]')
const invalidDay = document.querySelector('.invalid-day')
const invalidMonth = document.querySelector('.invalid-month')
const invalidYear = document.querySelector('.invalid-year')

const validateAge = () => {
  const currentDate = new Date()
  const year = currentDate.getFullYear()

  const inputDate = new Date(yearValue, monthValue - 1, dayValue)
  const diffInMilliseconds = currentDate - inputDate
  const ageDate = new Date(diffInMilliseconds)

  const totalYears = ageDate.getUTCFullYear() - 1970
  const totalMonths = ageDate.getUTCMonth()
  const totalDays = ageDate.getUTCDate() - 1

  if (dayValue < 1 || dayValue > 31) {
    invalidDay.style.display = 'inline-block'
    dayDisplay.innerHTML = '--'
  } else {
    invalidDay.style.display = 'none'
    dayDisplay.innerHTML = totalDays
  }
  
  if (monthValue < 1 || monthValue > 12) {
    invalidMonth.style.display = 'inline-block'
    monthDisplay.innerHTML = '--'
  } else {
    invalidMonth.style.display = 'none'
    monthDisplay.innerHTML = totalMonths
  }
  
  if (yearValue > year) {
    invalidYear.style.display = 'inline-block'
    yearDisplay.innerHTML = '--'
  } else {
    invalidYear.style.display = 'none'
    yearDisplay.innerHTML = totalYears
  }
}

const getUserAge = () => {
  dayValue = parseFloat(dayInput.value)
  monthValue = parseFloat(monthInput.value)
  yearValue = parseFloat(yearInput.value)
  
  dayDisplay.innerHTML = dayValue
  monthDisplay.innerHTML = monthValue
  yearDisplay.innerHTML = yearValue

  validateAge()
}

ageInput.addEventListener('click', getUserAge)
