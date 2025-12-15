const AgeCalculateButton = ({ getUserAge }) => {
  return (
    <div className="age-calculate">
      <span></span>
      <button
        className="age-calculate-button smokey-grey-color-bg"
        onClick={getUserAge}
      >
        <img src="./assets/img/icon-arrow.svg" alt="" />
      </button>
    </div>
  )
}

export default AgeCalculateButton
