import * as THREE from 'three';
import { useRef, Suspense, useMemo, useState, useEffect } from 'react';
import { Canvas, useLoader, useFrame, extend, useThree } from '@react-three/fiber'
import Slider from '@mui/material/Slider';
import { OrbitControls, Environment } from '@react-three/drei';
import { EffectComposer, DepthOfField, Bloom } from '@react-three/postprocessing'
import { GLTFLoader } from '../../node_modules/three/examples/jsm/loaders/GLTFLoader';
import { useControls } from 'leva'


import './threebkgrd.css';

extend({ OrbitControls })

function The3DCube(props) {

    const [allPos, setAllPos] = useState([0, 0, 0]);
    console.log(props.allPos);

    useEffect(() => {
        setAllPos(props.allPos)
    }, [])

    useEffect(() => {
        setAllPos(props.allPos)
    }, [props.allPos])


    return (
        <>
            {allPos &&
                <mesh visible userData={{ hello: 'world' }} position={[allPos[0], allPos[1], allPos[2]]} rotation={[Math.PI / 2, 0, 0]}>
                    <sphereGeometry args={[3, 32, 16]} />
                    <meshLambertMaterial color="hotpink" />
                </mesh>
            }
        </>
    )
}

export default function ThreeBackground() {

    let [xPos, setXPos] = useState(0);
    let [yPos, setYPos] = useState(0);
    let [zPos, setZPos] = useState(0);

    useEffect(() => {
    }, [xPos, yPos, zPos])

    function handleXInput(e) {
        setXPos(e.target.value)
    }

    function handleYInput(e) {
        setYPos(e.target.value)
    }

    function handleZInput(e) {
        setZPos(e.target.value)
    }

    return (
        <div className="three-bkgrd-container">
            <div className='ctrls'>
                <section style={{ margin: "2px", border: "solid 1px #555", padding: "5px", borderRadius: "3px" }}>
                    <label for="volume">{"X: " + xPos}</label>
                    <input type="range" id="volume" name="xPos" min="-10" max="11" value={xPos} onChange={handleXInput} />
                </section>

                <section style={{ margin: "2px", border: "solid 1px #555", padding: "5px", borderRadius: "3px" }}>
                    <label for="volume">{"Y: " + yPos}</label>
                    <input type="range" id="volume" name="yPos" min="-10" max="11" value={yPos} onChange={handleYInput} />
                </section>
                <section style={{ margin: "2px", border: "solid 1px #555", padding: "5px", borderRadius: "3px" }}>
                    <label for="volume">{"Z: " + zPos}</label>
                    <input type="range" id="volume" name="zPos" min="-10" max="11" value={zPos} onChange={handleZInput} />
                </section>
            </div>

            <Suspense>
                <Canvas camera={{ position: [0, 0, (-12)] }} frameloop="always">
                    <EffectComposer>
                        <directionalLight color="rgb(255,255,255)" position={[10, 5, -10]} intensity={21} />
                        <fog attach="fog" args={['rgb(22,0,43)', 0, 100]} />
                        <Bloom luminanceThreshold={0.01} luminanceSmoothing={0.01} height={260} />
                        {/* <DepthOfField focusDistance={0.01} focalLength={0.01} bokehScale={10} /> */}
                        {/* <Vignette
                            darkness={0.6} // vignette darkness
                            eskil={false} // Eskil's vignette technique
                        /> */}
                        <Suspense>
                            <The3DCube allPos={[xPos, yPos, zPos]} />
                        </Suspense>
                    </EffectComposer>
                </Canvas>
            </Suspense >
        </div >
    )
}