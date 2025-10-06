import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Game from "./pages/game";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/guess-the-grade-react/" element={<Home />} />
        <Route path="/guess-the-grade-react/game/" element={<Game />} />
      </Routes>
    </Router>
  );
}

export default App;
