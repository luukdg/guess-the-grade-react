import { GuessStateType } from "@/types/gameContext"

const todayKey = () => new Date().toISOString().slice(0, 10)

export function loadDailyFirebaseId(): string | null {
  const raw = localStorage.getItem("dailyGame")
  if (!raw) return null

  const parsed = JSON.parse(raw)

  return parsed.firebaseId ?? null
}

export function loadDailyGuesses(): GuessStateType | null {
  const raw = localStorage.getItem("dailyGame")
  if (!raw) return null

  const parsed = JSON.parse(raw)

  return parsed.guessState ?? null
}

export function loadDailyGame(): boolean | null {
  const raw = localStorage.getItem("dailyGame")
  if (!raw) return null

  const { date, gameWon } = JSON.parse(raw)

  if (date !== todayKey()) {
    localStorage.removeItem("dailyGame")
    return null
  }

  return gameWon
}

export function saveDailyGame(
  gameWon: boolean | null,
  guessState: GuessStateType,
  firebaseId: string | null,
) {
  localStorage.setItem(
    "dailyGame",
    JSON.stringify({
      date: todayKey(),
      gameWon,
      guessState,
      firebaseId,
    }),
  )
}
