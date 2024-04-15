import { Suspense, useEffect, useState } from "react";
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from '../Loader';

const Computers = ({isMobile}) => {
  const { scene } = useGLTF('/desktop_pc/scene.gltf'); // Destructuring scene directly
  
  return (
    <mesh>
      <hemisphereLight intensity={1.5} groundColor="black" />
      <pointLight intensity={0} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadowMapSize={1024} // Corrected attribute name to shadowMapSize
      />
      <primitive 
        object={scene} // Using destructured scene
        scale={isMobile ? 0.7: 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -4, -2.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)'); // Corrected media query syntax
    
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []); // Added empty dependency array

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }} // Corrected fov spelling
      gl={{ preserveDrawingBuffer: true }}
    > 
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false} // Corrected false spelling
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;

