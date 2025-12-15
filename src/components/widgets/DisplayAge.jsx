import UserAge from '../elements/UserAge'

const DisplayAge = ({
  ageYears,
  ageMonths,
  ageDays,
  yearsRef,
  monthsRef,
  daysRef,
}) => {
  return (
    <div className="display-age">
      <UserAge value={ageYears} refProp={yearsRef} unit="years" />
      <UserAge value={ageMonths} refProp={monthsRef} unit="months" />
      <UserAge value={ageDays} refProp={daysRef} unit="days" />
    </div>
  )
}

export default DisplayAge
