import { Box, Button, Container, Flex, Heading, Image, Link, Text, VStack } from "@chakra-ui/react";
import { FaApple } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex direction="column" align="center" justify="center" minH="100vh" bg="white">
        <VStack spacing={8} w="full" align="start" px={8}>
          <Flex w="full" justify="space-between" align="center" py={4}>
            <FaApple size="28px" />
            <Flex gap={4}>
              <Link href="#" fontWeight="semibold">
                Home
              </Link>
              <Link href="#" fontWeight="semibold">
                Features
              </Link>
              <Link href="#" fontWeight="semibold">
                Pricing
              </Link>
              <Link href="#" fontWeight="semibold">
                Contact
              </Link>
            </Flex>
          </Flex>
          <VStack align="start" spacing={6}>
            <Heading as="h1" size="2xl" fontWeight="bold" color="gray.800">
              Introducing the New iPhone
            </Heading>
            <Text fontSize="lg" color="gray.600">
              Experience the future of mobile technology with cutting-edge design and performance.
            </Text>
            <Button size="lg" colorScheme="blue" px={8} py={6}>
              Pre-order Now
            </Button>
          </VStack>
          <Image src="https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxpcGhvbmV8ZW58MHx8fHwxNzE1NDQxMzA0fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="New iPhone" boxSize="500px" objectFit="contain" />
        </VStack>
        <Box as="footer" w="full" py={4} mt={12} bg="gray.100" textAlign="center">
          <VStack spacing={2}>
            <Text fontSize="sm" color="gray.600">
              © 2023 iPhone Inc.
            </Text>
            <Flex gap={4} justify="center">
              <Link href="#" fontSize="sm" color="gray.600">
                Privacy
              </Link>
              <Link href="#" fontSize="sm" color="gray.600">
                Terms
              </Link>
              <Link href="#" fontSize="sm" color="gray.600">
                Support
              </Link>
            </Flex>
          </VStack>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;
