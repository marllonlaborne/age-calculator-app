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
        <div className="birth-inputs">
          <div>
            <label className="font-base">Day</label>
            <input
              type="number"
              placeholder="DD"
              value={day}
              onChange={(event) => setDay(event.target.value)}
              min="1"
              max="31"
            />
          </div>

          <div>
            <label className="font-base">Month</label>
            <input
              type="number"
              placeholder="MM"
              value={month}
              onChange={(event) => setMonth(event.target.value)}
              min="1"
              max="12"
            />
          </div>

          <div>
            <label className="font-base">Year</label>
            <input
              type="number"
              placeholder="YYYY"
              value={year}
              onChange={(event) => setYear(event.target.value)}
              min="1900"
              max={new Date().getFullYear()}
            />
          </div>
        </div>

        <div className="age-calculate">
          <span></span>
          <button
            className="age-calculate-button smokey-grey-color-bg"
            onClick={getUserAge}
          >
            <img className="" src="./assets/img/icon-arrow.svg" alt="" />
          </button>
        </div>

        <div className="display-age">
          <p className="font-xl">
            <span className="primary-color" ref={yearsRef}>
              {ageYears}
            </span>{' '}
            years
          </p>
          <p className="font-xl">
            <span className="primary-color" ref={monthsRef}>
              {ageMonths}
            </span>{' '}
            months
          </p>
          <p className="font-xl">
            <span className="primary-color" ref={daysRef}>
              {ageDays}
            </span>{' '}
            days
          </p>
        </div>
      </section>
    </main>
  )
}

export default App
