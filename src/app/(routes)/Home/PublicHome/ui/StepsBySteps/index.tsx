import styles from "./styles.module.css";

export default function StepsBySteps() {
    return (
        <section className={styles.container}>
            <article className={styles.headerStepsContainer} lang="es">
                <h2>JUEGA Y GANA CON NOSOTROS.</h2>
                <p>Somos una página de apuestas segura y dedicada a brindar entretenimiento a nuestros clientes, donde te ofrecemos a jugar desde la comodidad
                    de tu casa o incluso desde cualquier lugar que te encuentres.
                </p>
                <p>
                    En nuestra plataforma encontraras una variedad de opciones, como apuestas deportivas,
                    carreras de caballos nacionales e internacionales, tragamonedas, casino en vivo,
                    entre otros juegos. Además contamos con un sistema de pago en línea seguro y rápido
                    para que puedas realizar tus recargas y retiros sin preocupaciones.
                </p>
            </article>
            <section className={styles.stepsContentContainer}>
                <ul className={styles.stepsList}>
                    <li>
                        <div className={styles.number}>
                            1
                        </div>
                        <div className={styles.stepInfo}>
                            <h3>REGÍSTRATE</h3>
                            <p>Si aún no eres ususario registrado , abre tu cuenta, es ¡GRATIS! y sólo toma 5 seg. </p>
                        </div>

                    </li>
                    <li>
                        <div className={styles.number}>
                            2
                        </div>
                        <div className={styles.stepInfo}>
                            <h3>JUEGA</h3>
                            <p>Realiza tus jugadas en nuestra increíble oferta de eventos y marcados nacional e internacional. </p>
                        </div>
                    </li>
                    {
                        /* 
                        <li>
                            <div className={styles.number}>
                                3
                            </div>
                            <div className={styles.stepInfo}>
                                <h3>¡GANA!</h3>
                                <p>Recibe BONOS extras por tus ganancias con nuestras increíbles promociones. </p>
                            </div>
                        </li>
                        */
                    }

                </ul>
            </section>
        </section>
    )
}