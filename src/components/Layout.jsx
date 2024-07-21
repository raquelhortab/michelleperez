import { Box, Flex } from '@chakra-ui/react';
import Avatar from "./Avatar";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <Flex direction="column" minH="100vh">
      <Header />
      
      <Flex flexGrow={1} p={5} mt={{ base: "120px", md: "80px" }} flexDirection={{ base: "column", md: "row" }}>
        <Box flexShrink={0} mr={{ base: 0, md: 5 }} mb={{ base: 5, md: 0 }}>
          <Avatar />
        </Box>
        <Box p={5} boxShadow="lg" borderRadius="md" width="100%" maxWidth="1000px" ml="auto">
          {children}
        </Box>
      </Flex>
    </Flex>
  );
}