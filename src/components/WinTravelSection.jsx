import React from "react";
import {
  StyledMainCard,
  StyledMainTitle,
  StyledTopBorder,
} from "../styles/ContentCardStyles";
import { Box, Typography } from "@mui/material";

const boxStyle = {
  bgcolor: "#1E2122",
  display: "flex",
  minWidth: "395px",
  width: "100%",
  justifyContent: "space-between",
  minHeight: "97px",
  marginTop: "20px",
  borderRadius: "12px",
  paddingRight: "14px",
  boxSizing: "border-box",
};

const WinTravelSection = () => {
  return (
    <StyledMainCard mt={3}>
      <StyledMainTitle>
        <StyledTopBorder />
        <Typography>ᲛᲝᲘᲒᲔ ᲡᲐᲒᲖᲣᲠᲘ 30 ᲐᲞᲠᲘᲚᲘᲡ ᲤᲘᲜᲐᲚᲣᲠ ᲢᲣᲠᲜᲘᲠᲔᲑᲖᲔ</Typography>
      </StyledMainTitle>
      <Box display="flex" justifyContent="space-between" px={3} gap="16px">
        <Box>
          {[
            "“Cashgame Highrollers” -",
            "„Cashgame Grinders” -",
            "„Tournament Sharks“ -",
          ].map((card) => {
            return (
              <Box sx={boxStyle}>
                <Box p={3}>
                  <Typography>{card}</Typography>
                  <Typography>1 საგზური</Typography>
                </Box>
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "./assets/poker-item-1-ticket-icon.png"
                  }
                  alt="ticket"
                  width="79px"
                  height="41px"
                />
              </Box>
            );
          })}
        </Box>
        <Box>
          <Box
            sx={{
              bgcolor: "#1E2122",
              display: "flex",
              justifyContent: "space-between",
              height: "155px",
              marginTop: "20px",
              borderRadius: "12px",
              position: "relative",
            }}
          >
            <Box p={3}>
              <Typography>„The Festival in Malta, GTD“</Typography>
              <Typography fontSize="14px">A კატეგორიის 1 საგზური</Typography>
              <Typography fontSize="14px">B კატეგორიის 1 საგზური</Typography>
              <Typography fontSize="14px" mt={1}>
                ტურნირში მონაწილეობის მიღება შეუძლია ნებისმიერ მსურველს 165₾
                ბაი-ინის გადახდით.
              </Typography>
            </Box>
            <img
              src={
                process.env.PUBLIC_URL + "./assets/poker-item-2-ticket-icon.png"
              }
              alt="ticket"
              width="79px"
              height="41px"
              style={{ position: "absolute", right: "14px" }}
            />
          </Box>
          <Box
            sx={{
              bgcolor: "#1E2122",
              display: "flex",
              justifyContent: "space-between",
              height: "155px",
              marginTop: "20px",
              borderRadius: "12px",
              position: "relative",
            }}
          >
            <Box p={3}>
              <Typography>„The Lord of the Rings“</Typography>
              <Typography fontSize="14px" mb={1}>
                C კატეგორიის 1 საგზური
              </Typography>
              <Typography fontSize="14px" mt={2}>
                ტურნირში მონაწილეობის მიღება შეუძლია ნებისმიერ მსურველს 165₾
                ბაი-ინის გადახდით.
              </Typography>
            </Box>
            <img
              src={
                process.env.PUBLIC_URL + "./assets/poker-item-1-ticket-icon.png"
              }
              alt="ticket"
              width="79px"
              height="41px"
              style={{ position: "absolute", right: "14px" }}
            />
          </Box>
        </Box>
      </Box>
      <Typography
        fontSize="14px"
        textAlign="center"
        marginTop="20px"
        marginBottom="12px"
        px={11}
      >
        * თუ მოთამაშე მოიგებს ბეჭედს ორჯერ ან მეტჯერ, ის The Lord of the Rings
        ტურნირზემოხვდება ბეჭდების შესაბამისი რაოდენობის სტეკით
      </Typography>
      <Typography
        fontSize="14px"
        textAlign="center"
        marginBottom="20px"
        px={11}
      >
        *ტურნირში მონაწილეობის მიღება შეუძლია ნებისმიერ მსურველს 165₾-იანი
        ბაი-ინის გადახდით.
      </Typography>
    </StyledMainCard>
  );
};

export default WinTravelSection;
