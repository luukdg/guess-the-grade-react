import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="align-self flex flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold">Guess the Grade</h1>
      <button onClick={() => navigate("/game")}>Start Game</button>
    </div>
  );
}

export default Home;
