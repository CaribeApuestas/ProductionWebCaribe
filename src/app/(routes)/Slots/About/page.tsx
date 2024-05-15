import { Metadata } from "next";
import styles from "./styles.module.css";

export const metadata: Metadata = {
    title: "Máquinas tragamonedas: Emoción y Diversión en CaribeApuesta | CaribeApuesta",
    description: "En CaribeApuesta puedes descubrir el mundo de las tragamonedas online, donde encontrarás reseñas detalladas, estrategias ganadoras y los últimos lanzamientos. ¡Juega responsablemente y vive la emoción del casino desde la comodidad de tu hogar!",
    metadataBase: new URL("http://localhost:3000/"),
    keywords: ['¿Qué son las Máquinas Tragamonedas?', 'Máquinas tragamonedas', 'Selección máquinas tragamonedas'],
    openGraph: {
        title: "Máquinas tragamonedas: Emoción y Diversión en CaribeApuesta",
        description: "En CaribeApuesta descubre el mundo de las tragamonedas online, donde encontrarás reseñas detalladas, estrategias ganadoras y los últimos lanzamientos. ¡Juega responsablemente y vive la emoción del casino desde la comodidad de tu hogar!",
    }
};

export default function About() {
    return (
        <div className={styles.container}>
            <h2> Tragamonedas: Emoción y Diversión en CaribeApuesta </h2>
            <p>
                Las máquinas tragamonedas son auténticas joyas del azar. Desde las tradicionales frutas
                hasta las más vanguardistas con gráficos deslumbrantes, cada giro es una aventura.
                Permítenos guiarte a través de este emocionante mundo:
            </p>
            <section>
                <h3>
                    ¿Qué son las Máquinas Tragamonedas?
                </h3>
                <p>
                    Las máquinas tragamonedas ofrecen una experiencia única. Encontrarás una amplia variedad de
                    opciones, desde las clásicas hasta las más modernas. Los rodillos giran, los símbolos se alinean y la emoción se desata.
                </p>
            </section>
            <section>
                <h3>Nuestra Selección de Tragamonedas</h3>
                <p>
                    En CaribeApuesta, te ofrecemos una fantástica variedad de máquinas tragamonedas para disfrutar:
                </p>
                <ul>
                    <li><p><mark>Tragamonedas Clásicas</mark>: Si te encantan las frutas y los símbolos tradicionales, estas tragamonedas son tu elección.</p></li>
                    <li><p><mark>Tragamonedas de Video</mark>: Sumérgete en mundos temáticos, desde la antigüedad hasta la ciencia ficción.</p></li>
                    <li><p><mark>Jackpots Progresivos</mark>: ¿Sueñas con un premio gigante? Juega a las tragamonedas con jackpots acumulativos.</p></li>
                    <li><p><mark>Giros Gratis y Bonificaciones</mark>: Algunas tragamonedas ofrecen rondas de giros gratis y emocionantes minijuegos.</p></li>
                </ul>
            </section>
            <section>
                <h3>Consejos para Disfrutar al Máximo</h3>
                <ul>
                    <li><p><mark>Establece un Presupuesto</mark>: Decide cuánto deseas apostar antes de comenzar.</p></li>
                    <li><p><mark>Prueba las Versiones de Demostración</mark>: Decide cuánto deseas apostar antes de comenzar.</p></li>
                    <li><p><mark>Lee las Reglas</mark>: Decide cuánto deseas apostar antes de comenzar.</p></li>
                    <li><p><mark>Diviértete</mark>: Elige una tragamonedas que te entusiasme y disfruta del viaje.</p></li>
                </ul>
            </section>
            <section>
                <h3>
                    Juega responsablemente
                </h3>
                <p>
                    Recuerda que el juego debe ser una actividad divertida y no una fuente de estrés. Establece límites y juega de manera responsable.
                </p>
                <p className={styles.responsibleGaming}>
                    ¡Buena suerte en tus apuestas en línea!
                </p>
            </section>
        </div>
    )
}