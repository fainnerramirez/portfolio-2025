import {
  Box,
  Button,
  Link,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { Iam } from "./iam";
import "../style/style.css";
import { ModelContainer } from "./model-container";
import { Name } from "./name";
import { TitleSection } from "./title-section";
import { IoIosArrowForward } from "react-icons/io";
import { Experience } from "./Experience";
import { Section } from "./section";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { ExternalLinkIcon } from "@chakra-ui/icons";

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
    year: "Agosto 2023 - Actualidad",
    description: "FullStack Developer",
    link: {
      text: "Godoy Cordoba Abogados SAS",
      href: "https://godoycordoba.com/",
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
  const { colorMode } = useColorMode();

  return (
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
            Soy un desarrollador de software con más de 3 años de experiencia,
            especializado en el desarrollo de soluciones web innovadoras y
            escalables. A lo largo de mi carrera, he trabajado con tecnologías
            punteras como:{" "}
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
            Lo que me ha permitido enfrentar proyectos desafiantes en diferentes
            sectores. Mi experiencia incluye trabajar con empresas de diversas
            industrias, como hidrocarburos y servicios de abogacía, donde he
            colaborado estrechamente con equipos multidisciplinarios para
            desarrollar aplicaciones a medida que mejoran la eficiencia y
            productividad de los clientes. Con un enfoque en la mejora continua
            y el aprendizaje de nuevas tecnologías, me apasiona encontrar
            soluciones tecnológicas que generen un impacto positivo en los
            negocios. Busco seguir ampliando mis horizontes y aportar mi
            experiencia a proyectos innovadores que resuelvan problemas reales.
          </Section>

          <Box
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
          </Box>
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
  );
};
