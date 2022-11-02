import { useEffect, useState } from "react";
import DesktopNav from "./DesktopNav";
import Menu from "./Menu";


export default function MenuHOC() {

    let [isDesktop, setIsDesktop] = useState(true);


    useEffect(() => {
        function determineMenu() {
            if (window.innerWidth < 768) {
                setIsDesktop(false);
            } else {
                setIsDesktop(true);
            }
        }
        window.addEventListener("resize", determineMenu);
        return () => window.removeEventListener("resize", determineMenu);
    }, [])


    return (
        isDesktop ?
            <DesktopNav /> :
            <Menu />
    )

}