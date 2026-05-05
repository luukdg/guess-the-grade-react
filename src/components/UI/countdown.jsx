import { useState, useEffect } from "react"

export function CountdownToMidnight() {
  const [timeLeft, setTimeLeft] = useState("")

  useEffect(() => {
    function calculate() {
      const now = new Date()
      const midnight = new Date()
      midnight.setHours(24, 0, 0, 0) // next midnight

      const diff = midnight.getTime() - now.getTime()

      const hours = Math.floor(diff / (1000 * 60 * 60))
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((diff % (1000 * 60)) / 1000)

      setTimeLeft(
        `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`,
      )
    }

    calculate()
    const interval = setInterval(calculate, 1000)
    return () => clearInterval(interval) // cleanup
  }, [])

  return <span>{timeLeft}</span>
}
