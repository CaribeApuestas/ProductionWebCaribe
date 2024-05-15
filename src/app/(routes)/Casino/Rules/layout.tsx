import styles from "./styles.module.css";
import { casinoRulesNavigation } from "@/app/helpers/navigationsPages";
import InnerSideNavigation from "@/app/_components/InnerSideNavigation";

export default function CasinoRulesLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <InnerSideNavigation navigationPageItems={casinoRulesNavigation} />
                <section >
                    {children}
                </section>
            </div>
        </div>

    )
}