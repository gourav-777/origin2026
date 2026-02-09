import { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, Box, Cone } from '@react-three/drei';
import * as THREE from 'three';

// Check for reduced motion preference
const getReducedMotion = () => 
  typeof window !== 'undefined' 
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
    : false;


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
      <group ref={groupRef} position={position} scale={1.2}>
        {/* Helmet */}
        <Sphere args={[0.25, 16, 16]} position={[0, 0.35, 0]}>
          <meshStandardMaterial color="#cccccc" transparent opacity={0.45} emissive="#666666" emissiveIntensity={0.1} />
        </Sphere>
        {/* Visor reflection */}
        <Sphere args={[0.18, 12, 12]} position={[0, 0.38, 0.1]}>
          <meshStandardMaterial color="#ffffff" transparent opacity={0.25} emissive="#888888" emissiveIntensity={0.15} />
        </Sphere>
        {/* Body */}
        <Box args={[0.35, 0.45, 0.22]} position={[0, -0.1, 0]}>
          <meshStandardMaterial color="#aaaaaa" transparent opacity={0.4} />
        </Box>
        {/* Backpack */}
        <Box args={[0.25, 0.35, 0.12]} position={[0, -0.05, -0.17]}>
          <meshStandardMaterial color="#888888" transparent opacity={0.35} />
        </Box>
        {/* Arms */}
        <Box args={[0.1, 0.3, 0.1]} position={[0.25, -0.05, 0]} rotation={[0, 0, 0.3]}>
          <meshStandardMaterial color="#999999" transparent opacity={0.35} />
        </Box>
        <Box args={[0.1, 0.3, 0.1]} position={[-0.25, -0.05, 0]} rotation={[0, 0, -0.3]}>
          <meshStandardMaterial color="#999999" transparent opacity={0.35} />
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
      const drift = (state.clock.elapsedTime * speed) % 30;
      groupRef.current.position.y = startY + drift;
      groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.3) * 0.03;
      const opacity = drift < 5 ? drift / 5 : drift > 25 ? (30 - drift) / 5 : 1;
      groupRef.current.scale.setScalar(opacity * 1.0);
    }
  });

  return (
    <group ref={groupRef} position={position} scale={1.0}>
      {/* Rocket nose */}
      <Cone args={[0.15, 0.6, 8]} position={[0, 0.32, 0]}>
        <meshStandardMaterial color="#dddddd" transparent opacity={0.5} emissive="#888888" emissiveIntensity={0.1} />
      </Cone>
      {/* Body */}
      <Box args={[0.22, 0.45, 0.22]} position={[0, -0.08, 0]}>
        <meshStandardMaterial color="#bbbbbb" transparent opacity={0.45} />
      </Box>
      {/* Fins */}
      <Box args={[0.08, 0.2, 0.08]} position={[0.15, -0.28, 0]} rotation={[0, 0, 0.25]}>
        <meshStandardMaterial color="#999999" transparent opacity={0.4} />
      </Box>
      <Box args={[0.08, 0.2, 0.08]} position={[-0.15, -0.28, 0]} rotation={[0, 0, -0.25]}>
        <meshStandardMaterial color="#999999" transparent opacity={0.4} />
      </Box>
      <Box args={[0.08, 0.2, 0.08]} position={[0, -0.28, 0.15]} rotation={[0.25, 0, 0]}>
        <meshStandardMaterial color="#999999" transparent opacity={0.4} />
      </Box>
      {/* Engine glow */}
      <Sphere args={[0.12, 8, 8]} position={[0, -0.38, 0]}>
        <meshStandardMaterial 
          color="#ffffff" 
          transparent 
          opacity={0.6}
          emissive="#ffffff"
          emissiveIntensity={0.8}
        />
      </Sphere>
      {/* Engine trail */}
      <Cone args={[0.1, 0.8, 8]} position={[0, -0.8, 0]} rotation={[Math.PI, 0, 0]}>
        <meshStandardMaterial color="#ffffff" transparent opacity={0.2} emissive="#ffffff" emissiveIntensity={0.3} />
      </Cone>
    </group>
  );
};

