import React from "react";
import { StyledCard } from "../styles/ContentCardStyles";
import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";

const CardItem = styled(Box)({
  backgroundColor: "#202324",
  borderTopLeftRadius: "12px",
  borderTopRightRadius: "12px",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  height: "72px",
  borderRadius: "12px",
  marginBottom: "10px",
  img: {
    width: "40px",
    height: "40px",
    marginRight: "16px",
    marginLeft: "16px",
  },
});

const StyledBorder = styled(Box)(({ theme }) =>
  theme.unstable_sx({
    backgroundColor: "background.active",
    width: "4px",
    height: "47px",
    borderTopRightRadius: "14px",
    borderBottomRightRadius: "14px",
    boxShadow: "#EF5A21 0px 0px 10px",
  })
);

const PrizesCard = () => {
  return (
    <StyledCard>
      <CardItem>
        <StyledBorder />
        <img
          src={process.env.PUBLIC_URL + "/assets/travel-icon-sm.png"}
          alt='travel-icon'
        />
        <Typography>The Festival in Malta-ს საგზური</Typography>
      </CardItem>
      <CardItem>
        <StyledBorder />
        <img
          src={process.env.PUBLIC_URL + "/assets/ticket-icon-sm.png"}
          alt='ticket-icon'
        />
        <Typography sx={{ maxWidth: "600px" }}>
          სპეციალური ტურნირის „Cashgame Sharks” ბილეთი, სადაც გათამაშდება The
          Festival in Malta-ს საგზური
        </Typography>
      </CardItem>
      <CardItem>
        <StyledBorder />
        <CardGiftcardIcon
          sx={{
            width: "40px",
            height: "40px",
            marginRight: "16px",
            marginLeft: "16px",
          }}
        />
        <Typography>ტექნიკის მაღაზიის ვაუჩერი</Typography>
      </CardItem>
    </StyledCard>
  );
};

export default PrizesCard;
