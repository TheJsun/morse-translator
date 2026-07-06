import { useState } from "react";
import classes from "./MorseTranslator.module.scss";
import InputBox from "../InputBox/InputBox";
import OutputBox from "../OutputBox/OutputBox";
import { textToMorse, inputIsText, morseToText } from "../utils/morse";

export default function MorseTranslator() {
  const [text, setText] = useState("");
  let output = "";
  let error = "";
  try {
    output = text
      ? inputIsText(text)
        ? textToMorse(text)
        : morseToText(text)
      : "";
  } catch (err) {
    error = err.message;
  }

  return (
    <div className={classes.translator}>
      <h1 className={classes.heading}>Morse Code Translator</h1>
      <p className={classes.description}>
        Interactive translator between Latin (English) text and Morse Code.
        <br />
        Begin by typing in the box below.
      </p>

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
      {error && <p className={classes.error}>{error}</p>}
    </div>
  );
}
