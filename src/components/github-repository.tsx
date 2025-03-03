import { Box, Heading, Stack } from "@chakra-ui/react"
import { useFetchRepository } from "../custom/hooks/useFetchRepository";
import { useToast } from '@chakra-ui/react'
import { CustomSpinner } from "./custom-spinner";
import { GithubCard } from "./github-card";

export const GithubRepository = () => {
    const { response, loading, error } = useFetchRepository();
    const toast = useToast();

    if (error) {
        toast({
            title: '!Uppps! ha ocurrido un error',
            description: error,
            status: 'error',
            duration: 7000,
            isClosable: true,
        })
    }

    if (loading) {
        return (
            <CustomSpinner
                key={new Date().toLocaleDateString()}
                loading={loading}
                message="Cargando Repositorios"
            />
        )
    }

    return (
        <Box width={{ base: "100%", md: "100vw" }} display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"}>
            <Box>
                <Heading textAlign={"center"} p={10}>Mis Repositorios</Heading>
            </Box>
            <Stack
                direction={{ base: "column", md: "row" }}
                gap={{ base: 5, md: 10 }} flexWrap={"wrap"}
                justifyContent={"center"}
                alignItems={{ base: "center", md: "flex-start" }}
                width={"95%"}
                margin={"auto"}
            >
                {
                    response?.map((e, i) => { 
                        return (
                            <GithubCard
                                key={i}
                               {...e}
                            />
                        )
                    })
                }
            </Stack>
        </Box>
    )
}