import React from "react";
import { StyledMainCard } from "../../../styles/ContentCardStyles";
import { Box, Typography } from "@mui/material";

const EverydayTournaments = () => {
  return (
    <StyledMainCard
      borderTop="4px solid #25292B !important"
      mt={3}
      px={{ xs: 1, sm: 3 }}
      bgcolor={{ xs: "transparent  !important", sm: "#171718 !important" }}
      border={{ xs: "none !important", sm: "4px solid #25292B !important" }}
    >
      <Typography
        marginBottom="20px"
        textAlign={{ xs: "left", sm: "center" }}
        my={3}
        fontSize={{ xs: "14px", sm: "16px" }}
      >
        ᲧᲝᲕᲔᲚᲓᲦᲘᲣᲠᲘ ᲢᲣᲠᲜᲘᲠᲔᲑᲘ ᲓᲐ ᲡᲐᲢᲔᲚᲘᲢᲔᲑᲘ
      </Typography>
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="space-between"
        flexDirection={{ xs: "column", sm: "row" }}
      >
        <Box position="relative" width={{ xs: "100%", md: "49%" }}>
          <img
            src={process.env.PUBLIC_URL + "/assets/tournament-bg.png"}
            alt="card1"
            display="inline-block"
            width="100%"
          />
          <Box
            position="absolute"
            top={{ xs: " 15px" }}
            left={{ xs: "20px" }}
            display="flex"
          >
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
        <Box position="relative" width={{ xs: "100%", md: "49%" }}>
          <img
            src={process.env.PUBLIC_URL + "/assets/tournament-bg.png"}
            alt="card2"
            display="inline-block"
            width="100%"
          />
          <Box
            position="absolute"
            top={{ xs: "20px" }}
            left={{ xs: "20px" }}
            display="flex"
          >
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
        <Box
          position="relative"
          width="100%"
          height={{ xs: "85px", md: "100%" }}
        >
          <img
            src={process.env.PUBLIC_URL + "/assets/main-bg.png"}
            alt="card3"
            width="100%"
            height="100%"
          />
          <Box
            position="absolute"
            top={{ xs: "15px" }}
            left={{ xs: "20px" }}
            display="flex"
          >
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
      <Typography
        mt={2}
        mb={3}
        fontSize="14px"
        textAlign={{ xs: "left", sm: "center" }}
      >
        * სამივე ტურნირის გამარჯვებულები მიიღებენ ბეჭდებს და ფინალურ ეტაპზე, The
        Lord of the Rings ტურნირზე, იბრძოლებენ The Festival in Malta-ს საგზურის
        მისაღებად.
      </Typography>
    </StyledMainCard>
  );
};

export default EverydayTournaments;
