import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Game from "./pages/game";
import Result from "./pages/result";
import { GradeScaleProvider } from "./grade/contextGrade";
import { useState } from "react";

function App() {
  const [lives, setLives] = useState(3);

  return (
    <GradeScaleProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </Router>
    </GradeScaleProvider>
  );
}

export default App;
