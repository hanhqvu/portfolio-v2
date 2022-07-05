import * as React from "react";
import {
    Box,
    Text,
    Center,
    Image,
    SimpleGrid,
    List,
    ListIcon,
    ListItem
} from "@chakra-ui/react"
import { SiReact, SiGatsby, SiJavascript, SiGraphql, SiPostgresql, SiStyledcomponents } from "react-icons/si"

function About() {
  return (
    <>
        <SimpleGrid 
            columns={{
                base: 1,
                md: 2,
            }}
            spacing={10}
        >
            <Box w="100%">
                <Box>
                    <Text>
                        Hello again! You alrealy now my name and you can address me as Hanh.
                        I have always been interested in tech,
                        especially how people make the cool tools and apps I use everyday.<br/><br/>

                        However, I wasn't interested in programming
                        or think that it would be something I can do.
                        It started out as writing simple automation scripts in Excel
                        and blossomed into enrolling at my current bootcamp.<br/><br/>

                        I love learning about new technologies and
                        putting it into practice with my experiments.
                        Below are some of the technologies I'm familiar with
                        but I'm always ready to learn and grow.<br/><br/>
                    </Text>
                    <SimpleGrid columns="2">
                        <Box>
                            <List spacing={2}>
                                <ListItem>
                                    <ListIcon as={SiReact} color="#61dafb"/>
                                    React
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={SiGatsby} color="#663399"/>
                                    Gatsby
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={SiJavascript} color="#F0DB4F"/>
                                    Javascript
                                </ListItem>
                            </List>
                        </Box>
                        <Box>
                        <List spacing={2}>
                                <ListItem>
                                    <ListIcon as={SiGraphql} color="#E10098"/>
                                    GraphQL
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={SiPostgresql} color="#336791"/>
                                    PostgreSQL
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={SiStyledcomponents} color="pink.700"/>
                                    Styled-components
                                </ListItem>
                            </List>
                        </Box>
                    </SimpleGrid>
                    
                </Box>
            </Box>
            <Center w="100%">
                <Image
                    src="/profile.jpeg"
                    alt="Hanh Vu"
                    h="20em"
                    borderRadius="full"
                    loading="lazy"
                ></Image>
            </Center>
        </SimpleGrid>
    </>
  )
}

export default About