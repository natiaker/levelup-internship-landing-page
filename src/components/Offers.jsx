import { Box, Typography } from "@mui/material";
import React from "react";
import { offerCardsData } from "../offerCardsData";

const Offers = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "no-wrap",
        overflowX: "scroll",
        overflowY: "hidden",
        marginBottom: "150px",
      }}
    >
      {offerCardsData.map(offer => {
        const { id, title, paragraph, src } = offer;
        return (
          <Box
            key={id}
            position='relative'
            marginRight='16px'
          >
            <img
              src={src}
              alt='card1'
            />
            <Box
              position='absolute'
              top='160px'
              left='20px'
              right='30px'
            >
              <Typography
                fontSize='14px'
                fontWeight='bold'
                mb={1}
              >
                {title}
              </Typography>
              <Typography
                fontSize='14px'
                fontWeight='200'
              >
                {paragraph}
              </Typography>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default Offers;
