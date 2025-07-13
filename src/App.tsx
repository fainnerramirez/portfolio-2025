import { ChakraProvider } from "@chakra-ui/react";
import Layout from "./layout/layout";
import { RoutesApp } from "./routes/route-app";
import theme from "./utils/theme";
import { BrowserRouter } from "react-router-dom";

export const App: React.FC = () => {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Layout>
          <RoutesApp />
        </Layout>
      </BrowserRouter>
    </ChakraProvider>
  );
};
