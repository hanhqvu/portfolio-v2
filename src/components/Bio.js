import * as React from "react";
import {
    Box,
    Container,
    Heading,
    Tabs,
    Tab,
    TabPanels,
    TabPanel,
    TabList,
    Text,
} from "@chakra-ui/react"

export default function Bio() {
  return (
    <Container
        width={{base: "100%", }}
    >
        <Box
        pt={5}
        pb={5}
        >
            <Heading
                as="h2"
                size="md"
                textDecoration="underline"
                pb={2}
            >Education</Heading>
            <Tabs
                align="left"
                isLazy
                orientation="vertical"
                size="lg"
            >
                <TabList>
                    <Tab>Ritsumeikan Asia Pacific University</Tab>
                    <Tab>Code Chrysalis</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <Text>Bachelor of Art in Business Adminstration</Text>
                        <Text>April 2014 - March 2018</Text>
                    </TabPanel>
                    <TabPanel>
                        <Text>Full-stack Devoloper Part-time Immersive Bootcamp</Text>
                        <Text>April 2022 - October 2022</Text>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
        <Heading
            as="h2"
            size="md"
            textDecoration="underline"
            pb={2}
        >Work Experience</Heading>
        <Tabs
            align="left"
            isLazy
            orientation="vertical"
            size="lg"
        >
            <TabList>
                <Tab>Wancher Inc</Tab>
               
            </TabList>

            <TabPanels>
                <TabPanel>
                    <Text>Customer Service & Inventory Management</Text>
                    <Text>June 2018 - Present</Text>
                </TabPanel>
                
            </TabPanels>
        </Tabs>
    </Container>
  )
}
