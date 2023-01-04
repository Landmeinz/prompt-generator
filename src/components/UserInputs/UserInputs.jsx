import React, { useState } from "react";
import { useDispatch } from "react-redux";

// --- COMPONENTS --- //

// --- MUI --- //
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Typography, Box, Button, TextField } from "@mui/material";

// --- SX STYLES --- //
import {
  sxUserInputContainer,
  sxButtonTextContent,
  sxTextInput,
  sxAddTextButton,

} from "../sxStyles";

function UserInputs() {
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState("");

  function handleClick() {
    dispatch({ type: "SET_USER_INPUTS", payload: inputs.trim() });
    setInputs("");
  } // handleClick;

  return (
    <Box id="userInputContainer" sx={sxUserInputContainer}>
      <Box id="buttonTextContaner" sx={sxButtonTextContent} component="form" noValidate>
        <Typography color="info.light" variant="h6">
          Add Your Own Text
        </Typography>
        <TextField
          sx={sxTextInput}
          id="inputs"
          variant="outlined"
          value={inputs}
          autoComplete="off"
          size="normal"
          onChange={(event) => setInputs(event.target.value)}
        />
      </Box>

      <Button od="addTextButton" sx={sxAddTextButton} onClick={() => handleClick()}>
        <AddCircleIcon color="secondary" fontSize="medium" />
      </Button>
    </Box>
  );
}

export default UserInputs;
