import {
  Box,
  Button,
  Container,
  Flex,
  Image,
  Input,
  Link,
  SimpleGrid,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { MusicAppResponse } from "./types";

const MusicApp = () => {
  const [inputValue, setInputValue] = useState("");
  const [responseData, setResponseData] = useState<
    MusicAppResponse | undefined
  >();

  const { data, isFetching, refetch } = useQuery(
    ["musicApp", inputValue],
    async () => {
      const response = await axios.get<MusicAppResponse>(
        `https://shazam.p.rapidapi.com/search?term=${inputValue}`,
        {
          headers: {
            "X-RapidAPI-Key":
              "4250cdc8eamsh187af9f8c15ef9ap15f6f8jsn7e0bade233d5",
            "X-RapidAPI-Host": "shazam.p.rapidapi.com",
          },
        }
      );
      return response.data;
    },
    {
      refetchOnWindowFocus: false,
      retry: 1,
      enabled: false,
    }
  );

  console.log(data);

  useEffect(() => {
    if (data) {
      setResponseData(data);
    }
  }, [data]);

  return (
    <Box height="100vh">
      <Flex justifyContent="center" alignItems="center" mt="50px">
        <Text color="#fff" fontSize="6xl" fontWeight="bold">
          Music <span style={{ color: "#23b954" }}>App</span>
        </Text>
      </Flex>
      <Text
        justifyContent="center"
        display="flex"
        alignItems="center"
        fontSize="2xl"
        color="#23b954"
      >
        Discover music using the Shazam API from RapidAPI Hub.
      </Text>
      <Flex
        mt="40px"
        justifyContent="center"
        display="flex"
        alignItems="center"
      >
        <Input
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          size="lg"
          mr="20px"
          w="34%"
          focusBorderColor="lime"
          bg="#fff"
          placeholder="Search for a song or an artist"
        />
        <Button
          alignItems="center"
          color="#fff"
          bg="#23b954"
          size="lg"
          onClick={() => {
            refetch();
          }}
        >
          Search
        </Button>
      </Flex>
      <Box mt="40px" p="50px">
        {responseData ? (
          <Text mb="20px" color="#9e9e9e" fontSize="2xl">
            Search Results
          </Text>
        ) : (
          <span></span>
        )}

        <SimpleGrid mt="40px" columns={[2, null, 3]} spacing="40px">
          {isFetching ? (
            <Spinner color="white" />
          ) : (
            responseData?.tracks?.hits?.map((item, i) => {
              return (
                <Container key={i}>
                  <Box
                    flexDirection="column"
                    bg="#202020"
                    height="300px"
                    borderRadius="8px"
                    alignItems="center"
                    display="flex"
                  >
                    <Image
                      transform="translateY(-20px)"
                      bg="#fff"
                      w="140px"
                      height="140px"
                      src={item.track.share.image}
                    />
                    <Text
                      alignItems="center"
                      justifyContent="center"
                      color="#fff"
                      as="h4"
                      size="md"
                      fontWeight="bold"
                      mt="10px"
                    >
                      {item.track.title}
                    </Text>
                    <Text mt="10px" color="#9e9e9e" fontSize="sm">
                      {item.track.subtitle}
                    </Text>
                    <Link
                      href={item.track.url}
                      target="_blank"
                      mt="10px"
                      cursor="pointer"
                      color="#23b954"
                      fontSize="md"
                    >
                      Open in Shazam
                    </Link>
                  </Box>
                </Container>
              );
            })
          )}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default MusicApp;
