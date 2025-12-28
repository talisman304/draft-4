"use client";

import { Canvas } from "@react-three/fiber";
import { Float, MeshTransmissionMaterial, OrbitControls } from "@react-three/drei";

function Blob() {
  return (
    <Float speed={1.4} rotationIntensity={0.7} floatIntensity={0.8}>
      <mesh>
        <icosahedronGeometry args={[1.15, 2]} />
        <MeshTransmissionMaterial
          transmission={1}
          thickness={0.8}
          roughness={0.15}
          ior={1.2}
        />
      </mesh>
    </Float>
  );
}

export default function Hero3DScene() {
  return (
    <Canvas camera={{ position: [0, 0, 3.4], fov: 45 }} dpr={[1, 1.5]}>
      <ambientLight intensity={1.2} />
      <directionalLight position={[3, 3, 3]} intensity={1.8} />
      <Blob />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.8} />
    </Canvas>
  );
}
