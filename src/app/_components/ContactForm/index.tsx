import styles from "./styles.module.css";

export default function ContactForm() {
    return (
        <>
            <form className={styles.container}>

                <div className={`${styles.name} ${styles.block}`}>
                    <div>
                        <label htmlFor="frm-first">Nombre</label>
                        <input id="frm-first" type="text" name="first" autoComplete="given-name" required />
                    </div>
                    <div>
                        <label htmlFor="frm-last">Apellido</label>
                        <input id="frm-last" type="text" name="last" autoComplete="family-name" required />
                    </div>
                </div>

                <div className={`${styles.email} ${styles.block}`}>
                    <label htmlFor="frm-email">Correo electrónico</label>
                    <input id="frm-email" type="email" name="email" autoComplete="email" required />
                </div>
                
                <div className={`${styles.message} ${styles.block}`}>
                    <label htmlFor="frm-message">Mensaje</label>
                    <textarea id="frm-message" rows={6} name="message"></textarea>
                </div>

                <div className={`${styles.button} ${styles.block}`}>
                    <button type="submit">Enviar</button>
                </div>
                
            </form>
        </>
    )
}