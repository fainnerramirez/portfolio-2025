import { Box, Heading } from "@chakra-ui/react"
import { useFetchRepository } from "../custom/hooks/useFetcRepository";
import { useToast } from '@chakra-ui/react'
import { CustomSpinner } from "./custom-spinner";


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
            <CustomSpinner key={new Date().toLocaleDateString()} loading={loading} message="Cargando Repositorios" />
        )
    }

    console.log("response: ", response);

    return (
        <Box>
            <Heading>Github Repositroy</Heading>
            <ul>
                {
                    response?.map((e, i) => {
                        return (
                            <Box key={i}>
                                <li>
                                    <Heading>
                                        {e.nameRepository}
                                    </Heading>
                                </li>
                                <li>{e.createdAt}</li>
                                <li>{e.avatar_url}</li>
                            </Box>
                        )
                    })
                }
            </ul>
        </Box>
    )
}