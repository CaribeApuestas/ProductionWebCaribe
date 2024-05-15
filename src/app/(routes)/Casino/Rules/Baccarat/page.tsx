import Collapsible from "@/app/_components/Collapsible";
import styles from "../styles.module.css";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: "Reglas para BACCARAT de casino en línea | CaribeApuesta",
    description: "Descubre las reglas esenciales del BACCARAT - Tu guía definitiva para jugar con confianza y responsabilidad. ¡Regístrate e ingresa ahora para comenzar!",
    metadataBase: new URL("http://localhost:3000/"),
    keywords: ['Reglas para jugar al Baccarat', 'reglas Baccarat'],
    openGraph: {
        title: "Reglas para jugar al BACCARAT",
        description: "Descubre las reglas esenciales del BACCARAT - Tu guía definitiva para jugar con confianza y responsabilidad. ¡Regístrate e ingresa ahora para comenzar!",
    }
};


export default function Baccarat() {
    return (
        <section>
            <h3 className={styles.rulesTitle}>BACCARAT</h3>
            <Collapsible title={"Bajo: USD. 1.00 - USD. 20.00. "}>
                <p>
                    <span>
                        Cómo jugar
                    </span>
                </p>
                <p>
                    Baccarat es un juego simple con tres tipos de apuestas:Apuesta a la BancaApuesta al JugadorApuesta al EmpateAunque el
                    juego es simple, Baccarat sigue estrictas reglas.Baccarat se juega con un zapato de 6 barajas.
                </p>
                <p>Todas las cartas con caras y los 10s no tienen ningún valor.</p>
                <p>
                    Las cartas menores a 10 se contabilizan por su valor nominal, los ases valen 1.
                </p>
                <p>Los colores o palos no tienen ningún papel en el juego.</p>
                <p>Sólo los valores de un solo dígito son válidos.</p>
                <p>
                    Cualquier número que llegue a doble dígito se elimina el de la izquierda.
                </p>
                <p>Ej:15 se contabiliza como 5 y 25 también se cuenta como 5.</p>
                <p>Cada mano está constituida por un máximo de tres cartas.</p>
                <p>
                    Las reglas del Baccarat no permiten una cuarta carta bajo ninguna circunstancia.
                </p>
                <p>
                    Para empezar, los Jugadores apuestan tanto para la Banca, el Jugador o el Empate.
                </p>
                <p>
                    Tanto el Jugador como la Banca pagan el mismo monto de la apuesta (1:1), pero si la Banca ganase se le deduce una comisión del 5%.
                </p>
                <p>La apuesta al empate paga 8:1.</p>
                <p>El objetivo en el Baccarat es llegar a sumar 9 en una mano.</p>
                <p>
                    Durante el tiempo en que se permite realizar apuestas, los jugadores tienen la opción de borrarlas haciendo clic en el botón {'"Limpiar Fichas"'}.
                </p>
                <p>
                    La opción {'"Re apostar"'} coloca exactamente las mismas apuestas de su juego anterior y la casilla {'"Auto Apuesta"'} permite apostar reiterativamente en sus últimas posiciones hasta que selecciona de nuevo el botón {'"Limpiar Fichas"'}.
                </p>
                <p>
                    Los jugadores también podrán seleccionar la nueva opción {'"Quitar Última"'}.
                </p>
                <p>
                    Esta opción limpiara las apuestas/fichas de la mesa en orden inverso al que fueron colocadas.El dealer en vivo reparte dos cartas al Jugador y dos a la Banca, primero al Jugador y luego a la Banca.
                </p>
                <p>
                    Una tercera carta puede ser repartida a cualquiera o a ambos amparados bajo las siguientes reglas de la tercera carta.
                </p>
                <p>
                    (No es necesario aprenderse éstas reglas para jugar, son decisiones obligatorias y por lo tanto automáticas).Reglas de la tercera carta para el JugadorSi el jugador o la Banca suman un total de 8 o 9 con sus dos primeras cartas no se repartirá una tercera carta a ninguno:La mano que resultara ganadora será llamada Natural y ahí termina la jugada.
                </p>
                <p>
                    Si el total del jugador es menor o igual a 5, la mano del jugador obtendrá una tercera carta.
                </p>
                <p>
                    Si la suma de las cartas del jugador es igual a 6 o más, el jugador no recibe una tercera carta y la Banca se queda con 6 o más, y recibe una tercera carta si la suma de sus dos primeras cartas es 5 o menosSi el Jugador no obtiene una tercera carta, las siguientes reglas determinaran si la Banca recibe o una tercera carta.
                </p>
                <p>
                    Regla de la tercera carta para la BancaSi la suma de las cartas de la Banca es 2 o menos, la Banca recibirá una tercera carta independientemente de la mano del jugadorSi la suma de las cartas de la Banca es 3, la Banca recibirá una tercera carta a menos que la tercera carta del jugador haya sido un 8.
                </p>
                <p>
                    Si la suma de las cartas de la Banca es 4, la Banca recibirá una tercera carta a menos que la tercera carta del jugador haya sido un 0, 1, 8 o 9.
                </p>
                <p>
                    Si la suma de las cartas de la Banca es 5, la Banca recibirá carta si la tercera carta del Jugador fue 4, 5, 6 o 7.
                </p>
                <p>
                    Si la suma de las cartas de la Banca es 6, la Banca recibirá carta si la tercera carta del Jugador fue 6 o 7.
                </p>
                <p>
                    Si la suma de las cartas de la Banca es 7, la Banca se queda.
                </p>
                <p>
                    Luego de que el dealer haya seguido la regla de la tercera carta, la mano que esté más cerca de 9 sin pasarse será anunciada como la ganadora.
                </p>
                <p>
                    Pares en Jugador y Banca {'"Apuestas de Pares"'} es una apuesta adicional en Baccarat, Punto 2000, Super 6 que gana si las dos primeras cartas repartidas al Jugador o a la Banca constituyen un par (por ejemplo, 10, 10 o K, K) y pierde en todos los demás resultados.
                </p>
                <p>
                    El juego se juega de forma normal, pero los jugadores también puede colocar una apuesta en Par de Jugador, Par de Banca o ambos (Cualquiera).
                </p>
                <p>
                    Los jugadores pueden hacer una apuesta, además de, o en lugar de el Jugador o la Banca.
                </p>
                <p>
                    Pagos:Ganador en Par 11:1Cualquiera:5:1Apuesta DragónEl Dragón es una apuesta en Baccarat que paga cuando la mano es un ganador Natural, o cuando la mano gana por un mínimo de 4 puntos.
                </p>
                <p>
                    Ganadores Naturales pagan el mismo monto de apuesta en dragón (1:1), y en el caso de que los naturales sean iguales, la apuesta en Dragón empata.
                </p>
                <p></p>
                <p>
                    Ganadores no naturales que ganan por al menos 4 puntos pagan el mismo monto de la apuesta (1:1), cuanto mayor sea el margen de victoria, mayor será el pago.
                </p>
                <p>
                    Por ejemplo, una mano de no naturales que gana por una diferencia de 9 puntos recibe un pago de 30:1.
                </p>
                <p>
                    Para ver toda la información {'"Pago de dragón"'}, haga clic en la pestaña {'"Dragon Payout"'} en la parte derecha de la interfaz del juego.
                </p>
                <p>
                    Para participar la bonificación de Dragón, el jugador debe apostar en la zona marcada con la etiqueta {'"Jugador Dragón"'} {'"Banca Dragón"'}, o ambos.
                </p>

            </Collapsible>
            <Collapsible title={"Medio: USD. 5.00 - USD. 100.00. "}>
                <p>
                    <span>Como jugarCómo jugar </span>
                </p>
                <p>
                    Baccarat es un juego simple con tres tipos de apuestas:Apuesta a la BancaApuesta al JugadorApuesta al EmpateAunque el juego es simple, Baccarat sigue estrictas reglas.Baccarat se juega con un zapato de 6 barajas.
                </p>
                <p>Todas las cartas con caras y los 10s no tienen ningún valor.</p>
                <p>
                    Las cartas menores a 10 se contabilizan por su valor nominal, los ases valen 1.
                </p>
                <p>Los colores o palos no tienen ningún papel en el juego.</p>
                <p>Sólo los valores de un solo dígito son válidos.</p>
                <p>
                    Cualquier número que llegue a doble dígito se elimina el de la izquierda.
                </p>
                <p>Ej:15 se contabiliza como 5 y 25 también se cuenta como 5.</p>
                <p>Cada mano está constituida por un máximo de tres cartas.</p>
                <p>
                    Las reglas del Baccarat no permiten una cuarta carta bajo ninguna circunstancia.Para empezar, los Jugadores apuestan tanto para la Banca, el Jugador o el Empate.
                </p>
                <p>
                    Tanto el Jugador como la Banca pagan el mismo monto de la apuesta (1:1), pero si la Banca ganase se le deduce una comisión del 5%.
                </p>
                <p>La apuesta al empate paga 8:1.</p>
                <p>
                    El objetivo en el Baccarat es llegar a sumar 9 en una mano.Durante el tiempo en que se permite realizar apuestas, los jugadores tienen la opción de borrarlas haciendo clic en el botón {'"Limpiar Fichas"'}.
                </p>
                <p>
                    La opción {'"Re apostar"'} coloca exactamente las mismas apuestas de su juego anterior y la casilla {'"Auto Apuesta"'} permite apostar reiterativamente en sus últimas posiciones hasta que selecciona de nuevo el botón {'"Limpiar Fichas"'}.
                </p>
                <p>
                    Los jugadores también podrán seleccionar la nueva opción {'"Quitar Última"'}.
                </p>
                <p>
                    Esta opción limpiara las apuestas/fichas de la mesa en orden inverso al que fueron colocadas.El dealer en vivo reparte dos cartas al Jugador y dos a la Banca, primero al Jugador y luego a la Banca.
                </p>
                <p>
                    Una tercera carta puede ser repartida a cualquiera o a ambos amparados bajo las siguientes reglas de la tercera carta.
                </p>
                <p>
                    (No es necesario aprenderse éstas reglas para jugar, son decisiones obligatorias y por lo tanto automáticas).
                    Reglas de la tercera carta para el JugadorSi el jugador o la Banca suman un total de 8 o 9 con sus dos primeras cartas no
                    se repartirá una tercera carta a ninguno:La mano que resultara ganadora será llamada Natural y ahí termina la jugada.Si el
                    total del jugador es menor o igual a 5, la mano del jugador obtendrá una tercera carta.Si la suma de las cartas del jugador
                    es igual a 6 o más, el jugador no recibe una tercera carta y la Banca se queda con 6 o más, y recibe una tercera carta si la
                    suma de sus dos primeras cartas es 5 o menosSi el Jugador no obtiene una tercera carta, las siguientes reglas determinaran si
                    la Banca recibe o una tercera carta.Regla de la tercera carta para la BancaSi la suma de las cartas de la Banca es 2 o menos,
                    la Banca recibirá una tercera carta independientemente de la mano del jugadorSi la suma de las cartas de la Banca es 3, la
                    Banca recibirá una tercera carta a menos que la tercera carta del jugador haya sido un 8.Si la suma de las cartas de la Banca
                    es 4, la Banca recibirá una tercera carta a menos que la tercera carta del jugador haya sido un 0, 1, 8 o 9.Si la suma de las
                    cartas de la Banca es 5, la Banca recibirá carta si la tercera carta del Jugador fue 4, 5, 6 o 7.Si la suma de las cartas de la
                    Banca es 6, la Banca recibirá carta si la tercera carta del Jugador fue 6 o 7.Si la suma de las cartas de la Banca es 7, la Banca
                    se queda.Luego de que el dealer haya seguido la regla de la tercera carta, la mano que esté más cerca de 9 sin pasarse será anunciada
                    como la ganadora.Pares en Jugador y Banca {'"Apuestas de Pares"'} es una apuesta adicional en Baccarat, Punto 2000, Super 6 que gana si
                    las dos primeras cartas repartidas al Jugador o a la Banca constituyen un par (por ejemplo, 10, 10 o K, K) y pierde en todos los
                    demás resultados.El juego se juega de forma normal, pero los jugadores también puede colocar una apuesta en Par de Jugador, Par
                    de Banca o ambos (Cualquiera).Los jugadores pueden hacer una apuesta, además de, o en lugar de el Jugador o la Banca.Pagos:Ganador
                    en Par 11:1Cualquiera:5:1Apuesta DragónEl Dragón es una apuesta en Baccarat que paga cuando la mano es un ganador Natural, o cuando
                    la mano gana por un mínimo de 4 puntos.Ganadores Naturales pagan el mismo monto de apuesta en dragón (1:1), y en el caso de que los
                    naturales sean iguales, la apuesta en Dragón empata.
                </p>
                <p>
                    Ganadores no naturales que ganan por al menos 4 puntos pagan el mismo monto de la apuesta (1:1), cuanto mayor sea el margen de victoria, mayor será el pago.
                </p>
                <p>
                    Por ejemplo, una mano de no naturales que gana por una diferencia de 9 puntos recibe un pago de 30:1. Para ver toda la
                    información {'"Pago de dragón"'}, haga clic en la pestaña {'"Dragon Payout"'} en la parte derecha de la interfaz del juego.Para
                    participar la bonificación de Dragón, el jugador debe apostar en la zona marcada con la etiqueta {'"Jugador Dragón" '}
                    {'"Banca Dragón"'}, o ambos.
                </p>
            </Collapsible>
            <Collapsible title={"Alto: USD. 10.00 - USD. 200.00. "}>
                <p>
                    <span> Como jugarCómo jugar </span>
                </p>
                <p>
                    Baccarat en vivoBaccarat es un juego simple con tres tipos de apuestas:Apuesta a la BancaApuesta al JugadorApuesta al EmpateAunque el juego es simple, Baccarat sigue estrictas reglas.
                </p>
                <p>Baccarat se juega con un zapato de 6 barajas.</p>
                <p>Todas las cartas con caras y los 10s no tienen ningún valor.</p>
                <p>
                    Las cartas menores a 10 se contabilizan por su valor nominal, los ases valen 1.
                </p>
                <p>Los colores o palos no tienen ningún papel en el juego.</p>
                <p>Sólo los valores de un solo dígito son válidos.</p>
                <p>
                    Cualquier número que llegue a doble dígito se elimina el de la izquierda.
                </p>
                <p>Ej:15 se contabiliza como 5 y 25 también se cuenta como 5.</p>
                <p>Cada mano está constituida por un máximo de tres cartas.</p>
                <p>
                    Las reglas del Baccarat no permiten una cuarta carta bajo ninguna circunstancia.Para empezar, los Jugadores apuestan tanto para la Banca, el Jugador o el Empate.
                </p>
                <p>
                    Tanto el Jugador como la Banca pagan el mismo monto de la apuesta (1:1), pero si la Banca ganase se le deduce una comisión del 5%.
                </p>
                <p>La apuesta al empate paga 8:1.</p>
                <p>
                    El objetivo en el Baccarat es llegar a sumar 9 en una mano.Durante el tiempo en que se permite realizar apuestas,
                    los jugadores tienen la opción de borrarlas haciendo clic en el botón {'"Limpiar Fichas"'}.
                </p>
                <p>
                    La opción {'"Re apostar"'} coloca exactamente las mismas apuestas de su juego anterior y la casilla {'"Auto Apuesta"'}
                    permite apostar reiterativamente en sus últimas posiciones hasta que selecciona de nuevo el botón {'"Limpiar Fichas"'}.
                </p>
                <p>
                    Los jugadores también podrán seleccionar la nueva opción {'"Quitar Última"'}.
                </p>
                <p>
                    Esta opción limpiara las apuestas/fichas de la mesa en orden inverso al que fueron colocadas.El dealer en vivo reparte dos cartas al Jugador y dos a la Banca, primero al Jugador y luego a la Banca.
                </p>
                <p>
                    Una tercera carta puede ser repartida a cualquiera o a ambos amparados bajo las siguientes reglas de la tercera carta.
                </p>
                <p>
                    (No es necesario aprenderse éstas reglas para jugar, son decisiones obligatorias y por lo tanto automáticas).Reglas de la tercera carta para el JugadorSi el jugador o la Banca suman un total de 8 o 9 con sus dos primeras cartas no se repartirá una tercera carta a ninguno:La mano que resultara ganadora será llamada Natural y ahí termina la jugada.
                </p>
                <p>
                    Si el total del jugador es menor o igual a 5, la mano del jugador obtendrá una tercera carta.
                </p>
                <p>
                    Si la suma de las cartas del jugador es igual a 6 o más, el jugador no recibe una tercera carta y la Banca se queda con 6 o más, y recibe una tercera carta
                </p>
                <p>si la suma de sus dos primeras cartas es 5 o menos</p>
                <p>
                    Si el Jugador no obtiene una tercera carta, las siguientes reglas determinaran
                </p>
                <p>
                    si la Banca recibe o una tercera carta.Regla de la tercera carta para la Banca
                </p>
                <p>
                    Si la suma de las cartas de la Banca es 2 o menos, la Banca recibirá una tercera carta independientemente de la mano del jugador
                </p>
                <p>
                    Si la suma de las cartas de la Banca es 3, la Banca recibirá una tercera carta a menos que la tercera carta del jugador haya sido un 8.
                </p>
                <p>
                    Si la suma de las cartas de la Banca es 4, la Banca recibirá una tercera carta a menos que la tercera carta del jugador haya sido un 0, 1, 8 o 9.
                </p>
                <p>
                    Si la suma de las cartas de la Banca es 5, la Banca recibirá carta
                </p>
                <p>si la tercera carta del Jugador fue 4, 5, 6 o 7.</p>
                <p>
                    Si la suma de las cartas de la Banca es 6, la Banca recibirá carta
                </p>
                <p>si la tercera carta del Jugador fue 6 o 7.</p>
                <p>
                    Si la suma de las cartas de la Banca es 7, la Banca se queda.Luego de que el dealer haya seguido la regla de la tercera carta,
                    la mano que esté más cerca de 9 sin pasarse será anunciada como la ganadora.Pares en Jugador y Banca {'"Apuestas de Pares"'} es
                    una apuesta adicional en Baccarat, Punto 2000, Super 6 que gana si las dos primeras cartas repartidas al Jugador o a la
                    Banca constituyen un par (por ejemplo, 10, 10 o K, K) y pierde en todos los demás resultados.
                </p>
                <p>
                    El juego se juega de forma normal, pero los jugadores también puede colocar una apuesta en Par de Jugador, Par de Banca o ambos (Cualquiera).
                </p>
                <p>
                    Los jugadores pueden hacer una apuesta, además de, o en lugar de el Jugador o la Banca.
                </p>
                <p>
                    Pagos:Ganador en Par 11:1Cualquiera:5:1Apuesta DragónEl Dragón es una apuesta en Baccarat que paga cuando la mano es un ganador Natural, o cuando la mano gana por un mínimo de 4 puntos.
                </p>
                <p>
                    Ganadores Naturales pagan el mismo monto de apuesta en dragón (1:1), y en el caso de que los naturales sean iguales, la apuesta en Dragón empata.
                </p>
                <p>
                    Ganadores no naturales que ganan por al menos 4 puntos pagan el mismo monto de la apuesta (1:1), cuanto mayor sea el margen de victoria, mayor será el pago.
                </p>
                <p>
                    Por ejemplo, una mano de no naturales que gana por una diferencia de 9 puntos recibe un pago de 30:1.
                </p>
                <p>
                    Para ver toda la información {'"Pago de dragón"'}, haga clic en la pestaña {'"Dragon Payout"'} en la parte derecha de la interfaz del juego.
                </p>
                <p>
                    Para participar la bonificación de Dragón, el jugador debe apostar en la zona marcada con la
                    etiqueta {'"Jugador Dragón"'} {'"Banca Dragón"'}, o ambos.
                </p>
            </Collapsible>
        </section>
    )
}