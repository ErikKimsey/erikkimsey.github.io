import { useState, useEffect, useCallback } from "react";

const STORAGE_KEY = "theme";
const THEME_COLORS = { dark: "#000000", light: "#fafafa" };
const lightQuery = window.matchMedia("(prefers-color-scheme: light)");

function getStoredTheme() {
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        return stored === "light" || stored === "dark" ? stored : null;
    } catch (e) {
        return null;
    }
}

function getSystemTheme() {
    return lightQuery.matches ? "light" : "dark";
}

function applyTheme(theme) {
    document.documentElement.dataset.theme = theme;
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) {
        meta.setAttribute("content", THEME_COLORS[theme]);
    }
}

// Returns the active theme and a toggle. An explicit choice is remembered;
// until the user makes one, the site follows the OS color scheme.
export default function useTheme() {
    const [theme, setTheme] = useState(
        () => document.documentElement.dataset.theme || getStoredTheme() || getSystemTheme()
    );

    useEffect(() => {
        applyTheme(theme);
    }, [theme]);

    useEffect(() => {
        function onSystemChange() {
            if (getStoredTheme() === null) {
                setTheme(getSystemTheme());
            }
        }
        lightQuery.addEventListener("change", onSystemChange);
        return () => lightQuery.removeEventListener("change", onSystemChange);
    }, []);

    const toggleTheme = useCallback(() => {
        setTheme((current) => {
            const next = current === "dark" ? "light" : "dark";
            try {
                localStorage.setItem(STORAGE_KEY, next);
            } catch (e) {
                // Storage unavailable (e.g. private mode); the toggle still works for this visit.
            }
            return next;
        });
    }, []);

    return { theme, toggleTheme };
}
