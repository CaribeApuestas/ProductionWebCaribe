"use client";

import { usePathname } from "next/navigation";
import { NavigationPage } from "@/app/_components/NavigationPage/NavigationPage";
import { liveBettingNavigationItems } from "@/app/helpers/navigationsPages";

export const Navigation = () => {
    const pathname = usePathname();
    return <NavigationPage actualPathname={pathname} navigationPageItems={liveBettingNavigationItems} />
}