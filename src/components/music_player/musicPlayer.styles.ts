
const styles = {
    mainContainer: {
      display: "grid",
      gridTemplateColumns: "30% 70%",
      // border: "2px solid red",
      height: "100vh",
    },
  
    right: {
      width: "100%",
      // border: "2px solid green",
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      gap: "80px",
    },
    currentMusicContainer: {
      width: "500px",
      // height: "100px",
  
      borderRadius: "15px",
      backDropFilter: "blur(10px) saturate(180%)",
      backgroundColor: "rgb(242, 246, 252)",
      border: "1px solid rgba(209, 213, 219, 0.3)",
      // marginTop: "20px",
      margin: "10px auto",
    },
    BoxImg: {
      width: "100%",
      // border: "2px solid red",
      display: "flex",
    },
    discImg: {
      width: "300px",
      height: "300px",
      // border: "2px solid red",
      margin: "10px auto",
      // height: "80px",
    },
    playerBtn: {
      width: "700px",
      // border : '2px solid red',
      // height: "100px",
      margin: "20px auto",
      borderRadius: "20px",
      // background: "#E5E5CB",
      // display : 'flex',
      //   justifyContent : 'center',
      //   alignItems : 'center',
      backDropFilter: "blur(10px) saturate(180%)",
      // -webkitBackdropFilter: 'blur(16px) saturate(180%)',
      backgroundColor: "rgba(255, 255, 255, 0.75)",
      // border-radius: 12px,
      border: "1px solid rgba(209, 213, 219, 0.3)",
    },
    sliderBox: {
      display: "flex",
      justifyContent: "center",
      margin: "10px 0px",
    },
    number: {
      // width : '500px',
      display: "flex",
      justifyContent: "space-between",
      margin: "0 20px",
    },
  
    btnsContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "100px",
      // border: "4px solid green",
    },
  
    button: {
      // border : '2px solid red',
      display: "flex",
      justifyContent: "center",
      margin: "10px 0px",
    },
    leftItems: {
      padding: "20px 20px",
      backgroundColor: "rgba(255, 255, 255, 0.75)",
      margin: "20px 20px",
      borderRadius: "10px",
      cursor: "pointer",
    },
    currentMusicList: {
      padding: "20px",
      textAlign: "center",
      fontSize: "20px",
    },
  };
  
  export default styles;