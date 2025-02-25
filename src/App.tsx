import { ChakraProvider } from "@chakra-ui/react";
import Layout from "./layout/layout";
import { RoutesApp } from "./routes/route-app";
import theme from "./utils/theme";

export const App: React.FC = () => {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <RoutesApp />
      </Layout>
    </ChakraProvider>
  );
};
