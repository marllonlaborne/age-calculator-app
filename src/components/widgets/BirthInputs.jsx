import DateInput from '../elements/DateInput'

const BirthInputs = ({
  day,
  month,
  year,
  setDay,
  setMonth,
  setYear,
  error,
}) => {
  return (
    <div className="birth-inputs">
      <DateInput
        label="Day"
        placeholder="DD"
        value={day}
        onChange={(event) => setDay(event.target.value)}
        min="1"
        max="31"
        error={error.day}
      />
      <DateInput
        label="Month"
        placeholder="MM"
        value={month}
        onChange={(event) => setMonth(event.target.value)}
        min="1"
        max="12"
        error={error.month}
      />
      <DateInput
        label="Year"
        placeholder="YYYY"
        value={year}
        onChange={(event) => setYear(event.target.value)}
        min="1900"
        max={new Date().getFullYear()}
        error={error.year}
      />
    </div>
  )
}

export default BirthInputs
