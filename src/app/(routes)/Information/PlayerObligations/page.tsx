import { Metadata } from "next";
import styles from "./styles.module.css";
import Collapsible from "@/app/_components/Collapsible";

export const metadata: Metadata = {
    title: "Obligaciones del jugador | CaribeApuesta ",
    description: "Conoce las obligaciones del jugador en caribeapuesta.com",
    metadataBase: new URL("http://localhost:3000/"),
    openGraph: {
        title: "Obligaciones del jugador",
        description: "Conoce las obligaciones del jugador en caribeapuesta.com"
    }
};

export default function PlayerObligations() {
    return (
        <div className={styles.container}>
            <h2> Obligación del Jugador </h2>
            <div className={styles.collapsibleContainer}>
                <Collapsible title={"Prevención de juego por menores de edad."}>
                    <p>
                        Es fundamental que todas las cuentas sean abiertas por personas mayores de 18 años. Falsificar la edad para evitar restricciones es considerado fraude y está penado por la ley.
                    </p>
                    <p>
                        En <mark>CARIBEAPUESTA</mark>, verificamos activamente la edad de los usuarios y tomamos medidas para evitar que menores de edad abran cuentas. Nunca dirigimos publicidad a personas jóvenes.
                    </p>
                    <p>
                        Para proteger tu cuenta, te recomendamos mantener tu número de cuenta y contraseña en secreto, no dejar tu equipo desatendido mientras estás conectado y nunca compartir información bancaria con menores.
                    </p>
                </Collapsible>
                <Collapsible title={"Controles parentales."}>
                    <p>
                        Para garantizar un entorno seguro en línea para los niños, es recomendable instalar software de control parental en el ordenador. Esto ayudará a evitar que accedan a sitios de juegos en línea y otros materiales inapropiados.
                    </p>
                    <p>
                        Recuerda siempre seguir las políticas y regulaciones establecidas para proteger a los más jóvenes mientras navegan por Internet. ¡Cuidemos juntos de su seguridad en línea!
                    </p>
                </Collapsible>
                <Collapsible title={"Juego Responsable."}>
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
                </Collapsible>
                <Collapsible title={"¿ Problemas con el Juego ?"}>
                    <p>
                        Si alguna vez sientes que el juego podría convertirse en un problema para ti, considera reflexionar sobre las siguientes preguntas desarrolladas por Jugadores Anónimos:
                    </p>
                    <ol>
                        <li>
                            <p>
                                ¿Has perdido tiempo de trabajo o estudios debido a los juegos de azar?
                            </p>
                        </li>
                        <li>
                            <p>
                                ¿El juego ha afectado tu felicidad en el hogar?
                            </p>
                        </li>
                        <li>
                            <p>
                                ¿Ha tenido un impacto negativo en tu reputación?
                            </p>
                        </li>
                        <li>
                            <p>
                                ¿Has experimentado remordimientos después de jugar?
                            </p>
                        </li>
                        <li>
                            <p>
                                ¿Has jugado con la esperanza de resolver dificultades financieras o pagar deudas?
                            </p>
                        </li>
                        <li>
                            <p>
                                ¿Notas una disminución en tu ambición o eficiencia debido al juego?
                            </p>
                        </li>
                        <li>
                            <p>
                                ¿Después de perder, sientes una urgencia por recuperar lo perdido lo más pronto posible?
                            </p>
                        </li>
                        <li>
                            <p>
                                ¿Después de ganar, has sentido un fuerte deseo de regresar y ganar más?
                            </p>
                        </li>
                        <li>
                            <p>
                                ¿Sueles jugar hasta gastar el último centavo?
                            </p>
                        </li>
                        <li>
                            <p>
                                ¿Alguna vez has pedido dinero prestado para financiar tus apuestas?
                            </p>
                        </li>
                        <li>
                            <p>
                                ¿Has vendido algo para obtener fondos para el juego?
                            </p>
                        </li>
                        <li>
                            <p>
                                ¿Te has mostrado reacio a usar dinero destinado a gastos normales para jugar?
                            </p>
                        </li>
                        <li>
                            <p>
                                ¿El juego ha afectado tu bienestar o el de tu familia?
                            </p>
                        </li>
                        <li>
                            <p>
                                ¿A menudo juegas más tiempo del que habías planeado?
                            </p>
                        </li>
                        <li>
                            <p>
                                ¿Has utilizado el juego como una vía de escape ante preocupaciones, problemas, aburrimiento o soledad?
                            </p>
                        </li>
                        <li>
                            <p>
                                ¿Has considerado o cometido actos ilegales para financiar tus apuestas?
                            </p>
                        </li>
                        <li>
                            <p>
                                ¿El juego te causa dificultades para dormir?
                            </p>
                        </li>
                        <li>
                            <p>
                                ¿Las discusiones, desilusiones o frustraciones te llevan a querer jugar?
                            </p>
                        </li>
                        <li>
                            <p>
                                ¿Has sentido la tentación de celebrar la buena fortuna con más horas de juego?
                            </p>
                        </li>
                        <li>
                            <p>
                                ¿Has llegado a pensar en la autodestrucción o el suicidio como resultado de tus experiencias con el juego?
                            </p>
                        </li>
                    </ol>
                    <p>Recuerda que es importante ser consciente y buscar ayuda si sientes que el juego está afectando negativamente tu vida. ¡Cuida de ti mismo! </p>
                </Collapsible>
                <Collapsible title={"Auto Exclusión."}>
                    <p>
                        Si en algún momento sientes que necesitas tomar un descanso, te instamos a que nos contactes para desactivar tu cuenta.
                    </p>
                    <p>
                        Además, si crees que estás experimentando problemas con el juego, no dudes en informarnos de inmediato. Estaremos encantados de desactivar permanentemente tu cuenta y proporcionarte la ayuda cualificada que necesitas para enfrentar y superar cualquier dificultad. Te recomendamos leer la sección titulada “¿PROBLEMAS CON EL JUEGO?” para obtener más información.
                    </p>
                    <p>
                        Recuerda que estamos aquí para apoyarte. ¡Cuida de ti mismo!
                    </p>
                </Collapsible>
                <Collapsible title={"Recursos ante problemas con el juego."}>
                    <p>
                        Existen varias opciones de ayuda y prevención para personas que enfrentan dificultades relacionadas con el juego. Si siente que está experimentando un problema, le sugerimos que consulte los siguientes recursos:
                    </p>
                    <ul>
                        <li><p>www.gamblersanonymous.org</p></li>
                        <li><p>www.ncpgambling.org</p></li>
                        <li><p>www.gamblingtherapy.org</p></li>
                    </ul>
                </Collapsible>
            </div>
        </div>
    )
}