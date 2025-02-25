import {
  Box,
  Heading,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import Navbar from "../components/header-component";
import { ModelContainer } from "../components/model-container";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  const { colorMode } = useColorMode();

  return (
    <Box
      width={{base: "100%", sm: "100vw"}}
      bg={useColorModeValue("rgb(240, 231, 219)", "gray.800")}
      color={useColorModeValue("gray.600", "rgb(240, 231, 219)")}
    >
      <Box width={{ base: "100%", lg: "60%" }} m={"auto"}>
        <Navbar />
      </Box>
      <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <Box
          width={{ base: "80%", md: 600 }}
          m={[10, 10]}
          height={400}
          className={colorMode === "light" ? "light-box" : "dark-box"}
        >
          <ModelContainer />
        </Box>
      </Box>
      {children}
      <Box mt={300} p={10}>
        <Heading
          textAlign={"center"}
          fontWeight={"normal"}
          as={"h3"}
          size={{ base: "xs", md: "xs" }}
          color={useColorModeValue("gray.500", "gray.400")}
        >
          <Text noOfLines={1}>
            © {new Date().getFullYear().toString()} - Fainner Ramírez.
          </Text>
          <Text noOfLines={1}>Todos los derechos reservados</Text>
        </Heading>
      </Box>
    </Box>
  );
};

export default Layout;
