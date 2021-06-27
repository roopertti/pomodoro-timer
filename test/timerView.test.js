import React from 'react'
import renderer from 'react-test-renderer'
import { render, fireEvent } from '@testing-library/react'

import AppWrapper from '../src/AppWrapper'
import Timer from 'Components/views/Timer'
import { TimerContext } from 'Contexts/TimerContext'
import { AlarmContext } from 'Contexts/AlarmContext'
import { TIMER_STATE, TIMER_DURATIONS } from 'Util/constants'

const renderTimerWithState = ({
  seconds = 0,
  timerState = TIMER_STATE.INITIAL,
  currentDuration = TIMER_DURATIONS.WORK,
  startWork = () => {},
  startBreak = () => {},
  toggleRunning = () => {},
  handleReset = () => {},
  isPlaying = false,
  stopAlarm = () => {}
}) => (
  <TimerContext.Provider
    value={{
      seconds,
      timerState,
      currentDuration,
      handleReset,
      startWork,
      startBreak,
      toggleRunning
    }}
  >
    <AlarmContext.Provider
      value={{
        playAlarmOnce: () => {},
        startAlarm: () => {},
        stopAlarm,
        isPlaying
      }}
    >
      <Timer />
    </AlarmContext.Provider>
  </TimerContext.Provider>
)

describe('Timer view integration tests', () => {
  it('renders initial Timer view with AppWrapper and compares snapshot', () => {
    const tree = renderer.create(
      (
        <AppWrapper>
          <Timer />
        </AppWrapper>
      )
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders Timer with state: work running', () => {
    const stopFn = jest.fn()
    const wrappedTimer = renderTimerWithState({
      seconds: 1485,
      timerState: TIMER_STATE.RUNNING,
      currentDuration: TIMER_DURATIONS.WORK,
      toggleRunning: stopFn
    })
    const { getByTestId, getByText } = render(wrappedTimer)
    expect(getByTestId('timer-view')).toBeInTheDocument()
    expect(getByTestId('timer-description')).toHaveTextContent('Work now until the timer runs out...')
    expect(getByTestId('timer-mmss')).toHaveTextContent('24:45')
    const stopBtn = getByText('Stop')
    fireEvent.click(stopBtn)
    expect(stopFn).toHaveBeenCalled()
  })

  it('renders Timer with state: break running', () => {
    const stopFn = jest.fn()
    const wrappedTimer = renderTimerWithState({
      seconds: 285,
      timerState: TIMER_STATE.RUNNING,
      currentDuration: TIMER_DURATIONS.BREAK,
      toggleRunning: stopFn
    })
    const { getByTestId, getByText } = render(wrappedTimer)
    expect(getByTestId('timer-view')).toBeInTheDocument()
    expect(getByTestId('timer-description')).toHaveTextContent('Enjoy your break for now! Come back here when the timer runs out...')
    expect(getByTestId('timer-mmss')).toHaveTextContent('4:45')
    expect(getByTestId('timer-btn')).toHaveTextContent('Stop')
    const stopBtn = getByText('Stop')
    fireEvent.click(stopBtn)
    expect(stopFn).toHaveBeenCalled()
  })

  it('renders Timer with state: paused', () => {
    const resumeFn = jest.fn()
    const wrappedTimer = renderTimerWithState({
      seconds: 10,
      timerState: TIMER_STATE.STOPPED,
      currentDuration: TIMER_DURATIONS.WORK,
      toggleRunning: resumeFn
    })
    const { getByTestId, getByText } = render(wrappedTimer)
    expect(getByTestId('timer-view')).toBeInTheDocument()
    expect(getByTestId('timer-description')).toHaveTextContent('Timer paused')
    expect(getByTestId('timer-mmss')).toHaveTextContent('0:10')
    const resumeBtn = getByText('Resume')
    fireEvent.click(resumeBtn)
    expect(resumeFn).toHaveBeenCalled()
  })

  it('renders Timer with state: work complete', () => {
    const stopAlarmFn = jest.fn()
    const startBreakFn = jest.fn()
    const wrappedTimer = renderTimerWithState({
      seconds: 0,
      timerState: TIMER_STATE.COMPLETE,
      currentDuration: TIMER_DURATIONS.WORK,
      isPlaying: true,
      stopAlarm: stopAlarmFn,
      startBreak: startBreakFn
    })
    const completeTimer = render(wrappedTimer)
    expect(completeTimer.getByTestId('timer-view')).toBeInTheDocument()
    expect(completeTimer.getByTestId('timer-description')).toHaveTextContent('Work period complete! Time to have a break!')
    expect(completeTimer.getByTestId('timer-mmss')).toHaveTextContent('0:00')
    const stopAlarmBtn = completeTimer.getByText('Stop alarm')
    fireEvent.click(stopAlarmBtn)
    expect(stopAlarmFn).toHaveBeenCalled()

    const wrappedTimerAfterStoppedAlarm = renderTimerWithState({
      seconds: 0,
      timerState: TIMER_STATE.COMPLETE,
      currentDuration: TIMER_DURATIONS.WORK,
      startBreak: startBreakFn
    })

    completeTimer.rerender(wrappedTimerAfterStoppedAlarm)
    expect(completeTimer.queryByTestId('stop-alarm-btn')).toBeNull()
    const startBreakBtn = completeTimer.getByTestId('start-break-btn')
    fireEvent.click(startBreakBtn)
    expect(startBreakFn).toHaveBeenCalled()
  })

  it('renders Timer with state: break complete', () => {
    const stopAlarmFn = jest.fn()
    const startWorkFn = jest.fn()
    const wrappedTimer = renderTimerWithState({
      seconds: 0,
      timerState: TIMER_STATE.COMPLETE,
      currentDuration: TIMER_DURATIONS.BREAK,
      isPlaying: true,
      stopAlarm: stopAlarmFn,
      startWork: startWorkFn
    })
    const completeTimer = render(wrappedTimer)
    expect(completeTimer.getByTestId('timer-view')).toBeInTheDocument()
    expect(completeTimer.getByTestId('timer-description')).toHaveTextContent('Break is over! Back to work!')
    expect(completeTimer.getByTestId('timer-mmss')).toHaveTextContent('0:00')
    const stopAlarmBtn = completeTimer.getByText('Stop alarm')
    fireEvent.click(stopAlarmBtn)
    expect(stopAlarmFn).toHaveBeenCalled()

    const wrappedTimerAfterStoppedAlarm = renderTimerWithState({
      seconds: 0,
      timerState: TIMER_STATE.COMPLETE,
      currentDuration: TIMER_DURATIONS.BREAK,
      startWork: startWorkFn
    })

    completeTimer.rerender(wrappedTimerAfterStoppedAlarm)
    expect(completeTimer.queryByTestId('stop-alarm-btn')).toBeNull()
    const startWorkBtn = completeTimer.getByTestId('start-work-btn')
    fireEvent.click(startWorkBtn)
    expect(startWorkFn).toHaveBeenCalled()
  })
})
