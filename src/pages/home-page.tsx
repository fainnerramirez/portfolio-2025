import { Box, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { Setup } from "../components/Setup";
import { Helmet } from "react-helmet";
import { ModelContainer } from "../components/model-container";
import "../style/style.css";

const HomePage = () => {
  const { colorMode } = useColorMode();

  return (
    <Box
      bg={useColorModeValue("#f0e7db", "gray.800")}
      color={useColorModeValue("gray.600", "#f0e7db")}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>Fainner Ramirez - HomePage</title>
      </Helmet>
      <Setup />
    </Box>
  );
};

export default HomePage;
