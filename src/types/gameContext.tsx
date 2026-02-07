export type GameContextType = {
  firebaseId: string | null
  correctGrade: string | null
  gameWon: boolean | null
  guessState: GuessStateType
  videoId: string | null
  lives: number
  videoStats: any
  setVideoStats: (stats: any) => any
  setLives: (lives: number) => void

  updateFirebaseId: (id: string) => void
  updateCorrectGrade: (grade: string) => void
  updateGameWon: (outcome: boolean) => void
  updateVideoId: (link: string) => void
  updateGuessState: (
    convertedGuess: string,
    isCorrect: boolean,
    difference: number,
  ) => void
  decrementLife: () => void
}

export type GuessStateType = {
  guess: string[]
  outcome: boolean[]
  difference: number[]
}

export type StoredGameWon = {
  date: string
  gameWon: boolean | null
}
