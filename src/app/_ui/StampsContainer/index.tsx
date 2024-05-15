import Image from "next/image";
import styles from "./styles.module.css";

import SelloCalidad from '../../../../public/img/Sello_Calidad.png'
import SelloLibreDeVirus from '../../../../public/img/Sello_LibreDeVirus.png'
import SelloMayorDeEdad from '../../../../public/img/Sello_MayorDeEdad.png'
import Sello_Encriptado from '../../../../public/img/Sello_Encriptado.png'

export const StampsContainer = () => {
    return (
        <div className={styles.stamps_container}>
            <div className={styles.stamp}>
                <div className={styles.stampIcon_container}>
                    <Image
                        src={SelloCalidad}
                        alt={"Caribe Apuesta Logo"}
                        width={100}
                        height={100}
                    />
                </div>
                <h3>LIBRE DE VIRUS</h3>
            </div>
            <div className={styles.stamp}>
                <div className={styles.stampIcon_container}>
                    <Image
                        src={SelloLibreDeVirus}
                        alt={"Caribe Apuesta Logo"}
                        width={100}
                        height={100}
                    />
                </div>
                <h3>PROMESA DE CALIDAD</h3>
            </div>
            <div className={styles.stamp}>
                <div className={styles.stampIcon_container}>
                    <Image
                        src={SelloMayorDeEdad}
                        alt={"Caribe Apuesta Logo"}
                        width={100}
                        height={100}
                    />
                </div>
                <h3>SEGURIDAD PARA NIÑOS GARATIZADA</h3>
            </div>
            <div className={styles.stamp}>
                <div className={styles.stampIcon_container}>
                    <Image
                        src={Sello_Encriptado}
                        alt={"Caribe Apuesta Logo"}
                        width={100}
                        height={100}
                    />
                </div>
                <h3>TRANSMISIÓN DE DATOSENCRIPTADOS</h3>
            </div>

        </div>

    )
}