import React from "react";
import { StyledMainCard } from "../styles/ContentCardStyles";
import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";
import ACategoryTravelCard from "./ACategoryTravelCard";

const StyledBorder = styled(Box)(({ theme }) =>
  theme.unstable_sx({
    backgroundColor: "background.active",
    width: "4px",
    height: "30px",
    borderTopRightRadius: "14px",
    borderBottomRightRadius: "14px",
    boxShadow: "#EF5A21 0px 0px 10px",
  })
);

const FinalStage = () => {
  return (
    <StyledMainCard borderTop="4px solid #25292B !important" mt={3} p={3}>
      <img
        src={process.env.PUBLIC_URL + "./assets/cover-3.png"}
        alt="cover"
        width="806px"
        height="280px"
      />
      <Typography textAlign="center">
        ᲒᲐᲔᲛᲒᲖᲐᲕᲠᲔ THE FESTIVAL IN MALTA-ᲖᲔ!
      </Typography>
      <Typography textAlign="center">
        The Festival სერიების ფარგლებში, ევროპაბეთი უკვე მეორედ აძლევს პოკერის
        მოთამაშეებს დაუვიწყარი მოგზაურობის შანსს.
      </Typography>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        backgroundColor="#25292B"
        width="75%"
        height="50px"
        pr={3}
        borderRadius="10px"
        margin="20px auto"
      >
        <StyledBorder />
        <Typography>
          15-დან 21 მაისის ჩათვლით მალტა პოკერის ფესტივალს უმასპინძლებს
        </Typography>
      </Box>
      <Box display="flex" justifyContent="space-between">
        <ACategoryTravelCard custom={false} />
        <ACategoryTravelCard custom={false} />
        <ACategoryTravelCard custom={true} />
      </Box>
    </StyledMainCard>
  );
};

export default FinalStage;
