import { useEffect, useState } from "react";

export type ThemeType = "light" | "dark";


export function useTheme(): {
    theme: ThemeType;
    changeTheme: (option: ThemeType) => void;
} {
    const [theme, setTheme] = useState<ThemeType>("light");

    function changeTheme(option: ThemeType) {
        if (option === "dark") {
            (document.querySelector("html")?.classList)?.add?.("dark");
            setTheme("dark");
            localStorage.theme = 'dark'
        } else {
            (document.querySelector("html")?.classList)?.remove?.("dark");
            setTheme("light");
            localStorage.theme = 'light'
        }
    }

    useEffect(
        () => {
            if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                changeTheme("dark");
            }
        },
        [],
    );

    return { theme, changeTheme };
}
