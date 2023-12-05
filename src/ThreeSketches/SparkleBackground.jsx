import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { Sparkles, ContactShadows, OrbitControls } from '@react-three/drei'
import { LayerMaterial, Depth } from 'lamina'

const SparkleBackground = () => {

  <Canvas shadows camera={{ position: [0, 0, 12], fov: 30 }}>
    <hemisphereLight intensity={0.5} color="white" groundColor="black" />
    <ContactShadows renderOrder={2} color="black" resolution={1024} frames={1} scale={10} blur={1.5} opacity={0.65} far={0.5} />
    <OrbitControls autoRotateSpeed={0.85} zoomSpeed={0.75} minPolarAngle={Math.PI / 2.5} maxPolarAngle={Math.PI / 2.55} />
  </Canvas>
}

export default SparkleBackground;