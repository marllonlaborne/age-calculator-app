// Function responsible for animating the display age numbers
const animateNumbers = (total, number) => {
  const increment = Math.ceil(total / 100)
  let start = 0

  const timer = setInterval(() => {
    start += increment
    number.innerText = start

    if (start >= total) {
      number.innerText = total
      clearInterval(timer)
    }
  }, 100 * Math.random())
}

export default animateNumbers
