export const dayName2 = (date) => {
  const weekDayNames = {
    0: 'Sunday',
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday'
  }
  const fullDate = new Date(date)
  const dayNumber = fullDate.getDay()
  return weekDayNames[dayNumber]
}

export const dayName = (date) => {
  const day = new Date(date)
  return day.toLocaleDateString('en-US', { weekday: 'long' })
}

export const monthName = (date) => {
  const day = new Date(date)
  return day.toLocaleDateString('en-US', { month: 'long' })
}

export const day = (date) => {
  const day = new Date(date)
  return day.toLocaleDateString('en-US', { day: 'numeric' })
}

export const year = (date) => {
  const day = new Date(date)
  return day.toLocaleDateString('en-US', { year: 'numeric' })
}

export const time = (date) => {
  const day = new Date(date)
  return day.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
}

export const timerTimeConversion = (timerTime) => {
  const seconds = ('0' + (Math.floor((timerTime / 1000) % 60) % 60)).slice(-2)
  const minutes = ('0' + Math.floor((timerTime / 60000) % 60)).slice(-2)
  const hours = ('0' + Math.floor((timerTime / 3600000) % 60)).slice(-2)

  const hoursDisplay = hours > 0 ? hours + (hours === 1 ? ' hour, ' : ' hours, ') : ''
  const minutesDisplay = minutes > 0 ? minutes + (minutes === 1 ? ' minute, ' : ' minutes ') : ''
  const secondsDisplay = seconds + (seconds === 1 ? ' second' : ' seconds')

  return hoursDisplay + minutesDisplay + secondsDisplay
}
