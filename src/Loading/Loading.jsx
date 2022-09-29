import React, { } from "react";
import "./loading.scss";
import { Html, useProgress } from "@react-three/drei";


export default function Loading() {

    const { progress } = useProgress()
    return (
        <div>LOading</div>
    )
}