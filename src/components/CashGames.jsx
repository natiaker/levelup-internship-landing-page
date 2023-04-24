import React from "react";
import { Box, Card, CardContent, CardHeader, Typography } from "@mui/material";
import HoldemTop20Card from "./HoldemTop20Card";
import PrizesCard from "./PrizesCard";

const CashGames = ({ title }) => {
  return (
    <Card
      variant='outlined'
      sx={{
        bgcolor: "background.default",
        borderTopLeftRadius: "15px",
        borderTopRightRadius: "15px",
        border: "4px solid #25292B",
      }}
    >
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
        <PrizesCard />
      </CardContent>
    </Card>
  );
};

export default CashGames;
