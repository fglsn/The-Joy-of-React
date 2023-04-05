import React from "react";
import { Play, Pause } from "react-feather";

import VisuallyHidden from "./VisuallyHidden";

// https://courses.joshwcomeau.com/joy-of-react/03-hooks/05.08-stale-values

function MediaPlayer({ src }) {
  const [isPlaying, setIsPlaying] = React.useState(false);

  const audioRef = React.useRef();

  React.useEffect(() => {
    function handleSpaceDown(e) {
      if (e.code === "Space")
        // access the freshest value of isPlaying without adding it to the dependency array using the callback escape hatch
        setIsPlaying((currentIsPlaying) => !currentIsPlaying);
    }
    window.addEventListener("keydown", handleSpaceDown);

    return () => window.removeEventListener("keydown", handleSpaceDown);
  }, []);

  //sync the audio DOM node's internal state with the isPlaying state variable
  React.useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

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
        <button
          onKeyDown={(e) => {
            //stop event bubbling, so when the btn is focused and space pressed, event will fire only on this dom element
            if (e.code === "Space") e.stopPropagation();
          }}
          onClick={() => {
            setIsPlaying(!isPlaying);
          }}
        >
          {isPlaying ? <Pause /> : <Play />}
          <VisuallyHidden>Toggle playing</VisuallyHidden>
        </button>

        <audio
          ref={audioRef}
          src={src}
          onEnded={() => {
            setIsPlaying(false);
          }}
        />
      </div>
    </div>
  );
}

export default MediaPlayer;
