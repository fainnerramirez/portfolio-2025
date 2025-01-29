import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  HStack,
  Link,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { MdOutlineWorkOutline } from "react-icons/md";
type Props = {
  year: string;
  description: string;
  link: {
    href: string;
    text: string;
  };
};

type Experiences = {
  data: Array<Props>;
};

export const Experience: React.FC<Experiences> = ({ data }) => {
  return (
    <Stack mt={5}>
      <List>
        {data.map((item) => {
          return (
            <ListItem
              key={item.year}
              display={"flex"}
              flexDir={"row"}
              alignItems={"center"}
            >
              <Stack
                direction={{ base: "column", md: "row" }}
                mt={{ base: 4, md: 0 }}
              >
                <HStack spacing={{ base: 1, md: 2 }}>
                  <ListIcon as={MdOutlineWorkOutline} />
                  <Text fontWeight={"bold"}>{item.year}</Text>
                </HStack>
                <Text> </Text>
                <Text>{item.description}</Text>
                <Text>
                  <Link
                    href={item.link.href}
                    isExternal
                    _hover={{
                      color: useColorModeValue("teal", "cyan"),
                    }}
                  >
                    {item.link.text} <ExternalLinkIcon mx="2px" />
                  </Link>
                </Text>
              </Stack>
            </ListItem>
          );
        })}
      </List>
    </Stack>
  );
};
