import styles from "./styles.module.css"

export default function AwarenesssArea() {
    return (
        <section className={styles.container}>
            <article className={styles.headerAwarenessAreaContainer} lang="es">
                <h2>JUEGO RESPONSABLE</h2>
                <p><mark>CARIBEAPUESTA</mark>, es el principal proveedor de servicios de juegos en línea en Venezuela y
                    tenemos la intención de hacer todo lo posible para garantizar que siga
                    así durante mucho tiempo.</p>
            </article>
            <section className={styles.AwarenessAreaContentContainer} lang="es">
                <h3>APOYAMOS EL JUEGO RESPONSABLE</h3>
                <p>
                    <mark>CARIBEAPUESTA</mark> tiene como objetivo brindar entretenimiento a un público adulto a través
                    de juegos y apuestas. Sin embargo, lo hacemos de manera responsable, por lo que recomendamos
                    encarecidamente a nuestros clientes o usuarios seguir estas pautas:
                </p>
                <ul>
                    <li>
                        <p>
                            Establezca un límite consciente y responsable para su inversión: Antes de comenzar, considere la cantidad de dinero que destinará al entretenimiento. Tenga en cuenta la posibilidad de pérdida y asegúrese de que no afecte su vida ni la de las personas que dependen de usted.
                        </p>
                    </li>
                    <li>
                        <p>
                            Mantenga su presupuesto de apuestas: Determine de antemano cuánto está dispuesto a gastar y adhiérase a ese límite.
                        </p>
                    </li>
                    <li>
                        <p>
                            Recuerde que es entretenimiento, no una fuente de ingresos segura: Aunque puede ser emocionante, no cometa el error de considerarlo una forma garantizada de ganar dinero.
                        </p>
                    </li>
                    <li>
                        <p>
                            Planifique su tiempo de juego: Evite excederse y establezca límites de tiempo para cada sesión de juego.
                        </p>
                    </li>
                    <li>
                        <p>
                            Proteja la confidencialidad de sus datos: No comparta su información de acceso con otras personas y no deje su equipo desatendido mientras está conectado a su cuenta.
                        </p>
                    </li>
                    <li>
                        <p>
                            Exclusivo para adultos: Nuestro servicio está diseñado únicamente para personas mayores de edad. No permita que menores de edad participen bajo ninguna circunstancia.
                        </p>
                    </li>
                    <li>
                        <p>
                            Recomendación de control parental: Sugerimos a nuestros clientes utilizar software y herramientas de control parental en sus computadoras para evitar que los menores accedan a contenido inapropiado.
                        </p>
                    </li>
                    <li>
                        <p>
                            Juego responsable: Si es ludópata o jugador compulsivo, o si se encuentra bajo la influencia de drogas o alcohol, le recomendamos no utilizar el entretenimiento ofrecido por <mark>CARIBEAPUESTA</mark> como una vía de escape para problemas personales.
                        </p>
                    </li>
                </ul>
                <p>Esperamos que disfrute de nuestro servicio de manera segura y responsable. ¡Diviértase!</p>
            </section>
        </section>)
}