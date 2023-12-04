import { useContext } from "react";
import styles from "./eachSong.styles";
import { Box, Typography } from "@mui/material";
import { MyObject } from "../../songsData";
import MusicContext from "../../app_context/musicContext";
type myProps = {
  eachSong: MyObject;
};

const EachSong: React.FC<myProps> = ({ eachSong }) => {
  // const { currentSongIdFunc, allSongsFunc } = useContext(MusicContext);

  const currentSongClickEventHandler = () => {
    // currentSongIdFunc(eachSong.id);
    // allSongsFunc(eachSong.id);
  };

  return (
    <Box
      component="li"
      sx={{
        ...styles.mainContainer,
        border: eachSong.active ? "1px solid green" : "1px solid grey",
      }}
      onClick={currentSongClickEventHandler}
    >
      <Box
        sx={styles.coverImg}
        component="img"
        alt={eachSong.name}
        src={eachSong.cover}
      />
      <Box sx={styles.textContainer}>
        <Typography sx={styles.songName}>{eachSong.name}</Typography>
        <Typography sx={styles.artistName}>{eachSong.artist}</Typography>
      </Box>
    </Box>
  );
};

export default EachSong;