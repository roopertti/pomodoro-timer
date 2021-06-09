import { parseSecondsToTimeString } from './timeFormat'

describe('Time format tests', () => {
  it('parses amount of seconds to expected strings', () => {
    const seconds = [
      9285, // 2 hours, 34 minutes, 45 seconds
      1341, // 22 minutes, 21 seconds
      360000, // 100 hours, going over the displayable treshold by 1 second
      Infinity,
      -999999
    ]
    const expectedResults = [
      '02:34:45',
      '22:21',
      '99:59:59',
      '99:59:59',
      '00:00'
    ]

    expect(seconds.map(parseSecondsToTimeString)).toEqual(expectedResults)
  })
})
