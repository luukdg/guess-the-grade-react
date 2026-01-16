import { HashRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import VideoGuess from "./components/main-components/videoGuess"
import Result from "./components/main-components/result"
import Game from "./pages/game"
import Upload from "./pages/upload"
import SettingsPage from "./pages/settings"
import Privacy from "./pages/privacy"
import { SettingsProvider } from "./context/settingsContext"
import { ThemeProvider } from "./context/themeProvider"
import NavigationMenuMobile from "@/components/main-components/navigationBar"

function App() {
  return (
    <Router>
      <SettingsProvider>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <div className="flex h-full w-full flex-col">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/game" element={<Game />} />
              <Route path="/upload" element={<Upload />} />
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="/videoGuess" element={<VideoGuess />} />
              <Route path="/result" element={<Result />} />
              <Route path="/privacy" element={<Privacy />} />
            </Routes>
            <div className="mt-2 flex w-full justify-center">
              <NavigationMenuMobile />
            </div>
          </div>
        </ThemeProvider>
      </SettingsProvider>
    </Router>
  )
}

export default App
