const MINUTE = 60
const HOUR = 3600
const MAX_VALUE = 359999

/**
 * Extracts amount of hours from given amount of seconds. Also makes sure that hours
 * stay within the treshold of 0-99.
 * @param {Number} seconds
 * @returns {Number} Hours extracted from given seconds
 */
export const extractHours = (seconds) => Math.min(
  99,
  Math.max(
    0,
    Math.floor(seconds / HOUR)
  )
)

/**
 * Extracts amount of minutes from given amount of seconds after full hours have been subtracted.
 * @param {Number} seconds
 * @returns {Number} Minutes extracted from given seconds
 */
export const extractMinutes = (seconds) => Math.min(
  59,
  Math.max(
    0,
    Math.floor((seconds % HOUR) / MINUTE)
  )
)

/**
 * Extracts amount of seconds from given amount of seconds after full minutes have been subtracted.
 * @param {Number} seconds
 * @returns {Number} Remainder of seconds
 */
export const extractSeconds = (seconds) => Math.min(
  59,
  Math.max(
    0,
    Math.floor(seconds % MINUTE)
  )
)

/**
 * Returns number as string
 * @param {Number} num
 * @returns {String | null} Formatted string
 */
export const formatNum = (num) => {
  const numStr = String(num)
  return numStr.length > 1 ? numStr : numStr.padStart(2, '0')
}

export function parseSecondsToTimeString (seconds = 0) {
  if (seconds === Infinity || seconds >= MAX_VALUE) { // 😎
    return '99:59:59'
  } else if (seconds < 0) {
    return '00:00'
  }
  const amountOfHours = extractHours(seconds)
  const hh = amountOfHours > 0 ? formatNum(amountOfHours) : null
  const mm = formatNum(extractMinutes(seconds))
  const ss = formatNum(extractSeconds(seconds))

  return [hh, mm, ss]
    .filter(Boolean)
    .join(':')
}
