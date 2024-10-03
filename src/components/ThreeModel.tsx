import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { motion } from 'framer-motion';
import { useRef } from 'react';

const Model = ({
  url,
  scale,
  position,
  rotation
}: {
  url: string;
  scale: number;
  position: number[];
  rotation: number[];
}) => {
  const { scene } = useGLTF(url);
  const groupRef = useRef(null);

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
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: 'spring',
        duration: 0,
        delay: 0.9,
        stiffness: 200,
      }}
    className='w-full h-[700px]'>
      <Canvas camera={{ position: [0, 0, 15], fov: 30 }}>
        <ambientLight intensity={3}/>
        <Model
        url="/src/assets/models/scene.gltf"
        scale={0.8}
        position={[0, -1.2, 1]}
        rotation={[Math.PI / 7, -Math.PI / 10, 0]} />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </motion.div>
  );
};

export default ThreeModel;
