import * as THREE from 'three';
import { useState, useRef, Suspense, useEffect } from 'react';
import { Canvas, useLoader, useFrame, extend, useThree } from '@react-three/fiber'
import { Bloom, DepthOfField, EffectComposer, Noise, Vignette } from '@react-three/postprocessing'
import { Environment, OrbitControls } from '@react-three/drei';
import { GLTFLoader } from '../../node_modules/three/examples/jsm/loaders/GLTFLoader';
import { FBXLoader } from '../../node_modules/three/examples/jsm/loaders/FBXLoader';

import './threebkgrd.css';

extend({ OrbitControls })

const Controls = () => {
    const { camera, gl } = useThree()
    const ref = useRef()
    useFrame(() => ref.current.update())
    return <orbitControls ref={ref} target={[0, 0, 0]} enableDamping args={[camera, gl.domElement]} />
}

const Ring = (props) => {
    const { nodes } = useLoader(GLTFLoader, "./ring33.gltf");
    let quad = nodes.ring_cut_quad.geometry;
    let ring = nodes.ring_cylinder.geometry;


    // const { nodes } = useLoader(GLTFLoader, "./ring.gltf");
    let [rotY, setRotY] = useState(0);
    let ref = useRef();
    // ObjGrid

    // useFrame((state, delta) => (ref.current.rotation.y += delta / 5))
    useFrame((state, delta) => (ref.current.rotation.x += delta))

    return (
        <>
            <group ref={ref} {...props} dispose={null} scale={[10, 40, 40]} position={[0, 0, 0]} rotation={[60, 0, 0]} >
                <mesh castShadow receiveShadow geometry={ring} material={nodes.ring_cylinder.material} />
                <mesh castShadow receiveShadow geometry={quad} material={nodes.ring_cut_quad.material} />
                {/* <mesh castShadow receiveShadow geometry={nodes.ObjGrid.geometry} material={nodes.ObjGrid.material} />
                <mesh castShadow receiveShadow geometry={nodes.outer.geometry} material={nodes.outer.material} />
                <mesh castShadow receiveShadow geometry={nodes.inner.geometry} material={nodes.inner.material} /> */}
            </group>

            {/* <primitive ref={ref} object={gltf.scene} scale={4} position={[0, 0, 1]} rotation={[0, 0, 0]} /> */}
        </>
    );
};

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

function DysonSphere(props) {
    const lakes = useLoader(FBXLoader, "./ring.fbx");
    console.log(lakes);

    const ref = useRef();

    useFrame((state, delta) => ref.current.rotation.x += delta / 6)
    useFrame((state, delta) => ref.current.rotation.y += delta / 10)
    return (
        <primitive object={lakes} ref={ref} scale={.5} position={[0, 0, 100]} rotation={[120, 0, 0]} />
    )
}

function Subwoofer() {
    const subwoofer = useLoader(FBXLoader, "./subwoofer.fbx");
    console.log(subwoofer.position);

    // let earth = nodes.landscape_earth.geometry;
    // console.log(materials.earth);
    // let water = nodes.landscape_water.geometry;

    const ref = useRef();
    useFrame((state, delta) => {
        return ref.current.rotation.x += delta / 2
    }
    )
    useFrame((state, delta) => {
        return ref.current.rotation.y += delta / 2
    })

    return (
        <primitive object={subwoofer} ref={ref} position={[0, 0, -40]} rotation={[0, 180, 0]} />
    )
}


export default function ThreeBackground() {


    // const { dysonNodes } = useLoader(GLTFLoader, "./dysonsphere.gltf");
    // const loader = new GLTFLoader();
    // const geom = loader("./dysonsphere.gltf");
    // loader.load("./dysonsphere", (res) => {
    //     console.log(res);
    // })
    // console.log(geom);

    let url = './ring__noise_w_sub.mp3';
    const [sound, setSound] = useState();

    useEffect(() => {
        if ('ring__noise_w_sub.mp3') {
            setSound('ring__noise_w_sub.mp3')
        }
    }, [])

    return (
        <div className="three-bkgrd-container">
            <Canvas camera={{ position: [0, 0, 0] }}>
                <EffectComposer>
                    <ambientLight intensity={0.01} />
                    <directionalLight color="white" position={[0, 20, 5]} intensity={2} rotation={[-90, 0, -90]} />
                    <fog attach="fog" args={['rgb(22,0,43)', 1, 100]} />
                    <DepthOfField focusDistance={0.1} // where to focus
                        focalLength={0.5} // focal length
                        bokehScale={5} />
                    {/* <Bloom luminanceThreshold={0.1} luminanceSmoothing={0.4} height={480} /> */}
                    <Suspense fallback={null}>
                        {/* {sound && <Sound url={url} />} */}
                        <DysonSphere />
                        {/* <Subwoofer /> */}
                        <Ring />
                        {/* <Environment files={"./galaxy.jpg"} background /> */}
                    </Suspense>
                    <OrbitControls />
                    {/* <Controls /> */}
                </EffectComposer>
            </Canvas>
        </div>
    )
}