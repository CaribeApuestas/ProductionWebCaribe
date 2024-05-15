"use client";
import styles from './styles.module.css';

export const PrevLogin = () => {
    return (
        <div className={styles.prevLoginContainer}>
            <h2 className={styles.prevLogin_title}>CARIBEAPUESTA.COM</h2>
            <div className={styles.prevLogin_linksContainer}>
                <a target="_blank" href="https://cliente.caribeapuesta.bet/apuestacaribe/Registrate" className={styles.prevLogin_links}>REGISTRATE</a>
                <a target="_blank" href="https://bets.caribeapuesta.bet/bets_sagcit/frame/" className={styles.prevLogin_links}>INGRESAR</a>
            </div>
        </div>
    )
}
