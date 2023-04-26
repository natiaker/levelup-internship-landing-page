import React from "react";
import { Box, Typography } from "@mui/material";
import LeaderBoardItems from "./LeaderBoardItems";
import { TopHoldemData } from "../TopHoldemData";
import { StyledCard } from "../styles/ContentCardStyles";

const leaderboardStyle = {
  height: "390px",
  overflowY: "scroll",
  "&::-webkit-scrollbar": {
    width: "4px",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "background.active",
    borderRadius: "50px",
  },
  "&::-webkit-scrollbar-track": {
    background: "2C3234",
  },
};

const LeaderboardCard = () => {
  return (
    <StyledCard>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: {
            xs: "20px 50px 20px 10px",
            sm: "20px 100px 20px 10px",
            md: "20px 152px 20px 10px ",
          },
          color: "#7D7D7D",
        }}
      >
        <Typography>ადგილი</Typography>
        <Typography>ვაუჩერი</Typography>
        <Typography>პრიზი</Typography>
      </Box>
      <Box sx={leaderboardStyle}>
        {TopHoldemData.map((item) => {
          return (
            <LeaderBoardItems
              key={item.place}
              place={item.place}
              voucher={item.voucher}
              prize={item.prize}
              icon={item.icon}
            />
          );
        })}
      </Box>
    </StyledCard>
  );
};

export default LeaderboardCard;
