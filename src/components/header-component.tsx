import {
  ChevronRightIcon,
  CloseIcon,
  HamburgerIcon,
} from "@chakra-ui/icons";
import {
  Center,
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Text,
  useBreakpointValue,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { IoSunnyOutline } from "react-icons/io5";
import { LuSunMoon } from "react-icons/lu";
import { SiOpenai } from "react-icons/si";
import "../style/style.css";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      bg={useColorModeValue("rgb(240, 231, 219)", "transparent")}
      color={useColorModeValue("gray.600", "rgb(240, 231, 219)")}
    >
      <Flex
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        alignItems={"center"}
      >
        <Flex flex={{ base: 1 }} justify={{ base: "start", md: "start" }}>
          <HStack display={"flex"} alignItems={"center"}>
            <Button
              bg={"trasnparent"}
              pointerEvents={"none"}
              size={{ base: "md" }}
              p={0}
              m={0}
            >
              <SiOpenai size={"md"} />
            </Button>
            <Heading
              textAlign={useBreakpointValue({ base: "center", md: "left" })}
              fontWeight={600}
              color={useColorModeValue("gray.800", "white")}
              fontSize={{ base: "sm", md: "md", lg: "xl" }}
              noOfLines={1}
              as="a"
              href="/"
              _hover={{
                color: "teal.400",
              }}
            >
              Fainner Ramírez
            </Heading>
          </HStack>

          <Flex
            display={{ base: "none", md: "flex" }}
            ml={10}
            alignItems={"center"}
          >
            <DesktopNav />
          </Flex>
        </Flex>

        <HStack justify={"end"} direction={"row"} spacing={1}>
          <Button
            border={"none"}
            size={"md"}
            bg={colorMode === "light" ? "purple.500" : "#FBD38D"}
            color={colorMode === "light" ? "white" : "black"}
            onClick={toggleColorMode}
            _hover={{
              bg: colorMode === "light" ? "purple.500" : "yellow.500",
              color: colorMode === "light" ? "white" : "gray.800",
            }}
            _focus={{
              outline: "none",
              boxShadow: "none",
            }}
          >
            {colorMode === "light" ? (
              <IoSunnyOutline fontSize={20} />
            ) : (
              <LuSunMoon fontSize={20} />
            )}
          </Button>

          <Flex flex={{ base: 1, md: "auto" }} display={{ base: "block" }} p={2}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <IconButton
                  bg={"#A16D28"}
                  color={"#FFFFFF"}
                  size={'md'}
                  icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                  aria-label={'Open Menu'}
                  display={{ md: 'none' }}
                  onClick={isOpen ? onClose : onOpen}
                />
              </MenuButton>
              <MenuList bg={"#D2C1B6"}>
                {
                  NAV_ITEMS.map((navItem) => <MenuItem bg={"#D2C1B6"} color={"#000"} as="a"
                    href={navItem.href}
                    p={2}
                    fontSize={"sm"}
                    fontWeight={500}
                  // color={linkColor}
                  // _hover={{
                  //   textDecoration: "none",
                  //   color: linkHoverColor,
                  // }}
                  >
                    {navItem.label}
                  </MenuItem>)
                }
                <MenuDivider />
                <MenuItem bg={"#D2C1B6"}>
                  <Center>@faidev</Center>
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </HStack>
      </Flex>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Box
                as="a"
                href={navItem.href}
                p={2}
                fontSize={"sm"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Box>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Box
      as="a"
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Box>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Proyectos",
    href: "#"
  },
  {
    label: "Repositorios",
    href: "/repository"
  }
];