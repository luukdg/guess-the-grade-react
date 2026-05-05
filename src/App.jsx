import { Route, HashRouter as Router, Routes } from "react-router-dom"

import NavigationMenuMobile from "@/components/main-components/navigationBar"

import SplashScreen from "./components/UI/home-page/SplashScreen"
import Result from "./components/main-components/result"
import ResultBoulderOfTheDay from "./components/main-components/resultBoulderOfTheDay"
import VideoGuess from "./components/main-components/videoGuess"
import { GameProvider } from "./context/gameContext"
import { useAuth } from "./context/loginContext"
import { SettingsProvider } from "./context/settingsContext"
import { ThemeProvider } from "./context/themeProvider"
import BoulderOfTheDay from "./pages/boulderOfTheDay"
import Game from "./pages/game"
import Home from "./pages/home"
import Leaderboard from "./pages/leaderboard"
import Privacy from "./pages/privacy"
import Profile from "./pages/profile"
import SelectGame from "./pages/selectGame"
import SettingsPage from "./pages/settings"
import Upload from "./pages/upload"

function App() {
  const { authLoading, versionReady } = useAuth()

  const isAppReady = authLoading && versionReady

  return (
    <Router>
      <SettingsProvider>
        <GameProvider>
          <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            {isAppReady ? (
              <SplashScreen />
            ) : (
              <div className="flex h-full w-full flex-col">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/game" element={<Game />} />
                  <Route path="/upload" element={<Upload />} />
                  <Route path="/settings" element={<SettingsPage />} />
                  <Route path="/videoGuess" element={<VideoGuess />} />
                  <Route path="/result" element={<Result />} />
                  <Route path="/privacy" element={<Privacy />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/leaderboard" element={<Leaderboard />} />
                  <Route
                    path="/boulderOfTheDay"
                    element={<BoulderOfTheDay />}
                  />
                  <Route
                    path="/resultBoulderOfTheDay"
                    element={<ResultBoulderOfTheDay />}
                  />
                  <Route path="/selectGame" element={<SelectGame />} />
                </Routes>
                <div className="flex w-full justify-center">
                  <NavigationMenuMobile />
                </div>
              </div>
            )}
          </ThemeProvider>
        </GameProvider>
      </SettingsProvider>
    </Router>
  )
}

export default App
