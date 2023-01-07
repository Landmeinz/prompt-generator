import React, { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// --- COMPONENTS --- //

// --- MUI --- //
import { Typography, Box, Button } from "@mui/material";

// --- SX STYLES --- //
import {
  sxPromptContainer,
  sxPromptCopy,
  sxPromptOutput,
  sxCopyButton,
  sxClearButton,
  sxOutputText,
} from "../sxStyles";

function PromptOutput() {
  const dispatch = useDispatch();
  const randomKeywords = useSelector((store) => store.randomKeywords);
  const userInputs = useSelector((store) => store.userInputs);

  let [text, setText] = useState("");

  function handleCopy(text) {
    console.log("handleCopy");
    setText(randomKeywords.id + userInputs.input);
    navigator.clipboard.writeText(text);
    console.log("Content copied to clipboard:", text);
  } // PromptOutput;

  // function copyToClipboard(value) {
  //   const tempInput = document.createElement("input");
  //   tempInput.value = value;
  //   document.body.appendChild(tempInput);
  //   tempInput.select();
  //   document.execCommand("copy");
  //   document.body.removeChild(tempInput);
  // }

  function handleClear() {
    dispatch({ type: "CLEAR_RANDOM_KEYWORDS" });
    dispatch({ type: "CLEAR_USER_INPUTS" });
    dispatch({ type: "SET_SELECTED_CATEGORIES_NONE" });
  } // handleClear;

  return (
    <Box id="promptContainer" sx={sxPromptContainer}>
      <Box id="promptCopy" sx={sxPromptCopy}>
        {/* <Button
          id="copyButton"
          sx={sxCopyButton}
          onClick={() => handleCopy()}
          variant="contained"
        >
          Copy
        </Button> */}
        <Button
          id="clearButton"
          sx={sxClearButton}
          onClick={() => handleClear()}
          variant="contained"
        >
          Clear
        </Button>
      </Box>

      <Box id="promptOutput" sx={sxPromptOutput}>
        {userInputs?.map((input, i) => (
          <Typography
            id="promptText"
            sx={sxOutputText}
            key={i}
            variant="body1"
            value={input}
          >
            {input != null ? `${input},` : ""}
          </Typography>
        ))}

        {randomKeywords?.map((kw, k) => (
          <Typography
            id="promptText"
            sx={sxOutputText}
            key={k}
            variant="body1"
            value={kw}
          >
            {kw.keyword != null ? `${kw.keyword},` : ""}
          </Typography>
        ))}
      </Box>
    </Box>
  );
}
export default PromptOutput;
