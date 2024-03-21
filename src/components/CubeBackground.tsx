import React from 'react';
import { Canvas } from '@react-three/fiber';
import SpinningCube from './SpinningCube';

const CubeBackground = () => {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1 }}>
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <SpinningCube />
      </Canvas>
    </div>
  );
};

export default CubeBackground;
