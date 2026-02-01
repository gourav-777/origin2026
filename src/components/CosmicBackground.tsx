import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Sparkles } from "@react-three/drei";
import { useRef, useMemo, Suspense } from "react";
import * as THREE from "three";

const Nebula = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uColor1: { value: new THREE.Color("#0ea5e9") },
    uColor2: { value: new THREE.Color("#8b5cf6") },
    uColor3: { value: new THREE.Color("#ec4899") },
  }), []);

  useFrame((state) => {
    if (meshRef.current) {
      uniforms.uTime.value = state.clock.elapsedTime * 0.1;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, -10]}>
      <planeGeometry args={[50, 50, 64, 64]} />
      <shaderMaterial
        transparent
        uniforms={uniforms}
        vertexShader={`
          varying vec2 vUv;
          uniform float uTime;
          
          void main() {
            vUv = uv;
            vec3 pos = position;
            pos.z += sin(pos.x * 2.0 + uTime) * 0.3;
            pos.z += cos(pos.y * 2.0 + uTime) * 0.3;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          }
        `}
        fragmentShader={`
          varying vec2 vUv;
          uniform float uTime;
          uniform vec3 uColor1;
          uniform vec3 uColor2;
          uniform vec3 uColor3;
          
          float noise(vec2 p) {
            return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
          }
          
          void main() {
            vec2 center = vUv - 0.5;
            float dist = length(center);
            
            float n = noise(vUv * 10.0 + uTime);
            float n2 = noise(vUv * 5.0 - uTime * 0.5);
            
            vec3 color = mix(uColor1, uColor2, n);
            color = mix(color, uColor3, n2 * 0.5);
            
            float alpha = smoothstep(0.7, 0.2, dist) * 0.3;
            alpha *= (n * 0.5 + 0.5);
            
            gl_FragColor = vec4(color, alpha);
          }
        `}
      />
    </mesh>
  );
};

const FloatingParticles = () => {
  const particlesRef = useRef<THREE.Points>(null);
  
  const particles = useMemo(() => {
    const positions = new Float32Array(500 * 3);
    const colors = new Float32Array(500 * 3);
    
    for (let i = 0; i < 500; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 30;
      
      const isCyan = Math.random() > 0.5;
      colors[i * 3] = isCyan ? 0.0549 : 0.545;
      colors[i * 3 + 1] = isCyan ? 0.647 : 0.361;
      colors[i * 3 + 2] = isCyan ? 0.914 : 0.965;
    }
    
    return { positions, colors };
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.02;
      particlesRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.05) * 0.1;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={500}
          array={particles.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={500}
          array={particles.colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
};

const WormholeRing = ({ radius, speed, delay }: { radius: number; speed: number; delay: number }) => {
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ringRef.current) {
      const time = state.clock.elapsedTime * speed + delay;
      ringRef.current.rotation.x = Math.PI / 2;
      ringRef.current.rotation.z = time;
      ringRef.current.scale.setScalar(1 + Math.sin(time) * 0.1);
    }
  });

  return (
    <mesh ref={ringRef} position={[0, 0, -5]}>
      <torusGeometry args={[radius, 0.02, 16, 100]} />
      <meshBasicMaterial color="#0ea5e9" transparent opacity={0.3} />
    </mesh>
  );
};

const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.1} />
      <Stars 
        radius={100} 
        depth={50} 
        count={5000} 
        factor={4} 
        saturation={0.5} 
        fade 
        speed={0.5}
      />
      <Sparkles 
        count={200}
        scale={20}
        size={2}
        speed={0.3}
        color="#0ea5e9"
      />
      <Nebula />
      <FloatingParticles />
      <WormholeRing radius={3} speed={0.2} delay={0} />
      <WormholeRing radius={4} speed={-0.15} delay={1} />
      <WormholeRing radius={5} speed={0.1} delay={2} />
    </>
  );
};

const CosmicBackground = () => {
  return (
    <div className="fixed inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-cosmic-purple/20 to-background" />
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
      {/* Vignette overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, hsl(240 20% 3% / 0.7) 100%)'
        }}
      />
    </div>
  );
};

export default CosmicBackground;