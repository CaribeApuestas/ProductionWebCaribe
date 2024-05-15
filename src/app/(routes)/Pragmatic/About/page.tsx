import { Metadata } from "next";
import styles from "./styles.module.css";

export const metadata: Metadata = {
    title: "Juegos en linea | CaribeApuesta ",
    description: "En CaribeApuesta puedes descubrir el mundo de l0s juegos online, donde encontrarás reseñas detalladas, estrategias ganadoras y los últimos lanzamientos. ¡Juega responsablemente y vive la emoción del casino desde la comodidad de tu hogar!",
    metadataBase: new URL("http://localhost:3000/"),
    keywords: [
        'Juegos en linea',
        'Ganar con juegos en linea',
        'Que son los juegos en linea'
    ],
    openGraph: {
        title: "Juegos en linea",
        description: "En CaribeApuesta puedes descubrir el mundo de l0s juegos online, donde encontrarás reseñas detalladas, estrategias ganadoras y los últimos lanzamientos. ¡Juega responsablemente y vive la emoción del casino desde la comodidad de tu hogar!",
    }
};

export default function About() {
    return (
        <div className={styles.container}>
            <h2> Juegos en linea </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta earum repellendus suscipit maiores, reiciendis maxime nulla modi distinctio possimus recusandae voluptatum accusamus quia quae ex aperiam dolores excepturi odio officiis inventore,
                architecto, numquam vitae voluptas. Hic nostrum natus ullam cupiditate eligendi. Ad perferendis tempora quos? Mollitia facilis voluptas et cum?</p>
        </div>
    )
}