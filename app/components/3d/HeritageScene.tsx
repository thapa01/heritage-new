"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  Float,
  OrbitControls,
  Sparkles,
} from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Architecture() {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!group.current) return;

    group.current.rotation.y =
      Math.sin(state.clock.elapsedTime * 0.15) * 0.08;

    group.current.position.y =
      Math.sin(state.clock.elapsedTime * 0.4) * 0.05;
  });

  return (
    <group ref={group} position={[1.3, -1.1, 0]}>

      {/* Main platform */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[4.8, 0.18, 3.2]} />
        <meshStandardMaterial
          color="#8e7652"
          roughness={0.3}
          metalness={0.25}
        />
      </mesh>

      {/* Back wall */}
      <mesh position={[0, 1.7, -1.35]}>
        <boxGeometry args={[4.5, 3.2, 0.18]} />
        <meshStandardMaterial
          color="#b59b73"
          roughness={0.65}
        />
      </mesh>

      {/* Left pillar */}
      <mesh position={[-1.85, 1.3, -0.5]}>
        <boxGeometry args={[0.35, 2.7, 0.45]} />
        <meshStandardMaterial
          color="#c4aa7d"
          roughness={0.55}
        />
      </mesh>

      {/* Right pillar */}
      <mesh position={[1.85, 1.3, -0.5]}>
        <boxGeometry args={[0.35, 2.7, 0.45]} />
        <meshStandardMaterial
          color="#c4aa7d"
          roughness={0.55}
        />
      </mesh>

      {/* Central entrance */}
      <mesh position={[0, 1.1, -1.2]}>
        <boxGeometry args={[1.35, 2.2, 0.25]} />
        <meshStandardMaterial
          color="#201b16"
          roughness={0.4}
        />
      </mesh>

      {/* Entrance glow */}
      <pointLight
        position={[0, 1.2, -0.5]}
        intensity={3}
        distance={4}
      />

      {/* Decorative side blocks */}
      <mesh position={[-1.25, 0.7, -1.1]}>
        <boxGeometry args={[0.65, 1.4, 0.2]} />
        <meshStandardMaterial
          color="#9f845b"
          roughness={0.45}
        />
      </mesh>

      <mesh position={[1.25, 0.7, -1.1]}>
        <boxGeometry args={[0.65, 1.4, 0.2]} />
        <meshStandardMaterial
          color="#9f845b"
          roughness={0.45}
        />
      </mesh>

    </group>
  );
}

function FloatingObject() {
  return (
    <Float
      speed={1}
      rotationIntensity={0.2}
      floatIntensity={0.5}
    >
      <mesh position={[3, 1.2, -1]}>
        <icosahedronGeometry args={[0.35, 1]} />
        <meshStandardMaterial
          color="#d6bd8d"
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
    </Float>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />

      <directionalLight
        position={[4, 7, 5]}
        intensity={2.5}
      />

      <pointLight
        position={[-4, 2, 4]}
        intensity={2}
        color="#d6bd8d"
      />

      <Architecture />

      <FloatingObject />

      {/* Atmospheric particles */}
      <Sparkles
        count={100}
        scale={[10, 6, 8]}
        size={1.4}
        speed={0.25}
      />

      <Environment preset="sunset" />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.25}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 3}
      />
    </>
  );
}

export default function HeritageScene() {
  return (
    <div className="absolute inset-0 h-full w-full">
      <Canvas
        camera={{
          position: [0, 1, 7],
          fov: 42,
        }}
        dpr={[1, 2]}
      >
        <Scene />
      </Canvas>
    </div>
  );
}