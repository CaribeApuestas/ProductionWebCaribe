"use client";
import styles from "./styles.module.css";
import Link from 'next/link'
import { usePathname } from "next/navigation";
import { includePath } from "@/app/helpers/includePath";

const navigationTree = {
    gamesMenu: [
        { label: "SPORTS", URL: "/Sports/About", match: "/Sports" },
        { label: "TRAGAMONEDAS", URL: "/Slots/About", match: "/Slots" },
        { label: "HIPISMO", URL: "/HorseRacing/About", match: "/HorseRacing" },
        { label: "LIVEBETTING", URL: "/Live/Rules/BeisbolLive", match: "/Live" },
        { label: "CASINO ONLINE", URL: "/Casino/About", match: "/Casino" },
    ],
    aboutUs: [
        { label: "NOSOTROS", URL: "/Information/AboutUs", match: "/Information/AboutUs" },
        { label: "TERMINOS Y CONDICIONES", URL: "/Information/TermsAndConditions", match: "/Information/TermsAndConditions" },
        { label: "OBLIGACIONES DEL JUGADOR", URL: "/Information/PlayerObligations", match: "/Information/PlayerObligations" },
        { label: "POLÍTICA DE PRIVACIDAD", URL: "/Information/PrivacyPolicy", match: "/Information/PrivacyPolicy" }
    ]
};
export const NavigationFooterContainer = () => {

    return (
        <div className={styles.container}>
            <div className={styles.navigationContainer}>
                <Navigation items={navigationTree.aboutUs} title={'SOBRE NOSOTROS'} />
                <Navigation items={navigationTree.gamesMenu} title={'JUEGA'} />
            </div>
        </div>
    )
}
const Navigation = ({ items, title }: { items: any[], title?: string }) => {
    const actualPathname = usePathname();
    return (
        <nav className={styles.Navigation}>
            <h3>{title}</h3>
            <ul>
                {items.map((item, index) => (
                    <li key={index} className={`${includePath({ actualPathname, path: item.match }) ? styles.active : ''}`}>
                        <Link href={item.URL} prefetch={false}>{item.label}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
const SubscribeForm = () => {
    return (
        <>
            <h3>SUSCRIBIRSE</h3>
            <form action="#" className={styles.form}>
                <div className={styles.formGroup}>
                    <input
                        className={`${styles.caribeInput}`}
                        placeholder="Ingrese su email"
                    />
                </div>
                <button className={styles.caribeBtn} type="submit">ENVIAR</button>
            </form>
        </>
    )
}