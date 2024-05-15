import React from "react";
import styles from "./styles.module.css";
import ProductsSlider from "./ProductsSlider";

export default function NewProducts() {
    return (
        <section className={styles.container}>
            <article className={styles.headerNewProductsContainer} lang="es">
                <h2>NUEVOS</h2>
                <p>Realiza tu apuesta maestra y ganadora en Parley, Carreras, Caballos o Casinos. 
                    No te pierdas la oportunidad de vivir la emoción y la adrenalina al máximo.</p>
            </article>
            <section className={styles.SliderContainer}>
                <ProductsSlider />
            </section>
        </section>
    );
}
