import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getData } from "../api/getVideo";
import ReactPlayer from "react-player";
import { Slider } from "@mui/material";
import { getGrade } from "../grade/grading";
import { checkGrade } from "../grade/checkGrade";

const Game = () => {
  const [videoId, setVideoId] = useState(null); // ✅ top level
  const navigate = useNavigate(); // ✅ top level
  const [value, setValue] = useState(90); // initial value

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    getData().then((id) => setVideoId(id));
  }, []);

  // ✅ conditional rendering is fine AFTER hooks
  if (!videoId) return <div>Loading...</div>;

  return (
    <div className="align-self flex flex-col items-center justify-center gap-4">
      <div className="relative w-full max-w-sm">
        <ReactPlayer
          src={`https://www.youtube.com/shorts/${videoId}`}
          playing={true} // autoplay
          muted={true} // must be muted for autoplay to work on most browsers
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
          style={{ width: "100%", height: "auto", aspectRatio: "9/16" }}
        />
        <div className="pointer-events-auto absolute top-0 left-0 h-full w-full"></div>
        <div
          className="pointer-events-none absolute top-0 left-0 h-[10%] w-full"
          style={{
            backdropFilter: "blur(6px)",
          }}
        ></div>
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <Slider
            aria-label="Custom marks"
            step={10}
            valueLabelDisplay="auto"
            defaultValue={90}
            marks
            min={0}
            max={180}
            valueLabelFormat={getGrade}
            onChange={handleChange}
          />
        </div>
        <div className="align-center flex justify-center gap-2">
          Guess: <strong>{getGrade(value)}</strong>
        </div>
        <div className="flex gap-4">
          <button onClick={() => navigate("/")}>Go back</button>
          <button onClick={() => checkGrade(getGrade(value))}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Game;
