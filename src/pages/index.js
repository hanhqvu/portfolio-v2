import * as React from "react";
import Layout from "../components/Layout";
import { Container, Heading } from "@chakra-ui/react"

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
        >Projects</Heading>
      </Container>
      
    </Layout>
  );
};

export default IndexPage;
