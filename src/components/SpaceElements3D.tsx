import { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, Box, Cone } from '@react-three/drei';
import * as THREE from 'three';

// Check for reduced motion preference
const getReducedMotion = () => 
  typeof window !== 'undefined' 
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
    : false;

// Floating Planet Component - Positioned in corner free space
const Planet = ({ position, scale, speed }: { position: [number, number, number]; scale: number; speed: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const prefersReducedMotion = getReducedMotion();
  
  useFrame((state) => {
    if (meshRef.current && !prefersReducedMotion) {
      meshRef.current.rotation.y += speed * 0.0005;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.1) * 0.2;
    }
  });

  return (
    <Float speed={prefersReducedMotion ? 0 : 0.3} rotationIntensity={0.1} floatIntensity={0.2}>
      <Sphere ref={meshRef} args={[scale, 24, 24]} position={position}>
        <meshStandardMaterial 
          color="#666666" 
          transparent 
          opacity={0.08}
          roughness={0.9}
        />
      </Sphere>
      {/* Subtle ring */}
      <mesh position={position} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[scale * 1.4, scale * 0.03, 12, 64]} />
        <meshStandardMaterial color="#555555" transparent opacity={0.05} />
      </mesh>
    </Float>
  );
};

// Floating Astronaut - Side margins only
const Astronaut = ({ position }: { position: [number, number, number] }) => {
  const groupRef = useRef<THREE.Group>(null);
  const prefersReducedMotion = getReducedMotion();
  
  useFrame((state) => {
    if (groupRef.current && !prefersReducedMotion) {
      groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.15) * 0.08;
      groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.08) * 0.3;
      groupRef.current.position.x = position[0] + Math.sin(state.clock.elapsedTime * 0.05) * 0.15;
    }
  });

  return (
    <Float speed={prefersReducedMotion ? 0 : 0.2} rotationIntensity={0.05} floatIntensity={0.15}>
      <group ref={groupRef} position={position} scale={0.8}>
        {/* Helmet */}
        <Sphere args={[0.25, 12, 12]} position={[0, 0.35, 0]}>
          <meshStandardMaterial color="#888888" transparent opacity={0.12} />
        </Sphere>
        {/* Visor reflection */}
        <Sphere args={[0.18, 8, 8]} position={[0, 0.38, 0.1]}>
          <meshStandardMaterial color="#aaaaaa" transparent opacity={0.06} />
        </Sphere>
        {/* Body */}
        <Box args={[0.35, 0.45, 0.22]} position={[0, -0.1, 0]}>
          <meshStandardMaterial color="#777777" transparent opacity={0.1} />
        </Box>
        {/* Backpack */}
        <Box args={[0.25, 0.35, 0.12]} position={[0, -0.05, -0.17]}>
          <meshStandardMaterial color="#666666" transparent opacity={0.08} />
        </Box>
      </group>
    </Float>
  );
};

// Rocket Component - Far side margins with slow upward drift
const Rocket = ({ position, speed }: { position: [number, number, number]; speed: number }) => {
  const groupRef = useRef<THREE.Group>(null);
  const startY = position[1];
  const prefersReducedMotion = getReducedMotion();
  
  useFrame((state) => {
    if (groupRef.current && !prefersReducedMotion) {
      // Very slow upward drift with smooth reset
      const drift = (state.clock.elapsedTime * speed) % 30;
      groupRef.current.position.y = startY + drift;
      groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.3) * 0.03;
      // Fade out at top, fade in at bottom
      const opacity = drift < 5 ? drift / 5 : drift > 25 ? (30 - drift) / 5 : 1;
      groupRef.current.scale.setScalar(opacity * 0.7);
    }
  });

  return (
    <group ref={groupRef} position={position} scale={0.7}>
      {/* Rocket nose */}
      <Cone args={[0.12, 0.5, 6]} position={[0, 0.28, 0]}>
        <meshStandardMaterial color="#999999" transparent opacity={0.15} />
      </Cone>
      {/* Body */}
      <Box args={[0.18, 0.35, 0.18]} position={[0, -0.08, 0]}>
        <meshStandardMaterial color="#888888" transparent opacity={0.12} />
      </Box>
      {/* Fins */}
      <Box args={[0.06, 0.15, 0.06]} position={[0.12, -0.22, 0]} rotation={[0, 0, 0.25]}>
        <meshStandardMaterial color="#777777" transparent opacity={0.1} />
      </Box>
      <Box args={[0.06, 0.15, 0.06]} position={[-0.12, -0.22, 0]} rotation={[0, 0, -0.25]}>
        <meshStandardMaterial color="#777777" transparent opacity={0.1} />
      </Box>
      {/* Soft engine glow */}
      <Sphere args={[0.08, 6, 6]} position={[0, -0.3, 0]}>
        <meshStandardMaterial 
          color="#ffffff" 
          transparent 
          opacity={0.2}
          emissive="#ffffff"
          emissiveIntensity={0.3}
        />
      </Sphere>
    </group>
  );
};

