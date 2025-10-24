import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGradeScale } from "../functions/gradeScaleContext";
import SettingsIcon from "@mui/icons-material/Settings";
import IconButton from "@mui/material/IconButton";
import gradeLogo from "/logo.svg";

function Home() {
  const navigate = useNavigate();

  // Global boolean to change to V-scale
  const { gradeScale, setGradeScale } = useGradeScale();
  const [open, setOpen] = useState(false);

  return (
    <div className="align-self relative flex h-full w-full flex-col items-center justify-center gap-5 pb-10">
      <img src={gradeLogo} className="w-75" alt="logo" />
      <div className="absolute bottom-10 flex w-full gap-3 px-6">
        <button className="w-full" onClick={() => navigate("/game")}>
          Start Game
        </button>
      </div>
      {open && (
        <div className="fixed flex flex-col items-center justify-center gap-4 rounded-2xl bg-black p-6 shadow-xl">
          <h2 className="text-xl font-semibold">Settings</h2>
          <button onClick={() => setGradeScale((prev) => !prev)}>
            {gradeScale ? "Switch to Font" : "Switch to V-Scale"}
          </button>
          <button onClick={() => setOpen(false)}>Close</button>
        </div>
      )}

      <IconButton
        onClick={() => setOpen(true)}
        size="large"
        sx={{
          color: "white", // icon color
          backgroundColor: "rgba(0,0,0,0.0)", // background
          "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
          position: "absolute",
          top: "1rem",
          right: "1rem",
        }}
      >
        <SettingsIcon fontSize="large" />
      </IconButton>
    </div>
  );
}

export default Home;
