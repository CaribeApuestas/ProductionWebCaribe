import { Metadata } from "next";
import Collapsible from "@/app/_components/Collapsible";
import styles from "./styles.module.css";

export const metadata: Metadata = {
    title: "Política de Privacidad | CaribeApuesta ",
    description: "Conoce nuestra política de privacidad en caribeapuesta.com",
    metadataBase: new URL("http://localhost:3000/"),
    openGraph: {
        title: "Política de Privacidad",
        description: "Conoce nuestra política de privacidad en caribeapuesta.com"
    }
};
export default function PrivacyPolicy() {
    return (
        <div className={styles.container}>
            <h2> Política de Privacidad </h2>
            <Collapsible title={'1 - www.caribeapuesta.com. '}>
                <p>
                    Última actualización: 03 de Mayo 2024
                </p>
                <p>
                    Lea esta declaración de privacidad cuidadosamente antes de enviar cualquier información personal.
                </p>
            </Collapsible>
            <Collapsible title={"2 - Nuestro compromiso con la privacidad. "}>
                <p>
                    caribeapuesta.com se compromete a proteger y respetar su privacidad. Su privacidad es importante para nosotros.
                    Para proteger mejor su privacidad proporcionamos este comunicado explicando nuestras prácticas
                    de información en línea y las opciones que usted puede hacer sobre la manera en que su información es recogida y usada.
                </p>
            </Collapsible>
            <Collapsible title={"3 - Aplicación del presente anuncio. "}>
                <p>
                    Esta declaración de privacidad se aplica únicamente a la información recogida por nosotros a los usuarios que navegan en nuestra web. No aplica a la información recogida por otras vías.
                </p>
                <p>
                    La información personal proporcionada al momento de registrarse para crear una cuenta y todo el contenido, los materiales y la información presentada o subidos en el Sitio Web.
                </p>
                <p>
                    La información que usted proporcione, si usted entra en un concurso o promoción en el Sitio Web o cuando usted reporta un problema con el sitio web.
                </p>
                <p>
                    La correspondencia que pasa entre ustedes y nosotros.
                </p>
                <p>
                    Las respuestas a las encuestas que utilizamos con fines de investigación, a pesar de que no tiene que participar en este tipo de encuestas.
                </p>
                <p>
                    Los detalles de las transacciones que llevan a cabo a través de la página web y de la tramitación de su cuenta, incluyendo detalles de su historial de pagos, honorarios del torneo y las cantidades que se han apostado en los juegos y las cantidades que usted ha ganado o perdido, incluyendo los bonos.
                </p>
                <p>
                    Los detalles de sus visitas a la Web, incluyendo pero no limitado a, los datos de tráfico, datos de localización, weblogs y otros datos de comunicación, si esto es necesario para nuestros propios fines contables o de otra manera y los recursos a los que accede.
                </p>
                <p>
                    Recopilamos las estadísticas que muestran el número y frecuencia de visitantes a la Web y sus páginas individuales. El sitio web no está configurado para recopilar automáticamente información de identificación personal de cada visitante a la misma. Se reconoce el servidor principal de los visitantes, pero no direcciones de correo electrónico. Por ejemplo, podemos decir que Internet Service Provider utilizan nuestros visitantes, pero no los nombres, direcciones u otra información acerca de nuestros visitantes que nos permitan identificar a los visitantes específicos a la Web. Esta información se utiliza para fines internos por nuestro personal de soporte técnico, nuestros agentes y subcontratistas.
                </p>
            </Collapsible>
            <Collapsible title={"4 - Direcciones IP y Cookies. "}>
                <p>
                    Podemos recopilar información sobre su ordenador, incluyendo, cuando sea posible, su dirección de IP, sistema operativo y tipo de navegador, para la administración del sistema y reportar información agregada a nuestros anunciantes. Por la misma razón, podemos obtener información sobre su uso general de Internet mediante un archivo de cookies que se almacena en el disco duro de su ordenador. Las cookies contienen información que se transfiere al disco duro de su ordenador. Se utilizan para realizar un seguimiento de cómo y cuándo los visitantes usan la página web y nos ayudará a mejorar el sitio web y ofrecer un servicio mejor y más personalizado. Los Cookies nos permiten:
                </p>
                <p>
                    Para estimar el tamaño de nuestra audiencia y patrones de uso.
                </p>
                <p>
                    La información que usted proporcione, si usted entra en un concurso o promoción en el Sitio Web o cuando usted reporta un problema con el sitio web.
                </p>
                <p>
                    Para almacenar sus contraseñas e información acerca de sus preferencias de modo que nos permitirá personalizar el sitio web de acuerdo a sus intereses individuales.
                </p>
                <p>
                    Para acelerar tus búsquedas.
                </p>
                <p>
                    Para reconocerle cuando regrese al sitio web.
                </p>
                <p>
                    Usted puede negarse a aceptar cookies activando la configuración en su navegador que le permite rechazar la configuración de cookies. Sin embargo, si selecciona esta configuración es posible que no pueda acceder a ciertas partes del Sitio Web. A menos que usted haya configurado su navegador para que rechace cookies, nuestro sistema emitirá cookies cuando inicie sesión en el sitio web.
                </p>
                <p>
                    Tenga en cuenta que nuestros anunciantes, patrocinadores y sitios web de terceros que puede conectarse desde el Sitio Web también pueden utilizar cookies, sobre las que no tenemos control por lo que debe revisar las políticas aplicables a dichos sitios web.
                </p>
            </Collapsible>
            <Collapsible title={"5 - Donde almacenamos sus datos personales. "}>
                <p>
                    Algunas partes de sus datos personales serán almacenados en servidores en el E-Commerce Park en Curacao y también pueden ser transferidos y procesados en servidores situados en esta jurisdicción. De vez en cuando los datos también pueden ser transferidos y procesados en servidores situados en otras jurisdicciones para los fines que figuran a continuación, incluyendo copias de seguridad y recuperación de desastres. Este tratamiento se puede realizar por nosotros o en nuestro nombre, por nuestros empleados, agentes y subcontratistas que pueden estar ubicados en cualquier parte del mundo. Al enviar sus datos de carácter personal, usted está de acuerdo con este almacenamiento, transferencia y procesamiento.
                </p>
                <p>
                    Tomaremos todas las medidas razonablemente necesarias para asegurar que sus datos son tratados de forma segura, y de acuerdo con esta declaración de privacidad, ciertas partes de sus datos personales, en su caso, incluyendo las operaciones de pago. Si alguna vez nos tocara desmantelar o reasignar cualquier equipo informático, nos aseguraremos de que toda la información confidencial contenida en dicho equipo se borrará de forma permanente, ya sea usando un software especializado o al dañar físicamente el equipo.
                </p>
                <p>
                    ¿Dónde usted ha elegido una contraseña que le permite acceder a determinadas partes del Sitio Web, usted es responsable de mantener su confidencialidad y para evitar cualquier uso no autorizado de su cuenta. Nosotros no permitimos compartir su nombre de usuario y contraseña con ninguna otra persona ni con múltiples usuarios en una red.
                </p>
                <p>
                    Desafortunadamente, la transmisión de información a través de Internet no es completamente segura. Aunque haremos todo lo posible para proteger sus datos personales, no podemos garantizar la seguridad de sus datos transmitidos o cargados en el sitio web, que se desarrolla a su propio riesgo. Una vez que hayamos recibido su información, utilizaremos procedimientos estrictos y características de seguridad para tratar de evitar el acceso no autorizado.
                </p>
            </Collapsible>
            <Collapsible title={"6 - Cómo usamos su información. "}>
                <p>
                    Nosotros usaremos su información personal (como su nombre, dirección postal o de correo electrónico o número de teléfono) para fines específicos que pueden incluir:
                </p>
                <p>
                    Verificación de la identidad y la edad. Esto se debe a que tenemos que saber que usted es quien dice ser y que son por lo menos 18 años de edad, o al menos la edad mínima permitida para participar en tales actividades, si usted vive o reside en una jurisdicción que establece un restricción de edad mínima que es mayor de 18 años. Al enviar su información, usted nos autoriza a confirmar la exactitud de la información que ha presentado contra la identificación emitida por el gobierno o por otros medios razonables.
                </p>
                <p>
                    Asegurar que el contenido de la página web se presenta de la manera más eficaz para usted y para su equipo.
                </p>
                <p>
                    Que le proporciona la información, productos o servicios que nos solicite o que creemos pueden interesarle, en la que han dado su consentimiento para ser contactado para tales fines.
                </p>
                <p>
                    La realización de las obligaciones derivadas de cualquier contrato celebrado entre usted y nosotros o nuestras obligaciones legales impuestas por nuestro regulador (s) y / o de cualquier tribunal de jurisdicción competente.
                </p>
                <p>
                    Notificarle sobre cambios en nuestro servicio.
                </p>
                <p>
                    Habilitación del procesamiento de pagos de o debido a usted.
                </p>
                <p>
                    Que le proporciona atención al cliente.
                </p>
                <p>
                    El análisis estadístico y estudios de mercado.
                </p>
                <p>
                    Publicidad y comercialización actividades. Por ejemplo podemos notificarle de las ofertas especiales e información actualizada sobre nuestros productos y servicios y otros productos y servicios ofrecidos por terceros cuidadosamente seleccionados si sentimos que pueden ser de su interés.
                </p>
                <p>
                    Dicha notificación se hará por correo electrónico o por mensajes de texto SMS y para estos efectos que puede mejorar o combinar la información recopilada de usted en el Sitio web con datos obtenidos de terceros.
                </p>
                <p>
                    En cualquier momento, usted puede optar fácilmente por no recibir más la comercialización de productos, promociones u avisos, cuidadosamente seleccionando mediante la actualización de su perfil de cuenta, la opción que aplique a la no recepción de estos avisos. El contenido de terceros puede de vez en cuando aparecen en el Sitio Web o ser accesible desde la Web a través de enlaces a otros sitios web. Si usted sigue un enlace a cualquiera de estos sitios web, usted sale de la página web e introducir sitios que pueden o no pueden tener sus propias declaraciones de privacidad. No hemos revisado, no controlar y no somos responsables por el contenido de dichos sitios web ni de los términos de sus normas de privacidad. Por favor, consulte estas declaraciones antes de acceder o enviar cualquier información personal a estos sitios web.
                </p>
            </Collapsible>
            <Collapsible title={"7 - Divulgación de su información. "}>
                <p>
                    Podemos revelar su información personal a cualquiera de nuestras empresas asociadas o socios necesarios para la prestación de los servicios a usted.
                </p>
                <p>
                    Podemos revelar su información personal a terceros:
                </p>
                <p>
                    Si todos o sustancialmente todos nuestros activos sean adquiridos por un tercero, en cuyo caso los datos personales en poder de los clientes será uno de los activos transferidos.
                </p>
                <p>
                    Se permitirá el acceso a su información personal, historial y referencias a nuestros agentes y contratistas o subcontratistas para mantener la información confidencial y no utilizarla para cualquier otro propósito que para llevar a cabo los servicios que están realizando para nosotros.
                </p>
            </Collapsible>
            <Collapsible title={"8 - Dirección de Juego. "}>
                <p>
                    La Dirección de Juego tendrá acceso a su información personal en todo momento. No divulgamos información sobre individuos identificables a nuestros anunciantes, pero podemos proporcionarles información agregada sobre nuestros usuarios (por ejemplo, podemos informar que 500 hombres menores de 30 años han hecho clic en su anuncio en un día determinado). También podemos utilizar esta información agregada para ayudar a los anunciantes a llegar al tipo de público al que quieren dirigirse (por ejemplo, las mujeres en Londres), para mejorar el sitio web para el desarrollo de productos y fines de marketing en general. Podemos hacer uso de los datos personales que hemos recopilado de usted para que podamos cumplir con los deseos de nuestros anunciantes mostrando sus anuncios a ese público objetivo.
                </p>
            </Collapsible>
            <Collapsible title={"9 - Cómo usted puede acceder o corregir su información."}>
                <p>
                    Usted puede solicitar una copia de la información personal identificable que hemos recopilado sobre usted a través de la Web en contacto con nuestro equipo de Atención al Cliente <mark>(WhatsApp): +58 424-8236730</mark>.
                </p>
                <p>
                    Para la mayor seguridad de su información personal, cuando usted solicita una copia de la información personal identificable que hemos recopilado sobre usted a través de la Web, se le pedirá que nos proporcione una prueba de identificación.
                </p>
                <p>
                    Cualquier solicitud de una copia de la información personal identificable que hemos recopilado sobre usted a través de la página web puede estar sujeta a una tarifa de $ 15 (o su cambio oficial en Bs) para cubrir nuestros costos en la prestación de esta información.
                </p>
                <p>
                    Usted también puede que tenga inexactitudes en la información personal que tenemos sobre usted, puede ser corregido poniéndose en contacto con nuestro equipo de servicio al cliente, que puede requerir que usted envíe la documentación de apoyo.
                </p>
            </Collapsible>
            <Collapsible title={"10 - Cambios en nuestra política de privacidad. "}>
                <p>
                    Podemos enmendar o modificar esta declaración en cualquier momento y con efecto inmediato, mediante la actualización de esta página web y, al mismo tiempo vamos a buscar para notificarle de tales cambios, por lo que debe revisar esta página web cada vez que visite el sitio web para revisar la declaración de privacidad vigente en ese momento.
                </p>
                <p>
                    Los términos de esta declaración de privacidad se regirán e interpretarán de acuerdo con las leyes de Curaçao y los conflictos que no puedan resolverse estarán sujetos a la jurisdicción exclusiva de los tribunales de la Curaçao.
                </p>
            </Collapsible>
            <Collapsible title={"11 - Integridad del Deporte. "}>
                <p>
                    El Sitio Web se compromete a garantizar la integridad del deporte y para participar en los esfuerzos para identificar y erradicar el amaño de partidos.
                </p>
                <p>
                    Como tal, no obstante cualquier otra estipulación de las Condiciones del servicio, o cualquier disposición de la política de privacidad aplicable, mediante la colocación de
                    una apuesta en el sitio web, usted reconoce y acepta expresamente que El Sitio Web en todo momento se reserva el derecho, a su sola discreción, reportar irregularidad de Apuestas
                    a dichas federaciones deportivas, reguladores, agencias, comisiones o asociaciones (o sus respectivos agentes) como El Sitio Web considere ({'"organismos reguladores"'})
                    apropiados con el fin de permitir la identificación de la actividad irregular y para apoyar las investigaciones correspondientes.
                </p>
                <p>
                    {'"Irregularidad de Apuesta"'} significa actividad que, a la sola evaluación de El Sitio Web, se desvía de los patrones de apuestas esperados e incluye, sin limitación:
                </p>
                <ul>
                    <li>
                        <p>
                            (i) un número inusual y significativo de apuestas procedentes de la misma región geográfica o por medio de las cuentas vinculadas;
                        </p>
                    </li>
                    <li>
                        <p>
                            (ii) un apostador continua para realizar apuestas a cualquier precio en el rostro de una reducción constante de las probabilidades aplicables; y / o
                        </p>
                    </li>
                    <li>
                        <p>
                            (iii) cualquier otro indicador o patrón evaluado por El Sitio Web como indicativo del potencial de arreglo de partidos.
                        </p>
                    </li>
                </ul>
                <p>
                    El Sitio Web deberá utilizar medidas comerciales razonables para asegurar que toda la información proporcionada a los organismos regulatorios de conformidad con esta disposición está sujeta a las disposiciones de confidencialidad contractuales razonables, y que toda la información o documentación será destruida por tales organismos reguladores, cuando ya no es relevante en relación con cualquier investigación en curso, la investigación o el proceso disciplinario.
                </p>
            </Collapsible>
            <Collapsible title={"12 - Como contactarnos. "}>
                <p>
                    Si desea ponerse en contacto con nosotros por cualquier motivo con respecto a nuestras prácticas de privacidad o para solicitar una copia de la información personal identificable que hemos recopilado sobre usted a través del sitio web por favor escriba a nuestro equipo de Atención al Cliente <mark>(WhatsApp): +58 424-8236730</mark>.
                </p>
                <p>
                    POLÍTICA: Última actualización
                </p>
                <p>
                    03 de Mayo 2024
                </p>
            </Collapsible>
            <Collapsible title={"13 - ¿Cómo sé que mi información está segura?. "}>
                <p>
                    <mark>CARIBEAPUESTA</mark> Utiliza SSL (Secure Socket Layer) para proteger todas las áreas sensibles de la página.
                </p>
                <p>
                    Puede verificar que un sitio web tenga SSL por el icono del candado ubicado en la barra de dirección del navegador.
                </p>
                <p>
                    Esto garantiza que cualquier dato personal que pase a través de la página está seguro.
                </p>
                <p>
                    Absolutamente toda la información sensible perteneciente a nuestros jugadores esta encriptada y es accesible únicamente a miembros relevantes del personal.
                </p>
            </Collapsible>
            <Collapsible title={"14 - Finanzas. "}>
                <h3>
                    ¿Cómo hago un depósito?
                </h3>
                <p>
                    Por favor siga estos fáciles pasos para depositar fondos en su cuenta. Es rápido y seguro.
                </p>
                <p>
                    Luego de ingresar en su cuenta, haga click en “DEPOSITAR” ubicado en la parte centrica de la página.
                </p>
                <p>
                    Escoja el método de depósito que quiera haciendo selección entre el tipo de transacción, dicho método le aparece en las opciones de recarga.
                </p>
                <p>
                    Ahora usted podrá colocar la cantidad que quiera depositar y los detalles de su cuenta para el método de depósito que ha seleccionado, luego la Fecha de la transaccion y luego haga click en Enviar.
                </p>
                <p>
                    Si usted necesita mayor asistencia para hacer un depósito, por favor comuníquese a los teléfonos +58-212.310.45.30 al 35 para hablar con un miembro de nuestro Servicio al Cliente.
                </p>
                <p>
                    ¿Cuáles métodos de depósito están disponibles?
                </p>
                <p>
                    Los depósitos pueden ser realizados por transferencias bancarias y/o por deposito via taquillas del banco.
                </p>
                <p>
                    Una variedad de opciones para depositar pueden estar disponibles dependiendo de su lugar de residencia. Por favor recuerde que las solicitudes de retiros serán procesados a través del mismo método utilizado para depositar. En consecuencia, si usted ha depositado con un método especifico, su retiro será procesado por el mismo método y colocado en la misma cuenta.
                </p>
                <p>
                    Puede también contactar con nuestro Servicio al Cliente a través de los teléfonos +58-212.310.45.30 al 35 para recibir consejos sobre cual método de pago es el más indicado para usted.
                </p>
                <h3>
                    ¿Hay límites para los depósitos?
                </h3>
                <p>
                    Si, los límites están basados en el método de depósito escogido. Puede usar de referencia el cuadro a continuación:
                </p>
                <p>
                    Metodo: Deposito por taquilla
                </p>
                <p>
                    Deposito Minimo: USD$ 200,00
                </p>
                <p>
                    Deposito Maximo: USD$ 1.000.000,00
                </p>
                <h3>
                    ¿Hay cargos/impuestos por depósitos?
                </h3>
                <p>
                    <mark>CARIBEAPUESTA</mark> no carga ningún tipo de impuestos por depositar en la cuenta del jugador.
                </p>
                <p>
                    Cuando se está procesando un depósito a través de tarjeta de crédito, su banco asociado a dicha tarjeta pudiera imponer cargos/impuestos. <mark>CARIBEAPUESTA</mark> no recibe dichos cargos o beneficios en ninguna forma y, en consecuencia, usted será responsable por cualquier costo adicional.
                </p>
                <p>
                    Los bancos asociados a su tarjeta de crédito son responsables por como una transacción es procesada, lo cual puede resultar en que algunas transacciones sean procesadas como avance en efectivo.
                </p>
                <p>
                    Su banco puede cargar hasta un % de impuesto por conversión monetaria, ajustes bancarios, impuestos o por cualquier transacción hecha con un comerciante internacional usando su tarjeta de débito, credito, depositos o transferencia.
                </p>
            </Collapsible>
            <Collapsible title={"15 - Bonus/Bono. "}>
                <h3>
                    Existen dos tipos de bonos, los de saldo y los de bono match play.
                </h3>
                <ul>
                    <li>
                        <p>
                            - Saldo: usted podría recibir bonificaciones en saldo las cuales se reflejan como en saldo en su cuenta <mark>CARIBEAPUESTA</mark>, puede disponer de ese saldo para realizar apuestas o ser retirado si lo desea.
                        </p>
                    </li>
                    <li>
                        <p>
                            - Match Play: es un bono el cual usted podrá utilizar para realizar sus apuestas en deportes, tildando la opción {'"Bonos"'} en el módulo de apuesta. En el caso de que gane una apuesta con Match Play sólo la ganancia de la apuesta se le colocará como dinero y el monto apostado en Match Play no será devuelto.
                        </p>
                    </li>
                    <li>
                        <p>
                            - El bono Match play solo puede ser jugado en Deportes Pre-Match.
                        </p>
                    </li>
                </ul>
                <h3>
                    ¿Qué es un rollover?
                </h3>
                <p>
                    Rollover es el total que usted deberá apostar para tener la disponibilidad de retirar su balance y cualquier ganancia. Ya sea que sus apuestas resulten ganadoras o perdedoras,
                    cuenta para el cumplimiento del rollover. Usted puede revisar los requerimientos del rollover de cada bono a través de la página de promociones. (Pagina de promociones)
                </p>
                <p>
                    - Ciertas promociones podrían obligarle a cumplir el rollover en un solo producto. Ejemplo solo las jugadas realizadas en Deportes Pre-Match contaran para las condiciones de rollover.
                </p>
            </Collapsible>
            <Collapsible title={"16 - Deportes. "}>
                <h3>
                    ¿Por qué mi teaser fue tomado como perdedor?
                </h3>
                <p>
                    Si cada una de las apuestas ganó excepto por una que fue un empate y su teaser fue colocado como perdedor, es porque usted jugó un “Teaser de Novia”. A diferencia de los teaser regulares, los teasers de novia no se reducen. Si una de las apuestas resulta en empate, todo el teaser es perdedor.
                </p>
                <h3>
                    ¿Qué pasa si una jugada de mi parlay/teaser es calificado como “Sin Acción”?
                </h3>
                <p>
                    Empates o apuestas sin acción reducen el número de equipos en tu parlay o teaser (exceptuando los “Teasers de novia”, los cuales nunca se reducen). Por ejemplo, un parlay de 4 jugadas de las cuales se dieron 2 empates, se reduce a un parlay de 2 jugadas. Un teaser de 3 jugadas con 1 empate, se reduce a un teaser de 2 jugadas. En todos los casos, el pago es recalculado en base a la reducción de jugadas del parlay/teaser. Sin embargo, si una jugada de un teaser de 2 equipos es calificado como Empate o Sin Acción, o si su parlay/teaser reduce a 0 las jugadas, toda la apuesta será calificada como Sin Acción y el monto apostado será reembolsado.
                </p>
                <h3>
                    ¿Qué son juegos agregados?
                </h3>
                <p>
                    Son juegos que no están incluidos regularmente en la rotación de Las Vegas. Estos juegos generalmente involucran Escuelas/Universidades pequeñas o de poco renombre las cuales son más difíciles de recaudar información; Por consiguiente, estos son incluidos después que las otras líneas del mismo deporte. Los juegos agregados están limitados (lo que significa que están sujetos a un límite de apuesta máximo y no pueden ser incluidos en parlays y teasers).
                </p>
                <h3>
                    ¿Qué pasa si los logros cambian después de haber colocado mi apuesta?
                </h3>
                <p>
                    Los logros citados al momento que su apuesta es hecha y confirmada será el logro colocado en su apuesta, independientemente que cualquier logro cambie después de ese momento.
                </p>
                <h3>
                    ¿Puedo cancelar o cambiar mi apuesta?
                </h3>
                <p>
                    No, no se puede cancelar o modificar una apuesta una vez haya sido recibida y aceptada por <mark>CARIBEAPUESTA</mark>. Esta política es estrictamente severa. En consecuencia, usted es responsable por todas sus apuestas, asegúrese que verifico y confirmo con detalle cada una de las apuestas/jugadas antes de dar click en “Hacer Apuesta”.
                </p>
                <h3>
                    ¿Puedo apostar en ambos equipos del mismo juego/evento?
                </h3>
                <p>
                    No. Apostar en ambos lados de mismo juego/evento, permitiría a los apostadores escrupulosos alcanzar fraudulentamente el mínimo de actividad en apuestas para calificar a los bonos.
                </p>
                <h3>
                    Aposté en un juego y gané, pero no fue acreditado en mi cuenta. ¿Por qué?
                </h3>
                <p>
                    Ya verifico su estado de cuenta <mark>CARIBEAPUESTA</mark> luego de colocar su apuesta? Tiene usted un numero de referencia de esa apuesta? Si la apuesta no se visualiza en su estado de cuenta, pudo no haber sido aceptada por el servidor. Contacte al Servicio al Cliente a través de los teléfonos xxxx-xxxx-xxx-xx o vía e-mail xxxx-xxxx-xxx para más información.
                </p>
                <p>
                    Ya verifico su estado de cuenta <mark>CARIBEAPUESTA</mark> luego de colocar su apuesta? Tiene usted un numero de referencia de esa apuesta? Si la apuesta no se visualiza en su estado de cuenta, pudo no haber sido aceptada por el servidor. Contacte al Servicio al Cliente a través de <mark>(WhatsApp): +58 424-8236730</mark> para más información.
                </p>
                <p>
                    Para verificar si la apuesta fue aceptada, puede:
                </p>
                <p>
                    Hacer click en Reportes y luego click en Apuestas Calificadas ubicado en la parte superior de la pagina, en el area de apuestas deportivas.
                </p>
                <h3>
                    Mi golfista no empezó el torneo. ¿Por qué mi apuesta no ha sido calificada como “Sin Acción”?
                </h3>
                <p>
                    Salvo que el torneo completo sea cancelado, todas las apuestas tienen acción (aun si el competidor se retira por cualquier razón)
                </p>
                <h3>
                    El juego de futbol en el cual aposté terminó en empate. ¿Por qué mi apuesta fue calificada como perdedora en vez de empate?
                </h3>
                <p>
                    En futbol, las apuestas línea de dinero (moneyline) pueden tener 3 resultados: Puede escoger cualquiera de los equipos a ganar y el empate, si usted no escogió el empate y el juego terminó en un empate, perderá la apuesta.
                </p>
                <h3>
                    ¿Qué es línea de dinero o moneyline?
                </h3>
                <p>
                    Cuando realiza una apuesta línea de dinero (moneyline), usted apuesta al ganador del juego sin tomar la diferencia de puntos (point spread) en consideración. Aun así todavía hay favoritos/no favoritos y las apuestas son colocadas a ganar el juego o evento.
                </p>
                <p>
                    Un número negativo indica el favorito y los logros muestran cuánto dinero debe usted apostar para ganar 100. Un número positivo indica al NO favorito y los logros muestran cuanto usted ganará por cada 100 apostados. Entre más disparejo sea el enfrentamiento mayor será la diferencia de logros.
                </p>
                <p>
                    Veamos un ejemplo en NFL (Futbol Americano) donde Minnesota Vikings son favoritos en contra de los Denver Broncos. Los logros pudieran verse asi:
                </p>
                <p>
                    Broncos +180
                </p>
                <p>
                    Vikings -220
                </p>
                <p>
                    Si usted apuesta a los Minnesota Vikings tendrá que apostar 220 para ganar 100. Sin embargo, si usted apuesta a los Denver Broncos ganará 180 por cada 100 apostados. Si el resultado final del juego es empate, la apuesta será calificada como empate y el monto apostado será reembolsado.
                </p>
                <h3>
                    Reglas Beisbol Moneyline
                </h3>
                <p>
                    El juego debe cumplir 5 innings completos (o 4.5 innings si el equipo de casa está ganando) para que las apuestas de moneyline tengan acción. También, usted puede especificar si quiere que ambos pitchers, un solo pitcher o ningún pitcher deba empezar el juego.
                </p>
                <h3>
                    Reglas Futbol Americano Moneyline
                </h3>
                <p>
                    Los moneylines son ofrecidos únicamente cuando la diferencia de puntos (point spread) está entre 3 y 10. Si la diferencia de puntos es exactamente 3 o 10, los moneylines serán ofrecidos únicamente cuando la línea está estándar (-110).
                </p>
                <h3>
                    Reglas Basquetbol Moneyline
                </h3>
                <p>
                    Los moneylines son ofrecidos únicamente cuando la diferencia de puntos (point spread) está entre 3 y 10. Si la diferencia de puntos es exactamente 3 o 10, los moneylines serán ofrecidos únicamente cuando la línea está estándar (-110).
                </p>
                <h3>
                    Reglas Futbol Moneyline
                </h3>
                <p>
                    Las apuestas moneyline pueden tener 3 resultados: Puede escoger cualquiera de los equipos a ganar o el empate, si usted no escogió el empate y el juego termina en un empate, perderá la apuesta.
                </p>
                <h3>
                    ¿Qué es un parlay?
                </h3>
                <p>
                    Un parlay o apuesta combinada es una selección entre 2 y 8 jugadas. Ganar el parlay requiere que todas y cada una de las jugadas sea ganadora. Incluso perdiendo una jugada el parlay resulta perdedor. Por supuesto, entre más riesgo, mas ganancia, de esta forma cuando usted agrega más jugadas a su parlay mayor es la potencial ganancia. Supongamos que los New York Giants (-3) están jugando en contra de los Philadelphia Eagles. Al mismo tiempo, los New England Patriots (-8) están jugando contra los Miami Dolphins, usted cree que los Giants y los Patriots cubrirán su respectiva diferencia de puntos (point spread). Así que en vez de apostar 2 jugadas directas o por derecho, usted puede hacer un parlay, ganara si ambos equipos cubren su diferencia de puntos. Sin embargo, usted perderá uno de los equipos no lo hace.
                </p>
                <h3>
                    ¿Qué son props?
                </h3>
                <p>
                    Las proposiciones son apuestas simples las cuales no están directamente relacionadas con el resultado final de un juego o evento. Las proposiciones puede ser colocadas en eventos deportivos, política, entre otros tópicos (Ejemplo: ¿Cuántos goles de campo serán realizados? ¿Quién ganará las próximas elecciones?). Las proposiciones pueden ser incluidas en un parlay máximo de 2 selecciones. Tres o más selecciones serán parte de un Round Robin.
                </p>
            </Collapsible>
        </div>

    )
}