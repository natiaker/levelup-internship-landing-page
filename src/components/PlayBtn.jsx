import { Box, Button } from "@mui/material";
import React from "react";

const PlayBtn = () => {
  return (
    <Box
      position="sticky"
      bottom="0"
      height="70px"
      width="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bgcolor="#171718"
      borderTop="4px solid #F05A22"
      zIndex="1500"
    >
      <Button
        sx={{
          color: "text.primary",
          bgcolor: "background.active",
          ":hover": { bgcolor: "background.active" },
          borderRadius: "3px",
          padding: "8px 40px",
        }}
      >
        ითამაშე
      </Button>
    </Box>
  );
};

export default PlayBtn;
