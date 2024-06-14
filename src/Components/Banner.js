import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner1 from "../Assets/banner.jpg";
import Banner2 from "../Assets/banner2.jpeg";
import Banner3 from "../Assets/banner3.jpeg";
import Banner4 from "../Assets/banner4.jpeg";
import Banner5 from "../Assets/banner5.jpeg";
import "../Styles/banner.css";

const Banner = () => {
  const banners = [
    {
      image: Banner1,
      title: "MAMAMOO",
      description:
        "MAMAMOO is a K-Pop group formed in 2014 by RBW Entertainment. Consisting of four members, Wheein (singer), Solar(singer), Moonbyul (rapper) and Hwa Sa(rapper).",
    },
    {
      image: Banner2,
      title: "Wheein",
      description:
        "Jung Wheein (정휘인) also known as Wheein is one of the singers within the group. She released her first full studio album,'In the Mood', on the 12th of October 2023.",
    },
    {
      image: Banner3,
      title: "Solar",
      description:
        "Kim Yong-sun (김용선) also known as Solar is one of the singers within the group. Her latest release is her EP 'Colours',released on the 30th of April 2024.",
    },
    {
      image: Banner4,
      title: "Moonbyul",
      description:
        "Moon Byul-yi (문별이) also known as Moonbyul is one of the rappers within the group. Her latest release is an Original Televison Soundtrack (OST) called Frankly Speaking. ",
    },
    {
      image: Banner5,
      title: "Hwa Sa",
      description:
        "Ahn Hye-jin (안혜진) also known as Hwa Sa is one of the rappers within the group. Her last release is a song, Chilli, done in collaboration with 'Street Women Fighter'. It was released on the 4th of October 2023. ",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="banner">
      <Slider {...settings}>
        {banners.map((banner, index) => (
          <div key={index} className="banner__slide">
            <img
              src={banner.image}
              alt={banner.title}
              className="banner__image"
            />
            <div className="banner__contents">
              <h1 className="banner__title">{banner.title}</h1>
              <div className="banner__buttons">
                <button
                  className="banner__button"
                  onClick={() =>
                    window.open(
                      "https://open.spotify.com/artist/0XATRDCYuuGhk0oE7C0o5G",
                      "_blank"
                    )
                  }
                >
                  Listen on Spotify
                </button>
                <button
                  className="banner__button"
                  onClick={() =>
                    window.open(
                      "https://www.youtube.com/@MAMAMOO_OFFICIAL",
                      "_blank"
                    )
                  }
                >
                  Watch on YouTube
                </button>
              </div>
              <p className="banner__description">{banner.description}</p>
            </div>
            <div className="banner__cover" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
