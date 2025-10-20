import {
  HashRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./pages/home";
import Game from "./pages/game";
import Result from "./pages/result";
import GameOverview from "./pages/gameOverview";
import { GradeScaleProvider } from "./grade/contextGrade";

function App() {
  return (
    <GradeScaleProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gameOverview" element={<GameOverview />} />
          <Route path="/game" element={<Game />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </Router>
    </GradeScaleProvider>
  );
}

export default App;
