import { createContext, useContext, useEffect, useState } from "react"
import {
  loadDailyFirebaseId,
  loadDailyGame,
  loadDailyGuesses,
  saveDailyGame,
} from "@/functions/useDailyGameState"
import { GameContextType, GuessStateType } from "@/types/gameContext"
import { useSettings } from "./settingsContext"

const GameContext = createContext<GameContextType | undefined>(undefined)

export const GameProvider = ({ children }: { children: any }) => {
  // General
  const [firebaseId, setFirebaseId] = useState<string | null>(
    loadDailyFirebaseId,
  )
  const [correctGrade, setCorrectGrade] = useState<string | null>(null)
  const [gameWon, setGameWon] = useState<boolean | null>(loadDailyGame)
  const [videoId, setVideoId] = useState<string | null>(null)
  const [videoStats, setVideoStats] = useState<any>(null)
  const { saveToStore, settings } = useSettings()

  // Boulder of the day
  const [guessState, setGuessState] = useState<GuessStateType>(() => {
    const stored = loadDailyGuesses()
    return (
      stored ?? {
        guess: [],
        outcome: [],
        difference: [],
      }
    )
  })

  // Normal game mode
  const [lives, setLives] = useState<number>(3)

  // Update functions
  function updateFirebaseId(id: string): void {
    setFirebaseId(id)
  }

  function updateCorrectGrade(grade: string): void {
    setCorrectGrade(grade)
  }

  function updateGuessState(
    convertedGuess: string,
    isCorrect: boolean,
    difference: number,
  ): void {
    setGuessState((prev) => ({
      guess: [...prev.guess, convertedGuess],
      outcome: [...prev.outcome, isCorrect],
      difference: [...prev.difference, difference],
    }))
  }

  function updateGameWon(outcome: boolean): void {
    setGameWon(outcome)
  }

  function updateVideoId(link: string): void {
    setVideoId(link)
  }

  function decrementLife() {
    setLives((prev) => prev - 1)
  }

  useEffect(() => {
    if (gameWon === null) return

    const stats = settings.dailyBlocStats

    // Increment total games
    const totalGames = stats.totalGames + 1

    // Increment streak if won, reset to 0 if lost
    const currentStreak = gameWon ? stats.currentStreak + 1 : 0

    // Keep highest streak ever
    const maxStreak = Math.max(stats.maxStreak, currentStreak)

    // Running average of guesses per game
    // Formula: (oldAverage * previousGames + guessesThisGame) / totalGames
    const guessesThisGame = guessState.guess.length
    const averageScore =
      (stats.averageScore * (totalGames - 1) + guessesThisGame) / totalGames

    saveToStore({
      dailyBlocStats: {
        totalGames,
        currentStreak,
        maxStreak,
        averageScore: Math.round(averageScore * 10) / 10, // 1 decimal place
      },
    })

    saveDailyGame(gameWon, guessState, firebaseId)
  }, [gameWon]) // ✅ only run when game ends, not on every guessState change

  return (
    <GameContext.Provider
      value={{
        firebaseId,
        updateFirebaseId,
        correctGrade,
        updateCorrectGrade,
        guessState,
        updateGuessState,
        gameWon,
        updateGameWon,
        videoId,
        updateVideoId,
        lives,
        decrementLife,
        setLives,
        videoStats,
        setVideoStats,
      }}
    >
      {children}
    </GameContext.Provider>
  )
}

export const useGameContext = () => useContext(GameContext)
