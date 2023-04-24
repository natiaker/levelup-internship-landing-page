import React from "react";
import { Box, Card, Typography } from "@mui/material";
import LeaderBoardItems from "./LeaderBoardItems";
import { TopHoldemData } from "../TopHoldemData";

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

const HoldemTop20Card = () => {
  return (
    <Card
      sx={{
        bgcolor: "#25292B",
        padding: "32px 12px 20px 32px",
        marginBottom: "24px",
        borderRadius: "20px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "20px 152px 20px 10px ",
        }}
      >
        <Typography>ადგილი</Typography>
        <Typography>
          <img
            src=''
            alt='voucher-icon'
          />
          ვაუჩერი
        </Typography>
        <Typography>პრიზი</Typography>
      </Box>
      <Box sx={leaderboardStyle}>
        {TopHoldemData.map(item => {
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
    </Card>
  );
};

export default HoldemTop20Card;
