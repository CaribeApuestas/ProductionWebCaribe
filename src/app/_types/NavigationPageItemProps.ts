export interface NavigationPageItemProps {
    path: string; // PathName for navigate
    title: string; // Label for links
    toCompare?: string; // For active styles link in next lvl
}

export interface NavigationPageProps {
    actualPathname: string;
    navigationPageItems: NavigationPageItemProps[];
}