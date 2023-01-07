import React from "react";
import { Helmet } from "react-helmet";

// --- MUI --- //
import { Typography, Box } from "@mui/material";

// --- Sx Styles --- //
import { sxFooterContainer } from "../sxStyles";

function Footer() {
  return (
    <Box id="footerContainer" sx={sxFooterContainer}>
      <Helmet>
        <meta
          name="description"
          content="Prompt Generator designed and created by Eric Meinzer from Minneapolis, Minnesota. MPLS, MN"
        />
      </Helmet>
      <Typography color="info.light" variant="body2">Generate Often 2023</Typography>
    </Box>
  );
}
export default Footer;
