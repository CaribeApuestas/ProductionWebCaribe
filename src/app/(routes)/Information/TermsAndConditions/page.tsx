import { Metadata } from "next";
import styles from "./styles.module.css";
import Collapsible from "@/app/_components/Collapsible";

export const metadata: Metadata = {
    title: "Términos y Condiciones | CaribeApuesta ",
    description: "Conoce nuestros términos y Condiciones en caribeapuesta.com",
    metadataBase: new URL("http://localhost:3000/"),
    openGraph: {
        title: "Términos y Condiciones ",
        description: "Conoce nuestros términos y Condiciones en caribeapuesta.com"
    }
};

export default function TermsAndConditions() {
    return (
        <div className={styles.container}>
            <h2> Términos y Condiciones </h2>
            <Collapsible title={" Información a tomar en cuenta. "}>
                <p>
                    POR FAVOR LEA LOS SIGUIENTES TÉRMINOS Y CONDICIONES CUIDADOSAMENTE YA QUE CONTIENEN INFORMACIÓN IMPORTANTE SOBRE LOS DERECHOS LEGALES, RECURSOS Y OBLIGACIONES.</p>
                <p>
                    Esta página (junto con los documentos referidos en ella) redactará los términos de uso en los cuales usted podrá hacer uso del sitio web y los servicios disponibles en él, ya sea como invitado o como usuario registrado.
                </p>
                {/*
                 <p>
                    <mark style={{background: 'red'}}>
                        El sitio web www.grupocordialito.com está registrado a nombre de Grupo Cordialito International Betting House B.V. de Limited Liability Company registrada en Curacao con el número de registro 136216. El Grupo Cordialito International Betting House B.V. está licenciado y regulado por el Gobierno de Curazao bajo licencia (licencia 8048 / JAZ2016-016).
                    </mark>
                </p>
                */}
            </Collapsible>
            <Collapsible title={"1. APLICACIÓN Y ACEPTACIÓN. "}>
                <ul>
                    <li>
                        <h3>1.1 General.</h3>
                        <p> A menos que se acuerde lo contrario por escrito, estas Condiciones se aplican a su acceso y uso del Sitio Web y de los Servicios.</p>
                    </li>
                    <li>
                        <h3>1.2 Aceptación de los Términos Incorporados.</h3>
                        <p> El usuario no puede acceder o utilizar el Sitio Web o los Servicios si no acepta los Términos. Si usted no está de acuerdo con estas condiciones de uso, por favor deje el sitio web inmediatamente. La aceptación de estos Términos implica la aceptación de los siguientes, los cuales pueden ser actualizados a nuestra discreción:</p>
                        <ol>
                            <li>La política de privacidad.</li>
                            <li>Reglas particulares aplicables a las actividades individuales.</li>
                        </ol>
                    </li>
                    <li>
                        <h3>1.3 Edad mínima y requerimientos de capacidad.</h3>
                        <p>
                            Usted debe ser no menor a dieciocho (18) años de edad para acceder al sitio web. A pesar de que usted tenga dieciocho años de edad o más, es posible que no acceda a la página web o los servicios y no podrá aceptar los términos si no es mayor de edad o tiene la capacidad para formalizar un contrato vinculante con arreglo a las leyes del país en el que reside o desde el cual se tiene la intención de acceder a la página web o servicios.
                        </p>
                    </li>
                    <li>
                        <h3>1.4 Aplicación de Términos.</h3>
                        <p>
                            Estos términos se aplican a:
                        </p>
                        <ol>
                            <li>Los contenidos, materiales, información, documentos, gráficos e imágenes proporcionados en o desde la Web ({'"Contenido"'}).</li>
                            <li>Cualquier contenido, materiales, información o documentos que usted puede cargar (incluyendo cualquier comentario que usted envíe o publique a través de mensajes o blogs del usuario) en el sitio web ({'"Publicaciones"'}).</li>
                            <li>El software que puede que tenga que descargar para jugar casino y / o juegos de póquer, o para participar en los torneos de poker en el Sitio Web ({'"Software"'}).</li>
                            <li>Cualquier casino, póquer u otros juegos que usted pueda jugar y cualquier torneo de póquer (incluyendo, sin limitación, los eventos clasificatorios) en el cual pueda participar a través del sitio web, o cualquier apuesta realizada a través del sitio web ({'"Juegos"'}).</li>
                            <li>Los presentes términos incorporan todas las demás reglas y convenciones que se aplican específicamente a los juegos individuales. Tales reglas y convenciones serán accesibles en el sitio web y puede ser actualizadas de vez en cuando; y</li>
                            <li>Si usted elige jugar cualquier juego, usted nos permite hacer los arreglos para que usted juegue dichos Juegos y / o para participar en este tipo de torneos con un operador distinto de nosotros, pero por lo demás, de conformidad con el Reglamento. En todo momento, el acceso a estos Juegos está sujeto a los reglamentos y tienes que recurrir a estos términos y condiciones y los recursos de este documento en caso de litigio o de otro problema con respecto a este tipo de juegos o juegos relacionados.</li>
                        </ol>
                    </li>
                    <li>
                        <h3>
                            1.5 Aceptación de los términos.
                        </h3>
                        <p>
                            Los términos se considerarán aceptados por usted cuando ocurra el primero de los siguientes: (i) el uso del sitio web o de los servicios; o (ii) hacer clic para aceptar o reconocer un acuerdo con estos términos cuando esta opción esté disponible para usted en el curso de acceder o registrarse en los servicios.
                        </p>
                    </li>
                    <li>
                        <h3> 1.6 Enmiendas y responsabilidad de revisar. </h3>
                        <p>
                            Podemos hacer cambios a los términos de vez en cuando, y haremos una nueva copia de los términos disponibles en este enlace. Usted entiende y acepta que es responsable del control de este enlace para determinar si las condiciones se han actualizado y, en cualquier caso, que si se accede a la página web o utiliza los servicios después de la fecha en que las condiciones han cambiado, usted acepta que se considerará que ha aceptado afirmativamente los términos actualizados. Cuando publiquemos cambios en los términos, la {'"Última actualización"'} en la parte superior de los términos será actualizado.
                        </p>
                    </li>

                </ul>
            </Collapsible>
            <Collapsible title={"2. REGISTRO Y CUENTA DE CREACIÓN. "}>
                <ul>
                    <li>
                        <h3> 2.1 Registro de cuenta.</h3>
                        <p>
                            Debe registrar una cuenta con nosotros ({'"Cuenta"'}) antes de que pueda colocar cualquier apuesta, descargar algún software, o jugar a cualquiera de los Juegos. Además debe ser mayor de 18 años de edad para poder registrar una cuenta.
                        </p>
                    </li>
                    <li>
                        <h3>2.2 Acceso individual a la cuenta.</h3>
                        <p>
                            Se le permite abrir sólo una (1) cuenta. Sólo se permite una cuenta por cada equipo compartido.
                        </p>
                    </li>
                    <li>
                        <h3>2.3 Cuentas abiertas en nuestra discreción.</h3>
                        <p>
                            Nos reservamos el derecho de suspender, desactivar o cancelar su cuenta en cualquier momento a nuestra discreción. A menos que sea requerido o dirigido por la Comisión de Juego de acuerdo con las disposiciones pertinentes del Reglamento, todas las decisiones relativas a la apertura, mantenimiento y cierre de cuentas recae en nosotros y cualquier decisión que tomamos con respecto a cualquier aspecto del software, la participación del usuario o de la jugar los Juegos o cualquier aspecto de una cuenta es definitiva.
                        </p>
                    </li>
                    <li>
                        <h3>
                            2.4 Información requerida.
                        </h3>
                        <p>
                            Si decide registrar una cuenta se le pedirá que proporcione su nombre completo, dirección, fecha de nacimiento, dirección de correo electrónico y número de teléfono. Si su identidad no se puede validar, se le puede pedir que presente la información o documentación adicional. También estarán obligados a responder una o más preguntas de seguridad, después de lo cual se le enviará un correo electrónico de confirmación. También puede ser requerido para actualizar la información o datos o para proporcionar elementos adicionales como parte de los esfuerzos continuos para prevenir actividades ilegales y fraudulentas, y / o para cumplir con nuestras políticas y protocolos contra el blanqueo de dinero.
                        </p>
                    </li>
                    <li>
                        <h3>
                            2.5 Información válida y verificable.
                        </h3><p>
                            Toda la información y los datos que usted nos proporciona, ya sea en el momento de registrarse o en cualquier momento posterior debe ser veraz, precisa y verificable en todos los aspectos. Al proporcionar dicha información y datos usted nos permite presentarlo a terceros proveedores de servicios de la edad y de identificación para verificar que usted es quien dice ser y que la información que da es verdadera y exacta. Si usted ha proporcionado información falsa o si no puede o no desea proporcionar la documentación para confirmar su información, ya que no podemos confirmar su identificación, su cuenta puede ser cancelada y cualquier o toda actividad dentro de la cuenta se considerará inválida, incluyendo, sin limitación, la anulación de las ganancias potenciales. Al registrar una cuenta que nos otorga el derecho de revelar su identidad y cualquier información que usted ha proporcionado en relación con su cuenta a cualquier persona que hace cualquier reclamación o alegación de que: (a) es menor de edad o debajo de la edad mínima requerida para hacer utilizar de cualquier parte del Sitio Web; o (b) cualquier anuncio u otro material publicado o cargado por usted al sitio web constituye una violación de sus derechos de propiedad intelectual, o de su derecho a la privacidad o fue publicado o cargado en incumplimiento de estos términos.
                        </p>
                    </li>
                    <li>
                        <h3>
                            2.6 Servicios de Verificación.
                        </h3>
                        <p>
                            Nos reservamos el derecho a utilizar los servicios de verificación de terceros para autenticar la información de la cuenta y la identidad, y para llevar a cabo todas las comprobaciones necesarias en materia de posibles fraudes o para asegurar el cumplimiento de nuestros protocolos y obligaciones contra el lavado de dinero, y usted reconoce y acepta expresamente que podemos confirmar la exactitud de la información que envíe contra identificación emitida por el gobierno. Sin limitar la generalidad de la forja, usted reconoce y acepta expresamente que podemos utilizar la información personal proporcionada por usted con el fin de llevar a cabo los controles de fraude y la información personal que usted proporcione puede ser revelada a una agencia de prevención de referencia de crédito o fraude, lo que puede llevar un registro de esa información.
                        </p>
                    </li>
                    <li>
                        <h3>
                            2.7 Credenciales de acceso.
                        </h3>
                        <p>
                            Se le asignará un ID de cuenta numérico. También puede ser capaz de acceder a su cuenta con su dirección de correo electrónico. Usted debe tratar su ID de cuenta de usuario y contraseña de forma confidencial y no revelar cualquiera de ellos a nadie más. Tenemos el derecho de desactivar cualquier cuenta de usuario o contraseña elegido por usted o asignado por nosotros, en cualquier momento, si en nuestra opinión usted ha incumplido cualquiera de las disposiciones de estos términos. Usted es responsable de asegurarse de que nadie más (en particular, pero sin limitación, aquellos que puedan compartir su conexión a Internet) es capaz de hacer uso de su ID de cuenta (o la dirección de correo electrónico) y la contraseña, y usted será responsable de todas las transacciones que tengan lugar en su cuenta ya sea que tuviese conocimiento o no que de tales transacciones se llevasen a cabo.
                        </p>
                    </li>
                    <li>
                        <h3>
                            2.8 Cuentas inactivas.
                        </h3>
                        <p>
                            Su cuenta será considerada {'"inactiva"'} si no se ha hecho un depósito, un retiro, o se realiza una apuesta por un período de dieciocho (18) meses. A los dieciocho meses de inactividad, le proporcionaremos una notificación vía correo electrónico a la dirección de correo electrónico registrada en la cuenta, aconsejando que el saldo de la cuenta será sujeto a un cargo por inactividad de {'"$100"'}. Si la cuenta permanece inactiva, la tasa de inactividad se aplicará cada mes hasta que se reanude la actividad o el saldo de la cuenta llegue a $0. Estos cargos por inactividad pueden ser reembolsados con la aprobación de la gestión.
                        </p>
                    </li>
                    <li>
                        <h3>
                            2.9 Críticas de cuenta.
                        </h3>
                        <p>
                            Usted acepta que podemos en cualquier momento investigar su cuenta para asegurar el cumplimiento con los presentes términos y garantizar que ninguna actividad inapropiada o ilegal está o ha tenido lugar, incluyendo, sin limitación de la actividad fraudulenta o actividad que se contempla en nuestra política contra el lavado de dinero y protocolos. En el caso de que se determine que su cuenta ha estado involucrada en cualquiera de los anteriores, tendremos derecho a usar el dinero en el haber de su cuenta para cubrir los costos, gastos o pasivos incurridos en la realización de dicha investigación. Le devolveremos a su cuenta cualquier cargo si la investigación se concluyó posteriormente a su favor.
                        </p>
                    </li>
                </ul>
            </Collapsible>
            <Collapsible title={"3. USO DEL SITIO WEB Y LOS SERVICIOS. "}>
                <ul>
                    <li>
                        <h3>
                            3.1 Servicios que se ofrecen en la discreción del operador.
                        </h3>
                        <p>
                            El acceso al sitio web se permite de forma temporal, y nos reservamos el derecho de retirar o modificar los servicios que prestamos sin previo aviso. El sitio web se actualiza regularmente, y puede cambiar en cualquier momento. Usted reconoce y acepta que la forma y/o la naturaleza del sitio web o servicios específicos pueden cambiar de vez en cuando sin previo aviso y nosotros podemos dejar de prestar los servicios para usted o para los usuarios en general, en nuestra sola discreción, sin previo aviso. Si surge la necesidad, podemos suspender el acceso al sitio web, o cerrarla indefinidamente. Cualquiera de los materiales en el sitio web pueden no estar actualizados en un momento dado, y no estamos bajo ninguna obligación de actualizar dicho material. No seremos responsables si por cualquier motivo el sitio web no está disponible en cualquier momento. Podemos cancelar su cuenta, eliminar cualquier contenido o información que usted ha publicado en el sitio web, y/o prohibir el uso o acceso al sitio web o los servicios (o cualquier parte, aspecto o característica del servicio) por cualquier razón, en cualquier momento a nuestra discreción. Sin limitar la generalidad de lo anterior, tendremos el derecho de rechazar cualquier apuesta o retirar cualquier juego en nuestra discreción absoluta. No seremos responsables por cualquier pérdida derivada de la cancelación de cualquier juego o apuesta, incluyendo cualquier pérdida de realización o percibido, por cualquier razón, y/o la oportunidad de participar en nuestra casa de apuestas.
                        </p>
                    </li>
                    <li>
                        <h3>
                            3.2 Su acceso.
                        </h3>
                        <p>
                            Usted sólo podrá utilizar los servicios si reside en una jurisdicción que le permita hacer apuestas sobre el resultado de los eventos deportivos, para descargar y para jugar al casino y otros juegos. Sujeto a estos términos, usted es responsable de hacer todos los arreglos técnicos o de otra índole necesaria para que usted tenga acceso a la Página Web.
                        </p>
                    </li>
                    <li>
                        <h3>
                            3.3 Servicios para uso personal.
                        </h3>
                        <p>
                            Usted no puede reproducir, duplicar, copiar, vender, comercializar o revender los servicios para ningún fin.
                        </p>
                    </li>
                    <li>
                        <h3>
                            3.4 Las interrupciones de acceso.
                        </h3>
                        <p>
                            Nosotros no somos responsables de ninguna manera por cualquier interrupción de Internet o desconexiones, y todo el riesgo y la responsabilidad recae sobre usted.
                        </p>
                    </li>
                </ul>
            </Collapsible>
            <Collapsible title={"4. INTEGRIDAD DEL JUEGO Y APUESTAS. "}>
                <ul>
                    <li>
                        <h3>
                            4.1. Actividad Criminal.
                        </h3>
                        <p>
                            Si tenemos motivos razonables para creer que alguna actividad criminal o cualquier otra actividad sospechosa están ocurriendo en una o más cuentas (incluyendo, sin limitaciones, algún intento de lavado de dinero o fraude), nosotros expresamente nos reservamos el derecho para cerrar dichas cuentas y/o reportarlas dichas actividades a la Comisión de Juego y/o tales otros órganos o servicios reglamentarios aplicables. Todos los saldos de cuenta (incluyendo los depósitos y las ganancias) se perderán.
                        </p>
                    </li>
                    <li>
                        <h3>
                            4.2. Actividad fraudulenta.
                        </h3>
                        <p>
                            Si, a nuestro criterio razonable, determinamos que un jugador se ha involucrado en una actividad fraudulenta, ilegal, deshonesta o incorrecta (incluyendo, sin limitación, el uso de una VPN, proxy o servicio similar que enmascara o manipula la identificación de su ubicación real o de haber proporcionado de alguna otra manera información falsa o engañosa, o haciendo apuestas, juegos de poker a través de terceros o en nombre de un tercero) nos reservamos el derecho de suspender o denegar el acceso del jugador a su cuenta inmediatamente. En tal caso, todos los saldos de cuenta (incluyendo los depósitos y las ganancias) se ejecutarán y nos reservamos el derecho de divulgar información (incluyendo la identidad del jugador) a las partes aplicables, incluyendo pero no limitado a; la Comisión de Juego, bancos, compañías de tarjetas de crédito y / o de cualquier persona o entidad que tiene el derecho legal a esta información, y / o tomar acción legal en contra de dicho jugador.
                        </p>
                    </li>
                    <li>
                        <h3>
                            4.3. No utilizar Programas de Asistencia al jugador.
                        </h3>
                        <p>
                            Utilizado por jugadores con la asistencia externa de programas de asistencia ({'"Programas EPA"'}) que están diseñados para ofrecer a los jugadores una ventaja injusta sobre sus oponentes estos programas están expresamente prohibidos. Definimos los programas EPA como los que incluyen bases de datos de software y no de software basados en perfiles (por ejemplo, sitios web y servicios de suscripción) y consideramos que el acceso o la capacidad de recopilar datos o información sobre otros jugadores por cualquier medio que no sea el accesible a través de su propia experiencia de primera mano (es decir, la observación del juego) es {'"injusta"'}. Nos reservamos el derecho a cerrar cuentas y anular cualquier y todas las ganancias en tales cuentas si establecemos, a nuestro criterio razonable, el uso de un programa de la EPA.
                        </p>
                    </li>
                    <li>
                        <h3>
                            4.4. {'"Bots"'} están Prohibidos.
                        </h3>
                        <p>
                            Todas las acciones en el sitio web deben ser ejecutadas por los jugadores a través de la interfaz de usuario suministrado. Tomaremos todas las medidas necesarias para garantizar que todo el software robot o programas diseñados para simular juego real sean detectados y se les impide el acceso a la Página Web. Todas las cuentas asociadas a esas actividades estarán sujetas a revisión y posible cancelación. Si, a nuestro criterio razonable, determinamos que una cuenta está empleando este tipo de software, las Cuentas se desactivaran y todos los saldos de las cuentas (incluyendo los depósitos y las ganancias) se perderán.
                        </p>
                    </li>
                    <li>
                        <h3>
                            4.5. Confabulación.
                        </h3>
                        <p>
                            Cualquier jugador que gane, o trate de obtener una ventaja con el intercambio de información sobre sus cartas, o intentar tomar cualquier ventaja injusta en connivencia con otros jugadores está prohibido de forma permanente de la Página Web. Si, a nuestro criterio razonable, determinamos que se está produciendo ese tipo de actividad, las cuentas pueden, en nuestra única y absoluta discreción, ser desactivada y todos los saldos de cuenta (incluyendo los depósitos y las ganancias) se eliminaran. Exámenes rigurosos de juego por medios manuales y automatizados será empleados para detectar este tipo de comportamiento y dichos monitorios estarán activos en todo momento. Vamos a investigar todas las quejas relacionadas con el jugador, además de examinar de manera proactiva y aleatoriamente las jugadas y Cuentas. Confabulación incluye, sin limitación: el intercambio de información sobre sus cartas, regalo de fichas, discutir una mano durante el juego (tanto en el chat de cliente o externamente), múltiples jugadores utilizando una sola cuenta, jugando suave y transferencia de fichas.
                        </p>
                    </li>
                    <li>
                        <h3>
                            4.6. Comunicaciones durante el juego.
                        </h3>
                        <p>
                            Nos reservamos el derecho de limitar la capacidad de los jugadores de jugar en la
                            misma mesa de póquer o torneo. Poker {'"chat"'} se puede realizar solamente en Inglés o
                            Español y jugadores utilizando cualquier lenguaje en el chat que no sea Inglés o Español
                            pueden tener sus privilegios de chat desactivados, ya sea temporal o permanentemente en nuestra
                            única y absoluta discreción. Los jugadores y los observadores no pueden hablar sobre una mano de póquer
                            hasta que se complete la mano. Hablar de cartas descartadas o posibilidades de mano, reales o no, no está permitido.
                            Tenga en cuenta que el lenguaje y el comportamiento inadecuado, odioso u ofensivo no será tolerado, si se trata de otros
                            jugadores o personal de la sala de poker.
                        </p>
                    </li>
                    <li>
                        <h3>
                            4.7. Intercambio entre jugadores está prohibido.
                        </h3>
                        <p>
                            De acuerdo con nuestra Política de Prevención de Lavado de Dinero y protocolos,
                            no permitimos ni toleramos las transferencias de dinero entre cuentas de los jugadores.
                            Los jugadores que se encuentren realizando transferencias de dinero
                            (incluyendo a modo de llamada de póquer {'"regalo de fichas"'})
                            pueden tener los intercambios devueltos y será en nuestra única y absoluta discreción.
                            En tal caso, a nuestro criterio, esas cuentas pueden ser cerradas y todos los saldos de cuenta
                            (incluyendo los depósitos y las ganancias) pueden ser confiscados.
                        </p>
                    </li>
                    <li>
                        <h3>
                            4.8. {'"Sindicatos de apuestas"'}.
                        </h3>
                        <p>
                            Un jugador o grupo de jugadores que trabajan juntos en cualquier forma (también conocido como un {'"sindicato"'}), para recibir ganancias eCash o bonos de actividad o parecidos, sólo se puede tener una cuenta en total, y las cuentas redundantes serán consolidadas en una sola Cuenta. Una cuota de administrativa se puede cobrar y los pagos se rechazaran a cada Cuenta redundante, a nuestra entera discreción. Todas las transacciones de apuestas en cuentas redundantes están sujetas a reversión a nuestra entera discreción. También nos reservamos el derecho de eliminar cualquier apuesta en un intento de defraudar a la casa de cualquier dinero de bonificación, si un jugador hace esto por su cuenta o en connivencia con otros jugadores u otras casas de apuestas.
                        </p>
                    </li>
                    <li>
                        <h3>
                            4.9. Integridad del Deporte.
                        </h3>
                        <p>
                            Nos comprometemos a asegurar la integridad del deporte y para participar en los esfuerzos para identificar y erradicar el
                            amaño de partidos. Como tal, a pesar de cualquier otro término del presente Acuerdo, o cualquiera de las disposiciones
                            de la política de privacidad aplicable, mediante la colocación de una apuesta en el sitio web, usted reconoce y acepta
                            expresamente que en todo momento se reserva el derecho, a nuestra sola discreción reportar irregular Apuestas actividad a
                            dichas federaciones deportivas, reguladores, agencias, comisiones o asociaciones (o sus respectivos agentes)
                            que consideremos ({'"organismos reguladores"'}) apropiados con el fin de permitir la identificación de la actividad
                            irregular y para apoyar las investigaciones correspondientes. {'"Apuestas con actividad irregular"'} significa actividad que,
                            en nuestra única evaluación, se desvía de los patrones de apuestas esperados e incluye,
                            sin limitación:
                        </p>
                        <ol>
                            <li> (i) un número inusual y significativo de apuestas procedentes de la misma región geográfica o por medio de las cuentas
                                vinculadas;</li>
                            <li>(ii) un apostador continua para realizar apuestas a cualquier precio en el rostro de una reducción constante de
                                las probabilidades ; y / o</li>
                            <li>
                                (iii) cualquier otro indicador o patrón evaluado por nosotros como indicativo del potencial de arreglo de partidos.
                                Usaremos medidas comerciales razonables para asegurar que toda la información proporcionada a los organismos
                                regulatorios de conformidad con esta disposición está sujeta a las disposiciones de confidencialidad contractuales
                                razonables, y que toda la información o documentación será destruida por tales organismos reguladores,
                                cuando ya no es relevante en relación con cualquier investigación en curso, la investigación o el proceso disciplinario.
                            </li>
                        </ol>
                    </li>
                    <li>
                        <h3>
                            4.10. Abuso de la vulnerabilidad del sistema.
                        </h3>
                        <p>
                            Si, a nuestro criterio razonable, determinamos que una Cuenta buscó o realmente se aprovechó de cualquier error
                            de hardware o software, mal funcionamiento, {'"error"'} o de otro tipo de vulnerabilidad, vamos a cerrar inmediatamente
                            dicha Cuenta y todos los saldos de cuenta, incluyendo tanto los depósitos y las ganancias, se eliminaran inmediatamente. Si, a nuestro criterio razonable, determinamos que se está produciendo ese tipo de actividad, la Cuenta (s) puede, en nuestra única y absoluta discreción, ser desactivada y todos los saldos de cuenta (incluyendo los depósitos y las ganancias) se perderían. En tal caso, nos reservamos expresamente el derecho de iniciar acciones legales civiles y reportar este tipo de actividades a las autoridades en apoyo de las investigaciones y acusaciones penales, según corresponda.
                        </p>
                    </li>
                    <li>
                        <h3>
                            4.11. Abuso de los programas de bonificación.
                        </h3>
                        <p>
                            Los programas de bonificación son solamente para el disfrute de los apostadores. Los jugadores profesionales o jugadores considerados, a nuestra entera discreción, que abusan del sistema de bonificación por cualquier medio pueden tener las bonificaciones revocadas y ser objeto de otras sanciones. El abuso sobre los bonificación puede definirse como (pero no limitado a) los clientes que retiren con el propósito de volver a depositar, o que recomienden otras cuentas nuevas que están utilizando para ellos mismos. Las sanciones pueden ser en forma de incremento de los requisitos del rollover o la pérdida de privilegios de bonificación por completo para la Cuenta infractora, así como cualquier Cuentas vinculadas. Nos reservamos el derecho de restringir la elegibilidad para ofertas y bonificaciones especiales cuando sea necesario. Esto incluye (pero no se limita a) la imposición de restricciones geográficas sobre las bonificaciones de los partidos debido al abuso de bonificación.
                        </p>
                    </li>
                    <li>
                        <h3>
                            4.12. Mal funcionamiento, sistema o error humano.
                        </h3>
                        <p>
                            Nos reservamos el derecho a anular todas las ganancias que se obtuvieron como resultado de un error de hardware / software, mal funcionamiento o error humano. En el caso de cualquier mal funcionamiento o error de todas las apuestas serán canceladas.
                        </p>
                    </li>
                </ul>
            </Collapsible>
            <Collapsible title={"5. LICENCIAS. "}>
                <ul>
                    <li>
                        <h3>
                            5.1. Por medio de la presente usted queda notificado sobre las siguientes no transferibles o revocables licencias ({'"Licencias"'})
                        </h3>
                        <ol>
                            <li>
                                (a) una licencia para ver, utilizar, imprimir y descargar el contenido de la Web sólo para su uso personal y privado;
                            </li>
                            <li>
                                (b) una licencia para publicar los avisos a la Web sólo para su uso personal y privado;
                            </li>
                            <li>
                                (c) una licencia para descargar, instalar y utilizar el Software y para jugar y participar en los Juegos
                                sólo para su uso personal y privado.
                            </li>
                        </ol>
                    </li>
                    <li>
                        <h3>
                            5.2. Usted reconoce y acepta que:
                        </h3>
                        <ol>
                            <li>
                                (a) ninguna de las licencias son exclusivos para usted y usted no podrá transferir sus derechos bajo cualquiera de ellos para
                                cualquier otra persona;
                            </li>
                            <li>
                                (b) podemos revocar o cancelar cualquiera o todas de las Licencias y cualquiera de sus derechos conforme alguna
                                de ellas en cualquier momento y por cualquier motivo;
                            </li>
                            <li>
                                (c) a la terminación de cualquiera de las Licencias debe cesar inmediatamente de participar y jugar los Juegos;
                                eliminar el Software; quitar cualquier Publicaciones; y destruir todo el Contenido que usted ha impreso o descargado.
                            </li>
                        </ol>
                    </li>
                    <li>
                        <h3>
                            5.3. Todos los derechos no expresamente concedidos en estas condiciones de uso están reservados.
                        </h3>
                    </li>
                </ul>
            </Collapsible>
            <Collapsible title={"6. SUS OBLIGACIONES. "}>
                <p>
                    Excepto lo expresamente establecido en estas Condiciones de uso o de lo contrario puede ser permitido por las leyes aplicables, se compromete la siguiente manera:

                </p>
                <ul>
                    <li>
                        <p>
                            6.1. no copiar o reproducir el contenido, software o juegos en cualquier forma o por cualquier razón, excepto con nuestra autorización previa por escrito o cuando dicha copia o reproducción sea incidental a uso normal del contenido, software o juegos y en consonancia con los términos de la correspondiente Licencia; de no
                        </p>
                    </li>
                    <li>
                        <p>
                            6.2. realizar modificaciones a, o modificación de, o crear trabajos derivados utilizando la totalidad o parte del contenido, software o juegos, ni para permitir que el contenido, software o juegos o cualquier parte de ellos para ser combinado con, o se incorpora en, cualquier otro tipo de contenido, software o juegos;
                        </p>
                    </li>
                    <li>
                        <p>
                            6.3. no copiar, reproducir, almacenar o incluir cualquiera de los contenidos, software o juegos en cualquier otro sitio web o sistema de recuperación electrónica, pública o privada o servicio que no sea con nuestro consentimiento previo por escrito;
                        </p>
                    </li>
                    <li>
                        <p>
                            6.4. en la medida en que haya impreso o descargado de cualquier Contenido de acuerdo con estos términos de uso usted está de acuerdo: no utilizar ninguna de las ilustraciones, fotografías, imágenes, secuencias de vídeo o audio o cualquier gráfico aparte de cualquier texto que lo acompañe; y para asegurar que nuestros avisos de propiedad intelectual y marcas de servicios y cualquier leyenda, pantallas y de las denominaciones relacionadas con ellos en todas las copias y reproducciones;
                        </p>
                    </li>
                    <li>
                        <p>
                            6.5. no alquilar, arrendar, sublicenciar, prestar, traducir, fusionar, adaptar, modificar o modificar el Software;
                        </p>
                    </li>
                    <li>
                        <p>
                            6.6. No desmontar, descompilar, realizar ingeniería inversa o crear trabajos derivados basados en, la totalidad o cualquier parte del Software ni intentar hacer nada semejante;
                        </p>
                    </li>
                    <li>
                        <p>
                            6.7. no proporcionar o poner a disposición del software (en su totalidad o en parte, y que incluyen pero no se limitan a los listados de programas, listas de objetos y de programa fuente, código objeto y el código fuente);
                        </p>
                    </li>
                    <li>
                        <p>
                            6.8. no utilizar el Software, participar o para jugar a los juegos a través de cualquier red de comunicaciones o mediante acceso remoto, con excepción de lo expresamente permitido en estos Términos;
                        </p>
                    </li>
                    <li>
                        <p>
                            6.9. no utilizar cualquiera de los contenidos, software o juegos con fines comerciales sin obtener una licencia para ello de nosotros o nuestros licenciatarios; y
                        </p>
                    </li>
                    <li>
                        <p>
                            6.10. notificarnos inmediatamente por <mark>(WhatsApp): +58 424-8236730</mark>, si sospecha que el contenido, software o cualquier Publicaciones infringen los derechos de propiedad intelectual de cualquier otra persona.
                        </p>
                    </li>
                </ul>
            </Collapsible>
            <Collapsible title={"7. DERECHOS DE PROPIEDAD INTELECTUAL. "}>
                <ul>
                    <li>
                        <p>
                            7.1. Usted reconoce que somos el propietario o licenciatario de todos los derechos de propiedad intelectual en el Sitio Web, el contenido,
                            el Software y los Juegos. Dichas obras están protegidas por las leyes y los tratados intelectuales de todo el mundo. Todos los derechos están
                            reservados. A los efectos de estas Condiciones, {'"Derechos de Propiedad Intelectual"'} significa los derechos de patente (incluyendo las solicitudes
                            de patentes y revelaciones), derechos de autor (incluyendo aplicaciones de derechos de autor), secretos comerciales, derechos morales y
                            cualesquiera otros derechos similares o activos intangibles reconocidos bajo cualquier derecho (s) o convenio internacional (s) en cualquier
                            país o jurisdicción en el mundo donde tales derechos se devengan.
                        </p>
                    </li>
                    <li>
                        <p>
                            7.2. Usted puede imprimir una copia, y puede descargar extractos, de cualquier página (s) de la página web para su referencia personal y puede atraer la atención de otras personas dentro de su organización al material publicado en el Sitio Web.
                        </p>
                    </li>
                    <li>
                        <p>
                            7.3. Usted reconoce que usted no tiene derecho a tener acceso al software en forma de código fuente o en la codificación abierta, o con comentarios.
                        </p>
                    </li>
                    <li>
                        <p>
                            7.4. La integridad del Software está protegido por medidas técnicas de protección ({'"TPM"'}) para que los derechos de propiedad intelectual, incluidos los derechos de autor en el software no sean objeto de apropiación indebida. Usted no debe intentar de alguna manera de eliminar o evitar cualquier TPM, ni aplicar o fabricar para la venta o alquiler, importación, distribución, venta o dejar para el alquiler, ofrecer o exponer para la venta o alquiler, publicidad para la venta o alquiler, o tener en su posesión con fines privados o comerciales, de cualquier manera el único propósito es facilitar la supresión no autorizada o la neutralización de tales TPM.
                        </p>
                    </li>
                    <li>
                        <p>
                            7.5. Nos reservamos el derecho a eliminar cualquier o todo el contenido, software y juegos del sitio web (en particular, pero sin limitación, si sospechamos que infringen los derechos de propiedad intelectual de otra persona).
                        </p>
                    </li>
                    <li>
                        <p>
                            7.6. Sujeto a estos Términos, usted adquirirá ningún derecho y / o el Sitio Web, los Contenidos, Servicios o el Software. Usted no puede (y no puede permitir o habilitar cualquier otra persona) copiar, modificar, crear trabajos derivados de, ingeniería inversa, descompilar o intentar extraer el código fuente del Software o cualquier parte del mismo, a menos que sea expresamente permitido o requerido por la ley, o a menos que por escrito usted haya recibido permiso por nosotros para hacerlo.
                        </p>
                    </li>
                    <li>
                        <p>
                            7.7. Usted acepta que no removerá, ocultara ni alterara los avisos de derechos de propiedad (incluyendo avisos de copyright y marcas) que pueden estamparse, contenida dentro, o aparezcan en el Sitio Web, el Software o los Servicios. A menos que por escrito acuerde lo contrario con nosotros, no hay nada en las Condiciones que le otorgue el derecho de uso de las marcas comerciales de <mark>CARIBEAPUESTA</mark>, marcas, marcas de servicio, logotipos, nombres de dominio, y / o cualquier otra características distintivas de marca. A menos que por escrito haya sido autorizado expresamente por nosotros, usted acepta expresamente que no utilizará ninguna marca de <mark>CARIBEAPUESTA</mark>, marca de servicio, nombre comercial, logotipo o característica de la marca distintiva de una manera que es probable o la intención de causar confusión acerca de la propietario o usuario autorizado de dichas marcas, nombres o logotipos.
                        </p>
                    </li>
                </ul>
            </Collapsible>
            <Collapsible title={"8. NUESTRA RESPONSABILIDAD. "}>
                <ul>
                    <li>
                        <p>
                            8.2. USTED ENTIENDE Y ACEPTA QUE NOSOTROS, NUESTROS SUBSIDIARIAS, AFILIADOS, PROVEEDORES Y LICENCIATARIOS
                            NO SERÁN RESPONSABLES DE:
                        </p>
                        <ol>
                            <li>
                                <p>
                                    (I) NINGÚN DAÑO DIRECTO, INDIRECTO, CONSECUENCIALES O DAÑOS EJEMPLARES EN QUE
                                    PUEDA INCURRIR POR USTED, INDEPENDIENTEMENTE DE LA CAUSA Y BAJO CUALQUIER TEORÍA DE RESPONSABILIDAD.
                                    ESTO INCLUYE, PERO NO SE LIMITA A, CUALQUIER PÉRDIDA DE BENEFICIOS (YA SEA DIRECTA O INDIRECTAMENTE),
                                    PÉRDIDA DE BUENA VOLUNTAD O REPUTACIÓN COMERCIAL, CUALQUIER PÉRDIDA DE DATOS, EL COSTO DE ADQUISICIÓN DE
                                    BIENES O SERVICIOS, U OTRAS PÉRDIDAS INTANGIBLES;
                                </p>
                                <ol>
                                    <li>
                                        <p>
                                            (A) LOS CAMBIOS QUE PODEMOS HACER PARA EL
                                            SITIO WEB O SERVICIOS, SEA PERMANENTE O TEMPORAL EN ABANDONO A LA PROVISIÓN DE LOS SERVICIOS
                                            (O CUALQUIER CARACTERÍSTICA DENTRO DE LOS SERVICIOS);
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            (B) LA ELIMINACIÓN, CORRUPCIÓN O FALTA DE CONSERVACIÓN DE
                                            CUALQUIER DATO CONTENIDO Y OTRAS COMUNICACIONES MANTENIDO O TRANSMITIDO POR O A TRAVÉS DE SU USO DE LOS SERVICIOS;
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            (C) SU FALTA DE PROVEERNOS CON LA INFORMACIÓN PRECISA DE SU CUENTA;
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            (D) LA IMPOSIBILIDAD DE MANTENER LOS DETALLES DE SU
                                            CONTRASEÑA O CUENTA SEGURA Y CONFIDENCIAL. LAS LIMITACIONES DE NUESTRA RESPONSABILIDAD ARRIBA MENCIONADAS SE APLICARÁN
                                            SEAMOS O NO SEAMOS INFORMADOS DE O TENER CONOCIMIENTO DE LA POSIBILIDAD DE DICHAS PÉRDIDAS DERIVADAS.
                                        </p>
                                    </li>
                                </ol>
                            </li>
                            <li>
                                <p>
                                    8.3. Sin limitar cualquier otra disposición del mismo, usted entiende que al utilizar los Servicios usted puede estar expuesto a Contenido que puede encontrar ofensivo u objetable y que, en este aspecto, que usted accede a la página web y el uso de los Servicios bajo su propio riesgo.
                                </p>
                            </li>
                        </ol>
                    </li>
                </ul>


            </Collapsible>
            <Collapsible title={"9. INFORMACIÓN ACERCA DE USTED Y SUS VISITAS A LA WEB. "}>
                <ul>
                    <li>
                        <p>
                            9.1. Procesamos la información sobre usted de acuerdo con nuestra política de privacidad
                            [COLOCAR LINK DE POLÍTICA DE PRIVACIDAD]. Al utilizar el Sitio Web, usted acepta tal procesamiento y
                            garantiza que todos los datos facilitados por usted son exactos y completos.
                        </p>
                    </li>
                    <li>
                        <p>
                            9.2. Al aceptar cualquier premio, premios o cuotas de torneos, en la medida máxima permitida por la ley,
                            usted concede a nosotros y a nuestros afiliados, proveedores y licenciantes y licenciatarios un mundial,
                            irrevocable derecho perpetuo y libre de regalías, .no exclusiva y la licencia para usar su nombre y su imagen digital
                            y / o electrónica o semejanza y cualquier información biográfica acerca de usted, y para reproducir, modificar,
                            adaptar, publicar, públicamente y digital mostrar, traducir, crear trabajos derivados y distribuir dichos materiales
                            o incorporar tales materiales en cualquier forma , medio o tecnología conocida ahora o desarrollada más tarde por todo
                            el mundo y el derecho de copiar, revelar, distribuir, incorporar y utilizar dicho material para cualquier fin comercial
                            o no comercial.
                        </p>
                    </li>
                    <li>
                        <p>
                            9.3. Usted libera y exenta de responsabilidad a nosotros y a nuestros socios, proveedores de servicios,
                            licenciantes, licenciatarios, afiliados, sucesores y asignados de cualquier y todos los reclamos, causas de
                            acción, recursos y / o daños derivados del uso de sus derechos de acuerdo con la cláusula anterior.
                        </p>
                    </li>
                </ul>
            </Collapsible>
            <Collapsible title={"10. CARGA DE ANUNCIOS. "}>
                <ul>
                    <li>
                        <p>
                            10.1. Cada vez que usted hace uso de una función que le permite hacer o cargar Publicaciones u otro material para la Web, o para hacer contacto con otros usuarios del Sitio Web, usted debe cumplir con los estándares de contenido establecidos y comunicados por nosotros de vez en cuando. Usted garantiza que cualquier contribución que haga se ajustara a esos estándares, y usted nos indemnizara en caso de violación de esa garantía.
                        </p>
                    </li>
                    <li>
                        <p>
                            10.2. Además de la información de identificación personal, que está cubierta por nuestra Declaración de Privacidad, cualquier Anuncio u otro material que usted suba a la Web se considerará no confidencial y no propietaria, y por la presente nos concede una licencia no exclusiva e irrevocable, en todo el mundo derecho y la licencia para usar, copiar, distribuir y divulgar o licencia de terceros cualquier tipo de material para cualquier propósito a perpetuidad. Usted manifiesta y garantiza a nosotros que usted es el propietario legal de o todos los contenidos y los materiales enviados a nosotros o subidas para uso en la Web como algún Anuncio y que usted tiene derecho a y / o ha obtenido todos los consentimientos necesarios, los permisos y las autoridades de nos conceda la licencia en virtud de esta cláusula.
                        </p>
                    </li>
                    <li>
                        <p>
                            10.3. No seremos responsables ante terceros, por el contenido o exactitud de cualquier Anuncio u otros materiales fabricados o cargados por usted o cualquier otro usuario del Sitio Web.
                        </p>
                    </li>
                    <li>
                        <p>
                            10.4. Tenemos el derecho de eliminar cualquier Anuncio u otro material que usted haga o cargue en el sitio web en nuestra exclusiva y absoluta discreción.
                        </p>
                    </li>
                    <li>
                        <p>
                            10.5. Se le prohíbe hacer o subir cualquier Anuncio u otros materiales en el Sitio Web y de
                            transmitir o distribuir hacía, desde o en el sitio web cualquier Anuncio o Contenido que:
                        </p>
                        <ol>
                            <li>
                                <p>
                                    (a) que sea amenazante, difamatorio, obsceno, indecente, sedicioso, ofensivo, pornográfico,
                                    abusivo, susceptible de incitar al odio racial, discriminatorio, amenazante, amenazador,
                                    escandaloso, blasfemo, abuso de confianza, en violación de la privacidad o que puede causar
                                    molestias o inconvenientes; o
                                </p>
                            </li>
                            <li>
                                <p>
                                    (b) para los cuales usted no ha obtenido todas las licencias y / o aprobaciones necesarias; o
                                </p>
                            </li>
                            <li>
                                <p>
                                    (c) que constituya o fomente una conducta que pueda ser considerada una ofensa criminal, dar lugar a responsabilidad civil, o sea contraria a la ley o infrinja los derechos de terceros, en cualquier parte del mundo, incluyendo, sin limitación, Intelectual Derechos de propiedad; o

                                </p>
                            </li>
                            <li>
                                <p>
                                    (d) que es técnicamente dañino (incluyendo, sin limitación, virus informáticos, bombas lógicas, troyanos, gusanos, componentes dañinos, datos dañados u otro software malicioso o datos perjudiciales); o

                                </p>
                            </li>
                            <li>
                                <p>
                                    (e) que contiene cualquier tipo de publicidad, promoción, solicitud de bienes, servicios o fondos o solicitud para que otros puedan llegar a ser miembros de cualquier empresa u organización;

                                </p>
                            </li>
                        </ol>
                    </li>
                    <li>
                        <p>
                            10.6. Usted no puede hacer o subir cualquier Anuncio u otros materiales en el sitio web de forma anónima.
                        </p>
                    </li>
                    <li>
                        <p>
                            10.7. No garantizamos que hemos revisado o supervisaremos contenido, materiales, información, documentos, anuncios, gráficos e imágenes (incluyendo sin limitación, cualquier mensaje, datos, información, texto o enlaces) a disposición o cargado en el Sitio Web por otras personas, y nos reservamos el derecho de eliminar cualquiera de ella en cualquier momento y por cualquier razón. Renunciamos expresamente a toda responsabilidad para el mismo.
                        </p>
                    </li>
                </ul>
            </Collapsible>
            <Collapsible title={"11. VIRUS, PIRATERÍA Y OTRAS INFRACCIONES. "}>
                <ul>
                    <li>
                        <p>
                            11.1. Usted no debe abusar de la página web introduciendo a sabiendas virus, troyanos, gusanos, bombas lógicas u otro material que sea malicioso o tecnológicamente dañino. Usted no debe intentar obtener acceso no autorizado a la Web, el servidor (es) en el que se almacena el Sitio Web o cualquier servidor, ordenador o base de datos conectada a la Web. Usted no debe atacar a la Web a través de un ataque de denegación de servicio o una denegación de servicio ataque distribuido. Por incumplimiento de esta disposición, sería cometer un delito penal. Informaremos dicho incumplimiento a las autoridades policiales pertinentes y vamos a cooperar con dichas autoridades revelándoles su identidad. En el caso de dicho incumplimiento, su derecho a utilizar el Sitio Web cesará inmediatamente y usted perderá inmediatamente todos los montos en su cuenta como daños liquidados incurridos como consecuencia de tal ataque.
                        </p>
                    </li>
                    <li>
                        <p>
                            11.2. No seremos responsables por cualquier pérdida o daño causado por un distribuido ataque de denegación de servicio, virus u otro material tecnológicamente dañino que pueda infectar su equipo informático, programas de ordenador, datos u otro material exclusivo debido a su uso del Sitio Web o la descarga de cualquier material publicado en él, o en cualquier sitio web vinculadas a la misma.
                        </p>
                    </li>
                    <li>
                        <p>
                            11.3. Usted no debe:
                        </p>
                        <ol>
                            <li>
                                <p>
                                    (a) utilizar el software robot, AAE o cualquier otro programa diseñado para simular el juego para que le dé o le permita una ventaja injusta sobre otros jugadores. Tomaremos todas las medidas necesarias para garantizar que cualquier software o programas sean detectados;

                                </p>
                            </li>
                            <li>
                                <p>
                                    (b) tratar de discutir cualquier aspecto de una mano mientras se juegue un juego;
                                </p>
                            </li>
                            <li>
                                <p>
                                    (c) intercambiar cualquier información sobre las cartas entregadas a usted durante un Juego; o (d) de ninguna manera participar en cualquier juego sindicado o de otra manera en connivencia con otros jugadores de los juegos en el Sitio Web.
                                </p>
                            </li>
                        </ol>
                    </li>
                    <li>
                        <p>
                            11.4. Llevamos a cabo un seguimiento continuo y emprendemos un examen riguroso de juego por medios manuales y automatizados con el fin de detectar este tipo de comportamiento y cualquier jugador que viole esta será prohibido de utilizar el Portal de por vida.
                        </p>
                    </li>
                </ul>
            </Collapsible>
            <Collapsible title={"12. ENLACE HACIA Y DESDE EL SITIO WEB. "}>
                <ul>
                    <li>
                        <p>
                            12.1 Usted puede tener un enlace a nuestra página de inicio con nuestro permiso, que se puede solicitar a
                            <mark>(WhatsApp): +58 424-8236730</mark>, siempre que lo haga de una manera que sea justa y legal y no dañe nuestra reputación
                            ni se aproveche de ella, pero no se debe establecer un vínculo de tal manera como para sugerir cualquier forma de
                            asociación, aprobación o respaldo por nuestra parte en la que no existe ninguno. Este permiso podrá ser revocado
                            por nosotros en cualquier momento.
                        </p>
                    </li>
                    <li>
                        <p>
                            12.2. No se debe establecer un enlace desde cualquier sitio web que no sea de su propiedad.
                        </p>
                    </li>
                    <li>
                        <p>
                            12.3. El Sitio Web no debe ser enmarcado en cualquier otro sitio web, ni puede usted crear un enlace a
                            cualquier parte de la página web que no sea la página de inicio. Nos reservamos el derecho de retirar el
                            permiso para establecer enlaces sin previo aviso. La integridad de la página web desde la que se está
                            vinculando debe cumplir en todos los aspectos con las normas que establecemos.
                        </p>
                    </li>
                    <li>
                        <p>
                            12.4. Si desea hacer cualquier uso del material del sitio web que no sea la establecida con los
                            procedimientos arriba mencionados, por favor dirija su petición a <mark>(WhatsApp): +58 424-8236730</mark>.
                        </p>
                    </li>
                    <li>
                        <p>
                            12.5. El Sitio Web podría incluir hipervínculos a contenido o recursos de otros sitios web. Nosotros no
                            tenemos ningún control sobre los sitios web o recursos que son proporcionados por compañías o personas.
                            Usted reconoce y acepta que no somos responsables de la disponibilidad de dichos sitios o recursos externos,
                            y nosotros no respaldamos ninguna publicidad, productos u otros materiales que estén disponibles en dichos sitios
                            web o recursos. Usted reconoce y acepta que no seremos responsables por cualquier pérdida o daño que pueda
                            incurrir como resultado de la disponibilidad de dichos sitios y recursos externos, o como resultado de la
                            confianza depositada por usted en la integridad, exactitud o existencia de cualquier publicidad, productos
                            u otros materiales en o disponibles desde, dichos sitios web o recursos. Le alentamos a que este enterado.
                        </p>
                    </li>
                </ul>
            </Collapsible>
            <Collapsible title={"13. JURISDICCION, LEY APLICABLE, y RESOLUCION DE DISPUTAS. "}>
                <ul>
                    <li>
                        <p>
                            13.1 Estos términos y condiciones se regirán por lo interpretado y analizado en conformidad y
                            de acuerdo con las leyes aplicables Curaçao .
                        </p>
                    </li>
                    <li>
                        <p>
                            13.2. Cualquier disputa que surja en relación a estos términos de uso pueden ser referidos a
                            la Comisión de Juego en concordancia con las disposiciones pertinentes del Reglamento.
                        </p>
                    </li>
                    <li>
                        <p>
                            13.3. Si usted tiene dudas o reclamos con respecto al uso del Sitio Web, incluyendo cualquier
                            duda con respecto al material que aparece en el Sitio Web, por favor en primera instancia contacte
                            a <mark>(WhatsApp): +58 424-8236730</mark>, donde un miembro de nuestro equipo de Atención al Cliente se va a
                            encargar de su solicitud.
                        </p>
                    </li>
                </ul>
            </Collapsible>
        </div>
    )
}