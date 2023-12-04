import React, { useState } from "react";
import MusicContext from "./musicContext";
import { songsList, MyObject } from "../songsData";

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [songsArr, setSongsArr] = useState<MyObject[]>(songsList);

  const allSongsFunc = (id: number) => {
    console.log(id)
    setSongsArr(
      songsArr.map((eachSong) => {
        if (eachSong.id === id) return { ...eachSong, active: true, isSongPlaying: !eachSong.isSongPlaying };
        return { ...eachSong, active: false, isSongPlaying: false };
      })
    );
  };

  return (
    <MusicContext.Provider
      value={{
        allSongs: songsArr,
        allSongsFunc,
        // currentSongId,
        // currentSongIdFunc,
        // isCurrentSongPlaying,
        // isCurrentSongPlayingFunc,
      }}
    >
      {children}
    </MusicContext.Provider>
  );
};

export default AppProvider;