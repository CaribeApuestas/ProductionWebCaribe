"use client"

import { useState } from "react";
import styles from "./styles.module.css";
import Regulations from "./Regulations";

export default function RegulationByProdcuts() {
    const [option, setOption] = useState(1);
    return (
        <section className={styles.container}>
            <article className={styles.headerRegulationContainer} lang="es">
                <h2>REGLAMENTO POR PRODUCTOS</h2>
                <p><mark>CARIBEAPUESTA</mark> es el sitio número uno de apuestas en Venezuela.
                    Si buscas disfrutar de la emoción del hipódromo nacional e internacional, apuestas
                    deportivas, tragamonedas o si deseas divertirte en el casino en vivo,
                    nosotros lo tenemos todo en un solo lugar. <mark>¡Registrate y vive la emoción de ganar!</mark>
                </p>
            </article>
            <div className={styles.RegulationOptions}>
                <button className={option === 1 ? styles.buttonSelected : ""} onClick={() => setOption(1)}>Apuestas Deportivas</button>
                <button className={option === 2 ? styles.buttonSelected : ""} onClick={() => setOption(2)}>Casinos y Slots</button>
                <button className={option === 4 ? styles.buttonSelected : ""} onClick={() => setOption(4)}>Soporte al Cliente</button>
            </div>
            <div className={styles.regulationsContainer}>
                <Regulations option={option} />
            </div>
        </section>
    )
}

/*


*/