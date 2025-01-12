import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Model = () => {
  const { scene } = useGLTF("/src/assets/mac-draco.glb");
  const modelRef = useRef<any>();

  // Rotar indefinidamente en cada frame
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01; // Ajusta la velocidad de rotación
    }
  });

  return <primitive object={scene} scale={1.2} ref={modelRef} />;
};

export default Model;
