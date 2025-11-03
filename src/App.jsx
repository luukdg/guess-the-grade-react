import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/home";
import VideoGuess from "./components/main/videoGuess";
import Result from "./components/main/result";
import Game from "./pages/game";
import Upload from "./pages/upload";
import Settings from "./pages/settings";
import { GradeScaleProvider } from "./functions/gradeScaleContext";
import { ThemeProvider } from "./components/themeProvider";
import NavigationMenuMobile from "@/components/main/navigationBar";

function App() {
  const [videoType, setVideoType] = useState(() => {
    const stored = localStorage.getItem("VideoType"); // Save videoType to localstorage
    return stored ? JSON.parse(stored) : { value: "all", label: "All" };
  });

  return (
    <Router>
      <GradeScaleProvider>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 px-5 pt-5">
            <Routes>
              <Route
                path="/"
                element={
                  <Home videoType={videoType} setVideoType={setVideoType} />
                }
              />
              <Route path="/game" element={<Game videoType={videoType} />} />
              <Route path="/upload" element={<Upload />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/videoGuess" element={<VideoGuess />} />
              <Route path="/result" element={<Result />} />
            </Routes>
            <div className="flex w-full justify-center">
              <NavigationMenuMobile />
            </div>
          </div>
        </ThemeProvider>
      </GradeScaleProvider>
    </Router>
  );
}

export default App;
