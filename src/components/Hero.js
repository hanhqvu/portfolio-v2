import * as React from "react"
import styled from "styled-components";
import { Box, VStack, Show } from "@chakra-ui/react";
import { ArrowDownIcon } from "@chakra-ui/icons";

const TypeText = styled.p`
    overflow: hidden;
    border-right: .15em solid purple;
    white-space: nowrap;
    margin: 0 auto;
    letter-spacing: .15em;
    animation: 
        typing 3s steps(50, end),
        blink-caret .5s step-end ;

    @keyframes typing {
        from { width: 0 }
        to { width: 100% }
    }

    @keyframes blink-caret {
        from, to { border-color: transparent }
        30% { border-color: purple; }
    }
`
const FadeText = styled.p`
    -webkit-animation: 4s ease 0s normal forwards 1 fadein;
    animation: 4s ease 0s normal forwards 1 fadein;

    @keyframes fadein{
        0% { opacity:0; }
        66% { opacity:0; }
        100% { opacity:1; }
    }
    
    @-webkit-keyframes fadein{
        0% { opacity:0; }
        66% { opacity:0; }
        100% { opacity:1; }
    }    
`

export default function Hero() {
  return (
        <VStack
            width={{
                base: "100%",
                md: "-moz-fit-content",
                md: "-webkit-fit-content",
                lg: "-moz-fit-content",
                lg: "-webkit-fit-content"
            }}
            height={{
                base: "50vh",
                md: "50vh",
                lg: "70vh"
            }}
            align="left"
            justifyContent="center"
        >
            <Box
                fontSize={{
                    base: "2xl",
                    md: "3xl",
                    lg: "4xl"
                }}
                maxW="100%"
            >
                <TypeText>
                Hi! I'm Hanh Vu, <Show below="sm"><br/></Show> an aspiring developer
                </TypeText>
            </Box>
            <Box
                fontSize={{
                    base: "md",
                    md: "xl",
                }}
                maxW="md"
            >
                <FadeText>
                    I'm currently a student at a full-stack developer bootcamp.
                    I'm interested in building customer-centric tools and products.
                </FadeText>
                <FadeText>
                    <ArrowDownIcon color="purple.600"/> Scroll down to learn more about me!
                </FadeText>
            </Box>
        </VStack>
  )
}