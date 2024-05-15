import styles from "./styles.module.css";
import { Navigation } from "./components/Navigation";

export default function SlotsLayout({
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