// Space Shuttle - Cinematic pass through deep background
const SpaceShuttle = ({ position }: { position: [number, number, number] }) => {
  const groupRef = useRef<THREE.Group>(null);
  const startX = position[0];
  const prefersReducedMotion = getReducedMotion();
  
  useFrame((state) => {
    if (groupRef.current && !prefersReducedMotion) {
      const cycle = (state.clock.elapsedTime * 0.08) % 60;
      groupRef.current.position.x = startX + cycle - 30;
      groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.05) * 0.3;
      const visibility = cycle > 15 && cycle < 45 ? 1 : 0;
      groupRef.current.scale.setScalar(visibility * 1.0);
    }
  });

  return (
    <group ref={groupRef} position={position} rotation={[0, 0, -0.08]} scale={1.0}>
      {/* Main fuselage */}
      <Box args={[1.0, 0.18, 0.18]}>
        <meshStandardMaterial color="#cccccc" transparent opacity={0.4} />
      </Box>
      {/* Nose cone */}
      <Cone args={[0.09, 0.25, 6]} position={[0.62, 0, 0]} rotation={[0, 0, -Math.PI / 2]}>
        <meshStandardMaterial color="#bbbbbb" transparent opacity={0.35} />
      </Cone>
      {/* Delta wings */}
      <Box args={[0.35, 0.025, 0.7]} position={[-0.1, 0, 0]}>
        <meshStandardMaterial color="#aaaaaa" transparent opacity={0.35} />
      </Box>
      {/* Vertical stabilizer */}
      <Box args={[0.18, 0.35, 0.025]} position={[-0.4, 0.15, 0]}>
        <meshStandardMaterial color="#aaaaaa" transparent opacity={0.35} />
      </Box>
      {/* Engine pods */}
      <Sphere args={[0.06, 6, 6]} position={[-0.5, -0.05, 0.12]}>
        <meshStandardMaterial color="#ffffff" transparent opacity={0.5} emissive="#ffffff" emissiveIntensity={0.4} />
      </Sphere>
      <Sphere args={[0.06, 6, 6]} position={[-0.5, -0.05, -0.12]}>
        <meshStandardMaterial color="#ffffff" transparent opacity={0.5} emissive="#ffffff" emissiveIntensity={0.4} />
      </Sphere>
    </group>
  );
};

// Nebula Cloud - Soft glowing cosmic gas clouds
const NebulaCloud = ({ 
  position, 
  scale, 
  color, 
  speed 
}: { 
  position: [number, number, number]; 
  scale: number; 
  color: string;
  speed: number;
}) => {
  const groupRef = useRef<THREE.Group>(null);
  const prefersReducedMotion = getReducedMotion();
  
  useFrame((state) => {
    if (groupRef.current && !prefersReducedMotion) {
      // Very slow rotation and pulsing
      groupRef.current.rotation.z = state.clock.elapsedTime * speed * 0.02;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * speed * 0.01) * 0.1;
      // Subtle breathing effect
      const pulse = 1 + Math.sin(state.clock.elapsedTime * speed * 0.05) * 0.05;
      groupRef.current.scale.setScalar(scale * pulse);
    }
  });

  return (
    <group ref={groupRef} position={position} scale={scale}>
      {/* Core glow */}
      <Sphere args={[1, 16, 16]}>
        <meshStandardMaterial 
          color={color}
          transparent 
          opacity={0.2}
          emissive={color}
          emissiveIntensity={0.25}
        />
      </Sphere>
      {/* Outer haze layer 1 */}
      <Sphere args={[1.8, 12, 12]}>
        <meshStandardMaterial 
          color={color}
          transparent 
          opacity={0.12}
          emissive={color}
          emissiveIntensity={0.15}
        />
      </Sphere>
      {/* Outer haze layer 2 */}
      <Sphere args={[2.8, 10, 10]}>
        <meshStandardMaterial 
          color={color}
          transparent 
          opacity={0.08}
          emissive={color}
          emissiveIntensity={0.08}
        />
      </Sphere>
      {/* Wispy tendrils - offset spheres */}
      <Sphere args={[0.8, 8, 8]} position={[1.2, 0.5, 0]}>
        <meshStandardMaterial color={color} transparent opacity={0.1} emissive={color} emissiveIntensity={0.1} />
      </Sphere>
      <Sphere args={[0.6, 8, 8]} position={[-0.8, -0.7, 0.3]}>
        <meshStandardMaterial color={color} transparent opacity={0.08} emissive={color} emissiveIntensity={0.08} />
      </Sphere>
      <Sphere args={[0.7, 8, 8]} position={[0.4, 1.1, -0.2]}>
        <meshStandardMaterial color={color} transparent opacity={0.07} emissive={color} emissiveIntensity={0.07} />
      </Sphere>
    </group>
  );
};

