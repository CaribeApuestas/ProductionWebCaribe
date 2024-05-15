interface includePathProps {
    actualPathname: string;
    path: string;
}

export const includePath = ({ actualPathname, path }: includePathProps): boolean => {
    const isIncluded = actualPathname.includes(path);
    return isIncluded;
} 