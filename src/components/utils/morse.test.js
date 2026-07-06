import { textToMorse, morseToText } from "./morse";

test("translates a standard string correctly", () => {
  expect(textToMorse("hello")).toBe(".... . .-.. .-.. ---");
});

test("translates a standard string to morse correctly", () => {
  expect(morseToText(".... . .-.. .-.. ---")).toBe("HELLO");
});

test("handles strings with spaces correctly", () => {
  expect(textToMorse("This  is    a string with    spaces")).toBe(
    "- .... .. ... / .. ... / .- / ... - .-. .. -. --. / .-- .. - .... / ... .--. .- -.-. . ...",
  );
});

test("is case insensitive ", () => {
  expect(textToMorse("test")).toBe(textToMorse("TEST"));
});

test("handles digits correctly", () => {
  expect(textToMorse("123")).toBe(".---- ..--- ...--");
});

test("handles special strings correctly", () => {
  expect(textToMorse(`This a string with ,./3;'[]/|?!@#$%^&*()'~":`)).toBe(
    "- .... .. ... / .- / ... - .-. .. -. --. / .-- .. - .... / --..-- .-.-.- -..-. ...-- -..-. ..--.. -.-.-- .--.-. -.--. -.--.-",
  );
});

test("handles an empty string correctly", () => {
  expect(textToMorse("")).toBe("");
});

test("handles an invalid morse code correctly", () => {
  expect(() => morseToText("---------")).toThrow(
    'Invalid morse code: "---------"',
  );
});
