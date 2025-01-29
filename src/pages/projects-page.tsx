import { Container, Flex } from "@chakra-ui/react";
import { ProjectItem } from "../components/project-item";
import { TitleSection } from "../components/title-section";

import { motion } from "motion/react";
import testImage from "../assets/works/test.avif";

export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Chakra UI Charts",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    image: testImage,
  },
  {
    id: 2,
    title: "Proyecto 2",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    image: testImage,
  },
  {
    id: 3,
    title: "Proyecto 3",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    image: testImage,
  },
  {
    id: 4,
    title: "Proyecto 4",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    image: testImage,
  },
  {
    id: 5,
    title: "Proyecto 5",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    image: testImage,
  },
  {
    id: 6,
    title: "Proyecto 6",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    image: testImage,
  },
];

const ProjectsPage = () => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -20, opacity: 0 }}
      transition={{ duration: 1 }}
      style={{ marginTop: 10, padding: "10px" }}
    >
      <Container maxW={"container.md"}>
        <TitleSection title="Proyectos"></TitleSection>
        <Flex
          mt="5"
          gap={5}
          flexWrap={"wrap"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          {projects.map((project) => {
            return <ProjectItem item={project} />;
          })}
        </Flex>
      </Container>
    </motion.div>
  );
};

export default ProjectsPage;