// Space Shuttle - Rare cinematic pass through deep background
const SpaceShuttle = ({ position }: { position: [number, number, number] }) => {
  const groupRef = useRef<THREE.Group>(null);
  const startX = position[0];
  const prefersReducedMotion = getReducedMotion();
  
  useFrame((state) => {
    if (groupRef.current && !prefersReducedMotion) {
      // Very slow horizontal pass with long 60-second cycle
      const cycle = (state.clock.elapsedTime * 0.05) % 60;
      groupRef.current.position.x = startX + cycle - 30;
      groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.05) * 0.3;
      // Only visible in middle of pass
      const visibility = cycle > 20 && cycle < 40 ? 1 : 0;
      groupRef.current.scale.setScalar(visibility * 0.6);
    }
  });

  return (
    <group ref={groupRef} position={position} rotation={[0, 0, -0.08]} scale={0.6}>
      {/* Main fuselage */}
      <Box args={[0.7, 0.12, 0.12]}>
        <meshStandardMaterial color="#888888" transparent opacity={0.08} />
      </Box>
      {/* Nose cone */}
      <Cone args={[0.06, 0.18, 5]} position={[0.44, 0, 0]} rotation={[0, 0, -Math.PI / 2]}>
        <meshStandardMaterial color="#777777" transparent opacity={0.06} />
      </Cone>
      {/* Delta wings */}
      <Box args={[0.25, 0.015, 0.45]} position={[-0.08, 0, 0]}>
        <meshStandardMaterial color="#666666" transparent opacity={0.06} />
      </Box>
      {/* Vertical stabilizer */}
      <Box args={[0.12, 0.2, 0.015]} position={[-0.3, 0.1, 0]}>
        <meshStandardMaterial color="#666666" transparent opacity={0.06} />
      </Box>
    </group>
  );
};

// Distant star field - very subtle
const StarField = () => {
  const prefersReducedMotion = getReducedMotion();
  
  const points = useMemo(() => {
    const positions = new Float32Array(150 * 3);
    for (let i = 0; i < 150; i++) {
      // Spread stars in peripheral areas only
      const angle = Math.random() * Math.PI * 2;
      const radius = 15 + Math.random() * 25;
      positions[i * 3] = Math.cos(angle) * radius;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 80;
      positions[i * 3 + 2] = -10 - Math.random() * 20;
    }
    return positions;
  }, []);

  const pointsRef = useRef<THREE.Points>(null);
  
  useFrame((state) => {
    if (pointsRef.current && !prefersReducedMotion) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.005;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={150}
          array={points}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#ffffff" transparent opacity={0.15} sizeAttenuation />
    </points>
  );
};

const SpaceElements3D = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check screen size - hide on mobile/tablet (< 1024px)
    const checkVisibility = () => {
      setIsVisible(window.innerWidth >= 1024);
    };
    
    // Check reduced motion preference
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(motionQuery.matches);
    
    const handleMotionChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    
    checkVisibility();
    window.addEventListener('resize', checkVisibility);
    motionQuery.addEventListener('change', handleMotionChange);
    
    return () => {
      window.removeEventListener('resize', checkVisibility);
      motionQuery.removeEventListener('change', handleMotionChange);
    };
  }, []);

  // Don't render on small screens or if reduced motion is preferred
  if (!isVisible || prefersReducedMotion) {
    return null;
  }

  return (
    <div 
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    >
      <Canvas
        camera={{ position: [0, 0, 12], fov: 55 }}
        dpr={[1, 1.5]}
        gl={{ 
          antialias: false,
          alpha: true,
          powerPreference: 'low-power'
        }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[15, 15, 10]} intensity={0.2} />
        
        {/* Distant star field in periphery */}
        <StarField />
        
        {/* Planets - far corners, deep background */}
        <Planet position={[-18, 12, -25]} scale={2.5} speed={0.3} />
        <Planet position={[20, -15, -30]} scale={3.5} speed={0.2} />
        
        {/* Astronaut - far left margin */}
        <Astronaut position={[-14, 2, -8]} />
        
        {/* Rockets - far side margins, away from center content */}
        <Rocket position={[12, -25, -12]} speed={0.08} />
        <Rocket position={[-13, -30, -15]} speed={0.05} />
        
        {/* Space shuttle - deep background cinematic pass */}
        <SpaceShuttle position={[-35, 8, -18]} />
      </Canvas>
    </div>
  );
};

export default SpaceElements3D;
