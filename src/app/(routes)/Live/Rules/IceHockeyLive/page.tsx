import Collapsible from "@/app/_components/Collapsible";
import styles from '../styles.module.css';
import { Metadata } from "next";


export const metadata: Metadata = {
    title: "Reglas para apuestas ICE HOCKEY EN VIVO | CaribeApuesta",
    description: "Descubre las reglas esenciales de las apuestas en vivo para el ICE HOCKEY - Tu guía definitiva para apostar con confianza y responsabilidad. Aprende los términos clave y disfruta de una experiencia de apuestas segura y emocionante. ¡Regístrate e ingresa ahora para comenzar!",
    metadataBase: new URL("http://localhost:3000/"),
    keywords: ['Reglas de apuestas en vivo para el ICE HOCKEY', 'Reglas de apuestas en vivo para el ICE HOCKEY', 'Reglas de apuestas en vivo para el ICE HOCKEY en caribeapuesta'],
    openGraph: {
        title: "Reglas para apuestas ICE HOCKEY EN VIVO",
        description: "Descubre las reglas esenciales de las apuestas en vivo para el ICE HOCKEY - Tu guía definitiva para apostar con confianza y responsabilidad. Aprende los términos clave y disfruta de una experiencia de apuestas segura y emocionante. ¡Regístrate e ingresa ahora para comenzar!",
    }
};

