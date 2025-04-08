"use client";
import { useEffect, useState } from "react";
import CustomModal from "../CustomModal";
import first from '../../../../public/img/1.webp';
import second from '../../../../public/img/2.webp';
import third from '../../../../public/img/3.webp';
import fourth from '../../../../public/img/4.webp';
import fifth from '../../../../public/img/5.webp';
import sixth from '../../../../public/img/6.webp';
import seventh from '../../../../public/img/7.webp';
import eighth from '../../../../public/img/8.webp';
import ninth from '../../../../public/img/9.webp';
import styles from './styles.module.css';
import Image from "next/image";

const images = [first, second, third, fourth, fifth, sixth, seventh, eighth, ninth];

export default function AdvertinsingAlert() {
    const [isModalOpen, setModalOpen] = useState(true);
    const [randomImage, setRandomImage] = useState<null | string>(null);

    useEffect(() => {
        // Selecciona una imagen aleatoria al montar el componente
        const randomIndex = Math.floor(Math.random() * images.length);
        setRandomImage(images[randomIndex].src);
    }, []);

    useEffect(() => {
        // Bloquea el scroll cuando el modal está abierto
        if (isModalOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        // Limpia el estilo al desmontar el componente
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isModalOpen]);

    return (

        randomImage &&
        <CustomModal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <div className={styles.imageContainer}>
            <Image
                src={randomImage}
                alt={"Advertising Alert Image"}
                width={500}
                height={500}
                className={styles.responsiveImage}
            />
        </div>
    </CustomModal>
    )

}