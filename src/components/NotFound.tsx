import { Button, Heading, useColorModeValue, VStack } from "@chakra-ui/react";

export const NotFoundPage: React.FC = () => {
  const goToHome = () => {
    window.location.href = "/";
  };

  return (
    <VStack
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      spacing={5}
    >
      <Heading>Página no encontrada</Heading>
      <Button
        variant={"solid"}
        colorScheme={useColorModeValue("teal", "cyan")}
        onClick={goToHome}
      >
        Ir a página principal
      </Button>
    </VStack>
  );
};
