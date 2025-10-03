import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getData } from "../api/getVideo";
import ReactPlayer from "react-player";

const Game = () => {
  const [videoId, setVideoId] = useState(null); // ✅ top level
  const navigate = useNavigate(); // ✅ top level

  useEffect(() => {
    getData().then((id) => setVideoId(id)); // ✅ top level
  }, []);

  // ✅ conditional rendering is fine AFTER hooks
  if (!videoId) return <div>Loading...</div>;

  console.log(videoId);
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
      <div className="flex gap-4">
        <button onClick={() => navigate("/")}>Go back</button>
        <button>Start challenge</button>
      </div>
    </div>
  );
};

export default Game;
