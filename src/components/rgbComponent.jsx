import { Button } from "@chakra-ui/react";
import { randomRgbColorGenerateFunction } from "../lib/function";
import { Box } from "@chakra-ui/react";

const RgbComponent = ({ rgbColor, setRgbColor }) => {
  return (
    <div>
      {/* Chakra UI Box Component */}
      <Box
        bg={rgbColor}
        w={"200px"}
        p={4}
        h={"240px"}
        color="white"
        mb={15}
        boxShadow="2xl"
      ></Box>
      
      {/* Chakra UI Button Component */}
      <Button
        onClick={() => randomRgbColorGenerateFunction(setRgbColor)}
        colorScheme="blue"
        variant="solid"
        backgroundColor={"teal"}
        px={25}
        py={8}
        textColor={"white"}
        mt={5}
        borderRadius={4}
        fontWeight={"500"}
        _hover={{
          background: "blue",
          boxShadow:
            "8px 8px 6px rgba(0, 0, 0, 0.5), 5px 4px 4px rgba(0, 0, 0, 0.3)",
          color: "black",
          fontWeight: "700",
        }}
      >
        RGB COLOR
      </Button>
    </div>
  );
};

export default RgbComponent;
