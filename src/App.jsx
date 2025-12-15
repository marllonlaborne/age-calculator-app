import AgeCalculateButton from './components/elements/AgeCalculateButton'
import BirthInputs from './components/widgets/BirthInputs'
import DisplayAge from './components/widgets/DisplayAge'
import animateNumbers from './libs/animateNumbers'
import { useRef, useState } from 'react'
import './index.css'

const App = () => {
  const [day, setDay] = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')

  const [ageYears, setAgeYears] = useState('--')
  const [ageMonths, setAgeMonths] = useState('--')
  const [ageDays, setAgeDays] = useState('--')

  const yearsRef = useRef(null)
  const monthsRef = useRef(null)
  const daysRef = useRef(null)

  const getUserAge = () => {
    if (window.ageTimers) {
      window.ageTimers.forEach((timer) => clearInterval(timer))
      window.ageTimers = []
    }

    const today = new Date()
    const birth = new Date(year, month - 1, day)

    if (birth > today) {
      alert('A data de nascimento não pode ser no futuro')
      return
    }

    const diffInMilliseconds = today - birth
    const ageDate = new Date(diffInMilliseconds)

    let years = ageDate.getUTCFullYear() - 1970
    let months = ageDate.getUTCMonth()
    let days = ageDate.getUTCDate() - 1

    setAgeYears(0)
    setAgeMonths(0)
    setAgeDays(0)

    animateNumbers(years, yearsRef.current)
    animateNumbers(months, monthsRef.current)
    animateNumbers(days, daysRef.current)
  }

  return (
    <main className="container off-white-color-bg">
      <section className="age-calculator white-color-bg">
        <BirthInputs
          day={day}
          month={month}
          year={year}
          setDay={setDay}
          setMonth={setMonth}
          setYear={setYear}
        />

        <AgeCalculateButton getUserAge={getUserAge} />

        <DisplayAge
          ageDays={ageDays}
          ageMonths={ageMonths}
          ageYears={ageYears}
          daysRef={daysRef}
          monthsRef={monthsRef}
          yearsRef={yearsRef}
        />
      </section>
    </main>
  )
}

export default App
