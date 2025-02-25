import { Box, Text } from "@chakra-ui/react";
import "../style/style.css";

export const Iam: React.FC = () => {
  return (
    <Box
      borderRadius={10}
      p={3}
      className="glass-light"
      width={{ base: "90%", md: "100%" }}
      m={"auto"}
    >
      <Text textAlign={"center"}>
        Hola, soy desarrollador de software ubicado en colombia.
      </Text>
    </Box>
  );
};
