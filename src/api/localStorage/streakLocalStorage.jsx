export function saveStreakToLocalStorage(streak) {
  const stored = localStorage.getItem("Streak")

  if (stored < streak) {
    try {
      localStorage.setItem("Streak", streak)
    } catch (error) {
      console.log(error)
    }
  }
}

export function retrieveStreak() {
  const stored = localStorage.getItem("Streak")
  return stored
}
