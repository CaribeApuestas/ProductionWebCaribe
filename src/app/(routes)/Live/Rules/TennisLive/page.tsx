import Collapsible from "@/app/_components/Collapsible";
import styles from '../styles.module.css';
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Reglas para apuestas TENNIS EN VIVO | CaribeApuesta",
    description: "Descubre las reglas esenciales de las apuestas en vivo para el TENNIS - Tu guía definitiva para apostar con confianza y responsabilidad. Aprende los términos clave y disfruta de una experiencia de apuestas segura y emocionante. ¡Regístrate e ingresa ahora para comenzar!",
    metadataBase: new URL("http://localhost:3000/"),
    keywords: ['Reglas de apuestas en vivo para el TENNIS', 'Reglas de apuestas en vivo para el TENNIS', 'Reglas de apuestas en vivo para el TENNIS en caribeapuesta'],
    openGraph: {
        title: "Reglas para apuestas TENNIS EN VIVO",
        description: "Descubre las reglas esenciales de las apuestas en vivo para el TENNIS - Tu guía definitiva para apostar con confianza y responsabilidad. Aprende los términos clave y disfruta de una experiencia de apuestas segura y emocionante. ¡Regístrate e ingresa ahora para comenzar!",
    }
};

export default function TennisLive() {
    return (
        <section>
            <h3 className={styles.rulesTitle}>TENNIS EN VIVO</h3>
            <Collapsible title={"REGLAS GENERALES. "}>
                <p><span>REGLAS GENERALES</span></p>
                <p>Reglas de Tenis para Apuestas en Vivo</p>
                <p>
                    Si un partido se inicia pero no termina en una competición eliminatoria, todas las apuestas para el partido y los sets serán anuladas.
                </p>
                <p>
                    Aquellas apuestas que se hagan después de la fase semifinal de una competición serán clasificadas como apuestas del partido, y en el caso de que un partido no se lleve a cabo o que empiece y no termine las apuestas se anularán.
                </p>
                <p>
                    En caso de un cambio en el número total de Sets jugados, las apuestas para el partido se mantienen, pero las apuestas para el Set se anularán. Ejemplo: un partido que originalmente fue designado como “el mejor de 5 sets” se reduce al “mejor de 3 sets” debido a las inclemencias del tiempo.
                </p>
                <p>
                    En el caso de que cualquiera de las siguientes circunstancias suceda, todas las apuestas se mantendrán:
                </p>
                <p>i. Un cambio en la superficie de juego.</p>
                <p>ii. Un cambio de sede.</p>
                <p>
                    iii. Un cambio de cancha bajo techo a una exterior o viceversa.
                </p>
                <p>
                    Cuando un partido se pospone o se reprograma las apuestas se mantienen siempre y cuando el partido se complete antes de la finalización de la competición.
                </p>
                <p>
                    En el caso de un retiro o no presentación de un jugador, todas las apuestas indecisas serán anuladas.
                </p>
                <p>
                    En el caso de cualquier retraso (lluvia, oscuridad…) todos los mercados se mantendrán y estos continuaran tan pronto como se reanude el partido.
                </p>
                <p>
                    Los mercados de las líneas de dinero se refieren al ganador de un partido o de un Set en específico.
                </p>
                <p>
                    Los mercados hándicap están basados ya sea en sets o juegos (por favor refiérase al título del mercado)
                </p>
                <p>
                    Los mercados Arriba/Abajo y Par/Impar están basados en juegos (a menos que se especifique de otra forma)
                </p>
                <p><span>Reglas de Pago y Cancelación</span></p>
                <p>
                    Si un mercado se mantiene abierto con un marcador incorrecto el cual tiene un impacto significativo en las probabilidades, nos reservamos el derecho de anular las apuestas.
                </p>
                <p>
                    Si los jugadores/equipos se muestran incorrectamente, nos reservamos el derecho de anular las apuestas.
                </p>
                <p>
                    Si un jugador se retira, todas la apuestas indecisas serán consideradas como nulas.
                </p>
            </Collapsible>
            <Collapsible title={"HANDICAPS ESPECIALES. "}>
                <p><span>HANDICAPS ESPECIALES</span></p>
                <p><span>HÁNDICAP DEL JUEGO PARA TODO EL ENCUENTRO</span></p>
                <p>Handicap del Juego para el partido completo.</p>
                <p>Este es un Mercado para el hándicap del juego completo.</p>
                <p>
                    El jugador con el hándicap positivo (+) recibe {"'X Juegos'"} de ventaja con relación al jugador con el hándicap negativo (-).
                </p>
                <p>
                    En el caso que el partido no se complete (un jugador se retire, sea descalificado, etc.), todos los hándicaps del juego serían anulados.
                </p>
                <p><span>HÁNDICAP DEL JUEGO PARA EL SET X</span></p>
                <p>Juego - Handicap por el set X</p>
                <p>Este es un Mercado para el set específico.</p>
                <p>
                    El jugador con el hándicap positivo (+) recibe X cantidad de Juegos a favor, en relación al jugador con el hándicap negativo(-)
                </p>
                <p>
                    Si el set no es completado (El jugador se retira, es descalificado, etc.) todas las apuestas en ese set específico serán anuladas.
                </p>
            </Collapsible>
            <Collapsible title={"TOTALES. "}>
                <p><span>TOTALES</span></p>
                <p><span>NUMERO TOTAL DE JUEGOS EN EL SET 5</span></p>
                <p>Número total de juegos en el set 5</p>
                <p>Sus opciones de apuesta son Arriba; Abajo.</p>
                <p>
                    Pronostique si el número total de juegos por ambos jugadores en el set especificado se irá Arriba o Abajo del número especificado.
                </p>
                <p>
                    En el evento de un retiro, descalificación o cambio en la superficie de juego en la mitad de un partido las apuestas se anularán, a menos que no exista una manera concebible de que el set o el partido pueda llegar a su conclusión natural sin determinar incondicionalmente el resultado de ese mercado.
                </p>
                <p><span>NUMERO TOTAL DE JUEGOS EN EL SET 4</span></p>
                <p>Número total de juegos en el set 4</p>
                <p>Sus opciones de apuesta son Arriba; Abajo.</p>
                <p>
                    Pronostique si el número total de juegos por ambos jugadores en el set especificado se irá Arriba o Abajo del número especificado.
                </p>
                <p>
                    En el evento de un retiro, descalificación o cambio en la superficie de juego en la mitad de un partido las apuestas se anularán, a menos que no exista una manera concebible de que el set o el partido pueda llegar a su conclusión natural sin determinar incondicionalmente el resultado de ese mercado.
                </p>
                <p><span>NUMERO TOTAL DE JUEGOS EN EL SET 3</span></p>
                <p>Número total de juegos en el set 3</p>
                <p>Sus opciones de apuesta son Arriba; Abajo.</p>
                <p>
                    Pronostique si el número total de juegos por ambos jugadores en el set especificado se irá Arriba o Abajo del número especificado.
                </p>
                <p>
                    En el evento de un retiro, descalificación o cambio en la superficie de juego en la mitad de un partido las apuestas se anularán, a menos que no exista una manera concebible de que el set o el partido pueda llegar a su conclusión natural sin determinar incondicionalmente el resultado de ese mercado.
                </p>
                <p><span>NUMERO TOTAL DE JUEGOS EN EL SET 2</span></p>
                <p>Número total de juegos en el set 2</p>
                <p>Sus opciones de apuesta son Arriba; Abajo.</p>
                <p>
                    Pronostique si el número total de juegos por ambos jugadores en el set especificado se irá Arriba o Abajo del número especificado.
                </p>
                <p>
                    En el evento de un retiro, descalificación o cambio en la superficie de juego en la mitad de un partido las apuestas se anularán, a menos que no exista una manera concebible de que el set o el partido pueda llegar a su conclusión natural sin determinar incondicionalmente el resultado de ese mercado.
                </p>
                <p><span>NUMERO TOTAL DE JUEGOS EN EL SET 1</span></p>
                <p>Número total de juegos en el set 1</p>
                <p>Sus opciones de apuesta son Arriba; Abajo.</p>
                <p>
                    Pronostique si el número total de juegos por ambos jugadores en el set especificado se irá Arriba o Abajo del número especificado.
                </p>
                <p>
                    En el evento de un retiro, descalificación o cambio en la superficie de juego en la mitad de un partido las apuestas se anularán, a menos que no exista una manera concebible de que el set o el partido pueda llegar a su conclusión natural sin determinar incondicionalmente el resultado de ese mercado.
                </p>
                <p><span>NUMERO TOTAL DE JUEGOS EN EL PARTIDO</span></p>
                <p>Número total de juegos en el Partido</p>
                <p>Sus opciones de apuesta son Arriba; Abajo.</p>
                <p>
                    Pronostique si el número total de juegos por ambos jugadores en el partido se irá Arriba o Abajo del número especificado.
                </p>
                <p>
                    En el evento de un retiro, descalificación o cambio en la superficie de juego en la mitad de un partido las apuestas en este mercado se anularán, a menos que no exista una manera concebible de que el set o el partido pueda llegar a su conclusión natural sin determinar incondicionalmente el resultado de ese mercado.
                </p>
                <p>Tie-Break en el Juego</p>
                <p>
                    En el caso que un evento halla empezado y no sea completado, todas las apuestas en este mercado serán canceladas a no ser que el Tie-Break halla ocurrido, o en caso que la opción del Tie-Break sea imposible.
                </p>
                <p>
                    Ejemplo: Durante el set final de un partido de Grand Slam . NO TB en el set Final
                </p>
            </Collapsible>
            <Collapsible title={"LINEAS DE GANE. "}>
                <p><span>LINEAS DE GANE</span></p>
                <p><span>CUAL JUGADOR VA A GANAR LOS JUEGOS (X) Y (Z) DEL SET (N)</span></p>
                <p><span>Cual jugador ganará los Juegos {'"x"'} y {'"Y"'} del Set {'"N"'}</span></p>
                <p>Sus opciones de apuesta son: Jugador 1; Jugador 2; Empate.</p>
                <p>
                    Pronostique cual jugador ganará los siguientes 2 Juegos. Ejemplo: cual jugador ganará el juego 3 y 4 del set 2?
                </p>
                <p>
                    Se ofrecerá únicamente antes de que inicie el primer Juego de los 2 Juegos.
                </p>
                <p>
                    Línea de tres vías en el ganador de los juegos especificados del set actual.
                </p>
                <p>
                    Todas las apuestas serán consideradas nulas si los juegos especificados no se completan.
                </p>
                <p><span>CUAL JUGADOR VA A GANAR EL SET XX</span></p>
                <p>Cual jugador ganará el Set XX</p>
                <p>Sus opciones de apuesta son: Jugador 1; Jugador 2.</p>
                <p>
                    Ganador del 1er Set (ganador del 2do, 3er set, etc.) se refiere al resultado del set especificado.
                </p>
                <p>
                    Todas las apuestas serán consideradas nulas si los sets especificados no se completan.
                </p>
                <p><span>CUAL JUGADOR VA A GANAR EL JUEGO?</span></p>
                <p>Sus opciones de apuesta son Jugador 1; Jugador 2</p>
                <p>Predecir qué jugador ganará el partido.</p>
                <p>
                    Si un jugador se retira será descalificado, todas las apuestas en este mercado serán anuladas.
                </p>
                <p>
                    En el caso de que un partido no se complete, todas las apuestas serán canceladas.
                </p>
                <p>Apuestas- en Vivo</p>
                <p>
                    En el caso de un partido comienza pero no se finaliza, todas las apuestas serán canceladas, a menos que después del comienzo del partido un jugador es descalificado en cuyo caso el jugador / equipo, pasará a la siguiente ronda o la adjudicación de la victoria será considerado ganador para efectos de liquidación.
                </p>
            </Collapsible>
            <Collapsible title={"OPCIONES ADICIONALES. "}>
                <p><span>OPCIONES ADICIONALES</span></p>
                <p>
                    <span> CUANTOS SET COMPLETOS VAN A SER JUGADOS EN EL PARTIDO (MEJOR DE)</span>
                </p>
                <p>Número Final de Sets Jugados (el mejor de 3)</p>
                <p>Sus opciones de apuesta son: Arriba; Abajo</p>
                <p>Pronostique el número total de sets jugados en un partido.</p>
                <p>Solo aplica para partidos con el mejor de 3 Sets.</p>
                <p>
                    El partido debe completarse en su totalidad para que las apuestas sean válidas.
                </p>
                <p>
                    <span> CUANTOS SET COMPLETOS VAN A SER JUGADOS EN EL PARTIDO (MEJOR DE)</span>
                </p>
                <p>Resultado Final (en sets - el mejor de 5)</p>
                <p>Sus opciones de apuesta son: 3:0; 3:1; 3:2; 2:3; 1:3; y 0:3</p>
                <p>Cuál será el marcador final del set?</p>
                <p>
                    El marcador mostrado aparece primero para el jugador en la parte inferior.
                </p>
                <p>Solo aplica para partidos con el mejor de 5 Sets.</p>
                <p>
                    El partido debe completarse en su totalidad para que las apuestas sean válidas.
                </p>
                <p><span>PAR/IMPAR NÚMERO DE JUEGOS EN EL X SET</span></p>
                <p>Número Par/Impar de Juegos en el Set XX</p>
                <p>Sus opciones de apuesta son: Par; Impar.</p>
                <p>
                    Pronostique si el total de juegos en un set específico será un número “Par” o “Impar”.
                </p>
                <p>
                    Si un jugador se retira o es descalificado, todas las apuestas en este mercado serán anuladas.
                </p>
                <p>El set debe completarse para que las apuestas sean válidas.</p>
                <p><span>IMPAR/PAR NÚMERO DE JUEGOS EN EL PARTIDO</span></p>
                <p>Número Par/Impar de Juegos en el Partido</p>
                <p>Sus opciones de apuesta son: Par; Impar.</p>
                <p>
                    Pronostique si el total de juegos en un partido será un número “Par” o “Impar”.
                </p>
                <p>
                    Si un jugador se retira o es descalificado, todas las apuestas en este mercado serán anuladas.
                </p>
                <p>
                    El partido debe completarse en su totalidad para que las apuestas sean válidas.
                </p>
                <p><span>NÚMERO FINAL DE SETS JUGADOS (MEJOR DE)</span></p>
                <p>Número Final de Sets Jugados (el mejor de 5)</p>
                <p>Sus opciones de apuesta son: Arriba; Abajo</p>
                <p>Pronostique el número total de sets jugados en un partido.</p>
                <p>Solo aplica para partidos con el mejor de 5 Sets.</p>
                <p>
                    El partido debe completarse en su totalidad para que las apuestas sean válidas.
                </p>
                <p><span>NÚMERO FINAL DE SETS JUGADOS (MEJOR DE)</span></p>
                <p>Número Final de Sets Jugados (el mejor de 3)</p>
                <p>Sus opciones de apuesta son: Arriba; Abajo</p>
                <p>Pronostique el número total de sets jugados en un partido.</p>
                <p>Solo aplica para partidos con el mejor de 3 Sets.</p>
                <p>
                    El partido debe completarse en su totalidad para que las apuestas sean válidas.
                </p>
                <p><span>RESULTADO FINAL (EN SETS - MEJOR DE)</span></p>
                <p>Resultado Final (en sets - el mejor de 5)</p>
                <p>Sus opciones de apuesta son: 3:0; 3:1; 3:2; 2:3; 1:3; y 0:3</p>
                <p>Cuál será el marcador final del set?</p>
                <p>
                    El marcador mostrado aparece primero para el jugador en la parte inferior.
                </p>
                <p>Solo aplica para partidos con el mejor de 5 Sets.</p>
                <p>
                    El partido debe completarse en su totalidad para que las apuestas sean válidas.
                </p>
                <p><span>RESULTADO FINAL (EN SETS - MEJOR DE)</span></p>
                <p>Resultado Final (en sets - el mejor de 3)</p>
                <p>Sus opciones de apuesta son: 2:0; 2:1; 1:2; y 0:2</p>
                <p>Cuál será el marcador final del set?</p>
                <p>
                    El marcador mostrado aparece primero para el jugador en la parte inferior.
                </p>
                <p>Solo aplica para partidos con el mejor de 3 Sets.</p>

            </Collapsible>
            <Collapsible title={"APUESTAS PRINCIPALES. "}>
                <p><span>APUESTAS PRINCIPALES</span></p>
                <p>Resultado Final (Cual Jugador Va A Ganar El Encuentro)</p>
                <p>Juego - Línea de Dinero (Cual jugador ganará el partido)</p>
                <p>Sus opciones de apuesta son: Jugador 1; Jugador 2</p>
                <p>Pronostique cual jugador ganará el partido.</p>
                <p>
                    Si un jugador se retira o es descalificado, todas las apuestas en este mercado serán anuladas.
                </p>
                <p>
                    En el evento de que un partido no se complete, todas las apuestas serán anuladas.
                </p>
            </Collapsible>
            <Collapsible title={"OPCIONES PARA MARCADORES. "}>
                <p><span>OPCIONES PARA MARCADORES</span></p>
                <p><span>MARCADOR DEL JUEGO X DEL SET 5 O QUIEBRE</span></p>
                <p>Marcador del Juego X del Set 5 o Quiebre</p>
                <p>
                    Pronostique el marcador en contra del jugador que tiene el servicio en juego y set especificados, o si habrá un quiebre de servicio.
                </p>
                <p>Solo se ofrecerá antes del inicio del juego.</p>
                <p>Sus opciones de apuesta son:</p>
                <p>Habrá un quiebre de servicio.</p>
                <p>Servicio: 0</p>
                <p>Servicio: 15</p>
                <p>Servicio: 30</p>
                <p>Servicio: 40</p>
                <p>
                    El mercado del ganador de un juego se refiere al ganador de un juego en específico. Ejemplo: Set 1 Juego 1; Set 1 juego 2 etc.
                </p>
                <p>
                    Si un set decide en muerte súbita el mercado se designará como Set 1TB; Set 2TB etc.
                </p>
                <p>
                    Si existiera un retiro/descalificación durante un juego incompleto, todas las apuestas serán consideradas como nulas.
                </p>
                <p>
                    Si un juego se completa porque un árbitro adjudica “un juego por castigo”, todas las apuestas se considerarán nulas (sin embargo, si el juego se completa por “un punto de castigo”, todas las apuestas siguen siendo válidas).
                </p>
                <p>
                    Si un juego se suspende todas las apuestas siguen siendo consideradas como válidas siempre y cuando el juego se complete.
                </p>
                <p><span>MARCADOR DEL JUEGO X DEL SET 4 O QUIEBRE</span></p>
                <p>Marcador del Juego X del Set 4 o Quiebre</p>
                <p>
                    Pronostique el marcador en contra del jugador que tiene el servicio en juego y set especificados, o si habrá un quiebre de servicio.
                </p>
                <p>Solo se ofrecerá antes del inicio del juego.</p>
                <p>Sus opciones de apuesta son:</p>
                <p>Habrá un quiebre de servicio.</p>
                <p>Servicio: 0</p>
                <p>Servicio: 15</p>
                <p>Servicio: 30</p>
                <p>Servicio: 40</p>
                <p>
                    El mercado del ganador de un juego se refiere al ganador de un juego en específico. Ejemplo: Set 1 Juego 1; Set 1 juego 2 etc.
                </p>
                <p>
                    Si un set decide en muerte súbita el mercado se designará como Set 1TB; Set 2TB etc.
                </p>
                <p>
                    Si existiera un retiro/descalificación durante un juego incompleto, todas las apuestas serán consideradas como nulas.
                </p>
                <p>
                    Si un juego se completa porque un árbitro adjudica “un juego por castigo”, todas las apuestas se considerarán nulas (sin embargo, si el juego se completa por “un punto de castigo”, todas las apuestas siguen siendo válidas).
                </p>
                <p>
                    Si un juego se suspende todas las apuestas siguen siendo consideradas como válidas siempre y cuando el juego se complete.
                </p>
                <p><span>MARCADOR DEL JUEGO X DEL SET 3 O QUIEBRE</span></p>
                <p>Marcador del Juego X del Set 3 o Quiebre</p>
                <p>
                    Pronostique el marcador en contra del jugador que tiene el servicio en juego y set especificados, o si habrá un quiebre de servicio.
                </p>
                <p>Solo se ofrecerá antes del inicio del juego.</p>
                <p>Sus opciones de apuesta son:</p>
                <p>Habrá un quiebre de servicio.</p>
                <p>Servicio: 0</p>
                <p>Servicio: 15</p>
                <p>Servicio: 30</p>
                <p>Servicio: 40</p>
                <p>
                    El mercado del ganador de un juego se refiere al ganador de un juego en específico. Ejemplo: Set 1 Juego 1; Set 1 juego 2 etc.
                </p>
                <p>
                    Si un set decide en muerte súbita el mercado se designará como Set 1TB; Set 2TB etc.
                </p>
                <p>
                    Si existiera un retiro/descalificación durante un juego incompleto, todas las apuestas serán consideradas como nulas.
                </p>
                <p>
                    Si un juego se completa porque un árbitro adjudica “un juego por castigo”, todas las apuestas se considerarán nulas (sin embargo, si el juego se completa por “un punto de castigo”, todas las apuestas siguen siendo válidas).
                </p>
                <p>
                    Si un juego se suspende todas las apuestas siguen siendo consideradas como válidas siempre y cuando el juego se complete.
                </p>
                <p><span>MARCADOR DEL JUEGO X DEL SET 2 O QUIEBRE</span></p>
                <p>Marcador del Juego X del Set 2 o Quiebre</p>
                <p>
                    Pronostique el marcador en contra del jugador que tiene el servicio en juego y set especificados, o si habrá un quiebre de servicio.
                </p>
                <p>Solo se ofrecerá antes del inicio del juego.</p>
                <p>Sus opciones de apuesta son:</p>
                <p>Habrá un quiebre de servicio.</p>
                <p>Servicio: 0</p>
                <p>Servicio: 15</p>
                <p>Servicio: 30</p>
                <p>Servicio: 40</p>
                <p>
                    El mercado del ganador de un juego se refiere al ganador de un juego en específico. Ejemplo: Set 1 Juego 1; Set 1 juego 2 etc.
                </p>
                <p>
                    Si un set decide en muerte súbita el mercado se designará como Set 1TB; Set 2TB etc.
                </p>
                <p>
                    Si existiera un retiro/descalificación durante un juego incompleto, todas las apuestas serán consideradas como nulas.
                </p>
                <p>
                    Si un juego se completa porque un árbitro adjudica “un juego por castigo”, todas las apuestas se considerarán nulas (sin embargo, si el juego se completa por “un punto de castigo”, todas las apuestas siguen siendo válidas).
                </p>
                <p>
                    Si un juego se suspende todas las apuestas siguen siendo consideradas como válidas siempre y cuando el juego se complete.
                </p>
                <p><span>MARCADOR DEL JUEGO X DEL SET 1 O QUIEBRE</span></p>
                <p>Marcador del Juego X del Set 1 o Quiebre</p>
                <p>
                    Pronostique el marcador en contra del jugador que tiene el servicio en juego y set especificados, o si habrá un quiebre de servicio.
                </p>
                <p>Solo se ofrecerá antes del inicio del juego.</p>
                <p>Sus opciones de apuesta son:</p>
                <p>Habrá un quiebre de servicio.</p>
                <p>Servicio: 0</p>
                <p>Servicio: 15</p>
                <p>Servicio: 30</p>
                <p>Servicio: 40</p>
                <p>
                    El mercado del ganador de un juego se refiere al ganador de un juego en específico. Ejemplo: Set 1 Juego 1; Set 1 juego 2 etc.
                </p>
                <p>
                    Si un set decide en muerte súbita el mercado se designará como Set 1TB; Set 2TB etc.
                </p>
                <p>
                    Si existiera un retiro/descalificación durante un juego incompleto, todas las apuestas serán consideradas como nulas.
                </p>
                <p>
                    Si un juego se completa porque un árbitro adjudica “un juego por castigo”, todas las apuestas se considerarán nulas (sin embargo, si el juego se completa por “un punto de castigo”, todas las apuestas siguen siendo válidas).
                </p>
                <p>
                    Si un juego se suspende todas las apuestas siguen siendo consideradas como válidas siempre y cuando el juego se complete.
                </p>
                <p><span>MARCADOR DEL JUEGO X DEL SET 4</span></p>
                <p>Marcador del Juego X del Set 4</p>
                <p>
                    Pronostique el jugador ganador y el marcador exacto en el Juego y Set especificados.
                </p>
                <p>
                    Si un jugador se retira durante el juego, todas las apuestas en este mercado se anularán
                </p>
                <p>Sus opciones de apuesta son:</p>
                <p>Jugador 1 : 0</p>
                <p>Jugador 1 : 15</p>
                <p>Jugador 1 : 30</p>
                <p>Jugador 1 : 40</p>
                <p>Jugador 2 : 0</p>
                <p>Jugador 2 : 15</p>
                <p>Jugador 2 : 30</p>
                <p>Jugador 2 : 40</p>
                <p>
                    El mercado del ganador de un juego se refiere al ganador de un juego en específico. Ejemplo: Set 1 Juego 1; Set 1 juego 2 etc.
                </p>
                <p>
                    Si un set decide en muerte súbita el mercado se designará como Set 1TB; Set 2TB etc.
                </p>
                <p>
                    Si existiera un retiro/descalificación durante un juego incompleto, todas las apuestas serán consideradas como nulas.
                </p>
                <p>
                    Si un juego se completa porque un árbitro adjudica “un juego por castigo”, todas las apuestas se considerarán nulas (sin embargo, si el juego se completa por “un punto de castigo”, todas las apuestas siguen siendo válidas).
                </p>
                <p>
                    Si un juego se suspende todas las apuestas siguen siendo consideradas como válidas siempre y cuando el juego se complete.
                </p>
                <p>Solo se ofrecerá al inicio del juego.</p>
                <p><span>MARCADOR DEL JUEGO X DEL SET 3</span></p>
                <p>Marcador del Juego X del Set 3</p>
                <p>
                    Pronostique el jugador ganador y el marcador exacto en el Juego y Set especificados.
                </p>
                <p>
                    Si un jugador se retira durante el juego, todas las apuestas en este mercado se anularán
                </p>
                <p>Sus opciones de apuesta son:</p>
                <p>Jugador 1 : 0</p>
                <p>Jugador 1 : 15</p>
                <p>Jugador 1 : 30</p>
                <p>Jugador 1 : 40</p>
                <p>Jugador 2 : 0</p>
                <p>Jugador 2 : 15</p>
                <p>Jugador 2 : 30</p>
                <p>Jugador 2 : 40</p>
                <p>
                    El mercado del ganador de un juego se refiere al ganador de un juego en específico. Ejemplo: Set 1 Juego 1; Set 1 juego 2 etc.
                </p>
                <p>
                    Si un set decide en muerte súbita el mercado se designará como Set 1TB; Set 2TB etc.
                </p>
                <p>
                    Si existiera un retiro/descalificación durante un juego incompleto, todas las apuestas serán consideradas como nulas.
                </p>
                <p>
                    Si un juego se completa porque un árbitro adjudica “un juego por castigo”, todas las apuestas se considerarán nulas (sin embargo, si el juego se completa por “un punto de castigo”, todas las apuestas siguen siendo válidas).
                </p>
                <p>
                    Si un juego se suspende todas las apuestas siguen siendo consideradas como válidas siempre y cuando el juego se complete.
                </p>
                <p>Solo se ofrecerá al inicio del juego.</p>
                <p><span>MARCADOR DEL JUEGO X DEL SET 2</span></p>
                <p>Marcador del Juego X del Set 2</p>
                <p>
                    Pronostique el jugador ganador y el marcador exacto en el Juego y Set especificados.
                </p>
                <p>
                    Si un jugador se retira durante el juego, todas las apuestas en este mercado se anularán
                </p>
                <p>Sus opciones de apuesta son:</p>
                <p>Jugador 1 : 0</p>
                <p>Jugador 1 : 15</p>
                <p>Jugador 1 : 30</p>
                <p>Jugador 1 : 40</p>
                <p>Jugador 2 : 0</p>
                <p>Jugador 2 : 15</p>
                <p>Jugador 2 : 30</p>
                <p>Jugador 2 : 40</p>
                <p>
                    El mercado del ganador de un juego se refiere al ganador de un juego en específico. Ejemplo: Set 1 Juego 1; Set 1 juego 2 etc.
                </p>
                <p>
                    Si un set decide en muerte súbita el mercado se designará como Set 1TB; Set 2TB etc.
                </p>
                <p>
                    Si existiera un retiro/descalificación durante un juego incompleto, todas las apuestas serán consideradas como nulas.
                </p>
                <p>
                    Si un juego se completa porque un árbitro adjudica “un juego por castigo”, todas las apuestas se considerarán nulas (sin embargo, si el juego se completa por “un punto de castigo”, todas las apuestas siguen siendo válidas).
                </p>
                <p>
                    Si un juego se suspende todas las apuestas siguen siendo consideradas como válidas siempre y cuando el juego se complete.
                </p>
                <p>Solo se ofrecerá al inicio del juego.</p>
                <p><span>MARCADOR DEL JUEGO X DEL SET 1</span></p>
                <p>Marcador del Juego X del Set 1</p>
                <p>
                    Pronostique el jugador ganador y el marcador exacto en el Juego y Set especificados.
                </p>
                <p>
                    Si un jugador se retira durante el juego, todas las apuestas en este mercado se anularán
                </p>
                <p>Sus opciones de apuesta son:</p>
                <p>Jugador 1 : 0</p>
                <p>Jugador 1 : 15</p>
                <p>Jugador 1 : 30</p>
                <p>Jugador 1 : 40</p>
                <p>Jugador 2 : 0</p>
                <p>Jugador 2 : 15</p>
                <p>Jugador 2 : 30</p>
                <p>Jugador 2 : 40</p>
                <p>
                    El mercado del ganador de un juego se refiere al ganador de un juego en específico. Ejemplo: Set 1 Juego 1; Set 1 juego 2 etc.
                </p>
                <p>
                    Si un set decide en muerte súbita el mercado se designará como Set 1TB; Set 2TB etc.
                </p>
                <p>
                    Si existiera un retiro/descalificación durante un juego incompleto, todas las apuestas serán consideradas como nulas.
                </p>
                <p>
                    Si un juego se completa porque un árbitro adjudica “un juego por castigo”, todas las apuestas se considerarán nulas (sin embargo, si el juego se completa por “un punto de castigo”, todas las apuestas siguen siendo válidas).
                </p>
                <p>
                    Si un juego se suspende todas las apuestas siguen siendo consideradas como válidas siempre y cuando el juego se complete.
                </p>
                <p>Solo se ofrecerá al inicio del juego.</p>
                <p><span>QUIEN GANA EL JUEGO X DEL SET</span></p>
                <p>Quién Gana el Juego X del Set 5</p>
                <p>Sus opciones de apuesta son Jugador 1; Jugador 2</p>
                <p>
                    Pronostique el jugador que ganará el Juego especificado del Set especificado.
                </p>
                <p>Línea de dinero de 2 vías</p>
                <p>El set se debe completar para que sea válido.</p>
                <p><span>QUIEN GANA EL JUEGO X DEL SET</span></p>
                <p>Quién Gana el Juego X del Set 4</p>
                <p>Sus opciones de apuesta son Jugador 1; Jugador 2</p>
                <p>
                    Pronostique el jugador que ganará el Juego especificado del Set especificado.
                </p>
                <p>Línea de dinero de 2 vías</p>
                <p>El set se debe completar para que sea válido.</p>
                <p><span>QUIEN GANA EL JUEGO X DEL SET</span></p>
                <p>Quién Gana el Juego X del Set 3</p>
                <p>Sus opciones de apuesta son Jugador 1; Jugador 2</p>
                <p>
                    Pronostique el jugador que ganará el Juego especificado del Set especificado.
                </p>
                <p>Línea de dinero de 2 vías</p>
                <p>El set se debe completar para que sea válido.</p>
                <p><span>QUIEN GANA EL JUEGO X DEL SET</span></p>
                <p>Quién Gana el Juego X del Set 2</p>
                <p>Sus opciones de apuesta son Jugador 1; Jugador 2</p>
                <p>
                    Pronostique el jugador que ganará el Juego especificado del Set especificado.
                </p>
                <p>Línea de dinero de 2 vías</p>
                <p>El set se debe completar para que sea válido.</p>
                <p><span>QUIEN GANA EL JUEGO X DEL SET</span></p>
                <p>Quién Gana el Juego X del Set 1</p>
                <p>Sus opciones de apuesta son Jugador 1; Jugador 2</p>
                <p>
                    Pronostique el jugador que ganará el Juego especificado del Set especificado.
                </p>
                <p>Línea de dinero de 2 vías</p>
                <p>El set se debe completar para que sea válido.</p>
                <p><span>MARCADOR DEL JUEGO X DEL SET 5</span></p>
                <p>Marcador del Juego X del Set 5</p>
                <p>
                    Pronostique el jugador ganador y el marcador exacto en el Juego y Set especificados.
                </p>
                <p>
                    Si un jugador se retira durante el juego, todas las apuestas en este mercado se anularán
                </p>
                <p>Sus opciones de apuesta son:</p>
                <p>Jugador 1 : 0</p>
                <p>Jugador 1 : 15</p>
                <p>Jugador 1 : 30</p>
                <p>Jugador 1 : 40</p>
                <p>Jugador 2 : 0</p>
                <p>Jugador 2 : 15</p>
                <p>Jugador 2 : 30</p>
                <p>Jugador 2 : 40</p>
                <p>
                    El mercado del ganador de un juego se refiere al ganador de un juego en específico. Ejemplo: Set 1 Juego 1; Set 1 juego 2 etc.
                </p>
                <p>
                    Si un set decide en muerte súbita el mercado se designará como Set 1TB; Set 2TB etc.
                </p>
                <p>
                    Si existiera un retiro/descalificación durante un juego incompleto, todas las apuestas serán consideradas como nulas.
                </p>
                <p>
                    Si un juego se completa porque un árbitro adjudica “un juego por castigo”, todas las apuestas se considerarán nulas (sin embargo, si el juego se completa por “un punto de castigo”, todas las apuestas siguen siendo válidas).
                </p>
                <p>
                    Si un juego se suspende todas las apuestas siguen siendo consideradas como válidas siempre y cuando el juego se complete.
                </p>
                <p>Solo se ofrecerá al inicio del juego.</p>
            </Collapsible>
        </section >
    )
}