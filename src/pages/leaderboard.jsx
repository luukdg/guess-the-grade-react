/* eslint-disable react-hooks/rules-of-hooks */

import { Separator } from "@radix-ui/react-separator"
import { Trophy } from "lucide-react"
import { useEffect, useState } from "react"
import { getLeaderBoard } from "@/api/fetchLeaderboard"
import { Spinner } from "@/components/UI/spinner"
import { Card } from "@/components/UI/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useAuth } from "@/context/loginContext"
import { Button } from "@/components/ui/button"
import climberIcon from "/climber.svg"
import ClimberIconLight from "/climber-light.svg"
import { useTheme } from "@/context/themeProvider"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const options = [
  { value: "maxStreak", label: "Max Streak" },
  { value: "accuracy", label: "Guess Accuracy" },
  { value: "totalGames", label: "Total Games" },
]

function Leaderboard() {
  const { user, loginWithGoogle } = useAuth()
  const { theme } = useTheme()
  const [dataLoading, setDataLoading] = useState(false)
  const [dataType, setDataType] = useState("maxStreak")
  const [data, setData] = useState({})

  const leaderboard = async () => {
    if (!user) return
    if (data[dataType]) return // we already have data, skip fetch

    setDataLoading(false)
    const leaderboardData = await getLeaderBoard(dataType)
    setData((prev) => ({ ...prev, [dataType]: leaderboardData }))
    console.log("Leaderboard data: ", leaderboardData)
    setDataLoading(true)
  }

  useEffect(() => {
    leaderboard()
  }, [dataType, user])

  // Reorder options to have selected one first
  const orderedOptions = [
    options.find((o) => o.value === dataType),
    ...options.filter((o) => o.value !== dataType),
  ]

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
              <div className="w-full">
                <Select value={dataType} onValueChange={setDataType}>
                  <SelectTrigger className="dark:bg-card w-[180px]">
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
                {data[dataType]?.map((user, index) => (
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
                      <span>{user?.profile.displayName || "Anonymous"} </span>
                      <span>
                        <strong className="text-xl font-bold">
                          {user.settings[dataType]}
                          {dataType === "accuracy" ? "%" : ""}
                        </strong>
                      </span>
                    </div>
                  </div>
                ))}
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
          </div> // render this if user is falsy
        )}
      </div>
    </div>
  )
}

export default Leaderboard
