import { Metadata } from 'next';
import styles from '../styles.module.css';

export const metadata: Metadata = {
    title: "Reglas para TURBO BLACKJACK de casino en línea | CaribeApuesta",
    description: "Descubre las reglas esenciales del TURBO BLACKJACK - Tu guía definitiva para jugar con confianza y responsabilidad. ¡Regístrate e ingresa ahora para comenzar!",
    metadataBase: new URL("http://localhost:3000/"),
    keywords: ['Reglas para jugar al Turbo Blackjack', 'reglas Turbo Blackjack'],
    openGraph: {
        title: "Reglas para jugar al TURBO BLACKJACK",
        description: "Descubre las reglas esenciales del TURBO BLACKJACK - Tu guía definitiva para jugar con confianza y responsabilidad. ¡Regístrate e ingresa ahora para comenzar!",
    }
};

export default function TurboBlackjack() {
    return (
        <section>
            <h3 className={styles.rulesTitle}>TURBO BLACKJACK</h3>
            <p><span>Cómo jugar - Blackjack Tradicional en vivo</span></p>
            <p>El Blackjack es el juego de cartas de casino más popular en el mundo.
                El nombre Blackjack surgió en un casino americano que decidió popularizar el juego mediante el pago de un bono
                a cualquier jugador que tenga el As de espadas y, o bien una Jota de tréboles o Jota de picas.</p>
            <p>
                El objetivo del juego es simple: obtener un recuento total de cartas mayor a la del dealer, sin pasarse de 21.
            </p>
            <div className={styles.tableContainer}>
                <table>
                    <thead>
                        <tr>
                            <th>TURBO BLACKJACK (único)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>USD 5.00 - USD 100</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p>
                <span>Para Jugar Blackjack:</span>
            </p>
            <ul>
                <li>
                    <p>
                        Seleccione una posición haciendo clic en cualquier asiento marcado SEAT OPEN.
                    </p>
                </li>
                <li><p>Seleccione un valor de la ficha.</p></li>
                <li>
                    <p>
                        Mientras que el juego está en modo {'"Colocar apuestas"'}, haga clic en uno de los tres lugares en el área de apuestas, hasta que el número de fichas que aparezcan sea igual a la cantidad que desea apostar.
                    </p>
                    <ul>
                        <li>
                            <p>
                                Al hacer clic en el centro de la zona de apuesta realizará una apuesta principal.
                            </p>
                        </li>
                        <li>
                            <p>
                                Al hacer clic en el icono de pares en la parte superior izquierda del área de apuesta realizará una apuesta de pares.
                            </p>
                        </li>
                        <li>
                            <p>
                                Al hacer clic en el icono de Rummy en la parte superior derecha del área de apuesta realizará una apuesta de Rummy.
                            </p>
                        </li>
                    </ul>
                </li>

                <li>
                    <p>
                        Opcionalmente, puede hacer clic al botón Limpiar Apuestas para retirar todas sus apuestas de la mesa.
                    </p>
                </li>
                <li>
                    <p>
                        Opcionalmente, puede hacer clic al botón X Stand para abandonar su asiento y limpiar sus apuestas de la mesa.
                    </p>
                </li>
                <li>
                    <p>
                        Una vez que el juego entra en modo de {'"No más apuestas"'} (Esto sucede cuando el dealer saca la primera carta), ya no podrá borrar sus apuestas o salirse de la mesa.
                    </p>
                </li>
            </ul>

            <p>
                Usted y el dealer reciben dos cartas. Sus cartas se reparten boca arriba. Únicamente la segunda carta del dealer se reparte boca arriba. Si la banca recibe un As en su carta abierta, usted puede adquirir un seguro.
            </p>
            <p>
                El juego seguirá el orden desde el asiento 1 hasta el 7. Una vez que sea su turno, revise sus cartas y realice una de las siguientes opciones:
            </p>
            <ul>
                <li>
                    <p>
                        Haga clic en “Hit” para obtener otra carta.
                    </p>
                </li>
                <li>
                    <p>
                        Haga clic en “Stand” si usted está satisfecho con su mano y su apuesta.
                    </p>
                </li>
                <li>
                    <p>
                        Haga clic en “Double X2” si se desea doblar su apuesta inicial y tomar una única carta de más.
                    </p>
                </li>
                <li>
                    <p>
                        Haga clic en “Split” si recibe dos cartas del mismo valor y desea separarlas en dos nuevas manos, con una carta en cada una de ellas.
                    </p>
                </li>
            </ul>
            <p>
                Después de tomar sus decisiones de apuestas, el dealer juega su ronda y calcula las ganancias. Para volver a jugar:
            </p>
            <ul>
                <li>
                    <p>
                        Haga clic en “Re apostar”.
                    </p>
                    <ul>
                        <li>
                            <p>
                                Su(s) apuestas de la última ronda se colocan en los mismos lugares que la ronda anterior.
                            </p>
                        </li>
                    </ul>
                </li>
                <li>
                    <p>
                        Opcionalmente también puede activar la casilla de “Auto Apuesta” que le permite continuar re-apostando automáticamente en cada ronda.
                    </p>
                </li>
                <li>
                    <p>
                        Si elige “Limpiar Apuestas” usted podrá iniciar una nueva apuesta, o haciendo clic en “Re apostar” se repetirá su(s) apuestas de la última ronda que jugó.
                    </p>
                </li>
                <li>
                    <p>
                        Cada nueva ronda se iniciará automáticamente.
                    </p>
                </li>
            </ul>
            <p>
                <span>
                    Reglas:
                </span>
            </p>
            <p>
                El Blackjack en vivo utiliza un zapato con 6 mazos de cartas que se barajan manualmente.
            </p>
            <p>
                Cada mesa tiene siete asientos disponibles.
            </p>
            <p>
                Usted debe continuar apostando para mantener su asiento.
            </p>
            <p>
                Cuando sea su turno, tendrá la opción de pedir, plantarse, doblar o dividir. La falta de respuesta dentro del plazo establecido dará lugar a que su mano sea completada de acuerdo con la estrategia óptima para el jugador conocido como “Estrategia Básica”. Haga clic aquí para obtener la tabla de estrategia básica utilizada al finalizar el tiempo de espera cuando se juega al Blackjack Classic.
            </p>
            <p>
                Si el tiempo de un jugador ha expirado o no ha respondido y la estrategia básica pura dicta doblar, la mano se completará mediante la adopción de “Hit” o pedir.
            </p>
            <p>
                Si el tiempo de un jugador ha expirado o no ha respondido y la estrategia básica pura dicta a dividir o “Split”, la mano se completará como una mano normal. Por ejemplo, si un jugador tiene 8H, 8C y transcurrido el tiempo de espera no responde, entonces la mano será tratado como un 16 y será provista de un “Hit” o pedir.
            </p>
            <p>
                El dealer pide carta con un 17 suave.
            </p>
            <p>
                El dealer revisa por Blackjack cuando cuenta con un diez o un as.
            </p>
            <p>
                Usted únicamente puede dividir una vez. Doblar luego de dividir es permitido.
            </p>
            <p>
                Si divide con un par de Ases, recibirá exactamente una carta en cada mano.
            </p>
            <p>
                El seguro paga 2:1.
            </p>
            <p>
                Usted puede apostar a cualquier combinación de la apuesta principal (Blackjack americano estándar) así como las apuestas laterales de Pares y Rummy.
            </p>
            <p>
               <span> Apuesta principal: Blackjack Americano estándar</span>
            </p>
            <p>
                Con el fin de participar en la apuesta principal, usted deberá apostar por separado en el centro de la ubicación de la apuesta.
            </p>
            <p>

                Si su mano es mayor a la de la banca y no se pasa de 21, usted gana. El pago es 1:1
            </p>
            <p>
                La cartas Jota (J), Reina (Q) y Rey (K) tienen un valor de 10, los Ases tienen un valor de 1 o 11, y las cartas restantes valen su valor nominal.
            </p>
            <p>
                Si sus dos primeras cartas son un As y una carta de valor 10 (10, J, Q, K), usted tiene un Blackjack. El Blackjack paga 3:2.
            </p>
            <p>

                Si tu mano excede 21, se pasa y perderá automáticamente la mano. Si usted tiene el mismo total que las cartas del dealer, no hay ganador y su apuesta se devuelve. Esto se conoce como un empate. (Push)
            </p>
            <p>

                El dealer se planta con un 17 duro o más, y debe pedir en 16 o menos. El Dealer deberá pedir con un 17 suave.
            </p>
            <p>
                Si la carta boca arriba de la banca es un As, usted puede comprar un seguro correspondiente a la mitad de su apuesta principal. Si decide tomar un seguro y el dealer obtiene un Blackjack, usted gana 2:1.
            </p>
            <p>
                El resultado de la apuesta principal no tendrá efecto con ninguna otra apuesta (Rummy o Pares). Estas son completamente independientes.
            </p>

            <p>
                <span>
                    Apuesta de Pares:
                </span>
            </p>
            <p>
                Para poder participar en la apuesta de pares, usted debe hacerlo separadamente haciendo clic en el icono que aparece en la parte superior izquierda de la ubicación de apuesta.
            </p>
            <p>
                Si sus dos primeras cartas son par - dos cartas del mismo valor como 3C, 3H o 7S, 7H o KD, KC gana 11:1.
            </p>
            <p>
                Si sus dos primeras cartas no son un par, usted pierde su apuesta de Par.
            </p>
            <p>
                El resultado de la apuesta de Pares no tiene efecto con cualquier otra apuesta (Apuesta principal o Rummy). Ellas son completamente independientes.
            </p>
            <p>
                <span>Apuesta de Rummy:</span>
            </p>
            <p>
                Para participar en la apuesta de Rummy, usted debe apostar por separado haciendo clic en el icono que aparece en la parte superior derecha de la ubicación de apuesta.
            </p>
            <p>
                Si con sus dos primeras cartas mas la carta abierta del dealer arma un Rummy, usted gana 9:1.
            </p>
            <p>
                Manos ganadoras de Rummy son 3 cartas del mismo valor (por ejemplo, 4H, 4S, 4D) o 3 cartas del mismo palo (por ejemplo, AH, 4H, 10H) o 3 cartas seguidas (por ejemplo 3H, 4D, 5S).
            </p>
            <p>
                Si sus dos primeras cartas no son Rummy, pierdes tu apuesta de Rummy.
            </p>
            <p>
                El resultado de la apuesta Rummy no tiene efecto con cualquier otra apuesta (Apuesta principal o Pares). Ellas son completamente independientes.
            </p>


            <p>
                <span>
                    “Back Betting” o Apostar atrás:
                </span>
            </p>
            <p>
                Cuando no hay asientos disponibles en una mesa o si simplemente deseas tener más acción, puedes apostar utilizando las manos de otros jugadores mediante el uso de una característica llamada Back Betting.
            </p>
            <p>
                El Back Betting le permite apostar atrás de la mano de otro jugador y experimentar el mismo resultado que éste obtiene, ganar, perder o empatar. La persona que está sentada es quien toma todas las decisiones. Por favor, tenga en cuenta que si el jugador sentado elige abrir o doblar, usted debe continuar.
            </p>
            <p>
                Para realizar la apuesta atrás, haga clic en la casilla situada en la esquina inferior derecha de la ventana de juego que dice {'"Back Betting"'}. Los asientos disponibles para los Back Betting se muestran con trazos amarillos. Si también ha activado la función Auto Apuestas, las mismas se mantendrán durante el período de tiempo en que se mantenga el jugador principal en la mesa.
            </p>
            <p>
                El jugador ubicado en el asiento principal tomará todas las decisiones. Usted está sometiendo su juego a las decisiones de éste. Le sugerimos mirar las decisiones de un jugador antes de utilizar el Back Betting. Si le gusta su estilo de juego, entonces pueda que desees apostar por detrás de él.

            </p>
            <p>
                Si el jugador a quien le están apostando por detrás pierde conexión o deja vencer el tiempo de espera antes de tomar una decisión, se completará la mano de acuerdo con la Estrategia Básica.

            </p>
            <p>
                <span>
                    Excepciones:
                </span>
            </p>
            <ul>
                <li>
                    <p>
                        En caso de errores humanos o problemas técnicos de algún tipo, todas las manos serán anuladas y las apuestas originales serán devueltas a los jugadores.
                    </p>
                </li>
                <li>
                    <p>
                        En el caso de que usted pierda la conectividad durante una partida en vivo, cualquier apuesta que haya realizado se mantendrá en juego como si estuviera en un casino. Usted podrá ganar, perder o empatar basado en las cartas que tienes en juego en el momento en que perdió la conexión. No tomar una decisión dentro del tiempo permitido por la razón que sea, causara que su mano se complete de acuerdo a la Estrategia Básica. El completar una mano en la cual se ha perdido conectividad o en que no se haya tomado una decisión a tiempo se hace en el mejor interés del jugador y ayudar a aquellos que este apostando por detrás.
                    </p>
                </li>
                <li>
                    <p>
                        Se prohíben los contadores de cartas profesionales. Si se descubre a un contador de cartas profesional, su cuenta está sujeta a cierre inmediato.
                    </p>
                </li>
                <li>
                    <p>
                        Cualquier problema o inactividad por parte de otros jugadores en la mesa, al igual que en cualquier casino, no afectarán sus resultados ni garantizará reembolsos.
                    </p>
                </li>
            </ul>
        </section>
    )
}