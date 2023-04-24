import React from "react";
import { Box, Typography } from "@mui/material";
import { StyledTopBorder } from "../styles/ContentCardStyles";

const SideLeaderboardCard = () => {
  return (
    <Box
      sx={{
        minHeight: "125px",
        marginTop: "20px",
        backgroundColor: "#25292B",
        padding: "0px 120px 5px",
        marginBottom: "55px",
        borderRadius: "20px",
        textAlign: "center",
      }}
    >
      <StyledTopBorder />
      <Typography sx={{ fontSize: "18px" }}>
        ᲓᲐᲛᲐᲢᲔᲑᲘᲗ ᲨᲔᲓᲒᲔᲑᲐ, ᲥᲔᲨᲒᲔᲘᲛᲘᲡ, ᲢᲣᲠᲜᲘᲠᲔᲑᲘᲡ ᲓᲐ ᲡᲞᲘᲜ ᲞᲝᲙᲔᲠᲘᲡ 12 SIDE
        ᲚᲘᲓᲔᲠᲑᲝᲠᲓᲘ
      </Typography>
      <Typography
        variant='body1'
        mt={1}
        sx={{ fontSize: "14px" }}
      >
        * Side ლიდერბორდების შესახებ დეტალური ინფორმაცია იხილეთ პოკერის ლობიში.
      </Typography>
    </Box>
  );
};

export default SideLeaderboardCard;
