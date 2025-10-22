import {
  HashRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./pages/home";
import VideoGuess from "./components/main/videoGuess";
import Result from "./components/main/result";
import Game from "./pages/game";
import { GradeScaleProvider } from "./functions/gradeScaleContext";

function App() {
  return (
    <GradeScaleProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
          <Route path="/videoGuess" element={<VideoGuess />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </Router>
    </GradeScaleProvider>
  );
}

export default App;
