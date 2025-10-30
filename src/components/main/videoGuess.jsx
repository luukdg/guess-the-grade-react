import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactPlayer from "react-player";
import { getData } from "../../api/fetchVideoData";
import { updateUserGuess } from "../../api/updateUserGuess";
import { useGradeScale } from "../../functions/gradeScaleContext";
import { getGrade } from "../../functions/GetGradeLabel";
import { convertToFont, convertToVSale } from "../../functions/gradeConverter";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { PauseIcon, PlayIcon, Volume2, VolumeOff } from "lucide-react";
import SliderForGrading from "../UI/sliderForGrading";

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
  const [videoArray, setVideoArray] = useState([]); // array of videos fetched
  const [value, setValue] = useState(30); // slider state
  const [muted, setMuted] = useState(true); // video mute state
  const [speed, setSpeed] = useState(1); // playback speed
  const [isPlaying, setIsPlaying] = useState(false); // video play state
  const { gradeScale, setGradeScale } = useGradeScale(); // Global boolean to change to V-scale
  const navigate = useNavigate();

  // Resets the grade value after submitting
  const handleChange = (newValue) => {
    setValue(newValue); // slider state
    setNumericGuess(getGrade(newValue)); // numericGuess state
  };

  // Function to fetch a new video
  const fetchNewVideo = async () => {
    const { youtubeLink, ticketId } = await getData(gradeScale);
    if (videoArray.includes(youtubeLink)) {
      return fetchNewVideo();
    } else {
      setFirebaseId(ticketId);
      setVideoId(youtubeLink);
      setVideoArray((prev) => [...prev, youtubeLink]);
    }
  };

  // Load first video on mount
  useEffect(() => {
    fetchNewVideo();
  }, []);

  // Submit guess and refresh video
  const handleSubmit = () => {
    const convertedGuess = chooseGradeConverter(numericGuess);
    setGuess(convertedGuess);
    finish("result");
    updateUserGuess(firebaseId, numericGuess);
  };

  const chooseGradeConverter = (num) => {
    return !gradeScale ? convertToFont(num) : convertToVSale(num);
  };

  const speeds = [1, 2];

  return (
    <div className="flex h-11/12 w-full flex-col gap-4">
      <div className="relative flex items-center justify-center overflow-hidden">
        <div className="aspect-[9/16] h-full w-full bg-black">
          <ReactPlayer
            src={`https://www.youtube.com/shorts/${videoId}`}
            onReady={() => setIsPlaying(true)}
            playing={isPlaying} // autoplay
            muted={muted} // must be muted for autoplay to work on most browsers
            controls={false}
            loop={true}
            playbackRate={speed}
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
        </div>

        <div className="pointer-events-auto absolute top-0 left-0 h-full w-full"></div>
        <div
          className={`pointer-events-none absolute top-0 left-0 h-[15%] w-full ${"opacity-100"}`}
          style={{
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
            maskImage:
              "linear-gradient(to bottom, black 60%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 60%, transparent 100%)",
          }}
        ></div>
        <div className="absolute bottom-2 flex w-full flex-col items-center gap-4">
          <ButtonGroup>
            <Button
              onClick={() => setMuted(!muted)}
              size="sm"
              variant="outline"
            >
              {muted ? <VolumeOff /> : <Volume2 />}
            </Button>
            <Button
              onClick={() => setIsPlaying(!isPlaying)}
              size="sm"
              variant="outline"
            >
              {isPlaying ? <PauseIcon /> : <PlayIcon />}
            </Button>
            {speeds.map((s) => (
              <Button
                key={s}
                onClick={() => setSpeed(s)}
                size="sm"
                variant={speed === s ? "default" : "outline"}
              >
                {s}x
              </Button>
            ))}
          </ButtonGroup>
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <div className="align-center flex w-full justify-center gap-2">
          Guess: <strong>{chooseGradeConverter(numericGuess)}</strong>
        </div>
        <div className="flex h-15">
          <SliderForGrading
            value={value}
            setValue={setValue}
            handleChange={handleChange}
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <Button
            size="lg"
            variant="default"
            className="w-full"
            onClick={() => {
              handleSubmit();
            }}
          >
            Check your guess
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VideoGuess;
