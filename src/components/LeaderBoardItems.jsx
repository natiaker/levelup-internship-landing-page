import { Box, Typography } from "@mui/material";
import React from "react";

const LeaderBoardItems = ({ place, voucher, prize, icon }) => {
  return (
    <Box
      sx={{
        bgcolor: "background.cardItem",
        border: "2px solid #2C3234",
        borderRadius: "50px",
        padding: { xs: "12px", sm: "14px 37px 14px 20px" },
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "6px",
        marginRight: { xs: "8px", sm: "16px" },
      }}
    >
      <Box
        sx={{
          backgroundColor: "#2C3234",
          width: { xs: "22px", sm: "28px" },
          height: { xs: "22px", sm: "28px" },
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "#2C3234 0px 0px 5px",
        }}
      >
        <Typography>{place}</Typography>
      </Box>
      <Typography fontSize={{ xs: "10px", sm: "13px" }}>{voucher}</Typography>
      <Typography
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: { xs: "10px", sm: "13px" },
          textAlign: "center",
          maxWidth: { xs: "80px", sm: "unset" },
        }}
      >
        {icon && (
          <img
            src={icon}
            alt=""
            style={{
              width: "20px",
              height: "20px",
              marginRight: "7px",
            }}
          />
        )}
        {prize}
      </Typography>
    </Box>
  );
};

export default LeaderBoardItems;
