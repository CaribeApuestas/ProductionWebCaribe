"use client";
import { usePathname } from 'next/navigation';
import styles from './styles.module.css';
import Link from 'next/link'
import { includePath } from '@/app/helpers/includePath';

export const NavigationMenu = () => {
    const actualPathname = usePathname();

    return (<>
        <nav className={styles.Navigation}>
            <ul className={styles.links}>
                <li className={`${includePath({ actualPathname, path: '/Sports' }) ? styles.active : ''}`}>
                    <Link href="/Sports/About" prefetch={false}>SPORTS</Link>
                </li>
                <li className={`${includePath({ actualPathname, path: '/Slots' }) ? styles.active : ''}`}>
                    <Link href="/Slots/About" prefetch={false}>TRAGAMONEDAS</Link>
                </li>
                <li className={`${includePath({ actualPathname, path: '/HorseRacing' }) ? styles.active : ''}`}>
                    <Link href="/HorseRacing/About" prefetch={false}>HIPISMO</Link>
                </li>
                <li className={`${includePath({ actualPathname, path: '/Live' }) ? styles.active : ''}`}>
                    <Link href="/Live/Rules/BeisbolLive" prefetch={false}>LIVEBETTING</Link>
                </li>
                <li className={`${includePath({ actualPathname, path: '/Casino' }) ? styles.active : ''}`}>
                    <Link href="/Casino/About" prefetch={false}>CASINO ONLINE</Link>
                </li>
                <li className={`${includePath({ actualPathname, path: '/Information' }) ? styles.active : ''}`}>
                    <Link href="/Information/AboutUs" prefetch={false}>NOSOTROS</Link>
                </li>
            </ul>
        </nav>
    </>)
}