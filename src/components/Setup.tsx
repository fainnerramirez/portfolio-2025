import {
  Box,
  Button,
  Link,
  Stack,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { motion } from "motion/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import "../style/style.css";
import { Experience } from "./Experience";
import { Iam } from "./iam";
import { Name } from "./name";
import { Section } from "./section";
import { TitleSection } from "./title-section";

const dataExperience = [
  {
    year: "Junio 2021 a Junio 2023",
    description: "Frontend Developer",
    link: {
      text: "Dolphing Ingeniería SAS",
      href: "https://dolphining.com/",
    },
  },
  {
    year: "Agosto 2023 - Enero 2025",
    description: "FullStack Developer",
    link: {
      text: "Godoy Cordoba Abogados SAS",
      href: "https://godoycordoba.com/",
    },
  },
  {
    year: "Febrero 2025 - Actualidad",
    description: "Frontend Developer Specialist",
    link: {
      text: "Dentsu Creative",
      href: "https://www.dentsucreative.com/es",
    },
  },
];

const socialNetworks = [
  {
    icon: <FaLinkedin />,
    link: {
      text: "@fainnerramirez",
      href: "https://www.linkedin.com/in/fainnerramirez/",
    },
  },
  {
    icon: <FaGithub />,
    link: {
      text: "@fainnerramirez",
      href: "https://github.com/fainnerramirez",
    },
  },
  {
    icon: <FaTwitter />,
    link: {
      text: "@FainnerR",
      href: "https://x.com/FainnerR",
    },
  },
];

export const Setup = () => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -20, opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Stack
        direction={{ base: "column", lg: "column" }}
        width={{ base: "100%", md: "40%" }}
        display={"flex"}
        alignItems={"center"}
        margin={"auto"}
      >
        <Box mt={5}>
          <Iam />
        </Box>
        <Box display={"flex"} justifyContent={"start"} width={"100%"} mt={5}>
          <Name />
        </Box>
        <Box
          className="container-sections"
          width={{ base: "90%", md: "100%" }}
          mt={5}
        >
          <Box>
            <TitleSection title="Bio" />
            <Section>
              Soy estudiante de ing. de software y desarrollador de software con
              más de 3 años de experiencia, especializado en el desarrollo de
              soluciones web innovadoras y escalables. A lo largo de mi carrera,
              he trabajado con tecnologías punteras como:{" "}
              <Text display={"flex"} gap={1}>
                <Text textColor={useColorModeValue("blue.400", "pink.400")}>
                  TypeScript,
                </Text>
                <Text textColor={useColorModeValue("blue.400", "pink.400")}>
                  React.js,
                </Text>
                <Text textColor={useColorModeValue("blue.400", "pink.400")}>
                  Vue.js,
                </Text>{" "}
                <Text textColor={useColorModeValue("blue.400", "pink.400")}>
                  .NET,
                </Text>
                entre otras.
              </Text>
              Lo que me ha permitido enfrentar proyectos desafiantes en
              diferentes sectores. Mi experiencia incluye trabajar con empresas
              de diversas industrias, como hidrocarburos y servicios de
              abogacía, donde he colaborado estrechamente con equipos
              multidisciplinarios para desarrollar aplicaciones a medida que
              mejoran la eficiencia y productividad de los clientes. Con un
              enfoque en la mejora continua y el aprendizaje de nuevas
              tecnologías, me apasiona encontrar soluciones tecnológicas que
              generen un impacto positivo en los negocios. Busco seguir
              ampliando mis horizontes y aportar mi experiencia a proyectos
              innovadores que resuelvan problemas reales.
            </Section>

            {/* <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              mt={10}
            >
              <Button
                rightIcon={<IoIosArrowForward />}
                variant={"solid"}
                colorScheme={useColorModeValue("teal", "cyan")}
              >
                Proyectos
              </Button>
            </Box> */}
          </Box>
          <Box>
            <TitleSection title="Experiencia" />
            <Section>
              <Experience data={dataExperience} />
            </Section>
          </Box>
          <Box>
            <TitleSection title="Redes Sociales" />
            <Section>
              <VStack spacing={3} align={"flex-start"}>
                {socialNetworks.map((item) => {
                  return (
                    <Link
                      href={item.link.href}
                      isExternal
                      textDecoration={"none"}
                    >
                      <Button
                        leftIcon={item.icon}
                        colorScheme={useColorModeValue("teal", "cyan")}
                        variant={"ghost"}
                        border={"none"}
                      >
                        {item.link.text}
                      </Button>
                    </Link>
                  );
                })}
              </VStack>
            </Section>
          </Box>
        </Box>
      </Stack>
    </motion.div>
  );
};
