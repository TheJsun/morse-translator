import morseCode from "../../data/morse-code.json";

export const englishCode = Object.fromEntries(
  Object.entries(morseCode).map(([letter, morse]) => [morse, letter]),
);

export const textToMorse = (textInput) => {
  let input = textInput
    .replace(/[^A-Za-z0-9.,?!\-/@()\s]/g, "")
    .replace(/\s+/g, " ")
    .toUpperCase();
  let output = "";
  for (const char of input) {
    output += morseCode[char] + " ";
  }
  return output.trim();
};

export const inputIsText = (inputText) => {
  return /[A-Za-z0-9]/.test(inputText);
};

export const morseToText = (morseInput) => {
  let input = morseInput.replace(/\s+/g, " ").split(" ");
  let output = "";

  for (const code of input) {
    if (!englishCode[code]) {
      throw new Error(`Invalid morse code: "${code}"`);
    }
    output += englishCode[code];
  }
  return output.trim();
};
