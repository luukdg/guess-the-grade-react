const todayKey = () => new Date().toISOString().slice(0, 10)

export function loadDailyGameWon(): boolean | null {
  const raw = localStorage.getItem("gameWon")
  if (!raw) return null

  const { date, gameWon } = JSON.parse(raw)

  if (date !== todayKey()) {
    localStorage.removeItem("gameWon")
    return null
  }

  return gameWon
}

export function saveDailyGameWon(gameWon: boolean | null) {
  localStorage.setItem(
    "gameWon",
    JSON.stringify({
      date: todayKey(),
      gameWon,
    }),
  )
}
