import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import useTheme from "./useTheme";

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();
    const nextTheme = theme === "dark" ? "light" : "dark";

    return (
        <motion.button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${nextTheme} mode`}
            title={`Switch to ${nextTheme} mode`}
            className="fixed top-4 right-4 z-[1100] w-11 h-11 flex items-center justify-center rounded-full border border-grayzDark text-yellowz hover:text-peach transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >
            <motion.span
                key={theme}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="flex"
            >
                <FontAwesomeIcon icon={theme === "dark" ? faSun : faMoon} className="text-xl" />
            </motion.span>
        </motion.button>
    );
}
