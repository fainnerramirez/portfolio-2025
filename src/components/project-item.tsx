import { Card, CardBody, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { Project } from "../pages/projects-page";

type Props = {
  item: Project;
};

export const ProjectItem: React.FC<Props> = ({ item }) => {
  return (
    <Card maxW={"xs"} bg={"transparent"} variant={"unstyled"}>
      <CardBody>
        <Image
          src={item.image}
          alt="Imagen de proyecto"
          borderRadius="lg"
          width="100%"
          height="170"
          objectFit="cover"
        />
        <Stack mt="3" spacing="1" p={4}>
          <Heading size="md" textAlign={"center"}>
            {item.title}
          </Heading>
          <Text>{item.description}</Text>
        </Stack>
      </CardBody>
    </Card>
  );
};
