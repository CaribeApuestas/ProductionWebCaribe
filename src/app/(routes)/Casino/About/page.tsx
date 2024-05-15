import { Metadata } from "next";
import styles from "./styles.module.css";

export const metadata: Metadata = {
    title: "Casinos en Línea: ¡Apuesta desde la Comodidad de tu Hogar!  | CaribeApuesta",
    description: "Los casinos en línea han transformado la manera en que experimentamos los juegos de azar. Si buscas emoción, entretenimiento y la oportunidad de ganar premios, ¡los casinos virtuales son la elección perfecta!",
    keywords: [
        'Casino en línea',
        'Casino en línea en Venezuela',
        '¿ Que es un casino en línea ?',
        'Los mejores juegos de casino en línea',
        'Juegos populares en los casinos en línea'
    ],
    metadataBase: new URL("http://localhost:3000/"),
    openGraph: {
        title: "Casinos en Línea: ¡Apuesta desde la Comodidad de tu Hogar! ",
        description: "Los casinos en línea han transformado la manera en que experimentamos los juegos de azar. Si buscas emoción, entretenimiento y la oportunidad de ganar premios, ¡los casinos virtuales son la elección perfecta!",
    }
};

export default function About() {
    return (
        <div className={styles.container}>
            <h2> Casinos en Línea: ¡Apuesta desde la Comodidad de tu Hogar! </h2>
            <p>
                Los casinos en línea han transformado la manera en que experimentamos los juegos de azar.
                Si buscas emoción, entretenimiento y la oportunidad de ganar premios, ¡los casinos virtuales son la
                elección perfecta! A continuación, te presentamos todo lo que necesitas saber:
            </p>
            <section>
                <h3> ¿Qué es un casino en línea? </h3>
                <p>
                    Un casino en línea es una plataforma digital que ofrece una amplia variedad de juegos de azar y
                    apuestas a través de internet. Algunos aspectos clave incluyen:
                </p>
                <ul>
                    <li><p><mark>Variedad de juegos</mark>: Desde tragamonedas hasta póker, ruleta y blackjack, los casinos en línea ofrecen una amplia gama de opciones para todos los gustos. Explora diferentes juegos y encuentra el que más te divierta.</p></li>
                    <li><p><mark>Métodos de pago</mark>: Deposita y retira fondos de manera segura utilizando tarjetas de crédito, transferencias bancarias y otros métodos confiables. La comodidad está en tus manos.</p></li>
                    <li><p><mark>Atención al cliente</mark>: Los buenos casinos en línea ofrecen soporte las 24 horas del día. Si tienes preguntas o necesitas ayuda, siempre habrá alguien dispuesto a asistirte.</p></li>
                    <li><p><mark>Acceso desde cualquier lugar</mark>: Juega desde la comodidad de tu hogar o cualquier otro lugar con conexión a internet. Los casinos en línea te brindan la libertad de disfrutar de tus juegos favoritos sin restricciones geográficas.</p></li>
                    <li><p><mark>Seguridad y licencias</mark>: Es fundamental elegir casinos con licencias y regulaciones adecuadas. Así protegerás tus datos personales y financieros mientras disfrutas de la emoción del juego en línea.</p></li>
                    <li><p><mark>Bonos y promociones</mark>: ¿Quieres aumentar tus posibilidades de ganar? Los casinos en línea ofrecen bonos de bienvenida, giros gratis y otras ofertas especiales. Aprovecha estas promociones para maximizar tus ganancias.</p></li>
                </ul>
            </section>
            <section>
                <h3> Juegos populares en los casinos en línea </h3>
                <ul>
                    <li><p><mark>Tragamonedas</mark>: Explora una amplia variedad de temas y mecánicas de juego en las máquinas tragamonedas virtuales.</p></li>
                    <li><p><mark>Blackjack</mark>: Desafía al crupier y trata de sumar 21 puntos sin excederte.</p></li>
                    <li><p><mark>Ruleta</mark>: Apuesta en números o colores y gira la rueda para ver si la suerte está de tu lado.</p></li>
                    <li><p><mark>Póker</mark>: Elige entre varias modalidades de póker y demuestra tus habilidades.</p></li>
                    <li><p><mark>Bacará</mark>: Similar al blackjack, este juego de cartas ofrece emoción y estrategia.</p></li>
                    <li><p><mark>Dados</mark>: Apuesta en el resultado de un lanzamiento de dados y disfruta de la adrenalina.</p></li>
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