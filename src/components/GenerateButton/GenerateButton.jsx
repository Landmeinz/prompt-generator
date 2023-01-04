import React from "react";
import { useDispatch, useSelector } from "react-redux";

// --- COMPONENTS --- //

// --- MUI --- //
import { Typography, Button } from "@mui/material";

// --- Sx Styles --- //
import { sxGenerateButtonContainer, sxGenerateButton } from "../sxStyles";

function GenerateButton() {
  const dispatch = useDispatch();
  const selectedCategories = useSelector((store) => store.selectedCategories);

  function getRandomKeywords() {
    if (selectedCategories.length === 0) {
      return;
    }
    return dispatch({
      type: "FETCH_RANDOM_KEYWORDS",
      payload: selectedCategories,
    });
  } // getRandomKeywords;

  return (
    <Typography variant="h4" sx={sxGenerateButtonContainer}>
      <Button sx={sxGenerateButton} onClick={() => getRandomKeywords()}>
        Generate!
      </Button>
    </Typography>
  );
}
export default GenerateButton;
