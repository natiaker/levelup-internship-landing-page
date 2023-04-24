import React from "react";
import { Box, CardContent, Link, Typography } from "@mui/material";
import LeaderboardCard from "./LeaderboardCard";
import PrizesCard from "./PrizesCard";
import { StyledMainCard, StyledTopBorder } from "../styles/ContentCardStyles";
import SideLeaderboardCard from "./SideLeaderboardCard";

const CashGames = ({ title }) => {
  return (
    <>
      <StyledMainCard variant='outlined'>
        <Typography
          sx={{
            bgcolor: "#25292B",
            height: "70px",
            textAlign: "center",
            fontSize: "18px",
          }}
        >
          <StyledTopBorder />
          {title}
        </Typography>
        <CardContent>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            <Typography sx={{ marginRight: "12px" }}>
              ჰოლდემის TOP20 ლიდერბორდი
            </Typography>
            <img
              src={process.env.PUBLIC_URL + "/assets/example-icon.png"}
              alt='info'
            />
          </Box>
          <LeaderboardCard />
          <PrizesCard />
          <Typography sx={{ textAlign: "center", marginBottom: "22px" }}>
            TOP20 ლიდერბორდი ჰოლდემში
          </Typography>
          <LeaderboardCard />
          <PrizesCard />
          <Typography sx={{ textAlign: "center" }}>
            * ლიდერბორდის შედეგები განახლდება{" "}
            <Link
              href='#'
              color='background.active'
            >
              პოკერის ლობიში
            </Link>
          </Typography>
        </CardContent>
      </StyledMainCard>
      <SideLeaderboardCard />
    </>
  );
};

export default CashGames;
