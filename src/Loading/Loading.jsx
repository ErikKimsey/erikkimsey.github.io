'use client';

import React, { useEffect, useState } from "react";
import { useProgress } from "@react-three/drei";
import "./loading.scss";


export default function Loading() {

    let [loading, setLoading] = useState([])



    useEffect(() => {
        let loadStr = "";
        let loadArr = loadStr.split("");
        let loading = loadArr.map((e) => { return <div className="load-string  sm:text-l md:text-l text-7xl">{e}</div> })
        setLoading(loading)
    }, [])


    const { progress } = useProgress()

    return (
        <div className="loading-container absolute flex justify-between content-center w-3/4 top-60 z-10">
            {
                // loading
            }
        </div>
    )
}