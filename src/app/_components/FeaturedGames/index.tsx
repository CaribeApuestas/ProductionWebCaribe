"use client"
import Slider from "react-slick";
import FeaturedGame from "@/app/_components/FeaturedGame";
import styles from "./styles.module.css";

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: `slick-dots ${styles.dots}`,
    arrows: false,
};

export default function FeaturedGames() {
    return (
        <div className={styles.featuredGames}>
            <Slider {...settings}>
                <FeaturedGame />
                <FeaturedGame />
                <FeaturedGame />
                <FeaturedGame />
                <FeaturedGame />
                <FeaturedGame />
            </Slider>
        </div>
    );
}