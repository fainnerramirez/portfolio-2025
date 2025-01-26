import { Button, Heading, useColorModeValue, VStack } from "@chakra-ui/react";

export const NotFoundPage: React.FC = () => {

    const gotToHome = () => {
        window.location.href = "/";
    }

    return (
        <VStack display={"flex"} justifyContent={"center"} alignItems={"center"} spacing={5}>
            <Heading>
                Página no encontrada
            </Heading>    
            <Button 
                variant={"solid"} 
                colorScheme={useColorModeValue("teal", "cyan")}
                onClick={gotToHome}
            >
                Ir a página principal
            </Button>
        </VStack>
    )
}