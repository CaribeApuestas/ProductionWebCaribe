"use client"
import Link from "next/link";
import styles from "./styles.module.css";
import Image from "next/image";
import { useLayoutEffect, useRef } from "react";

export default function FeaturedGame() {

    return (
        <article className={styles.featuredGame}>
            <HeaderFeaturedGame />
            <BodyFeaturedGame />
            <FooterFeaturedGame />
        </article>
    );
}

function HeaderFeaturedGame() {

    return (
        <header className={styles.headerGame}>
            <div className={styles.headerGameLogosContainer}>
                <Image
                    src={"/img/Bayern.png"}
                    alt={"Bayern Logo"}
                    width={80}
                    height={80}
                />
                <Image
                    src={"/img/championLeague.png"}
                    alt={"Bayern Logo"}
                    width={80}
                    height={80}
                />
                <Image
                    src={"/img/Fenerbah.png"}
                    alt={"Bayern Logo"}
                    width={80}
                    height={80}
                />
            </div>
            <div className={styles.headerGameInfo}>
                <h3>CUARTOS DE FINAL | PARTIDO 1 DE 2 | MIÉ, 06/04/2022</h3>
            </div>
        </header>
    )
}
function BodyFeaturedGame() {
    const refVariant1 = useRef<any>(null);
    const refVariant2 = useRef<any>(null);
    const refVariant3 = useRef<any>(null);
    useLayoutEffect(() => {
        refVariant1.current.style.setProperty("width", "17%", "important");
        refVariant2.current.style.setProperty("width", "22%", "important");
        refVariant3.current.style.setProperty("width", "61%", "important");
    }, []);
    return (
        <div className={styles.bodyGame}>
            <div className={styles.betsForGame}>
                <div className={styles.stateBet}>
                    <h4>VILLAREAL</h4>
                    <h5>-1.000</h5>
                </div>
                <div className={styles.stateBetDraw}>
                    <h4>EMPATE</h4>
                    <h5>+800</h5>
                </div>
                <div className={styles.stateBet}>
                    <h4>BAYERN</h4>
                    <h5>+2.200</h5>
                </div>
            </div>
            <div className={styles.chanceBar}>
                <div ref={refVariant1} className={styles.Barvariant1}>17%</div>
                <div ref={refVariant2} className={styles.Barvariant2}>22%</div>
                <div ref={refVariant3} className={styles.Barvariant3}>61%</div>
            </div>
            <div className={styles.gameStatsContainer}>
                <div className={styles.gameStats}>
                    <div className={`${styles.result} ${styles.team1Winner}`}>
                        5
                    </div>
                    <div className={styles.resultPointer}>
                        GOLES
                    </div>
                    <div className={`${styles.result} ${styles.team2Winner}`}>
                        8
                    </div>
                </div>
                <div className={styles.gameStats}>
                    <div className={`${styles.result} ${styles.team1Winner}`}>
                        58
                    </div>
                    <div className={styles.resultPointer}>
                        REGATES
                    </div>
                    <div className={`${styles.result} ${styles.team2Winner}`}>
                        15
                    </div>
                </div>
                <div className={styles.gameStats}>
                    <div className={`${styles.result} ${styles.team1Winner}`}>
                        49
                    </div>
                    <div className={styles.resultPointer}>
                        TIROS A PUERTA
                    </div>
                    <div className={`${styles.result} ${styles.team2Winner}`}>
                        52
                    </div>
                </div>
            </div>
        </div>
    )
}
function FooterFeaturedGame() {
    return (
        <footer className={styles.footerGame}>
            <div className={styles.linkscontainer}>
                <Link href="/SPORTS">RECORDAR</Link>
                <Link href="/SPORTS">JUGAR</Link>
                <Link href="/SPORTS">STREAMING</Link>
            </div>
            <p>LOS LOGROS PUEDEN CAMBIAR EN CUALQUIER MOMENTO, CONSULTA ANTE DE JUGAR.</p>
        </footer>
    )
}