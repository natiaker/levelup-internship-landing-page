import React from "react";
import TournamentsCard from "./TournamentsCard";
import {
  StyledMainCard,
  StyledMainTitle,
  StyledTopBorder,
} from "../styles/ContentCardStyles";
import LeaderboardCard from "./LeaderboardCard";
import PrizesCard from "./PrizesCard";
import { Typography, Link, Box } from "@mui/material";
import SideLeaderboardCard from "./SideLeaderboardCard";
import Rules from "./Rules";
import Offers from "./Offers";
import DropDown from "./DropDown";
import EverydayTournaments from "./EverydayTournaments";

const SpringSeries = () => {
  return (
    <>
      <TournamentsCard />
      <StyledMainCard marginTop="27px">
        <StyledMainTitle marginBottom="20px" padding={{ xs: "0 35px 19px" }}>
          <StyledTopBorder />
          <Typography fontSize={{ xs: "16px", sm: "18px" }} fontWeight="900">
            ᲛᲝᲮᲕᲓᲘ TOP20 ᲚᲘᲓᲔᲠᲑᲝᲠᲓᲨᲘ ᲢᲣᲠᲜᲘᲠᲔᲑᲖᲔ ᲓᲐᲒᲠᲝᲕᲔᲑᲣᲚᲘ ᲥᲣᲚᲔᲑᲘᲗ
          </Typography>
        </StyledMainTitle>
        <DropDown />
        <Box px={{ xs: 1, sm: 3 }} pb={3}>
          <LeaderboardCard />
          <PrizesCard />
          <Typography textAlign="center" fontSize="14px" marginBottom="12px">
            * ლიდერბორდის შედეგები განახლდება{" "}
            <Link href="#" color="background.active">
              პოკერის ლობიში
            </Link>
          </Typography>
          <Typography fontSize="14px" textAlign="center">
            * სატურნირო ლიდერბორდის ქულების დათვლაში არ მონაწილეობს ფრიროლები და
            სატელიტები
          </Typography>
        </Box>
      </StyledMainCard>
      <EverydayTournaments />
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

export default SpringSeries;
