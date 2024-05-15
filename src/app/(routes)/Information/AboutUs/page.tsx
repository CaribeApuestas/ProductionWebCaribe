import { Metadata } from "next";
import styles from "./styles.module.css";



export const metadata: Metadata = {
    title: "CaribeApuesta - Sobre Nosotros",
    description: "CaribeApuesta es el sitio número uno de apuestas en Venezuela y uno de los mejores en Hipódromos y Apuestas Deportivas. Ya sea que busques deportes competitivos, probabilidades de apuestas, emocionantes juegos de Casino Online y Slots Machines, o las últimas noticias deportivas, todo está en un mismo lugar. ¡Regístrate gratis y comienza a ganar!",
    metadataBase: new URL("http://localhost:3000/"),
    openGraph: {
        title: "Sobre Nosotros",
        description: "El sitio número uno de apuestas en Venezuela"
    }
};


export default function AboutUs() {
    return (
        <div className={styles.container}>
            <h2> SOBRE NOSOTROS </h2>
            <p>¡Hola a todos! Somos <mark>CARIBEAPUESTA</mark>, tu equipo de apuestas en línea. Permítenos contarte un poco sobre quiénes somos y qué ofrecemos</p>
            <p>Somos una empresa de confianza y seguridad que se dedica a brindar entretenimiento a nuestros clientes a través de un centro de apuestas deportivas en línea. En <mark>CARIBEAPUESTA</mark>, encontrarás una variedad de opciones emocionantes:</p>
            <ul>
                <li><p>Apuestas Deportivas: Desde el fútbol hasta el tenis, pasando por el baloncesto y las carreras de caballos (tanto nacionales como internacionales), tenemos una amplia gama de mercados para que disfrutes. ¿Quieres apostar en vivo mientras se desarrolla el juego? ¡Estamos aquí para ayudarte!</p></li>
                <li><p>Casino Online y Máquinas Tragamonedas: ¿Te gustan los juegos de casino? ¡Genial! También ofrecemos una selección de emocionantes juegos de casino en línea y máquinas tragamonedas. Desde las clásicas tragamonedas hasta los juegos de mesa más populares, hay algo para todos los gustos.</p></li>
            </ul>
            <p>
                Además, contamos con un sistema de pago en línea seguro y rápido para que puedas realizar tus transacciones sin preocupaciones.
            </p>
            <p>Así que, ¿listos para unirte a la diversión? ¡Regístrate en <mark>CaribeApuesta.com</mark> y comienza a ganar hoy mismo!</p>
        </div>
    )
}