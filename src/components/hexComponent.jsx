import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { randomHexColorGenerateFunction } from "../lib/function";

const HexComponent = ({ hexColor, setHexColor }) => {
  return (
    <div>
      {/* MUI Paper Component */}
      <div>
        <Paper
          elevation={24}
          className={` w-48 h-60 mb-6`}
          style={{ backgroundColor: hexColor }}
        />
      </div>
      {/* MUI Button Component */}
      <Button
        className="my-5 rounded-lg"
        onClick={() => randomHexColorGenerateFunction(setHexColor)}
        variant="contained"
      >
        Hex Color
      </Button>
    </div>
  );
};

export default HexComponent;
