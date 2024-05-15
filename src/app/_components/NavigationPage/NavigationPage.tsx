import Link from "next/link";
import { includePath } from "@/app/helpers/includePath";
import styles from "./styles.module.css";
import { NavigationPageItemProps, NavigationPageProps } from "@/app/_types/NavigationPageItemProps";

export const NavigationPage = ({ actualPathname, navigationPageItems }: NavigationPageProps) => {
    return (
        <nav className={styles.navigationContainer}>
            <ul className={styles.links}>
                {navigationPageItems.map((item: NavigationPageItemProps, index: number) => {
                    return (
                        <li className={`${includePath({ actualPathname, path: item.toCompare || item.path }) ? styles.active : ''}`} key={index + 'itemNavi'}>
                            <Link href={item.path}>{item.title}</Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}