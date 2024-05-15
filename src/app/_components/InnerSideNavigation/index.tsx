
'use client'
import styles from "./styles.module.css";
import { NavigationPageItemProps } from "@/app/_types/NavigationPageItemProps";
import { includePath } from "@/app/helpers/includePath";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function InnerSideNavigation({ navigationPageItems }: { navigationPageItems: NavigationPageItemProps[] }) {
    const actualPathname = usePathname();
    return (
        <ul className={styles.rulesNavigation}>
            {navigationPageItems.map((item: NavigationPageItemProps, index: number) => {
                return (
                    <li key={index + 'itemNavi'} className={`${includePath({ actualPathname, path: item.path }) ? styles.active : ''}`}>
                        <Link href={item.path}>{item.title}</Link>
                    </li>
                )
            })}
        </ul>
    )
}