"use client";

import { Canvas } from "@react-three/fiber";
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";

function KioskModel() {
  return (
    <group rotation={[0, -0.35, 0]} position={[0, -0.45, 0]}>
      <mesh position={[0, 0.45, 0]} castShadow receiveShadow>
        <boxGeometry args={[2.8, 0.9, 1.55]} />
        <meshStandardMaterial color="#d8c6aa" roughness={0.42} metalness={0.05} />
      </mesh>
      <mesh position={[0, 1.2, -0.72]} castShadow>
        <boxGeometry args={[2.95, 0.16, 0.18]} />
        <meshStandardMaterial color="#26362e" roughness={0.35} />
      </mesh>
      <mesh position={[0, 1.45, -0.78]} castShadow>
        <boxGeometry args={[2.45, 0.48, 0.12]} />
        <meshStandardMaterial color="#141414" roughness={0.24} />
      </mesh>
      <mesh position={[0, 1.45, -0.855]}>
        <boxGeometry args={[1.7, 0.18, 0.02]} />
        <meshStandardMaterial color="#b89153" emissive="#5f4322" emissiveIntensity={0.35} />
      </mesh>
      <mesh position={[-1.05, 0.96, 0.22]} castShadow>
        <boxGeometry args={[0.34, 0.78, 0.92]} />
        <meshStandardMaterial color="#f0e7d7" roughness={0.55} />
      </mesh>
      <mesh position={[1.05, 0.96, 0.22]} castShadow>
        <boxGeometry args={[0.34, 0.78, 0.92]} />
        <meshStandardMaterial color="#f0e7d7" roughness={0.55} />
      </mesh>
      <mesh position={[0, 0.98, 0.38]} castShadow>
        <boxGeometry args={[1.3, 0.08, 0.68]} />
        <meshStandardMaterial color="#9a6a4f" roughness={0.3} />
      </mesh>
      <mesh position={[0, 0.96, 0.8]} castShadow>
        <cylinderGeometry args={[0.08, 0.08, 1.65, 32]} />
        <meshStandardMaterial color="#b89153" metalness={0.7} roughness={0.2} />
      </mesh>
      {[-0.72, 0, 0.72].map((x) => (
        <mesh key={x} position={[x, 1.74, -0.12]} castShadow>
          <sphereGeometry args={[0.08, 24, 24]} />
          <meshStandardMaterial color="#fff4d8" emissive="#fff0bd" emissiveIntensity={0.5} />
        </mesh>
      ))}
    </group>
  );
}

export function ShowroomViewer() {
  return (
    <div className="relative h-[440px] overflow-hidden bg-[#e8e0d3] md:h-[560px]">
      <Canvas camera={{ position: [3.6, 2.4, 4.2], fov: 38 }} shadows dpr={[1, 1.8]}>
        <color attach="background" args={["#e8e0d3"]} />
        <ambientLight intensity={0.7} />
        <directionalLight position={[4, 5, 3]} intensity={2.2} castShadow />
        <spotLight position={[-3, 4, 2]} angle={0.35} penumbra={0.6} intensity={1.4} />
        <KioskModel />
        <ContactShadows position={[0, -0.92, 0]} opacity={0.35} scale={7} blur={2.2} far={3} />
        <Environment preset="city" />
        <OrbitControls enablePan={false} minDistance={3.2} maxDistance={6.5} autoRotate autoRotateSpeed={0.7} />
      </Canvas>
      <div className="pointer-events-none absolute left-5 top-5 border border-black/10 bg-white/60 px-4 py-3 text-xs uppercase tracking-[0.18em] text-[var(--forest)] backdrop-blur">
        Visualização 3D
      </div>
    </div>
  );
}
