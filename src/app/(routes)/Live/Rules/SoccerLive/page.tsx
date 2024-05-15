import Collapsible from "@/app/_components/Collapsible";
import styles from '../styles.module.css';
import { Metadata } from "next";


export const metadata: Metadata = {
    title: "Reglas para apuestas SOCCER EN VIVO | CaribeApuesta",
    description: "Descubre las reglas esenciales de las apuestas en vivo para el SOCCER - Tu guía definitiva para apostar con confianza y responsabilidad. Aprende los términos clave y disfruta de una experiencia de apuestas segura y emocionante. ¡Regístrate e ingresa ahora para comenzar!",
    metadataBase: new URL("http://localhost:3000/"),
    keywords: ['Reglas de apuestas en vivo para el SOCCER', 'Reglas de apuestas en vivo para el SOCCER', 'Reglas de apuestas en vivo para el SOCCER en caribeapuesta'],
    openGraph: {
        title: "Reglas para apuestas SOCCER EN VIVO",
        description: "Descubre las reglas esenciales de las apuestas en vivo para el SOCCER - Tu guía definitiva para apostar con confianza y responsabilidad. Aprende los términos clave y disfruta de una experiencia de apuestas segura y emocionante. ¡Regístrate e ingresa ahora para comenzar!",
    }
};

