'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Scene from './Scene';

export default function ThreeCanvas() {
  return (
    <div className="fixed inset-0 -z-10 bg-white dark:bg-slate-950 transition-colors duration-500">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 35 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} color="#B0905F" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} />
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}
