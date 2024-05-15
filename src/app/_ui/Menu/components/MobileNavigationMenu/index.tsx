"use client";
import Image from "next/image";
import styles from './styles.module.css';
import Link from 'next/link'
import { useState } from "react";
import { PrevLogin } from "../../../Login";
import { includePath } from "@/app/helpers/includePath";
import { usePathname } from "next/navigation";


import CaribeApuestaLogo from '../../../../../../public/caribeApuestaLogo.svg';
import BurguerIcon from '../../../../../../public/icon/BurguerIcon.svg'

export const MobileNavigationMenu = () => {
    const actualPathname = usePathname();
    const [isOpen, setOpen] = useState(false);
    const handleOpenMenu = () => {
        setOpen(!isOpen);
    }

    return (<>
        <div className={styles.sticky}>
            <div className={styles.ToggleContainer}>
                <div className={styles.Toggle_Title}>
                    <Image
                        src={CaribeApuestaLogo}
                        alt={"Caribe Apuesta Logo"}
                        width={50} height={50}
                    />
                    <Link href="/">CARIBE APUESTA</Link>
                </div>
                <div className={styles.Toggle_btn} onClick={handleOpenMenu}>
                    <Image src={BurguerIcon} alt="Burguer icon" width={25} height={25} />
                </div>
            </div>
            <nav className={`${styles.navigation} ${isOpen ? styles.isOpen : ""}`}>
                <div className={styles.menuLinksContainer}>
                    <PrevLogin />
                </div>
                <div className={styles.divider}></div>
                <ul >
                    <li className={`${includePath({ actualPathname, path: '/Sports' }) ? styles.active : ''}`}>
                        <Link onClick={handleOpenMenu} href="/Sports/About" prefetch={false}>SPORTS</Link>
                    </li>
                    <li className={`${includePath({ actualPathname, path: '/Slots' }) ? styles.active : ''}`}>
                        <Link onClick={handleOpenMenu} href="/Slots/About" prefetch={false}>TRAGAMONEDAS</Link>
                    </li>
                    <li className={`${includePath({ actualPathname, path: '/HorseRacing' }) ? styles.active : ''}`}>
                        <Link onClick={handleOpenMenu} href="/HorseRacing/About" prefetch={false}>HIPISMO</Link>
                    </li>
                    <li className={`${includePath({ actualPathname, path: '/Live' }) ? styles.active : ''}`}>
                        <Link onClick={handleOpenMenu} href="/Live/Rules/BeisbolLive" prefetch={false}>LIVEBETTING</Link>
                    </li>
                    <li className={`${includePath({ actualPathname, path: '/Casino' }) ? styles.active : ''}`}>
                        <Link onClick={handleOpenMenu} href="/Casino/About" prefetch={false}>CASINO ONLINE</Link>
                    </li>
                    <li className={`${includePath({ actualPathname, path: '/Information' }) ? styles.active : ''}`}>
                        <Link onClick={handleOpenMenu} href="/Information/AboutUs" prefetch={false}>NOSOTROS</Link>
                    </li>
                </ul>
                <div className={styles.divider}></div>
            </nav>
        </div>

    </>)
}