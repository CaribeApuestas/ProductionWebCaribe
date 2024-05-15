import Collapsible from "@/app/_components/Collapsible";
import styles from '../styles.module.css';
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Reglas para apuestas BASKETBALL EN VIVO | CaribeApuesta",
    description: "Descubre las reglas esenciales de las apuestas en vivo para el BASKETBALL - Tu guía definitiva para apostar con confianza y responsabilidad. Aprende los términos clave y disfruta de una experiencia de apuestas segura y emocionante. ¡Regístrate e ingresa ahora para comenzar!",
    metadataBase: new URL("http://localhost:3000/"),
    keywords: ['Reglas de apuestas en vivo para el BASKETBALL', 'Reglas de apuestas en vivo para el BASKETBALL', 'Reglas de apuestas en vivo para el BASKETBALL en caribeapuesta'],
    openGraph: {
        title: "Reglas para apuestas BASKETBALL EN VIVO",
        description: "Descubre las reglas esenciales de las apuestas en vivo para el BASKETBALL - Tu guía definitiva para apostar con confianza y responsabilidad. Aprende los términos clave y disfruta de una experiencia de apuestas segura y emocionante. ¡Regístrate e ingresa ahora para comenzar!",
    }
};

export default function BasketballLive() {
    return (
        <section>
            <h3 className={styles.rulesTitle}>BASKETBALL EN VIVO</h3>
            <Collapsible title={"REGLAS GENERALES. "}>
                <p><span>REGLAS GENERALES PARA BASKETBOL</span></p>
                <p>Reglas Generales de Baloncesto</p>
                <p>
                    Si un partido se suspende después de haber empezado, cualquier apuesta que no sea un gane absoluto se anulará, a menos que el mercado ganador haya sido establecido, en tal caso las apuestas se mantienen.
                </p>
                <p>
                    Las apuestas con un gane absoluto se mantienen siempre y cuando se hayan jugado 43 minutos de un partido de NBA y que se haya declarado un resultado oficial.
                </p>
                <p>
                    Todos los partidos deben comenzar en la fecha prevista para que las apuestas sean válidas. Si un partido se posterga se anularán todas las apuestas. Si se cambia la sede del partido las apuestas que hayan sido colocadas se mantendrán siempre y cuando el equipo local siga siendo designado como tal. Si el equipo casa y visitante listados originalmente se invierten, entonces las apuestas realizadas sobre la base de la lista original se considerarán nulas.
                </p>
                <p>
                    Cuando en el resultado de un mercado de 2 vías se produce un empate, las apuestas serán anuladas, siempre y cuando las probabilidades no hayan sido citadas para el empate.
                </p>
                <p>
                    Tienen que quedar 5 minutos o menos del tiempo programado para que las apuestas sean válidas, a menos que el resultado específico del mercado ya este determinado.
                </p>
                <p>
                    En mercados de 2 vías la regla del empate se aplica a menos que se especifique de otra forma. Lo arriesgado en apuestas individuales se reintegra, y en las múltiples/parlays se trata como una cancelación.
                </p>
                <p>
                    Los mercados no incluyen el tiempo extra a menos que se especifique.
                </p>
            </Collapsible>
            <Collapsible title={"HANDICAP. "}>
                <p><span>HANDICAP</span></p>
                <p><span>4TO CUARTO - HANDICAP (NO INCLUYE TE)</span></p>
                <p>4to Cuarto - Handicap (no incluye tiempo extra)</p>
                <p>Sus opciones de apuesta son Local; Visita</p>
                <p>
                    Pronosticar si uno de los equipos cubrirá los puntos del spread para el 4to cuarto.
                </p>
                <p>Solo cuentan los puntos anotados durante el 4to cuarto.</p>
                <p><span>3ER CUARTO - HANDICAP (XX)</span></p>
                <p>3er Cuarto - Handicap</p>
                <p>Sus opciones de apuesta son Local; Visita</p>
                <p>
                    Pronosticar si uno de los equipos cubrirá los puntos del spread para el 3er cuarto.
                </p>
                <p>Solo los puntos anotados durante el 3er cuarto cuentan.</p>
                <p><span>2NDO CUARTO - HANDICAP (XX)</span></p>
                <p>2do Cuarto - Handicap</p>
                <p>Sus opciones de apuesta son Local; Visita</p>
                <p>
                    Pronosticar si uno de los equipos cubrirá los puntos del spread para el 2do cuarto.
                </p>
                <p>Solo cuentan los puntos anotados durante el 2do cuarto.</p>
                <p><span>1ER CUARTO - HANDICAP (XX)</span></p>
                <p>1er Cuarto - Handicap</p>
                <p>Sus opciones de apuesta son Local; Visita</p>
                <p>
                    Pronosticar si uno de los equipos cubrirá los puntos del spread para el 1er cuarto.
                </p>
                <p>Solo los puntos anotados durante el 1er cuarto cuentan.</p>
                <p><span>1ERA MITAD - HANDICAP (XX)</span></p>
                <p>1er Tiempo - Handicap</p>
                <p>Sus opciones de apuesta son Local; Visita</p>
                <p>
                    Pronosticar si uno de los equipos cubrirá los puntos del spread para 1er tiempo.
                </p>
                <p>Solo cuentan los puntos anotados durante el 1er tiempo.</p>
                <p><span>JUEGO - HANDICAP (XX) (INCLUYE TE)</span></p>
                <p><span>JUEGO - HÁNDICAP (XX) ( INCLUYE TIEMPO EXTRA )</span></p>
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
                <p>INCLUYE TIEMPO EXTRA</p>
            </Collapsible>
            <Collapsible title={"TOTALES. "}>
                <p><span>TOTALES</span></p>
                <p><span>2NDO CUARTO - TOTAL</span></p>
                <p>Sus opciones de apuesta son ARRIBA ; ABAJO</p>
                <p>
                    Predecir si el total de puntos anotados en el 2NDO CUARTO será mayor o menor que la cifra especificada.
                </p>
                <p>
                    Sólo se consideran los puntos anotados durante EL 2NDO CUARTO.
                </p>
                <p>EMPATE = APUESTA NULA (apuesta es reembolsada)</p>
                <p><span>4TO CUARTO - TOTAL (XX) (NO INCLUYE TE)</span></p>
                <p>4to Cuarto - Total (No incluye tiempo extra)</p>
                <p>Sus opciones de apuesta son Arriba; Abajo.</p>
                <p>
                    Pronostique si el total de puntos anotados en el 4to cuarto se irá Arriba o Abajo del número especificado.
                </p>
                <p>
                    Solo se consideran los puntos anotados en el 4to cuarto. (No incluye tiempo extra)
                </p>
                <p>Empate = No hay apuesta (Lo arriesgado se reintegra)</p>
                <p>
                    Los mercados no toman en consideración el tiempo extra a menos que se indique de otra forma.
                </p>
                <p><span>3ER CUARTO - TOTAL</span></p>
                <p>3er Cuarto - Total</p>
                <p>Sus opciones de apuesta son Arriba; Abajo.</p>
                <p>
                    Pronostique si el total de puntos anotados en el 3er cuarto se irá Arriba o Abajo del número especificado.
                </p>
                <p>Solo se consideran los puntos anotados en el 3er cuarto.</p>
                <p>Empate = No hay apuesta (Lo arriesgado se reintegra)</p>
                <p><span>1ER CUARTO - TOTAL</span></p>
                <p>1er Cuarto - Total</p>
                <p>Sus opciones de apuesta son Arriba; Abajo.</p>
                <p>
                    Pronostique si el total de puntos anotados en el 1er cuarto se irá Arriba o Abajo del número especificado.
                </p>
                <p>Solo se consideran los puntos anotados en el 1er cuarto.</p>
                <p>Empate = No hay apuesta (Lo arriesgado se reintegra)</p>
                <p><span>ERA MITAD - TOTAL</span></p>
                <p>1er Tiempo - Total</p>
                <p>Sus opciones de apuesta son Arriba, Abajo</p>
                <p>
                    Pronostique si el total de puntos anotados en el 1er tiempo serán más o menos que la cifra especificada.
                </p>
                <p>
                    Solo cuentan los puntos anotados durante el 1er y 2do cuarto.
                </p>
                <p>Empate = No hay apuesta.</p>
                <p><span>TOTAL DEL JUEGO</span></p>
                <p>Total para el Juego Completo</p>
                <p>Sus opciones de apuesta son Arriba; Abajo.</p>
                <p>
                    Tiempo extra no esta incluido, a menos que se indique lo contrario
                </p>
                <p>
                    Pronostique si el total de puntos anotados en el juego completo se irá Arriba o Abajo del número especificado.
                </p>
                <p>Empate = No hay apuesta (Lo arriesgado se reintegra)</p>
                <p><span>TOTAL DEL JUEGO (INCLUYE TE)</span></p>
                <p>Total para el Juego Completo (Extra tiempo incluido)</p>
                <p>Sus opciones de apuesta son Arriba; Abajo.</p>
                <p>El tiempo extra esta incluido</p>
                <p>
                    Pronostique si el total de puntos anotados en el juego completo se irá Arriba o Abajo del número especificado.
                </p>
                <p>Empate = No hay apuesta (Lo arriesgado se reintegra)</p>
            </Collapsible>
            <Collapsible title={"LINEAS DE GANE"}>
                <p><span>LINEAS DE GANE</span></p>
                <p><span>4TO CUARTO - LINEA DE GANE (NO INCLUYE TE)</span></p>
                <p>4to Cuarto - Línea de Dinero (No incluye tiempo extra)</p>
                <p>Sus opciones de apuesta son Local; Visita</p>
                <p>Pronosticar cual equipo ganará el 4to cuarto.</p>
                <p>Empate = No hay apuesta (se reintegra lo arriesgado)</p>
                <p><span>3ER CUARTO - LINEA DE GANE</span></p>
                <p>3er Cuarto - Línea de Dinero</p>
                <p>Sus opciones de apuesta son Local; Visita</p>
                <p>Pronosticar cual equipo ganará el 3er cuarto.</p>
                <p>Empate = No hay apuesta (se reintegra lo arriesgado)</p>
                <p><span>2NDO CUARTO - LINEA DE GANE</span></p>
                <p>2do Cuarto - Línea de Dinero</p>
                <p>Sus opciones de apuesta son Local; Visita</p>
                <p>Pronosticar cual equipo ganará el 2do cuarto.</p>
                <p>Empate = No hay apuesta (se reintegra lo arriesgado)</p>
                <p><span>1ER CUARTO - LINEA DE GANE</span></p>
                <p>1er Cuarto - Línea de Dinero</p>
                <p>Sus opciones de apuesta son Local; Visita</p>
                <p>Pronosticar cual equipo ganará el 1er cuarto.</p>
                <p>Empate = No hay apuesta (se reintegra lo arriesgado)</p>
                <p><span>1ERA MITAD - LINEA DE GANE</span></p>
                <p>1er Tiempo - Línea de Dinero</p>
                <p>Sus opciones de apuesta son Local; Visita</p>
                <p>Pronosticar cual equipo ganará el 1er tiempo.</p>
                <p>Incluye el 1er y 2do cuarto.</p>
                <p>Empate = No hay apuesta (se reintegra lo arriesgado)</p>
                <p><span>CUAL EQUIPO GANARÁ EL PARTIDO (INCLUYE TE)</span></p>
                <p>Sus opciones de apuesta son Casa ; Visita</p>
                <p>Predecir el equipo que va a ganar el partido.</p>
                <p>Incluye tiempo extra</p>
                <p><span>JUEGO - LINEA DE GANE</span></p>
                <p>Juego - Línea de Dinero</p>
                <p>Sus opciones de apuesta son: Local; Visitante.</p>
                <p>
                    Prediga el ganador al final del partido. Empate = Sin Acción.
                </p>
                <p>Apuesta válida únicamente para el tiempo reglamentario.</p>
                <p>
                    Si un partido es interrumpido o pospuesto, todas las apuestas que no estén resueltas serán canceladas a no ser que el mercado ya haya sido determinado.
                </p>
                <p><span>1ERA MITAD - RESULTADO FINAL</span></p>
                <p>1era Mitad - Línea de Dinero (3 way)</p>
                <p>Sus opciones de apuesta son: Local; Empate; Visitante.</p>
                <p>Prediga el ganador al final de la primera mitad o el Empate</p>
                <p>
                    Apuesta válida únicamente para la primera mitad (1er y 2do cuarto).
                </p>
                <p>
                    Si un partido es interrumpido o pospuesto, todas las apuestas que no estén resueltas serán canceladas a no ser que el mercado ya haya sido determinado.
                </p>
                <p><span>1ER CUARTO - RESULTADO FINAL</span></p>
                <p>1er Cuarto - Línea de Dinero (3way)</p>
                <p>Sus opciones de apuesta son: Local; Empate; Visitante.</p>
                <p>Prediga el ganador al final del primer cuarto o el Empate</p>
                <p>Apuesta válida únicamente para el1er cuarto.</p>
                <p>
                    Si un partido es interrumpido o pospuesto, todas las apuestas que no estén resueltas serán canceladas a no ser que el mercado ya haya sido determinado.
                </p>
                <p><span>2NDO CUARTO - RESULTADO FINAL</span></p>
                <p>2do Cuarto - Línea de Dinero (3way)</p>
                <p>Sus opciones de apuesta son: Local; Empate; Visitante.</p>
                <p>Prediga el ganador al final del segundo cuarto o el Empate</p>
                <p>Apuesta válida únicamente para el 2do cuarto.</p>
                <p>
                    Si un partido es interrumpido o pospuesto, todas las apuestas que no estén resueltas serán canceladas a no ser que el mercado ya haya sido determinado.
                </p>
                <p><span>3ER CUARTO - RESULTADO FINAL</span></p>
                <p>3er Cuarto - Línea de Dinero (3way)</p>
                <p>Sus opciones de apuesta son: Local; Empate; Visitante.</p>
                <p>Prediga el ganador al final del tercer cuarto o el Empate</p>
                <p>Apuesta válida únicamente para el 3er cuarto.</p>
                <p>
                    Si un partido es interrumpido o pospuesto, todas las apuestas que no estén resueltas serán canceladas a no ser que el mercado ya haya sido determinado.
                </p>
                <p><span>4TO CUARTO - RESULTADO FINAL</span></p>
                <p>4to Cuarto - Línea de Dinero (3way)</p>
                <p>Sus opciones de apuesta son: Local; Empate; Visitante.</p>
                <p>Prediga el ganador al final del 4to cuarto o el Empate</p>
                <p>Apuesta válida únicamente para el 4to cuarto.</p>
                <p>
                    Si un partido es interrumpido o pospuesto, todas las apuestas que no estén resueltas serán canceladas a no ser que el mercado ya haya sido determinado.
                </p>
            </Collapsible>
            <Collapsible title={"OPCIONES ADICIONALES"}>
                <p><span>OPCIONES ADICIONALES</span></p>
                <p>
                    4to Cuarto Total De Puntos Anotados Impar/Par (No Incluye TE)
                </p>
                <p>
                    4to Cuarto Total de Puntos Anotados Par/Impar (No incluye Tiempo extra)
                </p>
                <p>Sus opciones de apuesta son Par; Impar</p>
                <p>
                    Pronostique si el total de puntos anotados por ambos equipos en el 4to cuarto será Par o Impar.
                </p>
                <p>
                    Solo cuentan los puntos anotados durante el 4to cuarto. (No incluye tiempo extra)
                </p>
                <p><span>3ER CUARTO - IMPAR/PAR TOTAL DE PUNTOS ANOTADOS</span></p>
                <p>3er Cuarto Total de Puntos Anotados Par/Impar</p>
                <p>Sus opciones de apuesta son Par; Impar</p>
                <p>
                    Pronostique si el total de puntos anotados por ambos equipos en el 3er cuarto será Par o Impar.
                </p>
                <p>Solo cuentan los puntos anotados durante el 3er cuarto.</p>
                <p><span>1ERA MITAD - IMPAR/PAR TOTAL DE PUNTOS ANOTADOS</span></p>
                <p>1er Tiempo Total de Puntos Anotados Par/Impar</p>
                <p>Sus opciones de apuesta son Par; Impar</p>
                <p>
                    Pronostique si el total de puntos anotados por ambos equipos en el 1er tiempo será Par o Impar.
                </p>
                <p>
                    Solo cuentan los puntos anotados durante el 1ro y 2do cuarto.
                </p>
                <p><span>CUAL EQUIPO ANOTA PRIMERO X PUNTOS?</span></p>
                <p>Cual equipo llegará primero a X puntos?</p>
                <p>Sus opciones de apuesta son Local; Visita</p>
                <p>
                    Pronosticar cual equipo anotará primero un número específico de puntos. (Ejemplo: marcador actual 20-19, por lo tanto el equipo Local llega primero a los 20 puntos)
                </p>
                <p>
                    Si un partido termina antes de que alguno de los equipos llegue al número especificado de puntos, el mercado se considera nulo (cancelado).
                </p>
                <p><span>QUIEN ANOTA EL PUNTO X?</span></p>
                <p>Quién anota el punto X?</p>
                <p>Sus opciones de apuesta son Local; Visita</p>
                <p>
                    Pronosticar cual equipo anotará primero el punto especificado en el partido. (Ejemplo: marcador actual 40-28, y el equipo visitante anota 3 puntos; por lo tanto el equipo visitante anota el punto 70)
                </p>
                <p>
                    Si un partido termina antes de que el punto especificado se anote, el mercado se considera nulo (cancelado).
                </p>
                <p>
                    IMPAR/PAR TOTAL DE PUNTOS ANOTADOS EN TODO EL PARTIDO (INCLUYE TE)
                </p>
                <p>
                    Par/Impar Total de puntos anotados para todo el partido (Incluye Tiempo extra)
                </p>
                <p>Sus opciones de apuesta son Par; Impar</p>
                <p>
                    Pronostique si el total de puntos anotados por ambos equipos en el partido será Par o Impar.
                </p>
                <p>Incluye tiempo extra.</p>
                <p><span>CUAL EQUIPO GANARÁ EL SALTO INICIAL?</span></p>
                <p><span>CUAL EQUIPO GANA EL SALTO ENTRE DOS?</span></p>
                <p>
                    Predecir qué equipo ganaría el salto entre dos. El salto entre dos es un método utilizado para comenzar. Dos jugadores rivales intentan hacerse con el control del balón después de que se lanza en el aire entre ellos por el árbitro .
                </p>
                <p><span>HABRÁ TIEMPO EXTRA?</span></p>
                <p>Sus opciones de apuesta son Si; No.</p>
                <p>Pronostique si el partido se irá a tiempo extra.</p>
                <p>Juego - Impar/Par Total De Puntos Anotados</p>
                <p>Juego - Total de Goles Par/Impar</p>
                <p>Sus opciones de apuesta son: Par; Impar.</p>
                <p>
                    Prediga si el número de puntos marcados por ambos equipos será par o impar.
                </p>
                <p>
                    Las apuestas son pagadas acorde a la suma total de puntos (resultando en un número par o impar).
                </p>
                <p>Apuesta válida únicamente para el tiempo reglamentario.</p>
                <p>
                    Si un partido es interrumpido o pospuesto, todas las apuestas que no estén resueltas serán canceladas a no ser que el mercado ya haya sido determinado.
                </p>
                <p><span>1ER CUARTO - CUAL EQUIPO ANOTA PRIMERO X PUNTOS?</span></p>
                <p>1er Cuarto - Cuál equipo ganará la Carrera a los X puntos?</p>
                <p>Sus opciones de apuesta son: Local; Visitante.</p>
                <p>
                    Prediga cual equipo marcara un específico número de puntos en el primer cuarto. (Ejemplo: marcador actual 20-19, entonces el equipo local gana la carrera a los 20 puntos).
                </p>
                <p>
                    Si un partido es interrumpido o pospuesto, todas las apuestas que no estén resueltas serán canceladas a no ser que el mercado ya haya sido determinado.
                </p>
                <p><span>2NDO CUARTO - CUAL EQUIPO ANOTA PRIMERO X PUNTOS?</span></p>
                <p>2do Cuarto - Cuál equipo ganará la Carrera a los X puntos?</p>
                <p>Sus opciones de apuesta son: Local; Visitante.</p>
                <p>
                    Prediga cual equipo marcara un específico número de puntos en el segundo cuarto. (Ejemplo: marcador actual 20-19, entonces el equipo local gana la carrera a los 20 puntos).
                </p>
                <p>
                    Si un partido es interrumpido o pospuesto, todas las apuestas que no estén resueltas serán canceladas a no ser que el mercado ya haya sido determinado.
                </p>
                <p><span>3ER CUARTO - CUAL EQUIPO ANOTA PRIMERO X PUNTOS?</span></p>
                <p>3er Cuarto - Cuál equipo ganará la Carrera a los X puntos?</p>
                <p>Sus opciones de apuesta son: Local; Visitante.</p>
                <p>
                    Prediga cual equipo marcara un específico número de puntos en el tercer cuarto. (Ejemplo: marcador actual 20-19, entonces el equipo local gana la carrera a los 20 puntos).
                </p>
                <p>
                    Si un partido es interrumpido o pospuesto, todas las apuestas que no estén resueltas serán canceladas a no ser que el mercado ya haya sido determinado.
                </p>
                <p><span>4TO CUARTO - CUAL EQUIPO ANOTA PRIMERO X PUNTOS?</span></p>
                <p>4to Cuarto - Cuál equipo ganará la Carrera a los X puntos?</p>
                <p>Sus opciones de apuesta son: Local; Visitante.</p>
                <p>
                    Prediga cual equipo marcara un específico número de puntos en el 4to cuarto. (Ejemplo: marcador actual 20-19, entonces el equipo local gana la carrera a los 20 puntos).
                </p>
                <p>
                    Si un partido es interrumpido o pospuesto, todas las apuestas que no estén resueltas serán canceladas a no ser que el mercado ya haya sido determinado.
                </p>
                <p><span>1ER CUARTO - IMPAR/PAR TOTAL DE PUNTOS ANOTADOS</span></p>
                <p>1er Cuarto Total de Puntos Anotados Par/Impar</p>
                <p>Sus opciones de apuesta son Par; Impar</p>
                <p>
                    Pronostique si el total de puntos anotados por ambos equipos en el 1er cuarto será Par o Impar.
                </p>
                <p>Solo cuentan los puntos anotados durante el 1er cuarto.</p>
                <p><span>2NDO CUARTO - IMPAR/PAR TOTAL DE PUNTOS ANOTADOS</span></p>
                <p>2do Cuarto Total de Puntos Anotados Par/Impar</p>
                <p>Sus opciones de apuesta son Par; Impar</p>
                <p>
                    Pronostique si el total de puntos anotados por ambos equipos en el 2do cuarto será Par o Impar.
                </p>
                <p>Solo cuentan los puntos anotados durante el 2do cuarto.</p>
            </Collapsible>
            <Collapsible title={"APUESTAS PRINCIPALES"}>
                    <p><span>APUESTAS PRINCIPALES</span></p>
                    <p><span>HANDICAP</span></p>
                    <p>Juego - Hándicap</p>
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
                    <p>NO Incluye tiempo extra.</p>
                    <p><span>RESULTADO FINAL</span></p>
                    <p>Juego - Línea de Dinero de Tres Vías</p>
                    <p>Sus opciones de apuesta son Local; Visita; Empate.</p>
                    <p>
                        Pronosticar cual equipo ganará el partido, o el empate al final del tiempo regular.
                    </p>
                    <p>
                        Si el partido es interrumpido y no se completa dentro de las siguientes 24 horas, todos los mercados indefinidos serán anulados.
                    </p>
                    <p>No incluye tiempo extra.</p>
                    <p><span>TOTAL</span></p>
                    <p>Partido - Total</p>
                    <p>Sus opciones de apuesta son Arriba: Abajo</p>
                    <p>
                        Pronostique si el total de puntos anotados por ambos equipos se irá Arriba o Abajo del número especificado.
                    </p>
                    <p>El tiempo extra no esta incluido</p>
            </Collapsible>
        </section>
    )
}