// Galaxy Spiral - Distant spiral galaxy
const GalaxySpiral = ({ position, scale }: { position: [number, number, number]; scale: number }) => {
  const groupRef = useRef<THREE.Group>(null);
  const prefersReducedMotion = getReducedMotion();
  
  const spiralPoints = useMemo(() => {
    const positions = new Float32Array(300 * 3);
    for (let i = 0; i < 300; i++) {
      // Spiral arm distribution
      const arm = i % 2;
      const t = (i / 300) * 4;
      const armOffset = arm * Math.PI;
      const angle = t * Math.PI + armOffset;
      const radius = t * 0.8 + Math.random() * 0.3;
      
      positions[i * 3] = Math.cos(angle) * radius + (Math.random() - 0.5) * 0.2;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 0.15;
      positions[i * 3 + 2] = Math.sin(angle) * radius + (Math.random() - 0.5) * 0.2;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (groupRef.current && !prefersReducedMotion) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.008;
    }
  });

  return (
    <group ref={groupRef} position={position} scale={scale} rotation={[0.8, 0, 0.3]}>
      {/* Galaxy core */}
      <Sphere args={[0.3, 12, 12]}>
        <meshStandardMaterial 
          color="#ffffff"
          transparent 
          opacity={0.3}
          emissive="#ffffff"
          emissiveIntensity={0.4}
        />
      </Sphere>
      {/* Core glow */}
      <Sphere args={[0.5, 10, 10]}>
        <meshStandardMaterial 
          color="#cccccc"
          transparent 
          opacity={0.15}
          emissive="#ffffff"
          emissiveIntensity={0.2}
        />
      </Sphere>
      {/* Spiral arms as points */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={300}
            array={spiralPoints}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial 
          size={0.06} 
          color="#ffffff" 
          transparent 
          opacity={0.35} 
          sizeAttenuation 
        />
      </points>
    </group>
  );
};

// Cosmic Dust - Floating particles
const CosmicDust = () => {
  const prefersReducedMotion = getReducedMotion();
  
  const dustPoints = useMemo(() => {
    const positions = new Float32Array(200 * 3);
    for (let i = 0; i < 200; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = 8 + Math.random() * 25;
      positions[i * 3] = Math.cos(angle) * radius;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 70;
      positions[i * 3 + 2] = -5 - Math.random() * 30;
    }
    return positions;
  }, []);

  const dustRef = useRef<THREE.Points>(null);
  
  useFrame((state) => {
    if (dustRef.current && !prefersReducedMotion) {
      dustRef.current.rotation.y = state.clock.elapsedTime * 0.004;
      dustRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.01) * 0.05;
    }
  });

  return (
    <points ref={dustRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={200}
          array={dustPoints}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.12} 
        color="#aaaaaa" 
        transparent 
        opacity={0.25} 
        sizeAttenuation 
      />
    </points>
  );
};

// Shooting Star - Occasional streak across the background
const ShootingStar = ({ id }: { id: number }) => {
  const groupRef = useRef<THREE.Group>(null);
  const prefersReducedMotion = getReducedMotion();
  
  // Each shooting star has different timing offset
  const offset = useMemo(() => id * 7.3, [id]);
  const cycleLength = useMemo(() => 12 + id * 4, [id]); // Different cycle lengths
  
  // Random starting position for each star
  const startPos = useMemo(() => ({
    x: -25 + Math.random() * 20,
    y: 15 + Math.random() * 15,
    z: -15 - Math.random() * 10
  }), []);
  
  // Direction vector (diagonal down-right)
  const direction = useMemo(() => ({
    x: 0.8 + Math.random() * 0.4,
    y: -0.5 - Math.random() * 0.3,
    z: 0.1
  }), []);

  // Create the line object
  const lineObject = useMemo(() => {
    const points = [];
    const tailLength = 3;
    for (let i = 0; i <= 10; i++) {
      const t = i / 10;
      points.push(new THREE.Vector3(
        -direction.x * tailLength * t,
        -direction.y * tailLength * t,
        -direction.z * tailLength * t
      ));
    }
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const material = new THREE.LineBasicMaterial({ 
      color: 0xffffff, 
      transparent: true, 
      opacity: 0 
    });
    return new THREE.Line(geometry, material);
  }, [direction]);

  useFrame((state) => {
    if (groupRef.current && !prefersReducedMotion) {
      const time = state.clock.elapsedTime + offset;
      const cycleProgress = (time % cycleLength) / cycleLength;
      
      // Only visible for a short portion of the cycle (quick streak)
      const streakStart = 0.7;
      const streakEnd = 0.85;
      
      if (cycleProgress >= streakStart && cycleProgress <= streakEnd) {
        const streakProgress = (cycleProgress - streakStart) / (streakEnd - streakStart);
        
        // Position along the streak path
        const travel = streakProgress * 50;
        groupRef.current.position.x = startPos.x + direction.x * travel;
        groupRef.current.position.y = startPos.y + direction.y * travel;
        groupRef.current.position.z = startPos.z + direction.z * travel;
        
        // Fade in then out
        const fadeIn = Math.min(streakProgress * 4, 1);
        const fadeOut = Math.max(1 - (streakProgress - 0.6) * 2.5, 0);
        const opacity = Math.min(fadeIn, fadeOut) * 0.4;
        
        groupRef.current.scale.setScalar(1);
        (lineObject.material as THREE.LineBasicMaterial).opacity = opacity;
      } else {
        groupRef.current.scale.setScalar(0);
      }
    }
  });

  return (
    <group ref={groupRef}>
      <primitive object={lineObject} />
    </group>
  );
};

