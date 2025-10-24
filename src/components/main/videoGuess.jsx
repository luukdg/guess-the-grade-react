import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactPlayer from "react-player";
import { getData } from "../../api/fetchVideoData";
import { updateUserGuess } from "../../api/updateUserGuess";
import { useGradeScale } from "../../functions/gradeScaleContext";
import { getGrade } from "../../functions/GetGradeLabel";
import { playbackSpeed } from "../UI/videoControlButtons";
import { convertToFont, convertToVSale } from "../../functions/gradeConverter";
import IconButton from "@mui/material/IconButton";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import { Slider } from "@mui/material";

const VideoGuess = ({
  lives,
  setLives,
  finish,
  streak,
  setStreak,
  guess,
  setGuess,
  numericGuess,
  setNumericGuess,
  firebaseId,
  setFirebaseId,
  outcome,
  setOutcome,
}) => {
  const [videoId, setVideoId] = useState(null); // saves the youtubeLink
  const [value, setValue] = useState(30);
  const [muted, setMuted] = useState(true);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [playing, setPlaying] = useState(true);
  const { gradeScale, setGradeScale } = useGradeScale(); // Global boolean to change to V-scale
  const navigate = useNavigate();

  // Resets the grade value after submitting
  const handleChange = (event, newValue) => {
    setValue(newValue); // slider state
    setNumericGuess(getGrade(newValue)); // numericGuess state
  };

  // Function to fetch a new video
  const fetchNewVideo = async () => {
    const { youtubeLink, ticketId } = await getData(gradeScale);
    setFirebaseId(ticketId);
    setVideoId(youtubeLink);
  };

  // Load first video on mount
  useEffect(() => {
    fetchNewVideo();
  }, []);

  // Submit guess and refresh video
  const handleSubmit = () => {
    if (lives === 0) {
      setOutcome("gameover");
    }

    const convertedGuess = chooseGradeConverter(numericGuess);
    setGuess(convertedGuess);
    finish("result");
    updateUserGuess(firebaseId, numericGuess);
  };

  const chooseGradeConverter = (num) => {
    return !gradeScale ? convertToFont(num) : convertToVSale(num);
  };

  if (!videoId) return <div>Loading...</div>;

  return (
    <div className="flex h-full w-full flex-col gap-5">
      <div className="border-box relative overflow-hidden">
        <ReactPlayer
          src={`https://www.youtube.com/shorts/${videoId}`}
          playing={playing} // autoplay
          muted={muted} // must be muted for autoplay to work on most browsers
          controls={false}
          loop={true}
          playbackRate={playbackSpeed}
          config={{
            youtube: {
              modestbranding: 1,
              rel: 0,
              showinfo: 0,
              playlist: videoId,
            },
          }}
          style={{ width: "100%", height: "100%", aspectRatio: "9/16" }}
        />
        <div className="pointer-events-auto absolute top-0 left-0 h-full w-full"></div>
        <div
          className={`pointer-events-none absolute top-0 left-0 h-[20%] w-full ${"opacity-100"}`}
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
      <div className="flex flex-col justify-center gap-4">
        <div className="flex px-2">
          <Slider
            aria-label="Custom marks"
            step={10}
            valueLabelDisplay="auto"
            value={value}
            marks
            min={0}
            max={60}
            valueLabelFormat={() => chooseGradeConverter(numericGuess)}
            onChange={handleChange}
          />
        </div>
        <div className="align-center mb-2 flex w-full justify-center gap-2">
          Guess: <strong>{chooseGradeConverter(numericGuess)}</strong>
        </div>
        <div className="flex flex-row justify-center gap-2">
          {/* <button className="w-1/2" onClick={() => navigate("/")}>
            Home
          </button> */}
          <button
            className="w-full"
            onClick={() => {
              handleSubmit();
            }}
          >
            Check your guess
          </button>
          <button onClick={() => setPlaying(!playing)}>
            {playing ? "Pause" : "Play"}
          </button>
          <button onClick={() => setPlaybackSpeed(1)}>1x</button>
          <button onClick={() => setPlaybackSpeed(2)}>2x</button>
        </div>
      </div>
    </div>
  );
};

export default VideoGuess;
