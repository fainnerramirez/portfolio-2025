import { Box, useColorModeValue } from "@chakra-ui/react";
import { Setup } from "../components/Setup";

const HomePage = () => {
  return (
    <Box
      bg={useColorModeValue("#f0e7db", "gray.800")}
      color={useColorModeValue("gray.600", "#f0e7db")}
    >
      <Setup />
    </Box>
  );
};

export default HomePage;
