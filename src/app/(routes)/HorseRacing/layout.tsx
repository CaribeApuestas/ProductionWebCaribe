import Link from "next/link";
import styles from "./styles.module.css";
import { Navigation } from "./components/Navigation";

export default function HorseRacingLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    return (
        <section className={styles.container}>
            <Navigation />
            {children}
        </section>
    )
}