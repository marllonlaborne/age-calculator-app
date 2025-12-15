const validateBirthDate = (day, month, year) => {
  const errors = {}

  if (!day) errors.day = 'Campo obrigatório'
  if (!month) errors.month = 'Campo obrigatório'
  if (!year) errors.year = 'Campo obrigatório'

  const dayNumber = Number(day)
  const monthNumber = Number(month)
  const yearNumber = Number(year)

  if (dayNumber < 1 || dayNumber > 31) errors.day = 'Dia inválido'
  if (monthNumber < 1 || monthNumber > 12) errors.month = 'Mês inválido'

  const currentYear = new Date().getFullYear()
  if (yearNumber < 1900 || yearNumber > currentYear)
    errors.year = 'Ano inválido'

  const testDate = new Date(yearNumber, monthNumber - 1, dayNumber)

  const dataDoesNotExist =
    testDate.getDate() !== dayNumber ||
    testDate.getMonth() !== monthNumber - 1 ||
    testDate.getFullYear() !== yearNumber

  if (dataDoesNotExist) errors.day = 'Data inválida'

  return errors
}

export default validateBirthDate
