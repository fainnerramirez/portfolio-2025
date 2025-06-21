import { Badge, Box, Button, Card, CardBody, CardFooter, CardHeader, Container, Heading, HStack, Image, Stack, Text, useColorModeValue, VStack } from "@chakra-ui/react"
import { ResponseGithub } from "../custom/hooks/useFetchRepository"
import { FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";
import { CiCalendar } from "react-icons/ci";
import { FaCode } from "react-icons/fa6";
import moment from "moment";
moment.locale("es");

export const GithubCard: React.FC<ResponseGithub> = (props) => {
    const { repo_avatar_url, repo_createAt, repo_description, repo_languages, repo_url, repo_name } = props;

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

        if(language.toLowerCase() === "java"){
            return "cyan";
        }
    }

    return (
        <Card key={repo_name} width={{ base: "95%", md: "18rem" }} height={"auto"}>
            <CardHeader display={"flex"} justifyContent={"space-between"} alignItems={"start"}>
                <VStack>
                    <Box display={"flex"} gap={2} alignItems={"center"}>
                        <Image src={repo_avatar_url} borderRadius={"50%"} width={35} height={35} />
                        <Box>
                            <Box display={"flex"} gap={1} justifyContent={"start"} alignItems={"center"}>
                                <Box>
                                    <CiCalendar />
                                </Box>
                                <Text fontSize={"sm"} color={"gray.400"}>{moment(repo_createAt).startOf('day').fromNow()}</Text>
                            </Box>
                        </Box>
                    </Box>
                </VStack>
                <Box width={30} height={30} borderRadius={"50%"}>
                    <FaGithub />
                </Box>
            </CardHeader>
            <CardBody>
                <Box mb={3}>
                    <Heading 
                        size={"md"} 
                        width={"90%"} 
                        textAlign={"center"} 
                        minWidth={"100%"}
                        noOfLines={1}
                        >{repo_name}</Heading>
                </Box>
                <Stack>
                    <Box bg={useColorModeValue("teal.100", "cyan.100")} p={5} borderRadius={5}>
                        <Text color="black" noOfLines={1}>{repo_description === null ? "Sin descripción" : repo_description}</Text>
                    </Box>
                    <HStack>
                        <Box>
                            <FaCode />
                        </Box>
                        <Container flexDir={"row"} gap={2} flexWrap={"wrap"}>
                            {
                                repo_languages.map((language, i) => {
                                    return (
                                        <Badge key={i} colorScheme={getColorLanguage(language)}>
                                            {language}
                                        </Badge>
                                    )
                                })
                            }
                        </Container>
                    </HStack>
                </Stack>
            </CardBody>
            <CardFooter display={"flex"} justifyContent={"center"}>
                <Button
                    colorScheme={useColorModeValue("teal", "cyan")}
                    rightIcon={<HiOutlineExternalLink />}
                    onClick={() => window.open(repo_url)}
                >
                    Ver en Github
                </Button>
            </CardFooter>
        </Card>
    )
}