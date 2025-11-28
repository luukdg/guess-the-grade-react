import { createContext, useState, useContext } from "react"
import { set } from "zod"

// Creates a global boolean to check if the V-scale converter is necessary
const SettingsContext = createContext()

export const SettingsProvider = ({ children }) => {
  const [autoPlay, setAutoplay] = useState(() => {
    const stored = localStorage.getItem("AutoPlay")
    return stored ? JSON.parse(stored) : true
  })
  const [mute, setMute] = useState(() => {
    const stored = localStorage.getItem("Mute")
    return stored ? JSON.parse(stored) : true
  })

  const [loop, setLoop] = useState(() => {
    const stored = localStorage.getItem("Loop")
    return stored ? JSON.parse(stored) : true
  })

  const [always2x, setAlways2x] = useState(() => {
    const stored = localStorage.getItem("Always2x")
    return stored ? JSON.parse(stored) : false
  })

  const [videoType, setVideoType] = useState(() => {
    const stored = localStorage.getItem("VideoType")
    return stored ? JSON.parse(stored) : { value: "all", label: "All" }
  })

  const [gradeScale, setGradeScale] = useState(() => {
    const stored = localStorage.getItem("gradeScale")
    return stored
      ? JSON.parse(stored)
      : { value: "font-scale", label: "Font-scale" }
  })

  const [openControls, setOpenControls] = useState(true)

  const updateAutoPlay = (value) => {
    setAutoplay(value)
    localStorage.setItem("AutoPlay", JSON.stringify(value))
  }

  const updateMute = (value) => {
    setMute(value)
    localStorage.setItem("Mute", JSON.stringify(value))
  }

  const updateLoop = (value) => {
    setLoop(value)
    localStorage.setItem("Loop", JSON.stringify(value))
  }

  const updateAlways2x = (value) => {
    setAlways2x(value)
    localStorage.setItem("Always2x", JSON.stringify(value))
  }

  const updateVideoType = (value) => {
    setVideoType(value)
    localStorage.setItem("VideoType", JSON.stringify(value))
  }

  const updateGradeScale = (value) => {
    setGradeScale(value)
    localStorage.setItem("gradeScale", JSON.stringify(value))
  }

  return (
    <SettingsContext.Provider
      value={{
        loop,
        setLoop,
        updateLoop,
        gradeScale,
        setGradeScale,
        autoPlay,
        setAutoplay,
        updateAutoPlay,
        mute,
        setMute,
        updateMute,
        always2x,
        setAlways2x,
        updateAlways2x,
        videoType,
        setVideoType,
        updateVideoType,
        updateGradeScale,
        openControls,
        setOpenControls,
      }}
    >
      {children}
    </SettingsContext.Provider>
  )
}

export const useSettings = () => useContext(SettingsContext)
