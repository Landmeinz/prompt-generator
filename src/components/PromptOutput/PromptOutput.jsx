import React from "react";
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
} from "../sxStyles";

function PromptOutput() {
  const dispatch = useDispatch();
  const randomKeywords = useSelector((store) => store.randomKeywords);
  const userInputs = useSelector((store) => store.userInputs);

  function handleCopy() {
    console.log("handleCopy");
    let text = randomKeywords + userInputs;
    navigator.clipboard.writeText(text);
    console.log("Content copied to clipboard:", text);

    // try {
    //   navigator.clipboard.writeText(text);
    //   console.log("Content copied to clipboard");
    // } catch (err) {
    //   console.error("Failed to copy: ", err);
    // }

  } // PromptOutput;

  function handleClear() {
    dispatch({ type: "CLEAR_RANDOM_KEYWORDS" });
    dispatch({ type: "CLEAR_USER_INPUTS" });
  } // handleClear;

  return (
    <Box id="promptContainer" sx={sxPromptContainer}>
      <Box id="promptCopy" sx={sxPromptCopy}>
        <Button
          id="copyButton"
          sx={sxCopyButton}
          onClick={() => handleCopy()}
          variant="contained"
        >
          Copy
        </Button>
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
          <Typography id="promptText" key={i} variant="body1" value={input}>
            {input ? `${input}, ` : ""}
          </Typography>
        ))}

        {randomKeywords?.map((kw, k) => (
          <Typography id="promptText" key={k} variant="body1" value={kw}>
            {kw.keyword ? `${kw.keyword}, ` : ""}
          </Typography>
        ))}
      </Box>
    </Box>
  );
}
export default PromptOutput;
