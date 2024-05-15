import { AuthHandleContainer } from "../AuthHandleContainer"
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";

export const TopHeader = () => {
    return (
        <div className={styles.HeaderContainer}>
            <div className={styles.Header_Title_Container}>
                <div className={styles.Header_Title}>
                    <Image
                        src={"/caribeApuestaLogo.svg"}
                        alt={"Caribe Apuesta Logo"}
                        width={50} height={50}
                    />
                    <Link href="/">CARIBE APUESTA</Link>
                </div>
            </div>
            <div className={styles.Header_Logo}>
                <Image
                    src={"/img/LogoHeader.png"}
                    alt={"Caribe Apuesta Logo"}
                    width={921} height={379}
                />
            </div>
            <div className={styles.Header_Login_Container}>
                    <AuthHandleContainer />
            </div>
        </div>
    )
}