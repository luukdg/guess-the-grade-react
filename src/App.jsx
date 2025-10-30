import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import VideoGuess from "./components/main/videoGuess";
import Result from "./components/main/result";
import Game from "./pages/game";
import { GradeScaleProvider } from "./functions/gradeScaleContext";
import { ThemeProvider } from "./components/themeProvider";

function App() {
  return (
    <GradeScaleProvider>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/game" element={<Game />} />
            <Route path="/videoGuess" element={<VideoGuess />} />
            <Route path="/result" element={<Result />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </GradeScaleProvider>
  );
}

export default App;
