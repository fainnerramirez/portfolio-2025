import { Box, Heading, Text } from "@chakra-ui/react";

type Props = {
  title: string;
  subtitle?: string;
};

export const TitleSection: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <Box>
      <Heading
        borderWidth={5}
        borderColor={"blackAlpha.900"}
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
  );
};
