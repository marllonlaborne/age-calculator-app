const DateInput = ({
  label,
  placeholder,
  value,
  onChange,
  min,
  max,
  error,
}) => {
  return (
    <div>
      <label className={`font-base ${error ? 'error-label' : ''}`}>
        {label}
      </label>
      <input
        type="number"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        min={min}
        max={max}
        className={error ? 'error-input' : ''}
      />
      {error && <span className="error-message">{error}</span>}
    </div>
  )
}

export default DateInput
