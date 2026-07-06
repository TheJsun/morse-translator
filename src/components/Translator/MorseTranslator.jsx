import { useState } from "react";
import classes from "./MorseTranslator.module.scss";
import InputBox from "../InputBox/InputBox";
import OutputBox from "../OutputBox/OutputBox";
import { textToMorse, inputIsText, morseToText } from "../utils/morse";

export default function MorseTranslator() {
  const [text, setText] = useState("");

  if (!text) {
    console.log("ruh roh");
  }
  let output = text
    ? inputIsText(text)
      ? textToMorse(text)
      : morseToText(text)
    : "";

  return (
    <div className={classes.translator}>
      <h1 className={classes.heading}>Morse Code Translator</h1>

      <div className={classes.textbox}>
        <InputBox
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </div>
      <div className={classes.textbox}>
        <OutputBox value={output} />
      </div>
    </div>
  );
}
