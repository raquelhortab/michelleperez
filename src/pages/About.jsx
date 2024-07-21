import React from "react";
import { Table, Tbody, Tr, Td, TableContainer, Heading, Box, Text, Stack } from '@chakra-ui/react';
import Headline from "../components/Headline";
import TitlePages from "../components/TitlePages";

export default function About() {
  return (
    <Box p={1} boxShadow="lg" borderRadius="md">
      <Headline title="About Me" />
      <TitlePages title="Hi, I'm Michelle Pérez" />
     <Heading as='h2' size='xl'>Junior Software Developer</Heading>
      <Heading p={1} as="h4" size="md">Professional Profile</Heading>
      <Text p={1}>
        Self-taught software engineer in training with notable participation in hackathons. I have demonstrated exceptional skills in developing innovative solutions and hold certifications from leading platforms. Passionate about data science and data analysis, I am always seeking to explore new frontiers in this constantly evolving field.
      </Text>
      
      <Heading p={2} as="h4" size="md">My Education</Heading>
      <TableContainer>
        <Table variant='simple'>
          <Tbody>
            <Tr>
              <Td>October 2020 - Present</Td>
              <Td>International University of La Rioja (UNIR)</Td>
              <Td>Computer Engineering</Td>
            </Tr>
            <Tr>
              <Td>2024</Td>
              <Td>Google Coursera</Td>
              <Td>
                <Stack>
                  <Text>Foundations: Data, Data, Everywhere</Text>
                  <Text>Data Analysis with Python</Text>
                </Stack>
              </Td>
            </Tr>
            <Tr>
              <Td>2021</Td>
              <Td>Platzi</Td>
              <Td>
                <Stack>
                  <Text>JavaScript</Text>
                  <Text>React</Text>
                </Stack>
              </Td>
            </Tr>
            <Tr>
              <Td>2020</Td>
              <Td>Platzi</Td>
              <Td>
                <Stack>
                  <Text>Python, Git and GitHub</Text>
                  <Text>Web Development</Text>
                </Stack>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
      
      <Heading p={3} as="h4" size="md">Work Experience</Heading>
      <TableContainer>
        <Table variant='simple'>
          <Tbody>
            <Tr>
              <Td>2021 - Present</Td>
              <Td>CODELEARN</Td>
              <Td>
              <Stack>
                  <Text>Programming Teacher(Python, Java, JavaScript</Text>
                  <Text>CSS, HTML, PHP, C++, SQL)</Text>
                </Stack></Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
      
      <Heading p={2} as="h4" size="md">Competitions</Heading>
      <TableContainer>
        <Table variant='simple'>
          <Tbody>
            <Tr>
              <Td>HACKEA LA CRISIS MUJERES + NIÑAS</Td>
              <Td>UNICEF, PNUD, IMPAQTO, BID</Td>
              <Td>
                <Stack>
                  <Text>Second place in the communication category</Text>
                  <Text>Development of an offline early warning system for violence prevention.</Text>
                </Stack>
              </Td>
            </Tr>
            <Tr>
              <Td>CONECTA CULTURAS</Td>
              <Td>UNESCO, DW, CIESPAL</Td>
              <Td>
                <Stack>
                  <Text>Development of a mobile app integrated into the national</Text>
                  <Text>documentation system for indigenous people and nationalities.</Text>
                </Stack>
              </Td>
            </Tr>
            <Tr>
              <Td>CONECTA CULTURAS</Td>
              <Td>MEDIALAB, GIZ, AEI, ESQUEL</Td>
              <Td>
                <Stack>
                  <Text>Development of an online and offline educational platform with Raspberry PI.</Text>
                </Stack>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}