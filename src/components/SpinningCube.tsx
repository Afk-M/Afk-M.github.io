import React, { useRef, useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

const SpinningCube = () => {
  const meshRef = useRef<Mesh>(null);
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  // update mouse position based on movement
  const handleMouseMove = (event: MouseEvent) => {
    setMousePosition({
      x: (event.clientX / window.innerWidth) * 2 - 1,
      y: -(event.clientY / window.innerHeight) * 2 + 1,
    });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useFrame(() => {
    if (meshRef.current) {
      // basic rotation speed
      let rotationSpeedX = 0.001;
      let rotationSpeedY = 0.001;

      // adjust rotation speed based on mouse position
      if (mousePosition) {
        rotationSpeedX += mousePosition.y * 0.01;
        rotationSpeedY += mousePosition.x * 0.01;
      }

      meshRef.current.rotation.x += rotationSpeedX;
      meshRef.current.rotation.y += rotationSpeedY;
    }
  });

  return (
    <mesh ref={meshRef}>
      <octahedronGeometry args={[1, 1]} />
      <meshStandardMaterial color="black" wireframe={true}/>
    </mesh>
  );
};

export default SpinningCube;
