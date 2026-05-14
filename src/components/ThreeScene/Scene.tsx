'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { sceneState } from '@/utils/store';

export default function Scene() {
  const meshRef = useRef<THREE.Mesh>(null);
  const pointsRef = useRef<THREE.Points>(null);
  const groupRef = useRef<THREE.Group>(null);

  // Create particles for the globe surface
  const particlesCount = 4000;
  const positions = useMemo(() => {
    const pos = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i++) {
      // Spherical distribution
      const phi = Math.acos(-1 + (2 * i) / particlesCount);
      const theta = Math.sqrt(particlesCount * Math.PI) * phi;
      
      const radius = 1.5;
      pos[i * 3] = radius * Math.cos(theta) * Math.sin(phi);
      pos[i * 3 + 1] = radius * Math.sin(theta) * Math.sin(phi);
      pos[i * 3 + 2] = radius * Math.cos(phi);
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (!meshRef.current || !pointsRef.current || !groupRef.current) return;

    const t = state.clock.getElapsedTime();

    // Smoothly interpolate to target values from sceneState
    groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, sceneState.positionX, 0.05);
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, sceneState.rotationY, 0.05);
    groupRef.current.scale.setScalar(THREE.MathUtils.lerp(groupRef.current.scale.x, sceneState.scale, 0.05));

    // Idle animations
    meshRef.current.rotation.y = t * 0.1;
    pointsRef.current.rotation.y = t * 0.15;
    
    // Slight tilt for perspective
    groupRef.current.rotation.x = 0.2;
  });

  return (
    <group ref={groupRef}>
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
        {/* Wireframe Globe */}
        <mesh ref={meshRef}>
          <sphereGeometry args={[1.45, 64, 64]} />
          <meshStandardMaterial 
            color="#B0905F" 
            wireframe
            transparent
            opacity={0.05} 
          />
        </mesh>

        {/* Floating Particles Globe */}
        <points ref={pointsRef}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={particlesCount}
              array={positions}
              itemSize={3}
              args={[positions, 3]}
            />
          </bufferGeometry>
          <pointsMaterial
            size={0.02}
            color="#B0905F"
            transparent
            opacity={0.3}
            sizeAttenuation
            blending={THREE.AdditiveBlending}
          />
        </points>

        {/* Distorted Inner Core */}
        <Sphere args={[1.2, 64, 64]}>
          <MeshDistortMaterial
            color="#B0905F"
            speed={2}
            distort={0.3}
            radius={1}
            transparent
            opacity={0.03}
          />
        </Sphere>
      </Float>
    </group>
  );
}
