import { useRouteError, Link } from "react-router-dom";
import { Heading, Text, Box, VStack } from "@chakra-ui/react";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <VStack>
        <Box>
          <Heading as="h1" size="800px" fontSize={200} color={"black"}>
            DERP!
          </Heading>
        </Box>
        <Box>
          <Text>
            Not sure where you were going, but that location doesn't exist!
          </Text>
        </Box>
        <Box>
          <Text>
            Maybe just head back <Link to="/">home</Link> and start over.
          </Text>
        </Box>
      </VStack>
    </div>
  );
}
