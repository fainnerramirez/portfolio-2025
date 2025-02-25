import {
  Avatar,
  Box,
  Heading,
  HStack,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import photo from "../assets/user.jpg";

export const Name: React.FC = () => {
  return (
    <HStack
      flexDir={{ base: "column", md: "row" }}
      width={"full"}
      display={"flex"}
      justifyContent={"space-evenly"}
      alignItems={"center"}
    >
      <Box>
        <Heading>Fainner Ramírez</Heading>
        <Text>Desarrollador de software</Text>
      </Box>
      <Box>
        <Wrap>
          <WrapItem>
            <Avatar size="2xl" name="Fainner Ramirez" src={photo} />
          </WrapItem>
        </Wrap>
      </Box>
    </HStack>
  );
};
