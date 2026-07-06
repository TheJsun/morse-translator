import { useState } from "react";
import classes from "./MorseTranslator.module.scss";
import InputBox from "../InputBox/InputBox";
import OutputBox from "../OutputBox/OutputBox";
import morseCode from "../../data/morse-code.json";

export default function MorseTranslator() {
  const [text, setText] = useState("");
  const [, forceRender] = useState(0);
  let output = "";

  const translateToMorse = (toTranslate) => {
    let input = toTranslate.replace(/[^A-Za-z]/g, "").toUpperCase();
    for (const char of input) {
      output += morseCode[char];
    }
  };
  translateToMorse(text);

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
