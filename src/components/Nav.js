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
  const { colorMode, toggleColorMode } = useColorMode();
  return colorMode === "light" ? <MoonIcon /> : <SunIcon />;
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
        maxW="container.md"
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
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
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
            <GatsbyLink>Source</GatsbyLink>
          </Button>
          <Button onClick={toggleColorMode}>
            <ThemeIcon />
          </Button>
        </Stack>

        <Box flex={1} align="right">
          <Box mr={2} display={{ base: "inline-block", md: "none" }}>
            <Button onClick={toggleColorMode} mr={2}>
              <ThemeIcon />
            </Button>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <GatsbyLink to="/" passHref>
                  <MenuItem as={Link}>Home</MenuItem>
                </GatsbyLink>
                <GatsbyLink to="/projects" passHref>
                  <MenuItem as={Link}>Projects</MenuItem>
                </GatsbyLink>
                <MenuItem>Source</MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
