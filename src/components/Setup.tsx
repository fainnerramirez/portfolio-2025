import {
  Box,
  Button,
  Stack,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { Iam } from "./iam";
import "../style/style.css";
import { ModelContainer } from "./model-container";
import { Name } from "./name";
import { TitleSection } from "./title-section";
import { IoIosArrowForward } from "react-icons/io";

export const Setup = () => {
  const { colorMode } = useColorMode();

  return (
    <Stack
      direction={{ base: "column", lg: "column" }}
      width={"40%"}
      display={"flex"}
      alignItems={"center"}
      margin={"auto"}
    >
      <Box
        width={600}
        height={400}
        className={colorMode === "light" ? "light-box" : "dark-box"}
        mt={10}
      >
        <ModelContainer />
      </Box>
      <Box mt={5}>
        <Iam />
      </Box>
      <Box display={"flex"} justifyContent={"start"} width={"100%"} mt={5}>
        <Name />
      </Box>
      <Box className="container-sections" width={"100%"} mt={5}>
        <Box>
          <Box className="section" display={"flex"} justifyContent={"start"}>
            <TitleSection title="Bio" />
          </Box>
          <Box className="text-section">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste
            necessitatibus tempore dicta itaque ea consequatur doloribus numquam
            expedita? Veniam ratione veritatis velit qui quisquam nesciunt
            accusantium. Aliquid, placeat voluptatibus. Eaque sapiente eum
            cupiditate repellat nulla quis deserunt eos odio, accusantium fugiat
            labore ipsum. Ducimus autem ex corrupti? Harum minus quisquam, sit
            aut amet temporibus necessitatibus eveniet, distinctio officia dolor
            mollitia quo at enim doloremque soluta aliquam incidunt fugit et
            quasi? Suscipit soluta nesciunt minima porro dolores repudiandae
            maiores dolor, iste, est similique delectus illum fugit magni
            aliquid assumenda odit sequi totam quisquam quam impedit
            praesentium. Aut recusandae dolorem cupiditate inventore!
          </Box>
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            mt={10}
          >
            <Button
              rightIcon={<IoIosArrowForward />}
              variant={"solid"}
              colorScheme="teal"
            >
              Proyectos
            </Button>
          </Box>
        </Box>
        <Box mt={5}>
          <Box className="section" display={"flex"} justifyContent={"start"}>
            <TitleSection title="Experiencia" />
          </Box>
          <Box className="text-section">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste
            necessitatibus tempore dicta itaque ea consequatur doloribus numquam
            expedita? Veniam ratione veritatis velit qui quisquam nesciunt
            accusantium. Aliquid, placeat voluptatibus. Eaque sapiente eum
            cupiditate repellat nulla quis deserunt eos odio, accusantium fugiat
            labore ipsum. Ducimus autem ex corrupti? Harum minus quisquam, sit
            aut amet temporibus necessitatibus eveniet, distinctio officia dolor
            mollitia quo at enim doloremque soluta aliquam incidunt fugit et
            quasi? Suscipit soluta nesciunt minima porro dolores repudiandae
            maiores dolor, iste, est similique delectus illum fugit magni
            aliquid assumenda odit sequi totam quisquam quam impedit
            praesentium. Aut recusandae dolorem cupiditate inventore!
          </Box>
        </Box>
        <Box mt={5}>
          <Box className="section" display={"flex"} justifyContent={"start"}>
            <TitleSection title="Redes Sociales" />
          </Box>
          <Box className="text-section">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste
            necessitatibus tempore dicta itaque ea consequatur doloribus numquam
            expedita? Veniam ratione veritatis velit qui quisquam nesciunt
            accusantium. Aliquid, placeat voluptatibus. Eaque sapiente eum
            cupiditate repellat nulla quis deserunt eos odio, accusantium fugiat
            labore ipsum. Ducimus autem ex corrupti? Harum minus quisquam, sit
            aut amet temporibus necessitatibus eveniet, distinctio officia dolor
            mollitia quo at enim doloremque soluta aliquam incidunt fugit et
            quasi? Suscipit soluta nesciunt minima porro dolores repudiandae
            maiores dolor, iste, est similique delectus illum fugit magni
            aliquid assumenda odit sequi totam quisquam quam impedit
            praesentium. Aut recusandae dolorem cupiditate inventore!
          </Box>
        </Box>
      </Box>
    </Stack>
  );
};
