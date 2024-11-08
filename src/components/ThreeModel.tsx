import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

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
  const [canvasSize, setCanvasSize] = useState({width: '100%', height: '700px'});

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
      className='justify-center mx-auto'
    >
      <Canvas camera={{ position: [0, 0, 15], fov: 30 }}>
        <ambientLight intensity={3}/>
        <Model
          url="/src/assets/models/scene.gltf"
          scale={0.7}
          position={[0, -1.2, 1]}
          rotation={[Math.PI / 7, -Math.PI / 10, 0]}
        />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </motion.div>
  );
};

export default ThreeModel;
