import * as React from "react";
import Layout from "../components/Layout";
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
        pt="60px"
        maxW="container.lg"
      >
        <Heading 
          as="h1"
          textDecoration="underline"
          textDecorationColor="purple.600"
        >About</Heading>
        <Heading 
          as="h1"
          textDecoration="underline"
          textDecorationColor="purple.600"
        >Bio</Heading>
        <Heading 
          as="h1"
          textDecoration="underline"
          textDecorationColor="purple.600"
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
