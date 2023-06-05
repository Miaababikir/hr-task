"use client";
import {
  Badge,
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <Box>
      <Heading as="h2" fontSize="3xl">
        Available jobs
      </Heading>
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
        gap={6}
        mt={4}
      >
        <Box p={4} bg="white" rounded="md">
          <Image
            src="https://asset.brandfetch.io/idJ_HhtG0Z/idS8F1wmDj.jpeg"
            w={12}
            rounded="md"
          />
          <Heading fontSize="lg" mt={4}>
            Sr. Software engineer
          </Heading>
          <Text fontSize="sm" mt={2}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
            aut eos possimus tempore! Placeat, veritatis?
          </Text>
          <Flex mt={2}>
            <Badge colorScheme="purple">Full time</Badge>
            <Badge colorScheme="purple" ml={2}>
              Senior
            </Badge>
            <Badge colorScheme="purple" ml={2}>
              UAE
            </Badge>
          </Flex>
          <Box mt={4}>
            <Button rounded="sm" fontWeight="semibold" w="full">
              Apply now
            </Button>
          </Box>
        </Box>
        <Box p={4} bg="white" rounded="md">
          <Image
            src="https://asset.brandfetch.io/idxAg10C0L/idTHPdqoDR.jpeg"
            w={12}
            rounded="md"
          />
          <Heading fontSize="lg" mt={4}>
            UI\UX designer
          </Heading>
          <Text fontSize="sm" mt={2}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
            aut eos possimus tempore.
          </Text>
          <Flex mt={2}>
            <Badge colorScheme="purple">Part time</Badge>
            <Badge colorScheme="purple" ml={2}>
              Senior
            </Badge>
          </Flex>
          <Box mt={4}>
            <Button rounded="sm" fontWeight="semibold" w="full">
              Apply now
            </Button>
          </Box>
        </Box>
        <Box p={4} bg="white" rounded="md">
          <Image
            src="https://asset.brandfetch.io/idZHcZ_i7F/ida1pqjhS_.png"
            w={12}
            rounded="md"
          />
          <Heading fontSize="lg" mt={4}>
            Product engineer
          </Heading>
          <Text fontSize="sm" mt={2}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
            aut eos possimus tempore.
          </Text>
          <Flex mt={2}>
            <Badge colorScheme="purple">Part time</Badge>
            <Badge colorScheme="purple" ml={2}>
              Senior
            </Badge>
          </Flex>
          <Box mt={4}>
            <Button rounded="sm" fontWeight="semibold" w="full">
              Apply now
            </Button>
          </Box>
        </Box>
        <Box p={4} bg="white" rounded="md">
          <Image
            src="https://asset.brandfetch.io/idCvQYuc_q/idBrNPHmqO.jpeg"
            w={12}
            rounded="md"
          />
          <Heading fontSize="lg" mt={4}>
            Project manager
          </Heading>
          <Text fontSize="sm" mt={2}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
            aut eos possimus tempore.
          </Text>
          <Flex mt={2}>
            <Badge colorScheme="purple">Full time</Badge>
            <Badge colorScheme="purple" ml={2}>
              Senior
            </Badge>
          </Flex>
          <Box mt={4}>
            <Button rounded="sm" fontWeight="semibold" w="full">
              Apply now
            </Button>
          </Box>
        </Box>
        <Box p={4} bg="white" rounded="md">
          <Image
            src="https://asset.brandfetch.io/idawOgYOsG/idkXDhRL_u.jpeg"
            w={12}
            rounded="md"
          />
          <Heading fontSize="lg" mt={4}>
            System architect
          </Heading>
          <Text fontSize="sm" mt={2}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
            aut eos possimus tempore.
          </Text>
          <Flex mt={2}>
            <Badge colorScheme="purple">Full time</Badge>
            <Badge colorScheme="purple" ml={2}>
              Senior
            </Badge>
          </Flex>
          <Box mt={4}>
            <Button rounded="sm" fontWeight="semibold" w="full">
              Apply now
            </Button>
          </Box>
        </Box>
        <Box p={4} bg="white" rounded="md">
          <Image
            src="https://asset.brandfetch.io/idkuvXnjOH/id8Y7_hjf6.png"
            w={12}
            rounded="md"
          />
          <Heading fontSize="lg" mt={4}>
            Sr. Full stack developer
          </Heading>
          <Text fontSize="sm" mt={2}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
            aut eos possimus tempore.
          </Text>
          <Flex mt={2}>
            <Badge colorScheme="purple">Full time</Badge>
            <Badge colorScheme="purple" ml={2}>
              Senior
            </Badge>
          </Flex>
          <Box mt={4}>
            <Button rounded="sm" fontWeight="semibold" w="full">
              Apply now
            </Button>
          </Box>
        </Box>
        <Box p={4} bg="white" rounded="md">
          <Image
            src="https://asset.brandfetch.io/id20mQyGeY/idT9LYHrc_.jpeg"
            w={12}
            rounded="md"
          />
          <Heading fontSize="lg" mt={4}>
            Front end engineer
          </Heading>
          <Text fontSize="sm" mt={2}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
            aut eos possimus tempore.
          </Text>
          <Flex mt={2}>
            <Badge colorScheme="purple">Full time</Badge>
            <Badge colorScheme="purple" ml={2}>
              Senior
            </Badge>
          </Flex>
          <Box mt={4}>
            <Button rounded="sm" fontWeight="semibold" w="full">
              Apply now
            </Button>
          </Box>
        </Box>
        <Box p={4} bg="white" rounded="md">
          <Image
            src="https://asset.brandfetch.io/ideyyfT0Lp/idhHZwYUWa.png"
            w={12}
            rounded="md"
          />
          <Heading fontSize="lg" mt={4}>
            Cloud engineer
          </Heading>
          <Text fontSize="sm" mt={2}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
            aut eos possimus tempore.
          </Text>
          <Flex mt={2}>
            <Badge colorScheme="purple">Full time</Badge>
            <Badge colorScheme="purple" ml={2}>
              Senior
            </Badge>
          </Flex>
          <Box mt={4}>
            <Button rounded="sm" fontWeight="semibold" w="full">
              Apply now
            </Button>
          </Box>
        </Box>
        <Box p={4} bg="white" rounded="md">
          <Image
            src="https://asset.brandfetch.io/idPYUoikV7/iduXtIiAG2.png"
            w={12}
            rounded="md"
          />
          <Heading fontSize="lg" mt={4}>
            Full stack engineer
          </Heading>
          <Text fontSize="sm" mt={2}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
            aut eos possimus tempore.
          </Text>
          <Flex mt={2}>
            <Badge colorScheme="purple">Full time</Badge>
            <Badge colorScheme="purple" ml={2}>
              Senior
            </Badge>
          </Flex>
          <Box mt={4}>
            <Button rounded="sm" fontWeight="semibold" w="full">
              Apply now
            </Button>
          </Box>
        </Box>
      </Grid>
    </Box>
  );
}
