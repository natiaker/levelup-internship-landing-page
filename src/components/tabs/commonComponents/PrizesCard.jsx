import React from "react";
import { StyledCard } from "../../../styles/ContentCardStyles";
import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";

const CardItem = styled(Box)(({ theme }) =>
  theme.unstable_sx({
    backgroundColor: { xs: "#2C3234", sm: "#202324" },
    borderTopLeftRadius: "12px",
    borderTopRightRadius: "12px",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    height: "72px",
    borderRadius: "12px",
    marginBottom: "10px",
    img: {
      width: { xs: "35px", sm: "40px" },
      height: { xs: "35px", sm: "40px" },
      marginRight: "16px",
      marginLeft: "16px",
    },
  })
);

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
          alt="travel-icon"
        />
        <Typography sx={{ fontSize: { xs: "13px", sm: "16px" } }}>
          The Festival in Malta-ს საგზური
        </Typography>
      </CardItem>
      <CardItem>
        <StyledBorder />
        <img
          src={process.env.PUBLIC_URL + "/assets/ticket-icon-sm.png"}
          alt="ticket-icon"
        />
        <Typography sx={{ fontSize: { xs: "13px", sm: "16px" } }}>
          სპეციალური ტურნირის „Cashgame Sharks” ბილეთი, სადაც გათამაშდება The
          Festival in Malta-ს საგზური
        </Typography>
      </CardItem>
      <CardItem>
        <StyledBorder />
        <CardGiftcardIcon
          sx={{
            width: { xs: "35px", sm: "40px" },
            height: { xs: "35px", sm: "40px" },
            marginRight: "16px",
            marginLeft: "16px",
          }}
        />
        <Typography sx={{ fontSize: { xs: "13px", sm: "16px" } }}>
          ტექნიკის მაღაზიის ვაუჩერი
        </Typography>
      </CardItem>
    </StyledCard>
  );
};

export default PrizesCard;
