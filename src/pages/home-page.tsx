import { Box, useColorModeValue } from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import { Setup } from "../components/Setup";
import "../style/style.css";

const HomePage = () => {
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
