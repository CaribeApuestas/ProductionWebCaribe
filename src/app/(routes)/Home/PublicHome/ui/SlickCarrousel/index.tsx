'use client'
import styles from "./styles.module.css";
import Slider from "react-slick";
import Image from "next/image";
import { useEffect, useState } from "react";

const listForDesktop = [
  {
    src: "/img/banner1.jpg",
    alt: "Te ofrecemos las mejores apuestas online.",
  },
  {
    src: "/img/banner2.jpg",
    alt: "¡Que esperas! Para empezar a ganar.",
  },
  {
    src: "/img/imgSliderHome1.jpg",
    alt: "¿Que esperas para empezar a ganar?",
  },
  {
    src: "/img/imgSliderHome2.jpg",
    alt: "Diversión y dinero en un solo lugar.",
  }
];

const listForMobile = [
  {
    src: "/img/banner1_800.jpg",
    alt: "Te ofrecemos las mejores apuestas online.",
  },
  {
    src: "/img/banner2_800.jpg",
    alt: "¡Que esperas! Para empezar a ganar.",
  },
]

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dotsClass: `slick-dots ${styles.dots}`
};

export default function SlickCarrousel() {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  useEffect(()=> {
    if (window.outerWidth >= 990) {
      setIsMobile(false);
    }
    if (window.outerWidth <= 990) {
      setIsMobile(true);
    }
  }, []);
  
  const renderImgList = (isMobile: boolean) => {
    const list = isMobile ? listForMobile : listForDesktop;
    return (
      list.map((image, index) => (
        <div className={styles.SliderItem} key={index}>
          <Image
            src={image.src}
            alt={image.alt}
            fill
          />
        </div>
      ))
    )
  }

  return (
    <div className={styles.SliderContainer}>
      <Slider {...settings} >
        {renderImgList(isMobile)}
      </Slider>
    </div>
  );
}