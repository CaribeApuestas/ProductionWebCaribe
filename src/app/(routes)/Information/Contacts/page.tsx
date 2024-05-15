import { Metadata } from "next";
import styles from "./styles.module.css";
import ContactForm from "@/app/_components/ContactForm";

export const metadata: Metadata = {
    title: "CaribeApuesta - Contactanos",
    description: "CaribeApuesta es el sitio número uno de apuestas en Venezuela y uno de los mejores en Hipódromos y Apuestas Deportivas. Ya sea que busques deportes competitivos, probabilidades de apuestas, emocionantes juegos de Casino Online y Slots Machines, o las últimas noticias deportivas, todo está en un mismo lugar. ¡Regístrate gratis y comienza a ganar!",
    metadataBase: new URL("http://localhost:3000/"),
    openGraph: {
        title: "Contactanos",
        description: "El sitio número uno de apuestas en Venezuela"
    }
};

export default function Contacts() {
    return (
        <div className={styles.container}>
            <h2> CONTACTANOS </h2>
            <p> Si quieres ponerte en contacto con las personas que están
                detrás de <mark>CARIBEAPUESTA</mark>, escribenos y trataremos de
                responderte lo antes posible. Agradecemos cualquier comentario que pueda tener, si tiene alguna pregunta o idea sobre
                nuestros servicios u otro contenido. Gracias por visitarnos como <mark>CARIBEAPUESTA</mark>.
            </p>
            <ContactForm />
        </div>
    )
}