export default function SoccerLive() {
    return (
        <section>
            <h3 className={styles.rulesTitle}>SOCCER EN VIVO</h3>
            <Collapsible title={"REGLAS GENERALES. "}>
                <p><span>REGLAS GENERALES</span></p>
                <p><span>REGLAS GENERALES DE FUTBOL EN VIVO</span></p>
                <p>Reglas de Soccer para Apuestas en Vivo</p>
                <p>
                    Todas las probabilidades están sujetas a fluctuación, y a menos que se especifique de otra forma todas las probabilidades están basadas en el resultado final de un partido de 90 minutos más el tiempo adicional (tiempo extra y penales no cuentan).
                </p>
                <p>
                    Cuando las Apuestas en Vivo están disponibles, generalmente hay un retraso en la transmisión de satélite, por lo tanto nos reservamos el derecho de pagar cualquier apuesta que se halla hecho dentro de los siguientes 5 segundos después de anotado un gol o que se halla señalado un penal con probabilidades revisadas que reflejen el estado del juego en el momento que se hizo la apuesta, o anular la apuesta si el mercado ya ha sido determinado.
                </p>
                <p>
                    Todos los mercados (excepto, medio tiempo, primer tiempo, tiempo extra y penales) están considerados para el tiempo de regulación de 90 minutos (incluido el tiempo adicional).
                </p>
                <p>
                    En los mercados no se incluye el tiempo extra, a menos que se especifique.
                </p>
                <p>
                    Si un partido es interrumpido y se reanuda dentro de las siguientes 48 horas de que este haya empezado, las apuestas abiertas se pagaran de acuerdo al resultado final de juego. De cualquier otra forma todas las apuestas que no estén decididas serán anuladas.
                </p>
                <p>
                    90 Minutos de Regulación: Los mercados están basados en el resultado final del tiempo regulatorio de 90 minutos a menos que se especifique de otra forma. Este tiempo regulatorio incluye el tiempo adicional, pero no incluye el tiempo extra ni los penales.
                </p>
                <p><span>Reglas de Cancelación y Pago</span></p>
                <p>
                    Si un mercado se mantiene abierto cuando uno de los siguientes eventos a sucedido (gol, tarjeta roja o amarilla-roja y penal) nos reservamos el derecho de anular las apuestas.
                </p>
                <p>
                    Si un mercado se abre con una tarjeta roja incorrecta o faltante, nos reservamos el derecho de anular las apuestas.
                </p>
                <p>
                    Si un partido es interrumpido o pospuesto, todas las apuestas que no estén decididas serán canceladas a menos que el mercado ya haya sido determinado.
                </p>
                <p>
                    Si el nombre de los equipos o categoría se despliegan de forma incorrecta, nos reservamos el derecho de anular las apuestas.
                </p>
                <p><span>Puntos de las Tarjetas:</span></p>
                <p>
                    Las tarjetas amarillas cuentan como 10 puntos y las tarjetas rojas, amarilla-roja cuentan como 25. La segunda tarjeta amarilla para un jugador la cual llevaría a una tarjeta amarilla-roja no se toma en cuenta. Por lo tanto un jugador no podría producir más de 35 puntos por acumulación de tarjetas.
                </p>
                <p>
                    El pago se hará de acuerdo a toda la evidencia disponible de las tarjetas que se mostraron durante el tiempo regulatorio de 90 minutos.
                </p>
                <p>
                    Aquellas tarjetas que se muestren después del partido no se toman en cuenta.
                </p>
                <p>
                    Las tarjetas que se muestren a aquellos que no estén jugando como: (jugadores que hayan sido sustituidos, entrenadores o jugadores en banca) no se toman en cuenta.
                </p>
                <p><span>Mercados para Tiros de Esquina:</span></p>
                <p>
                    Tiros de esquina que se hayan adjudicado pero que no se realizaron, no son tomados en cuenta.
                </p>
            </Collapsible>
            <Collapsible title={"HANDICAP. "}>
                <p><span>HANDICAP</span></p>
                <p><span>1ERA MITAD - HANDICAP ASIÁTICO</span></p>
                <p>Apuesta Hándicap</p>
                <p>
                    Con la Apuesta Hándicap el bookmaker le otorga al equipo que se supone que es más débil una ventaja virtual de un gol, lo cual estadísticamente incrementa las posibilidades para un empate entre los equipos o un gane para el equipo no favorito, y este se agregará al resultado final para fines de la apuesta.
                </p>
                <p>
                    El favorito es xxxxxxxxx. Si las probabilidades son iguales, se le acredita al equipo visitante el gol ventaja.
                </p>
                <p><span>Hándicap Línea PK</span></p>
                <p>
                    Si cualquiera de los equipos gana por cualquier margen (equipo ganador) se pagará como la opción ganadora.
                </p>
                <p>
                    En el caso de un empate todas las apuestas se anulan y el dinero devuelto.
                </p>
                <p>
                    Las apuestas solo cuentan para los primeros 45 minutos del partido más el tiempo adicional.
                </p>
                <p><span>Hándicap Línea PK, -½</span></p>
                <p>La apuesta se divide en dos partes:</p>
                <p>Una parte de la apuesta es una línea de PK.</p>
                <p>Una parte de la apuesta es una línea de ½ gol.</p>
                <p>El favorito da una ventaja de línea de PK, (-)½ gol.</p>
                <p>
                    Un gane por 1 o más goles - Todas las apuestas con esta opción serán ganadoras.
                </p>
                <p>
                    Empate - La mitad de la apuesta se pierde y la otra mitad se reintegra al cliente.
                </p>
                <p>
                    Pérdida por cualquier marcador - Todas las apuestas con esta opción serán pérdidas.
                </p>
                <p>
                    El equipo no favorito recibe una ventaja de línea de PK, (+)½ gol.
                </p>
                <p>
                    Un gane por cualquier marcador - Todas las apuestas con esta opción serán ganadoras.
                </p>
                <p>
                    Empate - La mitad de la apuesta gana y la otra mitad se reintegra al cliente.
                </p>
                <p>
                    Pérdida por cualquier marcador - Todas las apuestas con esta opción serán pérdidas.
                </p>
                <p>
                    Las apuestas solo cuentan para los primeros 45 minutos del partido más el tiempo adicional.
                </p>
                <p><span>Hándicap Línea -½</span></p>
                <p>El favorito da una ventaja de línea de (-)½ gol.</p>
                <p>
                    Gane por cualquier marcador - Todas las apuestas con esta opción son ganadoras.
                </p>
                <p>Empate - Todas las apuestas con esta opción serán pérdidas.</p>
                <p>
                    Pérdida por cualquier marcador - Todas las apuestas con esta opción serán pérdidas.
                </p>
                <p>
                    El equipo no favorito recibe una ventaja de línea de (+)½ gol.
                </p>
                <p>
                    Un gane por cualquier marcador - Todas las apuestas con esta opción serán ganadoras.
                </p>
                <p>
                    Empate - Todas las apuestas con esta opción serán ganadoras.
                </p>
                <p>
                    Pérdida por cualquier marcador - Todas las apuestas con esta opción serán pérdidas.
                </p>
                <p>
                    Las apuestas solo cuentan para los primeros 45 minutos del partido más el tiempo adicional.
                </p>
                <p><span>Hándicap Línea -½, -1</span></p>
                <p>La apuesta se divide en dos partes:</p>
                <p>Una parte de la apuesta es una línea de ½ gol.</p>
                <p>Una parte de la apuesta es 1 gol</p>
                <p>El favorito da una ventaja de línea de (-)½, (-)1 gol.</p>
                <p>
                    Un gane por 2 o más goles - Todas las apuestas con esta opción serán ganadoras.
                </p>
                <p>
                    Gane por exactamente 1 - La mitad de la apuesta es un gane y la otra mitad se reintegra al cliente.
                </p>
                <p>
                    Empate o Pérdida por cualquier marcador - Todas las apuestas con esta opción serán pérdidas.
                </p>
                <p>
                    El equipo no favorito recibe una ventaja de línea de (+)½, (+)1 gol.
                </p>
                <p>
                    Un gane por cualquier marcador - Todas las apuestas con esta opción serán ganadoras.
                </p>
                <p>
                    Empate - Todas las apuestas con esta opción serán ganadoras.
                </p>
                <p>
                    Pérdida por 1 - La mitad de la apuesta pierde y la otra mitad se reintegra al cliente.
                </p>
                <p>
                    Pérdida por más de 1 - Todas las apuestas con esta opción serán pérdidas. .
                </p>
                <p>
                    Las apuestas solo cuentan para los primeros 45 minutos del partido más el tiempo adicional.
                </p>
                <p><span>Hándicap Línea -1,</span></p>
                <p>El favorito da una ventaja de línea de (-)1 gol.</p>
                <p>
                    Un gane por 2 o más goles - Todas las apuestas con esta opción serán ganadoras.
                </p>
                <p>
                    Gane por exactamente 1 - Todas las apuestas con esta opción se anulan y el dinero se reintegra al cliente.
                </p>
                <p>
                    Empate o Pérdida - Todas las apuestas con esta opción serán pérdidas.
                </p>
                <p>
                    El equipo no favorito recibe una ventaja de línea de (+)1 gol.
                </p>
                <p>
                    Gane por empate o cualquier marcador - Todas las apuestas con esta opción serán ganadoras.
                </p>
                <p>
                    Pérdida por exactamente 1 - Todas las apuestas con esta opción se anulan y el dinero se reintegra al cliente.
                </p>
                <p>
                    Pérdida por 2 o más - Todas las apuestas con esta opción serán pérdidas.
                </p>
                <p>
                    Las apuestas solo cuentan para los primeros 45 minutos del partido más el tiempo adicional.
                </p>
                <p><span>Hándicap Línea -1, -1½</span></p>
                <p>La apuesta se divide en dos partes:</p>
                <p>Una parte de la apuesta es una línea de un 1 gol.</p>
                <p>Una parte de la apuesta es una línea de un 1½ gol.</p>
                <p>El favorito da una ventaja de línea de (-)1, (-)1½ gol.</p>
                <p>
                    Un gane por 2 o más goles - Todas las apuestas con esta opción serán ganadoras.
                </p>
                <p>
                    Un gane por exactamente 1 gol - La mitad de la apuesta pierde y la otra mitad se reintegra al cliente.
                </p>
                <p>
                    Empate o Pérdida por cualquier marcador - Todas las apuestas con esta opción serán pérdidas.
                </p>
                <p>
                    El equipo no favorito recibe una ventaja de línea de (+)1, (+)1½ gol.
                </p>
                <p>
                    Un gane por cualquier marcador - Todas las apuestas con esta opción serán ganadoras.
                </p>
                <p>
                    Empate - Todas las apuestas con esta opción serán ganadoras.
                </p>
                <p>
                    Pérdida por 1 gol - La mitad de la apuesta gana y la otra mitad se reintegra al cliente.
                </p>
                <p>
                    Pérdida por más de 1 gol - Todas las apuestas con esta opción serán pérdidas.
                </p>
                <p>
                    Las apuestas solo cuentan para los primeros 45 minutos del partido más el tiempo adicional.
                </p>
                <p><span>Hándicap Línea -1½</span></p>
                <p>El favorito da una ventaja de línea de (-)1½ gol.</p>
                <p>
                    Un gane por 2 o más goles - Todas las apuestas con esta opción serán ganadoras.
                </p>
                <p>
                    Gane por exactamente 1 - Todas las apuestas con esta opción serán pérdidas.
                </p>
                <p>
                    Empate o Pérdida - Todas las apuestas con esta opción serán pérdidas.
                </p>
                <p>
                    El equipo no favorito recibe una ventaja de línea de (+)1½ gol.
                </p>
                <p>
                    Un gane por cualquier marcador o empate - Todas las apuestas con esta opción serán ganadoras.
                </p>
                <p>
                    Pérdida por 1 gol - Todas las apuestas con esta opción serán ganadoras.
                </p>
                <p>
                    Pérdida por 2 o más goles - Todas las apuestas con esta opción serán pérdidas.
                </p>
                <p>
                    Las apuestas solo cuentan para los primeros 45 minutos del partido más el tiempo adicional.
                </p>
                <p><span>Hándicap Línea -1½, -2</span></p>
                <p>La apuesta se divide en dos partes:</p>
                <p>Una parte de la apuesta es una línea de un 1½ gol.</p>
                <p>Una parte de la apuesta es una línea de 2 goles.</p>
                <p>El favorito da una ventaja de línea de (-)1½, (-)2 goles.</p>
                <p>
                    Un gane por 3 o más goles - Todas las apuestas con esta opción serán ganadoras.
                </p>
                <p>
                    Un gane por exactamente 2 goles - La mitad de la apuesta gana y la otra mitad se reintegra al cliente.
                </p>
                <p>
                    Un gane por exactamente 1 - Todas las apuestas con esta opción serán pérdidas.
                </p>
                <p>
                    Empate o Pérdida por cualquier marcador - Todas las apuestas con esta opción serán pérdidas.
                </p>
                <p>
                    El equipo no favorito recibe una ventaja de línea de (+)1½, (+)2 goles.
                </p>
                <p>
                    Un gane por cualquier marcador - Todas las apuestas con esta opción serán ganadoras.
                </p>
                <p>
                    Empate o pérdida por 1 gol - Todas las apuestas con esta opción serán ganadoras.
                </p>
                <p>
                    Pérdida por 2 goles - La mitad de la apuesta pierde y la otra mitad se reintegra al cliente.
                </p>
                <p>
                    Pérdida por 3 goles o más - Todas las apuestas con esta opción serán pérdidas.
                </p>
                <p>
                    Las apuestas solo cuentan para los primeros 45 minutos del partido más el tiempo adicional.
                </p>
                <p><span>Hándicap Línea -2</span></p>
                <p>El favorito da una ventaja de línea de (-)2 goles.</p>
                <p>
                    Un gane por 3 o más goles - Todas las apuestas con esta opción serán ganadoras.
                </p>
                <p>
                    Gane por exactamente 2 goles - Todas las apuestas con esta opción se anulan y el dinero se reintegra al cliente.
                </p>
                <p>
                    Gane por exactamente 1 gol - Todas las apuestas con esta opción serán pérdidas.
                </p>
                <p>
                    Empate o pérdida - Todas las apuestas con esta opción serán pérdidas.
                </p>
                <p>
                    El equipo no favorito recibe una ventaja de línea de (+)2 goles.
                </p>
                <p>
                    Un gane por cualquier marcador o empate - Todas las apuestas con esta opción serán ganadoras.
                </p>
                <p>
                    Pérdida por 1 gol - Todas las apuestas con esta opción serán ganadoras.
                </p>
                <p>
                    Pérdida por 2 goles - Todas las apuestas con esta opción se anulan y el dinero se reintegra al cliente.
                </p>
                <p>
                    Pérdida por 3 goles o más - Todas las apuestas con esta opción serán pérdidas.
                </p>
                <p>
                    Las apuestas solo cuentan para los primeros 45 minutos del partido más el tiempo adicional.
                </p>
                <p><span>Hándicap Línea -2, -2½</span></p>
                <p>La apuesta se divide en dos partes:</p>
                <p>Una parte de la apuesta es una línea de 2 goles.</p>
                <p>Una parte de la apuesta es una línea de 2½ goles.</p>
                <p>El favorito da una ventaja de línea de (-)2, (-)2½ goles.</p>
                <p>
                    Un gane por 3 o más goles - Todas las apuestas con esta opción serán ganadoras.
                </p>
                <p>
                    Un gane por exactamente 2 goles - La mitad de la apuesta pierde y la otra mitad se reintegra al cliente.
                </p>
                <p>
                    Empate o Pérdida por cualquier marcador - Todas las apuestas con esta opción serán pérdidas.
                </p>
                <p>
                    El equipo no favorito recibe una ventaja de línea de (+)2, (+)2½ goles.
                </p>
                <p>
                    Un gane por cualquier marcador - Todas las apuestas con esta opción serán ganadoras.
                </p>
                <p>
                    Empate o pérdida por 1 gol - Todas las apuestas con esta opción serán ganadoras.
                </p>
                <p>
                    Pérdida por 2 goles - La mitad de la apuesta gana y la otra mitad se reintegra al cliente.
                </p>
                <p>
                    Pérdida por 3 goles o más - Todas las apuestas con esta opción serán pérdidas.
                </p>
                <p>
                    Las apuestas solo cuentan para los primeros 45 minutos del partido más el tiempo adicional.
                </p>
                <p><span>Hándicap Línea -2½</span></p>
                <p>El favorito da una ventaja de línea de (-)2½ goles.</p>
                <p>
                    Un gane por 3 o más goles - Todas las apuestas con esta opción serán ganadoras.
                </p>
                <p>
                    Un gane por exactamente 2 goles - Todas las apuestas con esta opción serán pérdidas.
                </p>
                <p>
                    Gane por exactamente 1 gol - Todas las apuestas con esta opción serán pérdidas.
                </p>
                <p>
                    Empate o pérdida - Todas las apuestas con esta opción serán pérdidas.
                </p>
                <p>
                    El equipo no favorito recibe una ventaja de línea de (+)2½ goles.
                </p>
                <p>
                    Un gane por cualquier marcador o empate - Todas las apuestas con esta opción serán ganadoras.
                </p>
                <p>
                    Pérdida por exactamente 1 gol - Todas las apuestas con esta opción serán ganadoras.
                </p>
                <p>
                    Pérdida por exactamente 2 goles - Todas las apuestas con esta opción serán ganadoras.
                </p>
                <p>
                    Pérdida por 3 goles o más - Todas las apuestas con esta opción serán pérdidas.
                </p>
                <p>
                    Las apuestas solo cuentan para los primeros 45 minutos del partido más el tiempo adicional.
                </p>
                <p><span>Hándicap Línea -2½, -3</span></p>
                <p>La apuesta se divide en dos partes:</p>
                <p>Una parte de la apuesta es una línea de 2½ goles.</p>
                <p>Una parte de la apuesta es una línea de 3 goles.</p>
                <p>El favorito da una ventaja de línea de (-)2½, (-)3 goles.</p>
                <p>
                    Un gane por 4 o más goles - Todas las apuestas con esta opción serán ganadoras.
                </p>
                <p>
                    Un gane por exactamente 3 goles - La mitad de la apuesta gana y la otra mitad se reintegra al cliente.
                </p>
                <p>
                    Un gane por exactamente 1 o 2 goles - Todas las apuestas con esta opción serán pérdidas.
                </p>
                <p>
                    Empate o Pérdida por cualquier marcador - Todas las apuestas con esta opción serán pérdidas.
                </p>
                <p>
                    El equipo no favorito recibe una ventaja de línea de (+)2½, (+)3 goles.
                </p>
                <p>
                    Un gane por cualquier marcador - Todas las apuestas con esta opción serán ganadoras.
                </p>
                <p>
                    Empate o pérdida por 1 o 2 goles - Todas las apuestas con esta opción serán ganadoras.
                </p>
                <p>
                    Pérdida por 3 goles - La mitad de la apuesta pierde y la otra mitad se reintegra al cliente.
                </p>
                <p>
                    Pérdida por 4 goles o más - Todas las apuestas con esta opción serán pérdidas.
                </p>
                <p>
                    Las apuestas solo cuentan para los primeros 45 minutos del partido más el tiempo adicional.
                </p>
                <p><span>JUEGO - HANDICAP ASIÁTICO</span></p>
                <p>Juego - Spread Asiático</p>
                <p>Apuesta Hándicap</p>
                <p>
                    Con la Apuesta Hándicap el bookmaker le otorga al equipo que se supone que es más débil una ventaja virtual de un gol, lo cual estadísticamente incrementa las posibilidades para un empate entre los equipos o un gane para el equipo no favorito, y este se agregará al resultado final para fines de la apuesta.
                </p>
                <p>
                    El favorito es xxxxxxxxx. Si las probabilidades son iguales, se le acredita al equipo visitante el gol ventaja.
                </p>
                <p><span>Hándicap Línea PK</span></p>
                <p>
                    Si cualquiera de los equipos gana por cualquier margen (equipo ganador) se pagará como la opción ganadora.
                </p>
                <p>
                    En el caso de un empate todas las apuestas se anulan y el dinero devuelto.
                </p>
                <p>
                    Las apuestas solo cuentan para los 90 minutos del partido más el tiempo adicional.
                </p>
                <p><span>Hándicap Línea PK, -½</span></p>
                <p>La apuesta se divide en dos partes:</p>
                <p>Una parte de la apuesta es una línea de PK.</p>
                <p>Una parte de la apuesta es una línea de ½ gol.</p>
                <p>El favorito da una ventaja de línea de PK, (-)½ gol.</p>
                <p>
                    Un gane por 1 o más goles - Todas las apuestas con esta opción serán ganadoras.
                </p>
                <p>
                    Empate - La mitad de la apuesta se pierde y la otra mitad se reintegra al cliente.
                </p>
                <p>
                    Pérdida por cualquier marcador - Todas las apuestas con esta opción serán pérdidas.
                </p>
                <p>
                    El equipo no favorito recibe una ventaja de línea de PK, (+)½ gol.
                </p>
                <p>
                    Un gane por cualquier marcador - Todas las apuestas con esta opción serán ganadoras.
                </p>
                <p>
                    Empate - La mitad de la apuesta gana y la otra mitad se reintegra al cliente.
                </p>
                <p>
                    Pérdida por cualquier marcador - Todas las apuestas con esta opción serán pérdidas.
                </p>
                <p>
                    Las apuestas solo cuentan para los 90 minutos del partido más el tiempo adicional.
                </p>
                <p><span>Hándicap Línea -½</span></p>
                <p>El favorito da una ventaja de línea de (-)½ gol.</p>
                <p>
                    Gane por cualquier marcador - Todas las apuestas con esta opción son ganadoras.
                </p>
                <p>Empate - Todas las apuestas con esta opción serán pérdidas.</p>
                <p>
                    Pérdida por cualquier marcador - Todas las apuestas con esta opción serán pérdidas.
                </p>
                <p>
                    El equipo no favorito recibe una ventaja de línea de (+)½ gol.
                </p>
                <p>
                    Un gane por cualquier marcador - Todas las apuestas con esta opción serán ganadoras.
                </p>
                <p>
                    Empate - Todas las apuestas con esta opción serán ganadoras.
                </p>
                <p>
                    Pérdida por cualquier marcador - Todas las apuestas con esta opción serán pérdidas.
                </p>
                <p>
                    Las apuestas solo cuentan para los 90 minutos del partido más el tiempo adicional.
                </p>
                <p><span>Hándicap Línea -½, -1</span></p>
                <p>La apuesta se divide en dos partes:</p>
                <p>Una parte de la apuesta es una línea de ½ gol.</p>
                <p>Una parte de la apuesta es 1 gol</p>
                <p>El favorito da una ventaja de línea de (-)½, (-)1 gol.</p>
                <p>
                    Un gane por 2 o más goles - Todas las apuestas con esta opción serán ganadoras.
                </p>
                <p>
                    Gane por exactamente 1 - La mitad de la apuesta es un gane y la otra mitad se reintegra al cliente.
                </p>
                <p>
                    Empate o Pérdida por cualquier marcador - Todas las apuestas con esta opción serán pérdidas.
                </p>
                <p>
                    El equipo no favorito recibe una ventaja de línea de (+)½, (+)1 gol.
                </p>
                <p>
                    Un gane por cualquier marcador - Todas las apuestas con esta opción serán ganadoras.
                </p>
                <p>
                    Empate - Todas las apuestas con esta opción serán ganadoras.
                </p>
                <p>
                    Pérdida por 1 - La mitad de la apuesta pierde y la otra mitad se reintegra al cliente.
                </p>
                <p>
                    Pérdida por más de 1 - Todas las apuestas con esta opción serán pérdidas. .
                </p>
                <p>
                    Las apuestas solo cuentan para los 90 minutos del partido más el tiempo adicional.
                </p>
                <p><span>Hándicap Línea -1,</span></p>
                <p>El favorito da una ventaja de línea de (-)1 gol.</p>
                <p>
                    Un gane por 2 o más goles - Todas las apuestas con esta opción serán ganadoras.
                </p>
                <p>
                    Gane por exactamente 1 - Todas las apuestas con esta opción se anulan y el dinero se reintegra al cliente.
                </p>
                <p>
                    Empate o Pérdida - Todas las apuestas con esta opción serán pérdidas.
                </p>
                <p>
                    El equipo no favorito recibe una ventaja de línea de (+)1 gol.
                </p>
                <p>
                    Gane por empate o cualquier marcador - Todas las apuestas con esta opción serán ganadoras.
                </p>
                <p>
                    Pérdida por exactamente 1 - Todas las apuestas con esta opción se anulan y el dinero se reintegra al cliente.
                </p>
                <p>
                    Pérdida por 2 o más - Todas las apuestas con esta opción serán pérdidas.
                </p>
                <p>
                    Las apuestas solo cuentan para los 90 minutos del partido más el tiempo adicional.
                </p>
                <p><span>Hándicap Línea -1, -1½</span></p>
                <p>La apuesta se divide en dos partes:</p>
                <p>Una parte de la apuesta es una línea de un 1 gol.</p>
                <p>Una parte de la apuesta es una línea de un 1½ gol.</p>
                <p>El favorito da una ventaja de línea de (-)1, (-)1½ gol.</p>
                <p>
                    Un gane por 2 o más goles - Todas las apuestas con esta opción serán ganadoras.
                </p>
                <p>
                    Un gane por exactamente 1 gol - La mitad de la apuesta pierde y la otra mitad se reintegra al cliente.
                </p>
                <p>
                    Empate o Pérdida por cualquier marcador - Todas las apuestas con esta opción serán pérdidas.
                </p>
                <p>
                    El equipo no favorito recibe una ventaja de línea de (+)1, (+)1½ gol.
                </p>
                <p>
                    Un gane por cualquier marcador - Todas las apuestas con esta opción serán ganadoras.
                </p>
                <p>
                    Empate - Todas las apuestas con esta opción serán ganadoras.
                </p>
                <p>
                    Pérdida por 1 gol - La mitad de la apuesta gana y la otra mitad se reintegra al cliente.
                </p>
                <p>
                    Pérdida por más de 1 gol - Todas las apuestas con esta opción serán pérdidas.
                </p>
                <p>
                    Las apuestas solo cuentan para los 90 minutos del partido más el tiempo adicional.
                </p>
                <p><span>Hándicap Línea -1½</span></p>
                <p>El favorito da una ventaja de línea de (-)1½ gol.</p>
                <p>
                    Un gane por 2 o más goles - Todas las apuestas con esta opción serán ganadoras.
                </p>
                <p>
                    Gane por exactamente 1 - Todas las apuestas con esta opción serán pérdidas.
                </p>
                <p>
                    Empate o Pérdida - Todas las apuestas con esta opción serán pérdidas.
                </p>
                <p>
                    El equipo no favorito recibe una ventaja de línea de (+)1½ gol.
                </p>
                <p>
                    Un gane por cualquier marcador o empate - Todas las apuestas con esta opción serán ganadoras.
                </p>
                <p>
                    Pérdida por 1 gol - Todas las apuestas con esta opción serán ganadoras.
                </p>
                <p>
                    Pérdida por 2 o más goles - Todas las apuestas con esta opción serán pérdidas.
                </p>
                <p>
                    Las apuestas solo cuentan para los 90 minutos del partido más el tiempo adicional.
                </p>
                <p><span>Hándicap Línea -1½, -2</span></p>
                <p>La apuesta se divide en dos partes:</p>
                <p>Una parte de la apuesta es una línea de un 1½ gol.</p>
                <p>Una parte de la apuesta es una línea de 2 goles.</p>
                <p>El favorito da una ventaja de línea de (-)1½, (-)2 goles.</p>
                <p>
                    Un gane por 3 o más goles - Todas las apuestas con esta opción serán ganadoras.
                </p>
                <p>
                    Un gane por exactamente 2 goles - La mitad de la apuesta gana y la otra mitad se reintegra al cliente.
                </p>
                <p>
                    Un gane por exactamente 1 - Todas las apuestas con esta opción serán pérdidas.
                </p>
                <p>
                    Empate o Pérdida por cualquier marcador - Todas las apuestas con esta opción serán pérdidas.
                </p>
                <p>
                    El equipo no favorito recibe una ventaja de línea de (+)1½, (+)2 goles.
                </p>
                <p>
                    Un gane por cualquier marcador - Todas las apuestas con esta opción serán ganadoras.
                </p>
                <p>
                    Empate o pérdida por 1 gol - Todas las apuestas con esta opción serán ganadoras.
                </p>
                <p>
                    Pérdida por 2 goles - La mitad de la apuesta pierde y la otra mitad se reintegra al cliente.
                </p>
                <p>
                    Pérdida por 3 goles o más - Todas las apuestas con esta opción serán pérdidas.
                </p>
                <p>
                    Las apuestas solo cuentan para los 90 minutos del partido más el tiempo adicional.
                </p>
                <p><span>Hándicap Línea -2</span></p>
                <p>El favorito da una ventaja de línea de (-)2 goles.</p>
                <p>
                    Un gane por 3 o más goles - Todas las apuestas con esta opción serán ganadoras.
                </p>
                <p>
                    Gane por exactamente 2 goles - Todas las apuestas con esta opción se anulan y el dinero se reintegra al cliente.
                </p>
                <p>
                    Gane por exactamente 1 gol - Todas las apuestas con esta opción serán pérdidas.
                </p>
                <p>
                    Empate o pérdida - Todas las apuestas con esta opción serán pérdidas.
                </p>
                <p>
                    El equipo no favorito recibe una ventaja de línea de (+)2 goles.
                </p>
                <p>
                    Un gane por cualquier marcador o empate - Todas las apuestas con esta opción serán ganadoras.
                </p>
                <p>
                    Pérdida por 1 gol - Todas las apuestas con esta opción serán ganadoras.
                </p>
                <p>
                    Pérdida por 2 goles - Todas las apuestas con esta opción se anulan y el dinero se reintegra al cliente.
                </p>
                <p>
                    Pérdida por 3 goles o más - Todas las apuestas con esta opción serán pérdidas.
                </p>
                <p>
                    Las apuestas solo cuentan para los 90 minutos del partido más el tiempo adicional.
                </p>
                <p><span>Hándicap Línea -2, -2½</span></p>
                <p>La apuesta se divide en dos partes:</p>
                <p>Una parte de la apuesta es una línea de 2 goles.</p>
                <p>Una parte de la apuesta es una línea de 2½ goles.</p>
                <p>El favorito da una ventaja de línea de (-)2, (-)2½ goles.</p>
                <p>
                    Un gane por 3 o más goles - Todas las apuestas con esta opción serán ganadoras.
                </p>
                <p>
                    Un gane por exactamente 2 goles - La mitad de la apuesta pierde y la otra mitad se reintegra al cliente.
                </p>
                <p>
                    Empate o Pérdida por cualquier marcador - Todas las apuestas con esta opción serán pérdidas.
                </p>
                <p>
                    El equipo no favorito recibe una ventaja de línea de (+)2, (+)2½ goles.
                </p>
                <p>
                    Un gane por cualquier marcador - Todas las apuestas con esta opción serán ganadoras.
                </p>
                <p>
                    Empate o pérdida por 1 gol - Todas las apuestas con esta opción serán ganadoras.
                </p>
                <p>
                    Pérdida por 2 goles - La mitad de la apuesta gana y la otra mitad se reintegra al cliente.
                </p>
                <p>
                    Pérdida por 3 goles o más - Todas las apuestas con esta opción serán pérdidas.
                </p>
                <p>
                    Las apuestas solo cuentan para los 90 minutos del partido más el tiempo adicional.
                </p>
                <p><span>Hándicap Línea -2½</span></p>
                <p>El favorito da una ventaja de línea de (-)2½ goles.</p>
                <p>
                    Un gane por 3 o más goles - Todas las apuestas con esta opción serán ganadoras.
                </p>
                <p>
                    Un gane por exactamente 2 goles - Todas las apuestas con esta opción serán pérdidas.
                </p>
                <p>
                    Gane por exactamente 1 gol - Todas las apuestas con esta opción serán pérdidas.
                </p>
                <p>
                    Empate o pérdida - Todas las apuestas con esta opción serán pérdidas.
                </p>
                <p>
                    El equipo no favorito recibe una ventaja de línea de (+)2½ goles.
                </p>
                <p>
                    Un gane por cualquier marcador o empate - Todas las apuestas con esta opción serán ganadoras.
                </p>
                <p>
                    Pérdida por exactamente 1 gol - Todas las apuestas con esta opción serán ganadoras.
                </p>
                <p>
                    Pérdida por exactamente 2 goles - Todas las apuestas con esta opción serán ganadoras.
                </p>
                <p>
                    Pérdida por 3 goles o más - Todas las apuestas con esta opción serán pérdidas.
                </p>
                <p>
                    Las apuestas solo cuentan para los 90 minutos del partido más el tiempo adicional.
                </p>
                <p><span>Hándicap Línea -2½, -3</span></p>
                <p>La apuesta se divide en dos partes:</p>
                <p>Una parte de la apuesta es una línea de 2½ goles.</p>
                <p>Una parte de la apuesta es una línea de 3 goles.</p>
                <p>El favorito da una ventaja de línea de (-)2½, (-)3 goles.</p>
                <p>
                    Un gane por 4 o más goles - Todas las apuestas con esta opción serán ganadoras.
                </p>
                <p>
                    Un gane por exactamente 3 goles - La mitad de la apuesta gana y la otra mitad se reintegra al cliente.
                </p>
                <p>
                    Un gane por exactamente 1 o 2 goles - Todas las apuestas con esta opción serán pérdidas.
                </p>
                <p>
                    Empate o Pérdida por cualquier marcador - Todas las apuestas con esta opción serán pérdidas.
                </p>
                <p>
                    El equipo no favorito recibe una ventaja de línea de (+)2½, (+)3 goles.
                </p>
                <p>
                    Un gane por cualquier marcador - Todas las apuestas con esta opción serán ganadoras.
                </p>
                <p>
                    Empate o pérdida por 1 o 2 goles - Todas las apuestas con esta opción serán ganadoras.
                </p>
                <p>
                    Pérdida por 3 goles - La mitad de la apuesta pierde y la otra mitad se reintegra al cliente.
                </p>
                <p>
                    Pérdida por 4 goles o más - Todas las apuestas con esta opción serán pérdidas.
                </p>
                <p>
                    Las apuestas solo cuentan para los 90 minutos del partido más el tiempo adicional.
                </p>
                <p><span>TIEMPO EXTRA - 1ERA MITAD HANDICAP ASIÁTICO (XX)</span></p>
                <p>Tiempo Extra Para los Mercados en vivo</p>
                <p>
                    Las apuestas se valorarán en las estadísticas oficiales para el Tiempo Extra extra. Cualquier gol o tiros de esquinas que fueron tomadas o marcados durante el tiempo reglamentario no cuentan.
                </p>
                <p>Tiempo Extra para Handicap asiático</p>
                <p>
                    Las reglas normales para el Handicap en vivo, aplican igual , pero sólo cuentan los goles en el Tiempo Extra. La puntuación en el comienzo del Tiempo Extra se considera que es de 0-0.
                </p>
                <p><span>TIEMPO EXTRA - HANDICAP (XX)</span></p>
                <p>Tiempo Extra Para los Mercados en vivo</p>
                <p>
                    Las apuestas se valorarán en las estadísticas oficiales para el Tiempo Extra. Cualquier gol o tiro de esquina que fueron tomadas o marcados durante el tiempo reglamentario no cuentan.
                </p>
                <p>Tiempo Extra para Handicap asiático</p>
                <p>
                    Las reglas normales para el Handicap en vivo aplican igual , pero sólo cuentan los goles en el Tiempo Extra. La puntuación en el comienzo del Tiempo Extra se considera que es de 0-0.
                </p>
            </Collapsible>
            <Collapsible title={"TOTALES. "}>
                <p><span>TOTALES</span></p>
                <p><span>1ERA MITAD - NÚMERO EXACTO DE GOLES</span></p>
                <p>Primer Tiempo - Número exacto de Goles</p>
                <p>Sus opciones de apuesta son: 0; 1; 2; 3+</p>
                <p>
                    Pronostique el número exacto de goles anotados en el primer tiempo por ambos equipos.
                </p>
                <p>
                    Las apuestas solo cuentan para los primeros 45 minutos del partido más el tiempo adicional.
                </p>
                <p><span>JUEGO - TOTAL ASIÁTICO</span></p>
                <p>Total Asiático</p>
                <p>Ejemplo: Línea de Gol Abajo 2½, 3-115</p>
                <p>
                    Las apuestas se ganan si no hay anotaciones o si se anotan 1 o 2 goles en el partido.
                </p>
                <p>
                    Si se anotan exactamente 3 goles, la mitad de lo arriesgado se reintegra y la otra mitad será una pérdida.
                </p>
                <p>La apuesta pierde si se anotan 4 o más goles en el partido.</p>
                <p>
                    Las apuestas solo cuentan para los 90 minutos del partido más el tiempo adicional.
                </p>
                <p><span>JUEGO - TOTAL POR EQUIPO (VISITANTE)</span></p>
                <p>Total del Equipo (Equipo Visitante)</p>
                <p>Sus opciones de apuesta son Arriba, Abajo</p>
                <p>
                    Pronostique si el total de goles anotados por el equipo Visitante serán más o menos que la cifra especificada.
                </p>
                <p>
                    Las apuestas solo cuentan para los 90 minutos del partido más el tiempo adicional.
                </p>
                <p><span>JUEGO - TOTAL POR EQUIPO (CASA)</span></p>
                <p>Total del Equipo (Equipo Local)</p>
                <p>Sus opciones de apuesta son Arriba, Abajo</p>
                <p>
                    Pronostique si el total de goles anotados por el equipo Local serán más o menos que la cifra especificada.
                </p>
                <p>
                    Las apuestas solo cuentan para los 90 minutos del partido más el tiempo adicional.
                </p>
                <p><span>1ERA MITAD - TOTAL ASIÁTICO</span></p>
                <p>Primer Tiempo - Total Asiático</p>
                <p>Ejemplo: Línea de Gol Abajo 1½, 2-115</p>
                <p>
                    Las apuestas se ganan si no hay anotaciones o se anota 1 gol en el primer tiempo.
                </p>
                <p>
                    Si se anotan 2 goles en el primer tiempo, la mitad de lo arriesgado se reintegra y la otra mitad será una pérdida.
                </p>
                <p>
                    La apuesta pierde si se anotan 3 o más goles en el primer tiempo.
                </p>
                <p>
                    Las apuestas solo cuentan para los primeros 45 minutos del partido más el tiempo adicional.
                </p>
                <p><span>JUEGO - TOTAL DE GOLES(EQUIPO VISITA)</span></p>
                <p>Total de Goles (Equipo Visitante)</p>
                <p>
                    La apuesta consiste en pronosticar exactamente cuántos goles anotará el equipo Visitante en el partido.
                </p>
                <p>Opciones de apuesta: 0, 1, 2, 3+ goles</p>
                <p>
                    Las apuestas solo cuentan para los 90 minutos del partido más el tiempo adicional.
                </p>
                <p><span>JUEGO - TOTAL DE GOLES(EQUIPO CASA)</span></p>
                <p>Total de Goles ( Equipo Local)</p>
                <p>
                    La apuesta consiste en pronosticar exactamente cuántos goles anotará el equipo Local en el partido.
                </p>
                <p>Opciones de apuesta: 0, 1, 2, 3+ goles</p>
                <p>
                    Las apuestas solo cuentan para los 90 minutos del partido más el tiempo adicional.
                </p>
                <p><span>1ERA MITAD - TOTAL DE GOLES (EQUIPO CASA)</span></p>
                <p>Total de Goles ( Equipo Local)</p>
                <p>
                    La apuesta consiste en pronosticar exactamente cuántos goles anotará el equipo Local en el partido.
                </p>
                <p>Opciones de apuesta: 0, 1, 2, 3+ goles</p>
                <p>
                    Las apuestas solo cuentan para los 90 minutos del partido más el tiempo adicional.
                </p>
                <p><span>1ERA MITAD - TOTAL</span></p>
                <p>Primer Tiempo - Total</p>
                <p>Sus opciones de apuesta son Arriba, Abajo</p>
                <p>
                    Pronostique si el total de goles anotados por ambos equipos en el primer tiempo sera más o menos que la cifra especificada.
                </p>
                <p>
                    Las apuestas solo cuentan para los primeros 45 minutos del Partido más el tiempo adicional.
                </p>
                <p><span>2NDA MITAD - TOTAL DE GOLES (EQUIPO VISITANTE)</span></p>
                <p>
                    Total de Goles para el Segundo Tiempo (Nombre del Equipo Visitante)
                </p>
                <p>Sus opciones de apuesta son: 0; 1; 2; 3+</p>
                <p>
                    Pronostique el número exacto de goles anotados en el segundo tiempo por el equipo Visitante.
                </p>
                <p>
                    Las apuestas solo cuentan para los últimos 45 minutos del partido más el tiempo adicional.
                </p>
                <p><span>2ND HALF - TOTAL GOALS (HOME TEAM)</span></p>
                <p>Total de Goles para el Segundo Tiempo (Equipo Local)</p>
                <p>Sus opciones de apuesta son: 0; 1; 2; 3+</p>
                <p>
                    Pronostique el número exacto de goles anotados en el segundo tiempo por el equipo Local.
                </p>
                <p>
                    Las apuestas solo cuentan para los últimos 45 minutos del partido más el tiempo adicional.
                </p>
                <p><span>TIEMPO EXTRA - TOTAL DE GOLES</span></p>
                <p>Tiempo Extra - Total de Goles</p>
                <p>Sus opciones de apuesta son Arriba, Abajo</p>
                <p>
                    Pronostique si el total de goles anotados por ambos equipos serán más o menos que la cifra especificada.
                </p>
                <p>
                    Las apuestas solo cuentan para los 30 minutos del Tiempo Extra más el tiempo adicional.
                </p>
                <p><span>ERA MITAD - TOTAL DE GOLES (VISITA)</span></p>
                <p>Primer Tiempo - Total de Goles (Equipo Visitante)</p>
                <p>Sus opciones de apuesta son: 0; 1; 2; 3+</p>
                <p>
                    Pronostique el número exacto de goles anotados en el segundo tiempo por el equipo Visitante.
                </p>
                <p>
                    Las apuestas solo cuentan para los primeros 45 minutos del partido más el tiempo adicional.
                </p>
            </Collapsible>
            <Collapsible title={"LINEAS DE GANE"}>
                <p><span>LINEAS DE GANE</span></p>
                <p><span>QUIEN GANA EL RESTO DEL PARTIDO? (MARCADOR ACTUAL X:X)</span></p>
                <p>
                    Las listas de puntuación señalan al equipo Local primero, y de segundo el equipo Visitante.
                </p>
                <p>Sus opciones de apuesta son: Local, Visita, Empate.</p>
                <p>Pronostique el ganador del resto del partido el empate.</p>
                <p>
                    Basado en los goles anotados entre el momento que se hace la apuesta y el final del tiempo regular.
                </p>
                <p>
                    Cualquier gol que se anote previamente al momento en que se hace la apuesta no se tomará en cuenta.
                </p>
                <p>
                    Las apuestas solo cuentan para los 90 minutos del partido más el tiempo adicional.
                </p>
                <p><span>1ERA MITAD - RESULTADO FINAL</span></p>
                <p>Primer Tiempo - Línea de Dinero de 3 Vías</p>
                <p>Sus opciones de apuesta son: Local, Visita, Empate.</p>
                <p>
                    Pronostique el ganador del primer tiempo o un empate en el primer tiempo.
                </p>
                <p>El tiempo regular y tiros de penal no se toman en cuenta.</p>
                <p>
                    Las apuestas solo cuentan para los primeros 45 minutos del partido más el tiempo adicional.
                </p>
                <p><span>JUEGO - LINEA DE GANE</span></p>
                <p>Juego - Línea de Dinero</p>
                <p>Sus opciones de apuesta son: Local, Visita, Empate.</p>
                <p>
                    Pronostique el ganador del partido, el empate = No hay apuesta.
                </p>
                <p>
                    Las apuestas solo cuentan para los 90 minutos del partido más el tiempo adicional.
                </p>
                <p>
                    1ERA MITAD - QUIEN GANA EL RESTO DEL PARTIDO? (MARCADOR ACTUAL X:X)
                </p>
                <p>Primer Tiempo - Quien ganará el resto (Marcador Actual X:X)</p>
                <p>
                    Las listas de puntuación señalan al equipo Local primero, y de segundo el equipo Visitante.
                </p>
                <p>Sus opciones de apuesta son: Local, Visita, Empate.</p>
                <p>
                    Pronostique el ganador del resto del primer tiempo o el empate.
                </p>
                <p>
                    Basado en los goles anotados entre el momento que se hace la apuesta y el final del primer tiempo.
                </p>
                <p>
                    Cualquier gol que se anote previamente al momento en que se hace la apuesta no se tomará en cuenta.
                </p>
                <p>
                    Las apuestas solo cuentan para los primeros 45 minutos del partido más el tiempo adicional.
                </p>
                <p><span>TIEMPO EXTRA - RESULTADO FINAL</span></p>
                <p>Tiempo Extra - Línea de Dinero de 3 Vías</p>
                <p>Sus opciones de apuesta son: Local, Visita, Empate.</p>
                <p>
                    Pronostique el ganador del partido en el tiempo extra o un empate.
                </p>
                <p>El tiempo regular y tiros de penal no se toman en cuenta.</p>
                <p>
                    Para efectos de apuesta solo los goles anotados en el tiempo extra serán tomados en cuenta.
                </p>
                <p>
                    El tiempo extra incluye dos mitades de 15 minutos más el tiempo adicional.
                </p>
                <p>
                    TIEMPO EXTRA - QUIEN GANA EL RESTO DEL ENCUENTRO? (MARCADOR ACTUAL X:X)
                </p>
                <p>
                    Tiempo Extra - Quien ganará el resto del partido (Marcador Actual X:X)
                </p>
                <p>
                    Las listas de puntuación señalan al equipo Local primero, y de segundo el equipo Visitante.
                </p>
                <p>Sus opciones de apuesta son: Local, Visita, Empate.</p>
                <p>
                    Pronostique el ganador del resto del tiempo extra o el empate.
                </p>
                <p>
                    Basado en los goles anotados entre el momento que se hace la apuesta y el final del tiempo extra.
                </p>
                <p>
                    Cualquier gol que se anote previamente al momento en que se hace la apuesta no se tomará en cuenta.
                </p>
                <p>
                    Las apuestas solo cuentan para los 30 minutos del tiempo extra más el tiempo adicional.
                </p>
                <p><span>CUAL EQUIPO VA A GANAR LOS PENALES?</span></p>
                <p>Sus opciones de apuesta son: Local; Visita</p>
                <p>Pronostique cual equipo ganará los tiros de penal</p>
                <p>TIEMPO EXTRA - 1ERA MITAD RESULTADO FINAL</p>
                <p>
                    Tiempo Extra - Línea de Dinero de 3 Vías para el Primer Tiempo
                </p>
                <p>Sus opciones de apuesta son: Local, Visita, Empate.</p>
                <p>
                    Pronostique el ganador del primer tiempo del tiempo extra o el empate.
                </p>
                <p>
                    Para efecto de las apuestas solo serán considerados los goles anotados en el primer tiempo del tiempo extra.
                </p>
                <p>
                    Las apuestas solo cuentan para los primeros 15 minutos del tiempo extra más el tiempo adicional.
                </p>
            </Collapsible >
            <Collapsible title={"OPCIONES ADICIONALES"}>
                <p><span>OPCIONES ADICIONALES</span></p>
                <p><span>EQUIPO QUE ANOTA EL PRÓXIMO GOL (MARCADOR ACTUAL X:X)</span></p>
                <p>
                    Las listas de puntuación señalan al equipo Local primero, y de segundo el equipo Visitante.
                </p>
                <p>Sus opciones de apuesta son: Local, Visita, Empate.</p>
                <p>
                    Pronostique cual equipo anotará el siguiente gol en el partido.
                </p>
                <p>
                    Cualquier gol que se anote previamente al momento en que se hace la apuesta no se tomará en cuenta.
                </p>
                <p>
                    Las apuestas solo cuentan para los 90 minutos del partido más el tiempo adicional.
                </p>
                <p>
                    Los autogoles cuentan para el equipo al que se le acredita el gol.
                </p>
                <p><span>Juego - Marcador Exacto (C:V)</span></p>
                <p>Marcador Correcto H:A (CASA : VISITA)</p>
                <p>
                    Las listas de puntuación señalan al equipo Local primero, y de segundo el equipo Visitante.
                </p>
                <p>
                    Sus opciones de apuesta son: 0:0, 1:0, 0:1, 1:1, 2:0; 0:2, 2:1, 1:2, 2:2, etc
                </p>
                <p>Pronostique el marcador exacto al final del partido.</p>
                <p>Todas las apuestas se pagarán de acuerdo al marcador actual.</p>
                <p>
                    Las apuestas solo cuentan para los 90 minutos del partido más el tiempo adicional.
                </p>
                <p>
                    <span>JUEGO - MARCADOR CORRECTO ADICIONAL (MARCADOR ACTUAL X:X) (C:V)</span>
                </p>
                <p>
                    Marcador Correcto Adicional (Marcador actual X:X)(H:A)(HOME :AWAY)
                </p>
                <p>
                    Las listas de puntuación señalan al equipo Local primero, y de segundo el equipo Visitante.
                </p>
                <p>
                    Sus opciones de apuesta son 0:0; 1:0; 0;1; 1:1; 2:0; 0:2; 2:1; 1:2; 2:2; etc.
                </p>
                <p>Pronostique el marcador exacto al final del partido.</p>
                <p>Todas las apuestas se pagarán de acuerdo al marcador actual.</p>
                <p>
                    Las apuestas solo cuentan para los 90 minutos del partido más el tiempo adicional.
                </p>
                <p><span>JUEGO - AMBOS EQUIPOS VAN A ANOTAR UN GOL?</span></p>
                <p>Ambos equipos anotarán un Gol?</p>
                <p>Sus opciones de apuesta son: Si; No</p>
                <p>Pronostique si ambos equipos anotarán en el partido.</p>
                <p>
                    Las apuestas solo cuentan para los 90 minutos del partido más el tiempo adicional.
                </p>
                <p>
                    Si un partido es abandonado las apuestas serán anuladas, a menos de que ya se haya determinado un mercado.
                </p>
                <p><span>RESULTADO COMBINADO (TOTAL DE GOLES 2.5)</span></p>
                <p>Ganadores de Resultados de Apuestas (Línea Total 2.5)</p>
                <p>
                    Sus opciones de apuesta son: Gane de local y Abajo, Gane de Local y Arriba, Empate y Abajo, Empate y Arriba, Gane de Visita y Abajo, Gane de Visita y Arriba.
                </p>
                <p>
                    Pronostique tanto el equipo ganador como que el número de goles anotados por ambos equipos será mayor o menor a 2½.
                </p>
                <p>
                    Es una combinación de una línea de tres vías y un Total de 2½.
                </p>
                <p>
                    Todas las apuestas se pagarán de acuerdo a la línea de Total especificada.
                </p>
                <p>
                    Si un partido es abandonado las apuestas serán anuladas, a menos de que ya se haya determinado un mercado.
                </p>
                <p>
                    Las apuestas solo cuentan para los 90 minutos del partido más el tiempo adicional.
                </p>
                <p><span>JUEGO - NÚMERO EXACTO DE GOLES</span></p>
                <p>Número exacto de Goles</p>
                <p>Sus opciones de apuesta son: 0; 1; 2; 3; 4; 5; 6+</p>
                <p>
                    Pronostique el número exacto de goles anotados por ambos equipos.
                </p>
                <p>
                    Las apuestas solo cuentan para los 90 minutos del partido más el tiempo adicional.
                </p>
                <p>
                    Si un partido es abandonado las apuestas serán anuladas, a menos de que ya se haya determinado un mercado.
                </p>
                <p><span>DOBLE OPORTUNIDAD</span></p>
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
                    La Doble Oportunidad es similar a las apuestas 1X2 con la excepción de que el usuario tiene la capacidad de apostar en dos de los tres posibles resultados al seleccionar una de las siguientes opciones.
                </p>
                <p>
                    Si uno de los dos posibles resultados se alcanza, se gana la apuesta.
                </p>
                <p>
                    Si un partido se juega en cancha neutral, para efectos de apuestas el equipo que aparece primero en la página web se considera que es el equipo local.
                </p>
                <p>
                    Las apuestas solo cuentan para los 90 minutos del partido más el tiempo adicional.
                </p>
                <p><span>IMPAR/PAR TOTAL DE GOLES ANOTADOS EN EL PARTIDO</span></p>
                <p>Total de Goles Par/Impar</p>
                <p>Sus opciones de apuesta son: Par, Impar.</p>
                <p>
                    Pronostique si el total de goles anotados por ambos equipos será Par o Impar.
                </p>
                <p>
                    Las apuestas se pagarán de acuerdo a la suma total de goles (resultando en un número par o impar)
                </p>
                <p>
                    Cualquier partido que termine 0:0 se considerará como un número par de goles.
                </p>
                <p>Los autogoles cuentan.</p>
                <p>
                    Las apuestas solo cuentan para los 90 minutos del partido más el tiempo adicional.
                </p>
                <p><span>MITAD CON MARCADOR MÁS ALTO</span></p>
                <p>Medio Tiempo con el Marcador más Alto.</p>
                <p>Sus opciones de apuesta son: 1er Tiempo, 2do Tiempo, Igual</p>
                <p>
                    Pronostique en cual tiempo se anotarán más goles o si será igual
                </p>
                <p>No incluye tiempo extra.</p>
                <p>
                    <span> 1ERA MITAD - MARCADOR CORRECTO ADICIONAL (MARCADOR ACTUAL X:X)</span>
                </p>
                <p>
                    Primer Tiempo - Marcador Correcto Adicional (Marcador Actual X:X)
                </p>
                <p>
                    Las listas de puntuación señalan al equipo Local primero, y de segundo el equipo Visitante.
                </p>
                <p>
                    Sus opciones de apuesta son: 0:0, 1:0, 0:1, 1:1, 2:0; 0:2, 2:1, 1:2, 2:2, etc
                </p>
                <p>Pronostique el marcador exacto al final del primer tiempo.</p>
                <p>Todas las apuestas se pagarán de acuerdo al marcador actual.</p>
                <p>
                    Las apuestas solo cuentan para los primeros 45 minutos del primer tiempo más el tiempo adicional.
                </p>
                <p>
                    <span>CUANDO VA A SER ANOTADO EL SIGUIENTE GOL? (MARCADOR ACTUAL X:X)</span>
                </p>
                <p>Cuando se anotará el siguiente gol (Marcador Actual X:X)</p>
                <p>
                    Las listas de puntuación señalan al equipo Local primero, y de segundo el equipo Visitante.
                </p>
                <p>
                    Sus opciones de apuesta son: 0-15 min, 16-30 min, 31-45 min, 46-60 min, 61-75 min, 76-90 min, no hay anotaciones.
                </p>
                <p>
                    Pronostique durante cual periodo específico de tiempo se anotará un gol.
                </p>
                <p>Todas las apuestas se pagarán de acuerdo al marcador actual.</p>
                <p>
                    Las apuestas solo cuentan para los 90 minutos del partido más el tiempo adicional.
                </p>
                <p><span>EQUIPO QUE AVANZA A LA SIGUIENTE RONDA</span></p>
                <p>Cuando se anotará el siguiente gol (Marcador Actual X:X)</p>
                <p>
                    Las listas de puntuación señalan al equipo Local primero, y de segundo el equipo Visitante.
                </p>
                <p>
                    Sus opciones de apuesta son: 0-15 min, 16-30 min, 31-45 min, 46-60 min, 61-75 min, 76-90 min, no hay anotaciones.
                </p>
                <p>
                    Pronostique durante cual periodo específico de tiempo se anotará un gol.
                </p>
                <p>Todas las apuestas se pagarán de acuerdo al marcador actual.</p>
                <p>
                    Las apuestas solo cuentan para los 90 minutos del partido más el tiempo adicional.
                </p>
                <p><span>COMO SE DECIDIRÁ EL PARTIDO?</span></p>
                <p>Pronostique la forma en que se decidirá el partido</p>
                <p>Sus opciones de apuesta son:</p>
                <p>Equipo Local ganará en el Tiempo de Regulación.</p>
                <p>Equipo Visitante ganará en el Tiempo de Regulación.</p>
                <p>Equipo Local ganará en Tiempo Extra.</p>
                <p>Equipo</p>
                <p>ANOTAN UN GOAL EN CUALQUIER MOMENTO</p>
                <p>Anotador en cualquier momento</p>
                <p>
                    Las listas de puntuación señalan al equipo Local primero, y de segundo el equipo Visitante.
                </p>
                <p>
                    Pronostique si un jugador anotará un gol en cualquier momento del partido.
                </p>
                <p>
                    Sus opciones de apuesta son: nombre jugador del equipo local, nombre jugador del equipo visitante, no hay anotaciones.
                </p>
                <p>
                    Cualquier gol que se anote previamente al momento en que se hace la apuesta no se tomará en cuenta.
                </p>
                <p>
                    Las apuestas solo cuentan para los 90 minutos del partido más el tiempo adicional.
                </p>
                <p>Los autogoles no cuentan para efectos de apuestas.</p>
                <p><span>ANOTADOR DEL SIGUIENTE GOL (MARCADOR ACTUAL X:X)</span></p>
                <p>El próximo Anotador</p>
                <p>
                    Las listas de puntuación señalan al equipo Local primero, y de segundo el equipo Visitante.
                </p>
                <p>
                    Pronostique el jugador que anotará el próximo gol en el partido.
                </p>
                <p>
                    Sus opciones de apuesta son: nombre jugador del equipo local, nombre jugador del equipo visitante, no hay anotaciones.
                </p>
                <p>
                    Cualquier gol que se anote previamente al momento en que se hace la apuesta no se tomará en cuenta.
                </p>
                <p>
                    Las apuestas solo cuentan para los 90 minutos del partido más el tiempo adicional.
                </p>
                <p>
                    Tómese en cuenta que los autogoles no se consideran a la hora de pagar las apuestas. El mercado se calificará como una cancelación.
                </p>
                <p><span>CUAL EQUIPO TIENE LA PATADA INICIAL?</span></p>
                <p>Cual equipo pateará de primero?</p>
                <p>Sus opciones de apuesta son: Equipo Local, Equipo Visitante.</p>
                <p>
                    Pronostique cual equipo tendrá la primera posición del balón.
                </p>
                <p>
                    <span>TIROS DE PENAL - EQUIPO QUE ANOTA EL PRÓXIMO GOL (MARCADOR ACTUAL X:X)</span>
                </p>
                <p>
                    Tiro de Penales - Cual equipo anotará el siguiente gol (Marcador Actual X:X)
                </p>
                <p>
                    La apuesta consiste en pronosticar cual equipo anotará el siguiente tiro de penal.
                </p>
                <p>
                    Cualquier penal anotado antes de hacer la apuesta no se tomará en cuenta.
                </p>
                <p>
                    Las apuestas solo cuentan para los tiros de penal una vez que el tiempo extra haya terminado.
                </p>
                <p>
                    <span>TIEMPO EXTRA - 1ERA MITAD - MARCADOR CORRECTO ADICIONAL (MARCADOR ACTUAL X:X)</span>
                </p>
                <p>
                    Tiempo Extra - Primer Tiempo Marcador Correcto Adicional (Marcador Actual X:X)
                </p>
                <p>
                    Las listas de puntuación señalan al equipo Local primero, y de segundo el equipo Visitante.
                </p>
                <p>
                    Sus opciones de apuesta son: 0:0, 1:0, 0:1, 1:1, 2:0; 0:2, 2:1, 1:2, 2:2, etc
                </p>
                <p>
                    Pronostique el marcador exacto al final del primer tiempo del tiempo extra.
                </p>
                <p>Todas las apuestas se pagarán de acuerdo al marcador actual.</p>
                <p>
                    Las apuestas solo cuentan para los primeros 15 minutos del tiempo extra más el tiempo adicional.
                </p>
                <p>
                    <span> TIEMPO EXTRA - MARCADOR CORRECTO ADICIONAL (MARCADOR ACTUAL X);</span></p>
                <p>
                    Tiempo Extra - Marcador Correcto Adicional (Marcador Actual X:X)
                </p>
                <p>
                    Las listas de puntuación señalan al equipo Local primero, y de segundo el equipo Visitante.
                </p>
                <p>
                    Sus opciones de apuesta son: 0:0, 1:0, 0:1, 1:1, 2:0; 0:2, 2:1, 1:2, 2:2, etc
                </p>
                <p>Pronostique el marcador exacto al final del tiempo extra.</p>
                <p>Todas las apuestas se pagarán de acuerdo al marcador actual.</p>
                <p>
                    Las apuestas solo cuentan para los 30 minutos del tiempo extra más el tiempo adicional.
                </p>
                <p>
                    <span> TIEMPO EXTRA - EQUIPO QUE ANOTA EL PRÓXIMO GOL (MARCADOR ACTUAL X:X)</span>
                </p>
                <p>
                    Tiempo Extra - Equipo en anotar el siguiente gol (Marcador Actual X:X)
                </p>
                <p>
                    Las listas de puntuación señalan al equipo Local primero, y de segundo el equipo Visitante.
                </p>
                <p>Sus opciones de apuesta son: Local, Visita, Empate.</p>
                <p>
                    Pronostique cual equipo anotará el siguiente gol en tiempo extra.
                </p>
                <p>
                    Cualquier gol que se anote previamente al momento en que se hace la apuesta no se tomará en cuenta.
                </p>
                <p>
                    Las apuestas solo cuentan para los 30 minutos del tiempo extra más el tiempo adicional.
                </p>
                <p>
                    Los autogoles cuentan para el equipo al que se le acredita el gol.
                </p>
                <p>
                    <span>1ERA MITAD - EQUIPO QUE ANOTA EL PRÓXIMO GOL (MARCADOR ACTUAL X:X)</span>
                </p>
                <p>
                    Primer Tiempo - Equipo en anotar el siguiente gol (Marcador Actual X:X)
                </p>
                <p>
                    Las listas de puntuación señalan al equipo Local primero, y de segundo el equipo Visitante.
                </p>
                <p>Sus opciones de apuesta son: Local, Visita, Empate.</p>
                <p>Pronostique cual equipo anotará el si</p>
            </Collapsible>
            <Collapsible title={"APUESTAS PRINCIPALES"}>
                <p><span>APUESTAS PRINCIPALES</span></p>
                <p><span>RESULTADO FINAL</span></p>
                <p>Sus opciones de apuesta son: Local, Empate, Visita.</p>
                <p>Pronostique el ganador del partido, o un empate.</p>
                <p>
                    Las apuestas solo cuentan para los 90 minutos del partido más el tiempo adicional.
                </p>
                <p><span>HANDICAP</span></p>
                <p>Apuesta Hándicap</p>
                <p>
                    Con la Apuesta Hándicap el bookmaker le otorga al equipo que se supone que es más débil una ventaja virtual de un gol, lo cual estadísticamente incrementa las posibilidades para un empate entre los equipos o un gane para el equipo no favorito, y este se agregará al resultado final para fines de la apuesta.
                </p>
                <p>
                    El favorito es xxxxxxxxx. Si las probabilidades son iguales, se le acredita al equipo visitante el gol ventaja.
                </p>
                <p><span>Hándicap Línea PK</span></p>
                <p>
                    Si cualquiera de los equipos gana por cualquier margen (equipo ganador) se pagará como la opción ganadora.
                </p>
                <p>
                    En el caso de un empate todas las apuestas se anulan y el dinero devuelto.
                </p>
                <p>
                    Las apuestas solo cuentan para los 90 minutos del partido más el tiempo adicional.
                </p>
                <p><span>Hándicap Línea PK, -½</span></p>
                <p>La apuesta se divide en dos partes:</p>
                <p>Una parte de la apuesta es una línea de PK.</p>
                <p>Una parte de la apuesta es una línea de ½ gol.</p>
                <p>El favorito da una ventaja de línea de PK, (-)½ gol.</p>
                <p>
                    Un gane por 1 o más goles - Todas las apuestas con esta opción serán ganadoras.
                </p>
                <p>
                    Empate - La mitad de la apuesta se pierde y la otra mitad se reintegra al cliente.
                </p>
                <p>
                    Pérdida por cualquier marcador - Todas las apuestas con esta opción serán pérdidas.
                </p>
                <p>
                    El equipo no favorito recibe una ventaja de línea de PK, (+)½ gol.
                </p>
                <p>
                    Un gane por cualquier marcador - Todas las apuestas con esta opción serán ganadoras.
                </p>
                <p>
                    Empate - La mitad de la apuesta gana y la otra mitad se reintegra al cliente.
                </p>
                <p>
                    Pérdida por cualquier marcador - Todas las apuestas con esta opción serán pérdidas.
                </p>
                <p>
                    Las apuestas solo cuentan para los 90 minutos del partido más el tiempo adicional.
                </p>
                <p><span>Hándicap Línea -½</span></p>
                <p>El favorito da una ventaja de línea de (-)½ gol.</p>
                <p>
                    Gane por cualquier marcador - Todas las apuestas con esta opción son ganadoras.
                </p>
                <p>Empate - Todas las apuestas con esta opción serán pérdidas.</p>
                <p>
                    Pérdida por cualquier marcador - Todas las apuestas con esta opción serán pérdidas.
                </p>
                <p>
                    El equipo no favorito recibe una ventaja de línea de (+)½ gol.
                </p>
                <p>
                    Un gane por cualquier marcador - Todas las apuestas con esta opción serán ganadoras.
                </p>
                <p>
                    Empate - Todas las apuestas con esta opción serán ganadoras.
                </p>
                <p>
                    Pérdida por cualquier marcador - Todas las apuestas con esta opción serán pérdidas.
                </p>
                <p>
                    Las apuestas solo cuentan para los 90 minutos del partido más el tiempo adicional.
                </p>
                <p><span>Hándicap Línea -½, -1</span></p>
                <p>La apuesta se divide en dos partes:</p>
                <p>Una parte de la apuesta es una línea de ½ gol.</p>
                <p>Una parte de la apuesta es 1 gol</p>
                <p>El favorito da una ventaja de línea de (-)½, (-)1 gol.</p>
                <p>
                    Un gane por 2 o más goles - Todas las apuestas con esta opción serán ganadoras.
                </p>
                <p>
                    Gane por exactamente 1 - La mitad de la apuesta es un gane y la otra mitad se reintegra al cliente.
                </p>
                <p>
                    Empate o Pérdida por cualquier marcador - Todas las apuestas con esta opción serán pérdidas.
                </p>
                <p>
                    El equipo no favorito recibe una ventaja de línea de (+)½, (+)1 gol.
                </p>
                <p>
                    Un gane por cualquier marcador - Todas las apuestas con esta opción serán ganadoras.
                </p>
                <p>
                    Empate - Todas las apuestas con esta opción serán ganadoras.
                </p>
                <p>
                    Pérdida por 1 - La mitad de la apuesta pierde y la otra mitad se reintegra al cliente.
                </p>
                <p>
                    Pérdida por más de 1 - Todas las apuestas con esta opción serán pérdidas. .
                </p>
                <p>
                    Las apuestas solo cuentan para los 90 minutos del partido más el tiempo adicional.
                </p>
                <p><span>Hándicap Línea -1,</span></p>
                <p>El favorito da una ventaja de línea de (-)1 gol.</p>
                <p>
                    Un gane por 2 o más goles - Todas las apuestas con esta opción serán ganadoras.
                </p>
                <p>
                    Gane por exactamente 1 - Todas las apuestas con esta opción se anulan y el dinero se reintegra al cliente.
                </p>
                <p>
                    Empate o Pérdida - Todas las apuestas con esta opción serán pérdidas.
                </p>
                <p>
                    El equipo no favorito recibe una ventaja de línea de (+)1 gol.
                </p>
                <p>
                    Gane por empate o cualquier marcador - Todas las apuestas con esta opción serán ganadoras.
                </p>
                <p>
                    Pérdida por exactamente 1 - Todas las apuestas con esta opción se anulan y el dinero se reintegra al cliente.
                </p>
                <p>
                    Pérdida por 2 o más - Todas las apuestas con esta opción serán pérdidas.
                </p>
                <p>
                    Las apuestas solo cuentan para los 90 minutos del partido más el tiempo adicional.
                </p>
                <p><span>Hándicap Línea -1, -1½</span></p>
                <p>La apuesta se divide en dos partes:</p>
                <p>Una parte de la apuesta es una línea de un 1 gol.</p>
                <p>Una parte de la apuesta es una línea de un 1½ gol.</p>
                <p>El favorito da una ventaja de línea de (-)1, (-)1½ gol.</p>
                <p>
                    Un gane por 2 o más goles - Todas las apuestas con esta opción serán ganadoras.
                </p>
                <p>
                    Un gane por exactamente 1 gol - La mitad de la apuesta pierde y la otra mitad se reintegra al cliente.
                </p>
                <p>
                    Empate o Pérdida por cualquier marcador - Todas las apuestas con esta opción serán pérdidas.
                </p>
                <p>
                    El equipo no favorito recibe una ventaja de línea de (+)1, (+)1½ gol.
                </p>
                <p>
                    Un gane por cualquier marcador - Todas las apuestas con esta opción serán ganadoras.
                </p>
                <p>
                    Empate - Todas las apuestas con esta opción serán ganadoras.
                </p>
                <p>
                    Pérdida por 1 gol - La mitad de la apuesta gana y la otra mitad se reintegra al cliente.
                </p>
                <p>
                    Pérdida por más de 1 gol - Todas las apuestas con esta opción serán pérdidas.
                </p>
                <p>
                    Las apuestas solo cuentan para los 90 minutos del partido más el tiempo adicional.
                </p>
                <p><span>Hándicap Línea -1½</span></p>
                <p>El favorito da una ventaja de línea de (-)1½ gol.</p>
                <p>
                    Un gane por 2 o más goles - Todas las apuestas con esta opción serán ganadoras.
                </p>
                <p>
                    Gane por exactamente 1 - Todas las apuestas con esta opción serán pérdidas.
                </p>
                <p>
                    Empate o Pérdida - Todas las apuestas con esta opción serán pérdidas.
                </p>
                <p>
                    El equipo no favorito recibe una ventaja de línea de (+)1½ gol.
                </p>
                <p>
                    Un gane por cualquier marcador o empate - Todas las apuestas con esta opción serán ganadoras.
                </p>
                <p>
                    Pérdida por 1 gol - Todas las apuestas con esta opción serán ganadoras.
                </p>
                <p>
                    Pérdida por 2 o más goles - Todas las apuestas con esta opción serán pérdidas.
                </p>
                <p>
                    Las apuestas solo cuentan para los 90 minutos del partido más el tiempo adicional.
                </p>
                <p><span>Hándicap Línea -1½, -2</span></p>
                <p>La apuesta se divide en dos partes:</p>
                <p>Una parte de la apuesta es una línea de un 1½ gol.</p>
                <p>Una parte de la apuesta es una línea de 2 goles.</p>
                <p>El favorito da una ventaja de línea de (-)1½, (-)2 goles.</p>
                <p>
                    Un gane por 3 o más goles - Todas las apuestas con esta opción serán ganadoras.
                </p>
                <p>
                    Un gane por exactamente 2 goles - La mitad de la apuesta gana y la otra mitad se reintegra al cliente.
                </p>
                <p>
                    Un gane por exactamente 1 - Todas las apuestas con esta opción serán pérdidas.
                </p>
                <p>
                    Empate o Pérdida por cualquier marcador - Todas las apuestas con esta opción serán pérdidas.
                </p>
                <p>
                    El equipo no favorito recibe una ventaja de línea de (+)1½, (+)2 goles.
                </p>
                <p>
                    Un gane por cualquier marcador - Todas las apuestas con esta opción serán ganadoras.
                </p>
                <p>
                    Empate o pérdida por 1 gol - Todas las apuestas con esta opción serán ganadoras.
                </p>
                <p>
                    Pérdida por 2 goles - La mitad de la apuesta pierde y la otra mitad se reintegra al cliente.
                </p>
                <p>
                    Pérdida por 3 goles o más - Todas las apuestas con esta opción serán pérdidas.
                </p>
                <p>
                    Las apuestas solo cuentan para los 90 minutos del partido más el tiempo adicional.
                </p>
                <p><span>Hándicap Línea -2</span></p>
                <p>El favorito da una ventaja de línea de (-)2 goles.</p>
                <p>
                    Un gane por 3 o más goles - Todas las apuestas con esta opción serán ganadoras.
                </p>
                <p>
                    Gane por exactamente 2 goles - Todas las apuestas con esta opción se anulan y el dinero se reintegra al cliente.
                </p>
                <p>
                    Gane por exactamente 1 gol - Todas las apuestas con esta opción serán pérdidas.
                </p>
                <p>
                    Empate o pérdida - Todas las apuestas con esta opción serán pérdidas.
                </p>
                <p>
                    El equipo no favorito recibe una ventaja de línea de (+)2 goles.
                </p>
                <p>
                    Un gane por cualquier marcador o empate - Todas las apuestas con esta opción serán ganadoras.
                </p>
                <p>
                    Pérdida por 1 gol - Todas las apuestas con esta opción serán ganadoras.
                </p>
                <p>
                    Pérdida por 2 goles - Todas las apuestas con esta opción se anulan y el dinero se reintegra al cliente.
                </p>
                <p>
                    Pérdida por 3 goles o más - Todas las apuestas con esta opción serán pérdidas.
                </p>
                <p>
                    Las apuestas solo cuentan para los 90 minutos del partido más el tiempo adicional.
                </p>
                <p><span>Hándicap Línea -2, -2½</span></p>
                <p>La apuesta se divide en dos partes:</p>
                <p>Una parte de la apuesta es una línea de 2 goles.</p>
                <p>Una parte de la apuesta es una línea de 2½ goles.</p>
                <p>El favorito da una ventaja de línea de (-)2, (-)2½ goles.</p>
                <p>
                    Un gane por 3 o más goles - Todas las apuestas con esta opción serán ganadoras.
                </p>
                <p>
                    Un gane por exactamente 2 goles - La mitad de la apuesta pierde y la otra mitad se reintegra al cliente.
                </p>
                <p>
                    Empate o Pérdida por cualquier marcador - Todas las apuestas con esta opción serán pérdidas.
                </p>
                <p>
                    El equipo no favorito recibe una ventaja de línea de (+)2, (+)2½ goles.
                </p>
                <p>
                    Un gane por cualquier marcador - Todas las apuestas con esta opción serán ganadoras.
                </p>
                <p>
                    Empate o pérdida por 1 gol - Todas las apuestas con esta opción serán ganadoras.
                </p>
                <p>
                    Pérdida por 2 goles - La mitad de la apuesta gana y la otra mitad se reintegra al cliente.
                </p>
                <p>
                    Pérdida por 3 goles o más - Todas las apuestas con esta opción serán pérdidas.
                </p>
                <p>
                    Las apuestas solo cuentan para los 90 minutos del partido más el tiempo adicional.
                </p>
                <p><span>Hándicap Línea -2½</span></p>
                <p>El favorito da una ventaja de línea de (-)2½ goles.</p>
                <p>
                    Un gane por 3 o más goles - Todas las apuestas con esta opción serán ganadoras.
                </p>
                <p>
                    Un gane por exactamente 2 goles - Todas las apuestas con esta opción serán pérdidas.
                </p>
                <p>
                    Gane por exactamente 1 gol - Todas las apuestas con esta opción serán pérdidas.
                </p>
                <p>
                    Empate o pérdida - Todas las apuestas con esta opción serán pérdidas.
                </p>
                <p>
                    El equipo no favorito recibe una ventaja de línea de (+)2½ goles.
                </p>
                <p>
                    Un gane por cualquier marcador o empate - Todas las apuestas con esta opción serán ganadoras.
                </p>
                <p>
                    Pérdida por exactamente 1 gol - Todas las apuestas con esta opción serán ganadoras.
                </p>
                <p>
                    Pérdida por exactamente 2 goles - Todas las apuestas con esta opción serán ganadoras.
                </p>
                <p>
                    Pérdida por 3 goles o más - Todas las apuestas con esta opción serán pérdidas.
                </p>
                <p>
                    Las apuestas solo cuentan para los 90 minutos del partido más el tiempo adicional.
                </p>
                <p><span>Hándicap Línea -2½, -3</span></p>
                <p>La apuesta se divide en dos partes:</p>
                <p>Una parte de la apuesta es una línea de 2½ goles.</p>
                <p>Una parte de la apuesta es una línea de 3 goles.</p>
                <p>El favorito da una ventaja de línea de (-)2½, (-)3 goles.</p>
                <p>
                    Un gane por 4 o más goles - Todas las apuestas con esta opción serán ganadoras.
                </p>
                <p>
                    Un gane por exactamente 3 goles - La mitad de la apuesta gana y la otra mitad se reintegra al cliente.
                </p>
                <p>
                    Un gane por exactamente 1 o 2 goles - Todas las apuestas con esta opción serán pérdidas.
                </p>
                <p>
                    Empate o Pérdida por cualquier marcador - Todas las apuestas con esta opción serán pérdidas.
                </p>
                <p>
                    El equipo no favorito recibe una ventaja de línea de (+)2½, (+)3 goles.
                </p>
                <p>
                    Un gane por cualquier marcador - Todas las apuestas con esta opción serán ganadoras.
                </p>
                <p>
                    Empate o pérdida por 1 o 2 goles - Todas las apuestas con esta opción serán ganadoras.
                </p>
                <p>
                    Pérdida por 3 goles - La mitad de la apuesta pierde y la otra mitad se reintegra al cliente.
                </p>
                <p>
                    Pérdida por 4 goles o más - Todas las apuestas con esta opción serán pérdidas.
                </p>
                <p>
                    Las apuestas solo cuentan para los 90 minutos del partido más el tiempo adicional.
                </p>
                <p><span>TOTAL</span></p>
                <p>Total de Goles</p>
                <p>Sus opciones de apuesta son Arriba, Abajo</p>
                <p>
                    Pronostique si el total de goles anotados por ambos equipos serán más o menos que la cifra especificada.
                </p>
                <p>
                    Las apuestas solo cuentan para los 90 minutos del partido más el tiempo adicional.
                </p>
            </Collapsible>
            <Collapsible title={"TARJETAS. "}>
                <p><span>TARJETAS</span></p>
                <p><span>HABRÁ ALGUNA EXPULSIÓN?</span></p>
                <p>Sus opciones de apuesta son: Si; No.</p>
                <p>
                    Pronostique si un jugador obtendrá una Tarjeta Roja en el juego.
                </p>
                <p>
                    Una tarjeta roja que se le muestre: a un jugador que haya sido substituido, que no haya sido utilizado, al personal técnico, durante el intervalo de medio tiempo o que se muestre una vez que el árbitro haya decretado el pitazo final, no contara para efectos de la apuesta.
                </p>
                <p>
                    Las apuestas solo cuentan para los 90 minutos del partido más el tiempo adicional.
                </p>
                <p><span>1ERA MITAD - TOTAL DE PUNTOS EN TRJETAS</span></p>
                <p>Primer Tiempo - Total de Puntos por Tarjeta</p>
                <p>
                    Sus opciones de apuesta son: Equipo Local, Empate, Equipo Visitante
                </p>
                <p>
                    Pronostique cual equipo obtendrá más puntos por emisión de Tarjetas en el primer tiempo.
                </p>
                <p>
                    Los puntos por tarjeta son: 10 pts por una Tarjeta Amarilla y 25 pts por una Tarjeta Amarilla/Roja (la segunda tarjeta amarilla mostrada a un jugador) y 25 por una Tarjeta Roja. El máximo de puntos por jugador es de 35 (10+25) por una tarjeta amarilla y una tarjeta amarilla/roja.
                </p>
                <p>
                    Una tarjeta que se le muestre: a un jugador que haya sido substituido, que no haya sido utilizado, al personal técnico, durante el intervalo de medio tiempo o que se muestre una vez que el árbitro haya decretado el pitazo final, no contara para efectos de la apuesta.
                </p>
                <p>
                    Las apuestas solo cuentan para los primeros 45 minutos del partido más el tiempo adicional.
                </p>
                <p><span>JUEGO - TOTAL DE PUNTOS POR TARJETAS EN EL PARTIDO</span></p>
                <p>Partido - Total de Puntos por Tarjeta</p>
                <p>
                    Sus opciones de apuesta son: Equipo Local, Empate, Equipo Visitante
                </p>
                <p>
                    Pronostique cual equipo obtendrá más puntos por emisión de Tarjetas en el partido.
                </p>
                <p>
                    Los puntos por tarjeta son: 10 pts por una Tarjeta Amarilla y 25 pts por una Tarjeta Amarilla/Roja (la segunda tarjeta amarilla mostrada a un jugador) y 25 por una Tarjeta Roja. El máximo de puntos por jugador es de 35 (10+25) por una tarjeta amarilla y una tarjeta amarilla/roja.
                </p>
                <p>
                    Una tarjeta que se le muestre: a un jugador que haya sido substituido, que no haya sido utilizado, al personal técnico, durante el intervalo de medio tiempo o que se muestre una vez que el árbitro haya decretado el pitazo final, no contara para efectos de la apuesta.
                </p>
                <p>
                    Las apuestas solo cuentan para los 90 minutos del partido más el tiempo adicional.
                </p>
                <p>Tarjeta Amarilla = 10 pts</p>
                <p>Tarjeta Roja = 25 pts</p>
                <p>Amarilla-Roja = 25 pts</p>
                <p><span>1ERA MITAD - TOTAL EXACTO DE TARJETAS</span></p>
                <p>Primer Tiempo - Total exacto de Tarjetas</p>
                <p>Sus opciones de apuesta son: 1; 2; 3; 4; 5; 6+</p>
                <p>
                    Pronostique el total de tarjetas mostradas en el primer tiempo.
                </p>
                <p>
                    Una tarjeta que se le muestre: a un jugador que haya sido substituido, que no haya sido utilizado, al personal técnico, durante el intervalo de medio tiempo o que se muestre una vez que el árbitro haya decretado el pitazo final, no contara para efectos de la apuesta.
                </p>
                <p>
                    Las apuestas solo cuentan para los primeros 45 minutos del partido más el tiempo adicional.
                </p>
                <p>Tarjeta Amarilla = 1</p>
                <p>Tarjeta Roja = 2</p>
                <p>Amarilla-Roja = 2</p>
                <p><span>1ERA MITAD - TOTAL DE TARJETAS</span></p>
                <p>Primer Tiempo - Total de Tarjetas</p>
                <p>Sus opciones de apuesta son: 1; 2; 3; 4; 5; 6+</p>
                <p>
                    Pronostique el total de tarjetas mostradas en el primer tiempo.
                </p>
                <p>
                    Una tarjeta que se le muestre: a un jugador que haya sido substituido, que no haya sido utilizado, al personal técnico, durante el intervalo de medio tiempo o que se muestre una vez que el árbitro haya decretado el pitazo final, no contara para efectos de la apuesta.
                </p>
                <p>
                    Las apuestas solo cuentan para los primeros 45 minutos del partido más el tiempo adicional.
                </p>
                <p>Tarjeta Amarilla = 1</p>
                <p>Tarjeta Roja = 2</p>
                <p>Amarilla-Roja = 2</p>
                <p><span>JUEGO - TOTAL EXACTO DE TARJETAS</span></p>
                <p>Partido - Total Exacto de Tarjetas</p>
                <p>
                    Sus opciones de apuesta son: &lt;4; 5; 6; 7; 8; 9; 10; 11; 12+
                </p>
                <p>Pronostique el total de tarjetas mostradas en el partido.</p>
                <p>
                    Una tarjeta que se le muestre: a un jugador que haya sido substituido, que no haya sido utilizado, al personal técnico, durante el intervalo de medio tiempo o que se muestre una vez que el árbitro haya decretado el pitazo final, no contara para efectos de la apuesta.
                </p>
                <p>
                    Las apuestas solo cuentan para los 90 minutos del partido más el tiempo adicional.
                </p>
                <p>Tarjeta Amarilla = 1</p>
                <p>Tarjeta Roja = 2</p>
                <p>Amarilla-Roja = 2</p>
                <p><span>JUEGO - TOTAL DE TARJETAS</span></p>
                <p>Partido - Total de Tarjetas</p>
                <p>¿Las tarjetas mostradas a ambos equipos irán arriba o abajo?</p>
                <p>Solo para el tiempo regular de juego.</p>
                <p>Tarjeta Amarilla = 1</p>
                <p>Tarjeta Roja = 2</p>
                <p>Amarilla-Roja = 2</p>
                <p><span>JUEGO - TOTAL DE TARJETAS (XX) (CASA)</span></p>
                <p><span>JUEGO - TOTAL DE TARJETAS (XX) ( EQUIPO CASA )</span></p>
                <p>
                    Predecir el número total de tarjetas en el juego para el equipo local. La línea de la tarjeta será completa o bien la mitad de la tarjeta con los asentamientos de la siguiente manera.
                </p>
                <p>
                    Tarjeta con línea de 4,5 - Si apuestas en 4.5, su apuesta será ganada si hay más de 4 cartas en el partido. De lo contrario, su apuesta se pierde. Si usted apuesta en el “debajo de” 4.5, sus apuesta gana si hay menos de 5 cartas en el partido. De lo contrario, su apuesta se pierde.
                </p>
                <p><span>JUEGO - TOTAL DE TARJETAS (XX) (VISITANTE)</span></p>
                <p><span>JUEGO - TOTAL DE TARJETAS (XX) ( EQUIPO VISITA )</span></p>
                <p>
                    Predecir el número total de tarjetas en el juego para el equipo visita. La línea de la tarjeta será completa o bien la mitad de la tarjeta con los asentamientos de la siguiente manera.
                </p>
                <p>
                    Tarjeta con línea de 4,5 - Si apuestas en 4.5, su apuesta será ganada si hay más de 4 cartas en el partido. De lo contrario, su apuesta se pierde. Si usted apuesta en el “debajo de” 4.5, sus apuesta gana si hay menos de 5 cartas en el partido. De lo contrario, su apuesta se pierde.
                </p>
                <p><span>1ERA MITAD - TOTAL DE TARJETAS (XX) (CASA)</span></p>
                <p><span>1ERA MITAD - TOTAL DE TARJETAS (XX) (EQUIPO LOCAL)</span></p>
                <p>
                    Predecir el número total de tarjetas en la primera mitad para el equipo local. La línea de la tarjeta será bien la mitad de la tarjeta con los asentamientos de la siguiente manera.
                </p>
                <p>
                    Tarjeta de línea de 4,5 - Si apuestas en “arriba de” 4.5, su apuesta será ganada si hay más de 4 tarjetas en el partido. De lo contrario, su apuesta se pierde. Si usted apuesta en “debajo de” 4.5, sus apuestas gana si hay menos de 5 cartas en el partido. De lo contrario, su apuesta se pierde.
                </p>
                <p><span>1ERA MITAD - TOTAL DE TARJETAS (XX) (VISITA)</span></p>
                <p><span>1ERA MITAD - TOTAL DE TARJETAS (XX) ( EQUIPO VISITA )</span></p>
                <p>
                    Predecir el número total de tarjetas en la primera mitad para el equipo VISITA. La línea de la tarjeta será bien la mitad de la tarjeta con los asentamientos de la siguiente manera.
                </p>
                <p>
                    Tarjeta de línea de 4,5 - Si apuestas en “arriba de” 4.5, su apuesta será ganada si hay más de 4 tarjetas en el partido. De lo contrario, su apuesta se pierde. Si usted apuesta en “debajo de” 4.5, sus apuestas gana si hay menos de 5 cartas en el partido. De lo contrario, su apuesta se pierde.
                </p>
                <p><span>CUAL EQUIPO VA A ACUMULAR MAS PUNTOS DE TARJETAS?</span></p>
                <p><span>QUÉ EQUIPO RECIBIRÁ MÁS PUNTOS EN TARJETAS ?</span></p>
                <p>
                    Sus opciones de apuesta son equipo local; Empate; equipo visitante
                </p>
                <p>
                    Predecir el equipo al que le emitirán la mayor cantidad de puntos de tarjetas en el Juego
                </p>
            </Collapsible>
            <Collapsible title={"ESPECIALES PARA TIROS DE ESQUINA. "}>
                    <p><span>ESPECIALES PARA TIROS DE ESQUINA</span></p>
                    <p><span>1ERA MITAD - TIROS DE ESQUINA IMPAR / PAR</span></p>
                    <p>Primer Tiempo - Tiros de esquina Par / Impar</p>
                    <p>Sus opciones de apuesta son: Par; Impar.</p>
                    <p>
                        Pronostique si el número total de Tiros de Esquina será Par o Impar.
                    </p>
                    <p>
                        Tiros de esquina concedidos pero que no se toman no contarán para efectos de pago.
                    </p>
                    <p>
                        Tiros de esquina que se tengan que repetir solo contarán como uno.
                    </p>
                    <p>
                        Las apuestas solo cuentan para los primeros 45 minutos del partido más el tiempo adicional.
                    </p>
                    <p><span>1ERA MITAD - TOTAL TIROS DE ESQUINA</span></p>
                    <p>Primer Tiempo - Total de Tiros de Esquina</p>
                    <p>Sus opciones de apuesta son: Arriba; Abajo.</p>
                    <p>
                        Pronostique si el número total de tiros de esquina hechos por ambos equipos se irá Arriba o Abajo del número especificado.
                    </p>
                    <p>
                        Tiros de esquina concedidos pero que no se toman no contarán para efectos de pago.
                    </p>
                    <p>
                        Tiros de esquina que se tengan que repetir solo contarán como uno.
                    </p>
                    <p>
                        Las apuestas solo cuentan para los primeros 45 minutos del partido más el tiempo adicional.
                    </p>
                    <p><span>1ERA MITAD - TOTAL TIROS DE ESQUINA (EQUIPO VISITANTE)</span></p>
                    <p>Primer Tiempo - Tiros de Esquina (Equipo Visitante)</p>
                    <p>Sus opciones de apuesta son: Arriba; Abajo.</p>
                    <p>
                        Pronostique si el número total de tiros de esquina hechos por el equipo visitante se irá Arriba o Abajo del número especificado.
                    </p>
                    <p>
                        Tiros de esquina concedidos pero que no se toman no contarán para efectos de pago.
                    </p>
                    <p>
                        Tiros de esquina que se tengan que repetir solo contarán como uno.
                    </p>
                    <p>
                        Las apuestas solo cuentan para los primeros 45 minutos del partido más el tiempo adicional.
                    </p>
                    <p><span>1ERA MITAD - TOTAL TIROS DE ESQUINA (EQUIPO CASA)</span></p>
                    <p>Primer Tiempo - Tiros de Esquina (Equipo Local)</p>
                    <p>Sus opciones de apuesta son: Arriba; Abajo.</p>
                    <p>
                        Pronostique si el número total de tiros de esquina hechos por el equipo local se irá Arriba o Abajo del número especificado.
                    </p>
                    <p>
                        Tiros de esquina concedidos pero que no se toman no contarán para efectos de pago.
                    </p>
                    <p>
                        Tiros de esquina que se tengan que repetir solo contarán como uno.
                    </p>
                    <p>
                        Las apuestas solo cuentan para los primeros 45 minutos del partido más el tiempo adicional.
                    </p>
                    <p><span>1ERA MITAD - HANDICAP PARA TIROS DE ESQUINA</span></p>
                    <p>Primer Tiempo - Spread para Tiros de Esquina</p>
                    <p>Sus opciones de apuesta son: Local; Visita.</p>
                    <p>
                        Pronostique cual equipo alcanzará la mayor cantidad de tiros de esquina en el primer tiempo una vez que el Spread Hándicap haya sido agregado al número actual de tiros de esquina hechos por cada equipo.
                    </p>
                    <p>
                        Tiros de esquina concedidos pero que no se toman no contarán para efectos de pago.
                    </p>
                    <p>
                        Tiros de esquina que se tengan que repetir solo contarán como uno.
                    </p>
                    <p>
                        Las apuestas solo cuentan para los primeros 45 minutos del partido más el tiempo adicional.
                    </p>
                    <p><span>1ERA MITAD - APUESTAS EN TIROS DE ESQUINA</span></p>
                    <p>Primer Tiempo - Apuesta de Tiros de Esquina</p>
                    <p>Sus opciones de apuesta son: Local; Visita; Empate.</p>
                    <p>
                        Pronostique cual equipo alcanzará la mayor cantidad de tiros de esquina en el primer tiempo del partido
                    </p>
                    <p>
                        Tiros de esquina concedidos pero que no se toman no contarán para efectos de pago.
                    </p>
                    <p>
                        Tiros de esquina que se tengan que repetir solo contarán como uno.
                    </p>
                    <p>
                        Las apuestas solo cuentan para los primeros 45 minutos del partido más el tiempo adicional.
                    </p>
                    <p><span>JUEGO - TIROS DE ESQUINA IMPAR / PAR</span></p>
                    <p>Partido - Tiros de Esquina Par / Impar</p>
                    <p>Sus opciones de apuesta son: Par; Impar.</p>
                    <p>
                        Pronostique si el número total de Tiros de Esquina será Par o Impar.
                    </p>
                    <p>
                        Tiros de esquina concedidos pero que no se toman no contarán para efectos de pago.
                    </p>
                    <p>
                        Tiros de esquina que se tengan que repetir solo contarán como uno.
                    </p>
                    <p>
                        Las apuestas solo cuentan para los 90 minutos del partido más el tiempo adicional.
                    </p>
                    <p><span>JUEGO - TOTAL TIROS DE ESQUINA</span></p>
                    <p>Partido - Total de Tiros de Esquina</p>
                    <p>Sus opciones de apuesta son: Arriba; Abajo.</p>
                    <p>
                        Pronostique si el número total de tiros de esquina hechos por ambos equipos se irá Arriba o Abajo del número especificado.
                    </p>
                    <p>
                        Tiros de esquina concedidos pero que no se toman no contarán para efectos de pago.
                    </p>
                    <p>
                        Tiros de esquina que se tengan que repetir solo contarán como uno.
                    </p>
                    <p>
                        Las apuestas solo cuentan para los 90 minutos del partido más el tiempo adicional.
                    </p>
                    <p><span>JUEGO - TOTAL TIROS DE ESQUINA (EQUIPO VISITA)</span></p>
                    <p>Partido - Total Tiros de Esquina (Equipo Visitante)</p>
                    <p>Sus opciones de apuesta son: Arriba; Abajo.</p>
                    <p>
                        Pronostique si el número total de tiros de esquina hechos por el equipo visitante se irá Arriba o Abajo del número especificado.
                    </p>
                    <p>
                        Tiros de esquina concedidos pero que no se toman no contarán para efectos de pago.
                    </p>
                    <p>
                        Tiros de esquina que se tengan que repetir solo contarán como uno.
                    </p>
                    <p>
                        Las apuestas solo cuentan para los 90 minutos del partido más el tiempo adicional.
                    </p>
                    <p><span>JUEGO - TOTAL TIROS DE ESQUINA (EQUIPO CASA)</span></p>
                    <p>Partido - Total Tiros de Esquina ( Equipo Local)</p>
                    <p>Sus opciones de apuesta son: Arriba; Abajo.</p>
                    <p>
                        Pronostique si el número total de tiros de esquina hechos por el equipo local se irá Arriba o Abajo del número especificado.
                    </p>
                    <p>
                        Tiros de esquina concedidos pero que no se toman no contarán para efectos de pago.
                    </p>
                    <p>
                        Tiros de esquina que se tengan que repetir solo contarán como uno.
                    </p>
                    <p>
                        Las apuestas solo cuentan para los 90 minutos del partido más el tiempo adicional.
                    </p>
                    <p><span>JUEGO - TIROS DE ESQUINA (EQUIPO VISITANTE)</span></p>
                    <p>Partido - Tiros de Esquina (Equipo Visitante)</p>
                    <p>Sus opciones de apuesta son: 0-2; 3-4; 5-6; 7+</p>
                    <p>
                        Pronostique el rango de tiros de esquina hechos por el equipo visitante.
                    </p>
                    <p>
                        Tiros de esquina concedidos pero que no se toman no contarán para efectos de pago.
                    </p>
                    <p>
                        Tiros de esquina que se tengan que repetir solo contarán como uno.
                    </p>
                    <p>
                        Las apuestas solo cuentan para los 90 minutos del partido más el tiempo adicional.
                    </p>
                    <p><span>JUEGO - TIROS DE ESQUINA (EQUIPO CASA)</span></p>
                    <p>Partido - Tiros de Esquina (Equipo Local)</p>
                    <p>Sus opciones de apuesta son: 0-2; 3-4; 5-6; 7+</p>
                    <p>
                        Pronostique el rango de tiros de esquina hechos por el equipo local.
                    </p>
                    <p>
                        Tiros de esquina concedidos pero que no se toman no contarán para efectos de pago.
                    </p>
                    <p>
                        Tiros de esquina que se tengan que repetir solo contarán como uno.
                    </p>
                    <p>
                        Las apuestas solo cuentan para los 90 minutos del partido más el tiempo adicional.
                    </p>
                    <p><span>JUEGO - HANDICAP PARA TIROS DE ESQUINA</span></p>
                    <p>Partido - Spread para Tiros de Esquina</p>
                    <p>Sus opciones de apuesta son: Local; Visita.</p>
                    <p>
                        Pronostique cual equipo alcanzará la mayor cantidad de tiros de esquina en el primer tiempo una vez que el Spread Hándicap haya sido agregado al número actual de tiros de esquina hechos por cada equipo.
                    </p>
                    <p>
                        Tiros de esquina concedidos pero que no se toman no contarán para efectos de pago.
                    </p>
                    <p>
                        Tiros de esquina que se tengan que repetir solo contarán como uno.
                    </p>
                    <p>
                        Las apuestas solo cuentan para los 90 minutos del partido más el tiempo adicional.
                    </p>
                    <p>Juego - Apuestas En Tiros De Esquina</p>
                    <p>Partido - Apuesta de Tiros de Esquina</p>
                    <p>Sus opciones de apuesta son: Local; Visita; Empate.</p>
                    <p>
                        Pronostique cual equipo alcanzará la mayor cantidad de tiros de esquina en el primer tiempo del partido
                    </p>
                    <p>
                        Tiros de esquina concedidos pero que no se toman no contarán para efectos de pago.
                    </p>
                    <p>
                        Tiros de esquina que se tengan que repetir solo contarán como uno.
                    </p>
                    <p>
                        Las apuestas solo cuentan para los 90 minutos del partido más el tiempo adicional.
                    </p>
                    <p><span>JUEGO - TOTAL TIROS DE ESQUINA (ADICIONALES)</span></p>
                    <p><span>TOTAL DE TIROS DE ESQUINA ( AGREGADOS)</span></p>
                    <p>
                        Predecir el número de saques de esquina en un partido. La línea de la esquina será, medio-corner o corner completo con la liquidación de la apuesta de la siguiente manera:
                    </p>
                    <p>
                        Línea de la esquina de 8.5 - Si apuestas en 8.5, su apuesta será ganada si hay más de 8 corners en el partido. De lo contrario, su apuesta se pierde. Si usted apuesta en 8.5, sus apuestas ganan si hay menos de 9 saques de esquina en el partido. De lo contrario, su apuesta se pierde.
                    </p>
                    <p>
                        Con una línea de esquina de un número entero, si el número total de esquinas es la misma que la línea de la esquina, se devuelve su apuesta.
                    </p>
                    <p>
                        Línea de la esquina de 8, 8.5 - Si apuestas “arriba de “, su apuesta se divide entre arriba de 8 esquinas y arriba de 8,5 esquinas. Su apuesta será ganada si hay más de 8 corners en el partido. Si hay 8 esquinas exactamente, la mitad de su apuesta se pierde y la otra mitad se devuelve. De lo contrario, todo el juego se pierde. Si usted apuesta “ bajo de “, su apuesta se divide por igual entre los menores de 8 esquinas y debajo de 8,5 esquinas. Su apuesta será ganada si hay menos de 8 corners en el partido. Si hay 8 esquinas exactamente, la mitad de sus apuesta se gana y se devuelve a la otra mitad. De lo contrario, toda la apuesta se pierde.
                    </p>
                    <p>
                        En el caso de que un partido se suspende antes que 90 minutos se hayan jugado, todas las apuestas serán canceladas, a menos que el resultado de las apuestas ya esté determinado.
                    </p>
                    <p>
                        En caso de haber un corner para ser re-tomado (por ejemplo, por una falta en el área), entonces sólo se contará un corner. Esquinas sancionados pero no ejecutados, no cuentan.
                    </p>
                    <p>Tiros de esquina Asiáticos En-Vivo</p>
                    <p>
                        Fundada como Tiros de esquina, en el caso de un abandono antes de haber jugado 90 minutos, todas las apuestas serán canceladas a menos que ya se haya determinado un resultado
                    </p>
                    <p><span>1ERA MITAD - TOTAL TIROS DE ESQUINA (ADICIONALES)</span></p>
                    <p><span>1ERA MITAD - TIROS DE ESQUINA (CASA)</span></p>
                    <p><span>1ERA MITAD - TIROS DE ESQUINA (EQUIPO LOCAL)</span></p>
                    <p>
                        Fundada como total de tiros de esquina efectuados por el equipo local en el 1er tiempo, en caso de un abandono antes del medio tiempo, todas las apuestas serán canceladas a menos que ya se haya determinado el resultado.
                    </p>
                    <p><span>1ERA MITAD - TIROS DE ESQUINA (VISITANTE)</span></p>
                    <p>
                        Fundada como total de tiros de esquina anotados por el equipo visita en el 1er tiempo, en el caso de un abandono antes del medio tiempo, todas las apuestas serán canceladas a menos que ya se haya determinado el resultado.
                    </p>
            </Collapsible>
        </section >
    )
}