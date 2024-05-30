import React, { useEffect, useState } from "react";
import { useProgress } from "@react-three/drei";
import "./loading.scss";


export default function Loading() {

    let [loading, setLoading] = useState([])



    useEffect(() => {
        let loadStr = "LoADiNg...";
        let loadArr = loadStr.split("");
        let loading = loadArr.map((e) => { return <div className="font-bold font-black sm:text-l md:text-l text-7xl text-blue-600">{e}</div> })
        setLoading(loading)
    }, [])


    const { progress } = useProgress()

    return (
        <div className="absolute box-border flex justify-center content-center self-center top-5 w-9/12 h-2/6 bg-pink-500  z-10">
            {
                loading
            }
        </div>
    )
}