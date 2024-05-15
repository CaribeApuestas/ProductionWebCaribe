'use client'
import Slider from "react-slick";
import styles from "./styles.module.css";
import Image from "next/image";

const listForDesktop = [
    {
        src: "/img/casino.png",
        alt: "Casino",
    },
    {
        src: "/img/deportivas.png",
        alt: "Apuestas deportivas",
    },
    {
        src: "/img/poker.jpg",
        alt: "Poker",
    },
    {
        src: "/img/virtuales.png",
        alt: "Juegos Virtuales",
    },
    {
        src: "/img/hipismo.png",
        alt: "Hipismo",
    }
];
var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    initialSlide: 0,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1000,
    cssEase: "linear",
    responsive: [
        {
            breakpoint: 1500,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 1440,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 1300,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
            }
        }
    ]
};

export default function ProductsSlider() {
    const renderImgList = () => {
        return (
            listForDesktop.map((image, index) => (
                <div className={styles.SliderItem} key={index}>
                    <Image
                        className={styles.slickImg}
                        src={image.src}
                        alt={image.alt}
                        width={380}
                        height={225}
                    />
                </div>
            ))
        )
    }
    return (
        <Slider {...settings} className={styles.sliderFelizDelMundo}>
            {renderImgList()}
        </Slider>
    )
}