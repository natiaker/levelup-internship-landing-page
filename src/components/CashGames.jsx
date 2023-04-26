import React from "react";
import { Box, CardContent, Link, Typography } from "@mui/material";
import LeaderboardCard from "./LeaderboardCard";
import PrizesCard from "./PrizesCard";
import {
  StyledMainCard,
  StyledMainTitle,
  StyledTopBorder,
} from "../styles/ContentCardStyles";
import SideLeaderboardCard from "./SideLeaderboardCard";
import Rules from "./Rules";
import Offers from "./Offers";

const CashGames = () => {
  return (
    <>
      <StyledMainCard variant="outlined">
        <StyledMainTitle>
          <StyledTopBorder />
          <Typography fontSize={{ xs: "16px", sm: "18px" }} fontWeight="900">
            1 ₾ ᲠᲔᲘᲙᲘ = 1 ᲥᲣᲚᲐᲡ
          </Typography>
        </StyledMainTitle>
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
            <Typography
              sx={{ marginRight: "12px", fontSize: { xs: "13px", sm: "16px" } }}
            >
              ჰოლდემის TOP20 ლიდერბორდი
            </Typography>
            <img
              src={process.env.PUBLIC_URL + "/assets/example-icon.png"}
              alt="info"
            />
          </Box>
          <LeaderboardCard />
          <PrizesCard />
          <Typography
            sx={{
              textAlign: "center",
              marginBottom: "22px",
              fontSize: { xs: "13px", sm: "16px" },
            }}
          >
            TOP20 ლიდერბორდი ჰოლდემში
          </Typography>
          <LeaderboardCard />
          <PrizesCard />
          <Typography sx={{ textAlign: "center" }}>
            * ლიდერბორდის შედეგები განახლდება{" "}
            <Link href="#" color="background.active">
              პოკერის ლობიში
            </Link>
          </Typography>
        </CardContent>
      </StyledMainCard>
      <SideLeaderboardCard />
      <Typography
        sx={{ marginBottom: "22px", fontSize: { xs: "16px", sm: "18px" } }}
      >
        წესები და პირობები
      </Typography>
      <Rules />
      <Typography sx={{ marginTop: "55px", marginBottom: "32px" }}>
        მსგავსი აქციები
      </Typography>
      <Offers />
    </>
  );
};

export default CashGames;
