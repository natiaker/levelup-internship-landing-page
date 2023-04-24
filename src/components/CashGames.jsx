import React from "react";
import { Box, CardContent, CardHeader, Typography } from "@mui/material";
import { StyledCard } from "../styles/ContentCardStyles";
import HoldemTop20Card from "./HoldemTop20Card";

const CashGames = ({ title }) => {
  return (
    <StyledCard variant='outlined'>
      <CardHeader
        title={title}
        sx={{
          bgcolor: "#25292B",
          textAlign: "center",
          height: "70px",
          fontSize: "18px",
        }}
      />
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          <Typography sx={{ marginRight: "12px" }}>
            ჰოლდემის TOP20 ლიდერბორდი
          </Typography>
          <img
            src={process.env.PUBLIC_URL + "/assets/example-icon.png"}
            alt='info'
          />
        </Box>
        <HoldemTop20Card />
      </CardContent>
    </StyledCard>
  );
};

export default CashGames;
