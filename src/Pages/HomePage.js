import React from "react";
import Header from "../Components/Header";
import Banner from "../Components/Banner";
import Slider from "../Components/Slider";
import Footer from "../Components/Footer";

const mamamooVideos = [
  { videoId: "dfl9KIX1WpU", title: "딩가딩가 (Dingga)" },
  { videoId: "KhTeiaCezwM", title: "HIP" },
  { videoId: "UoI9riNffEU", title: "AYA" },
  { videoId: "Oao3j2hUVvE", title: "고고베베(gogobebe)" },
  { videoId: "uOZ2r_UAfdc", title: "Wind Flower" },
  { videoId: "G5UM2rOyqr4", title: "Egotistic" },
  { videoId: "sk-qyR224fU", title: "WANNA BE MYSELF (나는 안다르다)" },
  { videoId: "Vz508O9NNTg", title: "ILLELLA (일낼라)" },
  { videoId: "uIAScvNDQpI", title: "다 빛이나 (Gleam)" },
  { videoId: "o0I8YjeWfQU", title: "데칼코마니 (Décalcomanie)" },
  { videoId: "mMYDxR26970", title: "행복하지마 (Don't Be Happy)" },
  { videoId: "I02F1lvhguw", title: "1CM의 자존심" },
  { videoId: "hTMlLDAclTI", title: "Yes I Am" },
  { videoId: "kLeBQWw11yw", title: "별 바람 꽃 태양(Star Wind Flower Sun)" },
];

const solarVideos = [
  { videoId: "ef8SZV6yfIQ", title: "But I" },
  { videoId: "UHiSc_M0xQU", title: "꿀 (HONEY)" },
  { videoId: "V8FXWf0s7K0", title: "뱉어 (Spit it out)" },
  { videoId: "Nco2QAhWo9A", title: "Paradise" },
  { videoId: "EtDtptp1eu0", title: "뚠뚠뚠(Ddun Ddun Ddun)" },
  { videoId: "Zbm5USVQQdk", title: "Colors" },
  { videoId: "ePI4jH8pDb4", title: "Adrenaline" },
];

const wheeinVideos = [
  { videoId: "ShFKF2YN7H0", title: "water color" },
  { videoId: "U_dpIqCDcZk", title: "Let's breakup (Prod. Junky)" },
  { videoId: "KNWLQI5_JLc", title: "EASY" },
  { videoId: "6l4divMKp4E", title: "25 (Twenty Five)" },
  { videoId: "_znHIJ8rY24", title: "In The Mood" },
  { videoId: "MA79-uBPiSY", title: "With My Tears" },
  { videoId: "8nVyoH0ppmI", title: "Make Me Happy" },
  { videoId: "7Pu7WbwUwXc", title: "TRASH" },
  { videoId: "IqJzD-H7BZo", title: "Pink Cloud" },
  { videoId: "eOgKmXz3bJg", title: "Spark" },
  { videoId: "pGU0RHWaNLE", title: "17 (feat. HWA SA)" },
];

const moonbyulVideos = [
  { videoId: "_EWKB1lVsyI", title: "TOUCHIN&MOVIN" },
  { videoId: "Nqz4oh2jogE", title: " 머리에서 발끝까지 (feat. Seori)" },
  { videoId: "YJ0_Q1-5gE8", title: "Think About" },
  { videoId: "oCTqcTe1lIA", title: "Eclipse" },
  { videoId: "l-fZh5Maq0k", title: "LUNATIC" },
  { videoId: "aRBV86glZzE", title: "DARK ROMANCE" },
  { videoId: "SA4V3TE4j3c", title: "G999" },
  { videoId: "diwrEUG6gBg", title: "Selfish" },
  { videoId: "NQ6Vy-3dmTk", title: "In My Room" },
  { videoId: "WJ3VCON4LRM", title: "mirror" },
  { videoId: "GkW538hhFaY", title: "눈 (SNOW)" },
  { videoId: "NXnP06Ial08", title: "absence" },
  { videoId: "bgmrYj6pvsM", title: "For Me" },
];

const hwasaVideos = [
  { videoId: "s1kwS3riCQI", title: "I'm a B" },
  { videoId: "pkjEpDeDLOg", title: "LMM" },
  { videoId: "IY3EflLx_9s", title: "FOMO" },
  { videoId: "ScSn235gQx0", title: "TWIT" },
  { videoId: "tDukIfFzX18", title: "Maria" },
  { videoId: "Crq_fRV0O0E", title: "I Love My Body" },
  { videoId: "7kgV7Hrb-1c", title: "덤덤해지네 (Be Calm)" },
  { videoId: "DRaFuAMqX80", title: "Lemon" },
  { videoId: "gGph78U5oIw", title: "BLESS U" },
  { videoId: "cbK7jW458fE", title: "DPR Live feat. Hwa Sa - Hula Hoops" },
  { videoId: "0Lm5EZw4Lmg", title: "Kidding" },
];

const HomePage = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Slider title="MAMAMOO'S MUSIC VIDEOS" videos={mamamooVideos} />
      <Slider title="SOLAR" videos={solarVideos} />
      <Slider title="WHEEIN" videos={wheeinVideos} />
      <Slider title="MOONBYUL" videos={moonbyulVideos} />
      <Slider title="HWA SA" videos={hwasaVideos} />
      <Footer />
    </div>
  );
};

export default HomePage;
