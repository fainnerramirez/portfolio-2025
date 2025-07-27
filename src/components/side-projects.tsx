import { Container } from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import ChakraUIChartsImage from "../assets/projects/chakrauicharts.png";
import ChatifyImage from "../assets/projects/chatify.png";
import ColorSnatchImage from "../assets/projects/colorsnatch.png";
import SQLMindCLIImage from "../assets/projects/sqlmind-cli.png";
import SQLmindImage from "../assets/projects/sqlmind.png";
import { Project, ProjectProps } from "./project";

const dataProjects: ProjectProps[] = [
    {
        title: "Color Snatch",
        content: "Extensión de google chrome para obtener el color de cualquier texto en las páginas web",
        imageSrc: ColorSnatchImage,
        demoUrl: "https://www.linkedin.com/posts/activity-7314857929046712320-Uhlr?utm_source=share&utm_medium=member_desktop&rcm=ACoAADf8rp4BVBMEawcWEChYg0iPLDCSCZDhl8Y"
    },
    {
        title: "Chakra + Recharts",
        content: "Combinación de las libreria de Chakra UI y de gráficas Recharts para proyectos React Open Source",
        imageSrc: ChakraUIChartsImage,
        demoUrl: "https://chakraui-charts.vercel.app/"
    },
    {
        title: "SQL Mind",
        content: "Escribe lo que quieres en lenguaje natural y te lo devuelve en el lenguaje de consulta de SQL",
        imageSrc: SQLmindImage,
        demoUrl: "https://sqlmind.vercel.app/"
    },
    {
        title: "Chatify",
        content: "Chat minimalista que ofrece respuestas personalidas desarrollado con IA",
        imageSrc: ChatifyImage,
        demoUrl: "https://www.linkedin.com/posts/activity-7329652380084432896-J4vO?utm_source=share&utm_medium=member_desktop&rcm=ACoAADf8rp4BVBMEawcWEChYg0iPLDCSCZDhl8Y"
    },
    {
        title: "Sqlmind CLI",
        content: "Herramienta de terminal para genera consultas sql a partir del lenguaje natural",
        imageSrc: SQLMindCLIImage,
        demoUrl: "https://www.linkedin.com/posts/activity-7355346335778185216-6X9u?utm_source=share&utm_medium=member_desktop&rcm=ACoAADf8rp4BVBMEawcWEChYg0iPLDCSCZDhl8Y"
    }
]

export const SideProjects = () => {
    return (
        <Container
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            flexWrap={"wrap"}
            gap={5}
            maxWidth={"3xl"}
        >
            <Helmet>
                <meta charSet="utf-8" />
                <title>Fainner Ramirez - Proyectos</title>
            </Helmet>
            {
                dataProjects.map((project) => <Project {...project} />)
            }
        </Container>
    )
}