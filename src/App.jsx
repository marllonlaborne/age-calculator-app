import './index.css'

const App = () => {
  return (
    <main className="container off-white-color-bg">
      <section className="age-calculator white-color-bg">
        <div className="birth-inputs">
          <div>
            <label className="font-base">Day</label>
            <input type="number" placeholder="DD" />
          </div>

          <div>
            <label className="font-base">Month</label>
            <input type="number" placeholder="MM" />
          </div>

          <div>
            <label className="font-base">Year</label>
            <input type="number" placeholder="YYYY" />
          </div>
        </div>

        <div className="age-calculate">
          <span></span>
          <button className="age-calculate-button smokey-grey-color-bg">
            <img className="" src="./assets/img/icon-arrow.svg" alt="" />
          </button>
        </div>

        <div className="display-age">
          <p className="font-xl">
            <span className="primary-color">--</span> years
          </p>
          <p className="font-xl">
            <span className="primary-color">--</span> months
          </p>
          <p className="font-xl">
            <span className="primary-color">--</span> days
          </p>
        </div>
      </section>
    </main>
  )
}

export default App
