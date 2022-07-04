import * as React from "react";
import {
    Box,
    Flex,
    Text,
} from "@chakra-ui/react"
import styled from "styled-components";

const TypeText = styled.p`
    font-size: 2rem;
    overflow: hidden; /* Ensures the content is not revealed until the animation */
    border-right: .15em solid purple; /* The typwriter cursor */
    white-space: nowrap; /* Keeps the content on a single line */
    margin: 0 auto; /* Gives that scrolling effect as the typing happens */
    letter-spacing: .15em; /* Adjust as needed */
    animation: 
        typing 3.5s steps(50, end),
        blink-caret .75s step-end ;

    @keyframes typing {
        from { width: 0 }
        to { width: 70% }
    }

    @keyframes blink-caret {
        from, to { border-color: transparent }
        30% { border-color: purple; }
      }
`

function About() {
  return (
    <Flex
        justifyContent="center"
        alignContent="left"
    >
        <TypeText>
        Hi! I'm Hanh Vu, an aspiring developer
        </TypeText>
    </Flex>
  )
}

export default About