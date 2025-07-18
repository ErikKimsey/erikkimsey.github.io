import { useRef, useState, useEffect } from "react";
import "./landing.scss";
import Banner from "../Banner/Banner";
import ThreeBackground from "../ThreeBackground/ThreeBackground";


let d = ["React", "React Native", "Unity3D", "C#", "Blender", "Next.js", "Node.js"];


function SplitData(str) {
    let arr = str.split(" ");
    return arr;
}

function Landing(props) {
    const sketchRef = useRef();
    const [dimens, setDimens] = useState({ w: 0, h: 0 });

    let [d, setD] = useState();
    let [sD, setSubD] = useState();
    let [core, setCore] = useState();

    useEffect(() => {
        if (sketchRef.current) {
            setDimens({ w: sketchRef.current.offsetWidth, h: sketchRef.current.offsetHeight });
        }

    }, [])

    return (
        <div
            className="landing-container"
            id="landing-container"
            ref={sketchRef}
        >
            <Banner timerTime={3000} />
        </div>
    );
}


export default Landing;