// Multiple shooting stars with staggered timing
const ShootingStars = () => {
  return (
    <group>
      <ShootingStar id={0} />
      <ShootingStar id={1} />
      <ShootingStar id={2} />
      <ShootingStar id={3} />
    </group>
  );
};


// Twinkling Star - Individual bright star with pulsing effect (larger and brighter)
const TwinklingStar = ({ position, baseSize, speed, phase }: { 
  position: [number, number, number]; 
  baseSize: number; 
  speed: number;
  phase: number;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const prefersReducedMotion = getReducedMotion();
  
  useFrame((state) => {
    if (meshRef.current && !prefersReducedMotion) {
      // Pulsing brightness effect - more dramatic
      const pulse = 0.5 + Math.sin(state.clock.elapsedTime * speed + phase) * 0.5;
      const scale = baseSize * (0.8 + pulse * 0.8);
      meshRef.current.scale.setScalar(scale);
      
      // Update material opacity for twinkling - brighter
      const material = meshRef.current.material as THREE.MeshStandardMaterial;
      material.opacity = 0.6 + pulse * 0.4;
      material.emissiveIntensity = 0.5 + pulse * 1.0;
    }
  });

  return (
    <Sphere ref={meshRef} args={[1, 10, 10]} position={position}>
      <meshStandardMaterial 
        color="#ffffff"
        transparent 
        opacity={0.9}
        emissive="#ffffff"
        emissiveIntensity={0.8}
      />
    </Sphere>
  );
};

// Twinkling Stars Group - More bright stars that pulse with larger sizes
const TwinklingStars = () => {
  const stars = useMemo(() => {
    const items = [];
    for (let i = 0; i < 50; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = 12 + Math.random() * 30;
      items.push({
        position: [
          Math.cos(angle) * radius,
          (Math.random() - 0.5) * 80,
          -8 - Math.random() * 25
        ] as [number, number, number],
        baseSize: 0.06 + Math.random() * 0.1,
        speed: 1.2 + Math.random() * 3,
        phase: Math.random() * Math.PI * 2,
        id: i
      });
    }
    return items;
  }, []);

  return (
    <group>
      {stars.map((star) => (
        <TwinklingStar key={star.id} {...star} />
      ))}
    </group>
  );
};

// Star field with enhanced visibility
const StarField = () => {
  const prefersReducedMotion = getReducedMotion();
  
  const points = useMemo(() => {
    const positions = new Float32Array(300 * 3);
    for (let i = 0; i < 300; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = 12 + Math.random() * 30;
      positions[i * 3] = Math.cos(angle) * radius;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 100;
      positions[i * 3 + 2] = -8 - Math.random() * 25;
    }
    return positions;
  }, []);

  const pointsRef = useRef<THREE.Points>(null);
  
  useFrame((state) => {
    if (pointsRef.current && !prefersReducedMotion) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.006;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={300}
          array={points}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#ffffff" transparent opacity={0.4} sizeAttenuation />
    </points>
  );
};

// Parallax camera controller - responds to scroll position
const ParallaxCamera = ({ scrollY }: { scrollY: number }) => {
  const prefersReducedMotion = getReducedMotion();
  
  useFrame(({ camera }) => {
    if (!prefersReducedMotion) {
      // More dramatic parallax effect based on scroll - camera moves noticeably
      const targetY = -scrollY * 0.008;
      const targetZ = 12 + scrollY * 0.003;
      camera.position.y += (targetY - camera.position.y) * 0.06;
      camera.position.z += (targetZ - camera.position.z) * 0.06;
    }
  });
  
  return null;
};

// Scene content wrapper with parallax layers
const ParallaxScene = ({ scrollY }: { scrollY: number }) => {
  const backgroundRef = useRef<THREE.Group>(null);
  const midgroundRef = useRef<THREE.Group>(null);
  const foregroundRef = useRef<THREE.Group>(null);
  const prefersReducedMotion = getReducedMotion();
  
  useFrame(() => {
    if (prefersReducedMotion) return;
    
    // Much more dramatic parallax speeds for depth layers
    if (backgroundRef.current) {
      const targetY = scrollY * 0.002;
      backgroundRef.current.position.y += (targetY - backgroundRef.current.position.y) * 0.04;
    }
    if (midgroundRef.current) {
      const targetY = scrollY * 0.006;
      midgroundRef.current.position.y += (targetY - midgroundRef.current.position.y) * 0.05;
    }
    if (foregroundRef.current) {
      const targetY = scrollY * 0.012;
      foregroundRef.current.position.y += (targetY - foregroundRef.current.position.y) * 0.06;
    }
  });

  return (
    <>
      <ParallaxCamera scrollY={scrollY} />
      
      <ambientLight intensity={0.7} />
      <pointLight position={[15, 15, 10]} intensity={0.5} />
      <pointLight position={[-15, -10, 5]} intensity={0.3} />
      
      {/* Background layer - slowest parallax */}
      <group ref={backgroundRef}>
        {/* Nebula clouds - deep background atmospheric glow */}
        <NebulaCloud position={[-20, 15, -40]} scale={10} color="#888888" speed={0.3} />
        <NebulaCloud position={[25, -10, -45]} scale={12} color="#777777" speed={0.2} />
        <NebulaCloud position={[5, 25, -50]} scale={8} color="#999999" speed={0.25} />
        <NebulaCloud position={[-15, -20, -55]} scale={9} color="#666666" speed={0.15} />
        
        {/* Distant spiral galaxy */}
        <GalaxySpiral position={[18, 20, -35]} scale={4} />
        <GalaxySpiral position={[-22, -12, -40]} scale={2.5} />
      </group>
      
      {/* Midground layer - medium parallax */}
      <group ref={midgroundRef}>
        {/* Cosmic dust particles */}
        <CosmicDust />
        
        {/* Star field */}
        <StarField />
        
        {/* Twinkling bright stars */}
        <TwinklingStars />
        
        {/* Shooting stars */}
        <ShootingStars />
      </group>
      
      {/* Foreground layer - fastest parallax */}
      <group ref={foregroundRef}>
        {/* Astronaut */}
        <Astronaut position={[-12, 2, -6]} />
        
        {/* Rockets */}
        <Rocket position={[10, -20, -10]} speed={0.1} />
        <Rocket position={[-11, -25, -12]} speed={0.07} />
        
        {/* Space shuttle */}
        <SpaceShuttle position={[-35, 8, -15]} />
      </group>
    </>
  );
};

const SpaceElements3D = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsMounted(true);
    
    // Check screen size - hide on mobile/tablet (< 1024px)
    const checkVisibility = () => {
      const width = window.innerWidth;
      setIsVisible(width >= 1024);
    };
    
    // Check reduced motion preference
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(motionQuery.matches);
    
    const handleMotionChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    
    // Track scroll position for parallax
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    checkVisibility();
    window.addEventListener('resize', checkVisibility);
    window.addEventListener('scroll', handleScroll, { passive: true });
    motionQuery.addEventListener('change', handleMotionChange);
    
    return () => {
      window.removeEventListener('resize', checkVisibility);
      window.removeEventListener('scroll', handleScroll);
      motionQuery.removeEventListener('change', handleMotionChange);
    };
  }, []);

  // Don't render until mounted (SSR safety) or on small screens / reduced motion
  if (!isMounted || !isVisible || prefersReducedMotion) {
    return null;
  }

  return (
    <div 
      className="fixed inset-0 pointer-events-none"
      style={{ 
        zIndex: 0,
        width: '100vw',
        height: '100vh',
      }}
      aria-hidden="true"
    >
      <Canvas
        camera={{ position: [0, 0, 12], fov: 55 }}
        dpr={[1, 1.5]}
        style={{ width: '100%', height: '100%' }}
        gl={{ 
          antialias: false,
          alpha: true,
          powerPreference: 'low-power'
        }}
      >
        <ParallaxScene scrollY={scrollY} />
      </Canvas>
    </div>
  );
};

export default SpaceElements3D;
