export interface MyObject {
    id: number;
    name: string;
    audio: string;
    cover: string;
    active: boolean;
    color: string[];
    artist: string;
    isSongPlaying : boolean
  }
  
  export const songsList: MyObject[] = [
    {
      name: "Lean On",
      cover:
        "https://img.wynk.in/unsafe/248x248/filters:no_upscale():strip_exif():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/srch_universalmusic/music/update/1602038424/srch_universalmusic_00602577584022-QMUY41500008.jpg",
      artist: "Major Lazer",
      audio: "/Lean-On-Major-Lazer.mp3",
      color: ["#205950", "#2ab3bf"],
      id: 1,
      active: true,
      isSongPlaying : false
    },
    {
      name: "Time Traveller",
      cover:
        "https://img.wynk.in/unsafe/248x248/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_universalmusic/00602448505613_20230329214614936/1680128418260/22UMGIM88976_T1_cvrart.jpg",
      artist: "M.I.A",
      audio: "/timeTraveller-Mia.mp3",
      color: ["#EF8EA9", "#ab417f"],
      id: 2,
      active: false,
      isSongPlaying : false
    },
    {
      name: "Sugar And Brownies",
      cover:
        "https://img.wynk.in/unsafe/248x248/filters:no_upscale():strip_exif():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/srch_sonymusic/music/srch_sonymusic_A10328E0008982849D.jpg",
      artist: "Dharia",
      audio: "/sugar-and-brownies-Dharia.mp3",
      color: ["#CD607D", "#c94043"],
      id: 3,
      active: false,
      isSongPlaying : false
    },
    {
      name: "Blue Eyes",
      cover:
        "https://img.wynk.in/unsafe/248x248/filters:no_upscale():strip_exif():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/srch_hungama/music/8902894354943/1615218615/srch_hungama_2192964.jpg",
      artist: "Yo Yo Honey Singh",
      audio: "/blueEyes-honeysingh.mp3",
      color: ["#EF8EA9", "#ab417f"],
      id: 4,
      active: false,
      isSongPlaying : false
    },
    {
      name: "Wahran",
      cover:
        "https://img.wynk.in/unsafe/248x248/filters:no_upscale():strip_exif():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/srch_wmg/music/update/190295458669/1656401311/srch_wmg_A10302B0004802032F.jpg",
      artist: "Randall",
      audio: "/Randall-Wahran-.mp3",
      color: ["#CD607D", "#c94043"],
      id: 5,
      active: false,
      isSongPlaying : false
    },
    {
      name: "Beautiful Now",
      cover:
        "https://img.wynk.in/unsafe/248x248/filters:no_upscale():strip_exif():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/srch_universalmusic/music/srch_universalmusic_00602547351791-USUM71505090.jpg",
      artist: "Zedd, Jon Bellion",
      audio: "/beautifulNow-zedd.mp3",
      color: ["#205950", "#2ab3bf"],
      id: 6,
      active: false,
      isSongPlaying : false
    },

    {
      name: "Killers From The North Side",
      cover:
        "https://img.wynk.in/unsafe/248x248/filters:no_upscale():strip_exif():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/srch_orchard/music/20211019183923_196400450023/1634684405/srch_orchard_196400450023_QZMER2123287.jpg",
      artist:"Kordhell",
      audio: "/Killers-From-The-Northside-Kordhell.mp3",
      color: ["#205950", "#2ab3bf"],
      id: 7,
      active: false,
      isSongPlaying : false
    },

    {
      name: "Imaginary",
      cover:
        "https://img.wynk.in/unsafe/248x248/filters:no_upscale():strip_exif():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/srch_believe/music/0889211646838/1597677638/srch_believe_A10320WT034922493Y.jpg",
      artist:"Imran Khan",
      audio: "imaginary-imranKhan.mp3",
      color: ["#205950", "#2ab3bf"],
      id: 8,
      active: false,
      isSongPlaying : false
    },
  ];