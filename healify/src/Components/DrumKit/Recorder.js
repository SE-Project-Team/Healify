import React, { Component } from "react";
import { useState } from "react";
import AudioReactRecorder, { RecordState } from "audio-react-recorder";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

export const Recorder = () => {
  let history = useHistory();
  const [recordState, setRecordState] = useState(RecordState.STOP);
  const [music, setMusic] = useState({});

  const start = () => {
    setRecordState(RecordState.START);
  };

  const stop = () => {
    setRecordState(RecordState.STOP);
  };

  //audioData contains blob and blobUrl
  const onStop = (audioData) => {
    setMusic(audioData);
    console.log("audioData", audioData);
    // window.location.href = audioData.url;
  };

  return (
    <div>
      <AudioReactRecorder state={recordState} onStop={onStop} />

      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <Link
        to={{
          pathname: `${music.url}`,
        }}
        target="_blank"
      >
        <button>Play</button>
      </Link>
    </div>
  );
};
