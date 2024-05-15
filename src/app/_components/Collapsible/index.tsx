"use client"
import { useState } from "react";
import styles from "./styles.module.css";
import Image from "next/image";

import primaryArrowClose from '../../../../public/icon/primaryArrowClose.svg'
import secondaryArrowOpen from '../../../../public/icon/secondaryArrowOpen.svg'


export default function Collapsible({ children, title }: { children: React.ReactNode, title: string }) {
    const [isOpen, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(!isOpen);
    }
    return (
        <>
            <button type="button" className={`${styles.collapsible} ${isOpen ? styles.collapsibleActive : ""}`} onClick={handleClick}>
                <span>{title}</span>
                <span>
                    <Image className={styles.mediaIcon} src={isOpen ? secondaryArrowOpen : primaryArrowClose} alt="play icon" width={15} height={15} />
                </span>
            </button>
            <div className={`${styles.content} ${isOpen ? styles.collapsibleOpen : ""}`}>
                {children}
            </div>
        </>
    )
}