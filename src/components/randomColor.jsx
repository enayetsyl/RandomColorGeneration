import { useState } from "react";
import { Heading } from "@chakra-ui/react";
import HexComponent from "./hexComponent";
import RgbComponent from "./rgbComponent";

const RandomColor = () => {
  const [hexColor, setHexColor] = useState("#000000");
  const [rgbColor, setRgbColor] = useState("#821415");

  return (
    <div className="min-h-screen py-10">
      {/* heading */}
      <Heading
        as="h1"
        fontSize={"36px"}
        fontWeight={"bold"}
        textAlign="center"
        textShadow="2px 2px #00ff00"
        mb={"30"}
      >
        Random Color Generator
      </Heading>

      <div className=" flex justify-center items-center gap-10 px-10">
  
        {/* Hex Color Div */}
        <HexComponent hexColor={hexColor} setHexColor={setHexColor} />
  
        {/* RGB Color Div */}
        <RgbComponent rgbColor={rgbColor} setRgbColor={setRgbColor} />
      </div>
    </div>
  );
};

export default RandomColor;
