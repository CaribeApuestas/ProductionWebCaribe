"use client";

import { useState, useEffect } from 'react';
import styles from './styles.module.css';
import CaribeApuestaLogo from '../../../../../../public/img/Logoenazulclaro1.png';
import Image from "next/image";

const ParleyCalculator = () => {
    const [prices, setPrices] = useState(Array(10).fill(0));
    const [apostado, setApostado] = useState(0);
    const [ganancia, setGanancia] = useState('0');
    const [ayg, setAyg] = useState('0');

    useEffect(() => {
        calcularGanancia();
    }, [prices, apostado]);

    const calcularGanancia = () => {
        const rp = prices.map(price => {
            if (price < -99) {
                return ((-price + 100) / -price);
            } else if (price > 99) {
                return ((price + 100) / 100);
            } else {
                return 1;
            }
        });

        const ganancia1 = (rp.reduce((acc, val) => acc * val, 1) - 1) * apostado;
        const ayg1 = apostado + ganancia1;

        setGanancia(ganancia1.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2, useGrouping: true }));
        setAyg(ayg1.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2, useGrouping: true }));
    };

    const limpiarCampos = () => {
        setPrices(Array(10).fill(0));
        setApostado(0);
    };

    const onPriceChange = (index: number, value: string) => {
        const newPrices = [...prices];
        newPrices[index] = parseFloat(value);
        setPrices(newPrices);
    };

    const preventPlusSign = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === '+' || event.key === 'e') {
            event.preventDefault();
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.logoContainer}>
                <Image
                    src={CaribeApuestaLogo}
                    alt={"Caribe Apuesta Logo"}
                    width={100} height={100}
                />
            </div>
            <div className={styles.ammountToBetContainer}>
                <label>Monto a Apostar:</label>
                <input
                    className={styles.inputEntryCalculator}
                    type="number"
                    value={apostado}
                    onChange={(e) => setApostado(parseFloat(e.target.value))}
                />
            </div>
            <div className={styles.pricesContainer}>
                {prices.map((price, index) => (
                    <div key={index}>
                        <label>Price {index + 1}:</label>
                        <input
                            className={styles.inputEntryCalculator}
                            type="number"
                            value={price}
                            onChange={(e) => onPriceChange(index, e.target.value)}
                            onKeyDown={preventPlusSign}
                        />
                    </div>
                ))}
            </div>
            <div className={styles.resultsContainer}>
                <div>Ganancia Calculada: {ganancia}</div>
                <div>Total Calculado: {ayg}</div>
            </div>
        </div>
    );
};

export default ParleyCalculator;