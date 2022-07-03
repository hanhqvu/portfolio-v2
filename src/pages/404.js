import * as React from "react";
import { Link } from "gatsby";
import { Image } from "@chakra-ui/react";
import Layout from "../components/Layout";

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

// markup
const NotFoundPage = () => {
  return (
    <Layout>
      <main style={pageStyles}>
        <title>Not found</title>
        <h1 style={headingStyles}>Page not found</h1>
        <Image src="/404.jpg" alt="Page not found illustration" />
      </main>
    </Layout>
  );
};

export default NotFoundPage;
