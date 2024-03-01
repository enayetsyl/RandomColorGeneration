// Random number generation for hex and rgb color.
export const randomNumberGenerator = (length) => {
  return Math.floor(Math.random() * length);
};

// Hex color generation function
export const randomHexColorGenerateFunction = (setHexColor) => {
  const hexCodeArray = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ];
  let hexCode = "#";
  for (let i = 0; i < 6; i++) {
    hexCode += hexCodeArray[randomNumberGenerator(hexCodeArray.length)];
  }
  setHexColor(hexCode);
};

// Rgb color generation function
export const randomRgbColorGenerateFunction = (setRgbColor) => {
  const r = randomNumberGenerator(256);
  const g = randomNumberGenerator(256);
  const b = randomNumberGenerator(256);
  setRgbColor(`rgb(${r},${g},${b})`);
};