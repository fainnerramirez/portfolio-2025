import { ChakraProvider } from "@chakra-ui/react";
import HomePage from "./pages/home-page";
import theme from "./utils/theme";
import Layout from "./layout/layout";

export const App: React.FC = () => {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <HomePage />
      </Layout>
    </ChakraProvider>
  );
};
