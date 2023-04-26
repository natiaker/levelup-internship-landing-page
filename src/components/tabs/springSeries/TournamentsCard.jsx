import React from "react";
import {
  StyledMainCard,
  StyledMainTitle,
  StyledTopBorder,
} from "../../../styles/ContentCardStyles";
import { Box, Button, CardContent, Typography } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import styled from "@emotion/styled";

const ClockBorder = styled(Box)(({ theme }) =>
  theme.unstable_sx({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "2px solid #F05A22",
    boxShadow: "#F05A22 0 0 12px",
    borderRadius: "10px",
    maxWidth: "200px",
    height: "32px",
    marginTop: "20px",
    marginBottom: "20px",
  })
);

const ClockBg = styled(Box)(({ theme }) =>
  theme.unstable_sx({
    height: "32px",
    width: "36px",
    bgcolor: "background.active",
    borderTopRightRadius: "15px",
    borderTopLeftRadius: "5px",
    borderBottomRightRadius: "15px",
    borderBottomLeftRadius: "5px",
  })
);

const TournamentsCard = () => {
  return (
    <StyledMainCard position="relative">
      <StyledMainTitle>
        <StyledTopBorder />
        <Typography fontSize={{ xs: "16px", sm: "18px" }} fontWeight="900">
          ᲢᲣᲠᲜᲘᲠᲔᲑᲘ ᲓᲐ ᲡᲐᲢᲔᲚᲘᲢᲔᲑᲘ
        </Typography>
      </StyledMainTitle>
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography fontWeight="900" textAlign="center">
          სერიის ფარგლებში, ყოველდღიურად გაიმართება 3 ივენთი:
        </Typography>
        <ClockBorder>
          <ClockBg>
            <AccessTimeIcon sx={{ paddingLeft: "5px" }} />
          </ClockBg>
          <Typography fontSize="13px" marginLeft="20px" marginRight="20px">
            19:00 / 19:30 / 20:00
          </Typography>
        </ClockBorder>
        <Typography fontSize="13px" textAlign="center" mb={1}>
          * ყველა ტურნირზე მოხვედრა შესაძლებელია 0 ლარიდან.
        </Typography>
        <Typography maxWidth="380px" fontSize="13px" textAlign="center">
          ტურნირების სრული განრიგის სანახავად გადადი პოკერის ლობიში
        </Typography>
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: "space-between",
            height: { xs: "82px", md: "unset" },
          }}
        >
          <img
            src={process.env.PUBLIC_URL + "/assets/promo-left-img.png"}
            alt="promo-left"
          />
          <img
            src={process.env.PUBLIC_URL + "/assets/promo-right-img.png"}
            alt="promo-right"
          />
        </Box>
        <Button
          variant="contained"
          sx={{
            bgcolor: "background.active",
            mt: 2,
            cursor: "pointer",
            "&:hover": { bgcolor: "background.active" },
          }}
        >
          პოკერის ლობი
        </Button>
      </CardContent>
    </StyledMainCard>
  );
};

export default TournamentsCard;
