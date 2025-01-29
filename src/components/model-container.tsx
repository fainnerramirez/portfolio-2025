import { Box } from "@chakra-ui/react";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Model from "./Model";
import { LoaderComponent } from "./loader-component";

export const ModelContainer: React.FC = () => {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    let timeOut: ReturnType<typeof setTimeout>;

    timeOut = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timeOut);
    };
  }, [loading]);

  return (
    <Box height={"100%"} width={"100%"}>
      {loading ? (
        <LoaderComponent isLoading={loading} size="xl" />
      ) : (
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
      )}
    </Box>
  );
};