export default function IceHockeyLive() {
    return (
        <section>
            <h3 className={styles.rulesTitle}>ICE HOCKEY EN VIVO</h3>
            <Collapsible title={"HANDICAP. "}>
                <p><span>HANDICAP</span></p>
                <p><span>X Periodo - Handicap (XX)</span></p>
                <p>Sus opciones de apuesta son: Local; Visitante.</p>
                <p>Este mercado es un hándicap para el periodo en específico.</p>
                <p>
                    El equipo con el signo más (+) en el hándicap recibe “x goles” de ventaja contra el equipo con el signo menos (-) en el hándicap.
                </p>
                <p>Apuesta valida únicamente para el periodo en específico.</p>
                <p>El tercer periodo NO incluye Tiempo Extra.</p>
                <p>
                    El periodo debe ser completado para que las apuestas tengan acción.
                </p>
                <p><span>Juego - Handicap (XX)</span></p>
                <p>Sus opciones de apuesta son: Local; Visitante.</p>
                <p>Este mercado es un hándicap para todo el partido.</p>
                <p>
                    El equipo con el signo más (+) en el hándicap recibe x goles de ventaja contra el equipo con el signo menos (-) en el hándicap.
                </p>
                <p>Apuesta valida únicamente para el tiempo reglamentario.</p>
                <p>
                    Si un partido es interrumpido o pospuesto, todas las apuestas que no estén resueltas serán canceladas a no ser que el mercado ya haya sido determinado.
                </p>
                <p><span>1er Periodo - Handicap (XX)</span></p>
                <p>Sus opciones de apuesta son: Local; Visitante.</p>
                <p>Este mercado es un hándicap para el primer periodo.</p>
                <p>
                    El equipo con el signo más (+) en el hándicap recibe x goles de ventaja contra el equipo con el signo menos (-) en el hándicap.
                </p>
                <p>Apuesta valida únicamente para el primer periodo.</p>
                <p>
                    El primer periodo debe ser completado para que las apuestan tengan acción.
                </p>
                <p><span>2ndo Periodo - Handicap (XX)</span></p>
                <p>2do periodo - Hándicap (XX)</p>
                <p>Sus opciones de apuesta son: Local; Visitante.</p>
                <p>Este mercado es un hándicap para el segundo periodo.</p>
                <p>
                    El equipo con el signo más (+) en el hándicap recibe “x goles” de ventaja contra el equipo con el signo menos (-) en el hándicap.
                </p>
                <p>Apuesta valida únicamente para el segundo periodo.</p>
                <p>
                    <span>Juego - Handicap (XX) (Incluye TE Y Penales) (Marcador Actual X:X)</span>
                </p>
                <p>
                    Juego - Hándicap (XX) (Tiempo Extra y penales incluidos) (Marcador Actual X;X)
                </p>
                <p>Sus opciones de apuesta son: Local; Visitante.</p>
                <p>Este mercado es un hándicap para todo el partido.</p>
                <p>
                    El equipo con el signo más (+) en el hándicap recibe x goles de ventaja contra el equipo con el signo menos (-) en el hándicap.
                </p>
                <p>Tiempo Extra Incluido.</p>
                <p>Los penales se consideran parte del tiempo extra.</p>
                <p>
                    Sin importar el número de goles marcados durante los lanzamientos de tiro penal, SOLO 1 gol será dado al equipo ganador.
                </p>
                <p>
                    Si un partido es interrumpido o pospuesto, todas las apuestas que no estén resueltas serán canceladas a no ser que el mercado ya haya sido determinado.
                </p>
                <p><span>3er Periodo - Handicap (XX)</span></p>
                <p>Sus opciones de apuesta son: Local; Visitante.</p>
                <p>Este mercado es un hándicap para el tercer periodo.</p>
                <p>
                    El equipo con el signo más (+) en el hándicap recibe x goles de ventaja contra el equipo con el signo menos (-) en el hándicap.
                </p>
                <p>Apuesta valida únicamente para el tercer periodo.</p>
                <p>Tiempo extra NO se incluye.</p>
                <p>
                    El tercer debe ser completado para que las apuestan tengan acción.
                </p>
            </Collapsible>
            <Collapsible title={"TOTALES. "}>
                <p><span>TOTALES</span></p>
                <p><span>Juego - Total De Goles (CASA)</span></p>
                <p>Sus opciones de apuesta son: 0; 1; 2; 3+ goles.</p>
                <p>
                    La apuesta consiste en el número exacto de goles que el equipo local anotará en el juego.
                </p>
                <p>Apuesta valida únicamente para el tiempo reglamentario.</p>
                <p>
                    Si un partido es interrumpido o pospuesto, todas las apuestas que no estén resueltas serán canceladas a no ser que el mercado ya haya sido determinado.
                </p>
                <p><span>1er Periodo - Total De Goles (XX)</span></p>
                <p>1er Periodo - Total de Goles (XX)</p>
                <p>Sus opciones de apuesta son: Arriba; Abajo.</p>
                <p>
                    Prediga si el total de goles marcados durante el primer periodo será arriba o abajo del número especificado.
                </p>
                <p>Apuesta valida únicamente para el primer periodo.</p>
                <p>
                    Si el periodo es interrumpido o pospuesto, todas las apuestas que no estén resueltas serán canceladas a no ser que el mercado ya haya sido determinado.
                </p>
                <p><span>2ndo Periodo - Total De Goles (XX)</span></p>
                <p>Sus opciones de apuesta son: Arriba; Abajo.</p>
                <p>
                    Prediga si el total de goles marcados durante el segundo periodo será arriba o abajo del número especificado.
                </p>
                <p>Apuesta valida únicamente para el segundo periodo.</p>
                <p>
                    Si el periodo es interrumpido o pospuesto, todas las apuestas que no estén resueltas serán canceladas a no ser que el mercado ya haya sido determinado.
                </p>
                <p><span>Juego - Total Por Equipo (XX) (CASA)</span></p>
                <p>Sus opciones de apuesta son: Arriba; Abajo.</p>
                <p>
                    Prediga si el total de goles marcados por el equipo local se irá arriba o debajo del número especificado.
                </p>
                <p>Apuesta valida únicamente para el tiempo reglamentario.</p>
                <p>
                    Si un partido es interrumpido o pospuesto, todas las apuestas que no estén resueltas serán canceladas a no ser que el mercado ya haya sido determinado.
                </p>
                <p><span>Juego - Total Por Equipo (XX) (VISITANTE)</span></p>
                <p>Sus opciones de apuesta son: Arriba; Abajo.</p>
                <p>
                    Prediga si el total de goles marcados por el equipo visitante se irá arriba o debajo del número especificado.
                </p>
                <p>Apuesta valida únicamente para el tiempo reglamentario.</p>
                <p>
                    Si un partido es interrumpido o pospuesto, todas las apuestas que no estén resueltas serán canceladas a no ser que el mercado ya haya sido determinado.
                </p>
                <p><span>X Periodo - Total (XX)</span></p>
                <p>Sus opciones de apuesta son: Arriba; Abajo.</p>
                <p>
                    Prediga si el total de goles marcados durante el periodo será arriba o abajo del número especificado.
                </p>
                <p>
                    Solo goles marcados durante el periodo en específico serán considerados para propósitos de esta apuesta.
                </p>
                <p>El tercer periodo NO incluye Tiempo Extra.</p>
                <p>
                    Si un partido es interrumpido o pospuesto, todas las apuestas que no estén resueltas serán canceladas a no ser que el mercado ya haya sido determinado.
                </p>
                <p><span>X Periodo - Número Exacto De Goles</span></p>
                <p>Sus opciones de apuesta son: 0; 1; 2; 3; 4+.</p>
                <p>
                    Prediga el número exacto de goles marcados por ambos equipos durante el periodo en específico.
                </p>
                <p>
                    Solo goles marcados durante el periodo en específico serán considerados para propósitos de esta apuesta.
                </p>
                <p>El tercer periodo NO incluye Tiempo Extra.</p>
                <p>
                    Si el partido es interrumpido o pospuesto, todas las apuestas que no estén resueltas serán canceladas ah no ser que el mercado ya haya sido determinado.
                </p>
                <p><span>X Periodo - Total De Goles (CASA)</span></p>
                <p>Sus opciones de apuesta son: 0, 1, 2, 3+ goles.</p>
                <p>
                    La apuesta consiste en cuantos goles exactamente el equipo local marcará en el periodo en específico.
                </p>
                <p>
                    Solo goles marcados durante el periodo en específico son considerados para propósitos de esta apuesta.
                </p>
                <p>El tercer periodo NO incluye tiempo extra.</p>
                <p>
                    Si un partido es interrumpido o pospuesto, todas las apuestas que no estén resueltas serán canceladas a no ser que el mercado ya haya sido determinado.
                </p>
                <p><span>Juego - Total (Incluye TE Y Penales)</span></p>
                <p>Sus opciones de apuesta son: Arriba; Abajo.</p>
                <p>
                    Prediga si el total de goles marcados durante el partido será arriba o abajo del número especificado.
                </p>
                <p>Tiempo Extra Incluido.</p>
                <p>Los penales se consideran parte del tiempo extra.</p>
                <p>
                    Sin importar el número de goles marcados durante los lanzamientos de tiro penal, SOLO 1 gol será dado al equipo ganador.
                </p>
                <p>
                    Si un partido es interrumpido o pospuesto, todas las apuestas que no estén resueltas serán canceladas a no ser que el mercado ya haya sido determinado.
                </p>
                <p><span>Juego - Total De Goles (Casa) (Incluye TE Y Penales)</span></p>
                <p>Sus opciones de apuesta son: 0; 1; 2; 3+ goles.</p>
                <p>
                    La apuesta consiste en el número exacto de goles que el equipo local anotará en el juego.
                </p>
                <p>Tiempo Extra Incluido.</p>
                <p>Los penales se consideran parte del tiempo extra.</p>
                <p>
                    Sin importar el número de goles marcados durante los lanzamientos de tiro penal, SOLO 1 gol será dado al equipo ganador.
                </p>
                <p>
                    Si un partido es interrumpido o pospuesto, todas las apuestas que no estén resueltas serán canceladas a no ser que el mercado ya haya sido determinado.
                </p>
                <p><span>Juego - Total De Goles (Visitante) (Incluye TE Y Penales)</span></p>
                <p>Sus opciones de apuesta son: 0; 1; 2; 3+ goles.</p>
                <p>
                    La apuesta consiste en el número exacto de goles que el equipo visitante anotará en el juego.
                </p>
                <p>Tiempo Extra Incluido.</p>
                <p>Los penales se consideran parte del tiempo extra.</p>
                <p>
                    Sin importar el número de goles marcados durante los lanzamientos de tiro penal, SOLO 1 gol será dado al equipo ganador.
                </p>
                <p>
                    Si un partido es interrumpido o pospuesto, todas las apuestas que no estén resueltas serán canceladas a no ser que el mercado ya haya sido determinado.
                </p>
                <p><span>Juego - Total (XX)</span></p>
                <p>Sus opciones de apuesta son: Arriba; Abajo.</p>
                <p>
                    Prediga si el total de goles marcados durante el partido será arriba o abajo del número especificado.
                </p>
                <p>Apuesta valida únicamente para el tiempo reglamentario.</p>
                <p>
                    Si un partido es interrumpido o pospuesto, todas las apuestas que no estén resueltas serán canceladas a no ser que el mercado ya haya sido determinado.
                </p>
                <p><span>Juego - Impar/Par Total De Goles Anotados</span></p>
                <p>Sus opciones de apuesta son: Par/Impar.</p>
                <p>
                    Prediga si el número total de goles marcados por ambos equipos durante el partido resultan en un número par o impar.
                </p>
                <p>
                    Las apuestas son determinadas por la suma del total de goles (resultando en un número par o impar).
                </p>
                <p>
                    Cualquier partido terminado empatado 0-0 se considerará como numero par.
                </p>
                <p>Apuesta valida únicamente para el tiempo reglamentario.</p>
                <p>
                    Si un partido es interrumpido o pospuesto, todas las apuestas que no estén resueltas serán canceladas a no ser que el mercado ya haya sido determinado.
                </p>
                <p><span>Juego - Total</span></p>
                <p>Sus opciones de apuesta son: Arriba; Abajo.</p>
                <p>
                    Tiempo extra no esta incluido, a menos que se indique lo contrario
                </p>
                <p>
                    Prediga si el total de goles marcados durante el partido será arriba o abajo del número especificado.
                </p>
                <p>Los penales se consideran parte del tiempo extra.</p>
                <p>
                    Si el tiempo extra esta incluido, sin importar el número de goles marcados durante los lanzamientos de tiro penal, SOLO 1 gol será dado al equipo ganador.
                </p>
                <p>
                    Si un partido es interrumpido o pospuesto, todas las apuestas que no estén resueltas serán canceladas a no ser que el mercado ya haya sido determinado.
                </p>
                <p><span>Juego - Total De Goles (VISITA)</span></p>
                <p>Sus opciones de apuesta son: 0; 1; 2; 3+ goles.</p>
                <p>
                    La apuesta consiste en el número exacto de goles que el equipo visitante anotará en el juego.
                </p>
                <p>Apuesta valida únicamente para el tiempo reglamentario.</p>
                <p>
                    Si un partido es interrumpido o pospuesto, todas las apuestas que no estén resueltas serán canceladas a no ser que el mercado ya haya sido determinado.
                </p>
                <p><span>X Periodo - Total De Goles (VISITANTE)</span></p>
                <p>Sus opciones de apuesta son: 0, 1, 2, 3+ goles.</p>
                <p>
                    La apuesta consiste en cuantos goles exactamente el equipo visitante marcará en el periodo en específico.
                </p>
                <p>
                    Solo goles marcados durante el periodo en específico son considerados para propósitos de esta apuesta.
                </p>
                <p>El tercer periodo NO incluye tiempo extra.</p>
                <p>
                    Si un partido es interrumpido o pospuesto, todas las apuestas que no estén resueltas serán canceladas a no ser que el mercado ya haya sido determinado.
                </p>
            </Collapsible>
            <Collapsible title={"LINEAS DE GANE"}>
                <p><span>LINEAS DE GANE</span></p>
                <p><span>Juego - Linea De Gane</span></p>
                <p><span>Juego - Línea de Dinero</span></p>
                <p>Sus opciones de apuesta son: Local; Visitante.</p>
                <p>Prediga el ganador del partido, Empate = Sin acción.</p>
                <p>Apuesta valida únicamente para el tiempo reglamentario.</p>
                <p>
                    Si un partido es interrumpido o pospuesto, todas las apuestas que no estén resueltas serán canceladas a no ser que el mercado ya haya sido determinado.
                </p>
                <p><span>Quien Gana El Periodo (X)?</span></p>
                <p>Sus opciones de apuesta son: Local; Empate; Visitante.</p>
                <p>Prediga el equipo que ganará el periodo en específico.</p>
                <p>
                    El periodo relevante debe ser completado para que las apuestas tengan acción.
                </p>
                <p>El tercer periodo NO incluye tiempo extra.</p>
                <p>
                    Goles anotados en periodos diferentes al especificado no cuentan para esta apuesta.
                </p>
                <p><span>Cual Equipo Va A Ganar El Juego (Incluye Penales Y TE)</span></p>
                <p>Sus opciones de apuesta son: Local; Visitante.</p>
                <p>
                    La apuesta consiste en predecir el equipo que ganará el partido de contado.
                </p>
                <p>Tiempo Extra Incluido.</p>
                <p>Los penales se consideran parte del tiempo extra.</p>
                <p>
                    Si un partido es interrumpido o pospuesto, todas las apuestas que no estén resueltas serán canceladas.
                </p>
            </Collapsible>
            <Collapsible title={"OPCIONES ADICIONALES"}>
                <p><span>OPCIONES ADICIONALES</span></p>
                <p><span>Quien Gana El Resto Del Encuentro? (Marcador Actual X:X)</span></p>
                <p>Sus opciones de apuesta son: Local; Empate: Visitante.</p>
                <p>
                    El Marcador actual enlista a la Casa primero, Visita segundo.
                </p>
                <p>
                    Prediga el equipo que ganará el restante del partido, o un empate.
                </p>
                <p>
                    La apuesta se basa en goles marcados en el periodo en que la apuesta fue aceptada y el final del tiempo reglamentario.
                </p>
                <p>
                    Cualquier gol marcado antes de que la apuesta fuera aceptada, no cuenta para la misma.
                </p>
                <p>Apuesta valida únicamente para el tiempo reglamentario.</p>
                <p>
                    Si un partido es interrumpido o pospuesto, todas las apuestas que no estén resueltas serán canceladas a no ser que el mercado ya haya sido determinado.
                </p>
                <p><span>Cual Equipo Va A Ganar Los Tiros De Penal?</span></p>
                <p>Sus opciones de apuesta son: Local; Visitante.</p>
                <p>
                    Prediga el equipo que ganará el lanzamiento de tiros penal al final del tiempo reglamentario.
                </p>
                <p>
                    Solo goles marcados durante los lanzamientos de tiro penal serán considerados en la apuesta.
                </p>
                <p>
                    Si un partido es interrumpido o pospuesto, todas las apuestas que no estén resueltas serán canceladas a no ser que el mercado ya haya sido determinado.
                </p>
                <p><span>Quien Gana El Tiempo Extra</span></p>
                <p>Quién ganará el tiempo extra? ( Marcador Actual X:X )</p>
                <p>Sus opciones de apuesta son: Local; Empate: Visitante.</p>
                <p>Prediga el equipo que ganará el tiempo extra o el empate.</p>
                <p>
                    El tiempo extra debe ser completado para que su apuesta tenga acción.
                </p>
                <p>
                    Solo goles marcados en el tiempo extra cuentan para propósitos de esta apuesta.
                </p>
                <p><span>Juego - Siguiente Equipo En Anotar (Marcador Actual X:X)</span></p>
                <p>Sus opciones de apuesta son: Local; No Gol: Visitante.</p>
                <p>
                    El Marcador actual enlista a la Casa primero, Visita segundo.
                </p>
                <p>
                    Prediga el siguiente equipo en anotar durante el partido o No Gol.
                </p>
                <p>
                    Cualquier gol marcado antes de que la apuesta fuera aceptada, no cuenta para la misma.
                </p>
                <p>Apuesta valida únicamente para el tiempo reglamentario.</p>
                <p>
                    Si un partido es interrumpido o pospuesto, todas las apuestas que no estén resueltas serán canceladas a no ser que el mercado ya haya sido determinado.
                </p>
                <p>
                    <span> Lanzamientos De Penal - Equipo Que Anota El Próximo Gol (Marcador Actual X:X)</span>
                </p>
                <p>Penales - Siguiente equipo en anotar ( Marcador Actual X:X )</p>
                <p>Sus opciones de apuesta son: Local; Visitante.</p>
                <p>
                    El Marcador actual enlista a la Casa primero, Visita segundo.
                </p>
                <p>
                    Prediga el siguiente equipo en anotar durante los lanzamientos de tiro penal.
                </p>
                <p>
                    Cualquier gol marcado antes de que la apuesta fuera aceptada, no cuenta para la misma.
                </p>
                <p>
                    Apuesta valida únicamente para los lanzamientos de tiro penal.
                </p>
                <p>
                    Si un partido es interrumpido o pospuesto, todas las apuestas que no estén resueltas serán canceladas a no ser que el mercado ya haya sido determinado.
                </p>
                <p><span>Doble Oportunidad</span></p>
                <p><span>Doble Chance</span></p>
                <p>
                    Sus opciones de apuesta son: Local o Empate; Local o Visitante; Empate o Visitante.
                </p>
                <p>
                    Este tipo de apuesta le ofrece la oportunidad de apostar en 2 posibles resultados del partido en una sola apuesta.
                </p>
                <p>
                    Esta apuesta le posibilita a que usted escoja 2 resultados de 3 posibles.
                </p>
                <p>
                    El doble chance es similar a apuestas tipo 1X2 excepto que el jugador en 2 resultados de 3 posibles, si uno de esos resultados escogidos es alcanzado, la apuesta será ganadora.
                </p>
                <p>Apuesta valida únicamente para el tiempo reglamentario.</p>
                <p>
                    Si un partido es interrumpido o pospuesto, todas las apuestas que no estén resueltas serán canceladas a no ser que el mercado ya haya sido determinado.
                </p>
                <p>
                    <span>2ndo Periodo - Quien Gana El Resto Del Partido? (Marcador Actual X:X)</span>
                </p>
                <p>Sus opciones de apuesta son: Local; Empate; Visitante.</p>
                <p>
                    El Marcador actual enlista a la Casa primero, Visita segundo.
                </p>
                <p>
                    Prediga el equipo que ganará el restante del segundo periodo, o el empate.
                </p>
                <p>
                    La apuesta incluye únicamente goles marcados desde que la apuesta fue aceptada hasta el término del segundo periodo.
                </p>
                <p>
                    Cualquier gol anotado antes de que la apuesta fuera aceptada no cuentan para propósitos de la misma.
                </p>
                <p>Apuesta valida únicamente para el segundo periodo</p>
                <p>
                    El segundo periodo debe ser completado para que las apuestan tengan acción.
                </p>
                <p>
                    <span>
                        Juego - Marcador Correcto Adicional (Marcador Actual X:X) (C:V)
                    </span>
                </p>
                <p>
                    Juego - Marcador Correcto Adicional ( Marcador Actual X:X ) (L:V)
                </p>
                <p>
                    Sus opciones de apuesta son: 0:0; 1:0; 0:1; 1:1; 2:0; 0:2; 2:1; 1:2; 2:2; etc.
                </p>
                <p>Solo los 10 resultados más reales estarán activos.</p>
                <p>
                    Si la opción ganadora no está enlistada, todas las apuestas en este mercado serán canceladas.
                </p>
                <p>
                    El Marcador actual enlista a la Casa primero, Visita segundo.
                </p>
                <p>
                    Prediga el marcado correcto al final del tiempo reglamentario. Las apuestas se determinan acorde al marcador actual.
                </p>
                <p>Apuesta valida únicamente para el tiempo reglamentario.</p>
                <p>
                    Si un partido es interrumpido o pospuesto, todas las apuestas en este mercado que no estén resueltas serán canceladas.
                </p>
                <p>Portería Imbatida (Casa)</p>
                <p>Malla en blanco (Local)</p>
                <p>Sus opciones de apuesta son: Si; No.</p>
                <p>
                    La apuesta consiste en que el equipo local no reciba goles durante el partido.
                </p>
                <p>Apuesta valida únicamente para el tiempo reglamentario.</p>
                <p>
                    Si un partido es interrumpido o pospuesto, todas las apuestas que no estén resueltas serán canceladas a no ser que el mercado ya haya sido determinado.
                </p>
                <p>Portería Imbatida (Visitante)</p>
                <p>Malla en blanco (Visitante)</p>
                <p>Sus opciones de apuesta son: Si; No.</p>
                <p>
                    La apuesta consiste en que el equipo visitante no reciba goles durante el partido.
                </p>
                <p>Apuesta valida únicamente para el tiempo reglamentario.</p>
                <p>
                    Si un partido es interrumpido o pospuesto, todas las apuestas que no estén resueltas serán canceladas a no ser que el mercado ya haya sido determinado.
                </p>
                <p><span>Gana El Juego Y Ambos Equipos Anotan</span></p>
                <p>Ganador y ambos equipos anotarán?</p>
                <p>
                    Sus opciones de apuesta son: Local y Si; Local y No; Empate y Si; Empate y No; Visitante y Si; Visitante y No.
                </p>
                <p>
                    Prediga, en una misma apuesta, quien será el ganador del partido y si ambos equipos anotarán en el partido.
                </p>
                <p>Apuesta valida únicamente para el tiempo reglamentario.</p>
                <p>
                    Si un partido es interrumpido o pospuesto, todas las apuestas que no estén resueltas serán canceladas.
                </p>
                <p><span>Gana El Juego Y Anotan El 1er Gol</span></p>
                <p>Ganador y quién anota el primer gol?</p>
                <p>
                    Sus opciones de apuesta son: Gol Local y Local; Gol Local y Empate; Gol Local y Visitante; Gol Visitante y Local; Gol Visitante y Empate; Gol Visitante y Visitante; Ninguno.
                </p>
                <p>
                    Prediga al ganador del partido y cual equipo anotará el primer gol en una misma apuesta.
                </p>
                <p>Apuesta valida únicamente para el tiempo reglamentario.</p>
                <p>
                    Si un partido es interrumpido o pospuesto, todas las apuestas que no estén resueltas serán canceladas.
                </p>
                <p>Doble Oportunidad En El Periodo X</p>
                <p>Doble Chance para Xth periodo</p>
                <p>
                    Sus opciones de apuesta son: Local y Empate; Local y Visitante; Empate y Visitante.
                </p>
                <p>
                    Este tipo de apuesta le ofrece la oportunidad de apostar en 2 posibles resultados de un periodo en una sola apuesta.
                </p>
                <p>
                    Esta apuesta le posibilita a que usted escoja 2 resultados de 3 posibles del periodo.
                </p>
                <p>
                    El doble chance es similar a apuestas tipo 1X2 excepto que el jugador en 2 resultados de 3 posibles, si uno de esos resultados escogidos es alcanzado, la apuesta será ganadora.
                </p>
                <p>Apuesta valida únicamente para el periodo en específico.</p>
                <p>El tercer periodo NO incluye Tiempo Extra.</p>
                <p>
                    El periodo debe ser completado para que las apuestas tengan acción.
                </p>
                <p><span>Periodo X - Ambos Equipos Va A Anotar?</span></p>
                <p>Sus opciones de apuesta son: Si; No.</p>
                <p>
                    Prediga si ambos equipos anotarán o no en el periodo en específico.
                </p>
                <p>
                    Solo goles marcados durante el periodo en específico serán considerados para propósitos de esta apuesta.
                </p>
                <p>El tercer periodo NO incluye Tiempo Extra.</p>
                <p>
                    Si un partido es interrumpido o pospuesto, todas las apuestas que no estén resueltas serán canceladas a no ser que el mercado ya haya sido determinado.
                </p>
                <p><span>XPeriodo - Portería Imbatida (Visitante)</span></p>
                <p>Sus opciones de apuesta son: Si; No.</p>
                <p>
                    La apuesta consiste en que el equipo visitante no reciba goles durante el periodo en cuestión.
                </p>
                <p>Apuesta valida únicamente para el periodo en específico.</p>
                <p>
                    Si un partido es interrumpido o pospuesto, todas las apuestas que no estén resueltas serán canceladas a no ser que el mercado ya haya sido determinado.
                </p>
                <p><span>Periodo X - Marcador Exacto (C:V)</span></p>
                <p>Xth Periodo - Marcador Correcto (H:A)</p>
                <p>
                    Sus opciones de apuesta son: 0:0; 1:0; 0:1; 1:1; 2:0; 0:2; 2:1; 1:2; 2:2; otro.
                </p>
                <p>
                    Prediga el marcador correcto al final del periodo en específico.
                </p>
                <p>
                    Solo goles marcados durante el periodo en específico son considerados para propósitos de esta apuesta.
                </p>
                <p>El tercer periodo NO incluye tiempo extra.</p>
                <p>
                    Si un partido es interrumpido o pospuesto, todas las apuestas que no estén resueltas serán canceladas a no ser que el mercado ya haya sido determinado.
                </p>
                <p>(Casa) Para Ganar Todos Los Periodos</p>
                <p>(Local) ganará todos los periodos?</p>
                <p>Sus opciones de apuesta son: Si; No.</p>
                <p>
                    La apuesta consiste en la confirmación de si el equipo Local ganará todos los periodos del partido.
                </p>
                <p>Apuesta valida únicamente para el tiempo reglamentario.</p>
                <p>
                    Si un partido es interrumpido o pospuesto, todas las apuestas que no estén resueltas serán canceladas.
                </p>
                <p>(Visitante) Para Ganar Todos Los Periodos</p>
                <p>(Visitante) ganará todos los periodos</p>
                <p>Sus opciones de apuesta son: Si; No.</p>
                <p>
                    La apuesta consiste en la confirmación de si el equipo Visitante ganará todos los periodos del partido.
                </p>
                <p>Apuesta valida únicamente para el tiempo reglamentario.</p>
                <p>
                    Si un partido es interrumpido o pospuesto, todas las apuestas que no estén resueltas serán canceladas.
                </p>
                <p>(Home) To Win Either Period</p>
                <p>(Local) ganará algún periodo</p>
                <p>Sus opciones de apuesta son: Si; No.</p>
                <p>
                    La apuesta consiste en la confirmación de si el equipo Local ganará algún periodo del partido.
                </p>
                <p>Apuesta valida únicamente para el tiempo reglamentario.</p>
                <p>
                    Si un partido es interrumpido o pospuesto, todas las apuestas que no estén resueltas serán canceladas a no ser que el mercado ya haya sido determinado.
                </p>
                <p>(Away) To Win Either Period</p>
                <p>(Visitante) ganará algún periodo</p>
                <p>Sus opciones de apuesta son: Si; No.</p>
                <p>
                    La apuesta consiste en la confirmación de si el equipo Visitante ganará algún periodo del partido.
                </p>
                <p>Apuesta valida únicamente para el tiempo reglamentario.</p>
                <p>
                    Si un partido es interrumpido o pospuesto, todas las apuestas que no estén resueltas serán canceladas a no ser que el mercado ya haya sido determinado.
                </p>
                <p>(Away) To Score In All Periods</p>
                <p>(Visitante) marcará en todos los periodos</p>
                <p>Sus opciones de apuesta son: Si; No.</p>
                <p>
                    La apuesta consiste en la confirmación de si el equipo Visitante anotará en todos los periodos del partido.
                </p>
                <p>Apuesta valida únicamente para el tiempo reglamentario.</p>
                <p>
                    Si un partido es interrumpido o pospuesto, todas las apuestas que no estén resueltas serán canceladas a no ser que el mercado ya haya sido determinado.
                </p>
                <p>Will All Periods Go Over X Goals?</p>
                <p>Todos los periodos se irán Arriba de X goles?</p>
                <p>Sus opciones de apuesta son: Si; No.</p>
                <p>
                    La apuesta consiste en la confirmación de si la suma, en cada periodo, de todos los goles por ambos equipos, se irá Arriba del número especificado.
                </p>
                <p>Apuesta valida únicamente para el tiempo reglamentario.</p>
                <p>
                    Si un partido es interrumpido o pospuesto, todas las apuestas que no estén resueltas serán canceladas a no ser que el mercado ya haya sido determinado.
                </p>
                <p>Will All Periods Go Under X Goals?</p>
                <p>Todos los periodos se irán Abajo de X goles?</p>
                <p>Sus opciones de apuesta son: Si; No.</p>
                <p>
                    La apuesta consiste en la confirmación de si la suma, en cada periodo, de todos los goles por ambos equipos, se irá ABAJO del número especificado.
                </p>
                <p>Apuesta valida únicamente para el tiempo reglamentario.</p>
                <p>
                    Si un partido es interrumpido o pospuesto, todas las apuestas que no estén resueltas serán canceladas a no ser que el mercado ya haya sido determinado.
                </p>
                <p>Período Con Marcador Más Alto</p>
                <p>Periodo con el marcador más alto</p>
                <p>
                    Sus opciones de apuesta son: 1st Periodo; 2nd Periodo; 3rd Periodo; Empate.
                </p>
                <p>
                    La apuesta consiste en el periodo en donde más goles se marquen o un empate.
                </p>
                <p>
                    Si 2 o más periodos poseen igual número mayor de goles anotados, el empate será el ganador.
                </p>
                <p>Apuesta valida únicamente para el tiempo reglamentario.</p>
                <p>
                    Si un partido es interrumpido o pospuesto, todas las apuestas que no estén resueltas serán canceladas.
                </p>
                <p>Highest Scoring Period For (home)</p>
                <p>Periodo con el marcador más alto (Local)</p>
                <p>
                    Sus opciones de apuesta son: 1st Periodo; 2nd Periodo; 3rd Periodo; Empate.
                </p>
                <p>
                    La apuesta consiste en el periodo en donde más goles marque el equipo Local o un empate.
                </p>
                <p>
                    Si 2 o más periodos poseen igual número mayor de goles anotados por el equipo local, el empate será el ganador.
                </p>
                <p>Apuesta valida únicamente para el tiempo reglamentario.</p>
                <p>
                    Si un partido es interrumpido o pospuesto, todas las apuestas que no estén resueltas serán canceladas a no ser que el mercado ya haya sido determinado.
                </p>
                <p>Highest Scoring Period For (Away)</p>
                <p>Periodo con el marcador más alto (Visitante)</p>
                <p>
                    Sus opciones de apuesta son: 1st Periodo; 2nd Periodo; 3rd Periodo; Empate.
                </p>
                <p>
                    La apuesta consiste en el periodo en donde más goles marque el equipo Visitante o un empate.
                </p>
                <p>
                    Si 2 o más periodos poseen igual número mayor de goles anotados por el equipo visita, el empate será el ganador.
                </p>
                <p>Apuesta valida únicamente para el tiempo reglamentario.</p>
                <p>
                    Si un partido es interrumpido o pospuesto, todas las apuestas que no estén resueltas serán canceladas.
                </p>
                <p><span>Juego - Número Exacto De Goles (Incluye Penales Y TE)</span></p>
                <p>
                    Sus opciones de apuesta son: 1 o menos (&lt;=1), 2, 3, 4, 5, 6, 7, 8,9+
                </p>
                <p>
                    Prediga el número exacto de goles marcados por ambos equipos en el partido.
                </p>
                <p>Tiempo Extra Incluido.</p>
                <p>Los penales se consideran parte del tiempo extra.</p>
                <p>
                    Sin importar el número de goles marcados durante los lanzamientos de tiro penal, SOLO 1 gol será dado al equipo ganador.
                </p>
                <p>
                    Si un partido es interrumpido o pospuesto, todas las apuestas que no estén resueltas serán canceladas a no ser que el mercado ya haya sido determinado.
                </p>
                <p>Game - Who Will Score? (OT And Penalties Included)</p>
                <p>Juego - Quién anotará? (Tiempo Extra y penales incluidos)</p>
                <p>
                    Sus opciones de apuesta son: ambos; solo local; solo visitante; ninguno.
                </p>
                <p>
                    Prediga quien marcará goles en el partido; si cualquier equipo, ambos o ninguno.
                </p>
                <p>Tiempo Extra Incluido.</p>
                <p>Los penales se consideran parte del tiempo extra.</p>
                <p>
                    Sin importar el número de goles marcados durante los lanzamientos de tiro penal, SOLO 1 gol será dado al equipo ganador.
                </p>
                <p>
                    Si un partido es interrumpido o pospuesto, todas las apuestas que no estén resueltas serán canceladas.
                </p>
                <p><span>Juego - Portería Imbatida (Casa) (Incluye TE Y Penales)</span></p>
                <p>
                    Juego - Malla en blanco (Local) (Tiempo Extra y penales incluidos)
                </p>
                <p>Sus opciones de apuesta son: Si; No.</p>
                <p>
                    La apuesta consiste en que el equipo local no reciba goles durante el juego ( Tiempo extra y penales incluidos).
                </p>
                <p>Tiempo Extra Incluido.</p>
                <p>Los penales se consideran parte del tiempo extra.</p>
                <p>
                    Sin importar el número de goles marcados durante los lanzamientos de tiro penal, SOLO 1 gol será dado al equipo ganador.
                </p>
                <p>
                    Si un partido es interrumpido o pospuesto, todas las apuestas que no estén resueltas serán canceladas.
                </p>
                <p><span>Juego - Portería Imbatida (Visitante) (Incluye TE Y Penales)</span></p>
                <p>
                    Juego - Malla en blanco (Visitante) (Tiempo Extra y penales incluidos)
                </p>
                <p>Sus opciones de apuesta son: Si; No.</p>
                <p>
                    La apuesta consiste en que el equipo visita no reciba goles durante el juego ( Tiempo extra y penales incluidos).
                </p>
                <p>Tiempo Extra Incluido.</p>
                <p>Los penales se consideran parte del tiempo extra.</p>
                <p>
                    Sin importar el número de goles marcados durante los lanzamientos de tiro penal, SOLO 1 gol será dado al equipo ganador.
                </p>
                <p>
                    Si un partido es interrumpido o pospuesto, todas las apuestas que no estén resueltas serán canceladas.
                </p>
                <p><span>Juego - Marcador Exacto (Incluye Penales Y TE)</span></p>
                <p>
                    Sus opciones de apuesta son: 1:0; 2:0; 3:0; 4:0; 5:0; 0:1; 2:1; 3:1; 4:1; 5:1; 0:2; 1:2; 3:2; 4:2; 5:2; 0:3; 1:3; 2:3; 4:3; 5:3; 0:4; 1:4; 2:4; 3:4; 5:4; 0:5; 1:5; 2:5; 3:5; 4:5; otro.
                </p>
                <p>Prediga el marcador exacto al final del partido.</p>
                <p>Tiempo Extra Incluido.</p>
                <p>Los penales se consideran parte del tiempo extra.</p>
                <p>
                    Sin importar el número de goles marcados durante los lanzamientos de tiro penal, SOLO 1 gol será dado al equipo ganador.
                </p>
                <p>
                    Si un partido es interrumpido o pospuesto, todas las apuestas que no estén resueltas serán canceladas a no ser que el mercado ya haya sido determinado.
                </p>
                <p>
                    <span>Juego - Gana El Juego Y Ambos Equipos Anotan (Incluye Penales Y TE)</span>
                </p>
                <p>
                    Juego - Ganador y ambos equipos anotarán? (Tiempo Extra y penales incluidos)
                </p>
                <p>
                    Sus opciones de apuesta son: Local y Si; Local y No; Visitante y Si; Visitante y No; No.
                </p>
                <p>
                    Prediga, en una misma apuesta, quien será el ganador del partido y si ambos equipos anotarán en el partido.
                </p>
                <p>Tiempo Extra Incluido.</p>
                <p>Los penales se consideran parte del tiempo extra.</p>
                <p>
                    Sin importar el número de goles marcados durante los lanzamientos de tiro penal, SOLO 1 gol será dado al equipo ganador.
                </p>
                <p>
                    Si un partido es interrumpido o pospuesto, todas las apuestas que no estén resueltas serán canceladas.
                </p>
                <p><span>Gana El Juego Y Anotan El 1er Gol (Incluye Penales Y TE)</span></p>
                <p>
                    Juego - Ganador y quién anota el primer gol? (Tiempo Extra y penales incluidos)
                </p>
                <p>
                    Sus opciones de apuesta son: Gol Local y Local; Gol Local y Visitante; Gol Visitante y Local; Gol Visitante y Visitante.
                </p>
                <p>
                    Prediga, en una misma apuesta , al ganador del partido y cual equipo anotará el primer gol.
                </p>
                <p>Tiempo Extra Incluido.</p>
                <p>Los penales se consideran parte del tiempo extra.</p>
                <p>
                    Sin importar el número de goles marcados durante los lanzamientos de tiro penal, SOLO 1 gol será dado al equipo ganador.
                </p>
                <p>
                    Si un partido es interrumpido o pospuesto, todas las apuestas que no estén resueltas serán canceladas.
                </p>
                <p><span>1er Periodo Y Gana El Juego</span></p>
                <p>
                    Sus opciones de apuesta son: Local y Local; Local y Empate; Local y Visitante; Empate y Local, Empate y Empate; Empate y Visitante; Visitante y Local; Visitante y Empate; Visitante y Visitante.
                </p>
                <p>
                    Prediga, en una misma apuesta, el ganador del primer periodo y el ganador del partido.
                </p>
                <p>Apuesta valida únicamente para el tiempo reglamentario.</p>
                <p>
                    Si un partido es interrumpido o pospuesto, todas las apuestas que no estén resueltas serán canceladas.
                </p>
                <p><span>XPeriodo - Portería Imbatida (Casa)</span></p>
                <p>Sus opciones de apuesta son: Si; No.</p>
                <p>
                    La apuesta consiste en que el equipo casa no reciba goles durante el periodo en cuestión.
                </p>
                <p>Apuesta valida únicamente para el periodo en específico.</p>
                <p>
                    Si un partido es interrumpido o pospuesto, todas las apuestas que no estén resueltas serán canceladas a no ser que el mercado ya haya sido determinado.
                </p>
                <p><span>1er Periodo Y Gana El Juego (OT And Penalties Included)</span></p>
                <p>
                    Sus opciones de apuesta son: Local y Local; Local y Visitante; Empate y Local, Empate y Visitante; Visitante y Local; Visitante y Visitante.
                </p>
                <p>
                    Prediga, en una misma apuesta, el ganador del primer periodo y el ganador del partido.
                </p>
                <p>Tiempo Extra Incluido.</p>
                <p>Los penales se consideran parte del tiempo extra.</p>
                <p>
                    Sin importar el número de goles marcados durante los lanzamientos de tiro penal, SOLO 1 gol será dado al equipo ganador.
                </p>
                <p>
                    Si un partido es interrumpido o pospuesto, todas las apuestas que no estén resueltas serán canceladas.
                </p>
                <p><span>Juego - Número Exacto De Goles</span></p>
                <p>Sus opciones de apuesta son: 0, 1, 2, 3, 4, 5, 6, 7, 8,9+</p>
                <p>
                    Prediga el número exacto de goles marcados por ambos equipos en el partido.
                </p>
                <p>Apuesta valida únicamente para el tiempo reglamentario.</p>
                <p>
                    Si un partido es interrumpido o pospuesto, todas las apuestas que no estén resueltas serán canceladas.
                </p>
                <p>(Equipo Visitante) Se Cancela</p>
                <p>(Visitante) Sin Acción</p>
                <p>Sus opciones de apuesta son: Local; Empate.</p>
                <p>
                    Prediga la opción ganadora del partido, Victoria Visitante = sin acción.
                </p>
                <p>Apuesta valida únicamente para el tiempo reglamentario.</p>
                <p>
                    Si un partido es interrumpido o pospuesto, todas las apuestas que no estén resueltas serán canceladas.
                </p>
                <p>(Equipo Casa) Se Cancela</p>
                <p>(Local) Sin Acción</p>
                <p>Sus opciones de apuesta son: Empate; Visitante.</p>
                <p>
                    Prediga la opción ganadora del partido, Victoria Local = sin acción.
                </p>
                <p>Apuesta valida únicamente para el tiempo reglamentario.</p>
                <p>
                    Si un partido es interrumpido o pospuesto, todas las apuestas que no estén resueltas serán canceladas.
                </p>
                <p>(Home) To Score In All Periods</p>
                <p>(Local) marcará en todos los periodos</p>
                <p>Sus opciones de apuesta son: Si; No.</p>
                <p>
                    La apuesta consiste en la confirmación de si el equipo Local anotará en todos los periodos del partido.
                </p>
                <p>Apuesta valida únicamente para el tiempo reglamentario.</p>
                <p>
                    Si un partido es interrumpido o pospuesto, todas las apuestas que no estén resueltas serán canceladas a no ser que el mercado ya haya sido determinado.
                </p>
                <p>
                    <span>1er Periodo - Quien Gana El Resto Del Partido? (Marcador Actual X:X)</span>
                </p>
                <p>Sus opciones de apuesta son: Local; Empate; Visitante.</p>
                <p>
                    El Marcador actual enlista a la Casa primero, Visita segundo.
                </p>
                <p>
                    Prediga el equipo que ganará el restante del primer periodo, o el empate.
                </p>
                <p>
                    La apuesta incluye únicamente goles marcados desde que la apuesta fue aceptada hasta el término del primer periodo.
                </p>
                <p>
                    Cualquier gol anotado antes de que la apuesta fuera aceptada no cuentan para propósitos de la misma.
                </p>
                <p>Apuesta valida únicamente para el primer periodo.</p>
                <p>
                    El primer periodo debe ser completado para que las apuestan tengan acción.
                </p>
                <p><span>Juego - Marcador Exacto (C:V)</span></p>
                <p><span>Xth Periodo - Marcador Correcto (H:A)</span></p>
                <p>
                    Sus opciones de apuesta son: 0:0; 1:0; 2:0; 3:0; 4:0; 5:0; 0:1; 1:1; 2:1; 3:1; 4:1; 5:1; 0:2; 1:2; 2:2; 3:2; 4:2; 5:2; 0:3; 1:3; 2:3; 3:3; 4:3; 5:3; 0:4; 1:4; 2:4; 3:4; 4:4; 5:4; 0:5; 1:5; 2:5; 3:5; 4:5; 5:5; otro.
                </p>
                <p>Prediga el marcador correcto al final del partido.</p>
                <p>Apuesta valida únicamente para el tiempo reglamentario.</p>
                <p>
                    Si un partido es interrumpido o pospuesto, todas las apuestas que no estén resueltas serán canceladas a no ser que el mercado ya haya sido determinado.
                </p>
                <p>
                    <span>Tiempo Extra - Siguiente Equipo En Anotar (Marcador Actual X:X)</span>
                </p>
                <p>Sus opciones de apuesta son: Local; No Gol: Visitante.</p>
                <p>
                    El Marcador actual enlista a la Casa primero, Visita segundo.
                </p>
                <p>
                    Prediga el siguiente equipo en anotar durante el Tiempo Extra o No Gol.
                </p>
                <p>
                    Cualquier gol marcado antes de que la apuesta fuera aceptada, no cuenta para la misma.
                </p>
                <p>Apuesta valida únicamente para el tiempo extra.</p>
                <p>
                    Si un partido es interrumpido o pospuesto, todas las apuestas que no estén resueltas serán canceladas a no ser que el mercado ya haya sido determinado.
                </p>
                <p><span>Quien Va A Anotar En Tiempo Reglamentario?</span></p>
                <p>
                    Sus opciones de apuesta son: ambos; solo local; solo visitante; ninguno.
                </p>
                <p>Prediga quien marcará goles en el tiempo reglamentario..</p>
                <p>
                    Si un partido es interrumpido o pospuesto, todas las apuestas que no estén resueltas serán canceladas.
                </p>
                <p><span>Van A Anotar Ambos Equipos?</span></p>
                <p>Sus opciones de apuesta son: Si; No.</p>
                <p>Prediga si ambos equipos anotaran o no en el partido.</p>
                <p>Apuesta valida únicamente para el tiempo reglamentario.</p>
                <p>
                    Si un partido es interrumpido o pospuesto, todas las apuestas que no estén resueltas serán canceladas.
                </p>
                <p><span>Margen De Victoria</span></p>
                <p>
                    Sus opciones de apuesta son: Local por 3 o más; Local por 2; Local por 1; 0 (Empate); Visitante por 3 o más; Visitante por 2; Visitante por 1.
                </p>
                <p>
                    Prediga el margen de victoria por el cual un equipo en específico gana el partido.
                </p>
                <p>
                    La apuesta consiste en la diferencia de goles por la cual el equipo ganador derrota al contrario.
                </p>
                <p>Apuesta valida únicamente para el tiempo reglamentario.</p>
                <p>
                    Si un partido es interrumpido o pospuesto, todas las apuestas que no estén resueltas serán canceladas.
                </p>
                <p><span>Periodo X - Quien Va A Anotar?</span></p>
                <p>
                    Sus opciones de apuesta son: ambos; solo Local; solo Visitante; ninguno.
                </p>
                <p>
                    Prediga quien marcará goles en el periodo en específico, si solo el loca, solo el visitante, si ambos o ninguno.
                </p>
                <p>
                    Solo goles marcados durante el periodo en específico serán considerados para propósitos de esta apuesta.
                </p>
                <p>El tercer periodo NO incluye Tiempo Extra.</p>
                <p>
                    Si un partido es interrumpido o pospuesto, todas las apuestas que no estén resueltas serán canceladas a no ser que el mercado ya haya sido determinado.
                </p>
            </Collapsible>
            <Collapsible title={"APUESTAS PRINCIPALES"}>
                <p><span>APUESTAS PRINCIPALES</span></p>
                <p>Juego - Total</p>
                <p>Sus opciones de apuesta son: Arriba; Abajo.</p>
                <p>
                    Prediga si el total de goles marcados durante el partido será arriba o abajo del número especificado.
                </p>
                <p>Apuesta valida únicamente para el tiempo reglamentario.</p>
                <p>
                    Si un partido es interrumpido o pospuesto, todas las apuestas que no estén resueltas serán canceladas a no ser que el mercado ya haya sido determinado.
                </p>
                <p><span>Juego - Resultado Final</span></p>
                <p>Juego - Línea de Dinero (3 Way)</p>
                <p>Sus opciones de apuesta son: Local;Empate; Visitante.</p>
                <p>
                    Prediga el ganador del partido en el tiempo reglamentario o el Empate
                </p>
                <p>
                    Si un partido es interrumpido o pospuesto, todas las apuestas que no estén resueltas serán canceladas.
                </p>
                <p><span>Juego - Handicap</span></p>
                <p>Juego - Hándicap (XX)</p>
                <p>Sus opciones de apuesta son: Local; Visitante.</p>
                <p>Este mercado es un hándicap para todo el partido.</p>
                <p>
                    El equipo con el signo más (+) en el hándicap recibe x goles de ventaja contra el equipo con el signo menos (-) en el hándicap.
                </p>
                <p>Apuesta valida únicamente para el tiempo reglamentario.</p>
                <p>
                    Si un partido es interrumpido o pospuesto, todas las apuestas que no estén resueltas serán canceladas a no ser que el mercado ya haya sido determinado.
                </p>
            </Collapsible>
        </section>
    )
}