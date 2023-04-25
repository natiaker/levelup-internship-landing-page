import React from "react";
import {
  StyledMainCard,
  StyledMainTitle,
  StyledTopBorder,
} from "../styles/ContentCardStyles";
import { Box, Typography } from "@mui/material";

const travelData = [
  {
    title: "ორმხრივი ავიაბილეთი",
    url: process.env.PUBLIC_URL + "/assets/final-item-ticket-icon.png",
  },
  {
    title: "The Festival in Malta -ს მეინ ივენთის ბაი-ინი",
    url: process.env.PUBLIC_URL + "/assets/final-item-event-icon.png",
  },
  {
    title: "Holdem ან Omaha ჰაიროლერ ტურნირის ბაი-ინი",
    url: process.env.PUBLIC_URL + "/assets/final-item-event-icon.png",
  },
  {
    title: "სასტუმრო Golden Tulip Vivaldi Hote",
    url: process.env.PUBLIC_URL + "/assets/final-item-hotel-icon.png",
  },
  {
    title: "€500 სახარჯი ფული",
    url: process.env.PUBLIC_URL + "/assets/final-item-money-icon.png",
  },
];

const ACategoryTravelCard = ({ custom }) => {
  return (
    <StyledMainCard width="31%" bgcolor="#1c1d1e !important" minHeight="383px">
      <StyledMainTitle>
        <StyledTopBorder />
        <Typography>A კატეგორიის საგზურში შედის</Typography>
      </StyledMainTitle>
      {custom
        ? travelData
            .filter((item, index) => index !== 2)
            .map((item) => {
              return (
                <Box px={1} py={0.5}>
                  <Box
                    display="flex"
                    alignItems="center"
                    bgcolor="#171718"
                    p={1}
                    borderRadius="10px"
                  >
                    <img src={item.url} alt="icon" />
                    <Typography fontSize="14px" ml={1.5}>
                      {item.title}
                    </Typography>
                  </Box>
                </Box>
              );
            })
        : travelData.map((item) => {
            return (
              <Box px={1} py={0.5}>
                <Box
                  display="flex"
                  alignItems="center"
                  bgcolor="#171718"
                  p={1}
                  borderRadius="10px"
                >
                  <img src={item.url} alt="icon" />
                  <Typography fontSize="14px" ml={1.5}>
                    {item.title}
                  </Typography>
                </Box>
              </Box>
            );
          })}
    </StyledMainCard>
  );
};

export default ACategoryTravelCard;
