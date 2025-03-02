import { Badge, Box, Button, Card, CardBody, CardFooter, CardHeader, Heading, HStack, Image, Stack, Text, useColorModeValue, VStack } from "@chakra-ui/react"
import { ResponseGithub } from "../custom/hooks/useFetchRepository"
import moment from "moment";
// @ts-ignore
import "moment/locale/es";
import { FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";
import { CiCalendar } from "react-icons/ci";
import { FaCode } from "react-icons/fa6";
moment.locale("es");

export const GithubCard: React.FC<ResponseGithub> = (props) => {
    const { nameRepository, avatar_url, createdAt, languages, description } = props;

    const getColorLanguage = (language: string) => {
        if (language.toLowerCase() === "javascript") {
            return "yellow";
        }
        if (language.toLowerCase() === "html") {
            return "red";
        }
        if (language.toLowerCase() === "css" || language.toLocaleLowerCase() === "typescript") {
            return "blue";
        }
        if (language.toLowerCase() === "c#") {
            return "purple";
        }

        if (language.toLowerCase() === "python") {
            return "green";
        }
    }

    return (
        <Card key={nameRepository} maxWidth={{ base: "95%", md: "18rem" }} height={"auto"}>
            <CardHeader display={"flex"} justifyContent={"space-between"} alignItems={"start"}>
                <VStack>
                    <Box display={"flex"} gap={2}>
                        <Image src={avatar_url} borderRadius={"50%"} width={30} height={30} />
                        <Box >
                            <Heading size={"md"} width={"90%"}>{nameRepository}</Heading>
                            <Box display={"flex"} gap={1} justifyContent={"start"} alignItems={"center"}>
                                <Box>
                                    <CiCalendar />
                                </Box>
                                <Text fontSize={"sm"} color={"gray.400"}>{moment(createdAt).startOf('day').fromNow()}</Text>
                            </Box>
                        </Box>
                    </Box>
                </VStack>
                <Box width={30} height={30} borderRadius={"50%"}>
                    <FaGithub />
                </Box>
            </CardHeader>
            <CardBody>
                <Stack>
                    <Box bg={useColorModeValue("teal.100", "cyan.100")} p={5} borderRadius={5}>
                        <Text color="black">{description === null ? "Sin descripción" : description}</Text>
                    </Box>
                    <HStack>
                        <Box>
                            <FaCode />
                        </Box>
                        <Stack direction={"row"} gap={2} wrap={"wrap"}>
                            {
                                languages.map((language, i) => {
                                    return (
                                        <Badge key={i} colorScheme={getColorLanguage(language)}>
                                            {language}
                                        </Badge>
                                    )
                                })
                            }
                        </Stack>
                    </HStack>
                </Stack>
            </CardBody>
            <CardFooter display={"flex"} justifyContent={"end"}>
                <Button colorScheme={useColorModeValue("teal", "cyan")} rightIcon={<HiOutlineExternalLink />}>Ver en Github</Button>
            </CardFooter>
        </Card>
    )
}