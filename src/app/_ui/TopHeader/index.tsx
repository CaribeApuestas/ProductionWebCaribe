import { AuthHandleContainer } from "../AuthHandleContainer"
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";
import CaribeApuestaLogo from '../../../../public/caribeApuestaLogo.svg';
import LogoHeader from '../../../../public/img/LogoHeader.png';

export const TopHeader = () => {
    return (
        <div className={styles.HeaderContainer}>
            <div className={styles.Header_Title_Container}>
                <div className={styles.Header_Title}>
                    <Image
                        src={CaribeApuestaLogo}
                        alt={"Caribe Apuesta Logo"}
                        width={50} height={50}
                    />
                    <Link href="/">CARIBE APUESTA</Link>
                </div>
            </div>
            <div className={styles.Header_Logo}>
                <Image
                    src={LogoHeader}
                    alt={"Caribe Apuesta LogoHeader"}
                    width={921} height={379}
                />
            </div>
            <div className={styles.Header_Login_Container}>
                    <AuthHandleContainer />
            </div>
        </div>
    )
}