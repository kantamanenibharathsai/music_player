import { useContext } from "react";
import styles from "./sidebar.styles";

import { Box, Typography } from "@mui/material";

import EachSong from "../each_song/eachSong";
import MusicContext from "../../app_context/musicContext";

const SideBar: React.FC = () => {
  const { allSongs } = useContext(MusicContext);

  return (
    <Box sx={styles.mainContainer}>
      <Typography sx={styles.libraryText}>Library</Typography>
      <Box sx={styles.unorderedList}>
        {allSongs.map((eachSong) => (
          <EachSong key={eachSong.id} eachSong={eachSong} />
        ))}
      </Box>
    </Box>
  );
};

export default SideBar;