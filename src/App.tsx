import { ChakraProvider } from "@chakra-ui/react";
import theme from "./utils/theme";
import Layout from "./layout/layout";
import { RoutesApp } from "./routes/route-app";

export const App: React.FC = () => {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <RoutesApp />
      </Layout>
    </ChakraProvider>
  );
};
