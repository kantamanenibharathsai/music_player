// import { useState } from "react";
import styles from "./musicPlayer.styles";
import Sidebar from "../sidebar/sidebar";
import { Box, Slider } from "@mui/material";
import PauseCircleFilledIcon from "@mui/icons-material/PauseCircleFilled";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useContext, useEffect, useMemo, useState } from "react";
import { Howl } from "howler";
import MusicContext from "../../app_context/musicContext";


const Music: React.FC = () => {
  const [currentSongId, setCurrentSongId] = useState<number>(1);
  const [isCurrentSongPlaying, setIsCurrentSongPlaying] =
    useState<boolean>(false);
  const [sliderPosition, setSliderPosition] = useState<number>(0);
  const [audio, setAudio] = useState<Howl | null>(null)
  const [currentTime, setCurrentTime] = useState<number>(0)
  const [currentPlaybackPosition, setCurrentPlaybackPosition] = useState<number>(0);

  const {
    allSongs,
  } = useContext(MusicContext);

  const currentSongObj = useMemo(() => {
    return allSongs.find((eachSong) => eachSong.id === currentSongId);
    // eslint-disable-next-line
  }, [currentSongId]);

  const loadAudio = () => {
    if (audio) {
      audio.stop();
    }
  
    const newAudio = new Howl({
      src: [currentSongObj!.audio],
      onend: handleNext,
      onplay: () => setIsCurrentSongPlaying(true),
      // seek: currentPlaybackPosition / 1000,
    });
  
    setAudio(newAudio);
  };

  useEffect(() => {
    console.log(currentSongId)
    loadAudio();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSongId])

  const handlePlayPause = () => {
    // console.log(audio, isCurrentSongPlaying)
    if (audio) {
      if (isCurrentSongPlaying) {
        console.log(audio.seek());
        audio.pause();
      
      } else {
        setSliderPosition(audio.seek());
        // audio.seek(audio.seek())
        audio.play();
      }
      setIsCurrentSongPlaying(!isCurrentSongPlaying);
    }
  };

  const handleNext = () => {
    if (currentSongId < allSongs.length) {
      if (audio) {
        audio.stop();
      }
      setCurrentSongId(currentSongId + 1);
    }
  };

  const handlePrevious = () => {
    if (currentSongId > 1) {
      if (audio) {
        audio.stop();
      }
    setCurrentSongId(currentSongId - 1);
    }
  };

  const handleSliderChange = () => {
    // console.log("slider change called")
    setSliderPosition(audio!.seek());
  };

  const handleSliderRelease = (newValue: number | number[]) => {
    // console.log("release", audio?.duration())
    if (audio) {
      audio.seek(newValue as number);
      setSliderPosition(newValue as number);
    }
  };

  useEffect(() => {
    if (audio) {
      if (isCurrentSongPlaying) {
        console.log(audio.seek())
        audio.play();
      } else {
        audio.pause();
      }
    }
  }, [isCurrentSongPlaying, audio]);

  useEffect(() => {
    // console.log(isCurrentSongPlaying)
    if (audio && isCurrentSongPlaying) {
      const interval = setInterval(() => {
        setCurrentTime(audio.seek());
        setSliderPosition(audio.seek())
      }, 1000);

      return () => {
        if (audio) {
          audio.stop();
        }
        clearInterval(interval);
      };
    }
  }, [isCurrentSongPlaying, audio]);



  function formatDuration(value: number) {
    const minutes : number= Math.floor(value / 60);
    const secondLeft : number = Math.floor(value - (minutes * 60));
    return `${minutes < 10 ? `0${minutes}` : minutes}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft
      }`;
  }

  const currentSongLength = () => {
  if (audio) {
    const seconds: number = Math.floor((audio.duration() % 60));
    const minutes: number = Math.floor(audio.duration() / 60);
  
    const formattedSeconds : string = seconds < 10 ? `0${seconds}` : `${seconds}`;
    const formattedMinutes : string = minutes < 10 ? `0${minutes}` : `${minutes}`;
  
    return `${formattedMinutes}:${formattedSeconds}`;
  }
  else {
    return "00:00";
  }
  };

  return (
    <Box sx={styles.mainContainer}>
      <Sidebar />
      <Box sx={styles.right}>
        <Box sx={styles.currentMusicContainer}>
          <Box sx={styles.currentMusicList}>{currentSongObj?.name}</Box>
        </Box>
        <Box sx={styles.BoxImg}>
          <Box
            sx={styles.discImg}
            component="img"
            src={currentSongObj?.cover}
          ></Box>
        </Box>
        <Box sx={styles.playerBtn}>
          <Box sx={styles.sliderBox}>

            <Slider
              aria-label="time-indicator"
              size="small"
              value={sliderPosition}
              min={0}
              step={1}
              max={audio ? audio.duration() : 0}
              sx={{ margin: "5px 20px" }}
              onChange={handleSliderChange}
              onChangeCommitted={() => handleSliderRelease(sliderPosition)}
            />
          </Box>
          <Box sx={styles.number}>
            <Box>{formatDuration(currentTime)}</Box>
            <Box>{currentSongLength()}</Box>
          </Box>
          <Box sx={styles.btnsContainer}>
            <ArrowBackIosNewIcon
              sx={{ cursor: "pointer" }}
              onClick={handlePrevious}
            />
            <Box sx={styles.button}>
              {isCurrentSongPlaying === false ? (
                <PlayArrowIcon
                  sx={{ fontSize: "60px", cursor: "pointer" }}
                  onClick={handlePlayPause} />
              ) : (
                <PauseCircleFilledIcon
                  sx={{ fontSize: "60px", cursor: "pointer" }}
                  onClick={handlePlayPause}
                />
              )}
            </Box>
            <ArrowForwardIosIcon
              sx={{ cursor: "pointer" }}
              onClick={handleNext}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Music;




















  // const totalSeconds: number = useMemo(() => {
  //   const seconds: number = Math.floor(
  //     ((exposedData?.duration ?? 0) % (1000 * 60)) / 1000
  //   );

  //   let minutes: number = Math.floor(
  //     (exposedData?.duration ?? 0 % (1000 * 60 * 60)) / (1000 * 60)
  //   );

  //   return seconds + minutes * 60;
  // }, [exposedData.duration]);

  // useEffect(() => {
  //   let intervalId: NodeJS.Timeout;
  //   if (isCurrentSongPlaying === true) {
  //     intervalId = setInterval(() => {
  //       if (position === totalSeconds) {
  //         isCurrentSongPlayingFunc(false);
  //         setPosition(totalSeconds);
  //         clearInterval(intervalId);
  //       } else {
  //         setPosition((prevPosition) => prevPosition + 1);
  //       }
  //     }, 1000);

  //     return () => {
  //       clearInterval(intervalId);
  //     };
  //   }
  // }, [isCurrentSongPlaying]);