import styles from "./styles.module.css";
import Image from "next/image";
import Link from 'next/link'

import CaribeLogo from '../../../../public/caribeApuestaLogo.svg'
import CaribeWhatsapp from '../../../../public/icon/CaribeWhatsapp.svg'
import CaribeInstagram from '../../../../public/icon/CaribeInstagram.svg'

export const SocialMediaContainer = () => {
    let phoneNumberTelegran = '584248236730';
    let phoneNumber = '+58414-5080887';

    let message = 'Saludos CARIBEAPUESTA, ¿podrían brindarme su ayuda?'
    return (
        <div className={styles.SocialMediaContainer}>
            <div className={styles.Toggle_Title}>
                <Image
                    src={CaribeLogo}
                    alt={"Caribe Apuesta Logo"}
                    width={50} height={50}
                />
                <Link href="/">CARIBE APUESTA</Link>
            </div>
            <div className={styles.mediaIcons}>
                {/*
               }
                <a href={`https://web.telegram.org/k/#${phoneNumberTelegran}&text=${message}`} target="_blank">
                    <Image className={styles.mediaIcon} src={CaribeWhatsapp} alt="whatsapp icon" width={60} height={60} />
                    <Image className={styles.mediaIcon} src={CaribeInstagram} alt="Instagram icon" width={60} height={60} />
               
               </a>*/}
                <a href="https://www.instagram.com/caribeapuesta?igsh=bm5nbDZ6ODBybXB0" target="_blank" className={styles.iconBorder}>
                    <svg className={styles.mediaIcon} width={40} height={40} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path fill="#00ffff" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
                </a>
                <a className={styles.iconBorder} href={`https://t.me/+${phoneNumberTelegran}?text=${encodeURIComponent(message)}`} target="_blank"> {/* Enlace a Telegram con mensaje */}
                    <svg className={styles.mediaIcon} width={40} height={40} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                        <path fill="#00ffff" d="M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zM363 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5q-3.3 .7-104.6 69.1-14.8 10.2-26.9 9.9c-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3q.8-6.7 18.5-13.7 108.4-47.2 144.6-62.3c68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9a10.5 10.5 0 0 1 3.5 6.7A43.8 43.8 0 0 1 363 176.7z" /></svg>
                </a>
                {/*<Image className={styles.mediaIcon} src="/icon/CaribeYoutube.svg" alt="Burguer icon" width={60} height={60} />*/}
            </div>
        </div>
    )
}