import * as React from "react";
import { Link as GatsbyLink } from "gatsby";
import {
  Container,
  Box,
  Button,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react";
import { HamburgerIcon, SunIcon, MoonIcon } from "@chakra-ui/icons";
import { AiFillGithub } from "react-icons/ai";

const ThemeIcon = () => {
  const { colorMode } = useColorMode();
  return colorMode === "light" ? <MoonIcon/>: <SunIcon/>;
};

const Navbar = () => {
  const { toggleColorMode } = useColorMode();
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue("#ffffff40", "#20202380")}
      css={{ backdropFilter: "blur(10px)" }}
      zIndex={2}
      boxShadow="lg"
    >
      <Container
        display="flex"
        p={2}
        maxW="container.lg"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={"tighter"}>
            Hanh Vu
          </Heading>
        </Flex>

        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", lg: "flex" }}
          width={{ base: "full", lg: "auto" }}
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
          justifyContent="flex-end"
        >
          <Button
            p={2}
            bg="purple.600"
            color="white"
            _hover={{
              bg: "purple.300",
              color: "black",
            }}
            as={Link}
          >
            <GatsbyLink to="/">Home</GatsbyLink>
          </Button>
          <Button
            p={2}
            bg="purple.600"
            color="white"
            _hover={{
              bg: "purple.300",
              color: "black",
            }}
            as={Link}
          >
            <GatsbyLink to="/projects">Projects</GatsbyLink>
          </Button>
          <Button
            p={2}
            bg="purple.600"
            color="white"
            _hover={{
              bg: "purple.300",
              color: "black",
            }}
            leftIcon={<AiFillGithub />}
            as={Link}
          >
            <Link href="https://github.com/hanhqvu/portfolio-v2">Source</Link>
          </Button>
          <Button
            onClick={toggleColorMode}
            bg={useColorModeValue("gray.600","orange.600")}
              color={useColorModeValue("white", "black")}
              _hover={{
                bg: useColorModeValue("gray.400","orange.400"),
                color: useColorModeValue("black", "white")
              }}
          >
            <ThemeIcon />
          </Button>
        </Stack>

        <Box flex={1} align="right">
          <Box mr={2} display={{ base: "inline-block", lg: "none" }}>
            <Button 
              onClick={toggleColorMode}
              bg={useColorModeValue("gray.600","orange.600")}
              color={useColorModeValue("white", "black")}
              _hover={{
                bg: useColorModeValue("gray.400","orange.400"),
                color: useColorModeValue("black", "white")
              }}
              mr={2}
            >
              <ThemeIcon />
            </Button>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                p={2}
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
                bg="purple.600"
                color="white"
                _hover={{
                  bg: "purple.300",
                  color: "black",
                }}
              />
              <MenuList>
                <GatsbyLink to="/" passHref>
                  <MenuItem
                    as={Link}
                    _hover={{
                      bg: "purple.600",
                      color: "white",
                    }}  
                  >Home</MenuItem>
                </GatsbyLink>
                <GatsbyLink to="/projects" passHref>
                  <MenuItem
                    as={Link}
                    _hover={{
                      bg: "purple.600",
                      color: "white",
                    }}  
                  >Projects</MenuItem>
                </GatsbyLink>
                <MenuItem
                    href="https://github.com/hanhqvu/portfolio-v2"
                    as={Link}
                    _hover={{
                      bg: "purple.600",
                      color: "white",
                    }}
                >Source</MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
