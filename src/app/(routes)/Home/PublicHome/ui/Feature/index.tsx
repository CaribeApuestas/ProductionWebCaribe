import FeaturedGames from "@/app/_components/FeaturedGames";
import styles from "./styles.module.css";

export default function Feature() {
    return (
        <section className={styles.container}>
            <article className={styles.headerFeatureContainer} lang="es">
                <h2>JUEGOS DESTACADOS</h2>
                <p> Somos la mejor opción de apuestas deportivas en línea. Nuestra plataforma abarca una amplia
                    gama de deportes, incluyendo MLB, NBA, NFL, NHL y LVBP. Ya sea que te apasione el béisbol,
                    el baloncesto o el hockey, en nuestro sitio encontrarás estadísticas actualizadas, marcadores en vivo y análisis detallados.
                    ¡Únete a nosotros y vive la emoción del deporte con total confianza!
                </p>
            </article>
            <div className={styles.featuredGamesContainer}>
                <FeaturedGames />
                <div className={styles.divider}></div>
                <FeaturedGames />
                <div className={styles.divider}></div>
                <FeaturedGames />
            </div>
        </section>
    )
}