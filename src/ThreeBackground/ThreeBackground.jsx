import * as THREE from 'three';
import { useRef, Suspense, useMemo } from 'react';
import { Canvas, useLoader, useFrame, extend, useThree } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei';
import { EffectComposer, DepthOfField, Bloom } from '@react-three/postprocessing'
import { GLTFLoader } from '../../node_modules/three/examples/jsm/loaders/GLTFLoader';
import { useControls } from 'leva'


import './threebkgrd.css';

extend({ OrbitControls })

function The3DCube({ }) {
    const groupRef = useRef();
    const { nodes, materials } = useLoader(GLTFLoader, '/cube.gltf')

    let cube = nodes.cube.geometry;
    let cubeMat = materials.cube;

    const ctrls = useMemo(() => {
        return {
            color: { value: 'black' },
            x: { value: 0 },
            y: { value: 0 },
            z: { value: -3.0 }
        }
    }, []);

    let cubeCtrls = useControls("Cube", ctrls);

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += 0.01
            groupRef.current.rotation.z += 0.01
        }
    })

    return (
        <group dispose={null} ref={groupRef} position={[cubeCtrls.x, cubeCtrls.y, cubeCtrls.z]} rotation={[0, 33, 11]} >
            <mesh castShadow receiveShadow geometry={cube} material={cubeMat} />
        </group>
    )
}

function The3DSphere({ }) {
    const groupRef = useRef();
    const { nodes, materials } = useLoader(GLTFLoader, '/cube.gltf')

    let sphere = nodes.sphere.geometry;
    let sphereMat = materials.sphere;

    const ctrls = useMemo(() => {
        return {
            color: { value: 'black' },
            x: { value: 0 },
            y: { value: 0 },
            z: { value: -3.0 }
        }
    }, []);

    let cubeCtrls = useControls("Cube", ctrls);

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += 0.01
            groupRef.current.rotation.z += 0.01
        }
    })

    return (
        <group dispose={null} ref={groupRef} position={[cubeCtrls.x, cubeCtrls.y, cubeCtrls.z]} rotation={[0, 33, 11]} >
            <mesh geometry={sphere} material={sphereMat} />
        </group>
    )
}

export default function ThreeBackground() {


    return (
        <div className="three-bkgrd-container">
            <Suspense>
                <Canvas camera={{ position: [0, 0, 0] }} frameloop="always">
                    <EffectComposer>
                        {/* <Environment files="public/hubble.png" /> */}
                        {/* <ambientLight color="black" intensity={0.1} /> */}
                        <directionalLight color="rgb(90,90,90)" position={[-30, 20, -10]} intensity={10} />
                        {/* <fog attach="fog" args={['rgb(22,0,43)', 1, 100]} /> */}
                        <Bloom luminanceThreshold={0.01} luminanceSmoothing={0.01} height={260} />
                        {/* <DepthOfField focusDistance={0.01} focalLength={0.01} bokehScale={10} /> */}
                        {/* <Vignette
                            darkness={0.6} // vignette darkness
                            eskil={false} // Eskil's vignette technique
                        /> */}
                        <Suspense>
                            <The3DCube />
                            <The3DSphere />
                        </Suspense>
                    </EffectComposer>
                </Canvas>
            </Suspense>
        </div >
    )
}