import { Canvas } from "@react-three/fiber";
import Model from "./Model";
import { OrbitControls } from "@react-three/drei";

export const ModelContainer: React.FC = () => {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 10, 15], fov: 75 }}
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ambientLight intensity={1.5} />
      <pointLight position={[10, 10, 10]} />
      <Model />
      <OrbitControls />
    </Canvas>
  );
};
