import { useNavigate } from "react-router-dom";
import gradeLogo from "/logo.svg";
import { useGradeScale } from "../grade/contextGrade";
import SettingsIcon from "@mui/icons-material/Settings";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";

function Home() {
  const navigate = useNavigate();

  // Global boolean to change to V-scale
  const { gradeScale, setGradeScale } = useGradeScale();
  const [open, setOpen] = useState(false);

  return (
    <div className="align-self flex h-full w-full flex-col items-center justify-center gap-5">
      <img src={gradeLogo} className="w-75" alt="logo" />
      <div className="absolute bottom-10 flex gap-3">
        <button className="w-35" onClick={() => navigate("/gameOverview")}>
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
          top: "2.5rem",
          right: "2.5rem",
        }}
      >
        <SettingsIcon fontSize="large" />
      </IconButton>
    </div>
  );
}

export default Home;
