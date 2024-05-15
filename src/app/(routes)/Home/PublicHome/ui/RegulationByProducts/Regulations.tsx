import styles from "./styles.module.css";

export default function Regulations({ option }: any) {
    return (
        <div className={styles.RegulationsOptionContainer}>
            {option === 1 && <Option1 />}
            {option === 2 && <Option2 />}
            {option === 3 && <Option3 />}
            {option === 4 && <Option4 />}

        </div>
    )
}

const Option1 = () => {
    return (<>
        <p className={styles.regulation}>En <mark>CARIBEAPUESTA</mark>, conseguirá una amplia gama de mercados con una extensa selección de deportes. Los aficionados al
            fútbol pueden disfrutar de probabilidades en los juegos que van desde la Liga MX de México a otras ligas más importantes
            del mundo tales como la Liga, la Premier League Inglesa y muchos más. También ofrecemos probabilidades en deportes tan
            variados como el baloncesto, tenis, hockey, carreras de caballos, boxeo, rugby, golf y mucho más. Además, nuestro servicio
            de apuestas en directo, asegura que puede traer la emoción añadida a sus juegos favoritos y realizar apuestas a medida que transcurre la acción.
        </p>
    </>)
}
const Option2 = () => {
    return (<>
        <p className={styles.regulation}>El sitio <mark>CARIBEAPUESTA</mark> le trae una fantástica selección de máquinas tragamonedas, juegos de cartas y mesa, y mucho más para disfrutar.
            Encontrará tragamonedas clásicas y las últimas de video basadas en una amplia gama de temas que ofrecen excitantes materiales adicionales y
            la oportunidad de ganar grandes cantidades. Además, hay numerosos juegos de bote progresivo que le dan la oportunidad de ganar millones.
            Por supuesto también puede hallar clásicos de casino para disfrutar.
        </p>
    </>)
}
const Option3 = () => {
    return (<>
        <p className={styles.regulation}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores vitae incidunt minima voluptatum iste officia
            repellat corrupti, exercitationem libero cupiditate modi, totam nemo illo quia earum magnam sequi esse porro nesciunt
            eligendi illum vel necessitatibus ex et? Repellat, maxime ducimus exercitationem et beatae eius neque blanditiis cupiditate
            voluptate. At, temporibus?</p>
        <p className={styles.regulation}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores vitae incidunt minima voluptatum iste officia
            repellat corrupti, exercitationem libero cupiditate modi, totam nemo illo quia earum magnam sequi esse porro nesciunt
            eligendi illum vel necessitatibus ex et? Repellat, maxime ducimus exercitationem et beatae eius neque blanditiis cupiditate
            voluptate. At, temporibus?</p>
        <p className={styles.regulation}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores vitae incidunt minima voluptatum iste officia
            repellat corrupti, exercitationem libero cupiditate modi, totam nemo illo quia earum magnam sequi esse porro nesciunt
            eligendi illum vel necessitatibus ex et? Repellat, maxime ducimus exercitationem et beatae eius neque blanditiis cupiditate
            voluptate. At, temporibus?</p>
    </>)
}
const Option4 = () => {
    return (<>
        <p className={styles.regulation}>
            <mark>CARIBEAPUESTA</mark> se dedica a hacerle llegar el más alto nivel posible de productos y servicios. Hemos facilitado las operaciones
            bancarias permitiéndole transferir fácilmente fondos entre nuestros diferentes productos y por supuesto muchos métodos de depósito y retiro
            que significa que usted no tendrá ningún problema financiando su cuenta o retirando sus ganancias. Ofrecemos soporte al cliente durante
            todo el día en línea, vía chat, teléfono y correo electrónico, así que si usted tiene alguna pregunta o preocupación puede obtener respuestas de
            inmediato.
        </p>
    </>)
}