import DateInput from '../elements/DateInput'

const BirthInputs = ({ day, month, year, setDay, setMonth, setYear }) => {
  return (
    <div className="birth-inputs">
      <DateInput
        label="Day"
        placeholder="DD"
        value={day}
        onChange={(event) => setDay(event.target.value)}
        min="1"
        max="31"
      />
      <DateInput
        label="Month"
        placeholder="MM"
        value={month}
        onChange={(event) => setMonth(event.target.value)}
        min="1"
        max="12"
      />
      <DateInput
        label="Year"
        placeholder="YYYY"
        value={year}
        onChange={(event) => setYear(event.target.value)}
        min="1900"
        max={new Date().getFullYear()}
      />
    </div>
  )
}

export default BirthInputs
