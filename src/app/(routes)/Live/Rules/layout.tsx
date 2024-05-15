import Link from "next/link";
import styles from "./styles.module.css";
import InnerSideNavigation from "@/app/_components/InnerSideNavigation";
import { liveRulesNavigation } from "@/app/helpers/navigationsPages";

export default function LiveRulesLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <InnerSideNavigation navigationPageItems={liveRulesNavigation} />
                <section >
                    {children}
                </section>
            </div>
        </div>

    )
}