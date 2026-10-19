import { useState, useEffect, useCallback } from "react";

const STORAGE_KEY = "theme";
const THEME_COLORS = { dark: "#000000", light: "#fafafa" };

function getStoredTheme() {
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        return stored === "light" || stored === "dark" ? stored : null;
    } catch (e) {
        return null;
    }
}

function applyTheme(theme) {
    document.documentElement.dataset.theme = theme;
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) {
        meta.setAttribute("content", THEME_COLORS[theme]);
    }
}

// Returns the active theme and a toggle. Light is the default; an explicit
// choice from the toggle is remembered.
export default function useTheme() {
    const [theme, setTheme] = useState(
        () => document.documentElement.dataset.theme || getStoredTheme() || "light"
    );

    useEffect(() => {
        applyTheme(theme);
    }, [theme]);

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
