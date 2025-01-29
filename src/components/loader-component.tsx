import { Center, Spinner, useColorModeValue } from "@chakra-ui/react";
import React from "react";

type Props = {
  isLoading: boolean;
};

export const LoaderComponent: React.FC<Props> = ({ isLoading }) => {
  const [loading] = React.useState(isLoading);

  return (
    <Center width={"100%"} height={"100%"}>
      {loading && (
        <Spinner size={"xl"} color={useColorModeValue("teal", "cyan")} />
      )}
    </Center>
  );
};
