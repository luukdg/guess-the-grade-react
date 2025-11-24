import { createContext, useState, useContext } from "react"

// Creates a global boolean to check if the V-scale converter is necessary
const SettingsContext = createContext()

export const SettingsProvider = ({ children }) => {
  const [autoPlay, setAutoplay] = useState(true)
  const [mute, setMute] = useState(false)
  const [speed, setSpeed] = useState(1) // 1x or 2x
  const [lightMode, setLightMode] = useState(() => {
    const stored = localStorage.getItem("LightMode")
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

  return (
    <SettingsContext.Provider
      value={{
        gradeScale,
        setGradeScale,
        autoPlay,
        setAutoplay,
        mute,
        setMute,
        speed,
        setSpeed,
        videoType,
        setVideoType,
        lightMode,
        setLightMode,
      }}
    >
      {children}
    </SettingsContext.Provider>
  )
}

// Custom hook for easier access
export const useSettings = () => useContext(SettingsContext)
