import * as THREE from 'three';
import { useState, useRef, useEffect, Suspense } from 'react';
import { Canvas, useLoader, useFrame, extend, useThree } from '@react-three/fiber'
import { Environment } from '@react-three/drei';
import { OrbitControls } from '@react-three/drei';
import { EffectComposer, DepthOfField, Vignette, Bloom } from '@react-three/postprocessing'
import { GLTFLoader } from '../../node_modules/three/examples/jsm/loaders/GLTFLoader';
import { useControls } from 'leva'
import Loading from "../Loading/Loading";

import './threebkgrd.css';

extend({ OrbitControls })

const Controls = () => {
    const { camera, gl } = useThree()
    const ref = useRef()
    useFrame(() => ref.current.update())
    return <orbitControls ref={ref} target={[0, 0, 0]} enableDamping args={[camera, gl.domElement]} />
}

function Sound({ url }) {
    const sound = useRef()
    const { camera } = useThree()
    const [listener] = useState(() => new THREE.AudioListener())
    const buffer = useLoader(THREE.AudioLoader, url)
    useEffect(() => {
        sound.current.setBuffer(buffer)
        sound.current.setRefDistance(0.1)
        sound.current.setLoop(true)
        sound.current.play()
        camera.add(listener)
        return () => camera.remove(listener)
    }, [])
    return <positionalAudio ref={sound} args={[listener]} />
}

function The3DObject() {
    const groupRef = useRef()
    const { nodes, materials } = useLoader(GLTFLoader, '/lowpoly.gltf')
    let geom = nodes.lowpoly.geometry;
    let mat = materials.lowpoly;

    // useControls('Ambient Light', {
    //     visible: {
    //         value: false,
    //         onChange: (v) => {
    //             ambientRef.current.visible = v
    //         },
    //     },
    //     color: {
    //         value: 'white',
    //         onChange: (v) => {
    //             ambientRef.current.color = new THREE.Color(v)
    //         },
    //     },
    // })


    return (
        <group ref={groupRef} dispose={null} position={[2, -3, -7]} rotation={[20, 70, -210]}>
            <mesh castShadow receiveShadow geometry={geom} material={mat} />
            {/* <mesh castShadow receiveShadow geometry={nodes.Curve007_1.geometry} material={materials['Material.001']} />
            <mesh castShadow receiveShadow geometry={nodes.Curve007_2.geometry} material={materials['Material.002']} /> */}
        </group>
    )

}

export default function ThreeBackground() {

    let lightRef = useRef();

    return (
        <div className="three-bkgrd-container">
            <Canvas camera={{ position: [0, 0, 0] }} frameloop="demand">
                <EffectComposer>
                    <Suspense>
                        <The3DObject />
                        {/* <Environment files="hdri_env.exr" /> */}
                        {/* <ambientLight color="pink" intensity={0.1} /> */}
                        <directionalLight color="rgb(90,60,110)" position={[-30, 10, -20]} intensity={60} />
                        {/* <fog attach="fog" args={['rgb(22,0,43)', 1, 100]} /> */}
                        <DepthOfField focusDistance={0.09} // where to focus
                            focalLength={0.5} // focal length 
                            bokehScale={10} />
                        {/* <Vignette
                            darkness={0.6} // vignette darkness
                            eskil={false} // Eskil's vignette technique
                        /> */}
                        <Bloom luminanceThreshold={0.01} luminanceSmoothing={0.2} height={260} />
                    </Suspense>
                </EffectComposer>
            </Canvas>
        </div >
    )
}