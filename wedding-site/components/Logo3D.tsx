'use client';

import { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei';
import * as THREE from 'three';

interface ModelProps {
  url: string;
}

function Model({ url }: ModelProps) {
    const modelRef = useRef<THREE.Group>(null);
    const { scene } = useGLTF(url);
  
    useFrame((state) => {
      if (modelRef.current) {
        modelRef.current.rotation.y += 0.005;
        modelRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
      }
    });
  
    return <primitive ref={modelRef} object={scene} scale={1.2} />;
  }

function Loader() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#D4AF37" wireframe />
    </mesh>
  );
}

interface Logo3DProps {
  modelPath?: string;
}

export default function Logo3D({ modelPath = '/models/logo.glb' }: Logo3DProps) {
  return (
    <div style={{ width: '100%', height: '100%', position: 'absolute' }}>
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 6]} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#D4AF37" />
        <Suspense fallback={<Loader />}>
          <Model url={modelPath} />
          <Environment preset="sunset" />
        </Suspense>
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}