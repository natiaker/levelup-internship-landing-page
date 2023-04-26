import React from "react";
import {
  StyledMainCard,
  StyledMainTitle,
  StyledTopBorder,
} from "../styles/ContentCardStyles";
import { Box, Typography } from "@mui/material";
import SingleMysticalKey from "./SingleMysticalKey";
import { mysticalKeyData } from "../mysticalKeyData";

const boardStyle = {
  bgcolor: { xs: "transparent", md: "#1E2122" },
  m: { xs: 2, md: 3 },
  padding: { xs: "0", md: "22px" },
  borderRadius: "12px",
  height: "390px",
  overflowY: "scroll",
  "&::-webkit-scrollbar": {
    width: "4px",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "background.active",
    borderRadius: "50px",
  },
  "&::-webkit-scrollbar-track": {
    background: "2C3234",
  },
};

const MysticalKey = () => {
  return (
    <StyledMainCard mt={3}>
      <StyledMainTitle marginBottom="20px">
        <StyledTopBorder />
        <img
          src={process.env.PUBLIC_URL + "/assets/mystical-key.png"}
          alt="mystical-key"
          width="65%"
          height="40px"
        />
      </StyledMainTitle>
      <Typography
        textAlign="center"
        fontSize="14px"
        marginY="20px"
        p={{ xs: 0, md: 3 }}
      >
        მოთამაშეები გარკვეული საპრიზო ადგილების დაკავების შემთხვევაში მიიღებენ
        საიდუმლო გასაღებს
      </Typography>
      <Box sx={boardStyle}>
        {mysticalKeyData.map((item) => {
          return (
            <SingleMysticalKey
              key={item.place}
              place={item.place}
              mysticalKey={item.mysticalKey}
            />
          );
        })}
      </Box>
    </StyledMainCard>
  );
};

export default MysticalKey;
