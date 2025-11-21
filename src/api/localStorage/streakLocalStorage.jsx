export function saveStreakToLocalStorage(streak) {
  const stored = localStorage.getItem("Streak")

  if (stored < streak) {
    try {
      localStorage.setItem("Streak", streak)
      console.log("Streak saved to localStorage, value:", streak)
    } catch (error) {
      console.error("Error saving to localStorage", error)
    }
  }
}

export function retrieveStreak() {
  const stored = localStorage.getItem("Streak")
  console.log("Streak retrieved from localStorage")
  return stored
}
