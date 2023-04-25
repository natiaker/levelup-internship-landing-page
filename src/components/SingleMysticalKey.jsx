import { Box, Typography } from "@mui/material";
import React from "react";

const SingleMysticalKey = ({ place, mysticalKey }) => {
  return (
    <Box
      sx={{
        bgcolor: "background.cardItem",
        border: "2px solid #2C3234",
        borderRadius: "50px",
        padding: "14px 37px 14px 20px",
        display: "flex",
        alignItems: "center",
        marginBottom: "6px",
        marginRight: "16px",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#2C3234",
          width: "28px",
          height: "28px",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "#2C3234 0px 0px 5px",
          marginRight: "20px",
        }}
      >
        <Typography>{place}</Typography>
      </Box>
      <Typography
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {mysticalKey}
      </Typography>
    </Box>
  );
};

export default SingleMysticalKey;
