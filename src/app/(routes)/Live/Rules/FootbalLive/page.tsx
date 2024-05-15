import Collapsible from "@/app/_components/Collapsible";
import styles from '../styles.module.css';
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Reglas para apuestas FOOTBALL EN VIVO | CaribeApuesta",
    description: "Descubre las reglas esenciales de las apuestas en vivo para el FOOTBALL - Tu guía definitiva para apostar con confianza y responsabilidad. Aprende los términos clave y disfruta de una experiencia de apuestas segura y emocionante. ¡Regístrate e ingresa ahora para comenzar!",
    metadataBase: new URL("http://localhost:3000/"),
    keywords: ['Reglas de apuestas en vivo para el FOOTBALL', 'Reglas de apuestas en vivo para el FOOTBALL', 'Reglas de apuestas en vivo para el FOOTBALL en caribeapuesta'],
    openGraph: {
        title: "Reglas para apuestas FOOTBALL EN VIVO",
        description: "Descubre las reglas esenciales de las apuestas en vivo para el FOOTBALL - Tu guía definitiva para apostar con confianza y responsabilidad. Aprende los términos clave y disfruta de una experiencia de apuestas segura y emocionante. ¡Regístrate e ingresa ahora para comenzar!",
    }
};

export default function FootbalLive() {
    return (
        <section>
            <h3 className={styles.rulesTitle}>FOOTBALL EN VIVO</h3>
            <Collapsible title={"REGLAS GENERALES. "}>
                <p><span>REGLAS GENERALES</span></p>
                <p><span>REGLAS GENERALES DEL FÚTBOL AMERICANO</span></p>
                <p>Reglas Generales de Football</p>
                <p>Importante</p>
                <p>
                    En el caso de cualquier retraso (lluvia, oscuridad…) todos los mercados se mantendrán y estos continuaran tan pronto como se reanude el partido.
                </p>
                <p>Los mercados no incluyen tiempo extra.</p>
                <p><span>REGLAS SOBRE RESOLUCIONES Y CANCELACIONES</span></p>
                <p>Reglas de Pago y Cancelación</p>
                <p>
                    Si un mercado se mantiene abierto con un marcador incorrecto el cual tiene un impacto significativo en las probabilidades, nos reservamos el derecho de anular las apuestas.
                </p>
                <p>
                    Si las posibilidades se ofrecen con una hora incorrecta del partido (más de 89 segundos), nos reservamos el derecho de anular las apuestas.
                </p>
                <p>
                    Si se visualiza un marcador erróneo nos reservamos el derecho de anular las apuestas para este periodo de tiempo.
                </p>
                <p>
                    Si los equipos se visualizan de forma incorrecta nos reservamos el derecho de anular las apuestas.
                </p>
                <p>
                    En el caso de partidos suspendidos o aplazados, todos los mercados se consideran nulos a menos que el partido continúe en el mismo horario semanal de la NFL (Jueves – Viernes tiempo local del estadio)
                </p>
            </Collapsible>
            <Collapsible title={"HANDICAP. "}>
                <p><span>HANDICAP</span></p>
                <p><span>1ERA MITAD - HANDICAP</span></p>
                <p>1er Tiempo – Spread</p>
                <p>Sus opciones de apuesta son Local; Visita</p>
                <p>
                    Pronosticar si uno de los equipos cubrirá los puntos del spread para el 1er tiempo.
                </p>
                <p>
                    Si el 1er tiempo es interrumpido y no se completa dentro de las siguientes 24 horas, todos los mercados indefinidos serán anulados.
                </p>
                <p>
                    Solo cuentan los puntos anotados durante el 1er y 2do cuarto.
                </p>
                <p>Empate = No hay apuesta.</p>
                <p><span>4TO CUARTO - HANDICAP (NO INCLUYE TE)</span></p>
                <p>4to Cuarto - Spread (no incluye tiempo extra)</p>
                <p>Sus opciones de apuesta son Local; Visita</p>
                <p>
                    Pronosticar si uno de los equipos cubrirá los puntos del spread para el 4to cuarto.
                </p>
                <p>
                    Si el 4to cuarto es interrumpido y no se completa dentro de las siguientes 24 horas, todos los mercados indefinidos serán anulados.
                </p>
                <p>Solo cuentan los puntos anotados durante el 4to cuarto.</p>
                <p>Empate = No hay apuesta.</p>
                <p><span>2NDO CUARTO - HANDICAP</span></p>
                <p>2do Cuarto - Spread</p>
                <p>Sus opciones de apuesta son Local; Visita</p>
                <p>
                    Pronosticar si uno de los equipos cubrirá los puntos del spread para el 2do cuarto.
                </p>
                <p>
                    Si el 2do cuarto es interrumpido y no se completa dentro de las siguientes 24 horas, todos los mercados indefinidos serán anulados.
                </p>
                <p>Solo cuentan los puntos anotados durante el 2do cuarto.</p>
                <p>Empate = No hay apuesta.</p>
                <p><span>1ER CUARTO - HANDICAP</span></p>
                <p>1er Cuarto - Spread</p>
                <p>Sus opciones de apuesta son Local; Visita</p>
                <p>
                    Pronosticar si uno de los equipos cubrirá los puntos del spread para el 1er cuarto.
                </p>
                <p>
                    Si el 1er cuarto es interrumpido y no se completa dentro de las siguientes 24 horas, todos los mercados indefinidos serán anulados.
                </p>
                <p>Solo cuentan los puntos anotados durante el 1er cuarto.</p>
                <p>Empate = No hay apuesta.</p>
                <p><span>3ER CUARTO - HANDICAP</span></p>
                <p>3ro Cuarto - Spread</p>
                <p>Sus opciones de apuesta son Local; Visita</p>
                <p>
                    Pronosticar si uno de los equipos cubrirá los puntos del spread para el 3ro cuarto.
                </p>
                <p>
                    Si el 3ro cuarto es interrumpido y no se completa dentro de las siguientes 24 horas, todos los mercados indefinidos serán anulados.
                </p>
                <p>Solo cuentan los puntos anotados durante el 3ro cuarto.</p>
                <p>Empate = No hay apuesta.</p>
            </Collapsible>
            <Collapsible title={"TOTALES. "}>
                <p><span>TOTALES</span></p>
                <p><span>4TO CUARTO - TOTAL (NO INCLUYE TE)</span></p>
                <p>4to Cuarto - Total (No incluye tiempo extra)</p>
                <p>Sus opciones de apuesta son Arriba; Abajo.</p>
                <p>
                    Pronostique si el total de puntos anotados en el 4to cuarto se irá Arriba o Abajo del número especificado.
                </p>
                <p>
                    Solo se consideran los puntos anotados en el 4to cuarto. (No incluye tiempo extra)
                </p>
                <p>
                    Si el 4to cuarto es interrumpido y no se completa dentro de las siguientes 24 horas, todos los mercados indefinidos serán anulados.
                </p>
                <p>Empate = No hay apuesta (Lo arriesgado se reintegra)</p>
                <p>No incluye tiempo extra.</p>
                <p><span>1ER CUARTO - TOTAL</span></p>
                <p>3er Cuarto - Total</p>
                <p>Sus opciones de apuesta son Arriba; Abajo.</p>
                <p>
                    Pronostique si el total de puntos anotados en el 3er cuarto se irá Arriba o Abajo del número especificado.
                </p>
                <p>
                    Si el 3er cuarto es interrumpido y no se completa dentro de las siguientes 24 horas, todos los mercados indefinidos serán anulados.
                </p>
                <p>Solo se consideran los puntos anotados en el 3er cuarto.</p>
                <p>Empate = No hay apuesta (Lo arriesgado se reintegra)</p>
                <p><span>2NDO CUARTO - TOTAL</span></p>
                <p>2do Cuarto - Total</p>
                <p>Sus opciones de apuesta son Arriba; Abajo.</p>
                <p>
                    Pronostique si el total de puntos anotados en el 2do cuarto se irá Arriba o Abajo del número especificado.
                </p>
                <p>
                    Si el 2do cuarto es interrumpido y no se completa dentro de las siguientes 24 horas, todos los mercados indefinidos serán anulados.
                </p>
                <p>Solo se consideran los puntos anotados en el 2do cuarto.</p>
                <p>Empate = No hay apuesta (Lo arriesgado se reintegra)</p>
                <p><span>1ER CUARTO - TOTAL</span></p>
                <p>1er Cuarto - Total</p>
                <p>Sus opciones de apuesta son Arriba; Abajo.</p>
                <p>
                    Pronostique si el total de puntos anotados en el 1er cuarto se irá Arriba o Abajo del número especificado.
                </p>
                <p>
                    Si el 1er cuarto es interrumpido y no se completa dentro de las siguientes 24 horas, todos los mercados indefinidos serán anulados.
                </p>
                <p>Solo se consideran los puntos anotados en el 1er cuarto.</p>
                <p>Empate = No hay apuesta (Lo arriesgado se reintegra)</p>
                <p><span>1ERA MITAD - TOTAL POR EQUIPO (VISITANTE)</span></p>
                <p>1er Tiempo - Total del equipo (Nombre equipo Visita)</p>
                <p>Sus opciones de apuesta son Arriba, Abajo</p>
                <p>
                    Pronostique si el total de puntos anotados por el equipo visitante serán más o menos que la cifra especificada.
                </p>
                <p>
                    Solo cuentan los puntos anotados durante el 1er y 2do cuarto.
                </p>
                <p>
                    Si el 1er tiempo es interrumpido y no se completa dentro de las siguientes 24 horas, todos los mercados indefinidos serán anulados.
                </p>
                <p>Empate = No hay apuesta.</p>
                <p><span>1ERA MITAD - TOTAL POR EQUIPO (CASA)</span></p>
                <p>1er Tiempo - Total del equipo (Nombre equipo Local)</p>
                <p>Sus opciones de apuesta son Arriba, Abajo</p>
                <p>
                    Pronostique si el total de puntos anotados por el equipo local serán más o menos que la cifra especificada.
                </p>
                <p>
                    Solo cuentan los puntos anotados durante el 1er y 2do cuarto.
                </p>
                <p>
                    Si el 1er tiempo es interrumpido y no se completa dentro de las siguientes 24 horas, todos los mercados indefinidos serán anulados.
                </p>
                <p>Empate = No hay apuesta.</p>
                <p><span>1ERA MITAD - TOTAL</span></p>
                <p>1er Tiempo - Total</p>
                <p>Sus opciones de apuesta son Arriba, Abajo</p>
                <p>
                    Pronostique si el total de puntos anotados en el 1er tiempo serán más o menos que la cifra especificada.
                </p>
                <p>
                    Solo cuentan los puntos anotados durante el 1er y 2do cuarto.
                </p>
                <p>
                    Si el 1er tiempo es interrumpido y no se completa dentro de las siguientes 24 horas, todos los mercados indefinidos serán anulados.
                </p>
                <p>Empate = No hay apuesta.</p>
                <p><span>JUEGO - TOTAL POR EQUIPO (VISITANTE) (INCLUYE TE)</span></p>
                <p>
                    Partido - Total del equipo (Equipo Visita) (incluye tiempo extra)
                </p>
                <p>Sus opciones de apuesta son Arriba, Abajo</p>
                <p>
                    Pronostique si el total de puntos anotados por el equipo visitante serán más o menos que la cifra especificada.
                </p>
                <p>
                    Si el partido es interrumpido y no se completa dentro de las siguientes 24 horas, todos los mercados indefinidos serán anulados.
                </p>
                <p>Empate = No hay apuesta.</p>
                <p>Incluye tiempo extra.</p>
                <p><span>JUEGO - TOTAL POR EQUIPO (CASA) (INCLUYE TE)</span></p>
                <p>
                    Partido - Total del equipo (Equipo Local) (incluye tiempo extra)
                </p>
                <p>Sus opciones de apuesta son Arriba, Abajo</p>
                <p>
                    Pronostique si el total de puntos anotados por el equipo local serán más o menos que la cifra especificada.
                </p>
                <p>
                    Si el partido es interrumpido y no se completa dentro de las siguientes 24 horas, todos los mercados indefinidos serán anulados.
                </p>
                <p>Empate = No hay apuesta.</p>
                <p>Incluye tiempo extra.</p>
            </Collapsible>
            <Collapsible title={"LINEAS DE GANE"}>
                <p><span>LINEAS DE GANE</span></p>
                <p><span>4TO CUARTO - LINEA DE GANE (NO INCLUYE TE)</span></p>
                <p>4to Cuarto - Línea de Dinero</p>
                <p>Sus opciones de apuesta son Local; Visita; Empate</p>
                <p>Pronosticar cual equipo ganará el 4to cuarto.</p>
                <p>Todas las apuestas se pagan en función del resultado final.</p>
                <p>
                    Si el 4to cuarto es interrumpido y no se completa dentro de las siguientes 24 horas, todos los mercados indefinidos serán anulados.
                </p>
                <p>Solo se consideran los puntos anotados en el 4to cuarto.</p>
                <p><span>3ER CUARTO - LINEA DE GANE</span></p>
                <p>3er Cuarto - Línea de Dinero</p>
                <p>Sus opciones de apuesta son Local; Visita; Empate</p>
                <p>Pronosticar cual equipo ganará el 4to cuarto.</p>
                <p>Todas las apuestas se pagan en función del resultado final.</p>
                <p>
                    Si el 3er cuarto es interrumpido y no se completa dentro de las siguientes 24 horas, todos los mercados indefinidos serán anulados.
                </p>
                <p>Solo se consideran los puntos anotados en el 3er cuarto.</p>
                <p><span>2NDO CUARTO - LINEA DE GANE</span></p>
                <p>2do Cuarto - Línea de Dinero</p>
                <p>Sus opciones de apuesta son Local; Visita; Empate</p>
                <p>Pronosticar cual equipo ganará el 2do cuarto.</p>
                <p>Todas las apuestas se pagan en función del resultado final.</p>
                <p>
                    Si el 2do cuarto es interrumpido y no se completa dentro de las siguientes 24 horas, todos los mercados indefinidos serán anulados.
                </p>
                <p>Solo se consideran los puntos anotados en el 2do cuarto.</p>
                <p><span>1ER CUARTO - LINEA DE GANE</span></p>
                <p>1er Cuarto - Línea de Dinero</p>
                <p>Sus opciones de apuesta son Local; Visita; Empate</p>
                <p>Pronosticar cual equipo ganará el 1er cuarto.</p>
                <p>Todas las apuestas se pagan en función del resultado final.</p>
                <p>
                    Si el 1er cuarto es interrumpido y no se completa dentro de las siguientes 24 horas, todos los mercados indefinidos serán anulados.
                </p>
                <p>Solo se consideran los puntos anotados en el 1er cuarto.</p>
                <p><span>1ERA MITAD - LINEA DE GANE</span></p>
                <p>1er Tiempo - Línea de Dinero</p>
                <p>Sus opciones de apuesta son Local; Visita.</p>
                <p>Pronosticar cual equipo ganará el 1er tiempo.</p>
                <p>Todas las apuestas se pagan en función del resultado final.</p>
                <p>
                    Si el 1er tiempo es interrumpido y no se completa dentro de las siguientes 24 horas, todos los mercados indefinidos serán anulados.
                </p>
                <p>
                    Solo se consideran los puntos anotados en el 1er y 2do cuarto.
                </p>
                <p><span>1ERA MITAD - RESULTADO FINAL</span></p>
                <p>1er Tiempo - Línea de Dinero de 3 Vías</p>
                <p>Sus opciones de apuesta son Local; Visita; Empate.</p>
                <p>Pronosticar cual equipo ganará el 1er tiempo, o el empate.</p>
                <p>
                    Si el 1er tiempo es interrumpido y no se completa dentro de las siguientes 24 horas, todos los mercados indefinidos serán anulados.
                </p>
                <p>
                    Solo se consideran los puntos anotados en el 1er y 2do cuarto.
                </p>
                <p><span>JUEGO - LINEA DE GANE</span></p>
                <p>Juego - Línea de Dinero</p>
                <p>Sus opciones de apuesta son: Local, Visita.</p>
                <p>Pronosticar cual equipo ganará el partido en tiempo regular.</p>
                <p>Todas las apuestas se pagan en función del resultado final.</p>
                <p>
                    Si un partido es interrumpido y no se completa dentro de las siguientes 24 horas, todos los mercados indefinidos serán anulados.
                </p>
                <p>Empate = No hay apuesta.</p>
                <p>No incluye tiempo extra.</p>
                <p><span>JUEGO - RESULTADO FINAL</span></p>
                <p>Juego - Línea de Dinero de Tres Vías</p>
                <p>Sus opciones de apuesta son Local; Visita; Empate.</p>
                <p>
                    Pronosticar cual equipo ganará el partido, o el empate al final del tiempo regular.
                </p>
                <p>
                    Si el partido es interrumpido y no se completa dentro de las siguientes 24 horas, todos los mercados indefinidos serán anulados.
                </p>
                <p>No incluye tiempo extra.</p>
                <p><span>JUEGO - CUAL EQUIPO GANARÁ EL PARTIDO?</span></p>
                <p>Sus opciones de apuesta son CASA; VISITA.</p>
                <p>La apuesta está en el equipo para ganar el partido.</p>
                <p>
                    Todas las apuestas se valorarán en función del juego completo.
                </p>
                <p>
                    Si un partido se interrumpe y no se completa en 24 horas, todos los mercados pendientes serán cancelados.
                </p>
                <p>INCLUYE TIEMPO EXTRA.</p>
                <p><span>X CUARTO - RESULTADO FINAL</span></p>
                <p><span>(X)QUARTO - LINEA PARA GANAR DE 3 VIAS</span></p>
                <p>Sus opciones de apuesta son Casa ; Empate; Visita.</p>
                <p>
                    La apuesta está en el equipo para ganar el (X)cuarto completo.
                </p>
                <p>Todas las apuestas se valorarán en función del precio total.</p>
                <p>
                    Si el (X)cuarto se interrumpe y no se completa en 24 horas, todos los mercados pendientes serán cancelados.
                </p>
                <p>
                    La apuesta cuenta sólo para los puntos anotados en el (X)cuarto.
                </p>
            </Collapsible>
            <Collapsible title={"OPCIONES ADICIONALES"}>
                <p><span>OPCIONES ADICIONALES</span></p>
                <p><span>MARGEN DE VICTORIA (INCLUYE TE)</span></p>
                <p>Margen Ganador (Incluye tiempo extra)</p>
                <p>Empate</p>
                <p>Equipo Casa por 1 a 6</p>
                <p>Equipo Casa por 7 a 13</p>
                <p>Equipo Casa por Mas de 13</p>
                <p>Equipo Visita por 1 a 6</p>
                <p>Equipo Visita por 7 a 13</p>
                <p>Equipo Visita por Mas de 13</p>
                <p>
                    Pronostique el margen por el cual un equipo determinado gana el partido.
                </p>
                <p>Incluye tiempo extra.</p>
                <p><span>CUARTO CON MARCADOR MÁS ALTO</span></p>
                <p>Cuarto con el Marcador más Alto</p>
                <p>
                    Sus opciones de apuesta son: 1er cuarto; 2do cuarto; 3er cuarto; 4to cuarto; Empate.
                </p>
                <p>
                    La apuesta consiste en predecir en cual cuarto se anotarán más puntos.
                </p>
                <p>
                    Tiempo extra no cuenta para los puntos finales del 4to cuarto.
                </p>
                <p>
                    Si dos o más cuartos terminan empatados en la mayor cantidad de puntos anotados, el empate será la apuesta ganadora.
                </p>
                <p>
                    <span>JUEGO - EQUIPO QUE GANA EL RESTO DEL PARTIDO (INCLUYE TE) (MARCADOR ACTUAL X:X)</span>
                </p>
                <p>
                    Partido - Equipo que ganará el resto del partido (Incluye tiempo extra) (Marcador Actual X:X)
                </p>
                <p>
                    Las listas de puntuación señalan al equipo Local primero, y de segundo el equipo Visitante.
                </p>
                <p>Sus opciones de apuesta son: Local, Visita, Empate.</p>
                <p>Pronostique el ganador del resto del partido o el empate.</p>
                <p>
                    Basado en los puntos anotados entre el momento que se hace la apuesta y el final del partido.
                </p>
                <p>
                    Cualquier punto que se anote previamente al momento en que se hace la apuesta no se tomará en cuenta.
                </p>
                <p>Incluye tiempo extra.</p>
                <p><span>1ST HALF - WHICH TEAM SCORES NEXT (CURRENT SCORE X:X)</span></p>
                <p>
                    1er Tiempo - Cuál será el siguiente equipo en anotar (Marcador actual X:X)
                </p>
                <p>
                    Las listas de puntuación señalan al equipo Local primero, y de segundo el equipo Visitante.
                </p>
                <p>Sus opciones de apuesta son Local; Visita</p>
                <p>
                    Pronostique cual equipo anotará el siguiente gol en el primer tiempo.
                </p>
                <p>
                    Cualquier gol que se anote previamente al momento en que se hace la apuesta no se tomará en cuenta.
                </p>
                <p>
                    Las apuestas solo cuentan para “touchdowns”, “field goals”, y “safeties”.
                </p>
                <p>
                    Puntos extra y “2 point convertion” no cuentan para esta apuesta.
                </p>
                <p>
                    Si el 1er tiempo es interrumpido y no se completa dentro de las siguientes 24 horas, todos los mercados indefinidos serán anulados.
                </p>
                <p>
                    Solo cuentan los puntos anotados durante el 1er y 2do cuarto.
                </p>
                <p><span>1ERA MITAD - IMPAR/PAR TOTAL DE PUNTOS ANOTADOS</span></p>
                <p>Primera mitad - Par/Impar Total de Puntos Anotados</p>
                <p>Sus opciones de apuesta son Par; Impar</p>
                <p>
                    Pronostique si el número total de puntos anotados en el 1er y 2ndo cuarto por ambos equipos será Par o Impar.
                </p>
                <p><span>HALFTIME - FULLTIME</span></p>
                <p>Medio Tiempo - Partido Completo</p>
                <p>Sus opciones de apuesta son:</p>
                <p>Equipo Local / Equipo Local</p>
                <p>Equipo Local / Equipo Visita</p>
                <p>Equipo Local / Empate</p>
                <p>Empate / Equipo Local</p>
                <p>Empate / Empate</p>
                <p>Empate / Equipo Visita</p>
                <p>Equipo Visita / Equipo Visita</p>
                <p>Equipo Visita / Empate</p>
                <p>Equipo Visita / Equipo Local</p>
                <p>
                    La apuesta consiste en una combinación del resultado del medio tiempo con el resultado del partido completo.
                </p>
                <p>Por ejemplo:</p>
                <p>
                    Equipo Local / Empate = Para que esta opción gane, el equipo local debe haber ganado al medio tiempo, pero el partido terminó en un empate.
                </p>
                <p>No incluye tiempo extra</p>
                <p><span>MITAD CON MARCADOR MÁS ALTO</span></p>
                <p>Medio Tiempo con el Marcador más Alto.</p>
                <p>Sus opciones de apuesta son: 1er Tiempo, 2do Tiempo, Igual</p>
                <p>
                    Pronostique en cual tiempo se anotarán más goles o si será igual
                </p>
                <p>No incluye tiempo extra.</p>
                <p><span>HABRÁ TIEMPO EXTRA?</span></p>
                <p>Sus opciones de apuesta son Si; No.</p>
                <p>Pronostique si el partido se irá a tiempo extra.</p>
                <p>
                    <span> CUAL VA A SER LA SIGUIENTE ANOTACIÓN DEL JUEGO? (INCLUYE TE) (MARCADOR ACTUAL X:X)</span>
                </p>
                <p>Siguiente Método de anotación (incluye tiempo extra)</p>
                <p>
                    Sus opciones de apuesta son: Touchdown; Gol de Campo ; Safety o Ninguno.
                </p>
                <p>
                    Pronostique si la siguiente anotación será un Touchdown, Field Goal, Safety o Ninguno.
                </p>
                <p>
                    Si el partido termina antes de que el próximo equipo anote en el juego, el mercado se considera nulo.
                </p>
                <p>
                    <span>JUEGO - CUAL ES EL SIGUIENTE EQUIPO EN ANOTAR (INCLUYE TE) (MARCADOR ACTUAL X:X)</span>
                </p>
                <p>
                    Partido - Equipo en hacer la siguiente anotación (incluye tiempo extra) (Marcador Actual X:X)
                </p>
                <p>
                    Las listas de puntuación señalan al equipo Local primero, y de segundo el equipo Visitante.
                </p>
                <p>
                    Sus opciones de apuesta son: Local; Visita. Una tercera opción (Empate) se puede ofrecer a discreción de la oficina.
                </p>
                <p>
                    Pronostique cual equipo hará la siguiente anotación en el partido.
                </p>
                <p>
                    Cualquier anotación que se haga previamente al momento en que se hace la apuesta no se tomará en cuenta.
                </p>
                <p>
                    Las apuestas solo cuentan para “touchdowns”, “field goals”, y “safeties”.
                </p>
                <p>
                    Puntos extra y “2 point convertion” no cuentan para esta apuesta.
                </p>
                <p>
                    Si solo se proporcionan dos opciones (equipo local y equipo visita) y el partido termina antes de que el próximo equipo anote en el juego, el mercado será considerado nulo, sin embargo si se proporciona el Empate como tercera opción, todas las apuestas en el empate serán ganadoras.
                </p>
                <p>Incluye tiempo extra.</p>
                <p><span>JUEGO - IMPAR/PAR TOTAL DE PUNTOS ANOTADOS (INCLUYE TE)</span></p>
                <p>
                    Partido - Par/Impar Total de Puntos Anotados (Incluye tiempo extra)
                </p>
                <p>Sus opciones de apuesta son Par; Impar</p>
                <p>
                    Pronostique si el número total de puntos anotados será Par o Impar.
                </p>
                <p>Incluye tiempo extra.</p>
                <p><span>CUAL EQUIPO ANOTA PRIMERO (XX) PUNTOS? (INCLUYE TE)</span></p>
                <p>VACIO</p>
                <p>DOBLE OPORTUNIDAD</p>
                <p>Doble Oportunidad</p>
                <p>
                    Sus opciones de apuesta son: Local o Empate, Local o Visita, Empate o Visita.
                </p>
                <p>
                    Este tipo de apuesta ofrece la oportunidad de apostar en dos posibles resultados en un juego en una sola apuesta.
                </p>
                <p>
                    Esta apuesta requiere que escoja entre dos resultados de los tres posibles emparejamientos.
                </p>
                <p>
                    Si uno de los dos posibles resultados se alcanza, se gana la apuesta.
                </p>
            </Collapsible>
            <Collapsible title={"APUESTAS PRINCIPALES"}>
                    <p><span>APUESTAS PRINCIPALES</span></p>
                    <p><span>JUEGO - HANDICAP (INCLUYE TE)</span></p>
                    <p>Juego - Spread (Incluye tiempo extra)</p>
                    <p>Apuesta Hándicap</p>
                    <p>
                        Con la Apuesta Hándicap el bookmaker le otorga al equipo que se supone que es más débil una ventaja virtual de un gol, lo cual estadísticamente incrementa las posibilidades para un empate entre los equipos o un gane para el equipo no favorito, y este se agregará al resultado final para fines de la apuesta.
                    </p>
                    <p>El favorito es hándicap.</p>
                    <p>Sus opciones de apuesta son Local; Visita</p>
                    <p>
                        Pronostique el equipo que ganará el partido una vez que el spread hándicap haya sido aplicado al marcador actual.
                    </p>
                    <p>
                        Si un partido es interrumpido y no se completa dentro de las siguientes 24 horas, todos los mercados indefinidos serán anulados.
                    </p>
                    <p>Incluye tiempo extra.</p>
                    <p><span>JUEGO - TOTAL (INCLUYE TE)</span></p>
                    <p>Partido - Total (Incluye tiempo extra)</p>
                    <p>Sus opciones de apuesta son Arriba: Abajo</p>
                    <p>
                        Pronostique si el total de puntos anotados por ambos equipos se irá Arriba o Abajo del número especificado.
                    </p>
                    <p>
                        Si un partido es interrumpido y no se completa dentro de las siguientes 24 horas, todos los mercados indefinidos serán anulados.
                    </p>
                    <p>Tiempo Extra Incluido.</p>
                    <p><span>JUEGO - LÍNEA DE GANE (INCLUYE TE)</span></p>
                    <p>Partido - Línea de Dinero (Incluye Tiempo Extra)</p>
                    <p>Sus opciones de apuesta son Local; Visita</p>
                    <p>La apuesta es para determinar quién ganará el partido.</p>
                    <p>Todas las apuestas se pagan en función del resultado final.</p>
                    <p>
                        Si un partido es interrumpido y no se completa dentro de las siguientes 24 horas, todos los mercados indefinidos serán anulados.
                    </p>
                    <p>Empate al final del tiempo extra = No hay apuesta</p>
                    <p>Incluye tiempo extra.</p>
            </Collapsible>
        </section>
    )
}