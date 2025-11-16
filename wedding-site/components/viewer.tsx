'use client';
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, useGLTF } from '@react-three/drei';

function MedallionModel() {
  const { scene } = useGLTF('/models/logo.glb');
  return <primitive object={scene} scale={1.5} />;
}

export default function MedallionViewer() {
  return (
    <div style={{ width: '100vw', height: '100vh', background: '#f9f9f9' }}>
      <Canvas camera={{ position: [0, 0, 3], fov: 45 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <Suspense fallback={null}>
          <MedallionModel />
          <Environment preset="studio" />
        </Suspense>
        <OrbitControls enableZoom enablePan />
      </Canvas>
    </div>
  );
}
