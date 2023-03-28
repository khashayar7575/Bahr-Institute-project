const calculateElapsedTime = (commentTime: string | number | Date) => {
  // get time from comment posted
  const createdAt = new Date(commentTime)
  const today = new Date()
  const timeInMileSec = today.getTime() - createdAt.getTime()

  let sec = Number((timeInMileSec / 1000).toFixed(0))
  let min = Number((timeInMileSec / (1000 * 60)).toFixed(0))
  let hrs = Number((timeInMileSec / (1000 * 60 * 60)).toFixed(0))
  let days = Number((timeInMileSec / (1000 * 60 * 60 * 24)).toFixed(0))
  let weeks = Number((timeInMileSec / (1000 * 60 * 60 * 24 * 7)).toFixed(0))
  let months = Number((timeInMileSec / (1000 * 60 * 60 * 24 * 31)).toFixed(0))
  let years = Number((timeInMileSec / (1000 * 60 * 60 * 24 * 365)).toFixed(0))
  let time
  let unit
  if (sec < 60) {
    return 'ثانیه'
  } else if (min < 60) {
    time = min
    unit = ' ثانیه'
    // return min + " دقیقه";
  } else if (hrs < 24) {
    time = hrs
    unit = ' ساعت'
    // return hrs + " ساعت";
  } else if (days < 7) {
    time = days
    unit = ' روز'
    // return days + " روز";
  } else if (weeks < 4) {
    time = weeks
    unit = ' هفته'
    // return weeks + " هفته";
  } else if (months < 12) {
    time = months
    unit = ' ماه'
    // return months + " ماه";
  } else {
    time = years
    unit = ' سال'
    // return years + " سال";
  }
  return time + unit
}

export { calculateElapsedTime }
