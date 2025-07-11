import { Card, CardBody, Heading, Image, Stack, Text, useColorModeValue } from "@chakra-ui/react";

export type ProjectProps = {
    title: string,
    content: string
    imageSrc: string,
    demoUrl: string
}

export const Project: React.FC<ProjectProps> = ({ imageSrc, title, content, demoUrl }) => {
    return (
        <Card
            as="button"
            maxW='xs'
            m={2}
            bg={useColorModeValue("rgb(240, 231, 219)", "gray.800")}
            _hover={{
                bg: useColorModeValue("rgba(240, 231, 219, 0.5)", "gray.700")
            }}
            onClick={() => window.open(demoUrl)}>
            <CardBody>
                <Image
                    src={imageSrc}
                    alt={title}
                    borderRadius='lg'
                />
                <Stack
                    borderRadius={'md'}
                    p={2}
                    mt='6'
                    spacing='3'
                    color={useColorModeValue("#000000", "#FFFFFF")}>
                    <Heading size='md'>{title}</Heading>
                    <Text textAlign={"left"}>
                        {content}
                    </Text>
                </Stack>
            </CardBody>
        </Card>
    )
}