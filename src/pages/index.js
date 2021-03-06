import * as React from "react";
import Layout from "../components/Layout";
import Bio from "../components/Bio";
import About from "../components/About";
import Hero from "../components/Hero";
import { 
  Container,
  Heading,
  Link,
  Button,
  VStack,
  StackDivider,
  Box
} from "@chakra-ui/react"
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"

const IndexPage = () => {
  return (
    <Layout>
      <Container
        pt={{base: "4em", md: "2em"}}
        pb="2em"
        maxW="container.lg"
      >
        <Hero/>
        <Heading 
          as="h2"
          textDecoration="underline"
          textDecorationColor="purple.600"
          paddingTop="1em"
          paddingBottom="1em"
        >About</Heading>
        <About/>
        <Heading 
          as="h2"
          textDecoration="underline"
          textDecorationColor="purple.600"
          paddingTop="1em"
          paddingBottom="1em"
        >Bio</Heading>
        <Bio/>
        <Heading 
          as="h2"
          textDecoration="underline"
          textDecorationColor="purple.600"
          paddingTop="1em"
          paddingBottom="1em"
        >Find me at</Heading>
        <Box>
        <VStack
          direction="column"
          divider={<StackDivider 
            borderColor='gray.300'
            width="100px" />}
          spacing={2}
          alignItems="flex-start"
        >
          <Button
            p={2}
            bg="purple.600"
            color="white"
            _hover={{
              bg: "purple.300",
              color: "black",
            }}
            leftIcon={<AiFillGithub />}
          ><Link href="https://github.com/hanhqvu">Github</Link></Button>
          <Button
            p={2}
            bg="purple.600"
            color="white"
            _hover={{
              bg: "purple.300",
              color: "black",
            }}
            leftIcon={<AiFillLinkedin />}
          ><Link href="https://www.linkedin.com/in/hanh-vu-7b496b1b0/">Linkedin</Link></Button>
        </VStack>
        </Box>
      </Container>
    </Layout>
  );
};

export default IndexPage;
