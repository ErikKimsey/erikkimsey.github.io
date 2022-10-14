import { useEffect, useState } from "react";
import { useFBX } from "@react-three/drei";

import FBX_MODEL from "../../assets/models/ring_threejs_audio_controller.fbx";

import "./visualizer.scss"


export default function Visualizer() {

    let model = useFBX(FBX_MODEL);
    return (
        <div className="visualizer-container">

        </div>
    )
}
