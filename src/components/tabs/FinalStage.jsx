import React from "react";
import { StyledMainCard } from "../../styles/ContentCardStyles";
import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";
import ACategoryTravelCard from "./finalStage/ACategoryTravelCard";
import WinTravelSection from "./finalStage/WinTravelSection";
import MysticalKey from "./finalStage/MysticalKey";
import Rules from "./commonComponents/Rules";
import Offers from "./commonComponents/Offers";

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
    <>
      <StyledMainCard
        borderTop="4px solid #25292B !important"
        bgcolor={{ xs: "#171718 !important" }}
        mt={3}
        p={3}
      >
        <img
          src={process.env.PUBLIC_URL + "/assets/cover-3.png"}
          alt="cover"
          width="100%"
        />
        <Typography textAlign="center" fontSize={{ xs: "13px", sm: "16px" }}>
          ᲒᲐᲔᲛᲒᲖᲐᲕᲠᲔ THE FESTIVAL IN MALTA-ᲖᲔ!
        </Typography>
        <Typography textAlign="center" fontSize={{ xs: "13px", sm: "16px" }}>
          The Festival სერიების ფარგლებში, ევროპაბეთი უკვე მეორედ აძლევს პოკერის
          მოთამაშეებს დაუვიწყარი მოგზაურობის შანსს.
        </Typography>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          backgroundColor="#25292B"
          width={{ xs: "100%", sm: "75%" }}
          height="62px"
          pr={3}
          borderRadius="10px"
          margin="20px auto"
          boxSizing="border-box"
        >
          <StyledBorder />
          <Typography
            fontSize={{ xs: "13px", sm: "16px" }}
            py={{ xs: 2 }}
            pl={{ xs: 2 }}
          >
            15-დან 21 მაისის ჩათვლით მალტა პოკერის ფესტივალს უმასპინძლებს
          </Typography>
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          flexDirection={{ xs: "column", md: "row" }}
        >
          <ACategoryTravelCard custom={false} />
          <ACategoryTravelCard custom={false} />
          <ACategoryTravelCard custom={true} />
        </Box>
      </StyledMainCard>
      <WinTravelSection />
      <MysticalKey />
      <Typography
        sx={{
          marginTop: "55px",
          marginBottom: "22px",
          fontSize: { xs: "16px", sm: "18px" },
        }}
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

export default FinalStage;
