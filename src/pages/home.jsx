import { useNavigate } from "react-router-dom";
import gradeLogo from "/logo.svg";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="align-self flex h-full w-full flex-col items-center justify-center gap-5">
      <img src={gradeLogo} className="w-75" alt="logo" />
      <button
        className="absolute bottom-10 w-35"
        onClick={() => navigate("/game")}
      >
        Start Game
      </button>
    </div>
  );
}

export default Home;
