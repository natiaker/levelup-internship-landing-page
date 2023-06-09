import { Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";

const CloseBtn = ({ handleClose }) => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: "16px",
        right: "16px",
        width: "34px",
        height: "34px",
        borderRadius: "50%",
        cursor: "pointer",
        bgcolor: "background.default",
        display: { xs: "none", sm: "block" },
      }}
      onClick={handleClose}
    >
      <CloseIcon
        sx={{
          transform: "translate(20%, 20%)",
        }}
      />
    </Box>
  );
};

export default CloseBtn;
