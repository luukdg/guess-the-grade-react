import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getData } from "../api/getVideo";
import ReactPlayer from "react-player";
import { Slider } from "@mui/material";
import { getGrade } from "../grade/grading";
import { checkGrade } from "../grade/checkGrade";
import IconButton from "@mui/material/IconButton";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";

const Game = () => {
  const [videoId, setVideoId] = useState(null);
  const [value, setValue] = useState(90);
  const [muted, setMuted] = useState(true);
  const [visible, setVisible] = useState(true);
  const navigate = useNavigate();

  // Hide the blur after 5 seconds
  useEffect(() => {
    setVisible(true); // make blur visible again immediately
    const timer = setTimeout(() => {
      setVisible(false);
    }, 5000); // hide after 5 seconds

    return () => clearTimeout(timer);
  }, [videoId]);

  // Resets the grade value after submitting
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Function to fetch a new video
  const fetchNewVideo = async () => {
    const id = await getData();
    setVideoId(id);
  };

  // Load first video on mount
  useEffect(() => {
    fetchNewVideo();
  }, []);

  // Submit guess and refresh video
  const handleSubmit = () => {
    checkGrade(getGrade(value));
  };

  const showResult = () => {
    navigate("/result");
  };

  if (!videoId) return <div>Loading...</div>;

  return (
    <div className="align-self flex h-full w-full flex-col items-center gap-6 pt-10 pr-6 pb-10 pl-6 sm:justify-center sm:gap-10">
      <div className="relative flex aspect-[9/16] h-full items-center justify-center overflow-hidden rounded-lg">
        <ReactPlayer
          className="h-auto w-full"
          src={`https://www.youtube.com/shorts/${videoId}`}
          playing={true} // autoplay
          muted={muted} // must be muted for autoplay to work on most browsers
          controls={false}
          loop={true}
          config={{
            youtube: {
              modestbranding: 1,
              rel: 0,
              showinfo: 0,
              playlist: videoId,
            },
          }}
          style={{ width: "100%", height: "100%" }}
        />
        <div className="pointer-events-auto absolute top-0 left-0 h-full w-full"></div>
        <div
          className={`pointer-events-none absolute top-0 left-0 h-[20%] w-full transition-opacity duration-1000 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
            maskImage:
              "linear-gradient(to bottom, black 60%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 60%, transparent 100%)",
          }}
        ></div>
        <IconButton
          onClick={() => setMuted(!muted)}
          className="!absolute bottom-2 left-2"
          size="large"
          sx={{
            color: "white", // icon color
            backgroundColor: "rgba(0,0,0,0.0)", // background
            "&:hover": { backgroundColor: "rgba(0,0,0,0.1)" },
          }}
        >
          {muted ? <VolumeOffIcon /> : <VolumeUpIcon />}
        </IconButton>
      </div>
      <div className="align-center flex w-full flex-col justify-center gap-4">
        <div className="flex px-2">
          <Slider
            aria-label="Custom marks"
            step={10}
            valueLabelDisplay="auto"
            value={value}
            marks
            min={0}
            max={180}
            valueLabelFormat={getGrade}
            onChange={handleChange}
          />
        </div>
        <div className="align-center mb-2 flex w-full justify-center gap-2">
          Guess: <strong>{getGrade(value)}</strong>
        </div>
        <div className="flex flex-row gap-4">
          <button className="w-1/2" onClick={() => navigate("/")}>
            Go back
          </button>
          <button
            className="w-1/2"
            onClick={() => showResult() & handleSubmit()}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Game;
