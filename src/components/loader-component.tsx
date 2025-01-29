import { Center, Spinner, useColorModeValue } from "@chakra-ui/react";
import React from "react";

type Props = {
  isLoading: boolean;
  size: "xs" | "sm" | "md" | "lg" | "xl";
};

export const LoaderComponent: React.FC<Props> = ({ isLoading, size }) => {
  const [loading] = React.useState(isLoading);

  return (
    <Center width={"100%"} height={"100%"}>
      {loading && (
        <Spinner size={size} color={useColorModeValue("teal", "cyan")} />
      )}
    </Center>
  );
};
