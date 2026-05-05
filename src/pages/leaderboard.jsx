/* eslint-disable react-hooks/rules-of-hooks */
import { Separator } from "@radix-ui/react-separator"
import { Trophy } from "lucide-react"

import { useEffect, useState } from "react"

import { getLeaderBoard } from "@/api/fetchLeaderboard"
import { Card } from "@/components/UI/card"
import { Spinner } from "@/components/UI/spinner"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useAuth } from "@/context/loginContext"
import { useTheme } from "@/context/themeProvider"

import ClimberIconLight from "/climber-light.svg"
import climberIcon from "/climber.svg"

// Different options per game mode
const statOptions = {
  survivalStats: [
    { value: "maxStreak", label: "Max Streak" },
    { value: "accuracy", label: "Accuracy" },
    { value: "totalGames", label: "Total Games" },
  ],
  dailyBlocStats: [
    { value: "maxStreak", label: "Max Streak" },
    { value: "averageScore", label: "Guess Average" },
  ],
}

function Leaderboard() {
  const { user, loginWithGoogle } = useAuth()
  const { theme } = useTheme()
  const [dataLoading, setDataLoading] = useState(false)
  const [dataType, setDataType] = useState("maxStreak")
  const [data, setData] = useState({})
  const [gameMode, setGameMode] = useState("survivalStats")

  const options = statOptions[gameMode]

  const leaderboard = async () => {
    if (!user) return
    const cacheKey = `${gameMode}_${dataType}` // ✅ unique key per mode + stat
    if (data[cacheKey]) return

    setDataLoading(false)
    const leaderboardData = await getLeaderBoard(dataType, gameMode)
    setData((prev) => ({ ...prev, [cacheKey]: leaderboardData }))
    setDataLoading(true)
  }

  // ✅ Reset dataType when switching game mode if it doesn't exist in new options
  function handleGameModeChange(mode) {
    setGameMode(mode)
    const modeOptions = statOptions[mode]
    if (!modeOptions.find((o) => o.value === dataType)) {
      setDataType(modeOptions[0].value)
    }
  }

  useEffect(() => {
    leaderboard()
  }, [dataType, gameMode, user]) // ✅ add gameMode as dependency

  const orderedOptions = [
    options.find((o) => o.value === dataType),
    ...options.filter((o) => o.value !== dataType),
  ]

  const cacheKey = `${gameMode}_${dataType}`

  return (
    <div className="border-border flex h-full w-full flex-col overflow-y-auto px-3 pt-3">
      <div className="relative mb-3 flex w-full items-center justify-center gap-2 text-xl font-bold">
        <h1>Leaderboard</h1>
        <Trophy className="text-(--muted-foreground)" />
      </div>
      <Separator className="border-muted mb-4 w-full border-t" />
      <div className="flex h-full w-full items-center justify-center">
        {user ? (
          dataLoading ? (
            <div className="flex h-full w-full flex-col items-center justify-start gap-2 md:w-3/4 lg:w-1/2">
              <div className="flex w-full items-center justify-between">
                <div className="flex rounded-md border">
                  <Button
                    variant={gameMode === "survivalStats" ? "default" : "ghost"}
                    size="sm"
                    className="rounded-r-none"
                    onClick={() => handleGameModeChange("survivalStats")}
                  >
                    Survival
                  </Button>
                  <Button
                    variant={
                      gameMode === "dailyBlocStats" ? "default" : "ghost"
                    }
                    size="sm"
                    className="rounded-l-none"
                    onClick={() => handleGameModeChange("dailyBlocStats")}
                  >
                    Daily Bloc
                  </Button>
                </div>

                {/* Stat selector */}
                <Select value={dataType} onValueChange={setDataType}>
                  <SelectTrigger className="dark:bg-card">
                    <SelectValue placeholder="Data Type" />
                  </SelectTrigger>
                  <SelectContent>
                    {orderedOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Card className="flex w-full flex-col gap-3 p-4">
                {data[cacheKey]?.map(
                  (
                    user,
                    index, // ✅ use cacheKey
                  ) => (
                    <div
                      key={user.id}
                      className="flex flex-row items-center gap-2"
                    >
                      {index + 1}.
                      <Avatar>
                        <AvatarImage
                          src={user?.profile.photoURL}
                          alt="@shadcn"
                          referrerPolicy="no-referrer"
                        />
                        <AvatarFallback>
                          <img
                            className="w-6"
                            src={
                              theme === "dark" ? climberIcon : ClimberIconLight
                            }
                            alt=""
                          />
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex w-full flex-row items-center justify-between">
                        <span>
                          {user?.profile?.displayName?.split(" ")[0] ||
                            "Anonymous"}
                        </span>
                        <span>
                          <strong className="text-xl font-bold">
                            {user?.settings[gameMode][dataType]}
                            {dataType === "accuracy" ? "%" : ""}
                            {dataType === "guessAverage" ? " avg" : ""}{" "}
                            {/* ✅ */}
                          </strong>
                        </span>
                      </div>
                    </div>
                  ),
                )}
              </Card>
            </div>
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <Spinner className="size-8" />
            </div>
          )
        ) : (
          <div className="flex flex-col items-center gap-4 text-center text-lg">
            <span>
              You have to <strong>login</strong>
              <br />
              to view the leaderboard.
            </span>
            <Button variant="default" onClick={loginWithGoogle}>
              Login with Google
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Leaderboard
