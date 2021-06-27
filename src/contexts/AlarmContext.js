import React, { useEffect, useMemo, useRef, useState } from 'react'
import PropTypes from 'prop-types'

import alarmSound from 'Assets/audio/alarm.wav'

export const AlarmContext = React.createContext()
const { Provider } = AlarmContext

export function AlarmProvider ({ children }) {
  const audioFile = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const playAlarmOnce = () => {
    if (audioFile?.current) {
      setIsPlaying(true)
      audioFile.current.play()
    }
  }

  const startAlarm = () => {
    if (audioFile?.current) {
      playAlarmOnce()
      audioFile.current.addEventListener('ended', playAlarmOnce)
    }
  }

  const stopAlarm = () => {
    if (audioFile?.current) {
      setIsPlaying(false)
      audioFile.current.removeEventListener('ended', playAlarmOnce)
      audioFile.current.pause()
    }
  }

  useEffect(() => {
    audioFile.current = new Audio(alarmSound)

    return () => {
      stopAlarm()
    }
  }, [])

  const contextValue = useMemo(() => {
    return { playAlarmOnce, startAlarm, stopAlarm, isPlaying }
  }, [playAlarmOnce, startAlarm, stopAlarm, isPlaying])

  return (
    <Provider value={contextValue}>{children}</Provider>
  )
}

AlarmProvider.propTypes = {
  children: PropTypes.node
}
