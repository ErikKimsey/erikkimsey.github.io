import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Landing from "./Landing";
import Footer from "../Footer/Footer";
import Experience from "../Experience/Experience";
import EmailJSModal from "../EmailJS/EmailJSModal";

// Landing fades to DIMMED_OPACITY; Experience mounts just before that fade finishes,
// so its own entrance animations play once it's visible.
// For the contact modal, Landing fades fully out (HIDE_DURATION) before the modal opens.
const DIM_DURATION = 0.8;
const DIMMED_OPACITY = 0.1;
const HIDE_DURATION = 0.5;
const EXPERIENCE_DELAY = DIM_DURATION * 0.85;

export default function LandingScreen() {
    const [isExperienceOpen, setIsExperienceOpen] = useState(false);
    const [isLandingDimmed, setIsLandingDimmed] = useState(false);
    // Once Experience itself fades out (an item's modal is open), Landing goes fully
    // transparent and stays that way until Experience closes.
    const [isLandingHidden, setIsLandingHidden] = useState(false);
    const [isEmailOpen, setIsEmailOpen] = useState(false);
    const openTimer = useRef();

    function openExperience() {
        setIsLandingDimmed(true);
        clearTimeout(openTimer.current);
        openTimer.current = setTimeout(() => setIsExperienceOpen(true), EXPERIENCE_DELAY * 1000);
    }

    function closeExperience() {
        // Landing brightens again once the overlay has finished leaving (see onExitComplete).
        setIsExperienceOpen(false);
    }

    function openEmail() {
        setIsLandingHidden(true);
        clearTimeout(openTimer.current);
        openTimer.current = setTimeout(() => setIsEmailOpen(true), HIDE_DURATION * 1000);
    }

    function closeEmail() {
        // Landing fades back in once the modal has finished leaving (see EmailJSModal onExitComplete).
        setIsEmailOpen(false);
    }

    useEffect(() => () => clearTimeout(openTimer.current), []);

    useEffect(() => {
        // The fixed footer would otherwise sit above the contact modal.
        document.body.classList.toggle("hide-footer", isEmailOpen);
        return () => document.body.classList.remove("hide-footer");
    }, [isEmailOpen]);

    useEffect(() => {
        if (!isExperienceOpen) {
            return;
        }

        function onKeyDown(e) {
            if (e.key === "Escape") {
                closeExperience();
            }
        }

        // The overlay scrolls on its own, so keep the landing page from scrolling underneath it.
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", onKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener("keydown", onKeyDown);
        };
    }, [isExperienceOpen]);

    return (
        <>
            <motion.div
                initial={false}
                animate={{ opacity: isLandingHidden ? 0 : isLandingDimmed ? DIMMED_OPACITY : 1 }}
                transition={{ duration: isLandingHidden ? HIDE_DURATION : DIM_DURATION, ease: "easeInOut" }}
                aria-hidden={isLandingDimmed || isLandingHidden}
            >
                <Landing label={"Experience"} navTo={"experience"} onOpenExperience={openExperience} onOpenEmail={openEmail} />
                <div style={{ height: "100px" }}></div>
                <Footer />
            </motion.div>

            <AnimatePresence
                onExitComplete={() => {
                    setIsLandingHidden(false);
                    setIsLandingDimmed(false);
                }}
            >
                {isExperienceOpen && (
                    <motion.div
                        key="experience-overlay"
                        className="fixed inset-0 z-[1000] overflow-y-auto"
                        role="dialog"
                        aria-modal="true"
                        aria-label="Experience"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { duration: 0.4, ease: "easeInOut" } }}
                        exit={{ opacity: 0, transition: { duration: 0.4, ease: "easeInOut" } }}
                    >
                        <Experience onClose={closeExperience} onHidden={() => setIsLandingHidden(true)} />
                    </motion.div>
                )}
            </AnimatePresence>

            <EmailJSModal isOpen={isEmailOpen} onClose={closeEmail} onExitComplete={() => setIsLandingHidden(false)} />
        </>
    );
}
