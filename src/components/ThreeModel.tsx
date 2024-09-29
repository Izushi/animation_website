import { Canvas } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

const Model = (url: { url: string }) => {
  const { scene } = useGLTF(url);

  return (
    <group>
      <premitive object={scene} />
    </group>
  );
};

const ThreeModel = () => {
  return (
    <div>
      <Canvas>
        <Model />
      </Canvas>
    </div>
  );
};

export default ThreeModel;