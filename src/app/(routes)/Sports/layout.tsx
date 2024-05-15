import { Navigation } from "./components/Navigation";
import styles from "./styles.module.css";

export default function SportsLayout({
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