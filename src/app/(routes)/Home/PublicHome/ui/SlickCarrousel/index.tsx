'use client'
import styles from "./styles.module.css";
import Slider from "react-slick";
import Image from "next/image";
import { useEffect, useState } from "react";
import banner1 from '../../../../public/img/banner1.jpg';
import banner2 from '../../../../public/img/banner2.jpg';
import imgSliderHome1 from '../../../../public/img//imgSliderHome1.jpg';
import imgSliderHome2 from '../../../../public/img//imgSliderHome2.jpg';
import banner1Mobile from '../../../../public/img/banner1_800.jpg';
import banner2Mobile from '../../../../public/img/banner2_800.jpg';

const listForDesktop = [
  {
    src: banner1,
    alt: "Te ofrecemos las mejores apuestas online.",
  },
  {
    src: banner2,
    alt: "¡Que esperas! Para empezar a ganar.",
  },
  {
    src: imgSliderHome1,
    alt: "¿Que esperas para empezar a ganar?",
  },
  {
    src: imgSliderHome2,
    alt: "Diversión y dinero en un solo lugar.",
  }
];

const listForMobile = [
  {
    src: banner1Mobile,
    alt: "Te ofrecemos las mejores apuestas online.",
  },
  {
    src: banner2Mobile,
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