import styles from "./styles.module.css";
import Image from "next/image";
import Link from 'next/link'

export const SocialMediaContainer = () => {
    let phoneNumber = '+58424-8236730';
    let message = 'Saludos CARIBEAPUESTA, ¿podrían brindarme su ayuda?'
    return (
        <div className={styles.SocialMediaContainer}>
            <div className={styles.Toggle_Title}>
                <Image
                    src={"/caribeApuestaLogo.svg"}
                    alt={"Caribe Apuesta Logo"}
                    width={50} height={50}
                />
                <Link href="/">CARIBE APUESTA</Link>
            </div>
            <div className={styles.mediaIcons}>
                <a href={`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`} target="_blank">
                    <Image className={styles.mediaIcon} src="/icon/CaribeWhatsapp.svg" alt="Burguer icon" width={60} height={60} />
                </a>
                <a href="https://www.instagram.com/caribeapuesta?igsh=bm5nbDZ6ODBybXB0" target="_blank">
                    <Image className={styles.mediaIcon} src="/icon/CaribeInstagram.svg" alt="Burguer icon" width={60} height={60} />
                </a>
                <Image className={styles.mediaIcon} src="/icon/CaribeYoutube.svg" alt="Burguer icon" width={60} height={60} />
            </div>
        </div>
    )
}