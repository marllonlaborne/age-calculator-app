import { useRef, useState } from 'react'
import animateNumbers from '../libs/animateNumbers'
import validateBirthDate from '../libs/validateBirthDate'

const useAgeCalculator = () => {
  const [ageYears, setAgeYears] = useState('--')
  const [ageMonths, setAgeMonths] = useState('--')
  const [ageDays, setAgeDays] = useState('--')

  const [errors, setErrors] = useState({})

  const yearsRef = useRef(null)
  const monthsRef = useRef(null)
  const daysRef = useRef(null)

  const calculateAge = (day, month, year) => {
    const validationErrors = validateBirthDate(day, month, year)

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setErrors({})

    const today = new Date()
    const birth = new Date(year, month - 1, day)

    if (birth > today) {
      setErrors({ year: 'Data no futuro' })
      return
    }

    if (window.ageTimers) {
      window.ageTimers.forEach(clearInterval)
      window.ageTimers = []
    }

    const diff = today - birth
    const ageDate = new Date(diff)

    const years = ageDate.getUTCFullYear() - 1970
    const months = ageDate.getUTCMonth()
    const days = ageDate.getUTCDate() - 1

    setAgeYears(0)
    setAgeMonths(0)
    setAgeDays(0)

    animateNumbers(years, yearsRef.current)
    animateNumbers(months, monthsRef.current)
    animateNumbers(days, daysRef.current)
  }

  return {
    calculateAge,
    ageYears,
    ageMonths,
    ageDays,
    errors,
    yearsRef,
    monthsRef,
    daysRef,
  }
}

export default useAgeCalculator
