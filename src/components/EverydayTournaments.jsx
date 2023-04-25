import React from "react";
import { StyledMainCard } from "../styles/ContentCardStyles";
import { Box, Typography } from "@mui/material";

const EverydayTournaments = () => {
  return (
    <StyledMainCard borderTop="4px solid #25292B !important" mt={3} px={3}>
      <Typography marginBottom="20px" textAlign="center" my={3}>
        ᲧᲝᲕᲔᲚᲓᲦᲘᲣᲠᲘ ᲢᲣᲠᲜᲘᲠᲔᲑᲘ ᲓᲐ ᲡᲐᲢᲔᲚᲘᲢᲔᲑᲘ
      </Typography>
      <Box display="flex" flexWrap="wrap">
        <Box position="relative" mr={1}>
          <img
            src={process.env.PUBLIC_URL + "./assets/tournament-bg.png"}
            alt="card1"
            display="inline-block"
          />
          <Box position="absolute" top="30px" left="30px" display="flex">
            <Box marginRight="40px">
              <Typography fontSize="14px" fontWeight="bold">
                Holdem Highrollers
              </Typography>
              <Typography color="#FFBE00" fontSize="24px">
                50 000 ₾
              </Typography>
            </Box>
            <Box>
              <Typography fontSize="14px" fontWeight="200" mb={1}>
                ბაი-ინი - 550₾
              </Typography>
              <Box
                bgcolor="#B78648"
                borderRadius="15px 15px 0 15px"
                width="120px"
                height="25px"
              >
                <Typography fontSize="14px" textAlign="center">
                  27 აპრილი
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box position="relative" float="right">
          <img
            src={process.env.PUBLIC_URL + "./assets/tournament-bg.png"}
            alt="card1"
            display="inline-block"
          />
          <Box position="absolute" top="30px" left="30px" display="flex">
            <Box marginRight="40px">
              <Typography fontSize="14px" fontWeight="bold">
                Omaha Highrollers
              </Typography>
              <Typography color="#FFBE00" fontSize="24px">
                50 000 ₾
              </Typography>
            </Box>
            <Box>
              <Typography fontSize="14px" fontWeight="200" mb={1}>
                ბაი-ინი - 550₾
              </Typography>
              <Box
                bgcolor="#B78648"
                borderRadius="15px 15px 0 15px"
                width="120px"
                height="25px"
              >
                <Typography fontSize="14px" textAlign="center">
                  28 აპრილი
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box position="relative">
          <img
            src={process.env.PUBLIC_URL + "./assets/main-bg.png"}
            alt="card1"
          />
          <Box position="absolute" top="30px" left="30%" display="flex">
            <Box marginRight="40px">
              <Typography fontSize="14px" fontWeight="bold">
                Holdem Highrollers
              </Typography>
              <Typography color="#FFBE00" fontSize="24px">
                150 000 ₾
              </Typography>
            </Box>
            <Box>
              <Typography fontSize="14px" fontWeight="200" mb={1}>
                ბაი-ინი - 550₾
              </Typography>
              <Box
                bgcolor="#D7C860"
                borderRadius="15px 15px 0 15px"
                width="120px"
                height="25px"
              >
                <Typography fontSize="14px" textAlign="center">
                  29 აპრილი
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </StyledMainCard>
  );
};

export default EverydayTournaments;
