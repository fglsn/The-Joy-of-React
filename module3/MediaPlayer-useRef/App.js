import React from "react";

import MediaPlayer from "./MediaPlayer";

const DEMO_SONG_SRC =
  "https://storage.googleapis.com/joshwcomeau/bvrnout-take-it-easy-short.mp3";

function App() {
  return (
    <>
      <MediaPlayer src={DEMO_SONG_SRC} />
    </>
  );
}

export default App;
