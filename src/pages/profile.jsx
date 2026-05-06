import { Separator } from "@radix-ui/react-separator"
import { ArrowLeft, User } from "lucide-react"

import { useNavigate } from "react-router-dom"

import { LogOutAlert } from "@/components/UI/logoutAlert"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useSettings } from "@/context/settingsContext"

function Profile() {
  const navigate = useNavigate()
  const { user, settings } = useSettings()

  return (
    <div className="border-border flex h-full w-full flex-col overflow-y-auto px-3 pt-3">
      <div className="relative mb-3 flex w-full items-center justify-center gap-2 text-xl font-bold">
        <div className="bottom--1 absolute left-0">
          <Button variant="outline" onClick={() => navigate(-1)}>
            <ArrowLeft />
          </Button>
        </div>
        <h1>Profile</h1>
        <User />
      </div>
      <Separator className="border-muted mb-4 w-full border-t" />
      <div className="flex h-full w-full flex-col">
        <div className="mb-5 flex flex-row items-center justify-between">
          <div>
            <h1 className="text-base font-bold">
              Welcome {user ? user.displayName.split(" ")[0] : ""}
            </h1>
            <p className="text-sm text-(--muted-foreground)">
              Here is your profile information.
            </p>
          </div>
          <img
            className="border-primary h-20 w-20 rounded-full border-2 object-cover"
            src={user?.photoURL || "/default-profile.avif"}
            alt={user?.displayName || "Default Profile"}
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="mb-4 flex flex-row items-center justify-center gap-2 text-base font-bold text-(--muted-foreground)">
          <Separator className="border-muted flex-1 border-t" />
          Daily Bloc
          <Separator className="border-muted flex-1 border-t" />
        </div>
        <div className="mb-4 grid grid-cols-2 gap-2 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="font-archivo-black">
                Current streak:
              </CardTitle>
              <CardDescription className="text-primary text-2xl">
                {settings.dailyBlocStats.currentStreak}
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="font-archivo-black">Best streak:</CardTitle>
              <CardDescription className="text-primary text-2xl">
                {settings.dailyBlocStats.maxStreak}
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="font-archivo-black">
                Total games played:
              </CardTitle>
              <CardDescription className="text-primary text-2xl">
                {settings.dailyBlocStats.totalGames}
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="font-archivo-black">
                Guess average:
              </CardTitle>
              <CardDescription className="text-primary text-2xl">
                {settings.dailyBlocStats.averageScore}
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        <div className="mb-4">
          <div className="flex flex-row items-center justify-center gap-2 text-base font-bold text-(--muted-foreground)">
            <Separator className="border-muted flex-1 border-t" />
            Surival mode
            <Separator className="border-muted flex-1 border-t" />
          </div>
        </div>
        <div className="mb-4 grid grid-cols-2 gap-2 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="font-archivo-black">
                Videos watched:
              </CardTitle>
              <CardDescription className="text-primary text-2xl">
                {settings.survivalStats.videosWatched}
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="font-archivo-black">
                Correct guesses:
              </CardTitle>
              <CardDescription className="text-primary text-2xl">
                {settings.survivalStats.correctGuesses}
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="font-archivo-black">Accuracy:</CardTitle>
              <CardDescription className="text-primary text-2xl">
                {settings.survivalStats.accuracy}%
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="font-archivo-black">Best streak:</CardTitle>
              <CardDescription className="text-primary text-2xl">
                {parseFloat(settings.survivalStats.maxStreak)}
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="font-archivo-black">
                Average score:
              </CardTitle>
              <CardDescription className="text-primary text-2xl">
                {parseFloat(settings.survivalStats.averageScore.toFixed(2))}
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="font-archivo-black">
                Total games played:
              </CardTitle>
              <CardDescription className="text-primary text-2xl">
                {settings.survivalStats.totalGames}
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        <Separator className="border-muted mb-4 w-full border-t" />
        <div className="flex h-full w-full gap-2 pb-2">
          <Button
            onClick={() => navigate("/settings")}
            variant="outline"
            size="lg"
            className="flex-1"
          >
            Settings
          </Button>
          <LogOutAlert />
        </div>
      </div>
    </div>
  )
}

export default Profile
