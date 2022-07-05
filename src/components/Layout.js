import React from "react";
import Nav from "./Nav";
import { Text } from "@chakra-ui/react";

export default function Layout({ children }) {
  return (
    <div className="Layout">
      <header>
        <Nav />
      </header>
      <main className="content">{children}</main>
      <footer>
        <Text
          align="center"
          pb="2em"
        >Designed & Built by Hanh Vu</Text>
      </footer>
    </div>
  );
}
