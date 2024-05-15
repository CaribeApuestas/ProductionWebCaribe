import Link from "next/link";
import styles from "./styles.module.css";

export default function Results() {
    return (
        <section className={styles.container}>
            <article className={styles.headerResultsContainer} lang="es">
                <h2>RESULTADOS</h2>
                <p>Explora los últimos resultados deportivos para mantenerte actualizado en el mundo del deporte. 
                    Descubre los números ganadores y acumula premios si eres un entusiasta,
                    garantizando que siempre estés informado y listo para participar.</p>
            </article>
            <section className={styles.resultsContentContainer}>
                <div className={styles.banner}>
                    <div className={styles.bannerTitle}>
                        sportsbook
                    </div>
                    <div className={styles.bannerBtnContainer}>
                        <Link href="/Results">¡QUIERO VER RESULTADOS!</Link>
                    </div>
                </div>
                <div className={styles.banner}>
                    <div className={styles.bannerTitle}>
                        lotería
                    </div>
                    <div className={styles.bannerBtnContainer}>
                        <Link href="/Results">¡QUIERO VER RESULTADOS!</Link>
                    </div>
                </div>
            </section>
            <footer className={styles.resulsFooter}>
                <h4>¡DONDE QUIERAS COMO QUIERAS!</h4>
                <h5>DESDE CUALQUIERPARTE DEL MUNDO </h5>
            </footer>
        </section>
    )
}