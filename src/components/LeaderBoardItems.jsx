import { Box, Typography } from "@mui/material";
import React from "react";

const LeaderBoardItems = ({ place, voucher, prize, icon }) => {
  return (
    <Box
      sx={{
        bgcolor: "background.cardItem",
        border: "2px solid #2C3234",
        borderRadius: "50px",
        padding: "14px 37px 14px 20px",
        display: "flex",
        justifyContent: "space-between",
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
        }}
      >
        <Typography>{place}</Typography>
      </Box>
      <Typography>{voucher}</Typography>
      <Typography
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {icon && (
          <img
            src={icon}
            alt=''
            style={{ width: "20px", height: "20px", marginRight: "7px" }}
          />
        )}
        {prize}
      </Typography>
    </Box>
  );
};

export default LeaderBoardItems;
