import './index.css'
import { useState } from 'react'
import useAgeCalculator from './hooks/useAgeCalculator'
import DisplayAge from './components/widgets/DisplayAge'
import BirthInputs from './components/widgets/BirthInputs'
import AgeCalculateButton from './components/elements/AgeCalculateButton'

const App = () => {
  const [day, setDay] = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')

  const {
    calculateAge,
    ageYears,
    ageMonths,
    ageDays,
    errors,
    yearsRef,
    monthsRef,
    daysRef,
  } = useAgeCalculator()

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
          error={errors}
        />

        <AgeCalculateButton getUserAge={() => calculateAge(day, month, year)} />

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
