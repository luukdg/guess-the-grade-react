/* eslint-disable react-hooks/rules-of-hooks */
import { ArrowLeft } from "lucide-react"

import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import { getDailyStats } from "@/api/fetchDailyVideoStats"
import { Button } from "@/components/ui/button"
import { useGameContext } from "@/context/gameContext"

import { BOTDStats } from "../UI/results-page/BOTDStats"
import { Spinner } from "../ui/spinner"

const ResultBoulderOfTheDay = () => {
  const { gameWon, guessState } = useGameContext()
  const [isLoadingStats, setIsLoadingStats] = useState(true)
  const [videoStats, setVideoStats] = useState()
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchStats() {
      const { guesses } = await getDailyStats()
      setVideoStats(guesses)
      setIsLoadingStats(false)
    }

    fetchStats()
  }, [])

  const amountOfTries = guessState.guess.length
  const guesses = guessState.guess

  return (
    <div className="flex h-full w-full flex-col justify-center gap-2 overflow-hidden px-3 pt-3">
      <div className="absolute top-3">
        <Button variant="outline" onClick={() => navigate("/selectGame")}>
          <ArrowLeft />
        </Button>
      </div>
      <div className="font-archivo-black text-center text-2xl font-bold">
        {gameWon && amountOfTries === 1 ? (
          "Flawless! Flash send."
        ) : gameWon ? (
          <>
            Nice send!
            <br />
            You topped it in {amountOfTries} tries.
          </>
        ) : (
          "No send today. Tomorrow’s a fresh problem."
        )}
      </div>

      <div className="text-center text-sm">
        4<strong>Your guesses:</strong> {guesses.join(", ")}
      </div>

      <div className="mt-10 w-full">
        {isLoadingStats ? (
          <Spinner className="size-12" />
        ) : (
          <BOTDStats guesses={videoStats} />
        )}
      </div>
    </div>
  )
}

export default ResultBoulderOfTheDay
