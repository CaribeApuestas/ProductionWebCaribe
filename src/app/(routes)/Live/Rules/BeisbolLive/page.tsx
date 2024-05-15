import Collapsible from "@/app/_components/Collapsible";
import styles from '../styles.module.css';
import { Metadata } from "next";



export const metadata: Metadata = {
    title: "Reglas para apuestas BEISBOL EN VIVO | CaribeApuesta",
    description: "Descubre las reglas esenciales de las apuestas en vivo para el BEISBOL - Tu guía definitiva para apostar con confianza y responsabilidad. Aprende los términos clave y disfruta de una experiencia de apuestas segura y emocionante. ¡Regístrate e ingresa ahora para comenzar!",
    metadataBase: new URL("http://localhost:3000/"),
    keywords: ['Reglas de apuestas en vivo para el Beisbol', 'Reglas de apuestas en vivo para el Beisbol', 'Reglas de apuestas en vivo para el Beisbol en caribeapuesta'],
    openGraph: {
        title: "Reglas para apuestas BEISBOL EN VIVO",
        description: "Descubre las reglas esenciales de las apuestas en vivo para el BEISBOL - Tu guía definitiva para apostar con confianza y responsabilidad. Aprende los términos clave y disfruta de una experiencia de apuestas segura y emocionante. ¡Regístrate e ingresa ahora para comenzar!",
    }
};

