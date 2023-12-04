import { createContext } from "react";
import { MyObject, songsList } from "../songsData";

interface Context {
  allSongs: MyObject[];
  allSongsFunc: (id: number) => void;
  // currentSongId: number;
  // currentSongIdFunc: (id: number) => void;
  // isCurrentSongPlaying: boolean;
  // isCurrentSongPlayingFunc: (boolValue: boolean) => void;
}

const MusicContext = createContext<Context>({
  allSongs: songsList,
  allSongsFunc: (id: number) => {},
  // currentSongId: 1,
  // currentSongIdFunc: (id: number) => {},
  // isCurrentSongPlaying: false,
  // isCurrentSongPlayingFunc: (boolValue: boolean) => {},
});

export default MusicContext;