import { Separator } from "@base-ui/react"

import { useNavigate } from "react-router-dom"

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useGameContext } from "@/context/gameContext"
import { CountdownToMidnight } from "@/components/UI/countdown"

import ImageOne from "/boulderOne.webp"
import ImageTwo from "/boulderTwo.webp"

function SelectGame() {
  const navigate = useNavigate()
  const { gameWon } = useGameContext()

  return (
    <>
      <div className="flex h-full w-full flex-col px-3 pt-3">
        <div className="mb-3 flex w-full items-center justify-center gap-2 text-xl font-bold">
          <h1>Game</h1>
        </div>
        <Separator className="border-muted mb-3 w-full border-t" />
        <div className="mb-3 flex h-full w-full flex-col items-center gap-3">
          <Card
            onClick={() =>
              gameWon !== null
                ? navigate("/resultBoulderOfTheDay")
                : navigate("/boulderOfTheDay")
            }
            className="hover:bg-secondary relative w-full flex-1 cursor-pointer overflow-hidden sm:w-3/4 lg:w-1/2"
          >
            <img
              src={ImageTwo}
              alt="Boulder"
              className="absolute inset-0 h-full w-full object-cover blur-[2px]"
            />
            <div className="bg-card/90 absolute inset-0"></div>
            <div className="relative z-10 flex h-full flex-col justify-center text-center">
              <CardHeader className="w-full">
                <CardTitle className="font-archivo-black text-2xl">
                  Daily Bloc
                </CardTitle>
                <CardDescription className="text-primary">
                  One new boulder every day. Closely observe and try to get it
                  right within 3 turns.
                </CardDescription>
                {gameWon !== null && (
                  <div className="font-bold">
                    <div className="text-muted-foreground text-sm">
                      Next challenge in
                    </div>
                    <div className="text-destructive text-lg">
                      <CountdownToMidnight />
                    </div>
                  </div>
                )}
              </CardHeader>
            </div>
          </Card>
          <Card
            onClick={() => {
              navigate("/game")
            }}
            className="hover:bg-secondary relative w-full flex-1 cursor-pointer overflow-hidden sm:w-3/4 lg:w-1/2"
          >
            <img
              src={ImageOne}
              alt="Boulder"
              className="absolute inset-0 h-full w-full object-cover blur-[2px]"
            />
            <div className="bg-card/90 absolute inset-0"></div>
            <div className="relative z-10 flex h-full flex-col justify-center text-center">
              <CardHeader className="w-full">
                <CardTitle className="font-archivo-black text-2xl">
                  Survival mode
                </CardTitle>
                <CardDescription className="text-primary">
                  Watch videos of boulders and grade them. Try to guess as many
                  right before your lives run out.
                </CardDescription>
              </CardHeader>
            </div>
          </Card>
        </div>
      </div>
    </>
  )
}

export default SelectGame
