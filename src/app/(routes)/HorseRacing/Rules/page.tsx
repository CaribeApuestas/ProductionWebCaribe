/* eslint-disable react/no-unescaped-entities */
import { Metadata } from "next";
import styles from "./styles.module.css";


export const metadata: Metadata = {
    title: "Reglas para hipismo | CaribeApuesta",
    description: "Descubre las reglas esenciales del hipismos en CARIBEAPUESTA - Tu guía definitiva para apostar con confianza y responsabilidad. Aprende los términos clave, comprende las obligaciones del jugador, y disfruta de una experiencia de apuestas segura y emocionante. ¡Regístrate e ingresa ahora para comenzar!",
    metadataBase: new URL("http://localhost:3000/"),
    keywords: ['Reglas del hipismo', 'Reglas del hipismo online', 'Reglas del hipismo en caribeapuesta'],
    openGraph: {
        title: "Reglas para hipismo",
        description: "Descubre las reglas esenciales del hipismos en CARIBEAPUESTA - Tu guía definitiva para apostar con confianza y responsabilidad. Aprende los términos clave, comprende las obligaciones del jugador, y disfruta de una experiencia de apuestas segura y emocionante. ¡Regístrate e ingresa ahora para comenzar!"
    }
};

export default function Rules() {
    return (
        <div className={styles.container}>
            <h2> REGLAMENTO GENERAL DE LOS JUEGOS Y APUESTAS HIPICAS OPERADOS POR CORPORACION EL INMEJORABLE 804, C.A. </h2>
            <p><mark>ARTICULO 1.</mark> - Este Reglamento tiene por objeto establecer las Condiciones Generales que
                regularan de forma unificada por las OPERADORAS la CAPTACION DE APUESTAS RELACIONADAS
                CON LA RETRANSMISION DE CARRERAS DE CABALLO DE GALGOS Y OTROS EVENTOS DE LA ACTIVACION
                HIPICA QUE SE DESARROLLAN FUERA DEL TERRITORIO NACIONAL, manejando por la empresa
                CORPORACION EL INMEJORABLE 804 C.A, quien en lo sucesivo se denominara LA CORPORACION
                EL INMEJORABLE 804 , correspondiente a las licencias otorgadas por LA SUPERINTENDENCIA
                NACIONAL DE ACTIVIDADES HIPICAS, en lo adelante denominado SUNAHIP.</p>
            <p><mark>ARTICULO 2.</mark> - El hecho de participación en cada juego o apuesta implica,
                por parte del apostador, su aceptación y su adhesión a las normas previstas en este Reglamento
                General y en el Reglamento Específico de cada juego.</p>
            <p><mark>ARTICULO 3.</mark> - Este Reglamento rige para la captación de Apuestas relacionadas
                con la retransmisión de carreras de caballo y galgos, además de otros eventos deportivos
                relacionados con la actividad hípica, que se desarrollan fuera del territorio nacional.
            </p>
            <p><mark>ARTICULO 4.</mark> - En las diversas modalidades de Juego y Apuestas ofrecidas por
                LA CORPORACION EL INMEJORABLE 804, el público apostador tiene la opción de seleccionar el
                tipo de hipódromo contra el cual realiza su jugada. Estos hipódromos se encuentran agrupados
                por categoría,en relación con la seguridad y beneficios ofrecidos al apostador, de la siguiente manera:
            </p>
            <section>
                <h4>CLASIFICACION DE LOS HIPODROMOS Y/O EVENTOS HIPICOS</h4>
                <div className={styles.tableContainer}>
                    <table>
                        <thead>
                            <tr>
                                <td>CLASE</td>
                                <td>SEGURIDAD</td>
                                <td>DESCRIPCION</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>A</td>
                                <td>Seguros</td>
                                <td>
                                    Son hipódromos y/o eventos hípicos que cuentan con una firme estructura y
                                    alta reputación, en virtud de tanto sus oficiales de carreras como la Comisión
                                    de Carreras ejercen un estricto control en la operación de los mismos
                                </td>
                            </tr>
                            <tr>
                                <td>B</td>
                                <td>Inseguros </td>
                                <td>
                                    Son hipódromos y/o eventos hípicos que manejan un mínimo de un millón de
                                    dólares promedio diario, lo que dificulta la manipulación de pools,
                                    sin embargo, consideramos que las Comisiones de Carreras de sus estados no
                                    son tan sofisticadas para considerarse seguros.
                                </td>
                            </tr>
                            <tr>
                                <td>C</td>
                                <td>Riesgoso</td>
                                <td>
                                    Son hipódromos y/o eventos hípicos de los cuales se decide tomar apuestas
                                    porque se considera muy populares o manejan menos de un millón de dólares y
                                    se toman para proporcionar servicio a la clientela sin embargo se consideran
                                    no muy transparentes.
                                </td>
                            </tr>
                            <tr>
                                <td>D</td>
                                <td>Muy Riesgoso</td>
                                <td>
                                    Son hipódromos eventos hípicos y/o jai alai de los cuales se decide tomar
                                    apuestas porque se consideran muy populares y se toman para proporcionar
                                    servicio a la clientela. Sin embargo se consideran pocos transparentes.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
            <section>
                <h4>CLASIFICACION DE LOS HIPODROMOS Y EVENTOS A LOS FINES DE LOS JUEGOS Y/O APUESTAS</h4>
                <div className={styles.tableContainer}>
                    <table>
                        <thead>
                            <tr>
                                <td>CLASE</td>
                                <td>HIPODROMO</td>
                                <td className={styles.fullColumn}>UBICACION</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>A</td>
                                <td>AQUEDUCT
                                    <br />BELMONT PARK
                                    <br />BELMONT STAKES
                                    <br />BETFAIR HOLLYWOOD PARK
                                    <br />BREEDER'S CUP
                                    <br />DEL MAR
                                    <br />DUBAI WORLD CUP
                                    <br />GULFSTREAM
                                    <br />HONG KONG
                                    <br />KENTUCKY DERBY
                                    <br />PREAKNESS
                                    <br />SANTA ANITA
                                    <br />KEENELAND
                                    <br />SARATOGA
                                </td>
                                <td>Aqueduct Racetrack 110-00 Rockaway Blvd  Jamaica NY 11420
                                    <br />Cup 1050S. Prairie Ave. Inglewood. C.A 90301. California. USA
                                    <br />Cup 2260 Jimmy Durante Boulevard Del Mar, C.A 92014. USA
                                    <br />Cup 901 S Federal HWY Hallandale Beach, FL 33009, USA
                                    <br />
                                    <br />
                                    <br />
                                    <br />(CONDICION ESPECIAL CATEGORIA “A” SOLO LOS MESES DE NOV-DIC-ENE-FEB-MAR.)
                                    <br />
                                    <br />
                                    <br />
                                    <br />Cup Santa Anita Park 285 W Huntington Drive Arcadia C.A, USA
                                    <br />4201 Versailles Rd Lexington. KY 40510
                                    <br />267 Union Avenue Saratoga Springs. NY 12866. USA
                                    <br />
                                </td>
                            </tr>
                            <tr>
                                <td>B</td>
                                <td>AUSTRALIA
                                    <br />ARLINGTON
                                    <br />ATLANTIC CITY
                                    <br />HIALEAH
                                    <br />FAIRGROUNDS
                                    <br />FAIRPLEX
                                    <br />LONGACRES
                                    <br />MONMOUTH PARK
                                    <br />GARDEN STATE
                                    <br />MEADOWLANDS
                                    <br />MEADOWLANDS HARNESS
                                    <br />PIMLICO
                                    <br />
                                </td>
                                <td>
                                    <br />
                                    <br />
                                    <br />
                                    <br />Fair Dr, Freericksburg. TX 78624
                                </td>
                            </tr>
                            <tr>
                                <td>C</td>
                                <td>HIPÓDROMOS EUROPEOS (IRLANDA, LONDRES)
                                    <br />CHARLES TOWNS
                                    <br />TAMPA BAY DOWNS
                                    <br />CHURCHILL DOWNS
                                    <br />DELAWARE PARK
                                    <br />DELTA DOWN
                                    <br />ELLIS PARK
                                    <br />EVANGELINE DOWNS
                                    <br />FINGER LAKES
                                    <br />GOLDEN GATE FIELDS
                                    <br />GULFSTREAM
                                    <br />INDIANA DOWNS
                                    <br />LAUREL PARK
                                    <br />LOS ALAMITOS
                                    <br />LOUSIANA DOWNS
                                    <br />PENN NATIONAL
                                    <br />ARAPAHOE PARK
                                    <br />BALMORAL
                                    <br />BAY MEADOWS
                                    <br />EMERALD DOWNS
                                    <br />F.FRESNO
                                    <br />F. SAN MATEO EN BAY
                                    <br />MEADOWS
                                    <br />F. PLEASANTON
                                    <br />F. SACRAMENTO
                                    <br />F. SANTA ROSA
                                    <br />F. STOCKTON
                                    <br />F. VALLEJO
                                    <br />FAIRMOUNT PARK
                                    <br />FORT ERIE
                                    <br />HAWTHORNE
                                    <br />LONE STAR PARK
                                    <br />KENTUCKY DOWNS
                                    <br />MAYWOOD PARK HARNESS
                                    <br />MOUNTAINNER
                                    <br />PRAIRIE MEADOWS
                                    <br />RAYNHAM PARK
                                    <br />REMINGTON PARK
                                    <br />REMATA PARK
                                    <br />SAM HOUSTON PARK
                                    <br />SPORTSMAN'S PARK
                                    <br />SUFFOLK DOWNS
                                    <br />THISTLEDOWN
                                    <br />TURF PARADISE
                                    <br />TURFWAY PARK
                                    <br />WOODBINE
                                    <br />YABAPAI DOWNS
                                </td>
                                <td>750 Hollywood Drive Charles Town, WV 25414. USA
                                    <br />700 Central Avenue , Louisville, KY, USA
                                    <br />Delaware Park Boulevard Wilmington, DE 19804, USA
                                    <br />2717 Delta Downs Dr Vinton LA 70668. USA
                                    <br />ELLIS PARK 3300 U.S 41, HENDERSON. KY
                                    <br />2235 Creswell Lane Extension Opelousas LA 70570. USA
                                    <br />5857 New York 96 Farmington. NY 1425. USA
                                    <br />1100 Eastshore Frontage Road Berkeley.USA
                                    <br />901 S Federal HWY Hallandale Beasch, FL 33009.*CLASE C EN FECHAS ABR-MAY-JUN-JUL-AGO-SEP-OCT
                                    <br />4200 Michigan Road, SHERLBYVILLE, in 46176 State Indiana USA
                                    <br />198 Laurel Race Track Rd, Laureal, MD 20724, USA
                                    <br />4961 Katerlla Avenue Los Alamitos, C.A 90720, USA
                                    <br />8000 E Texas St. Bosiier City, LA. USA
                                    <br />777 Hollywood BLVD Grantville, Pa, USA
                                    <br />Qunci Av, AURORA, CO 80016, USA
                                    <br />
                                    <br />
                                    <br />2300 Esmerald Downs Drive Auburo, WA 98001. USA
                                    <br />1121 S. Chance Avenue Fresno, C.A 93702
                                    <br />
                                    <br />
                                    <br />1121. S Chance Avenue Fresno, C.A 93702
                                    <br />1600 Exposition Blvd. Sacramento, C.A 95815
                                    <br />1350 BENNETT VALLET ROAD -SANTA ROSA,C.A 95404
                                    <br />1121 S. Chance Avenue Fresno, C.A 93702
                                    <br />
                                    <br />9301 Collinsville Rd Collinsville, IL 82234.USA
                                    <br />230 Catherine. Fort Erie, ON L2A 2K9, Canada
                                    <br />3501 S Laramia Ave, Cicero IL 608604
                                    <br />1000 Lone Star Parkway Grand Prairie TX 75050.USA
                                    <br />
                                    <br />1420 Mountainer Circle
                                    <br />1 Prairie Meadows Drive Altoona , IA 50009 USA
                                    <br />
                                    <br />1 Remington Please Oklahoma City. Ok 73111, USA
                                    <br />1 Retama Pkwy, Selena TX 78154
                                    <br />7575 North Sam Houston Pkwy W. Houston TX 77064
                                    <br />
                                    <br />111 Waldemar Ave, Boston MA 02128
                                    <br />21501 Emery Road Cleveland, OH 44128. USA
                                    <br />1501 W Bell Rd Phoenix, AZ 85023
                                    <br />7500 Turfway Rd Florence, KY 41042
                                    <br />555 X Dale Boulevard Toronto, ON M9W 5L2, Canada
                                    <br />
                                </td>
                            </tr>
                            <tr>
                                <td>D</td>
                                <td>JAI ALAI</td>
                                <td>GALGODROMOS</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p>TODO HIPODROMO O EVENTO NO CONTEMPLADO EN ESTAS CLASIFICACIONES SON CONSIDERADOS TIPO “C” Y TENDRAN LOS LÍMITES DE PAGOS MAXIMOS CORRESPONDIENTE AL MISMO.</p>
            </section>
            <section>
                <p className={styles.marginBottom_off}><mark>ARTICULO 5.</mark> -Las condiciones para la comercialización de todos los juegos hípicos son:</p>
                <ol type="a" className={styles.marginTop_off}>
                    <li><p> Los juegos hípicos se comercializaran mediante la utilización de un Sistema de Software único, que LA CORPORACION EL INMEJORABLE 804 dispondrá únicamente en su página web.</p></li>
                    <li><p> El monto de Apuesta, al igual que los DIVIDENDOS, se expresaran en UNIDADES, siendo la base de cálculo de las mismas la moneda nacional (El Bolívar), en consecuencia, LA CORPORACION EL INMEJORABLE 804 se obliga a notificar por escrito a la SUNAHIP, el equivalente en bolívares el valor de la UNIDAD, cada vez que esta registre cambios en su valor, además deberá ser publicada en un lugar visible en su página web.</p></li>
                    <li><p> EL APOSTADOR realizara sus jugadas mediante la compra del ticket o boleto correspondiente que le servirá, si resultare ganador, como único comprobante valido para cobrar el DIVIDENDO respectivo</p></li>
                    <li><p> El ticket o boleto de cada modalidad de apuesta, tendrá la fecha y hora de la venta, día y fecha del programa oficial, la carrera válida para la apuesta, el numero o los números de los ejemplares seleccionados por el apostador el premio en unidades de cada apuesta realizada, el monto total a pagar por el apostador.</p></li>
                    <li><p> Todas las apuestas deberán ser realizadas antes de que inicie el evento cualquier apuesta realizada después del inicio del evento será invalidada.</p></li>
                    <li><p> Los menores de dieciocho (18) años no podrán adquirir ticket o boleto ni cobrar DIVIDENDOS de estas apuestas.</p></li>
                </ol>
            </section>
            <section>
                <p className={styles.marginBottom_off}><mark>ARTICULO 6.</mark> - Queda estrictamente prohibido el acceso a todos los CENTRO DE APUESTAS afiliados a LA CORPORACION EL INMEJORABLE 804 a:</p>
                <ol type="a" className={styles.marginTop_off}>
                    <li><p>Menores de dieciocho (18) años.</p></li>
                </ol>
            </section>
            <section>
                <p className={styles.marginBottom_off}><mark>ARTICULO 7.</mark> - Las condiciones para el pago de DIVIDENDOS de las apuestas son:</p>
                <ol type="a" className={styles.marginTop_off}>
                    <li><p> LA CORPORACION EL INMEJORABLE 804 se reserva el derecho de aceptar, limitar o rechazar cualquier apuesta antes de recibirla.</p></li>
                    <li><p> Solamente participaran en el programa oficial respectivo los tickets o boletos emitidos por LA CORPORACION EL INMEJORABLE 804 con todos sus requisitos formales.</p></li>
                    <li><p> Los resultados oficiales de las carreras de caballos de galgos y de cualquier otro evento deportivo relacionado con la actividad hípica, serán emitidos por LA CORPORACION EL INMEJORABLE 804, responsable de la retransmisión de la señal y la data utilizada por esta.</p></li>
                    <li><p> Los DIVIDENDOS correspondientes a juegos y apuestas, procesados de acuerdo con el orden oficial definitivo de llegada de cada competencia, por el Sistema Central de Apuestas de LA CORPORACION EL INMEJORABLE 804 se pagaran de conformidad con lo previsto en el reglamento de juegos respectivo. </p></li>
                    <li><p> El derecho de reclamo por cobro de DIVIDENDOS de los tickets o boletos ganadores, caducara a los ocho (8) días continuos contados a partir del día siguiente a la fecha de celebración del respectivo programa oficial de carrera. </p></li>
                    <li><p> Los DIVIDENDOS solo serán pagados a la persona natural titular del usuario web.</p></li>
                    <li><p> En ningún caso los DIVIDENDOS de las apuestas realizadas en ocasión a cualquiera de los juegos autorizados, generaran interés ni estarán sujetos a corrección monetaria ni ajustes por inflación.</p></li>
                    <li><p> <b>EN CASO DE QUE SE OFERTE ALGUNA APUESTA POR ERROR EN LOS PROGRAMAS (WINNERS, CONDENSADO O PREMIUN) O EL SISTEMA, SOLO SE DEVOLVERA EL MONTO APOSTADOR POR ESE CONCEPTO.</b></p></li>
                </ol>
            </section>
            <section>
                <p className={styles.marginBottom_off}><mark>ARTICULO 8.</mark> - Las condiciones para las reclamaciones se surjan con ocasión de cualquiera de los juegos hípicos son:</p>
                <ol type="a" className={styles.marginTop_off}>
                    <li><p> Todo poseedor de un ticket o boleto que se considere con derecho a reclamo deberá formalizar su denuncia ante la SUPERINTENDENCIA NACIONAL DE ACTIVIDADES HIPICAS (SUNAHIP), organismo facultado para regular la actividad hípica. Toda denuncia deberá formularse dentro del plazo máximo e improrrogable de diez (10) días continuos, contados a partir del día siguiente a la fecha del respectivo programa oficial de carreras.</p></li>
                    <li><p> El interesado para formular la denuncia, deberá consignar el ticket recibido original objeto de reclamación y fotocopias de su cedula de identidad, así como exponer sus razones, firmar y estampar sus huellas digitales en el formulario de reclamación.</p></li>
                </ol>
            </section>
            <section>
                <p ><mark>ARTICULO 9.</mark> - LA CORPORACION EL INMEJORABLE 804 podrá reformar total o parcialmente este Reglamento, cuyo proyecto será sometido a revisión por la Gerencia de Fiscalización y Control de Juegos de la SUPERINTENDENCIA NACIONAL DE ACTIVIDADES HIPICAS (SUNAHIP)</p>
                <section>
                    <div className={styles.tableContainer}>
                        <table>
                            <thead>
                                <tr>
                                    <td colSpan={2}>
                                        REGLAS DE OPERACIÓN PARA LOS HIPÓDROMOS CLASE "B"
                                    </td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td colSpan={2} className={styles.txtAlign_left}>Apuestas Derechas </td>
                                </tr>
                                <tr>
                                    <td className={styles.txtAlign_left}>Ganador</td>
                                    <td>Usted cobra a ganador si su ejemplar finalizo en primer lugar </td>
                                </tr>
                                <tr>
                                    <td className={styles.txtAlign_left}>Place</td>
                                    <td>Usted cobra a place si su ejemplar finalizó en primer o en segundo lugar </td>
                                </tr>
                                <tr>
                                    <td className={styles.txtAlign_left}>Show</td>
                                    <td>Usted podrá cobrar a show si su ejemplar finalizo oficialmente en primero,  segundo o tercer lugar.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <ul className={styles.marginBottom_off}>
                        <li><p>Entries y fields (llaves) corren bajo un solo interés.</p></li>
                        <li><p>En una carrera con (3) ejemplares, no habrá apuesta de PLACE y se reembolsara el Dinero.</p></li>
                        <li><p>En una carrera con (4) ejemplares, no habrá apuesta de SHOW y se reembolsara el Dinero.</p></li>
                    </ul>
                    <p>NO HAY LIMITE DE PAGO</p>
                </section>
                <section className={styles.exoticsList}>
                    <div className={styles.header}>
                        <h4>EXOTICAS</h4>
                    </div>
                    <article>
                        <div className={styles.contentheader}>
                            <h5>A.1 - Exacta</h5>
                        </div>
                        <div className={styles.content}>
                            <ul>
                                <li><p><strong>A.1.1</strong>- Usted cobra la apuesta de exacta si selecciona a los ejemplares ganadores del primero y el segundo lugar en el orden exacto de llegada.</p></li>
                                <li><p><strong>A.1.2</strong>- El pago máximo por TICKET en EXACTA es de dos mil unidades (2.000 U), sin importar las veces apostadas en el boleto.</p></li>
                                <li><p><strong>A.1.3</strong>- Si un Field o Entry (llaves) termina en primero y segundo lugar la combinación ganadora será el Field y el ejemplar que llegue a tercer lugar.</p></li>
                                <li><p><strong>A.1.4</strong>- Entries y Fields (llave) corren bajo un solo interés.</p></li>
                                <li><p><strong>A.1.5</strong>- Si un ejemplar es retirado, el dinero del ejemplar retirado será reembolsado</p></li>
                                <li><p><strong>A.1.6</strong>- No hay pagos de consolación</p></li>
                                <li>
                                    <p><strong>A.1.7</strong>- Si en el hipódromo de origen paga con todos los ejemplares participantes en cualquiera de los dos (2) lugares, se aplicará el pago del hipódromo de origen y solo se cancelarán los tickets con las combinaciones acertadas y el dividendo publicado por el hipódromo.</p>
                                    <ul>
                                        <li>
                                            <p>
                                                <strong>A.1.7.1</strong>- En caso que no se publique dividendo de Exacta en el hipódromo de origen, se pagara el límite de 500 unidades por cada unidad apostada a los boletos con la combinación acertada.<br />
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                <strong>A.1.7.2</strong>- Si en el evento se presentare situaciones o circunstancias no previstas en estas reglas caso fortuito o de fuerza mayor (ejemplo: problema de energía eléctrica, cambio de pista, etc.), se aplicará el pago del Hipódromo de origen y solo se cancelarán los tickets con las combinaciones acertadas (siempre cumpliendo con los pagos máximos establecidos por la empresa).<br />
                                            </p>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <p><strong>A.1.8</strong>- En una carrera con (4) ejemplares o menos, no habrá apuesta de EXACTA y se reembolsará el dinero.</p>
                                </li>
                            </ul>
                        </div>
                    </article>
                    <article>
                        <div className={styles.contentheader}>
                            <h5>A.2 - Trifecta</h5>
                        </div>
                        <div className={styles.content}>
                            <ul>
                                <li>
                                    <p>
                                        <strong>A.2.1</strong>- Usted cobra la apuesta de Trifecta si selecciona a los ejemplares del primero, del segundo y del tercer lugar en orden exacto de llegada en las carreras designadas con apuestas de Trifecta.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <strong>A.2.2</strong>- El pago máximo por TICKET en TRIFECTA es de cuatro mil unidades (4.000 U.) sin importar las veces apostadas en el boleto.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <strong>A.2.3</strong>- Entries y Fields (llave) corren bajo un solo interés.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <strong>A.2.4</strong>- Si en el evento un ejemplar es retirado el dinero del ejemplar retirado será reembolsado.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <strong>A.2.5</strong>- No hay pagos de consolación.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <strong>A.2.6</strong>- Si en el hipódromo de origen paga con todos los ejemplares participantes en cualquiera de los tres (3) lugares, se aplicará el pago del Hipódromo de origen y solo se cancelarán los tickets con las combinaciones acertadas y el dividendo publicado por el hipódromo.
                                    </p>
                                    <ul>
                                        <li>
                                            <p>
                                                <strong>A.2.6.1</strong>- En caso que no se publique dividendo de Trifecta en el hipódromo de origen, se pagará el límite de pago de 1.000 Unidades por cada Unidad apostada a los boletos con la con la combinación acertada.
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                <strong>A.2.6.2</strong>- Si en el evento se presentare situaciones o circunstancias no previstas en estas reglas caso fortuito o de fuerza mayor (ejemplo: problema de energía eléctrica, cambio de pista, etc.), se aplicará el pago del Hipódromo de origen y solo se cancelarán los tickets con las combinaciones acertadas (siempre cumpliendo con los pagos máximos establecidos por la empresa).
                                            </p>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <p>
                                        <strong>A.2.7</strong>- En una carrera con (6) ejemplares o menos, no habrá apuesta de TRIFECTA y se reembolsará el Dinero.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </article>
                    <article>
                        <div className={styles.contentheader}>
                            <h5>A.3 - Superfecta</h5>
                        </div>
                        <div className={styles.content}>
                            <ul>
                                <li>
                                    <p>
                                        <strong>A.3.1</strong>- Usted cobra la apuesta de Superfecta si selecciona a los ejemplares ganadores del primero, segundo, tercero y cuarto lugar, en el orden exacto de llegada en carreras designadas con apuestas de Superfecta.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <strong>A.3.2</strong>- El pago máximo por TICKET en SUPERFECTA es de siete mil unidades (7.000 U.) sin importar las veces apostadas en el boleto.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <strong>A.3.3</strong>- Entries y Fields (llaves) corren bajo un solo interés.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <strong>A.3.4</strong>- Si en el evento un ejemplar es retirado el dinero del ejemplar retirado será reembolsado.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <strong>A.3.5</strong>- No hay pagos de consolación.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <strong>A.3.6</strong>- Si en el hipódromo de origen paga con todos los ejemplares participantes en cualquiera de los cuatros (4) lugares, se aplicará el pago del Hipódromo de origen y solo se cancelaran los tickets con las combinaciones acertadas y el dividendo publicado por el hipódromo.
                                    </p>
                                    <ul>
                                        <li>
                                            <p>
                                                <strong>A.3.6.1</strong>- En caso que no se publique dividendo de Superfecta en el hipódromo de origen, se pagará el límite de pago de 2.000 Unidades por cada Unidad apostada a los boletos con la combinación acertada.
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                <strong>A.3.6.2</strong>- - Si en el evento se presentare situaciones o circunstancias no previstas en estas reglas caso fortuito o de fuerza mayor (ejemplo: problema de energía eléctrica, cambio de pista, etc.), se aplicará el pago del Hipódromo de origen y solo se cancelarán los tickets con las combinaciones acertadas (siempre cumpliendo con los pagos máximos establecidos por la empresa).
                                            </p>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <p>
                                        <strong>A.3.7</strong>- En una carrera con 6 ejemplares o menos, no habrá apuesta de SUPERFECTA y se reembolsará el dinero.
                                    </p>
                                </li>
                            </ul>
                            <p>
                            </p>
                        </div>
                    </article>
                    <article>
                        <div className={styles.contentheader}>
                            <h5>Doble Selección (Pick 2)</h5>
                        </div>
                        <div className={styles.content}>
                            <p>
                                Usted cobra la apuesta de doble selección al ejemplar ganador de primer lugar en dos carreras consecutivas designadas con el contenido de apuestas de doble selección.
                            </p>
                            <ul>
                                <li>
                                    <p>
                                        * El pago máximo por TICKET es de diez mil unidades (10.000 U.) sin importar las veces apostadas en el boleto.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        * Si un ejemplar es retirado de cualquiera de las dos (2) carreras designadas como doble selección el dinero del ejemplar retirado será reembolsado y no habrá pagos de consolación.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        * Entríes y fields (llaves) corren bajo un solo interés.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        * Si en el evento se presentare situaciones o circunstancias no previstas en estas reglas caso fortuito o de fuerza mayor (ejemplo: problema de energía eléctrica, cambio de pista, etc.), se aplicará el pago del Hipódromo de origen y solo se cancelaran los tickets con las combinaciones acertadasy el dividendo publicado por el hipódromo. (siempre cumpliendo con los pagos máximos establecidos por la empresa).
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        * En caso de que no se publique dividendo en el hipódromo de origen, se pagará el límite de pago de 3.000 Unidades por cada Unidad apostadas a los boletos con la combinación acertada en los establecimientos afiliados al sistema de apuestas licenciado de CORPORACION EL INMEJORABLE 804,C.A.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </article>
                    <article>
                        <div className={styles.contentheader}>
                            <h5>Triple selección (Pick 3)</h5>
                        </div>
                        <div className={styles.content}>
                            <p>
                                Usted cobra la apuesta de triple selección si selecciona al ejemplar ganador del primer lugar en tres carreras consecutivas designadas con apuestas de triple selección.
                            </p>
                            <ul>
                                <li>
                                    <p>
                                        * El pago máximo por TICKET es de veinte mil unidades (20.000 U.) sin importar las veces apostadas en el boleto.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        * No habrá reembolso por los retirados.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        * Si su ejemplar es retirado del evento este será sustituido por el ejemplar favorito al cierre de la carrera y en caso de
                                        que el ejemplar favorito resulte ganador se pagará por el favorito ganador y por cada ejemplar retirado del evento.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        * En caso de que una carrera o más sean canceladas el dinero de la apuesta será reembolsado.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        * Si en el hipódromo de origen paga con todos los ejemplares participantes en cualquiera de las tres (3) carreras, se aplicará el pago del Hipódromo de origen y solo se cancelaran los tickets con las combinaciones acertadas y el dividendo publicado por el hipódromo.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        * No hay pagos de consolación.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        * Entries y fields (llaves) corren bajo un solo interés.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        * En caso de que no se publique dividendo pick3 of 3  en el hipódromo de origen, se pagará el límite de pago de 4.000 Unidades por cada Unidad apostada a los boletos con la combinación acertadas en los establecimientos afiliados al sistema de apuestas licenciado de CORPORACION EL INMEJORABLE 804,C.A.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        * No hay acumulados.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        * Si en el evento se presentare situaciones o circunstancias no previstas en estas reglas caso fortuito o de fuerza mayor (ejemplo: problema de energía eléctrica, cambio de pista, etc.), se aplicara el pago del Hipódromo de origen y solo se cancelaran los tickets con las combinaciones acertadas (siempre cumpliendo con los pagos máximos establecidos por la empresa).
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </article>
                    <article>
                        <div className={styles.contentheader}>
                            <h5>Pick 4</h5>
                        </div>
                        <div className={styles.content}>
                            <p>
                                Usted cobra la apuesta de Pick 4 si selecciona al ejemplar ganador del primer lugar en cuatro carreras consecutivas designadas con apuestas de pick 4.
                            </p>
                            <ul>
                                <li>
                                    <p>
                                        * El pago máximo por TICKET es de treinta mil unidades (30.000 U.) sin importar las veces apostadas en el boleto.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        * No habrá reembolso por los retirados.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        * Si su ejemplar es retirado del evento este será sustituido por el ejemplar favorito al cierre de la carrera y en caso de que el ejemplar favorito resulte ganador se pagará por el favorito ganador y por cada ejemplar retirado del evento.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        * En caso de que una carrera o más sean canceladas el dinero de la apuesta será reembolsado.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        * Si en el hipódromo de origen paga con todos los ejemplares participantes en cualquiera de las cuatros (4) carreras, se aplicará el pago del Hipódromo de origen y solo se cancelaran los tickets con las combinaciones acertadas y el dividendo publicado por el hipódromo.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        * No hay pagos de consolación (pick4 3 de 4 aciertos).
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        * Entries y fields (llaves) corren bajo un solo interés.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        * En caso de que no se publique dividendo pick4 of 4 en el hipódromo de origen, se pagará el límite de pago de 4.000 Unidades por cada Unidad apostada a los boletos con la combinación acertadas en los establecimientos afiliados al sistema de apuestas licenciado de CORPORACION EL INMEJORABLE 804,C.A.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        * No hay acumulados.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        * Si en el evento se presentare situaciones o circunstancias no previstas en estas reglas caso fortuito o de fuerza mayor (ejemplo: problema de energía eléctrica, cambio de pista, etc.), se aplicara el pago del Hipódromo de origen y solo se cancelaran los tickets con las combinaciones acertadas (siempre cumpliendo con los pagos máximos establecidos por la empresa).
                                    </p>
                                </li>
                            </ul>

                        </div>
                    </article>
                    <article>
                        <div className={styles.contentheader}>
                            <h5>PARLEY</h5>
                        </div>
                        <div className={styles.content}>
                            <p>
                                Usted cobra la apuesta de PARLEY si selecciona a dos o tres ejemplares en diferentes carreras y/o diferentes hipódromos finalizan ganadores.
                                La apuesta debe ser, ya sea a primero, segundo o tercer lugar, pero todos los ejemplares seleccionados deben estar en el mismo orden de apuesta, y
                                las selecciones deberán finalizar en el orden elegido.
                            </p>
                            <ul>
                                <li>
                                    <p>
                                        * Los límites de pagos en Parlay se figuran de las siguientes maneras:
                                    </p>
                                    <ul>
                                        <li>
                                            <p>
                                                ° Primer lugar: 20 unidades por cada unidad apostada.
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                ° Segundo lugar: 8 unidades por cada apostada.
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                ° Tercer lugar: 4 unidades por cada unidad apostada.
                                            </p>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <p>
                                        * El límite de pagos es de cuentos cincuenta  unidades (150 U) por cada unidad apostada.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        * El pago máximo por apuesta de parley es de diez mil unidades (10.000 U.)
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        * Si un ejemplar es retirado un parley de tres (3) se convierte en un parley de dos  (2) y un parley de dos (2) se convierte en apuesta derecha.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        * Entries y fields corren bajo un solo interés.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </article>
                    <article>
                        <div className={styles.contentheader}>
                            <h5>PICK FIVE Pick 5</h5>
                        </div>
                        <div className={styles.content}>
                            <p>
                                Usted cobra la apuesta si selecciona al ejemplar ganador del primer lugar en cinco carreras consecutivas designadas con apuestas de pick 5 especial.
                            </p>
                            <ul>
                                <li>
                                    <p>
                                        * El pago máximo por apuesta es de cuarenta mil unidades (40.000 U.) sin importar las veces apostadas en el boleto.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        * No habrá reembolso por los retirados.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        * Si su ejemplar es retirado del evento este será sustituido por el ejemplar favorito al cierre de la carrera y en caso de que el ejemplar favorito resulte ganador separara por el favorito ganador y por cada ejemplar retirado del evento.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        * En caso de que una carrera o más sean canceladas el dinero de la apuesta será reembolsado.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        * Si en el hipódromo de origen paga con menos de cinco (5) aciertos esto equivale a premio de consolación para los hipódromos de origen no siendo aplicable el pago de este premio en los establecimientos afiliados al sistema de apuesta licenciado.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        * Si en el hipódromo de origen paga con todos los ejemplares participantes en cualquiera de las cinco (5) carreras, se aplicará el pago del Hipódromo de origen y solo se cancelaran los tickets con las combinaciones acertadas y el dividendo publicado por el hipódromo.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        * Si en el evento se presentare situaciones o circunstancias no previstas en estas reglas caso fortuito o de fuerza mayor (ejemplo: problema de energía eléctrica, cambio de pista, etc.), se aplicara el pago del Hipódromo de origen y solo se cancelaran los tickets con las combinaciones acertadas (siempre cumpliendo con los pagos máximos establecidos por la empresa).
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        * No hay pagos de consolación (pick5 4 de 5 aciertos).
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        * En caso de que no se publique dividendo pick5 of 5 en el hipódromo de origen, se pagara el límite de pago de 5.000 Unidades por cada Unidad apostada a los boletos con la combinación acertadas en los establecimientos afiliados al sistema de apuestas licenciado de CORPORACION EL INMEJORABLE 804,C.A.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </article>
                    <article>
                        <div className={styles.contentheader}>
                            <h5>Pick 6</h5>
                        </div>
                        <div className={styles.content}>
                            <p>
                                Usted cobra la apuesta si selecciona al ejemplar ganador del primer lugar en seis carreras consecutivas designadas con apuestas de pick 6.
                            </p>
                            <ul>
                                <li>
                                    <p>
                                        * El pago máximo por apuesta es de cuarenta mil unidades (40.000 U.) sin importar las veces apostadas en el boleto.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        * Para ganar la apuesta usted deberá tener igual o mayor número de carreras como el o los boletos ganadores en el hipódromo designado.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        * Los pagos de consolación son con una carrera menos que los boletos ganadores.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        * Los boletos ganadores en los establecimientos afiliados al sistema de apuesta licenciado, repartirán el monto apostado de acuerdo a las reglas de origen.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        * En caso de que no haya boleto ganador en los hipódromos de origen y haya uno o más boletos ganadores o de consolación en los establecimientos afiliados al sistema de apuesta licenciado se repartirá el monto apostado de acuerdo a las reglas de origen sin el fondo acumulado.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        * Si no hay boletos ganadores o de consolación en los establecimientos afiliados al sistema de apuestas licenciado, no habrá pagos.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        * En caso de que haya un empate a ganar entre dos o más ejemplares en carreras designadas de pick 6, todos los involucrados en el sistema serán considerados ganadores.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        * No habrá devoluciones por ejemplares retirados, si su ejemplar es retirado del evento este será sustituido por ejemplar favorito al cierre de la carrera.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        * Entries y fields corren bajo un solo interés.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        * Si en el evento se presentare situaciones o circunstancias no previstas en estas reglas caso fortuito o de fuerza mayor (ejemplo: problema de energía eléctrica, cambio de pista, etc.), se aplicara el pago del Hipódromo de origen y solo se cancelaran los tickets con las combinaciones acertadas (siempre cumpliendo con los pagos máximos establecidos por la empresa).
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        * No hay pagos de consolación (pick6 5 de 6 aciertos).
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        * En caso de que no se publique dividendo pick6 of 6 en el hipódromo de origen, se pagara el límite de pago de 5.000 Unidades por cada Unidad apostada a los boletos con la combinación acertadas en los establecimientos afiliados al sistema de apuestas licenciado de CORPORACION EL INMEJORABLE 804,C.A.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </article>
                </section>
            </section>
            <section className={styles.mt_1}>
                <div className={styles.tableContainer}>
                    <table>
                        <thead>
                            <tr>
                                <td colSpan={2}> REGLAS DE OPERACIÓN PARA LOS HIPÓDROMOS CLASE 'B' </td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td colSpan={2} className={styles.txtAlign_left}>Apuestas Derechas </td>
                            </tr>
                            <tr>
                                <td className={styles.txtAlign_left}>Ganador</td>
                                <td>Usted cobra a ganador si su ejemplar finalizo en primer lugar </td>
                            </tr>
                            <tr>
                                <td className={styles.txtAlign_left}>Place</td>
                                <td>Usted cobra a place  si su ejemplar finalizó en primer o en segundo lugar </td>
                            </tr>
                            <tr>
                                <td className={styles.txtAlign_left}>Show</td>
                                <td>Usted podrá cobrar a show si su ejemplar finalizo oficialmente en primero,  segundo o tercer lugar.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <ul className={styles.marginBottom_off}>
                    <li><p>Entries y fields (llaves) corren bajo un solo interés.</p></li>
                    <li><p>En una carrera con (3) ejemplares, no habrá apuesta de PLACE y se reembolsara el Dinero.</p></li>
                    <li><p>En una carrera con (4) ejemplares, no habrá apuesta de SHOW y se reembolsara el Dinero.</p></li>
                    <li><p>Empató máximo por TICKET es de diez mil unidades (10.000 U.) sin importar las veces apostadas en el mismo boleto.</p></li>
                    <li><p>Si un ejemplar es retirado el dinero de la apuesta será reembolsado</p></li>
                    <li>
                        <p>
                            El pago será de la siguiente manera:
                        </p>
                        <ul>
                            <li>
                                <p>
                                    El primer lugar: 30 unidades por cada unidad apostada.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Segundo lugar: 12 unidades por cada unidad apostada.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Tercer lugar: 6 unidades por cada unidad apostada.
                                </p>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <p>
                            Para carreras de caballos dos añeros los límites de pago son:
                        </p>
                        <ul>
                            <li>
                                <p>
                                    Primer lugar: 30 unidades por cada unidad apostada
                                </p>
                            </li>
                            <li>
                                <p>
                                    Segundo lugar: 12 unidades por cada unidad apostada
                                </p>
                            </li>
                            <li>
                                <p>
                                    Tercer lugar: 6 unidades por cada unidad apostada
                                </p>
                            </li>
                        </ul>
                    </li>
                </ul>
            </section>
            <section className={styles.exoticsList}>
                <div className={styles.header}>
                    <h4>EXOTICAS</h4>
                </div>
                <article>
                    <div className={styles.contentheader}>
                        <h5>Quiniela</h5>
                    </div>
                    <div className={styles.content}>
                        <ul>
                            <li>
                                <p>
                                    Usted cobra la quiniela si selecciona a los ejemplares ganadores del primero y segundo lugar en cualquier orden de llegada.
                                </p>
                                <ul>
                                    <li>
                                        <p>
                                            * El pago máximo por TICKET es de 2.500 Unidades sin importar las veces apostadas en el boleto.
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            * Si un field o entry (de la misma llave) finaliza en primero y segundo lugar, la combinación ganadora serán el field y el ejemplar que finalice en tercer lugar.
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            * Si un ejemplar es retirado el dinero del ejemplar retirado será reembolsado.
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            * Si hay un entry o field de tres (3) o más ejemplares no habrá apuesta de quiniela
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            * No hay pagos de consolación
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            * Entries y fields (llave) corren bajo un solo interés.
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            * En caso de que no haya boleto ganador en los hipódromos de origen no habrá premio de consolación solo se pagara el límite de pago a los boletos con la combinación acertada en LA CORPORACION EL INMEJORABLE 804
                                        </p>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </article>
                <article>
                    <div className={styles.contentheader}>
                        <h5>Exacta</h5>
                    </div>
                    <div className={styles.content}>
                        <ul>
                            <li>
                                <p>
                                    Usted cobra la apuesta de exacta si selecciona a los ejemplares ganadores del primero y el segundo lugar en el orden exacto de llegada.
                                </p>
                                <ul>
                                    <li>
                                        <p>
                                            * El límite de pago es de Trecientas mil unidades (300 U), por cada unidad apostadas.
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            * El pago máximo por TICKET es de 2.500 Unidades sin importar las veces apostadas en el boleto.
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            * Si un field o entry termina en primero y segundo lugar la combinación ganadora será el field y el ejemplar que llegue a tercer lugar.
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            * Si un ejemplar es retirado, el dinero del ejemplar retirado será reembolsado.
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            * No hay pagos de consolación
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            * En caso de que no haya boleto ganador en el hipódromo de origen no habrá premio de consolación solo se pagara el límite de pago a los boletos con la combinación acertada en LA CORPORACION EL INMEJORABLE 804
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            * Entries y fields (llave) corren bajo un solo interés.
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            * En una carrera con (4) ejemplares, no habrá apuesta de EXACTA y se reembolsara el dinero.
                                        </p>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </article>
                <article>
                    <div className={styles.contentheader}>
                        <h5>Doble Selección (Pick 2)</h5>
                    </div>
                    <div className={styles.content}>
                        <p>
                            Usted cobra la apuesta de doble selección al ejemplar ganador de primer lugar en dos carreras consecutivas designadas con el contenido de apuestas de doble selección.
                        </p>
                        <ul>
                            <li>
                                <p>
                                    * El pago máximo por TICKET es de 2.500 Unidades sin importar las veces apostadas en el boleto.
                                </p>
                            </li>
                            <li>
                                <p>
                                    * Si un ejemplar es retirado de cualquiera de las dos (2) carreras designadas como doble selección el dinero del ejemplar retirado será reembolsado y no habrá pagos de consolación
                                </p>
                            </li>
                            <li>
                                <p>
                                    * No hay pagos de consolación
                                </p>
                            </li>
                            <li>
                                <p>
                                    * En caso de que no haya boleto ganador en el hipódromo de origen no habrá premio de consolación solo se pagara el límite de pago a los boletos con la combinación acertada en LA CORPORACION EL INMEJORABLE 804
                                </p>
                            </li>
                            <li>
                                <p>
                                    * Entries y fields (llave) corren bajo un solo interés
                                </p>
                            </li>
                        </ul>
                    </div>
                </article>
                <article>
                    <div className={styles.contentheader}>
                        <h5>Trifecta</h5>
                    </div>
                    <div className={styles.content}>
                        <p>
                            Usted cobra la apuesta de Trifecta si selecciona a los ejemplares ganadores del primero, del segundo y del tercer lugar en orden exacto de llegada en las carreras designadas con apuestas de Trifecta.
                        </p>
                        <ul>
                            <li>
                                <p>
                                    * El pago máximo por TICKET es de 3.750 Unidades sin importar las veces apostadas en el boleto.
                                </p>
                            </li>
                            <li>
                                <p>
                                    * Si en el evento un ejemplar es retirado el dinero del ejemplar retirado será reembolsado
                                </p>
                            </li>
                            <li>
                                <p>
                                    * Si en el hipódromo de origen paga con todos los ejemplares participantes en cualquiera de los tres (3) lugares por no haber combinación ganadora, esto equivale a premio de consolación para los hipódromos de origen, no siendo aplicable el pago de este premio en los establecimientos afiliados al sistema de apuestas licenciado de LA CORPORACION EL INMEJORABLE 804,C.A.
                                </p>
                            </li>
                            <li>
                                <p>
                                    * No hay pagos de consolación
                                </p>
                            </li>
                            <li>
                                <p>
                                    * En caso de que no haya boleto ganador en el hipódromo de origen no habrá premio de consolación solo se pagara el límite de pago a los boletos con la combinación acertada en LA CORPORACION EL INMEJORABLE 804
                                </p>
                            </li>
                            <li>
                                <p>
                                    * Entries y fields (llave) corren bajo un solo interés.
                                </p>
                            </li>
                            <li>
                                <p>
                                    * En una carrera con (4) ejemplares no habrá apuesta de TRIFECTA y se reembolsara el Dinero.
                                </p>
                            </li>
                        </ul>
                    </div>
                </article>
                <article>
                    <div className={styles.contentheader}>
                        <h5>Triple selección (Pick 3)</h5>
                    </div>
                    <div className={styles.content}>
                        <p>
                            Usted cobra la apuesta de triple selección si selecciona al ejemplar ganador del primer lugar en tres carreras consecutivas designadas con apuestas de triple selección.
                        </p>
                        <ul>
                            <li>
                                <p>
                                    * El pago máximo por TICKET es de 3.750 Unidades sin importar las veces apostadas en el boleto.
                                </p>
                            </li>
                            <li>
                                <p>
                                    * No habrá reembolso por los retirados
                                </p>
                            </li>
                            <li>
                                <p>
                                    * Si su ejemplar es retirado del evento este será sustituido por el ejemplar favorito al cierre de la carrera y en caso de que el ejemplar favorito resulte ganador separara por el favorito ganador y por cada ejemplar retirado del evento.
                                </p>
                            </li>
                            <li>
                                <p>
                                    * En caso de que una carrera o más sean canceladas el dinero de la apuesta será reembolsado.
                                </p>
                            </li>
                            <li>
                                <p>
                                    * Si en el hipódromo de origen paga con todos los ejemplares participantes en cualquiera de las tres carreras por no haber combinación ganadora esto equivale a premio de consolación para los hipódromos de origen no siendo aplicable el pago de este premio en los establecimientos afiliados al sistema de apuesta licenciado de LA CORPORACION EL INMEJORABLE 804,C.A.
                                </p>
                            </li>
                            <li>
                                <p>
                                    * No hay pagos de consolación
                                </p>
                            </li>
                            <li>
                                <p>
                                    * En caso de que no haya boleto ganador en el hipódromo de origen no habrá premio de consolación solo se pagara el límite de pago a los boletos con la combinación acertada en LA CORPORACION EL INMEJORABLE 804
                                </p>
                            </li>
                            <li>
                                <p>
                                    * Entries y fields (llaves) corren bajo un solo interés.
                                </p>
                            </li>
                            <li>
                                <p>
                                    * No hay acumulados.
                                </p>
                            </li>
                            <li>
                                <p>
                                    * Si en el evento se presentare situaciones o circunstancias no previstas en estas reglas caso fortuito o de fuerza mayor (ejemplo: problema de energía eléctrica, cambio de pista, etc.), se aplicara el pago del Hipódromo de origen.
                                </p>
                            </li>
                        </ul>
                    </div>
                </article>
                <article>
                    <div className={styles.contentheader}>
                        <h5>Superfecta</h5>
                    </div>
                    <div className={styles.content}>
                        <p>
                            Usted cobra la apuesta de Superfecta si selecciona a los ejemplares ganadores del primero, segundo, tercero y cuarto lugar, en el orden exacto de llegada en carreras designadas con apuestas de su perfecta.
                        </p>
                        <ul>
                            <li>
                                <p>
                                    * El pago máximo por TICKET es de 4.000 Unidades sin importar las veces apostadas en el boleto.
                                </p>
                            </li>
                            <li>
                                <p>
                                    * Si en el evento un ejemplar es retirado el dinero del ejemplar retirado será reembolsado
                                </p>
                            </li>
                            <li>
                                <p>
                                    * Si en el hipódromo de origen paga con todos los ejemplares participantes en cualquiera de los cuatros lugares por no haber combinación ganadora esto equivale a premio de consolación para los hipódromos de origen no siendo aplicable el pago de este premio en los establecimientos afiliados al sistema de apuesta licenciado de LA CORPORACION EL INMEJORABLE 804,C.A.
                                </p>
                            </li>
                            <li>
                                <p>
                                    * No hay pagos de consolación
                                </p>
                            </li>
                            <li>
                                <p>
                                    * En caso de que no haya boleto ganador en el hipódromo de origen no habrá premio de consolación solo se pagara el límite de pago a los boletos con la combinación acertada en LA CORPORACION EL INMEJORABLE 804
                                </p>
                            </li>
                            <li>
                                <p>
                                    * Entries y fields (llaves) corren bajo un solo interés.
                                </p>
                            </li>
                            <li>
                                <p>
                                    * En una carrera con 5 ejemplares no habrá apuesta de SUPERFECTA y se reembolsara el Dinero.
                                </p>
                            </li>
                        </ul>
                    </div>
                </article>
                <article>
                    <div className={styles.contentheader}>
                        <h5>Pick 4</h5>
                    </div>
                    <div className={styles.content}>
                        <p>
                            Usted cobra la apuesta de Pick 4 si selecciona al ejemplar ganador del primer lugar en cuatro carreras consecutivas designadas con apuestas de pick 4.
                        </p>
                        <ul>
                            <li>
                                <p>
                                    * El pago máximo por TICKET es de 5.000 Unidades sin importar las veces apostadas en el boleto.
                                </p>
                            </li>
                            <li>
                                <p>
                                    * No habrá reembolso por los retirados.
                                </p>
                            </li>
                            <li>
                                <p>
                                    * Si su ejemplar es retirado del evento este será sustituido por el ejemplar favorito al cierre de la carrera y en caso de que el ejemplar favorito resulte ganador separara por el favorito ganador y por cada ejemplar retirado del evento.
                                </p>
                            </li>
                            <li>
                                <p>
                                    * En caso de que una carrera o más sean canceladas el dinero de la apuesta será reembolsado.
                                </p>
                            </li>
                            <li>
                                <p>
                                    * Si en el hipódromo de origen paga con todos los ejemplares participantes en cualquiera de las cuatros carreras por no haber combinación ganadora esto equivale a premio de consolación para los hipódromos de origen no siendo aplicable el pago de este premio en los establecimientos afiliados al sistema de apuesta licenciado de LA CORPORACION EL INMEJORABLE 804,C.A.
                                </p>
                            </li>
                            <li>
                                <p>
                                    * No hay pagos de consolación
                                </p>
                            </li>
                            <li>
                                <p>
                                    * En caso de que no haya boleto ganador en el hipódromo de origen no habrá premio de consolación solo se pagara el límite de pago a los boletos con la combinación acertada en LA CORPORACION EL INMEJORABLE 804
                                </p>
                            </li>
                            <li>
                                <p>
                                    * Entries y fields (llaves) corren bajo un solo interés.
                                </p>
                            </li>
                            <li>
                                <p>
                                    * No hay acumulados.
                                </p>
                            </li>
                            <li>
                                <p>
                                    * Si en el evento se presentare situaciones o circunstancias no previstas en estas reglas caso fortuito o de fuerza mayor (ejemplo: problema de energía eléctrica, cambio de pista, etc.), se aplicara el pago del Hipódromo de origen y solo se cancelaran los tickets con las combinaciones acertadas.
                                </p>
                            </li>
                        </ul>
                    </div>
                </article>
                <article>
                    <div className={styles.contentheader}>
                        <h5>PARLEY</h5>
                    </div>
                    <div className={styles.content}>
                        <p>
                            Usted cobra la apuesta de PARLEY si selecciona a dos o tres ejemplares en diferentes carreras y/o diferentes hipódromos finalizan ganadores. La apuesta debe ser, ya sea a primero, segundo o tercer lugar, pero todos los ejemplares seleccionados deben estar en el mismo orden de apuesta, y las selecciones deberán finalizar en el orden elegido.
                        </p>
                        <ul>
                            <li>
                                <p>
                                    * Los límites de pagos en Parlay se figuran de las siguientes maneras:
                                </p>
                                <ul>
                                    <li>
                                        <p>
                                            ° Primer lugar: 20 unidades por cada unidad apostada.
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            ° Segundo lugar: 8 unidades por cada apostada.
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            ° Tercer lugar: 4 unidades por cada unidad apostada.
                                        </p>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <p>
                                    * El límite de pagos es de cuentos cincuenta unidades (150 U) por cada unidad apostada.
                                </p>
                            </li>
                            <li>
                                <p>
                                    * El pago máximo por apuesta de parley es de seis mil unidades (6.000 U.)
                                </p>
                            </li>
                            <li>
                                <p>
                                    * El máximo número de ejemplares en un parley es de tres (3) y el mínimo dos (2).
                                </p>
                            </li>
                            <li>
                                <p>
                                    * Si un ejemplar es retirado un parley de tres (3) se convierte en un parley de dos (2) y un parley de dos (2) se convierte en apuesta derecha.
                                </p>
                            </li>
                            <li>
                                <p>
                                    * Entries y fields corren bajo un solo interés.
                                </p>
                            </li>
                        </ul>
                    </div>
                </article>
            </section>
            <section className={styles.mt_1}>
                <div className={styles.tableContainer}>
                    <table>
                        <thead>
                            <tr>
                                <td colSpan={2}>
                                    REGLAS DE OPERACIÓN PARA LOS HIPÓDROMOS "CLASE "C"
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td colSpan={2} className={styles.txtAlign_left}>Apuestas Derechas </td>
                            </tr>
                            <tr>
                                <td className={styles.txtAlign_left}>Ganador</td>
                                <td>Usted cobra a ganador si su ejemplar finalizo en primer lugar </td>
                            </tr>
                            <tr>
                                <td className={styles.txtAlign_left}>Place</td>
                                <td>Usted cobra a place  si su ejemplar finalizó en primer o en segundo lugar </td>
                            </tr>
                            <tr>
                                <td className={styles.txtAlign_left}>Show</td>
                                <td>Usted podrá cobrar a show si su ejemplar finalizo oficialmente en primero,  segundo o tercer lugar.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <ul className={styles.marginBottom_off}>
                    <li><p>Entries y fields (llaves) corren bajo un solo interés.</p></li>
                    <li><p>En una carrera con (3) ejemplares, no habrá apuesta de PLACE y se reembolsara el Dinero.</p></li>
                    <li><p>En una carrera con (4) ejemplares, no habrá apuesta de SHOW y se reembolsara el Dinero.</p></li>
                    <li><p>Empató máximo por TICKET es de diez mil unidades (10.000 U.) sin importar las veces apostadas en el mismo boleto.</p></li>
                    <li><p>Si un ejemplar es retirado el dinero de la apuesta será reembolsado</p></li>
                    <li>
                        <p>
                            El pago será de la siguiente manera:
                        </p>
                        <ul>
                            <li>
                                <p>
                                    El primer lugar: 20 unidades por cada unidad apostada.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Segundo lugar: 8 unidades por cada unidad apostada.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Tercer lugar: 4 unidades por cada unidad apostada.
                                </p>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <p>
                            Para carreras de caballos dos añeros los límites de pago son:
                        </p>
                        <ul>
                            <li>
                                <p>
                                    Primer lugar: 20 unidades por cada unidad apostada
                                </p>
                            </li>
                            <li>
                                <p>
                                    Segundo lugar: 8 unidades por cada unidad apostada
                                </p>
                            </li>
                            <li>
                                <p>
                                    Tercer lugar: 4 unidades por cada unidad apostada
                                </p>
                            </li>
                        </ul>
                    </li>
                </ul>
            </section>
            <section className={styles.exoticsList}>
                <div className={styles.header}>
                    <h4>EXOTICAS</h4>
                </div>
                <article>
                    <div className={styles.contentheader}>
                        <h5>Quiniela</h5>
                    </div>
                    <div className={styles.content}>
                        <p>
                            Usted cobra la quiniela si selecciona a los ejemplares ganadores del primero y segundo lugar en cualquier orden de llegada.
                        </p>

                        <ul>
                            <li>
                                <p>
                                    * El pago máximo por TICKET es de 1.500 unidades sin importar las veces apostadas en el boleto.                                        </p>
                            </li>
                            <li>
                                <p>
                                    * Si un field o entry (de la misma llave) finaliza en primero y segundo lugar, la combinación ganadora serán el field y el ejemplar que finalice en tercer lugar.                                        </p>
                            </li>
                            <li>
                                <p>
                                    * Si un ejemplar es retirado el dinero del ejemplar retirado será reembolsado.
                                </p>
                            </li>
                            <li>
                                <p>
                                    * Si hay un entry o field de tres (3) o más ejemplares no habrá apuesta de quiniela
                                </p>
                            </li>
                            <li>
                                <p>
                                    * En caso de que no haya boleto ganador en el hipódromo de origen no habrá premio de consolación solo se pagara el límite de pago a los boletos con la combinación acertada en LA CORPORACION EL INMEJORABLE 804
                                </p>
                            </li>
                            <li>
                                <p>
                                    * Entries y fields (llave) corren bajo un solo interés.
                                </p>
                            </li>
                        </ul>
                    </div>
                </article>
                <article>
                    <div className={styles.contentheader}>
                        <h5>Exacta</h5>
                    </div>
                    <div className={styles.content}>
                        <p>
                            Usted cobra la apuesta de exacta si selecciona a los ejemplares ganadores del primero y el segundo lugar en el orden exacto de llegada.
                        </p>
                        <ul>
                            <li>
                                <p>
                                    * El pago máximo por TICKET es de 1.500 unidades sin importar las veces apostadas en el boleto.
                                </p>
                            </li>
                            <li>
                                <p>
                                    * Si un field o entry termina en primero y segundo lugar la combinación ganadora será el field y el ejemplar que llegue a tercer lugar.
                                </p>
                            </li>
                            <li>
                                <p>
                                    * Si un ejemplar es retirado, el dinero del ejemplar retirado será reembolsado
                                </p>
                            </li>
                            <li>
                                <p>
                                    * En caso de que no haya boleto ganador en el hipódromo de origen no habrá premio de consolación solo se pagara el límite de pago a los boletos con la combinación acertada en LA CORPORACION EL INMEJORABLE 804
                                </p>
                            </li>
                            <li>
                                <p>
                                    * No hay pagos de consolación
                                </p>
                            </li>
                            <li>
                                <p>
                                    * Entries y fields (llave) corren bajo un solo interés
                                </p>
                            </li>
                            <li>
                                <p>
                                    * En una carrera con (4) ejemplares, no habrá apuesta de EXACTA y se reembolsara el dinero
                                </p>
                            </li>
                        </ul>
                    </div>
                </article>
                <article>
                    <div className={styles.contentheader}>
                        <h5>Doble Selección (Pick 2)</h5>
                    </div>
                    <div className={styles.content}>
                        <p>
                            Usted cobra la apuesta de doble selección al ejemplar ganador de primer lugar en dos carreras consecutivas designadas con el contenido de apuestas de doble selección.
                        </p>
                        <ul>
                            <li>
                                <p>
                                    * El pago máximo por TICKET es de 1.500 unidades sin importar las veces apostadas en el boleto.
                                </p>
                            </li>
                            <li>
                                <p>
                                    * Si un ejemplar es retirado de cualquiera de las dos (2) carreras designadas como el dinero del ejemplar retirado será reembolsado y no habrá pagos de consolación
                                </p>
                            </li>
                            <li>
                                <p>
                                    * No hay pagos de consolación
                                </p>
                            </li>
                            <li>
                                <p>
                                    * En caso de que no haya boleto ganador en el hipódromo de origen no habrá premio de consolación solo se pagara el límite de pago a los boletos con la combinación acertada en LA CORPORACION EL INMEJORABLE 804
                                </p>
                            </li>
                            <li>
                                <p>
                                    * Entries y fields (llave) corren bajo un solo interés
                                </p>
                            </li>
                        </ul>
                    </div>
                </article>
                <article>
                    <div className={styles.contentheader}>
                        <h5>Trifecta</h5>
                    </div>
                    <div className={styles.content}>
                        <p>
                            Usted cobra la apuesta de Trifecta si selecciona a los ejemplares ganadores del primero, del segundo y del tercer lugar en orden exacto de llegada en las carreras designadas con apuestas de Trifecta.
                        </p>
                        <ul>
                            <li>
                                <p>
                                    * El pago máximo por TICKET es de 2.500 Unidades sin importar las veces apostadas en el boleto.

                                </p>
                            </li>
                            <li>
                                <p>
                                    * Si en el evento un ejemplar es retirado el dinero del ejemplar retirado será reembolsado
                                </p>
                            </li>
                            <li>
                                <p>
                                    * Si en el hipódromo de origen paga con todos los ejemplares participantes en cualquiera de los tres (3) lugares por no haber combinación ganadora, esto equivale a premio de consolación para los hipódromos de origen, no siendo aplicable el pago de este premio en los establecimientos afiliados al sistema de apuestas licenciado de LA CORPORACION EL INMEJORABLE 804,C.A.
                                    s                                </p>
                            </li>
                            <li>
                                <p>
                                    * No hay pagos de consolación
                                </p>
                            </li>
                            <li>
                                <p>
                                    * En caso de que no haya boleto ganador en el hipódromo de origen no habrá premio de consolación solo se pagara el límite de pago a los boletos con la combinación acertada en LA CORPORACION EL INMEJORABLE 804
                                </p>
                            </li>
                            <li>
                                <p>
                                    * Entries y fields (llave) corren bajo un solo interés.
                                </p>
                            </li>
                            <li>
                                <p>
                                    * En una carrera con (4) ejemplares no habrá apuesta de TRIFECTA y se reembolsara el Dinero.
                                </p>
                            </li>
                        </ul>
                    </div>
                </article>
                <article>
                    <div className={styles.contentheader}>
                        <h5>Triple selección (Pick 3)</h5>
                    </div>
                    <div className={styles.content}>
                        <p>
                            Usted cobra la apuesta de triple selección si selecciona al ejemplar ganador del primer lugar en tres carreras consecutivas designadas con apuestas de triple selección.
                        </p>
                        <ul>
                            <li>
                                <p>
                                    * El pago máximo por TICKET es de 2.500 Unidades sin importar las veces apostadas en el boleto.
                                </p>
                            </li>
                            <li>
                                <p>
                                    * No habrá reembolso por los retirados
                                </p>
                            </li>
                            <li>
                                <p>
                                    * Si su ejemplar es retirado del evento este será sustituido por el ejemplar favorito al cierre de la carrera y en caso de que el ejemplar favorito resulte ganador separara por el favorito ganador y por cada ejemplar retirado del evento.
                                </p>
                            </li>
                            <li>
                                <p>
                                    * En caso de que una carrera o más sean canceladas el dinero de la apuesta será reembolsado.
                                </p>
                            </li>
                            <li>
                                <p>
                                    * Si en el hipódromo de origen paga con todos los ejemplares participantes en cualquiera de las tres carreras por no haber combinación ganadora esto equivale a premio de consolación para los hipódromos de origen no siendo aplicable el pago de este premio en los establecimientos afiliados al sistema de apuesta licenciado de LA CORPORACION EL INMEJORABLE 804,C.A.
                                </p>
                            </li>
                            <li>
                                <p>
                                    * No hay pagos de consolación
                                </p>
                            </li>
                            <li>
                                <p>
                                    * En caso de que no haya boleto ganador en el hipódromo de origen no habrá premio de consolación solo se pagara el límite de pago a los boletos con la combinación acertada en LA CORPORACION EL INMEJORABLE 804
                                </p>
                            </li>
                            <li>
                                <p>
                                    * Entries y fields (llaves) corren bajo un solo interés.
                                </p>
                            </li>
                            <li>
                                <p>
                                    * No hay acumulados.
                                </p>
                            </li>
                            <li>
                                <p>
                                    * Si en el evento se presentare situaciones o circunstancias no previstas en estas reglas caso fortuito o de fuerza mayor (ejemplo: problema de energía eléctrica, cambio de pista, etc.), se aplicara el pago del Hipódromo de origen.
                                </p>
                            </li>
                        </ul>
                    </div>
                </article>
                <article>
                    <div className={styles.contentheader}>
                        <h5>Superfecta</h5>
                    </div>
                    <div className={styles.content}>
                        <p>
                            Usted cobra la apuesta de Superfecta si selecciona a los ejemplares ganadores del primero, segundo, tercero y cuarto lugar, en el orden exacto de llegada en carreras designadas con apuestas de su perfecta.
                        </p>
                        <ul>
                            <li>
                                <p>
                                    * El pago máximo por TICKET es de 2.500 Unidades sin importar las veces apostadas en el boleto.
                                </p>
                            </li>
                            <li>
                                <p>
                                    * Si en el evento un ejemplar es retirado el dinero del ejemplar retirado será reembolsado
                                </p>
                            </li>
                            <li>
                                <p>
                                    * Si en el hipódromo de origen paga con todos los ejemplares participantes en cualquiera de los cuatros (4) lugares por no haber combinación ganadora esto equivale a premio de consolación para los hipódromos de origen no siendo aplicable el pago de este premio en los establecimientos afiliados al sistema de apuesta licenciado de LA CORPORACION EL INMEJORABLE 804,C.A.
                                </p>
                            </li>
                            <li>
                                <p>
                                    * No hay pagos de consolación
                                </p>
                            </li>
                            <li>
                                <p>
                                    * En caso de que no haya boleto ganador en el hipódromo de origen no habrá premio de consolación solo se pagara el límite de pago a los boletos con la combinación acertada en LA CORPORACION EL INMEJORABLE 804
                                </p>
                            </li>
                            <li>
                                <p>
                                    * Entries y fields (llaves) corren bajo un solo interés.
                                </p>
                            </li>
                            <li>
                                <p>
                                    * En una carrera con 5 ejemplares no habrá apuesta de SUPERFECTA y se reembolsara el Dinero.
                                </p>
                            </li>
                        </ul>
                    </div>
                </article>
                <article>
                    <div className={styles.contentheader}>
                        <h5>Pick 4</h5>
                    </div>
                    <div className={styles.content}>
                        <p>
                            Usted cobra la apuesta de Pick 4 si selecciona al ejemplar ganador del primer lugar en cuatro carreras consecutivas designadas con apuestas de pick 4.
                        </p>
                        <ul>
                            <li>
                                <p>
                                    * El pago máximo por TICKET es de 2.500 Unidades sin importar las veces apostadas en el boleto.
                                </p>
                            </li>
                            <li>
                                <p>
                                    * No habrá reembolso por los retirados.
                                </p>
                            </li>
                            <li>
                                <p>
                                    * Si su ejemplar es retirado del evento este será sustituido por el ejemplar favorito al cierre de la carrera y en caso de que el ejemplar favorito resulte ganador separara por el favorito ganador y por cada ejemplar retirado del evento.
                                </p>
                            </li>
                            <li>
                                <p>
                                    * En caso de que una carrera o más sean canceladas el dinero de la apuesta será reembolsado.
                                </p>
                            </li>
                            <li>
                                <p>
                                    * Si en el hipódromo de origen paga con todos los ejemplares participantes en cualquiera de las cuatros carreras por no haber combinación ganadora esto equivale a premio de consolación para los hipódromos de origen no siendo aplicable el pago de este premio en los establecimientos afiliados al sistema de apuesta licenciado de LA CORPORACION EL INMEJORABLE 804,C.A.
                                </p>
                            </li>
                            <li>
                                <p>
                                    * No hay pagos de consolación
                                </p>
                            </li>
                            <li>
                                <p>
                                    * En caso de que no haya boleto ganador en el hipódromo de origen no habrá premio de consolación solo se pagara el límite de pago a los boletos con la combinación acertada en LA CORPORACION EL INMEJORABLE 804
                                </p>
                            </li>
                            <li>
                                <p>
                                    * Entries y fields (llaves) corren bajo un solo interés.
                                </p>
                            </li>
                            <li>
                                <p>
                                    * No hay acumulados.
                                </p>
                            </li>
                            <li>
                                <p>
                                    * Si en el evento se presentare situaciones o circunstancias no previstas en estas reglas caso fortuito o de fuerza mayor (ejemplo: problema de energía eléctrica, cambio de pista, etc.), se aplicara el pago del Hipódromo de origen y solo se cancelaran los tickets con las combinaciones acertadas.
                                </p>
                            </li>
                        </ul>
                    </div>
                </article>
                <article>
                    <div className={styles.contentheader}>
                        <h5>PARLEY</h5>
                    </div>
                    <div className={styles.content}>
                        <p>
                            Usted cobra la apuesta de PARLEY si selecciona a dos o tres ejemplares en diferentes carreras y/o diferentes hipódromos finalizan ganadores. La apuesta debe ser, ya sea a primero, segundo o tercer lugar, pero todos los ejemplares seleccionados deben estar en el mismo orden de apuesta, y las selecciones deberán finalizar en el orden elegido.
                        </p>
                        <ul>
                            <li>
                                <p>
                                    * Los límites de pagos en Parlay se figuran de las siguientes maneras:
                                </p>
                                <ul>
                                    <li>
                                        <p>
                                            ° Primer lugar: 20 unidades por cada unidad apostada.
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            ° Segundo lugar: 8 unidades por cada apostada.
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            ° Tercer lugar: 4 unidades por cada unidad apostada.
                                        </p>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <p>
                                    * El límite de pagos es de cuentos cincuenta unidades (150 U) por cada unidad apostada.
                                </p>
                            </li>
                            <li>
                                <p>
                                    * El pago máximo por apuesta de parley es de seis mil unidades (6.000 U.)
                                </p>
                            </li>
                            <li>
                                <p>
                                    * El máximo número de ejemplares en un parley es de tres (3) y el mínimo dos (2).
                                </p>
                            </li>
                            <li>
                                <p>
                                    * Si un ejemplar es retirado un parley de tres (3) se convierte en un parley de dos (2) y un parley de dos (2) se convierte en apuesta derecha.
                                </p>
                            </li>
                            <li>
                                <p>
                                    * Entries y fields corren bajo un solo interés.
                                </p>
                            </li>
                        </ul>
                    </div>
                </article>
            </section>
            <section className={styles.mt_1}>
                <div className={styles.tableContainer}>
                    <table>
                        <thead>
                            <tr>
                                <td colSpan={2}>
                                    REGLAS DE OPERACIÓN PARA LOS GALGODROMOS Y JAI ALAI CLASE "D"
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td colSpan={2} className={styles.txtAlign_left}>Apuestas Derechas </td>
                            </tr>
                            <tr>
                                <td className={styles.txtAlign_left}>Ganador</td>
                                <td>Usted cobra a ganador si su ejemplar finalizo en primer lugar </td>
                            </tr>
                            <tr>
                                <td className={styles.txtAlign_left}>Place</td>
                                <td>Usted cobra a place  si su ejemplar finalizó en primer o en segundo lugar </td>
                            </tr>
                            <tr>
                                <td className={styles.txtAlign_left}>Show</td>
                                <td>Usted podrá cobrar a show si su ejemplar finalizo oficialmente en primero,  segundo o tercer lugar.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <ul className={styles.marginBottom_off}>
                    <li>
                        <p>
                            Limites:
                        </p>
                        <ul>
                            <li>
                                <p>
                                    ° El primer lugar: 15 unidades por cada unidad apostada.
                                </p>
                            </li>
                            <li>
                                <p>
                                    ° Segundo lugar: 8 unidades por cada unidad apostada.
                                </p>
                            </li>
                            <li>
                                <p>
                                    ° Tercer lugar: 4 unidades por cada unidad apostada
                                </p>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <p>
                            Entries y fields (llave) corren bajo un solo interés
                        </p>
                    </li>
                    <li>
                        <p>
                            Si un ejemplar es retirado el dinero de la apuesta será reembolsado
                        </p>
                    </li>
                </ul>
            </section>
            <section className={styles.exoticsList}>
                <div className={styles.header}>
                    <h4>EXOTICAS</h4>
                </div>
                <article>
                    <div className={styles.contentheader}>
                        <h5>Quiniela</h5>
                    </div>
                    <div className={styles.content}>
                        <p>
                            Usted cobra la quiniela si selecciona a los ejemplares ganadores del primero y segundo lugar en cualquier orden de llegada.
                        </p>
                        <ul>
                            <li>
                                <p>
                                    * El pago máximo por TICKET es de 750 Unidades sin importar las veces apostadas en el boleto.
                                </p>
                            </li>
                            <li>
                                <p>
                                    * Si un field o entry (de la misma llave) finaliza en primero y segundo lugar, la combinación ganadora serán el field y el ejemplar que finalice en tercer lugar.
                                </p>
                            </li>
                            <li>
                                <p>
                                    * Si un ejemplar es retirado el dinero del ejemplar retirado será reembolsado.
                                </p>
                            </li>
                            <li>
                                <p>
                                    * Si hay un entry o field de tres (3) o más ejemplares no habrá apuesta de quiniela
                                </p>
                            </li>
                            <li>
                                <p>
                                    * En caso de que no haya boleto ganador en el hipódromo de origen no habrá premio de consolación solo se pagara el límite de pago a los boletos con la combinación acertada en LA CORPORACION EL INMEJORABLE 804
                                </p>
                            </li>
                            <li>
                                <p>
                                    * No hay pagos de consolación
                                </p>
                            </li>
                            <li>
                                <p>
                                    * Entries y fields (llave) corren bajo un solo interés.
                                </p>
                            </li>
                        </ul>
                    </div>
                </article>
                <article>
                    <div className={styles.contentheader}>
                        <h5>Exacta</h5>
                    </div>
                    <div className={styles.content}>
                        <p>
                            Usted cobra la apuesta de exacta si selecciona a los ejemplares ganadores del primero y el segundo lugar en el orden exacto de llegada.
                        </p>
                        <ul>
                            <li>
                                <p>
                                    * El pago máximo por TICKET es de 1.500 Unidades sin importar las veces apostadas en el boleto.
                                </p>
                            </li>
                            <li>
                                <p>
                                    * Si un field o entry termina en primero y segundo lugar la combinación ganadora será el field y el ejemplar que llegue a tercer lugar.
                                </p>
                            </li>
                            <li>
                                <p>
                                    * Si un ejemplar es retirado, el dinero del ejemplar retirado será reembolsado
                                </p>
                            </li>
                            <li>
                                <p>
                                    * En caso de que no haya boleto ganador en el hipódromo de origen no habrá premio de consolación solo se pagara el límite de pago a los boletos con la combinación acertada en LA CORPORACION EL INMEJORABLE 804
                                </p>
                            </li>
                            <li>
                                <p>
                                    * No hay pagos de consolación
                                </p>
                            </li>
                            <li>
                                <p>
                                    * Entries y fields (llave) corren bajo un solo interés
                                </p>
                            </li>
                        </ul>
                    </div>
                </article>
                <article>
                    <div className={styles.contentheader}>
                        <h5>Doble Selección (Pick 2)</h5>
                    </div>
                    <div className={styles.content}>
                        <p>
                            Usted cobra la apuesta de doble selección al ejemplar ganador de primer lugar en dos carreras consecutivas designadas con el contenido de apuestas de doble selección.
                        </p>
                        <ul>
                            <li>
                                <p>
                                    * El pago máximo por TICKET es de 1.500 Unidades sin importar las veces apostadas en el boleto.
                                </p>
                            </li>
                            <li>
                                <p>
                                    * Si un ejemplar es retirado de cualquiera de las dos (2) carreras designadas como el dinero del ejemplar retirado será reembolsado y no habrá pagos de consolación
                                </p>
                            </li>
                            <li>
                                <p>
                                    * En caso de que no haya boleto ganador en el hipódromo de origen no habrá premio de consolación solo se pagara el límite de pago a los boletos con la combinación acertada en LA CORPORACION EL INMEJORABLE 804
                                </p>
                            </li>
                            <li>
                                <p>
                                    * Entries y fields (llave) corren bajo un solo interés
                                </p>
                            </li>
                        </ul>
                    </div>
                </article>
                <article>
                    <div className={styles.contentheader}>
                        <h5>Trifecta</h5>
                    </div>
                    <div className={styles.content}>
                        <p>
                            Usted cobra la apuesta de Trifecta si selecciona a los ejemplares ganadores del primero, del segundo y del tercer lugar en orden exacto de llegada en las carreras designadas con apuestas de Trifecta.
                        </p>
                        <ul>
                            <li>
                                <p>
                                    * El pago máximo por TICKET es de 2.500 Unidades sin importar las veces apostadas en el boleto.
                                </p>
                            </li>
                            <li>
                                <p>
                                    * Si en el evento un ejemplar es retirado el dinero del ejemplar retirado será reembolsado
                                </p>
                            </li>
                            <li>
                                <p>
                                    * Si en el hipódromo de origen paga con todos los ejemplares participantes en cualquiera de los tres (3) lugares por no haber combinación ganadora, esto equivale a premio de consolación para los hipódromos de origen, no siendo aplicable el pago de este premio en los establecimientos afiliados al sistema de apuestas licenciado de LA CORPORACION EL INMEJORABLE 804,C.A.
                                </p>
                            </li>
                            <li>
                                <p>
                                    * No hay pagos de consolación
                                </p>
                            </li>
                            <li>
                                <p>
                                    * En caso de que no haya boleto ganador en el hipódromo de origen no habrá premio de consolación solo se pagara el límite de pago a los boletos con la combinación acertada en LA CORPORACION EL INMEJORABLE 804
                                </p>
                            </li>
                            <li>
                                <p>
                                    * Entries y fields (llave) corren bajo un solo interés.
                                </p>
                            </li>
                            <li>
                                <p>
                                    * En una carrera con (4) ejemplares no habrá apuesta de TRIFECTA y se reembolsara el Dinero.
                                </p>
                            </li>
                        </ul>
                    </div>
                </article>
                <article>
                    <div className={styles.contentheader}>
                        <h5>Triple selección (Pick 3)</h5>
                    </div>
                    <div className={styles.content}>
                        <p>
                            Usted cobra la apuesta de triple selección si selecciona al ejemplar ganador del primer lugar en tres carreras consecutivas designadas con apuestas de triple selección.
                        </p>
                        <ul>
                            <li>
                                <p>
                                    * El pago máximo por TICKET es de 2.500 Unidades sin importar las veces apostadas en el boleto.
                                </p>
                            </li>
                            <li>
                                <p>
                                    * No habrá reembolso por los retirados
                                </p>
                            </li>
                            <li>
                                <p>
                                    * Si su ejemplar es retirado del evento este será sustituido por el ejemplar favorito al cierre de la carrera y en caso de que el ejemplar favorito resulte ganador separara por el favorito ganador y por cada ejemplar retirado del evento.
                                </p>
                            </li>
                            <li>
                                <p>
                                    * En caso de que una carrera o más sean canceladas el dinero de la apuesta será reembolsado.
                                </p>
                            </li>
                            <li>
                                <p>
                                    * Si en el hipódromo de origen paga con todos los ejemplares participantes en cualquiera de las tres (3) carreras por no haber combinación ganadora esto equivale a premio de consolación para los hipódromos de origen no siendo aplicable el pago de este premio en los establecimientos afiliados al sistema de apuesta licenciado de LA CORPORACION EL INMEJORABLE 804,C.A.
                                </p>
                            </li>
                            <li>
                                <p>
                                    * No hay pagos de consolación
                                </p>
                            </li>
                            <li>
                                <p>
                                    * En caso de que no haya boleto ganador en el hipódromo de origen no habrá premio de consolación solo se pagara el límite de pago a los boletos con la combinación acertada en LA CORPORACION EL INMEJORABLE 804
                                </p>
                            </li>
                            <li>
                                <p>
                                    * Entries y fields (llave) corren bajo un solo interés.
                                </p>
                            </li>
                            <li>
                                <p>
                                    * No hay acumulados.
                                </p>
                            </li>
                            <li>
                                <p>
                                    * Si en el evento se presentare situaciones o circunstancias no previstas en estas reglas caso fortuito o de fuerza mayor (ejemplo: problema de energía eléctrica, cambio de pista, etc.), se aplicara el pago del Hipódromo de origen.
                                </p>
                            </li>
                        </ul>
                    </div>
                </article>
                <article>
                    <div className={styles.contentheader}>
                        <h5>Superfecta</h5>
                    </div>
                    <div className={styles.content}>
                        <p>
                            Usted cobra la apuesta de Superfecta si selecciona a los ejemplares ganadores del primero, segundo, tercero y cuarto lugar, en el orden exacto de llegada en carreras designadas con apuestas de su perfecta.
                        </p>
                        <ul>
                            <li>
                                <p>
                                    * El pago máximo por TICKET es de 2.500 Unidades sin importar las veces apostadas en el boleto.
                                </p>
                            </li>
                            <li>
                                <p>
                                    * Si en el evento un ejemplar es retirado el dinero del ejemplar retirado será reembolsado
                                </p>
                            </li>
                            <li>
                                <p>
                                    * Si en el hipódromo de origen paga con todos los ejemplares participantes en cualquiera de los cuatros (4) lugares por no haber combinación ganadora esto equivale a premio de consolación para los hipódromos de origen no siendo aplicable el pago de este premio en los establecimientos afiliados al sistema de apuesta licenciado de LA CORPORACION EL INMEJORABLE 804,C.A.
                                </p>
                            </li>
                            <li>
                                <p>
                                    * No hay pagos de consolación
                                </p>
                            </li>
                            <li>
                                <p>
                                    * En caso de que no haya boleto ganador en el hipódromo de origen no habrá premio de consolación solo se pagara el límite de pago a los boletos con la combinación acertada en LA CORPORACION EL INMEJORABLE 804
                                </p>
                            </li>
                            <li>
                                <p>
                                    * Entries y fields (llaves) corren bajo un solo interés.
                                </p>
                            </li>
                            <li>
                                <p>
                                    * En una carrera con menos de 7 ejemplares no habrá apuesta de SUPERFECTA y se reembolsara el dinero.
                                </p>
                            </li>
                        </ul>
                    </div>
                </article>
                <article>
                    <div className={styles.contentheader}>
                        <h5>Pick 4</h5>
                    </div>
                    <div className={styles.content}>
                        <p>
                            Usted cobra la apuesta de Pick 4 si selecciona al ejemplar ganador del primer lugar en cuatro carreras consecutivas designadas con apuestas de pick 4.
                        </p>
                        <ul>
                            <li>
                                <p>
                                    * El pago máximo por TICKET es de 2.500 Unidades sin importar las veces apostadas en el boleto.
                                </p>
                            </li>
                            <li>
                                <p>
                                    * No habrá reembolso por los retirados.
                                </p>
                            </li>
                            <li>
                                <p>
                                    * Si su ejemplar es retirado del evento este será sustituido por el ejemplar favorito al cierre de la carrera y en caso de que el ejemplar favorito resulte ganador separara por el favorito ganador y por cada ejemplar retirado del evento.
                                </p>
                            </li>
                            <li>
                                <p>
                                    * En caso de que una carrera o más sean canceladas el dinero de la apuesta será reembolsado.
                                </p>
                            </li>
                            <li>
                                <p>
                                    * Si en el hipódromo de origen paga con todos los ejemplares participantes en cualquiera de las cuatros carreras por no haber combinación ganadora esto equivale a premio de consolación para los hipódromos de origen no siendo aplicable el pago de este premio en los establecimientos afiliados al sistema de apuesta licenciado de LA CORPORACION EL INMEJORABLE 804,C.A.
                                </p>
                            </li>
                            <li>
                                <p>
                                    * No hay pagos de consolación
                                </p>
                            </li>
                            <li>
                                <p>
                                    * En caso de que no haya boleto ganador en el hipódromo de origen no habrá premio de consolación solo se pagara el límite de pago a los boletos con la combinación acertada en LA CORPORACION EL INMEJORABLE 804
                                </p>
                            </li>
                            <li>
                                <p>
                                    * Entries y fields (llaves) corren bajo un solo interés.
                                </p>
                            </li>
                            <li>
                                <p>
                                    * No hay acumulados.
                                </p>
                            </li>
                            <li>
                                <p>
                                    * Si en el evento se presentare situaciones o circunstancias no previstas en estas reglas caso fortuito o de fuerza mayor (ejemplo: problema de energía eléctrica, cambio de pista, etc.), se aplicara el pago del Hipódromo de origen y solo se cancelaran los tickets con las combinaciones acertadas.
                                </p>
                            </li>
                        </ul>
                    </div>
                </article>
            </section>
            <section>
                <h4>GLOSARIO</h4>
                <p>
                    <span>Entry:</span> Dos o más caballos propiedad del mismo establo o entrenados por el mismo entrenador se denominan como entry y se unen como un solo interés de apuesta, una apuesta a un caballo unido es una apuesta a todos los caballos quien este unido.
                </p>
                <p>
                    <span>Field:</span> Un caballo agrupado con otro (s) bajo un mismo interés donde el número de caballos que arrancan excede el número de interés de apuesta que el tablero del hipódromo de origen pueda manejar, una apuesta a un caballo de field es una apuesta todos los caballos del field común.
                </p>
                <p>
                    <span>Apuestas Futuras:</span> Consiste en ciertos eventos como el Derby de Kentucky, Copa de Criadores, Triple Corona, etc.
                </p>
                <p>
                    Estas apuestas son consideradas como apuesta derecha y pagan de acuerdo al monto con el que se realizó la puesta. En caso de que un ejemplar sea retirado no habrá devoluciones Entries y fields (llaves) corren bajo un solo interés.
                </p>
                <p>
                    <span>Eventos Especiales:</span> Esta es una apuesta a ciertos eventos designados de relevancia Internacional y/o Nacional Estas apuestas son consideradas Apuestas Derechas y aplicaran las reglas y límites indicados en la Hoja de Apuesta correspondiente a cada evento específico.
                </p>
            </section>
            <section>
                <h4>POLITICA PARA LA TOMA DE APUESTAS EN CARRERAS</h4>
                <div className={styles.tableContainer}>
                    <table>
                        <thead>
                            <tr>
                                <th>HIPODROMO CLASE</th>
                                <th>POLITICA DE TOMA DE APUESTAS</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    A
                                </td>
                                <td>
                                    <ul>
                                        <li>
                                            <p>
                                                Ganador / Place / Show
                                            </p>
                                            <ul>
                                                <li>
                                                    <p>
                                                        * El límite de apuesta es de 3.000 unidades a Ganador, Place y Show por competidor.
                                                    </p>
                                                </li>
                                                <li>
                                                    <p>
                                                        * Si la apuesta por competidor es menor a 3.000 unidades se expide en un solo boleto.
                                                    </p>
                                                </li>
                                                <li>
                                                    <p>
                                                        * Se permite partir la jugada por competidor en boletos de 3.000 unidades cada uno, previa autorización de la Gerencia de la empresa Operadora.
                                                    </p>
                                                </li>
                                                <li>
                                                    <p>
                                                        * Estos límites aplican para uno o más competidores por cada carrera.
                                                    </p>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <p>
                                                EXOTICAS
                                            </p>
                                            <ul>
                                                <li>
                                                    <p>
                                                        * Apuestas menores a 100 unidades se hacen en un solo boleto.
                                                    </p>
                                                </li>
                                                <li>
                                                    <p>
                                                        * A partir de 100 unidades se pueden emitir en dos (2) boletos de 100 unidades cada uno.
                                                    </p>
                                                </li>
                                                <li>
                                                    <p>
                                                        * Lo anterior se aplica por cada tipo de apuestas exóticas (Quiniela, Exacta, Trifecta, Superfecta, Doble Selección, Triple Selección, Parlay, etc.)
                                                    </p>
                                                </li>
                                                <li>
                                                    <p>
                                                        * Estos límites aplican por cada tipo de apuesta exótica con combinación de competidores distintos por cada carrera.
                                                    </p>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>

                                </td>
                            </tr>
                            <tr>
                                <td>
                                    B
                                </td>
                                <td>
                                    <ul>
                                        <li>
                                            <p>
                                                Ganador / Place / Show
                                            </p>
                                            <ul>
                                                <li>
                                                    <p>
                                                        * El límite de apuesta derecha es de 1.000 unidades a Ganador, Place y Show por competidor.
                                                    </p>
                                                </li>
                                                <li>
                                                    <p>
                                                        * Si la apuesta por competidor es menor a 1.000 unidades, se expide en un solo boleto
                                                    </p>
                                                </li>
                                                <li>
                                                    <p>
                                                        * Estos límites aplican para uno o más competidores por cada carrera
                                                    </p>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <p>
                                                EXOTICAS
                                            </p>
                                            <ul>
                                                <li>
                                                    <p>
                                                        * Apuestas menores a 100 unidades se hacen en un solo boleto.
                                                    </p>
                                                </li>
                                                <li>
                                                    <p>
                                                        * A partir de 100 unidades se pueden emitir en dos (2) boletos de 100 unidades cada uno.
                                                    </p>
                                                </li>
                                                <li>
                                                    <p>
                                                        * Lo anterior se aplica por cada tipo de apuestas exóticas (Quiniela, Exacta, Trifecta, Superfecta, Doble Selección, Triple Selección, Parlay, etc.)
                                                    </p>
                                                </li>
                                                <li>
                                                    <p>
                                                        * Estos límites aplican por cada tipo de apuesta exótica con combinación de competidores distintos por cada carrera.
                                                    </p>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>

                                </td>
                            </tr>
                            <tr>
                                <td>
                                    C
                                </td>
                                <td>
                                    <ul>
                                        <li>
                                            <p>
                                                Ganador / Place / Show
                                            </p>
                                            <ul>
                                                <li>
                                                    <p>
                                                        * El límite de apuesta derecha es de500 unidades a Ganador, Place y Show por competidor.
                                                    </p>
                                                </li>
                                                <li>
                                                    <p>
                                                        * Si la apuesta por competidor es menor a 500 unidades se expide en un solo boleto.
                                                    </p>
                                                </li>
                                                <li>
                                                    <p>
                                                        * Estos límites aplican para uno o más competidores por cada carrera.
                                                    </p>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <p>
                                                EXOTICAS
                                            </p>
                                            <ul>
                                                <li>
                                                    <p>
                                                        * Apuestas menores a 100 unidades se hacen en un solo boleto.
                                                    </p>
                                                </li>
                                                <li>
                                                    <p>
                                                        * A partir de 100 unidades se pueden emitir en dos (2) boletos de 100 unidades cada uno.
                                                    </p>
                                                </li>
                                                <li>
                                                    <p>
                                                        * Lo anterior se aplica por cada tipo de apuestas exóticas (Quiniela, Exacta, Trifecta, Superfecta, Doble Selección, Triple Selección, Parlay, etc.)
                                                    </p>
                                                </li>
                                                <li>
                                                    <p>
                                                        * Estos límites aplican por cada tipo de apuesta exótica con combinación de competidores distintos por cada carrera.
                                                    </p>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>

                                </td>
                            </tr>
                            <tr>
                                <td>
                                    D
                                </td>
                                <td>
                                    <ul>
                                        <li>
                                            <p>
                                                Ganador / Place / Show
                                            </p>
                                            <ul>
                                                <li>
                                                    <p>
                                                        * El límite de apuesta derecha es de300 unidades a Ganador, Place y Show por competidor.
                                                    </p>
                                                </li>
                                                <li>
                                                    <p>
                                                        * Si la apuesta por competidor es menor a 300 unidades se expide en un solo boleto.
                                                    </p>
                                                </li>
                                                <li>
                                                    <p>
                                                        * Estos límites aplican para uno o más competidores por cada carrera.
                                                    </p>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <p>
                                                EXOTICAS
                                            </p>
                                            <ul>
                                                <li>
                                                    <p>
                                                        * El límite de apuestas exóticas es d100 unidades.
                                                    </p>
                                                </li>
                                                <li>
                                                    <p>
                                                        * Apuestas menores a 100 unidades se hacen en un solo boleto.
                                                    </p>
                                                </li>
                                                <li>
                                                    <p>
                                                        * A partir de 100 unidades se pueden emitir en dos (2) boletos de 100 unidades cada uno.
                                                    </p>
                                                </li>
                                                <li>
                                                    <p>
                                                        * Lo anterior se aplica por cada tipo de apuestas exóticas (Quiniela, Exacta, Trifecta, Superfecta, Doble Selección, Triple Selección, Parlay, etc.)
                                                    </p>
                                                </li>
                                                <li>
                                                    <p>
                                                        * Estos límites aplican por cada tipo de apuesta exótica con combinación de competidores distintos por cada carrera.
                                                    </p>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>

                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
            <section className={styles.mt_1}>
                <div className={styles.tableContainer}>
                    <table className={styles.classRace}>
                        <thead>
                            <tr>
                                <th colSpan={1}>
                                    CUADRO RESUMEN DE LA TOMA DE APUESTAS
                                </th>
                            </tr>
                            <tr>
                                <th colSpan={1}>
                                    CLASES DE HIPODROMOS Y GALGODROMOS
                                </th>
                            </tr>
                            <tr>
                                <th>CLASE “A”</th>
                                <th>CLASE “B”</th>
                                <th>CLASE “C”</th>
                                <th>CLASE “D”</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Und 1.000 GANADOR</td>
                                <td>Und 300 GANADOR</td>
                                <td>Und 150 GANADOR</td>
                                <td>Und 50 GANADOR</td>
                            </tr>
                            <tr>
                                <td>Und 1.000 PLACE</td>
                                <td>Und 300 PLACE</td>
                                <td>Und 150 PLACE</td>
                                <td>Und 50 PLACE</td>
                            </tr>
                            <tr>
                                <td>Und 1.000 Show</td>
                                <td>Und 300 SHOW</td>
                                <td>Und 150 SHOW</td>
                                <td>Und 50 SHOW</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p><span>NOTA</span></p>
                <p>
                    Und abreviación de unidades de apuesta.
                </p>
                <p>
                    Numero de boleto igual a N° de apuesta es decir un boleto (ticket) equivale a una apuesta.
                </p>
                <p>
                    Cuando los clientes soliciten apuesta por encima de los límites máximos establecidos por la empresa consultar la política para autorizar a clientes especiales.
                </p>
            </section>
            <section>
                <p>
                    Derecha
                </p>
                <section className={styles.exoticsList}>
                    <div className={styles.header}>
                        <p>CUADRO RESUMEN DE LA TOMA DE APUESTAS GALGODROMOS TODOS LOS GALGODROMOS SE CONSIDERAN CLASE “D”</p>
                    </div>
                    <article>
                        <div className={styles.contentheader}>
                            <h5>Quiniela</h5>
                        </div>
                        <div className={styles.content}>
                            <p>
                                APUESTA MAXIMA
                            </p>
                            <ul>
                                <li>
                                    <p>
                                        * Und 50 GANADOR
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        * Und 50 PLACE
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        * Und 50 SHOW
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </article>
                    <article>
                        <div className={styles.content}>
                            <p>
                                LAS APUESTAS DE GALGODROMOS ESTAN LIMITADOS
                            </p>
                            <ul>
                                <li>
                                    <p>
                                        EL PAGO DE HARA DE LA SIGUIENTE FORMA:
                                    </p>
                                    <ul>
                                        <li>
                                            <p>
                                                GANADOR 15 unidades por cada apostada
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                PLACE 8 unidades por cada apostada
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                SHOW 4 unidades por cada apostada
                                            </p>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </article>
                </section>
            </section>
        </div >
    )
}