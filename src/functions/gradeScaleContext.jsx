import { createContext, useState, useContext } from "react"

// Creates a global boolean to check if the V-scale converter is necessary
const GradeScaleContext = createContext()

export const GradeScaleProvider = ({ children }) => {
  const [gradeScale, setGradeScale] = useState(false)
  return (
    <GradeScaleContext.Provider value={{ gradeScale, setGradeScale }}>
      {children}
    </GradeScaleContext.Provider>
  )
}

// Custom hook for easier access
export const useGradeScale = () => useContext(GradeScaleContext)
