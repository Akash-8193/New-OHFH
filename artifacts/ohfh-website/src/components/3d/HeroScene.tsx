import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const ParticleField = () => {
  const ref = useRef<THREE.Points>(null);

  // Generate random particles
  const sphere = new Float32Array(3000);
  for (let i = 0; i < 3000; i++) {
    sphere[i] = (Math.random() - 0.5) * 10;
  }

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#8BED02"
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
        />
      </Points>
    </group>
  );
};

const HeroScene = () => {
  return (
    <div className="absolute inset-0 z-0 bg-ultra-violet overflow-hidden pointer-events-none">
      {/* Fallback gradient if WebGL fails */}
      <div className="absolute inset-0 bg-gradient-to-br from-ultra-violet via-ultra-violet to-persian-blue opacity-90"></div>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ParticleField />
      </Canvas>
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"></div>
    </div>
  );
};

export default HeroScene;
