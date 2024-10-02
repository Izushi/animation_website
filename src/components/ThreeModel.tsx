import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { motion } from 'framer-motion';
import { useRef } from 'react';

const Model = ({ url, scale, position, rotation }: { url: string; scale: number; position: number[]; rotation: number[] }) => {
  const groupRef = useRef(null);
  const { scene } = useGLTF(url);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.8;
      // groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      <primitive object={scene} scale={scale} position={position} rotation={rotation} />
    </group>
  );
};

const ThreeModel = () => {
  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        type: 'spring',
        duration: 2.0,
        delay: 0.9,
        stiffness: 200,
      }}
      className='w-full h-[700px]'>
      <Canvas camera={{ position: [0, 0, 27], fov: 50 }}>
        <ambientLight intensity={3}/>
        <Model
          url="/src/assets/models/scene.gltf"
          scale={2.3} position={[-0.4, -3, 1.4]}
          rotation={[Math.PI / 7, -Math.PI / 10, 0]}
        />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </motion.div>
  );
};

export default ThreeModel;