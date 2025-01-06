import { Box, Heading, useColorModeValue } from "@chakra-ui/react";
import Navbar from "../components/header-component";
import { useEffect } from "react";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Box
      width={"100vw"}
      bg={useColorModeValue("rgb(240, 231, 219)", "gray.800")}
      color={useColorModeValue("gray.600", "rgb(240, 231, 219)")}
    >
      <Box width={"60%"} margin={"auto"}>
        <Navbar />
      </Box>
      {children}
      <Box mt={300} p={10}>
        <Heading
          textAlign={"center"}
          fontWeight={"normal"}
          as={"h3"}
          size={"sm"}
          color={useColorModeValue("gray.500", "gray.400")}
        >
          © {new Date().getFullYear().toString()} - Fainner Ramírez. Todos los
          derechos reservados
        </Heading>
      </Box>
    </Box>
  );
};

export default Layout;