export default function BeisbolLive() {
    return (
        <section>
            <h3 className={styles.rulesTitle}>BEISBOL EN VIVO</h3>
            <Collapsible title={"REGLAS GENERALES. "}>
                <p><span>Reglas Generales para Beisbol.</span></p>
                <p>
                    Todos los partidos deben comenzar en la fecha prevista (hora local) para que las apuestas sean válidas. Si un partido se posterga o cancela antes de su hora de inicio, todas las apuestas se consideran canceladas.
                </p>
                <p>
                    Todas las apuestas serán válidas independientemente de los cambios de lanzadores. Las entradas extra cuentan a menos que se indique lo contrario.
                </p>
                <p>
                    Los partidos de beisbol que no sean de la MLB (incluyendo ligas menores) no tendrán lanzadores designados y todas las apuestas serán “Action”. La regla de las 8½ entradas aplica, sin embargo en el caso que se aplique un “Mercy Rule” todas las apuestas se mantendrán con el marcador al momento de su aplicación. Para los partidos jugados como parte de una doble cartelera con solo 7 entradas, la regla de las 6½ entradas se aplicará.
                </p>
                <p>
                    En los mercados de 2 vías aplican las reglas de empate a menos que se indique lo contrario. Lo arriesgado en apuestas individuales se reintegra y en selecciones múltiples/parlays la selección se trata como una cancelación.
                </p>
                <p>
                    Para cualquier partido suspendido de fase final en MLB que se reanude dentro de las siguientes 72 horas posteriores a su suspensión las apuestas se mantendrán y se pagarán después del término del juego. Si el juego no se reanuda en ese periodo de tiempo, todas las apuestas serán canceladas a menos que el pago de las apuestas ya este determinado.
                </p>
                <p>
                    Posibles entradas extras no serán consideras en ningún mercado, excepto para: “Quién anota el punto X” y “Cual equipo llegará primero a los puntos X”, o que se diga lo contrario.
                </p>
                <p><span>Reglas de Pago y Cancelación</span></p>
                <p>
                    Todos las apuestas para el juego serán liquidados según el resultado final después de 9 entradas (8½ entradas si el equipo local va ganando).
                </p>
                <p>
                    En el caso de que un partido sea interrumpido o cancelado y no continúe en el mismo día, todos los mercados indecisos serán anulados.
                </p>
                <p>
                    Si un mercado se mantiene abierto con un marcador incorrecto o con un estatus de partido incorrecto y el cual tiene un impacto significativo en las probabilidades, nos reservamos el derecho de anular las apuestas.
                </p>
            </Collapsible>
            <Collapsible title={"HANDICAP. "}>
                <p><span>HANDICAP</span></p>
                <p>JUEGO - LINEA DE CARRERAS?</p>
                <p>JUEGO - LINEA DE CARRERAS? (incluye tiempo extra)</p>
                <p>Este es un mercado hándicap.</p>
                <p>
                    El equipo con el hándicap del signo mas (+) recibe un arranque del equipo con el hándicap del signo menos (-).
                </p>
                <p>
                    Las apuestas igualadas en este mercado son válidas solo si se completan 9 entradas (8½ entradas si va ganando el equipo local).
                </p>
                <p>Incluye entradas extra (tiempo extra).</p>
            </Collapsible>
            <Collapsible title={"TOTALES. "}>
                <p><span>TOTAL DEL JUEGO</span></p>
                <p>Partido - Total para todo el partido</p>
                <p>Sus opciones de apuesta son: Arriba; Abajo.</p>
                <p>
                    Tiempo extra no esta incluido, a menos que se indique lo contrario
                </p>
                <p>
                    Pronostique si el marcador combinado de ambos equipos irá arriba o abajo de un número especificado de carreras. Si se cancela el partido todas las apuestas pagadas permanecerán con el marcador en ese momento.
                </p>
                <p>
                    Todas las apuestas abiertas o pendientes se cancelarán si no se completan al menos 9 entradas (8½ entradas si el equipo local va ganando).
                </p>
                <p><span>8 ENTRADA - TOTAL DE CARRERAS</span></p>
                <p>8va Entrada Total de carreras</p>
                <p>Sus opciones de apuesta son: Arriba; Abajo</p>
                <p>
                    Pronostique si el número total de carreras en la entrada especificada será mayor o menor al número especificado.
                </p>
                <p>
                    Solo cuentan las carreras anotadas en la entrada especificada.
                </p>
                <p>
                    Si se cancela el partido todas las apuestas pagadas permanecerán con el marcador en ese momento.
                </p>
                <p><span>7 ENTRADA - TOTAL DE CARRERAS</span></p>
                <p>7ma Entrada Total de carreras</p>
                <p>Sus opciones de apuesta son: Arriba; Abajo</p>
                <p>
                    Pronostique si el número total de carreras en la entrada especificada será mayor o menor al número especificado.
                </p>
                <p>
                    Solo cuentan las carreras anotadas en la entrada especificada.
                </p>
                <p>
                    Si se cancela el partido todas las apuestas pagadas permanecerán con el marcador en ese momento.
                </p>
                <p><span>6 ENTRADA - TOTAL DE CARRERAS</span></p>
                <p>6ta Entrada Total de carreras</p>
                <p>Sus opciones de apuesta son: Arriba; Abajo</p>
                <p>
                    Pronostique si el número total de carreras en la entrada especificada será mayor o menor al número especificado.
                </p>
                <p>
                    Solo cuentan las carreras anotadas en la entrada especificada.
                </p>
                <p>
                    Si se cancela el partido todas las apuestas pagadas permanecerán con el marcador en ese momento.
                </p>
                <p><span>5 ENTRADA - TOTAL DE CARRERAS</span></p>
                <p>5ta Entrada Total de carreras</p>
                <p>Sus opciones de apuesta son: Arriba; Abajo</p>
                <p>
                    Pronostique si el número total de carreras en la entrada especificada será mayor o menor al número especificado.
                </p>
                <p>
                    Solo cuentan las carreras anotadas en la entrada especificada.
                </p>
                <p>
                    Si se cancela el partido todas las apuestas pagadas permanecerán con el marcador en ese momento.
                </p>
                <p><span>4 ENTRADA - TOTAL DE CARRERAS</span></p>
                <p>4ta Entrada Total de carreras</p>
                <p>Sus opciones de apuesta son: Arriba; Abajo</p>
                <p>
                    Pronostique si el número total de carreras en la entrada especificada será mayor o menor al número especificado.
                </p>
                <p>
                    Solo cuentan las carreras anotadas en la entrada especificada.
                </p>
                <p>
                    Si se cancela el partido todas las apuestas pagadas permanecerán con el marcador en ese momento.
                </p>
                <p><span>1 ENTRADA - TOTAL DE CARRERAS</span></p>
                <p>1era Entrada Total de carreras</p>
                <p>Sus opciones de apuesta son: Arriba; Abajo</p>
                <p>
                    Pronostique si el número total de carreras en la entrada especificada será mayor o menor al número especificado.
                </p>
                <p>
                    Solo cuentan las carreras anotadas en la entrada especificada.
                </p>
                <p>
                    Si se cancela el partido todas las apuestas pagadas permanecerán con el marcador en ese momento.
                </p>
                <p><span>3 ENTRADA - TOTAL DE CARRERAS</span></p>
                <p>3era Entrada Total de carreras</p>
                <p>Sus opciones de apuesta son: Arriba; Abajo</p>
                <p>
                    Pronostique si el número total de carreras en la entrada especificada será mayor o menor al número especificado.
                </p>
                <p>
                    Solo cuentan las carreras anotadas en la entrada especificada.
                </p>
                <p>
                    Si se cancela el partido todas las apuestas pagadas permanecerán con el marcador en ese momento.
                </p>
                <p><span>2 ENTRADA - TOTAL DE CARRERAS</span></p>
                <p>2da Entrada Total de carreras</p>
                <p>Sus opciones de apuesta son: Arriba; Abajo</p>
                <p>
                    Pronostique si el número total de carreras en la entrada especificada será mayor o menor al número especificado.
                </p>
                <p>
                    Solo cuentan las carreras anotadas en la entrada especificada.
                </p>
                <p>
                    Si se cancela el partido todas las apuestas pagadas permanecerán con el marcador en ese momento.
                </p>
                <p><span>PRIMERAS 4½ ENTRADAS TOTAL DE CARRERAS</span></p>
                <p>Primeras 4½ Entradas – Total de Carreras</p>
                <p>Sus opciones de apuesta son: Arriba; Abajo</p>
                <p>
                    Pronostique si el número total de carreras en las primeras 4½ entradas (4 entradas completas más media entrada de la 5ta) será mayor o menor al número especificado.
                </p>
                <p>
                    Si se cancela el partido todas las apuestas pagadas permanecerán con el marcador en ese momento.
                </p>
            </Collapsible>
            <Collapsible title={"LINEAS DE GANE"}>
                <p>
                    <span>JUEGO - QUIÉN GANA EL RESTO DEL PARTIDO? (INCLUYE TE) (MARCADOR ACTUAL X:X)</span>
                </p>
                <p>
                    Partido - Quién gana el resto del partido? (Incluye tiempo extra)
                </p>
                <p>
                    Las listas de puntuación señalan al equipo Local primero, y de segundo el equipo Visitante.
                </p>
                <p>Sus opciones de apuesta son: Local; Visita; Empate.</p>
                <p>
                    Pronostique el equipo que ganará el resto del partido o el empate.
                </p>
                <p>
                    Se basa en las carreras anotadas entre el periodo que se hace la apuesta y el final del partido
                </p>
                <p>
                    No cuenta cualquier carrera que se anote antes de la apuesta.
                </p>
                <p>
                    Todas las apuestas en este mercado son válidas si se completan al menos 9 entradas (8½ entradas si va ganando el equipo local).
                </p>
                <p>Se incluye entradas extras (tiempo extra)</p>
                <p>JUEGO - QUÉ EQUIPO GANARÁ EL JUEGO (INCLUYE TE)</p>
                <p>Este mercado está en el resultado absoluto del partido.</p>
                <p>
                    El resultado de un juego es oficial después de 5 entradas de juego, a menos que el equipo local vaya ganando después de 4.5 entradas. Si un juego es suspendido, el ganador es determinado por la puntuación después de la última entrada completa a menos que el equipo local anote para empatar, o tome la delantera en la parte baja de la entrada, en cuyo caso el ganador es determinado por la puntuación en el momento en que el juego se detiene.
                </p>
                <p>Incluye entradas extras (TE Incluido).</p>
            </Collapsible>
            <Collapsible title={"OPCIONES ADICIONALES"}>
                <p><span>QUIÉN GANA LA (XX) ENTRADA?</span></p>
                <p>Quién gana la entrada (XX)?</p>
                <p>Sus opciones de apuesta son: Local; Visita; Empate</p>
                <p>
                    La parte alta y baja de la entrada deben completarse a menos que el equipo que batea de segundo en la entrada especificada va ganando cuando se cancela o suspende el partido.
                </p>
                <p><span>HABRÁ ENTRADAS EXTRAS?</span></p>
                <p>Habrán entradas extras?</p>
                <p>Sus opciones de apuesta son: Si; No.</p>
                <p>Pronostique si se jugarán entradas extra.</p>
                <p>
                    Las apuestas son válidas solo si se completan las 9 entradas.
                </p>
                <p><span>JUEGO - IMPAR/PAR CARRERAS PARA TODO EL PARTIDO (INCLUYE TE)</span></p>
                <p>
                    Partido - Par/Impar Carreras para todo el partido (Incluye tiempo extra)
                </p>
                <p>Sus opciones de apuesta son: Par; Impar</p>
                <p>
                    Pronostique si el número total de carreras anotadas por ambos equipos será un número par o impar.
                </p>
                <p>
                    Las apuestas se pagan en función de la suma total de carreras (que resultará en un número par o impar).
                </p>
                <p>
                    Todas las apuestas en este mercado son válidas si se completan al menos 9 entradas (8½ entradas si va ganando el equipo local).
                </p>
                <p>Se incluye entradas extra .</p>
                <p><span>MÁXIMO NÚMERO DE CARRERAS ANOTADAS EN UNA ENTRADA</span></p>
                <p>Número máximo de carreras anotadas en una entrada</p>
                <p>Sus opciones de apuesta son: 0, 1, 2, 3, 4, 5+</p>
                <p>
                    Pronostique el número total de carreras anotadas en una entrada en específico.
                </p>
                <p>
                    Las apuestas en este mercado son válidas solo si se completa la entrada.
                </p>
                <p>Las carreras anotadas en otra entrada no cuentan.</p>
                <p><span>NO INCLUYE ENTRADAS EXTRAS</span></p>
                <p><span>JUEGO - MARGEN DE VICTORIA (INCLUYE TE)</span></p>
                <p>Partido - Margen Ganador (incluye tiempo extra)</p>
                <p>
                    Sus opciones de apuesta son: Por 1 carrera; Por 2 carreras; Por 3 o más carreras.
                </p>
                <p>
                    Pronostique el margen por el cual el equipo ganador ganará el partido.
                </p>
                <p>
                    Todas las apuestas en este mercado son válidas si se completan al menos 9 entradas (8½ entradas si va ganando el equipo local).
                </p>
                <p>Se incluye entradas extra (tiempo extra)</p>
                <p><span>CUAL EQUIPO ANOTA MÁS CARRERAS EN UNA ENTRADA?</span></p>
                <p>Opciones de apuesta son CASA; EMPATE; VISITA.</p>
                <p>
                    Predecir el equipo que anotará más carreras en un inning durante el juego.
                </p>
                <p>
                    Apuestas en este mercado aplican sólo si se completa el juego.
                </p>
                <p>Entradas extras no están incluidas.</p>
                <p>
                    <span>CUAL EQUIPO VA A LIDERAR DESPUÉS DE LAS PRIMERAS 4½ ENTRADAS?</span>
                </p>
                <p>
                    Cuál equipo encabezará el juego después de las primeras 4½ entradas?
                </p>
                <p>Sus opciones de apuesta son: Local; Visita; Ninguno</p>
                <p>
                    Las apuestas se pagarán de acuerdo al resultado de las primeras 4½ entradas (4 entradas completas, más la parte alta de la 5ta).
                </p>
                <p>
                    La parte alta de la 5ta entrada debe completarse para que las apuestas sean válidas.
                </p>
                <p><span>CUAL EQUIPO ANOTA PRIMERO X CARRERAS (INCLUYE TE)</span></p>
                <p>Cuál equipo llegará primero a la carrera X?</p>
                <p>Sus opciones de apuesta son: Local; Visita.</p>
                <p>
                    Pronostique el equipo que llegará primero al número especificado de carreras individuales en el partido.
                </p>
                <p>
                    Todas las apuestas en este mercado son válidas si se completan al menos 9 entradas (8½ entradas si va ganando el equipo local).
                </p>
                <p><span>INCLUYE TIEMPO EXTRA</span></p>
                <p><span>QUIEN ANOTA LA CARRERA XX? (INCLUYE TE)</span></p>
                <p>Cuál equipo llegará primero a la carrera X?</p>
                <p>Sus opciones de apuesta son: Local, Ninguno, Visita.</p>
                <p>
                    Pronostique el equipo que llegará primero al número especificado de carreras individuales en el partido.
                </p>
                <p>
                    Todas las apuestas en este mercado son válidas si se completan al menos 9 entradas (8½ entradas si va ganando el equipo local).
                </p>
                <p>Incluye Tiempo extra.</p>
                <p><span>SE JUGARÁ LA PARTE BAJA DE LA 9na ENTRADA?</span></p>
                <p>Se jugará la parte baja de la 9na entrada?</p>
                <p>Sus opciones de apuesta son: Si; No.</p>
                <p>
                    Pronostique si el equipo local bateará después de que el equipo visitante haya completado 9 entradas.
                </p>
                <p>
                    Las apuestas son válidas solo si se el equipo visitante completa 9 entradas.
                </p>
            </Collapsible>
        </section>
    )
}