import { Box, Spinner, Text, useColorModeValue } from "@chakra-ui/react"

type Props = {
    loading: boolean,
    message?: string
}

export const CustomSpinner: React.FC<Props> = ({ loading, message }) => {
    return (
        <Box width={"100%"} height={"100%"} display={"flex"} justifyContent={"center"} alignItems={"center"} flexDir={"column"}>
            {
                loading && (<Spinner color={useColorModeValue("teal", "cyan")} display={"grid"} justifyContent={"center"}/>)
            }
            {
                message && <Text mt={2} textAlign={"center"}>{message}</Text>
            }
        </Box>
    )
}