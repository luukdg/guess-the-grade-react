import { HashRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import VideoGuess from "./components/main-components/videoGuess"
import Result from "./components/main-components/result"
import Game from "./pages/game"
import Upload from "./pages/upload"
import SettingsPage from "./pages/settings"
import { SettingsProvider } from "./context/settingsContext"
import { ThemeProvider } from "./context/themeProvider"
import NavigationMenuMobile from "@/components/main-components/navigationBar"

function App() {
  return (
    <Router>
      <SettingsProvider>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 px-3 pt-3">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/game" element={<Game />} />
              <Route path="/upload" element={<Upload />} />
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="/videoGuess" element={<VideoGuess />} />
              <Route path="/result" element={<Result />} />
            </Routes>
            <div className="flex w-full justify-center">
              <NavigationMenuMobile />
            </div>
          </div>
        </ThemeProvider>
      </SettingsProvider>
    </Router>
  )
}

export default App
