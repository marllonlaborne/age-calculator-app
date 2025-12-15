const UserAge = ({ value, refProp, unit }) => {
  return (
    <p className="font-xl">
      <span className="primary-color" ref={refProp}>
        {value}
      </span>{' '}
      {unit}
    </p>
  )
}

export default UserAge
