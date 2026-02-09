import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, Box, Cone } from '@react-three/drei';
import * as THREE from 'three';

// Check for reduced motion preference
const prefersReducedMotion = typeof window !== 'undefined' 
  ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
  : false;

// Floating Planet Component
const Planet = ({ position, scale, speed }: { position: [number, number, number]; scale: number; speed: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current && !prefersReducedMotion) {
      meshRef.current.rotation.y += speed * 0.001;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.2) * 0.3;
    }
  });

  return (
    <Float speed={prefersReducedMotion ? 0 : 0.5} rotationIntensity={0.2} floatIntensity={0.3}>
      <Sphere ref={meshRef} args={[scale, 32, 32]} position={position}>
        <meshStandardMaterial 
          color="#888888" 
          transparent 
          opacity={0.15}
          roughness={0.8}
        />
      </Sphere>
      {/* Ring around planet */}
      <mesh position={position} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[scale * 1.5, scale * 0.05, 16, 100]} />
        <meshStandardMaterial color="#666666" transparent opacity={0.1} />
      </mesh>
    </Float>
  );
};

// Floating Astronaut (simplified as geometric shape)
const Astronaut = ({ position }: { position: [number, number, number] }) => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current && !prefersReducedMotion) {
      groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
      groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.15) * 0.5;
    }
  });

  return (
    <Float speed={prefersReducedMotion ? 0 : 0.3} rotationIntensity={0.1} floatIntensity={0.2}>
      <group ref={groupRef} position={position}>
        {/* Helmet */}
        <Sphere args={[0.3, 16, 16]} position={[0, 0.4, 0]}>
          <meshStandardMaterial color="#aaaaaa" transparent opacity={0.2} />
        </Sphere>
        {/* Body */}
        <Box args={[0.4, 0.5, 0.25]} position={[0, -0.1, 0]}>
          <meshStandardMaterial color="#999999" transparent opacity={0.15} />
        </Box>
        {/* Backpack */}
        <Box args={[0.3, 0.4, 0.15]} position={[0, -0.05, -0.2]}>
          <meshStandardMaterial color="#777777" transparent opacity={0.12} />
        </Box>
      </group>
    </Float>
  );
};

// Rocket Component
const Rocket = ({ position, speed }: { position: [number, number, number]; speed: number }) => {
  const groupRef = useRef<THREE.Group>(null);
  const startY = position[1];
  
  useFrame((state) => {
    if (groupRef.current && !prefersReducedMotion) {
      // Slow upward drift with reset
      groupRef.current.position.y = startY + ((state.clock.elapsedTime * speed) % 20);
      groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      {/* Rocket body */}
      <Cone args={[0.15, 0.6, 8]} position={[0, 0.3, 0]}>
        <meshStandardMaterial color="#cccccc" transparent opacity={0.25} />
      </Cone>
      <Box args={[0.2, 0.4, 0.2]} position={[0, -0.1, 0]}>
        <meshStandardMaterial color="#aaaaaa" transparent opacity={0.2} />
      </Box>
      {/* Fins */}
      <Box args={[0.08, 0.2, 0.08]} position={[0.15, -0.25, 0]} rotation={[0, 0, 0.3]}>
        <meshStandardMaterial color="#888888" transparent opacity={0.15} />
      </Box>
      <Box args={[0.08, 0.2, 0.08]} position={[-0.15, -0.25, 0]} rotation={[0, 0, -0.3]}>
        <meshStandardMaterial color="#888888" transparent opacity={0.15} />
      </Box>
      {/* Engine glow */}
      <Sphere args={[0.1, 8, 8]} position={[0, -0.35, 0]}>
        <meshStandardMaterial 
          color="#ffffff" 
          transparent 
          opacity={0.3}
          emissive="#ffffff"
          emissiveIntensity={0.5}
        />
      </Sphere>
    </group>
  );
};

// Space Shuttle (rare parallax pass)
const SpaceShuttle = ({ position }: { position: [number, number, number] }) => {
  const groupRef = useRef<THREE.Group>(null);
  const startX = position[0];
  
  useFrame((state) => {
    if (groupRef.current && !prefersReducedMotion) {
      // Slow horizontal pass with long cycle
      const cycle = (state.clock.elapsedTime * 0.1) % 40;
      groupRef.current.position.x = startX + cycle - 20;
      groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.1) * 0.5;
    }
  });

  return (
    <group ref={groupRef} position={position} rotation={[0, 0, -0.1]}>
      {/* Main body */}
      <Box args={[0.8, 0.15, 0.15]}>
        <meshStandardMaterial color="#aaaaaa" transparent opacity={0.12} />
      </Box>
      {/* Nose */}
      <Cone args={[0.08, 0.2, 6]} position={[0.5, 0, 0]} rotation={[0, 0, -Math.PI / 2]}>
        <meshStandardMaterial color="#999999" transparent opacity={0.1} />
      </Cone>
      {/* Wings */}
      <Box args={[0.3, 0.02, 0.5]} position={[-0.1, 0, 0]}>
        <meshStandardMaterial color="#888888" transparent opacity={0.1} />
      </Box>
      {/* Tail */}
      <Box args={[0.15, 0.25, 0.02]} position={[-0.35, 0.1, 0]}>
        <meshStandardMaterial color="#888888" transparent opacity={0.1} />
      </Box>
    </group>
  );
};

// Star field background
const StarField = () => {
  const points = useMemo(() => {
    const positions = new Float32Array(200 * 3);
    for (let i = 0; i < 200; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 100;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 30 - 15;
    }
    return positions;
  }, []);

  const pointsRef = useRef<THREE.Points>(null);
  
  useFrame((state) => {
    if (pointsRef.current && !prefersReducedMotion) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.01;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={200}
          array={points}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#ffffff" transparent opacity={0.3} sizeAttenuation />
    </points>
  );
};

const SpaceElements3D = () => {
  // Don't render 3D on low-power devices or if reduced motion is preferred
  if (prefersReducedMotion) {
    return null;
  }

  return (
    <div 
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    >
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        dpr={[1, 1.5]} // Limit pixel ratio for performance
        gl={{ 
          antialias: false, // Better performance
          alpha: true,
          powerPreference: 'low-power'
        }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={0.3} />
        
        {/* Star field */}
        <StarField />
        
        {/* Planets - far background */}
        <Planet position={[-12, 5, -15]} scale={2} speed={0.5} />
        <Planet position={[14, -8, -20]} scale={3} speed={0.3} />
        
        {/* Astronaut - side periphery */}
        <Astronaut position={[-8, 0, -5]} />
        
        {/* Rockets - near timeline but offset */}
        <Rocket position={[6, -15, -8]} speed={0.15} />
        <Rocket position={[-7, -20, -10]} speed={0.1} />
        
        {/* Space shuttle - deep background, rare pass */}
        <SpaceShuttle position={[-20, 3, -12]} />
      </Canvas>
    </div>
  );
};

export default SpaceElements3D;
