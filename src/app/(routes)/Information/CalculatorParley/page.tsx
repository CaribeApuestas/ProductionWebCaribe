import { Metadata } from "next";
import styles from "./styles.module.css";
import ParleyCalculator from "../components/ParleyCalculator";

export const metadata: Metadata = {
    title: "CaribeApuesta - Calculadora Parley",
    description: "CaribeApuesta es el sitio número uno de apuestas en Venezuela y uno de los mejores en Hipódromos y Apuestas Deportivas. Ya sea que busques deportes competitivos, probabilidades de apuestas, emocionantes juegos de Casino Online y Slots Machines, o las últimas noticias deportivas, todo está en un mismo lugar. ¡Regístrate gratis y comienza a ganar!",
    metadataBase: new URL("http://localhost:3000/"),
    openGraph: {
        title: "Calculadora Parley",
        description: "Calcula tus apuestas con nuestra calculadora de parley"
    }
};

export default function AboutUs() {
    return (
        <div className={styles.container}>
            <h2> Calculadora Parley </h2>
            <p>
                Bienvenido a la Calculadora Parley de CaribeApuesta. Esta herramienta te permite calcular de manera rápida y precisa tus posibles ganancias en apuestas combinadas. Simplemente ingresa los detalles de tus apuestas y deja que nuestra calculadora haga el resto. ¡Apuesta inteligentemente y maximiza tus ganancias con CaribeApuesta!
            </p>
            <ParleyCalculator />
        </div>
    )
}