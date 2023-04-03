import React from "react";
import { Play, Pause } from "react-feather";

import VisuallyHidden from "./VisuallyHidden";

function MediaPlayer({ src }) {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const audioRef = React.useRef();

  const togglePlaying = () => {
    isPlaying ? audioRef.current.pause() : audioRef.current.play();
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="wrapper">
      <div className="media-player">
        <img
          alt=""
          src="https://sandpack-bundler.vercel.app/img/take-it-easy.png"
        />
        <div className="summary">
          <h2>Take It Easy</h2>
          <p>Bvrnout ft. Mia Vaile</p>
        </div>
        <button onClick={togglePlaying}>
          {isPlaying === false ? <Play /> : <Pause />}
          <VisuallyHidden>Toggle playing</VisuallyHidden>
        </button>

        <audio
          src={src}
          ref={audioRef}
          onEnded={() => {
            setIsPlaying(false);
          }}
        />
      </div>
    </div>
  );
}

export default MediaPlayer;
