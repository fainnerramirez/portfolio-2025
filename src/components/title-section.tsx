import { Box, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";

type Props = {
  title: string;
  subtitle?: string;
};

export const TitleSection: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -20, opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Box display={"flex"} justifyContent={"start"} mt={10}>
        <Heading
          borderWidth={5}
          borderColor={useColorModeValue("blackAlpha.900", "gray.600")}
          borderTop={"none"}
          borderLeft={"none"}
          borderRight={"none"}
          size={"lg"}
        >
          {title}
        </Heading>
        {subtitle && (
          <Text as="p" fontSize="md" color="gray.600">
            {subtitle}
          </Text>
        )}
      </Box>
    </motion.div>
  );
};
