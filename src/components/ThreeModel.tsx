import { OrbitControls, useGLTF } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import type * as THREE from 'three';

const Model = ({
  url,
  scale,
  position,
  rotation,
}: {
  url: string;
  scale: number;
  position: number[];
  rotation: number[];
}) => {
  const { scene } = useGLTF(url);
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.25;
    }
  });

  return (
    <group ref={groupRef}>
      <primitive object={scene} scale={scale} position={position} rotation={rotation} />
    </group>
  );
};

const ThreeModel = () => {
  const ref = useRef(null);
  const is3DInView = useInView(ref);
  const [canvasSize, setCanvasSize] = useState({ width: '100%', height: '700px' });
  const [hasError, setHasError] = useState(false);
  const [showInteractionHint, setShowInteractionHint] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setCanvasSize({ width: '420px', height: '450px' });
      } else if (window.innerWidth < 1220) {
        setCanvasSize({ width: '550px', height: '550px' });
      } else {
        setCanvasSize({ width: '600px', height: '600px' });
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (hasError) {
    return (
      <div className="w-64 h-64 bg-gradient-to-br from-red-500/20 to-orange-600/20 rounded-full flex items-center justify-center border border-red-300/30">
        <span className="text-red-300 text-sm font-semibold text-center">
          3D Model
          <br />
          Loading Failed
        </span>
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      initial={{ y: -100, opacity: 0 }}
      animate={is3DInView ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
      transition={{
        type: 'spring',
        duration: 0,
        delay: 0.9,
        stiffness: 200,
      }}
      style={{ width: canvasSize.width, height: canvasSize.height }}
      className="justify-center mx-auto relative"
    >
      <Canvas camera={{ position: [0, 0, 15], fov: 30 }} onError={() => setHasError(true)}>
        <ambientLight intensity={3} />
        <Model
          url="/assets/models/scene.gltf"
          scale={0.7}
          position={[0, -1.2, 1]}
          rotation={[Math.PI / 7, -Math.PI / 10, 0]}
        />
        <OrbitControls enableZoom={false} onStart={() => setShowInteractionHint(false)} />
      </Canvas>

      {showInteractionHint && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 pointer-events-none">
          <div className="bg-gradient-to-r from-teal-500/20 to-cyan-500/20 backdrop-blur-sm border-2 border-teal-300/30 rounded-2xl px-4 py-2 shadow-xl animate-bounce">
            <div className="flex items-center gap-2 text-sm text-teal-300 font-semibold">
              <div className="w-6 h-6 bg-teal-400/20 rounded-full flex items-center justify-center animate-pulse">
                <span className="text-xs">🖱️</span>
              </div>
              <span>Drag to rotate</span>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

const BackgroundThreeModel = ({
  url,
  scale = 0.3,
  position = [0, -5, -10],
  rotation = [Math.PI / 7, -Math.PI / 10, 0],
  opacity = 0.4,
}: {
  url: string;
  scale?: number;
  position?: number[];
  rotation?: number[];
  opacity?: number;
}) => {
  const { scene } = useGLTF(url);
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.5;
      groupRef.current.rotation.y += 0.002;
    }
  });

  useEffect(() => {
    if (scene) {
      scene.traverse((child) => {
        if ((child as THREE.Mesh).isMesh) {
          const mesh = child as THREE.Mesh;
          if (mesh.material) {
            const material = mesh.material as THREE.Material;
            material.transparent = true;
            material.opacity = opacity;
          }
        }
      });
    }
  }, [scene, opacity]);

  return (
    <group ref={groupRef}>
      <primitive object={scene} scale={scale} position={position} rotation={rotation} />
    </group>
  );
};

export default ThreeModel;
export { BackgroundThreeModel };
