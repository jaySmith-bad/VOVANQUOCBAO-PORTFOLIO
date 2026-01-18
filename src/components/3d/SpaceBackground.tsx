'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Preload, Sphere, Float } from '@react-three/drei';
import { useState, useRef, Suspense, useMemo } from 'react';
import * as THREE from 'three';

// --- Stars Component ---
function Stars() {
  const ref = useRef<any>();
  const [stars1] = useState(() => createStars(5000, 20)); // Bán kính lớn hơn
  const [stars2] = useState(() => createStars(3000, 35)); // Bán kính rất lớn để bao phủ

  function createStars(count: number, radius: number) {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      // Sử dụng phân bổ hình cầu đồng nhất
      const theta = 2 * Math.PI * Math.random();
      const phi = Math.acos(2 * Math.random() - 1);
      const r = radius * Math.pow(Math.random(), 1/3); // Phân bổ đều trong thể tích
      
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    return positions;
  }

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 50;
      ref.current.rotation.y -= delta / 80;
    }
  });

  return (
    <group ref={ref}>
      <Points positions={stars1} stride={3} frustumCulled={false}>
        <PointMaterial transparent color="#ffffff" size={0.05} sizeAttenuation depthWrite={false} opacity={0.8} />
      </Points>
      <Points positions={stars2} stride={3} frustumCulled={false}>
        <PointMaterial transparent color="#61dafb" size={0.03} sizeAttenuation depthWrite={false} opacity={0.5} />
      </Points>
    </group>
  );
}

// --- Galaxy Spiral Component ---
function Galaxy() {
  const count = 3000;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const arms = 3;
    const radius = 10;
    const spin = 1;

    for (let i = 0; i < count; i++) {
      const r = Math.random() * radius;
      const angle = (i % arms) * ((2 * Math.PI) / arms) + (r * spin);
      
      const x = Math.cos(angle) * r + (Math.random() - 0.5) * (r / 2);
      const y = (Math.random() - 0.5) * 0.5;
      const z = Math.sin(angle) * r + (Math.random() - 0.5) * (r / 2);

      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;
    }
    return pos;
  }, []);

  const ref = useRef<any>();
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta / 50;
    }
  });

  return (
    <group position={[0, -2, -10]} rotation={[Math.PI / 4, 0, 0]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#4466ff"
          size={0.03}
          sizeAttenuation
          depthWrite={false}
          opacity={0.4}
          blending={THREE.AdditiveBlending}
        />
      </Points>
      {/* Galaxy Core Glow */}
      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.1} blending={THREE.AdditiveBlending} />
      </mesh>
    </group>
  );
}

// --- Moving Planets Component ---
function Planets() {
  return (
    <group>
      {/* Planet 1 - Purple Gas Giant */}
      <Float speed={1.5} rotationIntensity={1} floatIntensity={1}>
        <mesh position={[-6, 4, -8]}>
          <sphereGeometry args={[1.2, 32, 32]} />
          <meshStandardMaterial color="#220044" emissive="#442266" emissiveIntensity={0.5} roughness={0.8} />
          <pointLight color="#8844ff" intensity={5} distance={10} />
        </mesh>
      </Float>

      {/* Planet 2 - Cyan Ice Planet */}
      <Float speed={2} rotationIntensity={1.5} floatIntensity={0.5}>
        <mesh position={[8, -5, -12]}>
          <sphereGeometry args={[0.8, 32, 32]} />
          <meshStandardMaterial color="#002244" emissive="#224466" emissiveIntensity={0.8} roughness={0.2} metalness={0.8} />
          <pointLight color="#61dafb" intensity={4} distance={8} />
        </mesh>
      </Float>

      {/* Planet 3 - Golden Sun / Star */}
      <Float speed={0.5} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh position={[0, 10, -15]}>
          <sphereGeometry args={[2, 32, 32]} />
          <meshBasicMaterial color="#ffaa00" />
          <pointLight color="#ffaa00" intensity={10} distance={30} />
        </mesh>
      </Float>
    </group>
  );
}

// --- Shooting Stars (Comets) Component ---
function ShootingStars() {
  const [stars, setStars] = useState<any[]>([]);

  useFrame((state, delta) => {
    // Randomly spawn a shooting star
    if (Math.random() < 0.02 && stars.length < 3) {
      setStars(prev => [...prev, {
        id: Math.random(),
        pos: [(Math.random() - 0.5) * 20, 10, (Math.random() - 0.5) * 10],
        vel: [(Math.random() - 0.5) * 0.3, -0.4 - Math.random() * 0.4, 0],
        opacity: 1
      }]);
    }

    // Update existing stars
    setStars(prev => prev
      .map(s => ({
        ...s,
        pos: [s.pos[0] + s.vel[0], s.pos[1] + s.vel[1], s.pos[2] + s.vel[2]],
        opacity: s.opacity - 0.02
      }))
      .filter(s => s.pos[1] > -10 && s.opacity > 0)
    );
  });

  return (
    <group>
      {stars.map(s => (
        <group key={s.id} position={s.pos}>
          {/* Core */}
          <mesh>
            <sphereGeometry args={[0.03, 8, 8]} />
            <meshBasicMaterial color="#ffffff" transparent opacity={s.opacity} />
          </mesh>
          {/* Trail */}
          <mesh rotation={[0, 0, Math.atan2(s.vel[1], s.vel[0]) + Math.PI / 2]}>
            <cylinderGeometry args={[0.01, 0, 1.5, 8]} />
            <meshBasicMaterial color="#ffffff" transparent opacity={s.opacity * 0.5} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

// --- Geometric Shapes Component ---
function GeometricShapes() {
  const shapes = useMemo(() => {
    return Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      position: [
        (Math.random() - 0.5) * 25,
        (Math.random() - 0.5) * 25,
        (Math.random() - 0.5) * 15 - 10
      ],
      rotation: [Math.random() * Math.PI, Math.random() * Math.PI, 0],
      scale: 0.2 + Math.random() * 0.5,
      type: Math.floor(Math.random() * 3), // 0: Icosahedron, 1: Tetrahedron, 2: Octahedron
      speed: 0.2 + Math.random() * 0.5
    }));
  }, []);

  return (
    <group>
      {shapes.map((shape) => (
        <Float key={shape.id} speed={shape.speed * 2} rotationIntensity={2} floatIntensity={1}>
          <mesh position={shape.position as any} rotation={shape.rotation as any} scale={shape.scale}>
            {shape.type === 0 && <icosahedronGeometry args={[1, 0]} />}
            {shape.type === 1 && <tetrahedronGeometry args={[1, 0]} />}
            {shape.type === 2 && <octahedronGeometry args={[1, 0]} />}
            <meshStandardMaterial 
              color="#61dafb" 
              wireframe 
              transparent 
              opacity={0.15} 
              emissive="#61dafb"
              emissiveIntensity={0.5}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

export default function SpaceBackground() {
  return (
    <div className="fixed inset-0 z-0 bg-[#020202]">
      <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
        <Suspense fallback={null}>
          <Stars />
          <Galaxy />
          <Planets />
          <ShootingStars />
          <GeometricShapes />
          <ambientLight intensity={0.8} />
          <pointLight position={[10, 10, 10]} intensity={2.5} />
          <pointLight position={[-10, -10, -10]} color="#61dafb" intensity={1.5} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
}
