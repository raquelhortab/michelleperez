import React from 'react';
import Headline from "../components/Headline";
import { Box, Flex } from "@chakra-ui/react";
import TitlePages from "../components/TitlePages";
import CardProjects from "../components/CardProjects";

export default function Portfolio() {
  return (
    <Box p={4} boxShadow="lg" borderRadius="md">
      <Headline title="Portfolio" />
      <TitlePages title="Check out my featured projects" />
      <Flex 
        justifyContent="space-between" 
        flexDirection="row" 
        flexWrap="wrap"
        gap={4}
      >
        <CardProjects
          source="https://drive.google.com/file/d/1tpH7XKtdi2jivIj2ibvgkd6VxVrWx2mj/view?usp=drive_link"
          reference="https://github.com/MichellePerezS/automataWeb"
          bd="ReactJS"
          bd2="ChackraUI"
        />
        <CardProjects
          source="https://www.lineaverdeceutatrace.com/lv/consejos-ambientales/apps-ambientales/img/eco-apps.png"
          reference="https://github.com/MichellePerezS/automataWeb"
          bd="Automata"
          bd2="React"
        />
        <CardProjects
          source="https://www.lineaverdeceutatrace.com/lv/consejos-ambientales/apps-ambientales/img/eco-apps.png"
          reference="https://github.com/MichellePerezS/automataWeb"
          bd="Automata"
          bd2="React"
        />
        <CardProjects
          source="https://www.lineaverdeceutatrace.com/lv/consejos-ambientales/apps-ambientales/img/eco-apps.png"
          reference="https://github.com/MichellePerezS/automataWeb"
          bd="Automata"
          bd2="React"
        />
      </Flex>
    </Box>
  );
}
